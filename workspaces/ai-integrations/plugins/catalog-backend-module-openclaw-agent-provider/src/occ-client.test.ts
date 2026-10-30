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

import { OccClient, OccClientError } from './occ-client';

const namespaceId = 'ns_01234567-89ab-4def-8123-456789abcdef';
const requestId = 'req_01234567-89ab-4def-8123-456789abcdef';

function namespaceResponse() {
  return {
    data: [
      {
        id: namespaceId,
        name: 'default',
        status: 'ready',
        createdAt: '2025-10-30T14:30:00.000Z',
      },
    ],
    meta: { requestId },
  };
}

function response(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

describe('OccClient', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  it('sends x-api-key and preserves a configured base-path prefix', async () => {
    const fetchImpl = jest.fn(async (_request: Request, _init?: RequestInit) =>
      response(namespaceResponse()),
    );
    const client = new OccClient({
      baseUrl: 'https://occ.example.com/control/api/',
      serviceKey: 'server-side-test-key',
      fetchImpl,
    });

    await expect(client.getNamespaces()).resolves.toEqual([
      { id: namespaceId, name: 'default', status: 'ready' },
    ]);

    const [request, init] = fetchImpl.mock.calls[0];
    expect(request.url).toBe('https://occ.example.com/control/api/namespaces');
    expect(request.headers.get('x-api-key')).toBe('server-side-test-key');
    expect(init?.redirect).toBe('manual');
  });

  it('encodes namespace IDs while preserving the base-path prefix', async () => {
    const fetchImpl = jest.fn(async (_request: Request, _init?: RequestInit) =>
      response({ data: [], meta: { requestId } }),
    );
    const client = new OccClient({
      baseUrl: 'https://occ.example.com/control/api',
      serviceKey: 'key',
      fetchImpl,
    });

    await expect(client.getAgents(namespaceId)).resolves.toEqual([]);
    expect(fetchImpl.mock.calls[0][0].url).toBe(
      `https://occ.example.com/control/api/namespaces/${namespaceId}/agents`,
    );
  });

  it('rejects redirects without requesting their target', async () => {
    const fetchImpl = jest.fn(
      async (_request: Request, _init?: RequestInit) =>
        new Response(null, {
          status: 302,
          headers: { location: 'https://redirect.example.com/collect' },
        }),
    );
    const client = new OccClient({
      baseUrl: 'https://occ.example.com/api',
      serviceKey: 'secret-key',
      fetchImpl,
    });

    await expect(client.getNamespaces()).rejects.toThrow(
      'OCC request returned a redirect',
    );
    expect(fetchImpl).toHaveBeenCalledTimes(1);
    expect(fetchImpl.mock.calls[0][0].url).toBe(
      'https://occ.example.com/api/namespaces',
    );
    expect(fetchImpl.mock.calls[0][1]?.redirect).toBe('manual');
  });

  it('bounds a request and aborts the request signal after the deadline', async () => {
    jest.useFakeTimers();
    let requestSignal: AbortSignal | undefined;
    const fetchImpl = jest.fn((request: Request, _init?: RequestInit) => {
      requestSignal = request.signal;
      return new Promise<Response>(() => {});
    });
    const client = new OccClient({
      baseUrl: 'https://occ.example.com',
      serviceKey: 'key',
      timeoutMs: 10,
      fetchImpl,
    });

    const pending = client.getNamespaces();
    const pendingExpectation = await expect(pending).rejects.toThrow(
      OccClientError,
    );
    await jest.advanceTimersByTimeAsync(10);

    await pendingExpectation;
    expect(requestSignal?.aborted).toBe(true);
    jest.useRealTimers();
  });

  it('sanitizes unauthorized installation lookup errors', async () => {
    const body = { error: { message: 'response body must not leak' } };
    const fetchImpl = jest.fn(async (_request: Request, _init?: RequestInit) =>
      response(body, 401),
    );
    const client = new OccClient({
      baseUrl: 'https://occ.example.com/api',
      serviceKey: 'top-secret-service-key',
      fetchImpl,
    });

    let failure: Error | undefined;
    try {
      await client.getInstallationId();
    } catch (error) {
      failure = error as Error;
    }
    expect(failure?.message).toBe('OCC request failed with HTTP 401');
    expect(failure?.message).not.toContain('response body must not leak');
    expect(failure?.message).not.toContain('top-secret-service-key');
    expect(fetchImpl).toHaveBeenCalledTimes(1);
  });
});
