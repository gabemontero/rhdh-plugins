# Authentication and Access Control — Backstage Git Integration

> **Status: Draft** — Pre-implementation specification.
>
> **Replaces TLS/auth hardening spec:** The original RHIDP-15318 spec covered custom CA bundles and K8s Secret auth for polling the MCP Registry API. With the shift to catalog-info.yaml-based ingestion, connector-specific TLS and credential management are no longer needed. Authentication for Git repository access is handled by Backstage's existing GitHub/GitLab integrations.

## Description

MCP server entities are defined in catalog-info.yaml files hosted in Git repositories. Access to these repositories — including private repos in air-gapped environments — is handled by Backstage's built-in GitHub, GitLab, and Bitbucket integration authentication. No MCP-specific TLS or credential configuration is required.

RHIDP-15318 is **descoped** from RHIDP-15313. The original story's concerns are addressed as follows:

| Original RHIDP-15318 Concern             | Resolution                                                                                                        |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Custom CA bundles for private registries | Backstage GitHub/GitLab integrations support custom CA via `integrations.github[].apiBaseUrl` and system CA trust |
| K8s Secret-based credentials             | Backstage integrations use GitHub Apps or personal access tokens configured in app-config                         |
| Per-connector TLS isolation              | Not applicable — each catalog location uses its integration's auth independently                                  |
| Credential caching and rotation          | Backstage handles token refresh for GitHub App integrations                                                       |

## EXISTING Requirements

None.

## ADDED Requirements

### Requirement: No MCP-Specific Auth Configuration

**WHEN** MCP server entities are defined in catalog-info.yaml files in Git repositories:

**THEN** no MCP-specific authentication configuration is required in `ai-catalog.providers`.

**AND** access to the Git repositories is authenticated through Backstage's `integrations.github` or `integrations.gitlab` configuration.

**AND** the same integration configuration that grants access to other catalog entities in those repositories also grants access to MCP server entities.

---

### Requirement: Private Repository Support

**WHEN** MCP server catalog-info.yaml files are hosted in private Git repositories:

**THEN** the repositories are accessible using Backstage's configured Git integration tokens (GitHub App, PAT, or GitLab token).

**AND** no additional credential configuration is needed beyond what Backstage requires for general catalog discovery.

---

### Requirement: Air-Gapped Git Repository Support

**WHEN** RHDH is deployed in an air-gapped environment with an internal Git server (GitHub Enterprise, GitLab self-managed):

**THEN** the internal Git server is configured as a Backstage integration:

```yaml
integrations:
  github:
    - host: github.internal.example.com
      apiBaseUrl: https://github.internal.example.com/api/v3
      token: ${GITHUB_TOKEN}
```

**AND** catalog locations point to the internal Git server:

```yaml
catalog:
  locations:
    - type: url
      target: https://github.internal.example.com/my-org/mcp-servers/blob/main/catalog-info.yaml
```

**AND** TLS certificate trust for the internal Git server is configured at the system/Node.js level, not per-connector.

---

### Requirement: Documentation of Auth Setup

**WHEN** a deployer sets up MCP server entity ingestion:

**THEN** documentation references Backstage's existing integration configuration guides.

**AND** documentation provides example configurations for GitHub Enterprise and GitLab self-managed in air-gapped environments.

**AND** documentation explicitly states that no `ai-catalog.providers.mcpRegistry.auth` or `ai-catalog.providers.mcpRegistry.tls` configuration exists.
