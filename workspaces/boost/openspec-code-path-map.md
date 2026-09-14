# OpenSpec → code path map

Snapshot: 2026-09-10. Portable export of the Cursor canvas
**OpenSpec Code Path Map**.

Chat summary:
[`openspec-code-path-map-summary.md`](./openspec-code-path-map-summary.md).
Staging plan: [`staged-issues.md`](./staged-issues.md).

Cross-reference of the five original Boost OpenSpec change areas against
`staged-issues.md` (17 backend GitHub issues) and the source trees under
`plugins/` and `packages/backend`. Frontend UI was explicitly excluded from
the staging plan. Llama Stack names in OpenSpec/issues were renamed to OGX
in code.

**Sources:**

- `openspec/changes/agent-creation-discovery`
- `openspec/changes/ai-chat-interaction-experience`
- `openspec/changes/platform-operations-deployment`
- `openspec/changes/pluggable-ai-platform-architecture`
- `openspec/changes/security-safety-governance`
- `staged-issues.md`
- `plugins/*/src`
- `packages/backend/src/index.ts`

## Counts (staging issues 1–17)

| Present | Partial | Scaffold (unused) | Missing |
| ------- | ------- | ----------------- | ------- |
| 8       | 5       | 2                 | 2       |

Present means the named package/routes exist and are wired in `plugin.ts`.
Scaffold means a class exists but is unused.

**Plugin packages by origin:** 13 packages under `plugins/`. Nine were
created from the five original change areas (via the staging plan). Four
came from later catalog/connector/ingestion OpenSpecs.

`packages/backend` is a host app, not domain logic. The only
OpenSpec-derived code there is five `backend.add()` imports in
`packages/backend/src/index.ts` that load `boost-backend`, the OGX and
Kagenti modules, and the two entity providers.

---

## All 17 staging issues

| #   | Issue                                                                                                          | Status            | OpenSpec areas                                       | Code paths created                                                                                                                                                              | Notes                                                                                                                                    |
| --- | -------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [#3297](https://github.com/redhat-developer/rhdh-plugins/issues/3297) boost-common + boost-node                | Present           | Pluggable AI, Security                               | `plugins/boost-common/src/{types,permissions}.ts` · `plugins/boost-node/src/{services,extensions}.ts`                                                                           | AgenticProvider, NormalizedStreamEvent, 16 entity permissions, serviceRef, extension point                                               |
| 2   | [#3298](https://github.com/redhat-developer/rhdh-plugins/issues/3298) boost-backend scaffold + ProviderManager | Present           | Pluggable AI, Security                               | `plugins/boost-backend/src/{plugin.ts,provider/ProviderManager.ts,middleware/security.ts}`                                                                                      | Service factory + `authorizeLifecycleAction` exist. Security mode is validated at startup, not used as a runtime auth bypass.            |
| 3   | [#3299](https://github.com/redhat-developer/rhdh-plugins/issues/3299) Runtime config engine                    | Present           | Platform ops                                         | `plugins/boost-backend/src/config/{RuntimeConfigResolver,AdminConfigService,schemas,encryption}.ts` + `config.d.ts`                                                             | Zod schemas, cacheService TTL, credential encryption, schema version tracking                                                            |
| 4   | [#3300](https://github.com/redhat-developer/rhdh-plugins/issues/3300) Agent lifecycle routes                   | Present           | Security, Agent creation                             | `plugins/boost-backend/src/agents/{routes,lifecycle,AgentLifecycleStore}.ts`                                                                                                    | GET `/agents` plus register, promote, approve, request-unpublish, withdraw, DELETE                                                       |
| 5   | [#3301](https://github.com/redhat-developer/rhdh-plugins/issues/3301) Tool lifecycle, MCP, Kagenti admin       | Partial           | Security, Agent creation                             | `plugins/boost-backend/src/{tools,mcp,kagenti}/`                                                                                                                                | Tool promote/demote/publish/unpublish and MCP CRUD exist. Kagenti admin is `GET /kagenti/status` only.                                   |
| 6   | [#3302](https://github.com/redhat-developer/rhdh-plugins/issues/3302) Streaming chat                           | Present           | AI chat, Pluggable AI, Platform ops                  | `plugins/boost-backend/src/chat/{routes,RateLimiter,ConversationAgentCache}.ts`                                                                                                 | POST `/chat` and `/chat/stream` emit NormalizedStreamEvent SSE                                                                           |
| 7   | [#3303](https://github.com/redhat-developer/rhdh-plugins/issues/3303) Conversation persistence                 | Partial           | AI chat, Platform ops                                | `plugins/boost-backend/src/chat/{ConversationStore,conversationRoutes,ConversationRegistry}.ts`                                                                                 | `boost_sessions` / `boost_messages` / `boost_feedback` plus list/search/feedback/export. ConversationRegistry is constructed but unused. |
| 8   | [#3304](https://github.com/redhat-developer/rhdh-plugins/issues/3304) HITL + SonataFlow                        | Scaffold          | AI chat, Security, Platform ops                      | `plugins/boost-backend/src/approval/BackendApprovalStore.ts`                                                                                                                    | Store constructed as `_approvalStore` and never routed. SonataFlow is config keys only. No `X-Boost-Workflow-Callback` handler.          |
| 9   | [#3305](https://github.com/redhat-developer/rhdh-plugins/issues/3305) RAG knowledge pipeline                   | Scaffold          | AI chat, Platform ops                                | `plugins/boost-backend/src/documents/DocumentSyncService.ts`                                                                                                                    | Content-hash cache only, constructed unused. No ingest, vector-store, or RAG query routes.                                               |
| 10  | [#3306](https://github.com/redhat-developer/rhdh-plugins/issues/3306) Llama Stack provider module              | Present (renamed) | Pluggable AI, Platform ops                           | `plugins/boost-backend-module-ogx/src/{module.ts,provider/ResponsesApiProvider*.ts,ModelListCache,McpAuthTokenCache,ClientManager,SessionMap}.ts`                               | Renamed llamastack → ogx. cacheService used for all listed caches.                                                                       |
| 11  | [#3307](https://github.com/redhat-developer/rhdh-plugins/issues/3307) Kagenti provider module                  | Present           | Pluggable AI                                         | `plugins/boost-backend-module-kagenti/src/{module.ts,provider/KagentiProvider*.ts,KagentiApiClient,AgentCardCache,KeycloakTokenCache,SessionMap}.ts`                            | `X-Backstage-User` set when `userRef` is present. Reuses `KeycloakAuthClient` from boost-node.                                           |
| 12  | [#3308](https://github.com/redhat-developer/rhdh-plugins/issues/3308) Catalog entity providers                 | Partial           | Agent creation                                       | `plugins/kagenti-entity-provider/src/providers/Kagenti{Agent,Tool}EntityProvider.ts` · `plugins/ogx-entity-provider/src/providers/Ogx{Model,Agent}EntityProvider.ts`            | llamastack-entity-provider renamed to ogx-entity-provider. `McpEntityProvider` and `VectorStoreEntityProvider` were never created.       |
| 13  | [#3309](https://github.com/redhat-developer/rhdh-plugins/issues/3309) Keycloak service-account auth            | Present           | Security                                             | `plugins/boost-node/src/KeycloakAuthClient.ts` · `plugins/boost-backend-module-kagenti/src/provider/KagentiApiClient.ts`                                                        | Client-credentials grant, token cache, max-1-retry, entity-provider + KagentiApiClient integration                                       |
| 14  | [#3310](https://github.com/redhat-developer/rhdh-plugins/issues/3310) toolscope + Responses API toolkit        | Partial           | Pluggable AI, Agent creation                         | `plugins/boost-toolscope/src/{CacheAdapter,InMemoryCacheAdapter,BackstageCacheAdapter}.ts` · `plugins/boost-responses-api-toolkit/src/{types,requestBuilder,responseParser}.ts` | Toolkit is consumed by OGX. Toolscope is cache adapters only (not the planned 29-file extract) and is not imported by boost-backend src. |
| 15  | [#3311](https://github.com/redhat-developer/rhdh-plugins/issues/3311) Dynamic plugin packaging + skills        | Partial           | Pluggable AI, Agent creation, Platform ops, Security | `dynamic-plugins-{filesystem,image}-reference.yaml` · `plugins/boost-backend/src/skills/routes.ts` · `plugins/boost-backend/src/config/encryption.ts`                           | OCI export examples exist. Skills proxy + inline K8s manifest exist. Deploy still takes `ociImage`; progress endpoint is a stub.         |
| 16  | [#3597](https://github.com/redhat-developer/rhdh-plugins/issues/3597) Skills runtimeId + manifestBuilder       | Missing           | Pluggable AI, Agent creation                         | `plugins/boost-backend/src/skills/routes.ts` (still the issue-15 proxy)                                                                                                         | GET `/skills/runtimes` still proxies. POST `/skills/deploy` still requires `ociImage`. No `src/skills/manifestBuilder.ts`.               |
| 17  | [#3654](https://github.com/redhat-developer/rhdh-plugins/issues/3654) KeycloakAuthClient → cacheService        | Missing           | Security, Platform ops                               | `plugins/boost-node/src/KeycloakAuthClient.ts`                                                                                                                                  | Still private `cachedToken` / `tokenExpiresAt` fields. kagenti-entity-provider module deps have no `coreServices.cache`.                 |

---

## Pluggable AI platform — code that landed

OpenSpec: provider-abstraction, provider-hot-swap, provider-packaging,
normalized-streaming, multi-agent-orchestration. Staging issues 1, 2, 6,
10, 11, 14, 15, 16.

### Shared types and service wiring — Present

- `plugins/boost-common/src/types.ts` — AgenticProvider, ProviderDescriptor,
  ProviderCapabilities, NormalizedStreamEvent, ConversationSummary,
  ConversationDetails, InputItem
- `plugins/boost-node/src/services.ts` — `boostAiProviderServiceRef`
- `plugins/boost-node/src/extensions.ts` — `boostProviderExtensionPoint`
- `plugins/boost-backend/src/plugin.ts` + `provider/ProviderManager.ts` —
  default service factory resolving `getActiveProvider()`

### OGX module (OpenSpec name: llamastack) — Present, renamed

- `plugins/boost-backend-module-ogx/src/module.ts`
- `provider/ResponsesApiProvider.ts` and `ResponsesApiProviderFactory.ts`
- `ModelListCache.ts`, `McpAuthTokenCache.ts`, `ClientManager.ts`,
  `SessionMap.ts` — all via cacheService

### Kagenti module — Present

- `plugins/boost-backend-module-kagenti/src/module.ts`
- `provider/KagentiProvider.ts`, `KagentiProviderFactory.ts`,
  `KagentiApiClient.ts`
- `AgentCardCache.ts`, `KeycloakTokenCache.ts`, `SessionMap.ts`

### Standalone toolkits + packaging — Partial

- `plugins/boost-responses-api-toolkit/` — present, imported by OGX
- `plugins/boost-toolscope/` — CacheAdapter trio only; boost-backend does
  not import it
- `dynamic-plugins-filesystem-reference.yaml` and
  `dynamic-plugins-image-reference.yaml`

---

## Security, safety & governance — code that landed

OpenSpec: fine-grained-permissions, access-control. Staging issues 1, 2,
4, 5, 8, 13, 17. safety-shields and most of resilience were never staged.

### Permissions + middleware + lifecycle routes — Present

- `plugins/boost-common/src/permissions.ts` — boost-agent, boost-tool,
  IS_OWNER / IS_NOT_CREATOR / HAS_LIFECYCLE_STAGE, functional permissions
- `plugins/boost-backend/src/middleware/security.ts` —
  `authorizeLifecycleAction`, `validateSecurityMode`
  (`development-only-no-auth`; `none` rejected)
- `plugins/boost-backend/src/agents/` and `src/tools/` — permissioned
  lifecycle routes
- `src/kagenti/routes.ts` — stub `GET /kagenti/status` with
  `boost.kagenti.admin`

### Keycloak service-account auth — Present, cache gap

- `plugins/boost-node/src/KeycloakAuthClient.ts` — client-credentials,
  in-memory token cache, HTTPS check
- Used by kagenti-entity-provider and KagentiApiClient. Issue 17
  (cacheService) is still open.

---

## Platform operations — code that landed

OpenSpec: runtime-config, cache-migration, deployment, rag-pipelines,
white-label. Staging issues 3, 6–9, 15. white-label has no code.

### Runtime config + operational caches — Mostly present

- `config/RuntimeConfigResolver.ts`, `AdminConfigService.ts`, `schemas.ts`,
  `encryption.ts`
- `chat/RateLimiter.ts` and `ConversationAgentCache.ts` — wired
- `chat/ConversationRegistry.ts`, `approval/BackendApprovalStore.ts`,
  `documents/DocumentSyncService.ts` — constructed in `plugin.ts`, unused

---

## Agent creation & discovery — code that landed

OpenSpec: catalog-entities, agent-creation-paths, mcp-tools, agent-gallery.
Staging issues 4, 5, 12, 14, 15, 16. agent-gallery frontend was not in the
backend staging plan; the current `plugins/boost` catalog UI is from a
later OpenSpec.

### Entity providers + MCP CRUD + skills proxy — Partial

- `plugins/kagenti-entity-provider/` — KagentiAgentEntityProvider,
  KagentiToolEntityProvider
- `plugins/ogx-entity-provider/` — OgxModelEntityProvider,
  OgxAgentEntityProvider
- `plugins/boost-backend/src/mcp/` — MCP server store + CRUD/connect
  routes (not catalog entity providers)
- `plugins/boost-backend/src/skills/routes.ts` — proxy GET `/skills`,
  `/domains`, `/runtimes`; POST `/skills/deploy` with inline manifest;
  stub deployment poll
- Missing: `McpEntityProvider`, `VectorStoreEntityProvider`,
  CatalogProcessor validators in the core plugin, `manifestBuilder`,
  `runtimeId` resolution

---

## AI chat interaction — code that landed

OpenSpec: streaming-chat, conversation-history, hitl-approval,
rag-knowledge, frontend-composability. Staging issues 6–9 (backend only).
frontend-composability was never staged.

### Chat + conversation backend — Backend present

- `plugins/boost-backend/src/chat/routes.ts` — POST `/chat`, POST
  `/chat/stream`
- `conversationRoutes.ts` + `ConversationStore.ts` — sessions, messages,
  feedback, export, search via `?q=`
- HITL and RAG are scaffold-only (see issues 8 and 9)
- No BoostChatPage, BoostAdminPage, BoostAgentStudioPage, ChatView,
  AdminLayout, or feature-flag wiring in `plugins/boost`

---

## OpenSpec specified, not created under `plugins/`

These requirements appear in the five change areas but have no
corresponding implementation path — either unstaged (not in
`staged-issues.md`) or staged and still missing.

| OpenSpec location                               | Why it has no code path                                                | Expected path                                                                                          |
| ----------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| pluggable tasks 8b–8c / issue 16                | Staged, not done                                                       | `plugins/boost-backend/src/skills/manifestBuilder.ts`; runtimes from app-config; `runtimeId` on deploy |
| security task 17 / issue 17                     | Staged, not done                                                       | KeycloakAuthClient using `coreServices.cache` in boost-node + kagenti-entity-provider                  |
| agent-creation 1d / issue 12                    | Staged, never created                                                  | plugins/boost-backend `McpEntityProvider` + `VectorStoreEntityProvider`                                |
| ai-chat hitl-approval / issue 8                 | Scaffold unused                                                        | HITL HTTP routes + SonataFlow client + `X-Boost-Workflow-Callback`                                     |
| ai-chat rag-knowledge / issue 9                 | Scaffold unused                                                        | Document ingest, vector-store APIs, RAG query routes                                                   |
| agent-creation 3.5 / issue 14                   | Package exists, unused                                                 | boost-backend importing boost-toolscope (no src import today)                                          |
| pluggable 4.\* + ai-chat frontend-composability | Excluded from staging plan                                             | plugins/boost BoostChatPage / BoostAdminPage / BoostAgentStudioPage, capability checks                 |
| security/specs/safety-shields                   | Never staged                                                           | Input/output shields, SafetyEvalPanel                                                                  |
| platform/specs/white-label                      | Never staged                                                           | BrandingPanel, PromptsPanel, ChatExperiencePanel                                                       |
| agent-creation/specs/agent-gallery              | Never staged as chat gallery; later catalog UI is a different OpenSpec | `useAgentGalleryData` — current catalog page is plugins/boost AI Catalog                               |

---

## `packages/backend` wiring (from these OpenSpecs)

`packages/backend/src/index.ts` is the only source file. Boost-related adds:

- `@red-hat-developer-hub/backstage-plugin-boost-backend`
- `@red-hat-developer-hub/backstage-plugin-boost-backend-module-ogx`
- `@red-hat-developer-hub/backstage-plugin-boost-backend-module-kagenti`
- `@red-hat-developer-hub/backstage-plugin-kagenti-entity-provider`
- `@red-hat-developer-hub/backstage-plugin-ogx-entity-provider`

Toolscope, responses-api-toolkit, boost-common, and boost-node are pulled
in as library dependencies of those plugins, not registered as backend
modules here.

---

## Code that exists but is not from these five OpenSpecs

These paths live under `plugins/` (and extra boost-backend directories)
but were produced by later OpenSpec changes — AI catalog frontend,
entity-model SDK, connectors, ingestion health — not by the original five
areas or `staged-issues.md`.

| Package / path                                 | Likely later OpenSpec                      | What it is                                                      |
| ---------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| `plugins/boost/src/components/catalog/`        | ai-catalog-frontend (archived)             | AI Catalog browse UI. Not BoostChatPage / Admin / Agent Studio. |
| `plugins/boost-entity-provider-sdk/`           | ai-catalog-entity-model                    | AIAssetEntityProvider, DeltaSyncManager, AIAssetValidator       |
| `plugins/boost-connector-utils/`               | connector-shared-infrastructure            | CA bundle, fault isolation, `safeGetOptionalString`             |
| `plugins/boost-migration-readiness/`           | upstream-schema-alignment                  | CLI for catalog migration readiness                             |
| `plugins/boost-backend/src/ai-catalog/`        | ai-catalog-asset-governance                | CatalogAssetLoader, `/ai-catalog/assets`, conditional rules     |
| `plugins/boost-backend/src/ingestion/`         | ingestion-health-dashboard / audit-metrics | HealthStatusService, SyncAttemptsStore, `GET /ingestion-health` |
| `plugins/boost-common/src/aiAssetTaxonomy.ts`  | ai-catalog-entity-model                    | Shared kind/`spec.type` taxonomy used by catalog UI + backend   |
| `plugins/boost-common/src/ingestion-health.ts` | ingestion-health-dashboard                 | Shared ingestion health types                                   |
