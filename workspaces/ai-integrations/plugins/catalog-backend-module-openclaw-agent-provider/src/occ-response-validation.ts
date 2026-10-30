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

const REQUEST_ID_PATTERN =
  /^req_[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const NAMESPACE_ID_PATTERN =
  /^ns_[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const AGENT_ID_PATTERN =
  /^agt_[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const CONFIGURATION_ID_PATTERN =
  /^cfg_[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const ACTIVE_REVISION_ID_PATTERN =
  /^rev_[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const SECRET_ID_PATTERN =
  /^sec_[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const SERVICE_ACCOUNT_ID_PATTERN =
  /^sa_[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const CREDENTIAL_SOURCE_ID_PATTERN =
  /^cs_[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const DATE_TIME_PATTERN =
  /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}Z$/;
/* eslint-disable no-control-regex -- Reject control characters in OCC names and backend IDs. */
const OCC_NAME_PATTERN =
  /^(?!\s)(?!.*\s$)[^\u0000-\u001f\u007f-\u009f\u2028\u2029]+$/u;
const BACKEND_ID_PATTERN =
  /^(?!\s)(?!.*\s$)[^\u0000-\u001f\u007f-\u009f\u2028\u2029]+$/u;
/* eslint-enable no-control-regex */
const EXISTING_NAMESPACE_PATTERN = /^[a-z0-9](?:[-a-z0-9]*[a-z0-9])?$/;

const NAMESPACE_STATUSES = new Set([
  'provisioning',
  'ready',
  'failed',
  'deleting',
]);
const EXECUTION_MODES = new Set(['embedded', 'dedicated']);
const DESIRED_RUNTIME_STATES = new Set(['running', 'stopped']);
const AGENT_STATUSES = new Set(['active', 'deleting']);
const CONFIGURATION_ERROR_FIELDS = new Set([
  'plugins',
  'pluginApprovers',
  'repositoryBindings',
  'repositoryAccess',
  'harnessAuth',
  'credentialSources',
  'secretBindings',
  'repositoryCredentials',
  'configuration',
]);

/** Safe agent metadata consumed by the catalog mapper. */
export interface ValidatedOccAgent {
  id: string;
  namespaceId: string;
  name: string;
  status: 'active' | 'deleting';
  desiredRuntimeState: 'running' | 'stopped';
  executionMode: 'embedded' | 'dedicated';
  activeRevisionId?: string;
}

/** Safe namespace metadata consumed by namespace selection. */
export interface ValidatedOccNamespace {
  id: string;
  name: string;
  status: 'provisioning' | 'ready' | 'failed' | 'deleting';
}

/** A response that failed the pinned OCC contract checks. */
export class OccResponseValidationError extends Error {
  constructor(context: 'namespace' | 'agent' | 'installation') {
    super(`OCC ${context} response is invalid`);
    this.name = 'OccResponseValidationError';
  }
}

/**
 * Validates and narrows the full namespace list response.
 * Unknown response fields are ignored and are not returned.
 */
export function validateNamespaceResponse(
  response: unknown,
): ValidatedOccNamespace[] {
  if (!isRecord(response) || !Array.isArray(response.data)) {
    throw new OccResponseValidationError('namespace');
  }
  validateMeta(response.meta, 'namespace');

  return response.data.map(item => {
    if (!isRecord(item)) {
      throw new OccResponseValidationError('namespace');
    }
    const { id, name, status, createdAt, existingNamespace } = item;
    if (
      !isPattern(id, NAMESPACE_ID_PATTERN) ||
      !isOccName(name) ||
      !isOneOf(status, NAMESPACE_STATUSES) ||
      !isOpenApiDateTime(createdAt) ||
      (existingNamespace !== undefined &&
        !isExistingNamespace(existingNamespace))
    ) {
      throw new OccResponseValidationError('namespace');
    }

    return {
      id,
      name,
      status: status as ValidatedOccNamespace['status'],
    };
  });
}

/**
 * Validates and narrows a complete agent snapshot for a resolved namespace.
 * Duplicate IDs and namespace mismatches fail the entire snapshot.
 * Unknown and unprojected configuration fields are never returned.
 */
export function validateAgentResponse(
  response: unknown,
  expectedNamespaceId: string,
): ValidatedOccAgent[] {
  if (
    !isPattern(expectedNamespaceId, NAMESPACE_ID_PATTERN) ||
    !isRecord(response) ||
    !Array.isArray(response.data)
  ) {
    throw new OccResponseValidationError('agent');
  }
  validateMeta(response.meta, 'agent');

  const seenAgentIds = new Set<string>();
  return response.data.map(item => {
    const agent = validateAgent(item, expectedNamespaceId);
    if (seenAgentIds.has(agent.id)) {
      throw new OccResponseValidationError('agent');
    }
    seenAgentIds.add(agent.id);
    return agent;
  });
}

/**
 * Validates the installation response and returns only the installation ID.
 */
export function validateInstallationResponse(response: unknown): string {
  if (!isRecord(response) || !isRecord(response.data)) {
    throw new OccResponseValidationError('installation');
  }
  validateMeta(response.meta, 'installation');

  const { id, name, createdAt } = response.data;
  if (
    !isPattern(
      id,
      /^ins_[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
    ) ||
    !isOccName(name) ||
    !isOpenApiDateTime(createdAt)
  ) {
    throw new OccResponseValidationError('installation');
  }
  return id;
}

function validateAgent(
  item: unknown,
  expectedNamespaceId: string,
): ValidatedOccAgent {
  if (!isRecord(item)) {
    throw new OccResponseValidationError('agent');
  }

  const {
    id,
    namespaceId,
    name,
    servicePrincipalId,
    configurationId,
    backendId,
    harnessAuth,
    executionMode,
    gatewayManagedMode,
    desiredRuntimeState,
    status,
    createdAt,
    activeRevisionId,
    configurationReadError,
  } = item;

  if (
    !isPattern(id, AGENT_ID_PATTERN) ||
    namespaceId !== expectedNamespaceId ||
    !isPattern(namespaceId, NAMESPACE_ID_PATTERN) ||
    !isOccName(name) ||
    !isBoundedString(servicePrincipalId, 1, 200) ||
    !isPattern(configurationId, CONFIGURATION_ID_PATTERN) ||
    !isNullableBackendId(backendId) ||
    !isOneOf(executionMode, EXECUTION_MODES) ||
    (hasOwn(item, 'gatewayManagedMode') &&
      typeof gatewayManagedMode !== 'boolean') ||
    !isOneOf(desiredRuntimeState, DESIRED_RUNTIME_STATES) ||
    !isOneOf(status, AGENT_STATUSES) ||
    !isOpenApiDateTime(createdAt) ||
    (activeRevisionId !== undefined &&
      !isPattern(activeRevisionId, ACTIVE_REVISION_ID_PATTERN))
  ) {
    throw new OccResponseValidationError('agent');
  }

  const hasConfigurationError = hasOwn(item, 'configurationReadError');
  if (hasConfigurationError) {
    if (
      hasOwn(item, 'harnessAuth') ||
      !isConfigurationReadError(configurationReadError)
    ) {
      throw new OccResponseValidationError('agent');
    }
  } else if (!isHarnessAuth(harnessAuth)) {
    throw new OccResponseValidationError('agent');
  }

  return {
    id,
    namespaceId,
    name,
    status: status as ValidatedOccAgent['status'],
    desiredRuntimeState:
      desiredRuntimeState as ValidatedOccAgent['desiredRuntimeState'],
    executionMode: executionMode as ValidatedOccAgent['executionMode'],
    ...(activeRevisionId === undefined ? {} : { activeRevisionId }),
  };
}

function validateMeta(
  meta: unknown,
  context: 'namespace' | 'agent' | 'installation',
): void {
  if (!isRecord(meta) || !isPattern(meta.requestId, REQUEST_ID_PATTERN)) {
    throw new OccResponseValidationError(context);
  }
}

function isHarnessAuth(value: unknown): boolean {
  if (value === null) {
    return true;
  }
  if (!isRecord(value) || typeof value.method !== 'string') {
    return false;
  }

  switch (value.method) {
    case 'runtime':
      return true;
    case 'api_key':
      return isSecretReference(value.source);
    case 'codex_pat':
      return (
        isSecretReference(value.source) ||
        isServiceAccountReference(value.source)
      );
    case 'credential_source':
      return isPattern(value.sourceId, CREDENTIAL_SOURCE_ID_PATTERN);
    default:
      return false;
  }
}

function isSecretReference(value: unknown): boolean {
  return (
    isRecord(value) &&
    value.kind === 'secret' &&
    isPattern(value.namespaceId, NAMESPACE_ID_PATTERN) &&
    isPattern(value.id, SECRET_ID_PATTERN)
  );
}

function isServiceAccountReference(value: unknown): boolean {
  return (
    isRecord(value) &&
    value.kind === 'service_account' &&
    isPattern(value.namespaceId, NAMESPACE_ID_PATTERN) &&
    isPattern(value.id, SERVICE_ACCOUNT_ID_PATTERN)
  );
}

function isConfigurationReadError(value: unknown): boolean {
  return (
    isRecord(value) &&
    value.code === 'SAVED_CONFIGURATION_UNREADABLE' &&
    isOneOf(value.field, CONFIGURATION_ERROR_FIELDS)
  );
}

function isNullableBackendId(value: unknown): boolean {
  return (
    value === null ||
    (isBoundedString(value, 1, 200) && BACKEND_ID_PATTERN.test(value))
  );
}

function isOccName(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    codePointLength(value) >= 1 &&
    codePointLength(value) <= 200 &&
    OCC_NAME_PATTERN.test(value)
  );
}

function isExistingNamespace(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    codePointLength(value) >= 1 &&
    codePointLength(value) <= 63 &&
    EXISTING_NAMESPACE_PATTERN.test(value)
  );
}

function isBoundedString(
  value: unknown,
  minimum: number,
  maximum: number,
): value is string {
  return (
    typeof value === 'string' &&
    codePointLength(value) >= minimum &&
    codePointLength(value) <= maximum
  );
}

function isOpenApiDateTime(value: unknown): value is string {
  if (typeof value !== 'string' || !DATE_TIME_PATTERN.test(value)) {
    return false;
  }
  const parsed = new Date(value);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString() === value;
}

function isPattern(value: unknown, pattern: RegExp): value is string {
  return typeof value === 'string' && pattern.test(value);
}

function isOneOf(value: unknown, choices: ReadonlySet<string>): boolean {
  return typeof value === 'string' && choices.has(value);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function hasOwn(value: object, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(value, key);
}

function codePointLength(value: string): number {
  return [...value].length;
}
