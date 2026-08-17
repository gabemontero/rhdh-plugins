# MCP Server Entity Schema — catalog-info.yaml

> **Status: Draft** — Pre-implementation specification.
>
> **Replaces mirror-endpoint spec:** The original RHIDP-15317 spec covered mirror endpoint configuration for polling the MCP Registry API. With the shift to catalog-info.yaml-based ingestion, RHIDP-15317 now covers the entity schema and discovery mechanism instead.

## Description

MCP server entities are defined in standard `catalog-info.yaml` files hosted in Git repositories and discovered through Backstage's built-in catalog location mechanisms. This specification defines the entity schema, required and optional fields, and discovery configuration.

This specification covers RHIDP-15317: MCP server catalog-info.yaml entity schema and examples.

## EXISTING Requirements

None — this is a new catalog-info.yaml schema for MCP server entities, replacing the RHDHPLAN-393 upstream provider approach.

## ADDED Requirements

### Requirement: MCP Server Entity Schema

**WHEN** a team defines an MCP server entity in a catalog-info.yaml file:

```yaml
apiVersion: backstage.io/v1alpha1
kind: API
metadata:
  name: filesystem-mcp-server
  title: Filesystem MCP Server
  description: MCP server providing filesystem read/write operations
  annotations:
    rhdh.io/ai-asset-category: mcp-server
    rhdh.io/ai-asset-version: '1.2.3'
    rhdh.io/ai-asset-source: catalog-info/default
  tags:
    - mcp
    - filesystem
spec:
  type: mcp-server
  lifecycle: production
  owner: team-platform
  definition: |
    MCP server exposing read/write filesystem tools.
```

**THEN** Backstage ingests the entity through standard catalog discovery.

**AND** the entity appears in the RHDH AI Asset catalog alongside other AI assets.

**AND** the `McpServerAnnotationProcessor` enriches any missing `rhdh.io/ai-asset-*` annotations.

---

### Requirement: Required Fields

**WHEN** a catalog-info.yaml defines an MCP server entity:

**THEN** the following fields are required:

- `apiVersion: backstage.io/v1alpha1`
- `kind: API`
- `metadata.name` — unique identifier, lowercase alphanumeric with hyphens
- `spec.type: mcp-server` — triggers the annotation processor
- `spec.lifecycle` — one of `experimental`, `production`, `deprecated`
- `spec.owner` — entity reference to the owning team or user

**AND** entities missing required fields are rejected by Backstage's standard entity validation.

---

### Requirement: Optional Fields

**WHEN** a catalog-info.yaml defines an MCP server entity:

**THEN** the following fields are optional:

- `metadata.title` — human-readable display name
- `metadata.description` — description of the MCP server's purpose
- `metadata.annotations.rhdh.io/ai-asset-category` — defaults to `mcp-server` if omitted (auto-populated by processor)
- `metadata.annotations.rhdh.io/ai-asset-version` — version string; defaults to `unknown` if omitted (auto-populated by processor)
- `metadata.annotations.rhdh.io/ai-asset-source` — source identifier; defaults to `catalog-info/<namespace>` if omitted (auto-populated by processor)
- `metadata.tags` — freeform tags for filtering
- `spec.definition` — textual description of the MCP server's capabilities

**AND** omitted optional annotation fields are auto-populated by the `McpServerAnnotationProcessor`.

---

### Requirement: Entity Discovery via Catalog Locations

**WHEN** an administrator configures Backstage to discover MCP server entities:

```yaml
catalog:
  locations:
    - type: url
      target: https://github.com/my-org/mcp-servers/blob/main/catalog-info.yaml
```

**THEN** Backstage discovers and ingests the MCP server entities from the configured location.

**AND** the discovery mechanism supports all standard Backstage location types (`url`, `file`, `github-discovery`, etc.).

**AND** no MCP-Registry-specific configuration is required beyond standard catalog locations.

---

**WHEN** an administrator configures GitHub discovery for an organization:

```yaml
catalog:
  providers:
    githubDiscovery:
      myOrg:
        organization: my-org
        catalogPath: /catalog-info.yaml
```

**THEN** MCP server entities defined in any repository's `catalog-info.yaml` within the organization are automatically discovered.

**AND** the discovery is identical to how any other catalog entity is discovered — no special MCP handling needed.

---

### Requirement: Air-Gapped Deployment Support

**WHEN** RHDH is deployed in an air-gapped environment:

**THEN** MCP server entities are discovered from catalog-info.yaml files in Git repositories accessible within the air-gapped network.

**AND** no outbound internet connectivity is required for MCP server entity ingestion.

**AND** the same catalog location configuration works for both internet-connected and air-gapped deployments.

---

### Requirement: Multiple MCP Server Entities Per File

**WHEN** a catalog-info.yaml file defines multiple MCP server entities:

```yaml
apiVersion: backstage.io/v1alpha1
kind: API
metadata:
  name: filesystem-mcp-server
spec:
  type: mcp-server
  lifecycle: production
  owner: team-platform
---
apiVersion: backstage.io/v1alpha1
kind: API
metadata:
  name: database-mcp-server
spec:
  type: mcp-server
  lifecycle: experimental
  owner: team-data
```

**THEN** each entity is ingested independently.

**AND** each entity is independently enriched by the `McpServerAnnotationProcessor`.

---

### Requirement: Non-MCP Entities Unaffected

**WHEN** a catalog-info.yaml file contains both MCP server entities and non-MCP entities:

**THEN** the `McpServerAnnotationProcessor` only processes entities with `spec.type: mcp-server`.

**AND** non-MCP entities pass through the processor unchanged.

**AND** the processor introduces no latency or side effects for non-MCP entities.
