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
import { LoggerService } from '@backstage/backend-plugin-api';
import type { Config } from '@backstage/config';
import { NotFoundError } from '@backstage/errors';
import {
  Server,
  ServerDetail,
  MCPRegistryProxy,
  MCPRegistryProxyConfig,
  PaginatedResponse,
} from './types';
import { readSchedulerServiceTaskScheduleDefinitionFromConfig } from '@backstage/backend-plugin-api';

export async function createMCPRegistryProxy({
  logger,
  config,
}: {
  logger: LoggerService;
  config: Config;
}): Promise<MCPRegistryProxy> {
  logger.info('Initializing MCPRegistryProxy');

  const mcpRegistryConfigs = readMCPRegistryProxyConfigs(config);

  if (!mcpRegistryConfigs) {
    const emptyMCPServers = new Array<Server>();
    return {
      async listMCPServers() {
        return { items: Array.from(emptyMCPServers) };
      },

      async getMCPServer(request: { id: string }) {
        const mcpServer = emptyMCPServers.find(item => item.id === request.id);
        if (!mcpServer) {
          throw new NotFoundError(`No mcpServer found with id '${request.id}'`);
        }
        return mcpServer;
      },
    };
  }

  const mcpServers = new Array<Server>();
  return {
    async listMCPServers() {
      for (const mcpRegistryConfig of mcpRegistryConfigs) {
        switch (mcpRegistryConfig.registryVersion) {
          case 'v0':
            // eslint-disable-next-line no-case-declarations
            const resp = await fetch(`${mcpRegistryConfig.baseUrl}/v0/servers`);
            // eslint-disable-next-line no-case-declarations
            const presp: PaginatedResponse = await resp.json();
            if (presp.servers) {
              mcpServers.push(...presp.servers);
            }
            break;
          default:
            logger.error(
              `Unsupported registry version: ${mcpRegistryConfig.registryVersion}`,
            );
            break;
        }
      }
      return { items: Array.from(mcpServers) };
    },

    async getMCPServer(request: { id: string }) {
      for (const mcpRegistryConfig of mcpRegistryConfigs) {
        switch (mcpRegistryConfig.registryVersion) {
          case 'v0':
            // eslint-disable-next-line no-case-declarations
            const resp = await fetch(
              `${mcpRegistryConfig.baseUrl}/v0/servers/${request.id}`,
            );
            // eslint-disable-next-line no-case-declarations
            const presp: ServerDetail = await resp.json();
            if (!presp) {
              continue;
            }
            return presp;
          default:
            logger.error(
              `Unsupported registry version: ${mcpRegistryConfig.registryVersion}`,
            );
            break;
        }
      }
      throw new NotFoundError(`No mcpServer found with id '${request.id}'`);
    },
  };
}

export function readMCPRegistryProxyConfigs(
  config: Config,
): MCPRegistryProxyConfig[] {
  // First try to get as array configuration
  const configArray = config.getOptionalConfigArray('mcp.registry.proxy');
  if (configArray) {
    return configArray.map(cfg => readMCPRegistryProxyConfigFromArray(cfg));
  }

  return [];
}

function readMCPRegistryProxyConfigFromArray(
  config: Config,
): MCPRegistryProxyConfig {
  const id = config.getString('id');
  const baseUrl = config.getString('baseUrl');
  const registryVersion = config.getString('registryVersion');
  const schedule = config.has('schedule')
    ? readSchedulerServiceTaskScheduleDefinitionFromConfig(
        config.getConfig('schedule'),
      )
    : undefined;
  return { id, baseUrl, registryVersion, schedule };
}
