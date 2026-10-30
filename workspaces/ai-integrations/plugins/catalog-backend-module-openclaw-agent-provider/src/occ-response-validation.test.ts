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
  OccResponseValidationError,
  validateAgentResponse,
  validateInstallationResponse,
  validateNamespaceResponse,
} from './occ-response-validation';

const requestId = 'req_01234567-89ab-4def-8123-456789abcdef';
const namespaceId = 'ns_01234567-89ab-4def-8123-456789abcdef';
const agentId = 'agt_01234567-89ab-4def-8123-456789abcdef';
const configurationId = 'cfg_01234567-89ab-4def-8123-456789abcdef';
const createdAt = '2025-10-30T14:30:00.000Z';

function namespaceResponse(data: unknown[] = [validNamespace()]) {
  return {
    data,
    meta: { requestId },
  };
}

function validNamespace() {
  return {
    id: namespaceId,
    name: 'default',
    status: 'ready',
    createdAt,
  };
}

function validAgent() {
  return {
    id: agentId,
    namespaceId,
    name: 'Support Router',
    servicePrincipalId: 'sp_openclaw_readonly',
    configurationId,
    backendId: null,
    harnessAuth: { method: 'runtime' },
    executionMode: 'embedded',
    gatewayManagedMode: false,
    desiredRuntimeState: 'running',
    status: 'active',
    createdAt,
  };
}

function agentResponse(data: unknown[] = [validAgent()]) {
  return {
    data,
    meta: { requestId },
  };
}

describe('validateNamespaceResponse', () => {
  it('returns validated namespaces without unknown response properties', () => {
    const value = validNamespace() as Record<string, unknown>;
    value.unknownSensitiveField = 'must not be returned';

    expect(validateNamespaceResponse(namespaceResponse([value]))).toEqual([
      { id: namespaceId, name: 'default', status: 'ready' },
    ]);
  });

  it('validates request IDs, IDs, enums, and exact UTC timestamps', () => {
    expect(() =>
      validateNamespaceResponse({
        ...namespaceResponse(),
        meta: { requestId: 'not-a-request-id' },
      }),
    ).toThrow(OccResponseValidationError);

    expect(() =>
      validateNamespaceResponse(
        namespaceResponse([{ ...validNamespace(), id: 'ns_not-valid' }]),
      ),
    ).toThrow(OccResponseValidationError);

    expect(() =>
      validateNamespaceResponse(
        namespaceResponse([{ ...validNamespace(), status: 'unknown' }]),
      ),
    ).toThrow(OccResponseValidationError);

    expect(() =>
      validateNamespaceResponse(
        namespaceResponse([
          { ...validNamespace(), createdAt: '2025-02-30T14:30:00.000Z' },
        ]),
      ),
    ).toThrow(OccResponseValidationError);
  });
});

describe('validateAgentResponse', () => {
  it('returns only allowlisted fields and ignores unknown configuration fields', () => {
    const value = {
      ...validAgent(),
      activeRevisionId: 'rev_01234567-89ab-4def-8123-456789abcdef',
      plugins: [{ name: 'private plugin configuration' }],
      servicePrincipalSecret: 'never returned',
      unknownFutureField: { nested: true },
    };

    expect(validateAgentResponse(agentResponse([value]), namespaceId)).toEqual([
      {
        id: agentId,
        namespaceId,
        name: 'Support Router',
        status: 'active',
        desiredRuntimeState: 'running',
        executionMode: 'embedded',
        activeRevisionId: 'rev_01234567-89ab-4def-8123-456789abcdef',
      },
    ]);
  });

  it('accepts an omitted gatewayManagedMode field from OCC', () => {
    const value = { ...validAgent() } as Record<string, unknown>;
    delete value.gatewayManagedMode;

    expect(validateAgentResponse(agentResponse([value]), namespaceId)).toEqual([
      {
        id: agentId,
        namespaceId,
        name: 'Support Router',
        status: 'active',
        desiredRuntimeState: 'running',
        executionMode: 'embedded',
      },
    ]);
  });

  it('rejects gatewayManagedMode when present with a non-boolean value', () => {
    expect(() =>
      validateAgentResponse(
        agentResponse([{ ...validAgent(), gatewayManagedMode: 'enabled' }]),
        namespaceId,
      ),
    ).toThrow(OccResponseValidationError);
  });

  it('accepts the configurationReadError variant with nullable backendId', () => {
    const { harnessAuth: _harnessAuth, ...agent } = validAgent();
    const value = {
      ...agent,
      backendId: null,
      configurationReadError: {
        code: 'SAVED_CONFIGURATION_UNREADABLE',
        field: 'harnessAuth',
      },
    };

    expect(validateAgentResponse(agentResponse([value]), namespaceId)).toEqual([
      {
        id: agentId,
        namespaceId,
        name: 'Support Router',
        status: 'active',
        desiredRuntimeState: 'running',
        executionMode: 'embedded',
      },
    ]);
  });

  it('rejects missing required fields, bad enums, and malformed variants', () => {
    const missingBackendId = { ...validAgent() } as Record<string, unknown>;
    delete missingBackendId.backendId;
    expect(() =>
      validateAgentResponse(agentResponse([missingBackendId]), namespaceId),
    ).toThrow(OccResponseValidationError);

    expect(() =>
      validateAgentResponse(
        agentResponse([{ ...validAgent(), executionMode: 'unknown' }]),
        namespaceId,
      ),
    ).toThrow(OccResponseValidationError);

    const { harnessAuth: _harnessAuth, ...agent } = validAgent();
    expect(() =>
      validateAgentResponse(
        agentResponse([
          {
            ...agent,
            configurationReadError: {
              code: 'OTHER_ERROR',
              field: 'harnessAuth',
            },
          },
        ]),
        namespaceId,
      ),
    ).toThrow(OccResponseValidationError);
  });

  it('rejects duplicate IDs and namespace mismatches without partial results', () => {
    expect(() =>
      validateAgentResponse(
        agentResponse([validAgent(), { ...validAgent(), name: 'Duplicate' }]),
        namespaceId,
      ),
    ).toThrow(OccResponseValidationError);

    expect(() =>
      validateAgentResponse(
        agentResponse([
          {
            ...validAgent(),
            namespaceId: 'ns_aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
          },
        ]),
        namespaceId,
      ),
    ).toThrow(OccResponseValidationError);
  });

  it('validates optional active revision IDs and strips them when absent', () => {
    const { activeRevisionId: _unused, ...withoutRevision } = {
      ...validAgent(),
      activeRevisionId: undefined,
    };
    expect(
      validateAgentResponse(agentResponse([withoutRevision]), namespaceId)[0],
    ).not.toHaveProperty('activeRevisionId');

    expect(() =>
      validateAgentResponse(
        agentResponse([{ ...validAgent(), activeRevisionId: 'revision' }]),
        namespaceId,
      ),
    ).toThrow(OccResponseValidationError);
  });

  it('does not include raw response values in validation errors', () => {
    const secret = 'occ-secret-that-must-not-leak';
    let failure: Error | undefined;
    try {
      validateAgentResponse(
        agentResponse([{ ...validAgent(), configurationId: secret }]),
        namespaceId,
      );
    } catch (error) {
      failure = error as Error;
    }
    expect(failure?.message).toBe('OCC agent response is invalid');
    expect(failure?.message).not.toContain(secret);
  });
});

describe('validateInstallationResponse', () => {
  it('returns only the validated installation ID', () => {
    expect(
      validateInstallationResponse({
        data: {
          id: 'ins_01234567-89ab-4def-8123-456789abcdef',
          name: 'Example Installation',
          createdAt,
          privateConfiguration: 'not returned',
        },
        meta: { requestId },
      }),
    ).toBe('ins_01234567-89ab-4def-8123-456789abcdef');
  });
});
