# Proposal: MCP Server Catalog Ingestion — catalog-info.yaml & Annotation Enrichment

## Why

MCP (Model Context Protocol) servers are a key entity type in the RHDH AI Asset catalog. Teams need to discover, govern, and consume them alongside other AI assets (skills, agents, models).

The original plan depended on RHDHPLAN-393 delivering an upstream Backstage entity provider that polls the public MCP Registry (`registry.modelcontextprotocol.io`). That upstream work (RHIDP-15655, RHIDP-15658) is unassigned with no timeline, and enterprise customers in air-gapped environments cannot reach the public registry anyway.

A simpler approach: define MCP server entities in standard `catalog-info.yaml` files hosted in Git repositories. Backstage already discovers and ingests these. RHDH adds a lightweight CatalogProcessor for annotation enrichment. This approach:

1. **Eliminates the RHDHPLAN-393 blocker** — no dependency on upstream provider delivery
2. **Works in air-gapped environments natively** — catalog-info.yaml files live in Git repos that customers already mirror
3. **Leverages existing Backstage infrastructure** — location discovery, entity processing, GitHub/GitLab integration auth
4. **Gives teams control** — each team defines their MCP servers in their own repos
5. **AI Asset annotation enrichment** — CatalogProcessor auto-populates `rhdh.io/ai-asset-category`, `rhdh.io/ai-asset-version`, `rhdh.io/ai-asset-source` annotations for integration with RHDH's AI Asset catalog and SDK validation (RHDHPLAN-1507)

> **RHDHPLAN-1510 Consolidation (2026-07-08):** Epic RHIDP-15315 (OCI Skill Registry Connector) was closed — its scope has been absorbed by RHIDP-15294 (OCI Skill Registry) under RHDHPLAN-1507. RHDHPLAN-1510 continues with 3 surviving epics: RHIDP-15313 (this MCP server ingestion), RHIDP-15314 (RHOAI connector), and RHIDP-15316 (Cross-Connector Shared Infrastructure).
>
> **Stakeholder Alignment (2026-07-13):**
>
> - **RHDHPLAN-393 replaced:** The upstream MCP Registry entity provider (RHDHPLAN-393) is no longer a dependency. MCP server entities are ingested from catalog-info.yaml files via standard Backstage discovery, eliminating the RHIDP-15655/RHIDP-15658 blocker.
> - **MCP resource mapping deferred:** Mapping MCP resources (tools, prompts) as catalog entities is deferred for RHDH 2.1 (Christophe's consent; upstream due diligence pending). This change focuses on MCP server entity discovery only.

## What Boost Builds

### catalog-info.yaml Schema for MCP Server Entities

- **Documented entity schema** — `kind: API` with `spec.type: mcp-server`, following emerging Backstage convention
- **Example catalog-info.yaml files** — templates for common MCP server types (filesystem, database, API gateway)
- **Validation guidance** — required and optional fields, annotation semantics

### CatalogProcessor for Annotation Enrichment

- **`McpServerAnnotationProcessor`** — Backstage CatalogProcessor that auto-populates `rhdh.io/ai-asset-*` annotations on entities with `spec.type: mcp-server`
- **Preserve-existing semantics** — annotations already set in catalog-info.yaml are not overwritten
- **Default annotation values** — `rhdh.io/ai-asset-category: mcp-server`, `rhdh.io/ai-asset-version: unknown` (when not specified), `rhdh.io/ai-asset-source: catalog-info/<namespace>`
- **SDK validation integration** — enriched entities pass through RHDHPLAN-1507's SDK validation layer

### Documentation and Examples

- **Example catalog locations** — how to register MCP server catalog-info.yaml files with Backstage discovery
- **Air-gapped deployment guide** — catalog-info.yaml in mirrored Git repos works without additional configuration
- **Annotation reference** — AI Asset annotation scheme and semantics

## Impact

**New code:**

- `McpServerAnnotationProcessor` — CatalogProcessor implementation in the Boost backend plugin
- Example catalog-info.yaml files for MCP server entities

**Modified packages:**

- `plugins/boost-backend/` — register the CatalogProcessor with the catalog processing extension point

**Cross-references:**

- `workspaces/boost/openspec/changes/ai-catalog-entity-model/` — annotation scheme and SDK validation (RHDHPLAN-1507)
- `workspaces/boost/openspec/changes/connector-shared-infrastructure/` — shared utilities (RHIDP-15316) — not consumed by this change (catalog-info.yaml ingestion does not poll external APIs)

**Configuration schema:**

```yaml
# No MCP-Registry-specific configuration needed.
# MCP server entities are discovered through standard Backstage catalog locations:
catalog:
  locations:
    - type: url
      target: https://github.com/my-org/mcp-servers/blob/main/catalog-info.yaml
```

**Affected Jira stories:**

- RHIDP-15317: MCP server catalog-info.yaml entity schema and examples
- RHIDP-15319: MCP server AI Asset annotation enrichment processor
