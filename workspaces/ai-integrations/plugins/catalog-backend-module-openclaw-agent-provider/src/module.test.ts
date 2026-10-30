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

import { catalogModuleOpenClawAgentProvider } from './module';

describe('OpenClaw agent provider module', () => {
  it('registers one module initialization for the catalog plugin', () => {
    const moduleFeature = catalogModuleOpenClawAgentProvider as unknown as {
      getRegistrations(): Array<Record<string, unknown>>;
    };
    const registrations = moduleFeature.getRegistrations();

    expect(catalogModuleOpenClawAgentProvider).toMatchObject({
      $$type: '@backstage/BackendFeature',
      featureType: 'registrations',
      version: 'v1',
    });
    expect(registrations).toHaveLength(1);
    expect(registrations[0]).toMatchObject({
      type: 'module-v1.1',
      pluginId: 'catalog',
      moduleId: 'openclaw-agent-provider',
      init: { deps: { catalog: expect.anything() } },
    });
  });
});
