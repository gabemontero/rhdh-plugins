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

import type { SchedulerServiceTaskScheduleDefinitionConfig } from '@backstage/backend-plugin-api';

export interface Config {
  catalog?: {
    providers?: {
      /**
       * OpenClaw Enterprise OCC agent provider instances. Each keyed entry
       * owns one source-scoped catalog provider.
       */
      openclawAgentProvider?: {
        [providerInstanceId: string]: {
          /**
           * Disable discovery and remove entities owned by this provider
           * instance. A disabled entry only needs its keyed instance ID.
           * @visibility backend
           */
          enabled?: boolean;
          /**
           * Absolute HTTPS OCC API base URL. The provider preserves a path
           * prefix and removes trailing path slashes.
           * @visibility backend
           */
          occApiBaseUrl?: string;
          /**
           * OCC service key sent only in the backend `x-api-key` header.
           * @visibility backend
           */
          serviceKey?: string;
          /**
           * Exact OCC namespace name to discover. Defaults to `default`.
           * @visibility backend
           */
          namespaceName?: string;
          /**
           * Backstage catalog namespace for imported AiResource entities.
           * Defaults to `default`.
           * @visibility backend
           */
          catalogNamespace?: string;
          /**
           * Catalog owner applied to every imported agent. Required when
           * `enabled` is true.
           * @visibility backend
           */
          defaultOwner?: string;
          /**
           * Catalog lifecycle applied to every imported agent. Required when
           * `enabled` is true and independent of OCC runtime status.
           * @visibility backend
           */
          defaultLifecycle?: string;
          /**
           * Native-admin hostname used to construct optional agent chat links.
           * Supply a hostname only, without scheme, port, or path.
           * @visibility backend
           */
          nativeAdminDomain?: string;
          /**
           * Backstage scheduler definition. Defaults to ten-minute frequency
           * and timeout with an immediate initial run.
           * @visibility backend
           */
          schedule?: SchedulerServiceTaskScheduleDefinitionConfig;
        };
      };
    };
  };
}
