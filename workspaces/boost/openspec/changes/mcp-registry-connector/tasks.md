# Tasks: MCP Server Catalog Ingestion — catalog-info.yaml & Annotation Enrichment

> **RHDHPLAN-1510 Consolidation (2026-07-08):** Epic RHIDP-15315 (OCI Skill Registry Connector) was closed — scope absorbed by RHIDP-15294 (RHDHPLAN-1507). MCP server ingestion continues under RHIDP-15313.
>
> **RHDHPLAN-393 replaced:** The upstream MCP Registry entity provider (RHDHPLAN-393) is no longer a dependency. MCP server entities are ingested from catalog-info.yaml files via standard Backstage catalog discovery. RHIDP-15318 (TLS/auth hardening) is descoped — authentication for Git repository access is handled by Backstage's existing integrations.
>
> **Cross-connector dependencies (RHIDP-15316):**
>
> - RHIDP-15319 (annotation enrichment) is blocked by RHDHPLAN-1507 SDK (RHIDP-15258)
> - RHIDP-15317 (entity schema) has no cross-connector blockers
> - RHIDP-15318 (TLS/auth) is descoped — handled by Backstage Git integrations

## 1. MCP Server Entity Schema & Examples (P0) — RHIDP-15317

- [ ] 1.1 Define catalog-info.yaml schema for MCP server entities (`kind: API`, `spec.type: mcp-server`)
- [ ] 1.2 Document required fields: `apiVersion`, `kind`, `metadata.name`, `spec.type`, `spec.lifecycle`, `spec.owner`
- [ ] 1.3 Document optional fields: `metadata.title`, `metadata.description`, `metadata.tags`, `spec.definition`, `spec.version`
- [ ] 1.4 Document optional AI Asset annotations: `rhdh.io/ai-asset-category`, `rhdh.io/ai-asset-version`, `rhdh.io/ai-asset-source`
- [ ] 1.5 Create example catalog-info.yaml: single MCP server entity (filesystem operations)
- [ ] 1.6 Create example catalog-info.yaml: multiple MCP server entities in one file
- [ ] 1.7 Create example catalog-info.yaml: MCP server with explicit AI Asset annotations
- [ ] 1.8 Create example catalog-info.yaml: MCP server with minimal required fields only
- [ ] 1.9 Document catalog location configuration for MCP server discovery
- [ ] 1.10 Document GitHub discovery provider configuration for organization-wide MCP server discovery
- [ ] 1.11 Write validation test: required fields present and valid
- [ ] 1.12 Write validation test: optional fields handled correctly
- [ ] 1.13 Write validation test: multiple entities per file
- [ ] 1.14 Add documentation: air-gapped deployment with internal Git server

## 2. Annotation Enrichment Processor (P1) — RHIDP-15319

- [ ] 2.1 Implement `McpServerAnnotationProcessor` class implementing `CatalogProcessor`
- [ ] 2.2 Implement `preProcessEntity` — check `spec.type === 'mcp-server'`, skip non-MCP entities
- [ ] 2.3 Implement annotation enrichment logic (`enrichWithAiAssetAnnotations()`)
- [ ] 2.4 Add `rhdh.io/ai-asset-category: "mcp-server"` auto-population (preserve existing)
- [ ] 2.5 Add `rhdh.io/ai-asset-source: "catalog-info/<namespace>"` auto-population (preserve existing)
- [ ] 2.6 Implement version extraction: check `rhdh.io/ai-asset-version` annotation first, then `spec.version`, then default to `"unknown"`
- [ ] 2.7 Add version normalization via `normalizeAIAssetVersion()` (SDK-exported from RHDHPLAN-1507)
- [ ] 2.8 Add graceful degradation: enrichment failure logs warning, returns entity without annotations
- [ ] 2.9 Add preservation logic: do not overwrite existing AI Asset annotations
- [ ] 2.10 Add DEBUG-level logging for enriched entities
- [ ] 2.11 Register processor with catalog processing extension point in Boost backend plugin
- [ ] 2.12 Integrate with RHDHPLAN-1507's SDK validation layer: import `AIAssetValidator` from SDK, ensure it runs in the catalog processing chain after `McpServerAnnotationProcessor`, handle validation warnings without blocking ingestion
- [ ] 2.13 Add Prometheus metrics for enrichment success/failure rate
- [ ] 2.14 Add Prometheus metrics for enrichment latency (p50, p95, p99)
- [ ] 2.15 Write unit test: annotation population with all required fields
- [ ] 2.16 Write unit test: non-MCP entity passes through unchanged
- [ ] 2.17 Write unit test: existing annotation preservation
- [ ] 2.18 Write unit test: version extraction from spec.version
- [ ] 2.19 Write unit test: version fallback to "unknown"
- [ ] 2.20 Write unit test: enrichment failure graceful degradation
- [ ] 2.21 Write integration test: SDK validation integration with enriched entities
- [ ] 2.22 Write integration test: enrichment performance (1000 entities under 5s)
- [ ] 2.23 Add documentation: AI Asset annotation scheme and semantics
- [ ] 2.24 Add documentation: CatalogProcessor behavior and configuration

## 3. Integration Testing (P1)

- [ ] 3.1 Write end-to-end test: MCP server entity from catalog-info.yaml ingested into catalog
- [ ] 3.2 Write end-to-end test: annotation enrichment in full catalog processing pipeline
- [ ] 3.3 Write end-to-end test: multiple MCP server entities from single catalog-info.yaml
- [ ] 3.4 Write end-to-end test: MCP server entity with explicit annotations preserved
- [ ] 3.5 Write end-to-end test: non-MCP entities unaffected by processor
- [ ] 3.6 Write end-to-end test: SDK validation integration in full pipeline
- [ ] 3.7 Write end-to-end test: Prometheus metrics collection and validation

## 4. Cross-References and Dependencies (P2)

- [ ] 4.1 Verify dependency on RHDHPLAN-1507 (AI catalog entity model: annotation scheme, SDK validation)
- [ ] 4.2 Add cross-reference links in documentation to related changes
- [ ] 4.3 Coordinate with RHDHPLAN-1507 for annotation schema updates
