<!-- After each completed task, commit the changes. -->

## 1. Provider package and generated OCC client

- [ ] 1.1 Verify the `AiResource` base kind definition and registration from `ai-resource-catalog-entity-kind`, plus the typed agent model package and validation module from `airesource-agent-typed-schema`; if any prerequisite is absent, stop and report the dependency as blocked without implementing sibling-owned work. Once all are available, scaffold `catalog-backend-module-openclaw-agent-provider` as a new-backend-system `createBackendModule` extending `catalog`, export it by default from `src/index.ts`, and add its package metadata and workspace registration.
- [ ] 1.2 Vendor `occ-api.openapi.json` from OpenClaw Enterprise revision `92cc1a89c069f865ad53d769f22f14abb1292b53` at `plugins/catalog-backend-module-openclaw-agent-provider/openapi/occ-api.openapi.json`; verify its SHA-256 is `2ac1310c77464af9741f91d17e06dcfe2768c8f1edd242118c2c8d2d38a06e06` in the reproducible `openapi-typescript` generation script and check in generated declarations.
- [ ] 1.3 Add `openapi-fetch` and the type-generation dependency in the correct runtime and development dependency scopes, then document how to refresh the generated client.

## 2. OCC configuration and API client

- [ ] 2.1 Define backend-only configuration for the OCC base URL and service key, each marked `@visibility backend` in `config.d.ts`, plus provider instance ID (the keyed config entry name), `enabled` (default `true`), namespace name, catalog namespace, optional `defaultOwner`, optional native-admin domain, and optional Backstage schedule. Validate and normalize the absolute HTTPS base URL: reject embedded credentials, query, and fragment; preserve a path prefix; remove trailing path slashes. When no schedule is configured, use a ten-minute frequency, ten-minute timeout, and `initialDelay: 0`; honor an explicitly configured schedule and its initial delay. Require OCC settings only when enabled, treat empty environment substitutions as absent when disabled, validate required values, and validate the domain hostname.
- [ ] 2.2 Implement the typed OCC client for namespace, agent-list, and optional installation reads; join route suffixes without discarding a configured base-path prefix; send `x-api-key`, require HTTPS, disable automatic redirect following, reject all 3xx responses before another request, apply a finite timeout, and avoid logging credentials or raw responses.
- [ ] 2.3 Add focused configuration and client tests for base URL normalization and prefixed route joining, schedule defaults, overrides, and manual trigger mode; headers, timeout, redirects that never request their target, required response fields, unknown response properties, unauthorized optional installation lookup, disabled cleanup with empty environment substitutions, and sanitized errors.

## 3. Agent mapping and catalog reconciliation

- [ ] 3.1 Resolve all exact namespace-name matches on every refresh, require exactly one match total and require it to be ready, then retrieve the complete agent list; use the installation lookup only when chat links are enabled.
- [ ] 3.2 Map validated agents to `AiResource` entities with deterministic provider-scoped names, display titles, optional configured ownership, `rhdh.io/ai-asset-category`, instance-scoped `rhdh.io/ai-asset-source`, normalized `backstage.io/managed-by-location` including any base-path prefix, the allowlisted OCC annotations, and no copied OCC configuration or credential fields.
- [ ] 3.3 Add optional `backstage.io/links` chat URLs for active agents using the installation, namespace, and agent IDs plus the validated native-admin domain.
- [ ] 3.4 Implement the scheduled `EntityProvider` with a stable provider identity and location key `OpenClawAgentProvider:<providerInstanceId>`; apply full mutations only for complete valid OCC snapshots, preserve last-known-good entities on request or validation failures, follow Backstage's behavior for cross-location entity-reference conflicts without claiming the provider can detect them, remove prior entities after a confirmed empty snapshot, and submit one empty full mutation without OCC access or scheduling when a retained instance is disabled.
- [ ] 3.5 Add mapper tests for deterministic identity, same-named agents, runtime-state changes, AI-asset annotations, normalized managed-by-location values with and without a base-path prefix, and absent source-location.
- [ ] 3.6 Add optional-link tests for active and inactive agents, missing domain, and unauthorized or unavailable installation lookup.
- [ ] 3.7 Add snapshot-validation tests for malformed fields, duplicate records, namespace-ID mismatches, and preservation of the last-known-good entities without partial mutation.
- [ ] 3.8 Add catalog-reconciliation tests for cross-location identity conflicts, independent provider instances, confirmed empty results, and recovery after a failed refresh.
- [ ] 3.9 Add scheduler and cleanup tests for default, overridden, and manual-trigger schedules, disabled-instance cleanup without OCC calls, and provider-instance-ID changes.

## 4. Integration documentation and verification

- [ ] 4.1 Document backend registration, an `app-config.yaml` example using environment-backed secrets, private-CA setup, namespace selection, optional chat links, AI-asset provenance, schedule defaults and overrides, backend-log-only sync freshness, the prototype's data allowlist, its non-shipping/non-production status for RHDH 2.2, disable/cleanup-before-uninstall, and provider-instance-ID change cleanup in the provider README.
- [ ] 4.2 Add module registration smoke coverage and an integration test that feeds a representative OCC response through the provider into catalog mutations without exposing credential or configuration fields.
- [ ] 4.3 Add the package changeset and run the focused test suite, workspace type check, and OpenSpec validation; record the exact commands and results in implementation verification notes.
