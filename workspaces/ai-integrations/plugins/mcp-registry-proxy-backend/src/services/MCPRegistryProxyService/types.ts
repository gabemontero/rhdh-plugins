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

import type { SchedulerServiceTaskScheduleDefinition } from '@backstage/backend-plugin-api';

export type MCPRegistryProxyConfig = {
  id: string;
  baseUrl: string;
  registryVersion: string;
  schedule?: SchedulerServiceTaskScheduleDefinition;
};

export interface MCPRegistryProxy {
  listMCPServers(): Promise<{ items: Server[] }>;

  getMCPServer(request: { id: string }): Promise<ServerDetail>;
}

export interface Repository {
  // Example"https://github.com/modelcontextprotocol/servers"
  url: string;
  source: 'github' | 'gitlab';
  // Example"b94b5f7e-c7c6-d760-2c78-a5e9b8a5b8c9"
  id: string;
}

export interface VersionDetail {
  /**
   * @description Equivalent of Implementation.version in MCP specification.
   * @example 1.0.2
   */
  version: string;
  /**
   * Format: date-time
   * @description Datetime that the MCP server version was published to the registry.
   * @example 2023-06-15T10:30:00Z
   */
  release_date: string;
  /**
   * @description Whether the MCP server version is the latest version available in the registry.
   * @example true
   */
  is_latest: boolean;
}

export interface Metadata {
  next_cursor?: string;
  count: number;
  total: number;
}

export interface PaginatedResponse extends Metadata {
  servers: Server[];
}

export interface Server {
  /**
   * Format: uuid
   * @example a5e8a7f0-d4e4-4a1d-b12f-2896a23fd4f1
   */
  id: string;
  /** @example @modelcontextprotocol/servers/src/filesystem */
  name: string;
  /** @example Node.js server implementing Model Context Protocol (MCP) for filesystem operations. */
  description: string;
  repository?: Repository;
  version_detail: VersionDetail;
}

export interface ServerDetail extends Server {
  packages?: Package[];
  remotes?: Remote[];
}

export interface ServerList {
  servers: Server[];
  next?: string;
  total_count: number;
}

export interface Input {
  description?: string;
  is_required: boolean;
  format: 'string' | 'number' | 'boolean' | 'file_path';
  value?: string;
  is_secret: boolean;
  default?: string;
  choices?: string[];
  template?: string;
  properties?: {
    [key: string]: Input;
  };
}

export interface InputWithVariables extends Input {
  variables?: {
    [key: string]: Input;
  };
}

export interface KeyValueInput extends InputWithVariables {
  name: string;
}

export interface Argument extends InputWithVariables {
  type: 'positional' | 'named';
  name: string;
  is_repeated: boolean;
  value_hint?: string;
}

export interface Package {
  registry_name: string;
  // Example"io.modelcontextprotocol/filesystem"
  name: string;
  // Example"1.0.2"
  version: string;
  // A hint to help clients determine the appropriate runtime for the package. This field should be provided when runtime_arguments are present.
  // examples include "npx" or "uvx"
  runtime_hint?: string;
  // A list of arguments to be passed to the package's runtime command (such as docker or npx). The runtime_hint field should be provided when runtime_arguments are present.
  runtime_arguments?: Argument[];
  package_arguments?: Argument[];
  environment_variables?: KeyValueInput[];
}

export interface Remote {
  transport_type: 'streamable' | 'sse';
  url: string;
  headers?: Input[];
}
