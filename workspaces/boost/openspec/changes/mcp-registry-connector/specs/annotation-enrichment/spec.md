# AI Asset Annotation Enrichment — CatalogProcessor

> **Status: Draft** — Pre-implementation specification.
>
> **Cross-connector dependencies:** RHIDP-15319 is blocked by RHDHPLAN-1507's SDK (RHIDP-15258) which defines the AI Asset annotation scheme (`rhdh.io/ai-asset-category`, `rhdh.io/ai-asset-version`, `rhdh.io/ai-asset-source`) and SDK validation layer. The annotation constants and validation must be exported by the SDK before this enrichment processor can integrate.
>
> **Connector-specific extensions:** Individual connectors may define additional `rhdh.io/ai-asset-*` annotations beyond the core three. The OCI Skill connector defines `rhdh.io/ai-asset-digest` (OCI image digest for incremental sync). These extensions follow the same namespace but are not required by the SDK validation layer.

## Description

The `McpServerAnnotationProcessor` is a Backstage CatalogProcessor that enriches MCP server entities with RHDH AI Asset annotations. It runs during Backstage's entity processing pipeline, auto-populating `rhdh.io/ai-asset-*` annotations on any entity with `spec.type: mcp-server` — whether the entity was discovered from a catalog-info.yaml file, an API call, or any other source.

This specification covers RHIDP-15319: MCP server AI Asset annotation enrichment.

## EXISTING Requirements

None — this is a new CatalogProcessor for MCP server entity annotation enrichment, replacing the upstream provider wrapper approach (RHDHPLAN-393).

## ADDED Requirements

### Requirement: Annotation Population During Entity Processing

**WHEN** the Backstage catalog processes an entity with `spec.type: mcp-server`:

**THEN** the `McpServerAnnotationProcessor` enriches the entity with AI Asset annotations during `preProcessEntity`.

**AND** the enriched entity carries the following annotations:

```yaml
metadata:
  annotations:
    rhdh.io/ai-asset-category: 'mcp-server'
    rhdh.io/ai-asset-version: '1.0.0' # From catalog-info.yaml or "unknown"
    rhdh.io/ai-asset-source: 'catalog-info/<namespace>'
```

**AND** the annotation enrichment happens synchronously within the processing pipeline.

**AND** the enriched entity is logged at DEBUG level for observability.

---

**WHEN** the entity already contains AI Asset annotations (set explicitly in catalog-info.yaml):

**THEN** the processor does NOT overwrite existing annotations.

**AND** the processor logs a DEBUG-level message indicating annotations were preserved.

**AND** the processor proceeds with the entity unchanged.

---

**WHEN** the entity does NOT have `spec.type: mcp-server`:

**THEN** the processor returns the entity unchanged.

**AND** the processor introduces no latency or side effects for non-MCP entities.

---

**WHEN** the enrichment logic fails (unexpected entity structure, annotation serialization error):

**THEN** the processor logs a WARNING-level message indicating the enrichment failure.

**AND** the processor returns the entity without annotations (degraded mode).

**AND** the warning message includes the entity reference and error details.

**AND** Prometheus metrics track enrichment failure rate.

### Requirement: Version Metadata Handling

**WHEN** the catalog-info.yaml includes a version annotation:

```yaml
metadata:
  annotations:
    rhdh.io/ai-asset-version: '1.2.3'
```

**THEN** the processor preserves the version value as-is (it was explicitly set by the entity author).

---

**WHEN** the catalog-info.yaml does NOT include a version annotation:

**THEN** the processor populates `rhdh.io/ai-asset-version: "unknown"`.

**AND** the processor logs a DEBUG-level message indicating missing version metadata.

---

**WHEN** the catalog-info.yaml includes a `spec.version` field (alternative version source):

```yaml
spec:
  type: mcp-server
  version: '2.0.0'
```

**THEN** the processor extracts the version from `spec.version`, normalizes it via `normalizeAIAssetVersion()` (SDK-exported from RHDHPLAN-1507), and populates `rhdh.io/ai-asset-version`.

**AND** an explicit `rhdh.io/ai-asset-version` annotation takes precedence over `spec.version`.

### Requirement: SDK Validation Integration

**WHEN** the enriched entity is passed to the catalog for ingestion:

**THEN** the entity passes through RHDHPLAN-1507's SDK validation layer.

**AND** the SDK validation layer verifies the presence of required AI Asset annotations.

**AND** the SDK validation layer verifies the annotation values conform to the schema (category, version, source).

**AND** validation failures are logged but do NOT block entity ingestion (warn-only mode).

---

**WHEN** the SDK validation layer detects missing or invalid annotations:

**THEN** Prometheus metrics track validation failure rate per annotation field.

**AND** the validation layer logs a WARNING-level message with remediation guidance.

**AND** the entity is ingested despite validation failures (degraded mode).

### Requirement: Annotation Category Constancy

**WHEN** the processor enriches an entity with `spec.type: mcp-server`:

**THEN** the processor always populates `rhdh.io/ai-asset-category: "mcp-server"` unless the entity already carries this annotation.

**AND** the processor does NOT infer or vary the category based on entity metadata.

**AND** all MCP server entities enriched by the processor share the same category value.

### Requirement: Annotation Source Format

**WHEN** the processor enriches an entity with `spec.type: mcp-server`:

**THEN** the processor populates `rhdh.io/ai-asset-source` using the format `catalog-info/<namespace>`, where `<namespace>` is the entity's `metadata.namespace` (defaulting to `default`).

**AND** the source prefix (`catalog-info`) is constant — it identifies the ingestion mechanism.

**AND** the namespace suffix enables provenance tracking when entities come from different namespaces.

---

**WHEN** a catalog-info.yaml explicitly sets `rhdh.io/ai-asset-source`:

```yaml
metadata:
  annotations:
    rhdh.io/ai-asset-source: 'custom-source/my-team'
```

**THEN** the processor preserves the explicit value.

**AND** the processor does NOT overwrite it with the default `catalog-info/<namespace>` format.

### Requirement: Annotation Enrichment Performance

**WHEN** the processor enriches an entity:

**THEN** the enrichment logic completes in under 5ms (synchronous operation).

**AND** the enrichment logic does NOT make network requests (local metadata extraction only).

**AND** the enrichment logic does NOT query external services.

---

**WHEN** the processor enriches 1000 entities in a single catalog processing cycle:

**THEN** the total enrichment overhead is under 5 seconds (5ms per entity).

**AND** the processor does NOT introduce catalog ingestion latency regressions.

**AND** Prometheus metrics track enrichment latency per entity (p50, p95, p99).

### Requirement: Prometheus Metrics for Annotation Enrichment

**WHEN** the processor enriches an entity:

**THEN** Prometheus metrics track enrichment success and failure rates.

**AND** metrics include labels for entity kind, entity reference, and enrichment result (success/failure).

---

**WHEN** the SDK validation layer validates enriched entities:

**THEN** Prometheus metrics track validation success and failure rates per annotation field.

**AND** metrics include labels for annotation field name, validation result, and failure reason.
