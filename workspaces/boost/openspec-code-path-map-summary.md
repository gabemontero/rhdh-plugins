# OpenSpec → code path map — chat summary

Snapshot: 2026-09-10. Cross-reference of the five original Boost OpenSpec
change areas against `staged-issues.md` and source under `plugins/` and
`packages/backend`.

Companion file with the full canvas tables:
[`openspec-code-path-map.md`](./openspec-code-path-map.md).

---

The five original OpenSpec areas produced **nine plugin packages plus host wiring**, via the 17-issue plan in `staged-issues.md`. Eight of those issues are fully present in source, five are partial, two are unused scaffolds, and two were never implemented.

**Naming drift:** OpenSpec and the staging plan still say Llama Stack (`boost-backend-module-llamastack`, `llamastack-entity-provider`). The code is OGX.

### Code that came from those OpenSpecs

| Package                                | Staging issues     | What landed                                                                                     |
| -------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------- |
| `plugins/boost-common`                 | #3297              | `types.ts`, `permissions.ts`                                                                    |
| `plugins/boost-node`                   | #3297, #3309       | `boostAiProviderServiceRef`, `boostProviderExtensionPoint`, `KeycloakAuthClient`                |
| `plugins/boost-backend`                | #3298–#3305, #3311 | plugin, ProviderManager, security middleware, runtime config, agent/tool/MCP/chat/skills routes |
| `plugins/boost-backend-module-ogx`     | #3306              | `ResponsesApiProvider` + cacheService caches                                                    |
| `plugins/boost-backend-module-kagenti` | #3307, #3309       | `KagentiProvider`, `KagentiApiClient`, caches                                                   |
| `plugins/kagenti-entity-provider`      | #3308, #3309       | `KagentiAgentEntityProvider`, `KagentiToolEntityProvider`                                       |
| `plugins/ogx-entity-provider`          | #3308              | `OgxModelEntityProvider`, `OgxAgentEntityProvider`                                              |
| `plugins/boost-toolscope`              | #3310              | CacheAdapter only — not the planned 29-file extract, and **not imported** by `boost-backend`    |
| `plugins/boost-responses-api-toolkit`  | #3310              | used by the OGX module                                                                          |

`packages/backend` is only a host. The OpenSpec-derived lines are the five `backend.add()` calls in `packages/backend/src/index.ts` for `boost-backend`, the OGX and Kagenti modules, and the two entity providers.

Workspace-root `dynamic-plugins-filesystem-reference.yaml` and `dynamic-plugins-image-reference.yaml` came from packaging issue #3311.

### Staged but incomplete or missing

- **#3301** Kagenti admin is `GET /kagenti/status` only.
- **#3303** conversation tables exist; `ConversationRegistry` is constructed and unused.
- **#3304 / #3305** HITL and RAG are unused stores (`_approvalStore`, `_documentSyncService`). No SonataFlow callback, no vector/RAG routes.
- **#3308** `McpEntityProvider` and `VectorStoreEntityProvider` were never created. MCP is CRUD against `boost_mcp_servers`, not catalog entities.
- **#3310** toolscope is adapters-only.
- **#3597** skills still proxy `/runtimes` and deploy with `ociImage`. No `manifestBuilder.ts`.
- **#3654** `KeycloakAuthClient` still uses in-memory token fields, not `cacheService`.

Frontend from those OpenSpecs (`BoostChatPage`, admin/studio, feature flags, capability checks, white-label, safety shields) was **never in the staging plan**, and `plugins/boost` today is AI Catalog browse — not chat.

### Under `plugins/` but _not_ from these five OpenSpecs

These came from later changes (catalog entity model, connectors, ingestion):

- `plugins/boost` (catalog UI)
- `plugins/boost-entity-provider-sdk`
- `plugins/boost-connector-utils`
- `plugins/boost-migration-readiness`
- `plugins/boost-backend/src/ai-catalog/` and `src/ingestion/`
- `plugins/boost-common/src/aiAssetTaxonomy.ts` and `ingestion-health.ts`
