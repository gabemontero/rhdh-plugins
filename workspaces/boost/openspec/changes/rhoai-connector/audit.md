## Audit Report: rhoai-connector

**Last audited:** 2026-08-17T03:00:00Z

### Summary

| Category                 | CRITICAL | WARNING | SUGGESTION |
| ------------------------ | -------- | ------- | ---------- |
| A Entity propagation     | 0        | 0       | 0          |
| B Enum / vocabulary      | 0        | 0       | 0          |
| C Semantic contradiction | 0        | 0       | 0          |
| D Codebase grounding     | 0        | 0       | 0          |
| E Namespace ownership    | 0        | 0       | 1          |
| F Copy-paste residue     | 0        | 0       | 0          |
| G Extended coherence     | 0        | 0       | 0          |
| H Security lint          | 0        | 0       | 0          |

### CRITICAL

- None

### WARNING

- None

### SUGGESTION

- **[E] `openspec/changes/rhoai-connector/proposal.md` line 39** — Missing cross-reference to mcp-registry-connector for MCP server entity annotation schema coordination. Both changes emit entities with `kind: API, spec.type: mcp-server` from different sources. **Recommendation:** Add `workspaces/boost/openspec/changes/mcp-registry-connector/` to Cross-references section and in tasks.md section 8 for entity schema coordination.
