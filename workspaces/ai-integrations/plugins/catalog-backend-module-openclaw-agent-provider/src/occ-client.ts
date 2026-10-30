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

import createClient from 'openapi-fetch';
import type { paths } from './generated/occ-api';
import {
  validateAgentResponse,
  validateInstallationResponse,
  validateNamespaceResponse,
} from './occ-response-validation';
import type {
  ValidatedOccAgent,
  ValidatedOccNamespace,
} from './occ-response-validation';
import { normalizeOccBaseUrl } from './occ-url';

/** Maximum duration of one OCC request, including response parsing. */
export const DEFAULT_OCC_REQUEST_TIMEOUT_MS = 30_000;

/** A sanitized error from an OCC request. */
export class OccClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OccClientError';
  }
}

/** Dependencies and settings for an OCC API client. */
export interface OccClientOptions {
  baseUrl: string;
  serviceKey: string;
  timeoutMs?: number;
  fetchImpl?: OccFetch;
}

/** Injectable fetch implementation used by the OCC client. */
export type OccFetch = (
  request: Request,
  init?: RequestInit,
) => Promise<Response>;

/**
 * Typed, backend-only client for the OCC reads used by the catalog provider.
 *
 * It deliberately returns only validated namespace and agent metadata. OCC
 * configuration objects and unknown response properties never leave the
 * response-validation boundary.
 */
export class OccClient {
  private readonly client: ReturnType<typeof createClient<paths>>;
  private readonly timeoutMs: number;

  constructor(options: OccClientOptions) {
    const baseUrl = normalizeOccBaseUrl(options.baseUrl);
    if (
      typeof options.serviceKey !== 'string' ||
      options.serviceKey.length === 0
    ) {
      throw new TypeError('OCC service key must be a non-empty string');
    }

    this.timeoutMs = options.timeoutMs ?? DEFAULT_OCC_REQUEST_TIMEOUT_MS;
    if (!Number.isFinite(this.timeoutMs) || this.timeoutMs <= 0) {
      throw new TypeError(
        'OCC request timeout must be a positive finite number',
      );
    }

    const fetchImpl = options.fetchImpl ?? globalThis.fetch;
    this.client = createClient<paths>({
      baseUrl,
      headers: { 'x-api-key': options.serviceKey },
      fetch: async request => {
        let response: Response;
        try {
          response = await fetchImpl(request, {
            redirect: 'manual',
            signal: request.signal,
          });
        } catch {
          if (request.signal.aborted) {
            throw new OccClientError('OCC request timed out or was aborted');
          }
          throw new OccClientError('OCC request failed');
        }

        if (response.status >= 300 && response.status < 400) {
          throw new OccClientError('OCC request returned a redirect');
        }
        return response;
      },
    });
  }

  /** Lists and validates all namespaces visible to the configured service key. */
  async getNamespaces(): Promise<ValidatedOccNamespace[]> {
    const response = await this.request(signal =>
      this.client.GET('/namespaces', { signal }),
    );
    return validateNamespaceResponse(response);
  }

  /** Lists and validates all agents in the resolved namespace. */
  async getAgents(namespaceId: string): Promise<ValidatedOccAgent[]> {
    const response = await this.request(signal =>
      this.client.GET('/namespaces/{namespaceId}/agents', {
        params: { path: { namespaceId } },
        signal,
      }),
    );
    return validateAgentResponse(response, namespaceId);
  }

  /** Reads and validates the installation ID for optional chat-link creation. */
  async getInstallationId(): Promise<string> {
    const response = await this.request(signal =>
      this.client.GET('/installation', { signal }),
    );
    return validateInstallationResponse(response);
  }

  private async request(
    operation: (
      signal: AbortSignal,
    ) => Promise<{ response: Response; data?: unknown; error?: unknown }>,
  ): Promise<unknown> {
    const controller = new AbortController();
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const timeoutPromise = new Promise<never>((_resolve, reject) => {
      timeout = setTimeout(() => {
        controller.abort();
        reject(new OccClientError('OCC request timed out'));
      }, this.timeoutMs);
    });

    try {
      const result = await Promise.race([
        operation(controller.signal).catch(error => {
          if (error instanceof OccClientError) {
            throw error;
          }
          if (controller.signal.aborted) {
            throw new OccClientError('OCC request timed out or was aborted');
          }
          throw new OccClientError('OCC request failed');
        }),
        timeoutPromise,
      ]);

      if (!result.response.ok) {
        throw new OccClientError(
          `OCC request failed with HTTP ${result.response.status}`,
        );
      }
      if (result.data === undefined) {
        throw new OccClientError('OCC request returned no data');
      }
      return result.data;
    } finally {
      if (timeout !== undefined) {
        clearTimeout(timeout);
      }
    }
  }
}
