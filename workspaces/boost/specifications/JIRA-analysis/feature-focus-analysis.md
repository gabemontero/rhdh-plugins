## Feature-Focused Analysis: If You Pick Just One

### Current State Summary

| Status                | Count | Issues                                                    |
| --------------------- | ----- | --------------------------------------------------------- |
| **Closed**            | 4     | #4039 (1), #4040 (2), #4043 (5), #4044 (6)                |
| **Open, in progress** | 2     | #4041 (3 — jordigilh PR), #4042 (4 — split by mareklibra) |
| **Open, blocked**     | 23    | #4045–#4067 (issues 7–29)                                 |

Mareklibra has split Issue 4 (#4042) into two focused issues:

- **#4223** — RHIDP-15302 migration design doc (RHDHPLAN-1507 scope) — `ready-to-code`
- **#4220** — Annotation Spec & Migration-Readiness CLI (RHDHPLAN-1513 scope — deferred)

Plus 3 follow-on issues from closed work:

- **#4313** — Connector Config defaults (from #4044, RHDHPLAN-1513)
- **#4286** — Connector Config schema versioning (from #4044, RHDHPLAN-1513)
- **#4285** — Ingestion Health wiring (from #4043/#4044, RHDHPLAN-1513)
- **#3734** — RBAC-gate Usage tab (RHDHPLAN-1508/1509)

---

### Option A: RHDHPLAN-1507 — Entity Model & Ingestion Framework

**Epics:** RHIDP-15258 (Entity Model), RHIDP-15294 (OCI Skill Registry), RHIDP-15295 (Neo4j Knowledge Graph)

| Issue          | Title                      | State      | Blocker                                        |
| -------------- | -------------------------- | ---------- | ---------------------------------------------- |
| #4040 (2)      | Entity-Provider SDK        | **Closed** | —                                              |
| #4042/4223 (4) | Migration Design Doc       | **Open**   | None — `ready-to-code`                         |
| #4046 (8)      | SDK Delta Sync + Publish   | Blocked    | Deps [1]✓ [2]✓ — **unblocked, ready to start** |
| #4047 (9)      | OCI Core Connector         | Blocked    | Deps [1]✓ [8]                                  |
| #4048 (10)     | OCI Multi-Registry         | Blocked    | Deps [1]✓ [9]                                  |
| #4049 (11)     | OCI Digest Sync            | Blocked    | Deps [1]✓ [9]                                  |
| #4050 (12)     | OCI Load Test              | Blocked    | Deps [1]✓ [9]                                  |
| #4055 (17)     | Neo4j Core Sync            | Blocked    | Dep [2]✓ — **unblocked, ready to start**       |
| #4056 (18)     | Neo4j SkillBundle          | Blocked    | Dep [17]                                       |
| #4057 (19)     | Neo4j Docs + Observability | Blocked    | Deps [17] [18]                                 |

**Cross-feature deps consumed:** Issue 1 (#4039, RHDHPLAN-1510) — already closed, satisfied.

**What's actually unblocked right now:**

- **#4223** (migration design doc) — ready now
- **#4046 (8)** (SDK Delta Sync) — both deps closed, can start immediately
- **#4055 (17)** (Neo4j Core) — dep [2] closed, can start immediately

**Critical path:** 8 → 9 → {10, 11, 12} for OCI; 17 → 18 → 19 for Neo4j. Two independent parallel chains. Total: **10 issues** (2 closed + 8 open), **no external blockers**.

---

### Option B: RHDHPLAN-1508 — RBAC & Versioning Policy

**Epics:** RHIDP-15270 (Graduated Visibility), RHIDP-15274 (Version Policy Cascade), RHIDP-15277 (Audit Logging), RHIDP-15304 (RBAC Admin UI)

| Issue      | Title                                 | State    | Blocker                                   |
| ---------- | ------------------------------------- | -------- | ----------------------------------------- |
| #4041 (3)  | Permissions & Conditional Rules       | **Open** | None — jordigilh has PR open              |
| #3734      | RBAC-gate Usage tab                   | **Open** | RHIDP-15167 (RHDHPLAN-1509)               |
| #4058 (20) | Version Policy Cascade + Default-Deny | Blocked  | Dep [3]                                   |
| #4059 (21) | Audit Logging                         | Blocked  | Dep [3]                                   |
| #4061 (23) | SkillBundle RBAC Filtering            | Blocked  | Dep [3]                                   |
| #4062 (24) | Graduated Visibility FE               | Blocked  | Dep [3] + **RHIDP-15167 (RHDHPLAN-1509)** |
| #4063 (25) | RBAC Admin UI                         | Blocked  | Deps [3] [20]                             |

**Cross-feature deps consumed:** None from other features. Self-contained.

**What's actually unblocked right now:**

- **#4041 (3)** — jordigilh's PR is in progress

**External blocker:**

- **Issue 24 (#4062)** depends on RHIDP-15167 (RHDHPLAN-1509 — Entity page extensions). Everything else is self-contained once Issue 3 merges.

**Critical path:** 3 → {20, 21, 23} in parallel → 25. Issue 24 is independently blocked by RHDHPLAN-1509. Total: **7 issues** (0 closed + 7 open), **1 external blocker** (RHIDP-15167 for issue 24 only — the rest of the feature is self-contained).

---

### Option C: RHDHPLAN-1510 — MCP Registry & RHOAI Connector

**Epics:** RHIDP-15313 (MCP Registry), RHIDP-15314 (RHOAI Connector), RHIDP-15316 (Cross-Connector Shared Infra)

| Issue      | Title                        | State      | Blocker                                                                     |
| ---------- | ---------------------------- | ---------- | --------------------------------------------------------------------------- |
| #4039 (1)  | Cross-Connector Shared Infra | **Closed** | —                                                                           |
| #4045 (7)  | MCP Mirror + RHOAI Version   | **Open**   | **RHIDP-15655 (#4068, RHDHPLAN-393)** for MCP half; RHOAI half is unblocked |
| #4051 (13) | MCP TLS Hardening            | Blocked    | Deps [1]✓ [7] + **RHIDP-15655**                                             |
| #4052 (14) | MCP Annotation Enrichment    | Blocked    | Deps [8] [13] + **RHIDP-15655 + RHIDP-15658** (both RHDHPLAN-393)           |
| #4053 (15) | RHOAI MCP Catalog            | Blocked    | Dep [8] stated, but see note† — **cross-feature dep on RHDHPLAN-1507**      |
| #4054 (16) | RHOAI Deployment             | Blocked    | Deps [1]✓ [15]                                                              |

**Cross-feature deps consumed:**

- **Issue 8** (#4046, RHDHPLAN-1507 — SDK Delta Sync) — stated dep for Issues 14 and 15. Not yet started.
- **RHIDP-15655** (#4068, RHDHPLAN-393 — upstream MCP Registry entity provider) — needed by Issues 7 (MCP half), 13, 14. **Unassigned, no labels, open.**
- **RHIDP-15658** (RHDHPLAN-393 — MCP Registry entity mapping) — additionally needed by Issue 14. Also unassigned.

†**Note on issue 15's dependency on issue 8:** The GitHub issue states issue 15 depends on issue 8 for "SDK annotation scheme." However, the SDK annotation scheme (constants, `normalizeAIAssetVersion()`, validation) was delivered in issue 2 (#4040, **closed**). Issue 8 adds delta sync + npm publish — but the RHOAI connector uses `applyMutation({ type: 'full' })`, not delta sync, and within the monorepo the SDK is consumable via `workspace:` references without npm publishing. The stated dependency may reflect intentional sequencing rather than a hard technical blocker. If confirmed soft, issue 15 could start now.

**What's actually unblocked right now:**

- **Issue 7 (#4045), RHOAI half only** (RHIDP-15321 version normalization) — can start, no deps
- **Issue 15 (#4053)** — potentially unblocked if issue 8 dependency is confirmed soft (see note† above)

**External blockers:**

1. **RHIDP-15655 + RHIDP-15658** (#4068, RHDHPLAN-393 — upstream MCP Registry entity provider + entity mapping). Unassigned, blocks the entire MCP Registry chain (7→13→14). This is the hardest blocker.
2. **Issue 8 (#4046)** — SDK Delta Sync from RHDHPLAN-1507. Stated blocker for Issues 14 and 15, but may be soft for issue 15 (see note†). Its own deps are satisfied, so it _could_ be started, but it's a RHDHPLAN-1507 issue.

**Critical path:** {RHIDP-15655, RHIDP-15658} → 7 → 13 → 14 for MCP; 8 → 15 → 16 for RHOAI (or possibly just 15 → 16 if issue 8 dependency is soft). Total: **6 issues** (1 closed + 5 open), **2 external blockers** (RHDHPLAN-393 for MCP chain, Issue 8/RHDHPLAN-1507 for RHOAI chain — possibly 1 if issue 15 dep is soft).

---

### Comparison

|                       | RHDHPLAN-1507   | RHDHPLAN-1508                     | RHDHPLAN-1510                                                                |
| --------------------- | --------------- | --------------------------------- | ---------------------------------------------------------------------------- |
| **Total issues**      | 10              | 7                                 | 6                                                                            |
| **Already closed**    | 2               | 0                                 | 1                                                                            |
| **Unblocked now**     | 3 (8, 17, 4223) | 1 (3, PR open)                    | 0.5–1.5 (7 RHOAI half; 15 if issue 8 dep is soft†)                           |
| **External blockers** | None            | 1 (RHIDP-15167 for issue 24 only) | 2 (RHDHPLAN-393, Issue 8) — possibly 1 if issue 8 dep soft†                  |
| **Self-contained?**   | Yes             | Mostly (24 blocked externally)    | No — needs RHDHPLAN-393 + RHDHPLAN-1507 issue 8 (possibly just RHDHPLAN-393) |
| **Parallel chains**   | 2 (OCI, Neo4j)  | 3 ({20,21,23} fan-out)            | 2 (MCP, RHOAI) but sequentially blocked                                      |

**RHDHPLAN-1507** has the most runway — 3 issues can start immediately with no external blockers. **RHDHPLAN-1508** is compact and mostly self-contained, just waiting on jordigilh's Issue 3 PR. **RHDHPLAN-1510** is the most constrained as written — the MCP chain is fully blocked by RHDHPLAN-393 (RHIDP-15655 + RHIDP-15658, both unassigned), and the RHOAI chain has a stated dependency on issue 8, though this may be soft (see note† in Option C).

---

### Idea: Could RHDHPLAN-1510's MCP Blocker Be Bypassed?

#### The Question

Does RHDHPLAN-1510 _require_ contacting a live MCP Registry (polling `/v0/servers` or `/v1/servers`), or does the real need boil down to getting MCP server entities ingested into the catalog? If the latter, could we ingest MCP server metadata from `catalog-info.yaml` files hosted in GitHub repos instead?

#### What the Feature and Issues Actually Say

**RHDHPLAN-1510** (Jira) explicitly specifies:

> "The MCP Registry connector retrieves server entries via the `/v0/servers` REST API and parses the `server.json` schema, mapping each server entry to an `mcp-server`-typed catalog entity."

**RHDHPLAN-393** (Jira — the blocker) specifies:

> "Create a new Backstage Community Plugin that acts as a Catalog Entity Provider to ingest MCP Servers from a compliant MCP Registry (implementing the `/v1/servers` aggregator spec)."
>
> "This is for **listing** resources, not connecting a chat client to them."

**Issue #4068** (GitHub — RHIDP-15655) says the upstream provider must exist so downstream productization (#4045, #4051, #4052) can layer on mirror endpoints, TLS hardening, and annotation enrichment.

**So yes, as written, the feature requires polling a live MCP Registry API.** The entire MCP Registry chain (issues 7→13→14) assumes a running registry server as the data source. The RHDHPLAN-393 blocker exists because the upstream community entity provider that talks to that API doesn't exist yet.

#### But What Does the End User Actually Need?

The _goal_ stated in RHDHPLAN-1510 is:

> "Developers can browse the RHDH Software Catalog and see MCP servers [...] alongside MCP servers, AI models, and model servers."

The user need is **MCP server entities in the catalog with the right annotations and metadata**. The `/v0/servers` API is the _mechanism_, not the requirement. The acceptance criteria care about entity shape, annotations, discoverability, and air-gap support — not about which ingestion path produced the entity.

#### The catalog-info.yaml Alternative

Backstage already has a first-class ingestion path for entities defined in `catalog-info.yaml` files hosted in GitHub (or any SCM). If MCP server metadata were expressed as `catalog-info.yaml` files — one per MCP server — the standard Backstage catalog discovery would ingest them with zero new connector code.

**What this would bypass:**

- **RHIDP-15655 / #4068** (upstream MCP Registry entity provider) — not needed at all
- **Issue 7 (#4045), MCP half** (mirror endpoint, zero-internet validation) — N/A, no registry to mirror
- **Issue 13 (#4051)** (TLS and credential hardening for registry) — N/A
- **Issue 14 (#4052)** (annotation enrichment wrapper around upstream provider) — partially N/A; annotation enrichment could be done via a lightweight CatalogProcessor instead of a provider wrapper

**What would still be needed:**

- A GitHub repo (or repos) containing `catalog-info.yaml` files for MCP servers, with the correct `kind: API`, `spec.type: mcp-server`, and RHDH AI Asset annotations
- A mechanism to populate/update those YAML files (could be a script that polls the public MCP Registry and generates YAML, run in CI — decoupling the polling from Backstage itself)
- If annotations are pre-populated in the YAML by the CI script: nothing else — the SDK's existing CatalogProcessor validator (from issue 2, closed) validates them during standard catalog processing
- If annotations are NOT in the YAML: a lightweight CatalogProcessor to enrich entities using the SDK's `normalizeAIAssetVersion()` and annotation constants — both already available from issue 2 (closed) via workspace references
- Registration of the GitHub repo location in the Backstage catalog (standard `app-config.yaml` location entry)

**What this does NOT address (RHOAI chain):**

- Issues 15 and 16 (RHOAI MCP catalog + deployment) are about polling RHOAI's live `GET /api/mcp/v1/servers` API — not a static file source. These have a stated dependency on issue 8, but per Finding 2 (see Cross-Examination below), this dependency may be soft since the RHOAI connector only needs SDK content from issue 2 (closed), not delta sync or npm publish from issue 8.

#### Impact on the Dependency Graph

If the catalog-info.yaml approach is viable for the MCP Registry half of RHDHPLAN-1510:

| Before                                                      | After (catalog-info.yaml)                                         | After (+ soft dep confirmed)                                            |
| ----------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------- |
| MCP chain: {RHIDP-15655, 15658} → 7 → 13 → 14 (all blocked) | MCP chain: **eliminated** — entities come from GitHub-hosted YAML | Same                                                                    |
| RHOAI chain: 8 → 15 → 16 (blocked on RHDHPLAN-1507)         | RHOAI chain: unchanged — still needs issue 8                      | RHOAI chain: 15 → 16 (**unblocked now** via workspace SDK from issue 2) |
| External blockers: 2 (RHDHPLAN-393 + issue 8)               | External blockers: **1** (issue 8 only)                           | External blockers: **0**                                                |

The MCP Registry connector issues (7, 13, 14) would be deferred to a future phase when RHDHPLAN-393 delivers the upstream provider — at which point they become a productization/hardening layer on top of an existing community connector, rather than a gating dependency.

---

### What You Get If You Stop RHDHPLAN-1507 at Issue 8

Issue 8 (#4046) is the last RHDHPLAN-1507 issue that RHDHPLAN-1510's RHOAI chain depends on. Here's what the RHDHPLAN-1507 subset looks like if you stop there:

#### Included (Issues 1, 2, 4/4223, 8)

| Issue           | What It Delivers                                                                                                                                                                                                                                                                                                                                                                  | Status                  |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| #4039 (1)       | Cross-Connector Shared Infra — `loadCaBundle()`, credential utils, `connector-utils` package                                                                                                                                                                                                                                                                                      | **Closed**              |
| #4040 (2)       | Entity-Provider SDK — types, interfaces, annotation constants, validation helpers                                                                                                                                                                                                                                                                                                 | **Closed**              |
| #4042/#4223 (4) | Migration Design Doc — RHIDP-15302 migration strategy from old entity kinds                                                                                                                                                                                                                                                                                                       | **Open, ready-to-code** |
| #4046 (8)       | **Delta Sync Framework** — `DeltaSyncManager` with `applyDelta()`, cursor persistence, fallback to full refresh. **SDK npm publish** — published package with semver. **Annotation updates** — Kagenti and LlamaStack providers emit entities with all 3 required AI Asset annotations. **SDK documentation** — README with interface contract, annotation scheme, code examples. | **Open, unblocked**     |

**In sum, stopping at issue 8 gives you the complete SDK foundation layer:**

- Shared infra utilities (CA bundles, credentials)
- Type system and interfaces for entity providers
- Delta sync framework for efficient incremental updates
- Published npm package that new connectors can depend on
- Existing providers (Kagenti, LlamaStack) updated to emit compliant entities
- Documentation and migration design

#### NOT Included (Issues 9–12, 17–19)

| Chain                     | Issues           | What You're Deferring                                                                                        |
| ------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------ |
| **OCI Skill Registry**    | 9 → {10, 11, 12} | Core OCI connector, multi-registry support, digest-based incremental sync, load testing at 2,000-image scale |
| **Neo4j Knowledge Graph** | 17 → 18 → 19     | Neo4j core sync adapter, SkillBundle graph population, observability/docs                                    |

These are the two parallel implementation chains that build _on top of_ the SDK. They're valuable but independent of RHDHPLAN-1510's needs. The OCI chain is the Skills Marketplace data source; the Neo4j chain is the knowledge graph backing. Neither is needed for MCP server or RHOAI entity ingestion.

#### Net Assessment

Stopping RHDHPLAN-1507 at issue 8 is a clean cut point — it delivers the SDK contract that downstream connectors (including RHDHPLAN-1510's RHOAI connector) depend on, without pulling in the OCI or Neo4j implementation work. The 4 issues (1, 2, 4, 8) are self-contained: 2 are already closed, 1 is ready-to-code, and 1 is unblocked with both dependencies satisfied.

---

### Cross-Examination: OpenSpec Verification (2026-08-16)

Verified every claim in this analysis against the full openspec content under `workspaces/boost/openspec/changes/`. Checked: `mcp-registry-connector/` (design, proposal, tasks, all 3 specs), `rhoai-connector/` (design, proposal, tasks, both specs), `ai-catalog-entity-model/` (design, tasks), `connector-shared-infrastructure/` (tasks), `oci-skill-registry/` (tasks), `neo4j-knowledge-graph/` (tasks).

#### Verdict: Analysis is materially correct. Three refinements identified, none change the conclusions.

#### Finding 1: Issue 14 has a SECOND RHDHPLAN-393 blocker (RHIDP-15658)

**Claim in analysis:** Issue 14 (#4052) is blocked by RHIDP-15655 (MCP Registry entity provider).

**What the openspec/GitHub issue actually says:** Issue 14 depends on BOTH RHIDP-15655 (entity provider) AND RHIDP-15658 (entity mapping). The annotation-enrichment spec (`mcp-registry-connector/specs/annotation-enrichment/spec.md`) says: "The upstream provider and its entity mapping must exist before the productization wrapper can intercept entity emission for annotation enrichment."

**Impact:** None on conclusions. Both blockers are from RHDHPLAN-393. The MCP chain is blocked by RHDHPLAN-393 work regardless of whether it's 1 or 2 stories. The catalog-info.yaml idea bypasses both.

#### Finding 2: Issue 15's dependency on issue 8 may be softer than stated

**Claim in analysis:** Issue 15 (#4053, RHOAI MCP Catalog) depends on issue 8 (#4046, SDK Delta Sync + Publish).

**What the openspec actually shows:** The RHOAI connector's MCP catalog source (RHIDP-15322) needs the SDK annotation constants and `normalizeAIAssetVersion()` utility. Both are defined in SDK tasks 1.1–1.7 (RHIDP-15255/15258), which map to issue 2 (#4040, **closed**). The RHOAI connector uses `applyMutation({ type: 'full' })` — it does NOT use delta sync (`applyDelta`), so it doesn't need the DeltaSyncManager from issue 8.

The GitHub issue states issue 15 "depends on Issue 8 (#4046 SDK annotation scheme)" — but the SDK annotation scheme is in issue 2, not issue 8. Issue 8 adds delta sync + npm publish. Within the monorepo, the SDK package from issue 2 is consumable via `workspace:` references without npm publishing.

**Impact:** The RHOAI chain (issues 15→16) may actually be unblockable NOW, not waiting on issue 8. If issue 15 can consume the SDK via workspace references, its only real technical dependency is on issue 2 (closed). This would mean the RHOAI chain could start immediately, making RHDHPLAN-1510 even more viable as a near-term focus.

**Caveat:** The stated dependency on issue 8 might reflect an intentional sequencing decision (ship SDK as a stable npm package before connectors consume it), not just a technical blocker. Worth confirming with the team.

#### Finding 3: Annotation enrichment via CatalogProcessor needs SDK dependency

**Claim in analysis:** With catalog-info.yaml ingestion, "annotation enrichment could be done via a lightweight CatalogProcessor instead of a provider wrapper."

**What the openspec clarifies:** The annotation-enrichment spec (`mcp-registry-connector/specs/annotation-enrichment/spec.md`) shows the enrichment pipeline uses:

- `normalizeAIAssetVersion()` (SDK-exported from RHDHPLAN-1507, task 1.4)
- AI Asset annotation constants (SDK-exported, task 2.4)
- SDK validation layer integration (task 3.11)

A CatalogProcessor approach would still need these SDK utilities. However, they're already available — the SDK package was scaffolded in issue 2 (closed), and the functions are defined there. So the CatalogProcessor approach is viable but requires the SDK package as a dependency, which already exists.

**Impact:** The catalog-info.yaml idea remains valid. The CatalogProcessor could enrich entities with annotations using the already-implemented SDK utilities. If annotations are pre-populated in the YAML files (by the external CI script), no CatalogProcessor is needed at all — the SDK's CatalogProcessor validator (task 1.6) would validate them during standard catalog processing.

#### Confirmed Claims (no corrections needed)

| Claim                                                                                | OpenSpec Source                                                                                            | Status        |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ------------- |
| MCP Registry connector requires live `/v0/servers` API                               | `mcp-registry-connector/design.md` Decision 1: "Wrap the upstream connector"                               | **Confirmed** |
| MCP connector is purely a wrapper around RHDHPLAN-393                                | `mcp-registry-connector/proposal.md`: "layers productization on top of the upstream connector"             | **Confirmed** |
| RHOAI connector polls `GET /api/mcp/v1/servers` (separate from MCP Registry)         | `rhoai-connector/specs/mcp-catalog-source/spec.md`: RHOAI-specific API                                     | **Confirmed** |
| RHOAI Model Registry moved to RHDHPLAN-404                                           | `rhoai-connector/design.md` Stakeholder Alignment: "Model Registry integration handled under RHDHPLAN-404" | **Confirmed** |
| OCI Skill Registry moved from RHDHPLAN-1510 to RHDHPLAN-1507                         | `mcp-registry-connector/tasks.md` header: "RHIDP-15315 closed — scope absorbed by RHIDP-15294"             | **Confirmed** |
| Issue 1 (shared infra, #4039, closed) delivers CA bundle + fault isolation utilities | `connector-shared-infrastructure/tasks.md`: `loadCaBundle`, `createProviderWrapper`, etc.                  | **Confirmed** |
| OCI chain (9→{10,11,12}) and Neo4j chain (17→18→19) are independent of RHDHPLAN-1510 | `oci-skill-registry/tasks.md` and `neo4j-knowledge-graph/tasks.md`: no RHDHPLAN-1510 dependencies          | **Confirmed** |
| Issue 8 delivers DeltaSyncManager, SDK publish, provider annotation updates          | `ai-catalog-entity-model/tasks.md` groups 2 (2.7-2.13), 5, 9                                               | **Confirmed** |
| Stopping at issue 8 is a clean cut point for RHDHPLAN-1510 purposes                  | RHOAI/MCP connectors don't need OCI or Neo4j content                                                       | **Confirmed** |
| catalog-info.yaml would bypass issues 7, 13, 14 entirely                             | All three are wrapper/hardening layers for the RHDHPLAN-393 upstream provider                              | **Confirmed** |

#### Revised Assessment

With Finding 2, the picture for RHDHPLAN-1510 may be even better than stated:

|                                                   | Original Analysis                        | After OpenSpec Verification                                                   |
| ------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------- |
| **RHOAI chain blocker**                           | Issue 8 (RHDHPLAN-1507)                  | Possibly none — SDK content available via workspace ref from issue 2 (closed) |
| **MCP chain blocker**                             | RHIDP-15655 + RHIDP-15658 (RHDHPLAN-393) | Same — bypassed by catalog-info.yaml idea                                     |
| **External blockers with catalog-info.yaml idea** | 1 (issue 8)                              | Possibly **0** if issue 15 can use workspace SDK                              |
| **Issues actionable now**                         | 0.5 (issue 7 RHOAI half)                 | Potentially 1.5 (issue 7 RHOAI half + issue 15 if dependency confirmed soft)  |
