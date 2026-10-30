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

import { createHash } from 'node:crypto';

import type { AgentAiResourceEntityV1alpha1 } from '@red-hat-developer-hub/backstage-plugin-catalog-model-ai-resource-agent';

import type { ValidatedOccAgent } from './occ-response-validation';
import { normalizeOccBaseUrl } from './occ-url';

/** Values owned by one provider instance that are added to each entity. */
export interface OpenClawAgentMappingOptions {
  providerId: string;
  catalogNamespace: string;
  occApiBaseUrl: string;
  defaultOwner: string;
  defaultLifecycle: string;
  nativeAdminDomain?: string;
  installationId?: string;
}

/**
 * Maps a validated OCC agent to the typed catalog contract using an explicit
 * allowlist. Configuration and credential-related API fields never reach the
 * resulting entity.
 */
export function mapOpenClawAgent(
  agent: ValidatedOccAgent,
  options: OpenClawAgentMappingOptions,
): AgentAiResourceEntityV1alpha1 {
  const identity = `${options.providerId}\0${agent.namespaceId}\0${agent.id}`;
  const occBaseUrl = normalizeOccBaseUrl(options.occApiBaseUrl);
  const sourceLocation = `url:${occBaseUrl}`;
  const consoleUrl = new URL('/console', occBaseUrl).toString();
  const links: { url: string; title: string }[] = [
    {
      url: consoleUrl,
      title: 'OpenClaw console/login',
    },
  ];
  const annotations: Record<string, string> = {
    'rhdh.io/ai-asset-category': 'agent',
    'rhdh.io/ai-asset-source': `openclaw-enterprise/${options.providerId}`,
    'backstage.io/managed-by-location': sourceLocation,
    'backstage.io/managed-by-origin-location': sourceLocation,
    'rhdh.io/openclaw-enterprise-agent-id': agent.id,
    'rhdh.io/openclaw-enterprise-namespace-id': agent.namespaceId,
    'rhdh.io/openclaw-enterprise-status': agent.status,
    'rhdh.io/openclaw-enterprise-desired-runtime-state':
      agent.desiredRuntimeState,
    'rhdh.io/openclaw-enterprise-execution-mode': agent.executionMode,
  };

  if (agent.activeRevisionId !== undefined) {
    annotations['rhdh.io/openclaw-enterprise-active-revision-id'] =
      agent.activeRevisionId;
  }

  const entity: AgentAiResourceEntityV1alpha1 = {
    apiVersion: 'backstage.io/v1alpha1',
    kind: 'AiResource',
    metadata: {
      name: `openclaw-agent-${sha256(identity).slice(0, 24)}`,
      namespace: options.catalogNamespace,
      title: agent.name,
      annotations,
      links,
    },
    spec: {
      type: 'agent',
      owner: options.defaultOwner,
      lifecycle: options.defaultLifecycle,
    },
  };

  if (
    agent.status === 'active' &&
    options.nativeAdminDomain &&
    options.installationId
  ) {
    links.push({
      url: `https://agent-${sha256(
        `${options.installationId}\0${agent.namespaceId}\0${agent.id}`,
      ).slice(0, 32)}.${options.nativeAdminDomain}/`,
      title: 'OpenClaw chat (log in via console link above first)',
    });
  }

  return entity;
}

function sha256(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}
