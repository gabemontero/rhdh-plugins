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
const fs = require('node:fs');

const outputPath = 'src/generated/occ-api.ts';
const generated = fs.readFileSync(outputPath, 'utf8');
const schemaPattern =
  / {8}"def-0": string \| boolean \| number \| null \| components\["schemas"\]\["def-0"\]\[\] \| \{\n {12}\[key: string\]: components\["schemas"\]\["def-0"\];\n {8}\};/;

if (!schemaPattern.test(generated)) {
  throw new Error(
    'Could not find the generated recursive SafeJsonValue schema; review the OCC OpenAPI output before updating this compatibility fix.',
  );
}

const componentsMarker = 'export interface components {';
if (!generated.includes(componentsMarker)) {
  throw new Error('Could not find the generated components interface.');
}

const fixed = generated
  .replace(schemaPattern, '        "def-0": SafeJsonValue;')
  .replace(
    componentsMarker,
    `type SafeJsonValue = string | boolean | number | null | SafeJsonValue[] | { [key: string]: SafeJsonValue };\n\n${componentsMarker}`,
  );

fs.writeFileSync(outputPath, fixed);
