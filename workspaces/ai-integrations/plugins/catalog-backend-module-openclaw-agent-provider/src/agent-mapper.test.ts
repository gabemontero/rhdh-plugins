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

import { mapOpenClawAgent } from './agent-mapper';
import type { ValidatedOccAgent } from './occ-response-validation';

const namespaceId = 'ns_01234567-89ab-4def-8123-456789abcdef';
const agentId = 'agt_01234567-89ab-4def-8123-456789abcdef';
const installationId = 'ins_01234567-89ab-4def-8123-456789abcdef';

const baseOptions = {
  providerId: 'staging',
  catalogNamespace: 'default',
  occApiBaseUrl: 'https://occ.example.test/api/occ///',
  defaultOwner: 'group:ai-platform',
  defaultLifecycle: 'production',
};

function agent(overrides: Partial<ValidatedOccAgent> = {}): ValidatedOccAgent {
  return {
    id: agentId,
    namespaceId,
    name: 'Support Router',
    status: 'active',
    desiredRuntimeState: 'running',
    executionMode: 'embedded',
    activeRevisionId: 'rev_01234567-89ab-4def-8123-456789abcdef',
    ...overrides,
  };
}

describe('mapOpenClawAgent', () => {
  it('uses a deterministic provider-scoped entity identity and title', () => {
    const mapped = mapOpenClawAgent(agent(), baseOptions);
    const expectedHash = createHash('sha256')
      .update(`staging\0${namespaceId}\0${agentId}`)
      .digest('hex')
      .slice(0, 24);

    expect(mapped.metadata.name).toBe(`openclaw-agent-${expectedHash}`);
    expect(mapped.metadata.title).toBe('Support Router');
    expect(mapOpenClawAgent(agent(), baseOptions).metadata.name).toBe(
      mapped.metadata.name,
    );
    expect(
      mapOpenClawAgent(agent({ name: 'Renamed Router' }), baseOptions).metadata
        .name,
    ).toBe(mapped.metadata.name);
  });

  it('distinguishes same-named agents with different IDs', () => {
    const first = mapOpenClawAgent(agent(), baseOptions);
    const second = mapOpenClawAgent(
      agent({ id: 'agt_aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa' }),
      baseOptions,
    );

    expect(first.metadata.title).toBe(second.metadata.title);
    expect(first.metadata.name).not.toBe(second.metadata.name);
  });

  it('uses configured owner and lifecycle and only allowlisted annotations', () => {
    const mapped = mapOpenClawAgent(agent(), baseOptions);

    expect(mapped).toMatchObject({
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'AiResource',
      metadata: {
        namespace: 'default',
        annotations: {
          'rhdh.io/ai-asset-category': 'agent',
          'rhdh.io/ai-asset-source': 'openclaw-enterprise/staging',
          'backstage.io/managed-by-location':
            'url:https://occ.example.test/api/occ',
          'backstage.io/managed-by-origin-location':
            'url:https://occ.example.test/api/occ',
          'rhdh.io/openclaw-enterprise-agent-id': agentId,
          'rhdh.io/openclaw-enterprise-namespace-id': namespaceId,
          'rhdh.io/openclaw-enterprise-status': 'active',
          'rhdh.io/openclaw-enterprise-desired-runtime-state': 'running',
          'rhdh.io/openclaw-enterprise-execution-mode': 'embedded',
          'rhdh.io/openclaw-enterprise-active-revision-id':
            'rev_01234567-89ab-4def-8123-456789abcdef',
        },
      },
      spec: {
        type: 'agent',
        owner: 'group:ai-platform',
        lifecycle: 'production',
      },
    });
    expect(mapped.metadata.annotations).not.toHaveProperty(
      'backstage.io/source-location',
    );
    expect(JSON.stringify(mapped)).not.toMatch(
      /servicePrincipal|harnessAuth|credential|plugins/,
    );
  });

  it('updates runtime annotations without changing configured lifecycle', () => {
    const mapped = mapOpenClawAgent(
      agent({
        status: 'deleting',
        desiredRuntimeState: 'stopped',
        executionMode: 'dedicated',
        activeRevisionId: undefined,
      }),
      baseOptions,
    );

    expect(mapped.spec.lifecycle).toBe('production');
    expect(mapped.metadata.annotations).toMatchObject({
      'rhdh.io/openclaw-enterprise-status': 'deleting',
      'rhdh.io/openclaw-enterprise-desired-runtime-state': 'stopped',
      'rhdh.io/openclaw-enterprise-execution-mode': 'dedicated',
    });
    expect(mapped.metadata.annotations).not.toHaveProperty(
      'rhdh.io/openclaw-enterprise-active-revision-id',
    );
  });

  it('preserves a prefixed managed-by URL and omits trailing slashes', () => {
    const mapped = mapOpenClawAgent(agent(), {
      ...baseOptions,
      occApiBaseUrl: 'https://occ.example.test/custom/base/',
    });
    expect(
      mapped.metadata.annotations?.['backstage.io/managed-by-location'],
    ).toBe('url:https://occ.example.test/custom/base');
    expect(
      mapped.metadata.annotations?.['backstage.io/managed-by-origin-location'],
    ).toBe('url:https://occ.example.test/custom/base');
  });

  it('normalizes an origin-only managed-by URL without adding a slash', () => {
    const mapped = mapOpenClawAgent(agent(), {
      ...baseOptions,
      occApiBaseUrl: 'https://occ.example.test///',
    });
    expect(
      mapped.metadata.annotations?.['backstage.io/managed-by-location'],
    ).toBe('url:https://occ.example.test');
    expect(
      mapped.metadata.annotations?.['backstage.io/managed-by-origin-location'],
    ).toBe('url:https://occ.example.test');
  });

  it('puts the console link before an optional chat link', () => {
    const mapped = mapOpenClawAgent(agent(), {
      ...baseOptions,
      nativeAdminDomain: 'admin.example.test',
      installationId,
    });
    const digest = createHash('sha256')
      .update(`${installationId}\0${namespaceId}\0${agentId}`)
      .digest('hex')
      .slice(0, 32);
    expect(mapped.metadata.links).toEqual([
      {
        url: 'https://occ.example.test/console',
        title: 'OpenClaw console/login',
      },
      {
        url: `https://agent-${digest}.admin.example.test/`,
        title: 'OpenClaw chat (log in via console link above first)',
      },
    ]);

    expect(
      mapOpenClawAgent(agent({ status: 'deleting' }), {
        ...baseOptions,
        nativeAdminDomain: 'admin.example.test',
        installationId,
      }).metadata.links,
    ).toEqual([
      {
        url: 'https://occ.example.test/console',
        title: 'OpenClaw console/login',
      },
    ]);
    expect(
      mapOpenClawAgent(agent(), {
        ...baseOptions,
        nativeAdminDomain: 'admin.example.test',
      }).metadata.links,
    ).toEqual([
      {
        url: 'https://occ.example.test/console',
        title: 'OpenClaw console/login',
      },
    ]);
  });
});
