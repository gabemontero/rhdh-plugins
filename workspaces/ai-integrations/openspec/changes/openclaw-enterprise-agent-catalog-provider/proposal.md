# Proposal: OpenClaw Enterprise Agent Catalog Provider

## Why

RHDH can represent `AiResource` agents, but it has no provider that discovers
agents managed by OpenClaw Enterprise and keeps their catalog entries current.
The RHDHPLAN-1885 evaluation and the OCC integration notes identify the REST
API and OpenAPI-generated client as a practical integration path; this
prototype makes that catalog-surfacing option concrete as in-scope evaluation
work. It is not a production implementation, a 2.2 deliverable, or an adoption
decision.

## What Changes

- Add a scheduled RHDH catalog backend module that discovers agents from the
  OpenClaw Control Plane (OCC) REST API and emits `AiResource` entities with
  `spec.type: agent`.
- Generate a typed OCC client from OpenClaw Enterprise's checked-in OpenAPI
  specification vendored at a pinned revision, since OCC does not publish a
  reusable npm client.
- Keep the OCC service key and API calls in the backend; project only an
  explicit allowlist of agent metadata, and preserve last-known-good catalog
  entities when discovery or validation fails.
- Follow the workspace's AI-asset provenance conventions and expose the OCC
  source provenance separately from provider `locationKey` ownership.
- Support optional links to active agents' browser chat pages when the
  deployment's native-admin domain is configured.
- Provide an explicit disable-and-cleanup path for provider-owned catalog
  entities that leaves the OpenClaw agents themselves untouched.

## Capabilities

### New Capabilities

- `openclaw-agent-catalog-provider`: Backend-only OCC discovery, safe mapping
  to `AiResource` agent entities, and source-scoped catalog reconciliation.

### Modified Capabilities

None. The provider consumes the base `AiResource` kind owned by
`ai-resource-catalog-entity-kind` and the typed agent contract in
`catalog-model-ai-resource-agent` plus its validation processor in
`catalog-backend-module-ai-resource-agent`, owned by
`airesource-agent-typed-schema`. Apply or land both prerequisites before
implementing this provider whenever their kind or package registrations are
absent on the target branch; this change consumes those contracts and does not
modify them.

## Non-goals

- Adopting OpenClaw Enterprise, adding production/export-overlay support, or
  shipping this prototype as a supported RHDH 2.2 deliverable.
- Creating, editing, provisioning, invoking, or proxying OpenClaw agents.
- Importing agent prompts, model configuration, credentials, service-principal
  data, repository access, or other OCC configuration into the catalog.
- Changing the `AiResource` schema, catalog UI, or browser-side API access.
- Installing or operating OpenClaw Enterprise on OCP.

## Canonical Touchpoints

None under `specifications/prd/`, `specifications/adr/`, or
`openspec/specs/`. Related change-local references are
`ai-resource-catalog-entity-kind`, `airesource-agent-typed-schema`, and
`oci-npx-skills-registry-demo`.

**Change type**: feature-spec

## Impact

Adds a backend package under `workspaces/ai-integrations/plugins/`, OCC
configuration and catalog scheduling, generated OpenAPI TypeScript types, and
`openapi-fetch`. The provider package vendors the OCC OpenAPI document from
revision `92cc1a89c069f865ad53d769f22f14abb1292b53` and verifies its SHA-256
before type generation. It depends on an OpenClaw Enterprise deployment
exposing OCC, a least-privilege service key, and trusted TLS for its endpoint.
RHDHPLAN-1885 is the evaluation context for this prototype; this change makes
no production-support or RHDH 2.2 delivery commitment. The upstream contract
reference is `packages/contracts/openapi/occ-api.openapi.json` from OpenClaw
Enterprise revision `92cc1a89c`; integration setup details are in
`occ-api-integration-notes.md` in that repository.
