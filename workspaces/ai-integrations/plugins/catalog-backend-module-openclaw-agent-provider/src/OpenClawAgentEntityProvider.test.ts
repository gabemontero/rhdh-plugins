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
import type { EntityProviderConnection } from '@backstage/plugin-catalog-node';

import { mapOpenClawAgent } from './agent-mapper';
import { OpenClawAgentEntityProvider } from './OpenClawAgentEntityProvider';
import type { EnabledOpenClawAgentProviderConfig } from './config';
import type { OpenClawAgentClient } from './OpenClawAgentEntityProvider';
import type {
  ValidatedOccAgent,
  ValidatedOccNamespace,
} from './occ-response-validation';
import { OccResponseValidationError } from './occ-response-validation';

const namespaceId = 'ns_01234567-89ab-4def-8123-456789abcdef';
const agentId = 'agt_01234567-89ab-4def-8123-456789abcdef';
const installationId = 'ins_01234567-89ab-4def-8123-456789abcdef';

const config: EnabledOpenClawAgentProviderConfig = {
  id: 'staging',
  enabled: true,
  occApiBaseUrl: 'https://occ.example.test/api/occ',
  serviceKey: 'secret-service-key',
  namespaceName: 'default',
  catalogNamespace: 'default',
  defaultOwner: 'group:ai-platform',
  defaultLifecycle: 'production',
  schedule: { frequency: { seconds: 600 }, timeout: { seconds: 600 } },
};

function namespace(
  overrides: Partial<ValidatedOccNamespace> = {},
): ValidatedOccNamespace {
  return {
    id: namespaceId,
    name: 'default',
    status: 'ready',
    ...overrides,
  };
}

function agent(overrides: Partial<ValidatedOccAgent> = {}): ValidatedOccAgent {
  return {
    id: agentId,
    namespaceId,
    name: 'Support Router',
    status: 'active',
    desiredRuntimeState: 'running',
    executionMode: 'embedded',
    ...overrides,
  };
}

function createHarness(clientOverrides: Partial<OpenClawAgentClient> = {}) {
  const client: OpenClawAgentClient = {
    getNamespaces: jest.fn().mockResolvedValue([namespace()]),
    getAgents: jest.fn().mockResolvedValue([agent()]),
    getInstallationId: jest.fn().mockResolvedValue(installationId),
    ...clientOverrides,
  };
  const applyMutation = jest.fn().mockResolvedValue(undefined);
  const connection = { applyMutation } as unknown as EntityProviderConnection;
  const logger = {
    child: jest.fn().mockReturnThis(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    debug: jest.fn(),
  } as unknown as LoggerService;
  const taskRunner = {
    run: jest.fn().mockResolvedValue(undefined),
  } as unknown as SchedulerServiceTaskRunner;
  const provider = new OpenClawAgentEntityProvider({
    config,
    client,
    logger,
    taskRunner,
  });

  return { client, applyMutation, connection, logger, taskRunner, provider };
}

describe('OpenClawAgentEntityProvider', () => {
  it('resolves the configured namespace each refresh and applies one scoped full snapshot', async () => {
    const harness = createHarness({
      getNamespaces: jest.fn().mockResolvedValue([
        namespace({
          id: 'ns_aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
          name: 'other',
        }),
        namespace(),
      ]),
    });
    await harness.provider.connect(harness.connection);

    await harness.provider.refresh();

    expect(harness.client.getAgents).toHaveBeenCalledWith(namespaceId);
    expect(harness.applyMutation).toHaveBeenCalledTimes(1);
    expect(harness.applyMutation).toHaveBeenCalledWith({
      type: 'full',
      entities: [
        expect.objectContaining({
          locationKey: 'OpenClawAgentProvider:staging',
          entity: expect.objectContaining({
            kind: 'AiResource',
            spec: {
              type: 'agent',
              owner: 'group:ai-platform',
              lifecycle: 'production',
            },
          }),
        }),
      ],
    });
  });

  it.each([
    ['no exact namespace match', []],
    ['duplicate exact namespace matches', [namespace(), namespace()]],
    ['non-ready exact namespace', [namespace({ status: 'provisioning' })]],
  ])('preserves the snapshot for %s', async (_description, namespaces) => {
    const harness = createHarness({
      getNamespaces: jest.fn().mockResolvedValue(namespaces),
    });
    await harness.provider.connect(harness.connection);

    await expect(harness.provider.refresh()).rejects.toThrow();
    expect(harness.client.getAgents).not.toHaveBeenCalled();
    expect(harness.applyMutation).not.toHaveBeenCalled();
  });

  it('does not mutate after a failed required request and recovers on the next complete snapshot', async () => {
    const getAgents = jest
      .fn()
      .mockRejectedValueOnce(new Error('secret-service-key must not be logged'))
      .mockResolvedValueOnce([agent()]);
    const harness = createHarness({ getAgents });
    await harness.provider.connect(harness.connection);

    await expect(harness.provider.refresh()).rejects.toThrow();
    expect(harness.applyMutation).not.toHaveBeenCalled();
    await harness.provider.refresh();
    expect(harness.applyMutation).toHaveBeenCalledTimes(1);
    expect(harness.logger.error).not.toHaveBeenCalledWith(
      expect.stringContaining('secret-service-key'),
    );
  });

  it('logs safe OCC validation details for a scheduled refresh failure', async () => {
    const harness = createHarness({
      getAgents: jest
        .fn()
        .mockRejectedValue(new OccResponseValidationError('agent')),
    });
    await harness.provider.connect(harness.connection);

    const scheduledTask = (harness.taskRunner.run as unknown as jest.Mock).mock
      .calls[0][0];
    await scheduledTask.fn();

    expect(harness.logger.error).toHaveBeenCalledWith(
      expect.stringContaining('OCC agent response is invalid'),
    );
    expect(harness.logger.error).not.toHaveBeenCalledWith(
      expect.stringContaining('secret-service-key'),
    );
  });

  it('does not apply a partial mutation when candidate catalog references repeat', async () => {
    const harness = createHarness({
      getAgents: jest.fn().mockResolvedValue([agent(), agent()]),
    });
    await harness.provider.connect(harness.connection);

    await expect(harness.provider.refresh()).rejects.toThrow(
      /duplicate catalog entity references/,
    );
    expect(harness.applyMutation).not.toHaveBeenCalled();
  });

  it('preserves the last good snapshot when a later refresh fails', async () => {
    const getAgents = jest
      .fn()
      .mockResolvedValueOnce([agent()])
      .mockRejectedValueOnce(new Error('OCC unavailable'));
    const harness = createHarness({ getAgents });
    await harness.provider.connect(harness.connection);

    await harness.provider.refresh();
    expect(harness.applyMutation).toHaveBeenCalledTimes(1);

    await expect(harness.provider.refresh()).rejects.toThrow();
    expect(harness.applyMutation).toHaveBeenCalledTimes(1);
  });

  it('allows a confirmed empty agent list to remove this provider instance snapshot', async () => {
    const harness = createHarness({
      getAgents: jest.fn().mockResolvedValue([]),
    });
    await harness.provider.connect(harness.connection);

    await harness.provider.refresh();

    expect(harness.applyMutation).toHaveBeenCalledWith({
      type: 'full',
      entities: [],
    });
  });

  it('uses independent provider names and locations for independent instances', async () => {
    const first = createHarness();
    const second = createHarness();
    const secondProvider = new OpenClawAgentEntityProvider({
      config: { ...config, id: 'production' },
      client: second.client,
      logger: second.logger,
      taskRunner: second.taskRunner,
    });
    await first.provider.connect(first.connection);
    await secondProvider.connect(second.connection);
    await first.provider.refresh();
    await secondProvider.refresh();

    expect(first.provider.getProviderName()).toBe(
      'OpenClawAgentProvider:staging',
    );
    expect(secondProvider.getProviderName()).toBe(
      'OpenClawAgentProvider:production',
    );
    expect(
      first.applyMutation.mock.calls[0][0].entities[0].locationKey,
    ).not.toBe(second.applyMutation.mock.calls[0][0].entities[0].locationKey);
    expect(
      first.applyMutation.mock.calls[0][0].entities[0].entity.metadata.name,
    ).not.toBe(
      second.applyMutation.mock.calls[0][0].entities[0].entity.metadata.name,
    );
  });

  it('leaves a cross-location entity-reference conflict to catalog ownership handling', async () => {
    const harness = createHarness();
    const foreignLocationKey = 'OtherProvider:source';
    const foreignOwnedEntity = mapOpenClawAgent(agent(), {
      providerId: config.id,
      catalogNamespace: config.catalogNamespace,
      occApiBaseUrl: config.occApiBaseUrl,
      defaultOwner: config.defaultOwner,
      defaultLifecycle: config.defaultLifecycle,
    });
    await harness.provider.connect(harness.connection);

    await harness.provider.refresh();

    const mutation = harness.applyMutation.mock.calls[0][0];
    expect(mutation.type).toBe('full');
    expect(mutation.entities).toHaveLength(1);
    expect(mutation.entities[0].locationKey).toBe(
      'OpenClawAgentProvider:staging',
    );
    expect(mutation.entities[0].locationKey).not.toBe(foreignLocationKey);
    expect(mutation.entities[0].entity).toMatchObject({
      kind: foreignOwnedEntity.kind,
      metadata: {
        namespace: foreignOwnedEntity.metadata.namespace,
        name: foreignOwnedEntity.metadata.name,
      },
    });
    // applyMutation returns no per-entity ownership result; the provider does
    // not claim to adopt, alter, or report a conflicting foreign entity.
    expect(harness.logger.warn).not.toHaveBeenCalledWith(
      expect.stringContaining('ownership conflict'),
    );
  });

  it('treats installation lookup errors as optional and keeps only the console link', async () => {
    const harness = createHarness({
      getInstallationId: jest
        .fn()
        .mockRejectedValue(new Error('unauthorized with secret-service-key')),
    });
    const linkedConfig = {
      ...config,
      nativeAdminDomain: 'admin.example.test',
    };
    const provider = new OpenClawAgentEntityProvider({
      config: linkedConfig,
      client: harness.client,
      logger: harness.logger,
      taskRunner: harness.taskRunner,
    });
    await provider.connect(harness.connection);

    await provider.refresh();

    const mutation = harness.applyMutation.mock.calls[0][0];
    expect(mutation.entities[0].entity.metadata.links).toEqual([
      {
        url: 'https://occ.example.test/console',
        title: 'OpenClaw console/login',
      },
    ]);
    expect(harness.logger.warn).toHaveBeenCalledWith(
      'OCC installation lookup failed; importing agents without chat links',
    );
  });

  it('cleans up a disabled instance without requiring OCC configuration or scheduling', async () => {
    const applyMutation = jest.fn().mockResolvedValue(undefined);
    const connection = { applyMutation } as unknown as EntityProviderConnection;
    const logger = {
      child: jest.fn().mockReturnThis(),
      info: jest.fn(),
    } as unknown as LoggerService;
    const provider = new OpenClawAgentEntityProvider({
      config: { id: 'staging', enabled: false },
      logger,
    });

    await provider.connect(connection);

    expect(applyMutation).toHaveBeenCalledWith({ type: 'full', entities: [] });
    expect(provider.getProviderName()).toBe('OpenClawAgentProvider:staging');
  });

  it('cleans the old instance ID before the replacement ID owns its snapshot', async () => {
    const oldInstance = createHarness();
    await oldInstance.provider.connect(oldInstance.connection);
    await oldInstance.provider.refresh();
    const oldEntity = oldInstance.applyMutation.mock.calls[0][0].entities[0];

    const cleanupMutation = jest.fn().mockResolvedValue(undefined);
    const oldDisabledProvider = new OpenClawAgentEntityProvider({
      config: { id: 'staging', enabled: false },
      logger: oldInstance.logger,
    });
    await oldDisabledProvider.connect({
      applyMutation: cleanupMutation,
    } as unknown as EntityProviderConnection);

    const replacement = createHarness();
    const replacementProvider = new OpenClawAgentEntityProvider({
      config: { ...config, id: 'staging-v2' },
      client: replacement.client,
      logger: replacement.logger,
      taskRunner: replacement.taskRunner,
    });
    await replacementProvider.connect(replacement.connection);
    await replacementProvider.refresh();
    const replacementEntity =
      replacement.applyMutation.mock.calls[0][0].entities[0];

    expect(cleanupMutation).toHaveBeenCalledWith({
      type: 'full',
      entities: [],
    });
    expect(oldDisabledProvider.getProviderName()).toBe(
      'OpenClawAgentProvider:staging',
    );
    expect(oldEntity.locationKey).toBe('OpenClawAgentProvider:staging');
    expect(replacementEntity.locationKey).toBe(
      'OpenClawAgentProvider:staging-v2',
    );
    expect(replacementEntity.entity.metadata.name).not.toBe(
      oldEntity.entity.metadata.name,
    );
  });
});
