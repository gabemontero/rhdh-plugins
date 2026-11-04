# RHDHPLAN-1507: Completed Work and Current Minimum Scope

**Assessment date:** 2026-11-04  
**Status:** Draft for review  
**Review feedback incorporated:** Exclude Neo4j, SkillImage/legacy skillcard ingestion, and SkillBundle content from the minimum implementation.  
**Feature:** [RHDHPLAN-1507 — AI Asset Entity Model & Ingestion Framework](https://redhat.atlassian.net/browse/RHDHPLAN-1507)  
**Completed epic:** [RHIDP-15258 — Entity-Provider SDK Package with Typed Contract](https://redhat.atlassian.net/browse/RHIDP-15258)

The completed work is partially outdated, but the SDK core remains relevant.
The main changes are to remove Neo4j/SkillBundle obligations from minimum
scope, revise the annotation and provider contracts, and distinguish reusable
code from requirements that were never fully integrated.

This assessment uses the RHDHPLAN-1507 description updated October 26, 2026,
as its baseline. It also checks the authorization boundary against
[RHDHPLAN-1508](https://redhat.atlassian.net/browse/RHDHPLAN-1508).

Unless otherwise stated, archived paths below are relative to
[`RHDH-2-1-Legacy-Content/Pre-RHDHPLAN-15xx-Content/`](RHDH-2-1-Legacy-Content/Pre-RHDHPLAN-15xx-Content/).
“Minimum” means the current committed, non-stretch scope. A file classified
as relevant is a reuse or revision candidate, not proof of acceptance-criteria
completion.

## 1. What RHIDP-15258 Actually Delivered

At the assessment date, RHIDP-15258 is **Dev Complete**, and all six underlying
stories are **Closed / Done**. Their relevance to the current minimum scope
differs.

- **[RHIDP-15255 — Annotations and validation](https://redhat.atlassian.net/browse/RHIDP-15255): retain, with revisions.**
  [PR #4212](https://github.com/redhat-developer/rhdh-plugins/pull/4212)
  supplied constants, validation, and version normalization;
  [PR #4417](https://github.com/redhat-developer/rhdh-plugins/pull/4417)
  added OGX annotation emission. The current feature permits native
  kind/type/Location information to substitute where sufficient. The archived
  validators require all three annotations unconditionally and accept the
  old seven-category vocabulary.
- **[RHIDP-15259 — Typed provider contract](https://redhat.atlassian.net/browse/RHIDP-15259): retain as a starting point.**
  PR #4212 created a generic `AIAssetEntityProvider` interface. The current
  feature calls for SDKs by entity kind or kind/type, sharing common
  functionality. The old interface does not establish that architecture or
  connector adoption.
- **[RHIDP-15260 — SDK publication and documentation](https://redhat.atlassian.net/browse/RHIDP-15260): retain, but reassess against the revised API.**
  PRs #4212 and #4417 supplied package scaffolding, exports, documentation,
  and delta functionality. Subsequently,
  [PR #4935](https://github.com/redhat-developer/rhdh-plugins/pull/4935)
  deliberately archived the broader SDK and reduced the active package to
  annotation constants and version normalization. Historical completion does
  not establish that the currently required SDK contract is available.
- **[RHIDP-15262 — Delta synchronization](https://redhat.atlassian.net/browse/RHIDP-15262): retain; implementation coverage is partial.**
  PR #4417 delivered `DeltaSyncManager`, mutation translation, a
  `CursorStore` interface, and an in-memory implementation. Durable cursor
  storage and orchestration of initial/invalid-cursor full refresh remain
  consumer responsibilities. Current OGX providers use full mutations rather
  than this framework.
- **[RHIDP-15302 — Migration-readiness design](https://redhat.atlassian.net/browse/RHIDP-15302): retain and update.**
  [PR #4221](https://github.com/redhat-developer/rhdh-plugins/pull/4221)
  delivered the canonical migration design. The checked document still
  records **Pending review** for architect sign-off, despite the story’s
  closed status. Approval remains unconfirmed from that artifact.
- **[RHIDP-15303 — Neo4j and SkillBundle contracts](https://redhat.atlassian.net/browse/RHIDP-15303): exclude from minimum scope.**
  PR #4212 delivered the adapter interface, relationship constants, and a
  `skillcard.yaml` Zod schema. These are graph/bundle or source-specific
  contracts. They do not constitute an OCI/SkillImage ingestion
  implementation.

The Jira development-panel API returned no PR links for these stories. The
associations above are corroborated through explicit Jira references in
GitHub staging issues, merged PR file lists, and file history:

- [Issue #4040](https://github.com/redhat-developer/rhdh-plugins/issues/4040)
  identifies RHIDP-15255, RHIDP-15259, and RHIDP-15303 and the relevant
  OpenSpec task groups; PR #4212 implements that issue.
- [Issue #4046](https://github.com/redhat-developer/rhdh-plugins/issues/4046)
  identifies RHIDP-15260 and RHIDP-15262; PR #4417 delivers the delta manager
  and OGX annotation work.
- [Issue #4042](https://github.com/redhat-developer/rhdh-plugins/issues/4042)
  was narrowed to RHIDP-15302; PR #4221 delivers the migration design.

## 2. Archived TypeScript Relevant to Minimum Scope

The following ten source and test files remain useful:

```text
plugins/ai-catalog-entity-provider-sdk/src/annotations.ts
plugins/ai-catalog-entity-provider-sdk/src/normalizeAIAssetVersion.ts
plugins/ai-catalog-entity-provider-sdk/src/normalizeAIAssetVersion.test.ts

plugins/ai-catalog-entity-provider-sdk/src/AIAssetEntityProvider.ts

plugins/ai-catalog-entity-provider-sdk/src/AIAssetValidator.ts
plugins/ai-catalog-entity-provider-sdk/src/AIAssetValidator.test.ts
plugins/ai-catalog-entity-provider-sdk/src/validateAIAssetEntity.ts
plugins/ai-catalog-entity-provider-sdk/src/validateAIAssetEntity.test.ts

plugins/ai-catalog-entity-provider-sdk/src/DeltaSyncManager.ts
plugins/ai-catalog-entity-provider-sdk/src/DeltaSyncManager.test.ts
```

Their reuse requires these qualifications:

- Revise annotation validation after deciding which native metadata can
  satisfy category/source requirements.
- Adapt the provider interface to the current SDK architecture.
- Complete durable delta-sync integration and recovery behavior.
- Reuse the active version normalizer: its source matches the archived copy
  at the assessment date.

These supporting files mix relevant SDK content with obsolete exports or
examples and require reconciliation:

```text
plugins/ai-catalog-entity-provider-sdk/src/index.ts
plugins/ai-catalog-entity-provider-sdk/README.md
plugins/ai-catalog-entity-provider-sdk/report.api.md
plugins/ai-catalog-entity-provider-sdk/package.json
plugins/ai-catalog-entity-provider-sdk/CHANGELOG.md
plugins/ai-catalog-entity-provider-sdk/.eslintrc.js
```

### TypeScript Files to Remove from the Minimum Implementation

These entire archived files can be removed from the minimum implementation
set. Paths are relative to the archive root defined above:

```text
plugins/ai-catalog-entity-provider-sdk/src/Neo4jSyncAdapter.ts
plugins/ai-catalog-entity-provider-sdk/src/SkillBundleMetadata.ts
```

`Neo4jSyncAdapter.ts` contains only the graph adapter interface and graph
relationship constants. `SkillBundleMetadata.ts` contains the legacy
`skillcard.yaml`/bundle schema. Neither supplies a required minimum SDK
capability. There are no dedicated test files for these two modules in the
archived SDK, and no separate SkillImage fetcher or concrete Neo4j adapter
TypeScript implementation was found there.

This is a proposed removal inventory for review; this document update does
not delete the listed files.

### TypeScript Files to Keep but Remove Excluded Content From

The following files contain minimum SDK behavior alongside excluded exports
or bundle-specific assertions. Remove the indicated content, rather than
the whole file:

- `plugins/ai-catalog-entity-provider-sdk/src/index.ts`: remove exports of
  `Neo4jSyncAdapter`, `RELATIONSHIP_TYPES`, `RelationshipType`,
  `SkillBundleMetadataSchema`, and `SkillBundleMetadata`.
- `plugins/ai-catalog-entity-provider-sdk/src/annotations.ts`: remove the
  `skill-bundle` category from the minimum category schema. Resolve the
  separate `rule` category decision during the five-category reconciliation.
- `plugins/ai-catalog-entity-provider-sdk/src/AIAssetValidator.test.ts`:
  remove bundle-category acceptance cases and update category lists.
- `plugins/ai-catalog-entity-provider-sdk/src/validateAIAssetEntity.test.ts`:
  remove bundle-category acceptance cases and update expected validation
  messages.

If the optional 1513 migration-readiness CLI is retained separately, also
remove its bundle-only content from these shared files:

```text
plugins/boost-migration-readiness/src/mappings.ts
plugins/boost-migration-readiness/src/mappings.test.ts
plugins/boost-migration-readiness/src/analyze.test.ts
```

The CLI as a whole remains outside the 1507 minimum implementation set for
the ownership reasons in section 3. These three files are listed to expose
the bundle cleanup needed if that separate tool is kept.

Reconcile the SDK README and public API report with the removed symbols.
Preserve CHANGELOG entries as historical records of previously delivered
APIs.

There is no completed OCI artifact fetcher or SkillImage implementation in
this archived SDK. `SkillBundleMetadata.ts` validates an assumed payload
shape; it neither fetches OCI artifacts nor implements graph synchronization.

The active
[`plugins/ai-catalog-entity-provider-sdk/`](plugins/ai-catalog-entity-provider-sdk/)
and [`plugins/ogx-entity-provider/`](plugins/ogx-entity-provider/)
are the existing release baseline. The archived SDK should not be restored
wholesale over that baseline.

## 3. Archived Specifications and Planning Related to 1507

These are the direct historical planning and design references:

```text
specifications/JIRA-analysis/RHDHPLAN-1507-feasibility-report.md
specifications/JIRA-analysis/RHDHPLAN-1507-frontend-coverage.md
specifications/JIRA-analysis/rhdhplan1505-1-staged-issues.md
specifications/ai-asset-upstream-migration-design.md
```

In the staging plan, the important completed-work sections are:

- **Issue 2 / #4040 → #4212:** SDK types, annotations, validation, and
  Neo4j/SkillBundle contracts.
- **Issue 8 / #4046 → #4417:** delta manager, SDK documentation, and OGX
  annotations.
- **Issue 4 / #4042 → #4221:** migration design.

The archived migration-design file is a pointer, not the full design. Its
canonical target is
[`openspec/changes/ai-catalog-entity-model/specs/migration-readiness/migration-plan.md`](openspec/changes/ai-catalog-entity-model/specs/migration-readiness/migration-plan.md).

These additional files supply useful context but require scope separation:

```text
specifications/annotation-specification.md
specifications/JIRA-analysis/cross-feature-frontend-summary.md
specifications/JIRA-analysis/RHDHPLAN-1513-defer-from-2-1-staging-and-jira-impact.md

agent-creation-discovery/proposal.md
agent-creation-discovery/design.md
agent-creation-discovery/tasks.md
agent-creation-discovery/specs/catalog-entities/spec.md
specifications/prd/agent-creation-discovery.md
```

The `agent-creation-discovery` material contributes catalog-as-source-of-truth
and independently deployable provider patterns. Its old entity mappings,
agent lifecycle, deployment, vector-store, and Kagenti-tool requirements
should not become 1507 minimum requirements.

Two ownership distinctions matter:

- `specifications/annotation-specification.md` was delivered by
  [PR #4498](https://github.com/redhat-developer/rhdh-plugins/pull/4498)
  under **RHDHPLAN-1513**. It remains useful input to 1507’s mapping
  documentation.
- The entire archived `plugins/boost-migration-readiness/` package came from
  that same **1513** PR. It is an optional read-only assessment tool,
  separate from the migration **design** required by 1507. The split is
  documented in [issue #4220](https://github.com/redhat-developer/rhdh-plugins/issues/4220).

## 4. Principal 1507 OpenSpecs Outside the Archive Subtree

[PR #3752](https://github.com/redhat-developer/rhdh-plugins/pull/3752)
originally created the dedicated 1507 changes. The main change remains at
[`openspec/changes/ai-catalog-entity-model/`](openspec/changes/ai-catalog-entity-model/).

The next refinement should apply these dispositions:

- **Retain and revise:** `annotation-scheme`, `entity-provider-sdk`,
  `delta-sync-framework`, and `migration-readiness`, together with the
  proposal, design, tasks, and canonical `migration-plan.md`.
- **Remove from minimum SDK obligations:** Neo4j and SkillBundle
  requirements in `specs/entity-provider-sdk/spec.md` and task groups
  **3–4**.
- **Split performance from resilience:** load qualification is stretch;
  single-entity fault isolation remains minimum. Reconcile
  `specs/performance-resilience/spec.md` and task group **7** accordingly.
- **Demote full air-gap qualification:** retain minimum reference
  configuration examples while separating stretch deployment validation in
  `specs/air-gapped-deployment/spec.md` and the associated tasks.

The separate
[`neo4j-knowledge-graph`](openspec/changes/neo4j-knowledge-graph/)
change should not remain an implementation commitment for minimum scope.
[RHIDP-15295](https://redhat.atlassian.net/browse/RHIDP-15295) and its three
implementation stories are **Closed / Won’t Do**. Gabe’s October 14, 2026
comment explicitly says Neo4j is not being handled under 1507 for 2.2.

The legacy
[`oci-skill-registry`](openspec/changes/oci-skill-registry/)
and [`oci-skill-connector`](openspec/changes/oci-skill-connector/)
changes assume a standardized `skillcard.yaml`/SkillImage-style payload and
broad registry compatibility that the current feature explicitly says have
not been established. Following review feedback, remove these legacy
implementation plans from the minimum scope. A future supported registry
decision requires a separate contract; it should not reinstate the old
payload assumptions implicitly.

### OpenSpec Files to Remove from the Minimum Implementation

The following are whole-file removal candidates. **Paths in this subsection
are relative to `workspaces/boost/`, not to the archive root.** Include the
metadata, proposal, design, and tasks when retiring an entire change, so its
behavioral specs are not left as apparently active implementation targets.

Neo4j synchronization, graph relationships, and SkillBundles:

```text
openspec/changes/neo4j-knowledge-graph/.openspec.yaml
openspec/changes/neo4j-knowledge-graph/proposal.md
openspec/changes/neo4j-knowledge-graph/design.md
openspec/changes/neo4j-knowledge-graph/tasks.md
openspec/changes/neo4j-knowledge-graph/specs/relationship-mapping/spec.md
openspec/changes/neo4j-knowledge-graph/specs/skill-bundles/spec.md
openspec/changes/neo4j-knowledge-graph/specs/setup-documentation/spec.md
```

Legacy OCI SkillImage/`skillcard.yaml` registry implementation plan:

```text
openspec/changes/oci-skill-registry/.openspec.yaml
openspec/changes/oci-skill-registry/proposal.md
openspec/changes/oci-skill-registry/design.md
openspec/changes/oci-skill-registry/tasks.md
openspec/changes/oci-skill-registry/specs/oci-artifact-ingestion/spec.md
openspec/changes/oci-skill-registry/specs/multi-registry-config/spec.md
openspec/changes/oci-skill-registry/specs/digest-based-sync/spec.md
```

Legacy connector implementation using the same payload assumptions:

```text
openspec/changes/oci-skill-connector/.openspec.yaml
openspec/changes/oci-skill-connector/proposal.md
openspec/changes/oci-skill-connector/design.md
openspec/changes/oci-skill-connector/tasks.md
openspec/changes/oci-skill-connector/specs/registry-discovery/spec.md
openspec/changes/oci-skill-connector/specs/skillcard-parsing/spec.md
openspec/changes/oci-skill-connector/specs/incremental-sync-scale/spec.md
```

Full disconnected-deployment qualification is also stretch and can be
removed from the minimum acceptance-spec set:

```text
openspec/changes/ai-catalog-entity-model/specs/air-gapped-deployment/spec.md
```

Preserve the required reference endpoint/CA/Secret/schedule configuration
examples in the retained SDK or connector configuration documentation when
separating this stretch spec.

### OpenSpec Files to Keep but Remove Excluded Content From

These files contain relevant minimum requirements. Remove graph, bundle,
legacy SkillImage/skillcard assumptions, and other stretch requirements from
their retained minimum-scope content:

```text
openspec/changes/ai-catalog-entity-model/proposal.md
openspec/changes/ai-catalog-entity-model/design.md
openspec/changes/ai-catalog-entity-model/tasks.md
openspec/changes/ai-catalog-entity-model/audit.md
openspec/changes/ai-catalog-entity-model/specs/entity-provider-sdk/spec.md
openspec/changes/ai-catalog-entity-model/specs/annotation-scheme/spec.md
openspec/changes/ai-catalog-entity-model/specs/migration-readiness/spec.md
openspec/changes/ai-catalog-entity-model/specs/migration-readiness/migration-plan.md
openspec/changes/ai-catalog-entity-model/specs/performance-resilience/spec.md
```

Specific edits to carry into implementation:

- `design.md`: remove Decisions **7–8** (Neo4j adapter and SkillBundle
  contract), their entries in Decision **2**, and bundle rows/rationale in
  Decision **1**.
- `tasks.md`: remove groups **3–4**, the Neo4j/SkillBundle documentation
  obligations in **9.1**, and references to retired changes. Separate
  stretch air-gap and load-testing tasks from minimum fault isolation.
- `specs/entity-provider-sdk/spec.md`: remove the **Neo4j Sync Adapter
  Interface** and **SkillBundle Metadata Contract** requirements, and
  graph/bundle publication and documentation obligations.
- `specs/annotation-scheme/spec.md`: remove mandatory bundle-category
  scenarios and legacy OCI-source examples that depend on the retired
  SkillImage contract; retain the generic annotation/provenance contract.
- `specs/migration-readiness/spec.md` and `migration-plan.md`: remove bundle
  mapping scenarios, rows, references, and counts; retain migration design
  for the approved minimum asset types.
- `specs/performance-resilience/spec.md`: remove the 5,000-entity/load-SLA
  obligations from minimum scope; retain per-entity fault isolation and
  contextual error logging. The entire file cannot be removed without
  losing minimum behavior.
- `proposal.md` and `audit.md`: reconcile capability counts, dependencies,
  and findings with the resulting minimum scope.

The archived planning and annotation documents in section 3 also need their
Neo4j, bundle, legacy skillcard, and stretch acceptance statements removed
from current requirements or clearly retained as historical traceability.
Their useful SDK and migration content prevents whole-file removal.

## 5. Minimum-Scope Gaps and Unresolved Decisions

The current feature requires work beyond restoring the archive:

- **Approve the annotation/native-metadata contract.** Decide when
  kind/type and Location suffice, and align validation, provenance,
  documentation, and tests. Reconcile the feature’s five baseline categories
  with the archived seven-category vocabulary.
- **Define the per-kind SDK architecture and connector adoption.** Shared
  utilities alone do not satisfy the new contract and integration
  requirements. Existing and new supported connectors need an explicit
  adoption and conformance plan.
- **Complete durable incremental sync and fault-isolation integration.**
  Demonstrate recovery and continued ingestion of valid records. The
  archived mutation wrapper and in-memory cursor store do not establish
  that end-to-end behavior.
- **Refresh migration mappings and record approval.** The checked design
  still includes historical seven-category assumptions and pending
  sign-off.
- **Provide current SDK compatibility documentation, connector
  configuration examples, and dynamic-plugin installation evidence.**
  Reference examples remain minimum scope even though full disconnected
  deployment qualification is stretch.

### OCI Connector Ownership and Minimum Scope

There is a scope conflict that prevents an unconditional “OCI is stretch”
conclusion. RHDHPLAN-1507’s minimum requirements still demand a supported OCI
Skills provider and OCI reference metadata, while its stretch section
describes demo ingestion and its out-of-scope section excludes specific
connectors. Registry selection and ownership need an explicit resolution
before the OpenSpecs or Jira can accurately reflect minimum completion.

The existing SDK’s `skillcard.yaml` shape should not become a common
minimum requirement before the selected registry’s payload contract is
established.

### Residual Scope Conflicts in the Feature

The feature’s customer/documentation sections retain some Neo4j and
air-gap delivery language after those capabilities were moved to stretch.
Those statements should be reconciled during refinement.

The feature also uses differing `spec.type` names across sections, including
`ai-skill` and `skill`. Category identity must remain distinct from the
concrete entity kind/type mapping, and documentation should reflect the
approved current mappings.

### Boundary with RHDHPLAN-1508

1507 supplies entity identity and metadata dependencies for 1508. Neo4j,
bundle filtering, provider synchronization auditing, and version-policy
inheritance remain outside 1508’s committed minimum scope. 1508’s minimum
entity-visibility contract uses `catalog.entity.read`; 1507’s ingestion SDK
does not acquire responsibility for new authorization permissions or policy
evaluation.

### Assessment Limits

This is a static scope and provenance review. Runtime behavior, package
publication, and cluster acceptance were not revalidated. Jira completion
states and historical merged code are evidence of prior delivery, not
automatic proof that the current acceptance criteria are satisfied.

## Jira Rework Tracking

The first 2.2 rework slice is tracked by
[RHIDP-18759 — AI Catalog SDK: restore and reconcile RHIDP-15258 for the RHDH 2.2 minimum baseline](https://redhat.atlassian.net/browse/RHIDP-18759),
under RHDHPLAN-1507.

Its stories are ordered as follows:

1. [RHIDP-18760 — Restore viable SDK and specification files](https://redhat.atlassian.net/browse/RHIDP-18760).
   Restore missing reusable files and preserve active counterparts.
2. [RHIDP-18761 — Reconcile OpenSpecs with the agreed minimum scope](https://redhat.atlassian.net/browse/RHIDP-18761).
   Depends on RHIDP-18760. Retire excluded plans and correct retained
   specifications without resolving the deferred design questions.
3. [RHIDP-18762 — Reconcile SDK exports, tests, and documentation](https://redhat.atlassian.net/browse/RHIDP-18762).
   Depends on RHIDP-18760 and RHIDP-18761. Apply the agreed SDK corrections
   while preserving active OGX behavior.

All four issues target 2.2.0 and carry labels `feature`, `fullsend`,
`workspace/boost`, and `rhdh-2.2-candidate`. Their components are
`model-catalog`, `Agent`, and `Skills`, using the existing Jira component
names. The issues are assigned to Gabe Montero and the RHDH AI team, with
Critical priority and Red Hat Employee visibility.

The unresolved decisions, RHIDP-15294 rework, and use of Backstage incremental
entity providers remain for the next planning step. These issues do not
authorize implementation of those deferred decisions.
