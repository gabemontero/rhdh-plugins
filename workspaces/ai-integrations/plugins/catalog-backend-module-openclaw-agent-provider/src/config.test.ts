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

import { ConfigReader } from '@backstage/config';
import type { JsonObject } from '@backstage/types';

import {
  DEFAULT_OPENCLAW_AGENT_PROVIDER_SCHEDULE,
  readOpenClawAgentProviderConfigs,
} from './config';

function readConfig(instance: JsonObject) {
  return readOpenClawAgentProviderConfigs(
    new ConfigReader({
      catalog: {
        providers: {
          openclawAgentProvider: {
            development: instance,
          },
        },
      },
    }),
  );
}

function enabledInstance(overrides: JsonObject = {}): JsonObject {
  return {
    occApiBaseUrl: 'https://occ.example.com/control/api/',
    serviceKey: 'test-service-key',
    defaultOwner: 'group:default/ai-platform',
    defaultLifecycle: 'production',
    ...overrides,
  };
}

describe('readOpenClawAgentProviderConfigs', () => {
  it('returns no instances when the provider config is absent', () => {
    expect(readOpenClawAgentProviderConfigs(new ConfigReader({}))).toEqual([]);
  });

  it('normalizes endpoint settings and applies defaults', () => {
    expect(readConfig(enabledInstance())).toEqual([
      expect.objectContaining({
        id: 'development',
        enabled: true,
        occApiBaseUrl: 'https://occ.example.com/control/api',
        serviceKey: 'test-service-key',
        namespaceName: 'default',
        catalogNamespace: 'default',
        defaultOwner: 'group:default/ai-platform',
        defaultLifecycle: 'production',
        schedule: DEFAULT_OPENCLAW_AGENT_PROVIDER_SCHEDULE,
      }),
    ]);
  });

  it('honors an explicitly configured schedule and initial delay', () => {
    const [provider] = readConfig(
      enabledInstance({
        schedule: {
          frequency: { minutes: 5 },
          timeout: { seconds: 90 },
          initialDelay: { seconds: 15 },
        },
      }),
    );

    expect(provider).toMatchObject({
      schedule: {
        frequency: { minutes: 5 },
        timeout: { seconds: 90 },
        initialDelay: { seconds: 15 },
      },
    });
  });

  it('accepts a manual-trigger schedule', () => {
    const [provider] = readConfig(
      enabledInstance({
        schedule: {
          frequency: { trigger: 'manual' },
          timeout: { minutes: 10 },
        },
      }),
    );

    expect(provider).toMatchObject({
      schedule: {
        frequency: { trigger: 'manual' },
        timeout: { minutes: 10 },
      },
    });
  });

  it.each(['occApiBaseUrl', 'serviceKey', 'defaultOwner', 'defaultLifecycle'])(
    'requires %s when enabled',
    key => {
      const instance = enabledInstance();
      delete instance[key];

      expect(() => readConfig(instance)).toThrow(
        `${key} is required when enabled`,
      );
    },
  );

  it('does not read blank OCC settings or require catalog fields when disabled', () => {
    expect(
      readConfig({
        enabled: false,
        occApiBaseUrl: '',
        serviceKey: '',
        defaultOwner: '',
        defaultLifecycle: '',
        schedule: { frequency: {} },
      }),
    ).toEqual([{ id: 'development', enabled: false }]);
  });

  it('validates the native-admin domain as a hostname', () => {
    const [provider] = readConfig(
      enabledInstance({ nativeAdminDomain: 'OCE.example.com' }),
    );
    expect(provider).toMatchObject({
      nativeAdminDomain: 'oce.example.com',
    });

    for (const nativeAdminDomain of [
      'https://oce.example.com',
      'oce.example.com:8443',
      'oce.example.com/path',
      'oce example.com',
    ]) {
      expect(() => readConfig(enabledInstance({ nativeAdminDomain }))).toThrow(
        /nativeAdminDomain must be a valid hostname/,
      );
    }
  });
});
