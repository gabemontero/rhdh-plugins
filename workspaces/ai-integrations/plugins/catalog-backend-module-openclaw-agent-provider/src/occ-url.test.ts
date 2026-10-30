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

import { normalizeOccBaseUrl } from './occ-url';

describe('normalizeOccBaseUrl', () => {
  it('preserves a configured path prefix and removes trailing slashes', () => {
    expect(normalizeOccBaseUrl('https://occ.example.com/control/api///')).toBe(
      'https://occ.example.com/control/api',
    );
  });

  it('serializes an origin-only URL without a slash', () => {
    expect(normalizeOccBaseUrl('https://occ.example.com/')).toBe(
      'https://occ.example.com',
    );
  });

  it.each([
    'http://occ.example.com',
    'https://user:secret@occ.example.com',
    'https://@occ.example.com',
    'https://occ.example.com/path?query=value',
    'https://occ.example.com/path?',
    'https://occ.example.com/path#fragment',
    'https://occ.example.com/path#',
    'https://occ.example.com ',
    'not an absolute URL',
  ])('rejects an invalid base URL: %s', value => {
    expect(() => normalizeOccBaseUrl(value)).toThrow(TypeError);
  });
});
