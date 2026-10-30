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

import {
  readSchedulerServiceTaskScheduleDefinitionFromConfig,
  type SchedulerServiceTaskScheduleDefinition,
} from '@backstage/backend-plugin-api';
import type { Config } from '@backstage/config';
import { InputError } from '@backstage/errors';

import { normalizeOccBaseUrl } from './occ-url';

const DEFAULT_FREQUENCY_SECONDS = 10 * 60;
const DEFAULT_TIMEOUT_SECONDS = 10 * 60;

/** Default refresh schedule, including an immediate first attempt. */
export const DEFAULT_OPENCLAW_AGENT_PROVIDER_SCHEDULE: SchedulerServiceTaskScheduleDefinition =
  {
    frequency: { seconds: DEFAULT_FREQUENCY_SECONDS },
    timeout: { seconds: DEFAULT_TIMEOUT_SECONDS },
    initialDelay: { seconds: 0 },
  };

/** Configuration for an enabled OCC provider instance. */
export interface EnabledOpenClawAgentProviderConfig {
  id: string;
  enabled: true;
  occApiBaseUrl: string;
  serviceKey: string;
  namespaceName: string;
  catalogNamespace: string;
  defaultOwner: string;
  defaultLifecycle: string;
  nativeAdminDomain?: string;
  schedule: SchedulerServiceTaskScheduleDefinition;
}

/** Configuration for a disabled instance that only performs catalog cleanup. */
export interface DisabledOpenClawAgentProviderConfig {
  id: string;
  enabled: false;
}

/** One keyed OpenClaw provider configuration. */
export type OpenClawAgentProviderConfig =
  | EnabledOpenClawAgentProviderConfig
  | DisabledOpenClawAgentProviderConfig;

/**
 * Reads all configured OpenClaw provider instances.
 *
 * Disabled entries are intentionally short-circuited before reading any
 * endpoint, key, owner, lifecycle, namespace, or schedule values so an
 * operator can clean up entities while those environment variables are empty.
 */
export function readOpenClawAgentProviderConfigs(
  config: Config,
): OpenClawAgentProviderConfig[] {
  const providers = config.getOptionalConfig(
    'catalog.providers.openclawAgentProvider',
  );
  if (!providers) {
    return [];
  }

  return providers
    .keys()
    .map(id => readOpenClawAgentProviderConfig(id, providers.getConfig(id)));
}

function readOpenClawAgentProviderConfig(
  id: string,
  config: Config,
): OpenClawAgentProviderConfig {
  const providerPath = `catalog.providers.openclawAgentProvider.${id}`;
  if (!id.trim() || id !== id.trim() || id === '.' || id === '..') {
    throw new InputError(
      `${providerPath}: provider instance ID must be a non-empty key without surrounding whitespace`,
    );
  }

  const enabled = config.getOptionalBoolean('enabled') ?? true;
  if (!enabled) {
    return { id, enabled: false };
  }

  const occApiBaseUrl = readRequiredString(
    config,
    'occApiBaseUrl',
    providerPath,
  );
  const serviceKey = readRequiredString(config, 'serviceKey', providerPath);
  const defaultOwner = readRequiredString(config, 'defaultOwner', providerPath);
  const defaultLifecycle = readRequiredString(
    config,
    'defaultLifecycle',
    providerPath,
  );

  const namespaceName =
    safeGetOptionalString(config, 'namespaceName')?.trim() || 'default';
  const catalogNamespace =
    safeGetOptionalString(config, 'catalogNamespace')?.trim() || 'default';
  const nativeAdminDomain = safeGetOptionalString(config, 'nativeAdminDomain');

  let normalizedNativeAdminDomain: string | undefined;
  if (nativeAdminDomain !== undefined && nativeAdminDomain.trim() !== '') {
    normalizedNativeAdminDomain = validateNativeAdminDomain(
      nativeAdminDomain.trim(),
      providerPath,
    );
  }

  const schedule = config.has('schedule')
    ? readSchedulerServiceTaskScheduleDefinitionFromConfig(
        config.getConfig('schedule'),
      )
    : DEFAULT_OPENCLAW_AGENT_PROVIDER_SCHEDULE;

  let normalizedOccApiBaseUrl: string;
  try {
    normalizedOccApiBaseUrl = normalizeOccBaseUrl(occApiBaseUrl);
  } catch {
    throw new InputError(
      `${providerPath}: occApiBaseUrl must be an absolute HTTPS URL without credentials, query, or fragment`,
    );
  }

  return {
    id,
    enabled: true,
    occApiBaseUrl: normalizedOccApiBaseUrl,
    serviceKey,
    namespaceName,
    catalogNamespace,
    defaultOwner,
    defaultLifecycle,
    nativeAdminDomain: normalizedNativeAdminDomain,
    schedule,
  };
}

function readRequiredString(
  config: Config,
  key: string,
  providerPath: string,
): string {
  const value = safeGetOptionalString(config, key);
  if (!value || !value.trim()) {
    throw new InputError(`${providerPath}: ${key} is required when enabled`);
  }
  return value.trim();
}

/**
 * ConfigReader throws TypeError for empty-string environment substitutions,
 * so treat those as absent for optional configuration values.
 */
function safeGetOptionalString(
  config: Config,
  key: string,
): string | undefined {
  try {
    return config.getOptionalString(key);
  } catch (error) {
    if (error instanceof TypeError) {
      return undefined;
    }
    throw error;
  }
}

function validateNativeAdminDomain(
  domain: string,
  providerPath: string,
): string {
  const label = '[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?';
  const hostnamePattern = new RegExp(`^(?=.{1,253}$)${label}(?:\\.${label})*$`);

  if (!hostnamePattern.test(domain)) {
    throw new InputError(
      `${providerPath}: nativeAdminDomain must be a valid hostname without scheme, port, or path`,
    );
  }

  try {
    const parsed = new URL(`https://${domain}`);
    if (
      !parsed.hostname ||
      parsed.pathname !== '/' ||
      parsed.search ||
      parsed.hash ||
      parsed.username ||
      parsed.password ||
      parsed.port
    ) {
      throw new Error('invalid hostname');
    }
    return parsed.hostname.toLowerCase();
  } catch {
    throw new InputError(
      `${providerPath}: nativeAdminDomain must be a valid hostname without scheme, port, or path`,
    );
  }
}
