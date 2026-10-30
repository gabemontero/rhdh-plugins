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

/**
 * Validates and normalizes an OCC API base URL.
 *
 * The path prefix is preserved so deployments mounted below an ingress path
 * continue to receive requests beneath that path. A trailing path slash is
 * removed; an origin-only URL is serialized without a slash.
 *
 * @public
 */
export function normalizeOccBaseUrl(value: string): string {
  if (value !== value.trim() || value.length === 0) {
    throw new TypeError('OCC base URL must be a non-empty absolute URL');
  }

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new TypeError('OCC base URL must be a non-empty absolute URL');
  }

  if (url.protocol !== 'https:') {
    throw new TypeError('OCC base URL must use HTTPS');
  }

  const authority = value.match(/^[a-zA-Z][a-zA-Z\d+.-]*:\/\/([^/?#]*)/)?.[1];
  if (
    !authority ||
    authority.includes('@') ||
    url.username.length > 0 ||
    url.password.length > 0
  ) {
    throw new TypeError('OCC base URL must not contain credentials');
  }

  if (value.includes('?') || url.search.length > 0) {
    throw new TypeError('OCC base URL must not contain a query');
  }
  if (value.includes('#') || url.hash.length > 0) {
    throw new TypeError('OCC base URL must not contain a fragment');
  }

  const path = url.pathname.replace(/\/+$/, '');
  return `${url.origin}${path}`;
}
