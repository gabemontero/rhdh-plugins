<!-- After each completed task, commit the changes. -->

## 1. Provider package and generated OCC client

- [ ] 1.1 Verify the `AiResource` base kind definition and registration from `ai-resource-catalog-entity-kind`, plus the typed agent model package and validation module from `airesource-agent-typed-schema`; if any prerequisite is absent, stop and report the dependency as blocked without implementing sibling-owned work. Once all are available, scaffold `catalog-backend-module-openclaw-agent-provider` and add its package metadata and workspace registration.
- [ ] 1.2 Vendor `occ-api.openapi.json` from OpenClaw Enterprise revision `92cc1a89c069f865ad53d769f22f14abb1292b53` at `plugins/catalog-backend-module-openclaw-agent-provider/openapi/occ-api.openapi.json`; verify its SHA-256 is `2ac1310c77464af9741f91d17e06dcfe2768c8f1edd242118c2c8d2d38a06e06` in the reproducible `openapi-typescript` generation script and check in generated declarations.
- [ ] 1.3 Add `openapi-fetch` and the type-generation dependency in the correct runtime and development dependency scopes, then document how to refresh the generated client.

## 2. OCC configuration and API client

- [ ] 2.1 Define backend-only configuration for the OCC base URL and service key, each marked `@visibility backend` in `config.d.ts`, plus provider instance ID (the keyed config entry name), `enabled` (default `true`), namespace name, catalog namespace, optional `defaultOwner`, optional native-admin domain, and Backstage schedule; require OCC settings and schedule only when enabled, treat empty environment substitutions as absent when disabled, validate required values, and validate the domain hostname.
- [ ] 2.2 Implement the typed OCC client for namespace, agent-list, and optional installation reads; send `x-api-key`, require HTTPS, disable automatic redirect following, reject all 3xx responses before another request, apply a finite timeout, and avoid logging credentials or raw responses.
- [ ] 2.3 Add focused configuration and client tests for headers, timeout, redirects that never request their target, required response fields, unknown response properties, unauthorized optional installation lookup, disabled cleanup with empty environment substitutions, and sanitized errors.

## 3. Agent mapping and catalog reconciliation

- [ ] 3.1 Resolve all exact namespace-name matches on every refresh, require exactly one match total and require it to be ready, then retrieve the complete agent list; use the installation lookup only when chat links are enabled.
- [ ] 3.2 Map validated agents to `AiResource` entities with deterministic provider-scoped names, display titles, optional configured ownership, source/status annotations, and no copied OCC configuration or credential fields.
- [ ] 3.3 Add optional `backstage.io/links` chat URLs for active agents using the installation, namespace, and agent IDs plus the validated native-admin domain.
- [ ] 3.4 Implement the scheduled `EntityProvider` with a stable provider identity and location key `OpenClawAgentProvider:<providerInstanceId>`; treat Catalog-reported ownership conflicts as failed syncs, apply full mutations only for complete valid snapshots, preserve last-known-good entities on failures, remove prior entities after a confirmed empty snapshot, and submit one empty full mutation without OCC access or scheduling when a retained instance is disabled.
- [ ] 3.5 Add mapper and provider lifecycle tests for identity stability, same-name agents, runtime-state changes, optional links including unauthorized installation lookup, absent source-location, malformed and duplicate records, namespace-ID mismatches, Catalog-reported cross-provider identity conflicts, independent provider instances, successful empty results, disabled-instance cleanup and ID-change cleanup without OCC calls, and recovery on a later schedule.

## 4. Integration documentation and verification

- [ ] 4.1 Document backend registration, an `app-config.yaml` example using environment-backed secrets, private-CA setup, namespace selection, optional chat links, the prototype's data allowlist, disable/cleanup-before-uninstall, and provider-instance-ID change cleanup in the provider README.
- [ ] 4.2 Add module registration smoke coverage and an integration test that feeds a representative OCC response through the provider into catalog mutations without exposing credential or configuration fields.
- [ ] 4.3 Add the package changeset and run the focused test suite, workspace type check, and OpenSpec validation; record the exact commands and results in implementation verification notes.
