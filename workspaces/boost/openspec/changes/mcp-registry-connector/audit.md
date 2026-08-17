## Audit Report: mcp-registry-connector

**Last audited:** 2026-08-17T03:00:00Z

### Summary

| Category                 | CRITICAL  | WARNING   | SUGGESTION |
| ------------------------ | --------- | --------- | ---------- |
| A Entity propagation     | 0         | 0         | 0          |
| B Enum / vocabulary      | 0         | 0         | 0          |
| C Semantic contradiction | 1 (fixed) | 1 (fixed) | 0          |
| D Codebase grounding     | 0         | 0         | 1 (fixed)  |
| E Namespace ownership    | 1         | 0         | 0          |
| F Copy-paste residue     | 0         | 0         | 0          |
| G Extended coherence     | 0         | 1         | 1 (fixed)  |
| H Security lint          | 0         | 0         | 0          |

### CRITICAL

- **[E] `openspec/changes/mcp-registry-connector/design.md` line 136** — Entity kind collision with `agent-creation-discovery`: both define `spec.type: mcp-server` but different kinds (`kind: API` here vs `kind: Resource` in agent-creation-discovery). The annotation processor is kind-agnostic so enriches both. **Recommendation:** Add reconciliation note explaining the two kinds represent different MCP server representations (catalog-info.yaml static definition vs provider-discovered dynamic), or coordinate with agent-creation-discovery to use consistent kind.

### WARNING

- **[G] `openspec/changes/mcp-registry-connector/design.md` line 192** — `normalizeAIAssetVersion` call sites used inconsistent inputs (spec.version vs annotation value). **Recommendation:** Clarify function signature and expected input type, ensure all call sites consistent. (Partially addressed by consolidating to single code block in autofix pass 1.)

### SUGGESTION

- None
