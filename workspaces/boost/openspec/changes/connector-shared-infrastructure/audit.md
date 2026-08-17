## Audit Report: connector-shared-infrastructure

**Last audited:** 2026-08-17T03:00:00Z

### Summary

| Category                 | CRITICAL | WARNING | SUGGESTION  |
| ------------------------ | -------- | ------- | ----------- |
| A Entity propagation     | 0        | 0       | 3 (2 fixed) |
| B Enum / vocabulary      | 0        | 0       | 1 (fixed)   |
| C Semantic contradiction | 0        | 0       | 0           |
| D Codebase grounding     | 0        | 0       | 1 (fixed)   |
| E Namespace ownership    | 0        | 1       | 0           |
| F Copy-paste residue     | 0        | 0       | 0           |
| G Extended coherence     | 0        | 3       | 0           |
| H Security lint          | 0        | 0       | 0           |

### CRITICAL

- None

### WARNING

- **[G] `openspec/changes/connector-shared-infrastructure/design.md` line 38** — `createHttpsAgent()` is exported but never defined in design.md. Design only shows inline `https.Agent` creation at line 105. **Recommendation:** Add a `createHttpsAgent()` factory function definition to design.md, or remove from export list and update tasks.md to remove tasks 1.6 and 1.10.
- **[G] `openspec/changes/connector-shared-infrastructure/design.md` line 38** — `classifyConnectorError` is exported but has no implementation task in tasks.md. Implied by fault-isolation spec but no task defines when/how to implement it. **Recommendation:** Add task to implement `classifyConnectorError()` with retryable/non-retryable error classification logic.
- **[G] `openspec/changes/connector-shared-infrastructure/design.md` line 38** — `validateConnectorStartupConfig` and `ValidateConnectorStartupConfigOptions` are exported but have no implementation tasks, no definition in design.md, and no usage examples. **Recommendation:** Define their purpose in design.md and add implementation tasks, or remove from export list.
- **[E] `openspec/changes/connector-shared-infrastructure/specs/reference-app-config/spec.md` line 29** — Reference app-config spec documents complete connector configuration (RHOAI endpoint, auth, OCI registries) but the change scope only covers shared infrastructure utilities. Creates cross-change ownership ambiguity with rhoai-connector and oci-skill-connector. **Recommendation:** Clarify in proposal/design that this change owns unified reference config documentation as integration glue.

### SUGGESTION

- **[A] `openspec/changes/connector-shared-infrastructure/tasks.md` line 6** — `createHttpsAgent()` factory in tasks but not designed in design.md. **Recommendation:** Align tasks with design — either add design or remove task.
