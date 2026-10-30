/*
 * Copyright Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type {
  LoggerService,
  SchedulerServiceTaskRunner,
} from '@backstage/backend-plugin-api';
import type { Entity } from '@backstage/catalog-model';
import type {
  EntityProvider,
  EntityProviderConnection,
} from '@backstage/plugin-catalog-node';

import { mapOpenClawAgent } from './agent-mapper';
import type {
  EnabledOpenClawAgentProviderConfig,
  OpenClawAgentProviderConfig,
} from './config';
import { OccClient, OccClientError } from './occ-client';
import type {
  ValidatedOccAgent,
  ValidatedOccNamespace,
} from './occ-response-validation';
import { OccResponseValidationError } from './occ-response-validation';

/** OCC operations consumed by one provider instance. */
export interface OpenClawAgentClient {
  getNamespaces(): Promise<ValidatedOccNamespace[]>;
  getAgents(namespaceId: string): Promise<ValidatedOccAgent[]>;
  getInstallationId(): Promise<string>;
}

/** Safe internal marker for a complete snapshot that cannot be projected. */
export class OpenClawSnapshotError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OpenClawSnapshotError';
  }
}

/** Catalog provider for one configured OpenClaw Enterprise namespace. */
export class OpenClawAgentEntityProvider implements EntityProvider {
  private readonly config: OpenClawAgentProviderConfig;
  private readonly logger: LoggerService;
  private readonly taskRunner?: SchedulerServiceTaskRunner;
  private readonly client?: OpenClawAgentClient;
  private connection?: EntityProviderConnection;

  constructor(options: {
    config: OpenClawAgentProviderConfig;
    logger: LoggerService;
    taskRunner?: SchedulerServiceTaskRunner;
    client?: OpenClawAgentClient;
  }) {
    this.config = options.config;
    this.logger = options.logger;
    this.taskRunner = options.taskRunner;
    this.client = options.client;

    if (this.config.enabled && (!this.taskRunner || !this.client)) {
      throw new TypeError(
        'Enabled OpenClaw provider requires a task runner and OCC client',
      );
    }
  }

  getProviderName(): string {
    return `OpenClawAgentProvider:${this.config.id}`;
  }

  async connect(connection: EntityProviderConnection): Promise<void> {
    this.connection = connection;

    if (!this.config.enabled) {
      await connection.applyMutation({ type: 'full', entities: [] });
      this.logger.info('Disabled provider cleanup completed');
      return;
    }

    await this.taskRunner!.run({
      id: `${this.getProviderName()}:refresh`,
      fn: async () => this.runSafely(),
    });
  }

  /** Runs one complete refresh; failures occur before any catalog mutation. */
  async refresh(): Promise<void> {
    if (!this.connection) {
      throw new Error('OpenClaw provider is not connected to the catalog');
    }
    const config = this.config;
    if (!config.enabled || !this.client) {
      throw new Error('OpenClaw provider is disabled');
    }

    const namespaces = await this.client.getNamespaces();
    const matches = namespaces.filter(
      namespace => namespace.name === config.namespaceName,
    );
    if (matches.length !== 1 || matches[0].status !== 'ready') {
      throw new OpenClawSnapshotError(
        'OCC namespace is missing, ambiguous, or not ready',
      );
    }
    const namespace = matches[0];
    const agents = await this.client.getAgents(namespace.id);

    let installationId: string | undefined;
    if (config.nativeAdminDomain) {
      try {
        installationId = await this.client.getInstallationId();
      } catch {
        // Chat links are optional and do not affect an otherwise complete
        // agent snapshot. Never log raw OCC responses or request details.
        this.logger.warn(
          'OCC installation lookup failed; importing agents without chat links',
        );
      }
    }

    const entities = agents.map(agent =>
      mapOpenClawAgent(agent, {
        providerId: config.id,
        catalogNamespace: config.catalogNamespace,
        occApiBaseUrl: config.occApiBaseUrl,
        defaultOwner: config.defaultOwner,
        defaultLifecycle: config.defaultLifecycle,
        nativeAdminDomain: config.nativeAdminDomain,
        installationId,
      }),
    );

    this.validateCandidateReferences(entities);
    await this.connection.applyMutation({
      type: 'full',
      entities: entities.map(entity => ({
        entity,
        locationKey: this.getProviderName(),
      })),
    });
    this.logger.info(
      `OpenClaw agent snapshot submitted (${entities.length} agents)`,
    );
  }

  private async runSafely(): Promise<void> {
    try {
      await this.refresh();
    } catch (error) {
      // Do not include endpoint, headers, response bodies, or config values in
      // logs. These error classes contain only fixed or sanitized messages.
      this.logger.error(
        `OpenClaw agent refresh failed; preserving the last successful catalog snapshot (${safeRefreshFailureDetails(
          error,
        )})`,
      );
    }
  }

  private validateCandidateReferences(entities: Entity[]): void {
    const refs = new Set<string>();
    for (const entity of entities) {
      const namespace = entity.metadata.namespace ?? 'default';
      const ref = `${entity.kind.toLocaleLowerCase(
        'en-US',
      )}:${namespace.toLocaleLowerCase(
        'en-US',
      )}/${entity.metadata.name.toLocaleLowerCase('en-US')}`;
      if (refs.has(ref)) {
        throw new OpenClawSnapshotError(
          'OCC agent snapshot contains duplicate catalog entity references',
        );
      }
      refs.add(ref);
    }
  }
}

function safeRefreshFailureDetails(error: unknown): string {
  if (
    error instanceof OccClientError ||
    error instanceof OccResponseValidationError ||
    error instanceof OpenClawSnapshotError
  ) {
    return error.message;
  }
  return 'unexpected provider error';
}

/** Creates the API client for an enabled config entry. */
export function createOpenClawAgentClient(
  config: EnabledOpenClawAgentProviderConfig,
): OccClient {
  return new OccClient({
    baseUrl: config.occApiBaseUrl,
    serviceKey: config.serviceKey,
  });
}
