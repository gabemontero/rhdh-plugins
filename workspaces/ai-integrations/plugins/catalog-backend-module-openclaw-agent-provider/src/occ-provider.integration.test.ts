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

import type { LoggerService } from '@backstage/backend-plugin-api';
import type { EntityProviderConnection } from '@backstage/plugin-catalog-node';

import { OpenClawAgentEntityProvider } from './OpenClawAgentEntityProvider';
import { OccClient } from './occ-client';
import type { OccFetch } from './occ-client';
import type { EnabledOpenClawAgentProviderConfig } from './config';

const requestId = 'req_01234567-89ab-4def-8123-456789abcdef';
const namespaceId = 'ns_01234567-89ab-4def-8123-456789abcdef';
const agentId = 'agt_01234567-89ab-4def-8123-456789abcdef';
const configurationId = 'cfg_01234567-89ab-4def-8123-456789abcdef';
const secretKey = 'integration-test-secret';

const config: EnabledOpenClawAgentProviderConfig = {
  id: 'test',
  enabled: true,
  occApiBaseUrl: 'https://occ.example.test/api/occ',
  serviceKey: secretKey,
  namespaceName: 'default',
  catalogNamespace: 'default',
  defaultOwner: 'group:ai-platform',
  defaultLifecycle: 'production',
  schedule: { frequency: { seconds: 600 }, timeout: { seconds: 600 } },
};

function response(data: unknown) {
  return new Response(JSON.stringify({ data, meta: { requestId } }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}

describe('OCC to catalog provider integration', () => {
  it('projects a representative OCC agent response without config or credential fields', async () => {
    const fetchImpl: OccFetch = jest.fn(async request => {
      expect(request.headers.get('x-api-key')).toBe(secretKey);
      const url = new URL(request.url);
      if (url.pathname === '/api/occ/namespaces') {
        return response([
          {
            id: namespaceId,
            name: 'default',
            status: 'ready',
            createdAt: '2025-10-30T14:30:00.000Z',
          },
        ]);
      }
      if (url.pathname === `/api/occ/namespaces/${namespaceId}/agents`) {
        return response([
          {
            id: agentId,
            namespaceId,
            name: 'Support Router',
            servicePrincipalId: 'sp_private_service_principal',
            configurationId,
            backendId: null,
            harnessAuth: {
              method: 'runtime',
              password: 'never-project-this',
            },
            plugins: [{ name: 'private plugin setup' }],
            credentialSources: [{ secretRef: 'private/credential' }],
            executionMode: 'embedded',
            gatewayManagedMode: false,
            desiredRuntimeState: 'running',
            status: 'active',
            createdAt: '2025-10-30T14:30:00.000Z',
          },
        ]);
      }
      throw new Error(`Unexpected OCC URL ${url.pathname}`);
    });

    const client = new OccClient({
      baseUrl: config.occApiBaseUrl,
      serviceKey: config.serviceKey,
      fetchImpl,
    });
    const applyMutation = jest.fn().mockResolvedValue(undefined);
    const connection = { applyMutation } as unknown as EntityProviderConnection;
    const logger = {
      child: jest.fn().mockReturnThis(),
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    } as unknown as LoggerService;
    const provider = new OpenClawAgentEntityProvider({
      config,
      client,
      logger,
      taskRunner: { run: jest.fn() } as never,
    });
    await provider.connect(connection);
    await provider.refresh();

    expect(applyMutation).toHaveBeenCalledTimes(1);
    const serializedMutation = JSON.stringify(applyMutation.mock.calls[0][0]);
    expect(serializedMutation).not.toContain(secretKey);
    expect(serializedMutation).not.toContain('sp_private_service_principal');
    expect(serializedMutation).not.toContain('never-project-this');
    expect(serializedMutation).not.toContain('private plugin setup');
    expect(serializedMutation).not.toContain('private/credential');
    expect(applyMutation.mock.calls[0][0]).toMatchObject({
      type: 'full',
      entities: [
        {
          locationKey: 'OpenClawAgentProvider:test',
          entity: {
            kind: 'AiResource',
            metadata: {
              title: 'Support Router',
              annotations: {
                'backstage.io/managed-by-location':
                  'url:https://occ.example.test/api/occ',
                'backstage.io/managed-by-origin-location':
                  'url:https://occ.example.test/api/occ',
              },
            },
            spec: {
              type: 'agent',
              owner: 'group:ai-platform',
              lifecycle: 'production',
            },
          },
        },
      ],
    });
  });
});
