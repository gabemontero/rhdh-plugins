# Design: MCP Server Catalog Ingestion — catalog-info.yaml & Annotation Enrichment

## Context

MCP (Model Context Protocol) servers need to appear in the RHDH AI Asset catalog so teams can discover, govern, and consume them. The original plan (RHDHPLAN-393) assumed an upstream Backstage entity provider that would poll the public MCP Registry (`registry.modelcontextprotocol.io`) and emit entities. That provider has not landed, and enterprise deployments often run in air-gapped environments where contacting a public registry is not viable anyway.

A simpler, more robust approach is to define MCP server entities in standard `catalog-info.yaml` files hosted in Git repositories. Backstage already knows how to discover and ingest these. RHDH adds a lightweight CatalogProcessor that enriches discovered MCP server entities with `rhdh.io/ai-asset-*` annotations for integration with the AI Asset catalog and SDK validation.

> **RHDHPLAN-1510 Consolidation (2026-07-08):** Epic RHIDP-15315 (OCI Skill Registry Connector) was closed — scope absorbed by RHIDP-15294 (RHDHPLAN-1507). MCP server ingestion continues under RHIDP-15313. Dependency chain: RHIDP-15316 cross-connector stories (15265 endpoint/creds, 15329 CA bundles) apply to connectors that poll external APIs (RHOAI, OCI); they are not needed for catalog-info.yaml-based ingestion.
>
> **Stakeholder Alignment (2026-07-13):**
>
> - **RHDHPLAN-393 replaced:** The upstream MCP Registry entity provider (RHDHPLAN-393) is no longer a dependency. MCP server entities are ingested from catalog-info.yaml files via standard Backstage discovery, eliminating the blocker. RHIDP-15655 and RHIDP-15658 are no longer on the critical path for RHDHPLAN-1510.
> - **MCP resource mapping deferred:** Mapping MCP resources (tools, prompts) as catalog entities is deferred for RHDH 2.1 (Christophe's consent; upstream due diligence pending). This change focuses on MCP server entity discovery only.

## Goals

- **catalog-info.yaml schema** — define a clear, documented schema for MCP server entities in catalog-info.yaml files
- **Air-gapped by default** — catalog-info.yaml files live in Git repos; no external registry connectivity required
- **AI Asset integration** — a CatalogProcessor enriches MCP server entities with `rhdh.io/ai-asset-*` annotations for catalog integration and SDK validation
- **Zero regressions** — existing catalog ingestion for non-MCP entities is unaffected
- **Packageability** — CatalogProcessor ships as part of the Boost backend plugin (or standalone RHDH dynamic plugin)

## Non-Goals

- Building or polling a live MCP Registry API (replaced by catalog-info.yaml approach)
- Building a mirror registry server
- Implementing MCP server validation or health checks (covered in separate epic)
- Supporting MCP resource (tool/prompt) entities (deferred to RHDH 2.1)
- TLS/auth hardening for MCP Registry API access (no longer applicable — Git repo auth is handled by Backstage's existing GitHub/GitLab integrations)

## Decisions

### Decision 1: catalog-info.yaml over Upstream Provider

**Decision:** Ingest MCP server entities from standard `catalog-info.yaml` files discovered by Backstage's built-in catalog discovery mechanisms, rather than depending on an upstream MCP Registry entity provider (RHDHPLAN-393).

**Rationale:**

- Eliminates the RHDHPLAN-393 blocker (RHIDP-15655, RHIDP-15658) — those upstream issues are unassigned and have no timeline
- Works in air-gapped environments natively — catalog-info.yaml files are in Git repos that customers already mirror
- Leverages existing Backstage infrastructure (location discovery, entity processing, GitHub/GitLab integration auth)
- Gives teams full control over which MCP servers appear in the catalog
- Simpler architecture — no provider wrapper, no mirror endpoint, no registry-specific TLS/auth

**Alternative considered:** Wait for RHDHPLAN-393's upstream MCP Registry entity provider to land, then wrap it with productization.

**Rejected because:** No timeline on upstream delivery; the wrapper adds complexity for air-gapped support that catalog-info.yaml solves inherently.

**Example catalog-info.yaml:**

```yaml
apiVersion: backstage.io/v1alpha1
kind: API
metadata:
  name: filesystem-mcp-server
  title: Filesystem MCP Server
  description: MCP server providing filesystem operations
  annotations:
    rhdh.io/ai-asset-category: mcp-server
    rhdh.io/ai-asset-version: '1.2.3'
    rhdh.io/ai-asset-source: catalog-info/my-namespace
spec:
  type: mcp-server
  lifecycle: production
  owner: team-platform
  definition: |
    MCP server exposing read/write filesystem tools.
```

### Decision 2: CatalogProcessor for Annotation Enrichment

**Decision:** Implement an `McpServerAnnotationProcessor` as a Backstage CatalogProcessor that auto-populates `rhdh.io/ai-asset-*` annotations on entities with `spec.type: mcp-server`.

**Rationale:**

- CatalogProcessors run during Backstage's entity processing pipeline — the standard extension point for transforming entities
- Annotations can be pre-populated in catalog-info.yaml (processor preserves existing values) or auto-populated by the processor
- Decoupled from entity discovery — works regardless of how the entity enters the catalog (catalog-info.yaml, API, or future provider)
- Easy to test (unit tests verify processor input/output)

**Alternative considered:** Require all annotations to be manually specified in catalog-info.yaml.

**Rejected because:** Error-prone, inconsistent annotation values, no enforcement of annotation presence.

**Implementation pattern:** See `enrichWithAiAssetAnnotations()` in Decision 4. The processor delegates to that function:

```typescript
// plugins/boost-backend/src/processors/McpServerAnnotationProcessor.ts
import {
  CatalogProcessor,
  CatalogProcessorEmit,
  LocationSpec,
} from '@backstage/plugin-catalog-node';
import { Entity } from '@backstage/catalog-model';

export class McpServerAnnotationProcessor implements CatalogProcessor {
  getProcessorName(): string {
    return 'McpServerAnnotationProcessor';
  }

  async preProcessEntity(
    entity: Entity,
    _location: LocationSpec,
    _emit: CatalogProcessorEmit,
  ): Promise<Entity> {
    if (entity.spec?.type !== 'mcp-server') {
      return entity;
    }
    return enrichWithAiAssetAnnotations(entity);
  }
}
```

The processor checks `spec.type === 'mcp-server'` and fills in any missing `rhdh.io/ai-asset-*` annotations without overwriting values already present in the catalog-info.yaml.

### Decision 3: Entity Kind — API with spec.type: mcp-server

**Decision:** MCP server entities use `kind: API` with `spec.type: mcp-server`, following the Backstage upstream direction for MCP server representation.

**Rationale:**

- Aligns with emerging Backstage convention for API-type entities representing MCP servers
- Reuses existing Backstage API entity infrastructure (API docs, API catalog page)
- `spec.type: mcp-server` distinguishes MCP servers from other API types (REST, gRPC, GraphQL)
- The CatalogProcessor triggers on `spec.type`, not `kind`, making it kind-agnostic

**Configuration schema:**

```yaml
# No connector-specific configuration required.
# MCP server entities are discovered through standard Backstage catalog locations:
catalog:
  locations:
    - type: url
      target: https://github.com/my-org/mcp-servers/blob/main/catalog-info.yaml
    - type: url
      target: https://github.com/my-org/another-repo/blob/main/mcp-server.yaml
```

### Decision 4: Annotation Enrichment Semantics

**Decision:** The CatalogProcessor populates three AI Asset annotations on MCP server entities, preserving any values already set in catalog-info.yaml.

**Annotation scheme (from RHDHPLAN-1507's `ai-catalog-entity-model`):**

```yaml
metadata:
  annotations:
    # AI Asset category (always "mcp-server" for MCP server entities)
    rhdh.io/ai-asset-category: mcp-server

    # Version metadata (from catalog-info.yaml or "unknown" if not specified)
    rhdh.io/ai-asset-version: '1.0.0'

    # Source identifier — "catalog-info/<namespace>" where <namespace> is the entity's metadata.namespace
    rhdh.io/ai-asset-source: catalog-info/my-namespace
```

**Enrichment logic:**

```typescript
function enrichWithAiAssetAnnotations(entity: Entity): Entity {
  const annotations = entity.metadata.annotations ?? {};
  const namespace = entity.metadata.namespace ?? 'default';
  return {
    ...entity,
    metadata: {
      ...entity.metadata,
      annotations: {
        'rhdh.io/ai-asset-category': 'mcp-server',
        'rhdh.io/ai-asset-version':
          normalizeAIAssetVersion(annotations['rhdh.io/ai-asset-version']) ||
          'unknown',
        'rhdh.io/ai-asset-source': `catalog-info/${namespace}`,
        ...annotations,
      },
    },
  };
}
```

**SDK validation integration:**

- Enriched entities pass through RHDHPLAN-1507's SDK validation layer during catalog ingestion
- Invalid annotations trigger validation warnings but don't block ingestion
- Validation metrics track annotation completeness and correctness

## Risks

### Risk 1: Incomplete catalog-info.yaml Adoption

**Likelihood:** Medium
**Impact:** Medium
**Mitigation:**

- Provide documented examples and templates for common MCP server types
- CatalogProcessor auto-populates missing annotations — teams don't need to get annotations perfect
- Migration guide from manual entity definition to catalog-info.yaml

### Risk 2: Annotation Schema Divergence

**Likelihood:** Low
**Impact:** Low
**Mitigation:**

- Shared annotation schema defined in RHDHPLAN-1507's `ai-catalog-entity-model`
- SDK validation enforces annotation schema compliance
- Automated tests verify annotation presence and correctness
- Version annotation schema in `@red-hat-developer-hub/backstage-plugin-boost-common` package

### Risk 3: Future Upstream Provider Overlap

**Likelihood:** Medium
**Impact:** Low
**Mitigation:**

- If RHDHPLAN-393's upstream provider eventually ships, catalog-info.yaml and provider-discovered entities coexist — the CatalogProcessor enriches both
- No lock-in to one discovery mechanism
- CatalogProcessor is kind-agnostic and source-agnostic
