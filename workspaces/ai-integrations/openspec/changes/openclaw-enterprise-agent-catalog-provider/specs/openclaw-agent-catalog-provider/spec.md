## ADDED Requirements

### Requirement: Backend-only OCC access

The provider SHALL call OCC from the RHDH backend using a backend-configured
service key in the `x-api-key` header. It SHALL require HTTPS, disable
automatic redirect following, and reject every redirect response before
issuing another request. It SHALL NOT expose or log the key. Agent records
SHALL be constructed from an explicit metadata allowlist and SHALL NOT include
OCC credentials, service-principal data, prompts, configuration values,
repository access, or credential-source references.

#### Scenario: Provider authenticates to OCC

- **WHEN** a configured provider requests namespace or agent data
- **THEN** the backend sends its configured service key as `x-api-key` and no
  browser request contains that key

#### Scenario: OCC returns additional configuration fields

- **WHEN** an agent response includes configuration, credential, or access
  fields beyond the provider's allowlist
- **THEN** the resulting `AiResource` omits those fields and logs contain no
  service key or raw agent response

#### Scenario: OCC returns a redirect

- **WHEN** an OCC request receives any redirect response
- **THEN** the provider rejects it without issuing a request to the redirect
  target or forwarding the service key

### Requirement: Resolve one ready OCC namespace per provider instance

Each provider instance SHALL select one namespace by exact configured name,
defaulting to `default`. On every refresh it SHALL resolve that namespace from
`GET /namespaces` and request its agents from
`GET /namespaces/{namespaceId}/agents`. The namespace list SHALL contain
exactly one record with the configured name across all statuses, and that
record SHALL be ready. A missing, duplicate, or non-ready exact-name match
SHALL NOT cause catalog mutations. The provider SHALL
NOT fetch agent configuration or native-admin status endpoints for catalog
projection.

#### Scenario: Resolve the configured namespace

- **WHEN** the namespace list contains exactly one namespace matching the
  configured name across all statuses and that namespace is ready
- **THEN** the provider lists agents using that namespace's current OCC ID

#### Scenario: Namespace cannot be resolved safely

- **WHEN** there are zero or multiple exact-name matches, or the sole matching
  namespace is not ready
- **THEN** the provider reports a sanitized sync error and preserves the
  entities from its last successful refresh

### Requirement: Map OCC agents to typed AiResource entities

For each valid OCC agent, the provider SHALL emit one `kind: AiResource` entity
with `spec.type: agent`. `metadata.title` SHALL preserve the OCC agent name.
`metadata.name` SHALL be deterministic for the configured provider instance,
OCC namespace, and agent ID, and SHALL remain unchanged when the display name
changes. The configured catalog namespace SHALL determine
`metadata.namespace`. When a default owner is configured, the provider SHALL
set `spec.owner` to that value; when no default owner is configured, it SHALL
omit `spec.owner`. The provider SHALL NOT infer ownership from an OCC service
principal.

Because OCC does not provide a source repository for these runtime-managed
agents, the provider SHALL omit `backstage.io/source-location` and SHALL NOT
fail entity construction because that annotation is absent. The existing
AiResource extension processor validates OCI source-location values when
present; the standard catalog may emit its normal missing-source warning.

The provider SHALL preserve the OCC agent ID and namespace ID in
`rhdh.io/openclaw-enterprise-agent-id` and
`rhdh.io/openclaw-enterprise-namespace-id`. It SHALL expose the source as
`rhdh.io/ai-asset-source: openclaw-enterprise`, and SHALL map OCC `status`,
`desiredRuntimeState`, `executionMode`, and a present `activeRevisionId` to
`rhdh.io/openclaw-enterprise-status`,
`rhdh.io/openclaw-enterprise-desired-runtime-state`,
`rhdh.io/openclaw-enterprise-execution-mode`, and
`rhdh.io/openclaw-enterprise-active-revision-id`, respectively. OCC runtime
state SHALL NOT be represented as catalog lifecycle.

#### Scenario: Convert a listed OCC agent

- **WHEN** OCC returns a valid agent from the selected namespace
- **THEN** the provider emits an `AiResource` with `spec.type: agent`, a stable
  identity, the OCC name as its title, the allowlisted annotations, and no
  `backstage.io/source-location`

#### Scenario: Distinguish same-named agents

- **WHEN** two agents in the same provider instance have the same OCC name but
  different IDs
- **THEN** the provider emits distinct deterministic entity names for them

#### Scenario: Agent runtime state changes

- **WHEN** OCC returns a changed status, desired runtime state, execution mode,
  or active revision
- **THEN** the next successful refresh updates the corresponding annotations
  without changing `spec.lifecycle`

### Requirement: Reconcile only complete valid agent snapshots

The provider SHALL validate the OCC response envelope and all fields required
by the pinned OpenAPI contract before applying a full catalog mutation for its
provider-owned location key. Namespace-list responses SHALL have a `data`
array and `meta.requestId` string. Each namespace object SHALL have `id` and
`name` strings, `status` in `provisioning | ready | failed | deleting`, and a
UTC date-time `createdAt` string; optional `existingNamespace`, when present,
SHALL be a string. The selected ready namespace's `id` and `name` SHALL be
non-empty strings.

Agent-list responses SHALL have a `data` array and `meta.requestId` string.
Each agent SHALL match one of the two variants in the pinned OCC contract. Both
variants require string `id`, `namespaceId`, `name`, `servicePrincipalId`, and
`configurationId`; `executionMode` in `embedded | dedicated`;
`gatewayManagedMode` boolean; `desiredRuntimeState` in `running | stopped`;
`status` in `active | deleting`; and UTC date-time `createdAt` string. The
readable-configuration variant additionally requires `backendId` (string or
null) and `harnessAuth` (object or null). The
`configurationReadError` variant requires a `configurationReadError` object;
`backendId` may be absent, and when present SHALL be a string or null.
Only in the `configurationReadError` variant may configuration fields
including `harnessAuth`, `plugins`, `pluginApprovers`, `repositoryBindings`,
`repositoryAccess`, and `credentialSources` be absent. `activeRevisionId` is an optional string in
either variant and SHALL be omitted from the entity when absent. The runtime
validator SHALL enforce the pinned contract's types, enum values,
length/pattern constraints, and date-time constraints for required fields,
while ignoring unknown properties.
Unknown properties SHALL NOT be copied into the entity.

Every agent's `namespaceId` SHALL equal the resolved namespace ID, and agent
IDs SHALL be unique within a response. A missing or mistyped required field, a
duplicate agent ID, or a namespace-ID mismatch SHALL fail the whole snapshot;
the provider SHALL NOT skip the invalid record or submit a partial full
mutation. The provider identity SHALL be stable and unique for each configured
instance, and the Catalog's provider-ownership registry SHALL be authoritative
for whether an entity reference belongs to this provider. A reference already
owned by another provider SHALL cause the Catalog to reject the mutation; the
provider SHALL treat that as a failed sync and SHALL NOT adopt, replace, delete,
or rename the other provider's entity. Duplicate candidate entity references
within one snapshot SHALL also fail the snapshot. Failure (including transport or
authentication failure) of a required namespace or agent-list request, or
response validation, SHALL preserve the last successfully published entities.
Failure of the optional `GET
/installation` lookup, including an authorization failure, SHALL omit chat
links but SHALL NOT prevent mutation of a complete valid agent snapshot. A
complete valid empty agent list SHALL remove the entities owned by that
provider instance. Each configured provider instance ID SHALL be globally
unique among providers emitting AiResource agents, and its stable provider
identity and location key SHALL be
`OpenClawAgentProvider:<providerInstanceId>`.
Provider instances SHALL therefore have distinct location keys.

#### Scenario: A refresh fails after a successful import

- **WHEN** a later request fails or any agent cannot be safely converted
- **THEN** the provider does not apply a mutation and the prior entities remain
  in the catalog

#### Scenario: OCC confirms there are no agents

- **WHEN** the selected namespace is ready and OCC returns a complete valid
  empty agent list
- **THEN** the provider applies an empty full mutation and its previously owned
  entities are removed

#### Scenario: Two provider instances sync independently

- **WHEN** two configured instances read different OCC deployments or
  namespaces
- **THEN** each instance mutates only entities owned by its own location key

#### Scenario: An agent record is malformed or duplicated

- **WHEN** an agent is missing a required field, has an invalid field type, has
  a namespace ID different from the resolved namespace, or repeats another
  agent ID in the response
- **THEN** the provider submits no full mutation and preserves the prior
  entities for that instance

#### Scenario: Candidate identity belongs to another provider

- **WHEN** the Catalog reports that a candidate `(kind, namespace, name)` is
  already owned by another provider
- **THEN** the provider treats the mutation as failed, leaves the other entity
  untouched, and preserves its last successful entities

#### Scenario: Provider instance IDs determine ownership keys

- **WHEN** a provider instance is configured with ID `development`
- **THEN** its entity mutations use location key
  `OpenClawAgentProvider:development`

### Requirement: Refresh on the Backstage schedule

Each enabled provider instance SHALL perform an initial refresh when connected
to the catalog and SHALL repeat refreshes using its configured Backstage
scheduler schedule. A failed refresh SHALL be reported without stopping future
scheduled attempts. A disabled instance SHALL submit an empty full mutation for
its location key during initialization, SHALL NOT call OCC, and SHALL NOT start
a refresh schedule.

#### Scenario: Scheduled refresh recovers after an outage

- **WHEN** an OCC refresh fails and a later scheduled request succeeds
- **THEN** the provider reconciles the new complete snapshot on that later run

#### Scenario: Disabled instance cleans up catalog entities

- **WHEN** an operator sets one provider instance to `enabled: false` while
  retaining its keyed configuration and module registration
- **THEN** the provider submits an empty full mutation for only that instance's
  location key, makes no OCC request, and leaves OCC agents unchanged

#### Scenario: Disabled instance is removed after cleanup

- **WHEN** the empty mutation for a disabled instance has completed and the
  operator removes its keyed configuration or provider module
- **THEN** no catalog entities remain for that provider instance

#### Scenario: Provider instance ID changes

- **WHEN** an operator changes a provider instance ID
- **THEN** the operator first retains the old keyed entry with `enabled: false`
  until its empty full mutation completes, then configures the new ID

### Requirement: Add optional links to active OpenClaw agents

When a valid native-admin domain is configured, the provider SHALL retrieve
the installation ID from `GET /installation` and add a `backstage.io/links`
entry for each OCC agent whose status is `active`. The URL SHALL use the
OpenClaw Enterprise host derivation from the design. If the domain or
installation ID is unavailable, or the agent is not active, the entity SHALL
omit the link without preventing its catalog import. Link generation SHALL
NOT probe the agent host.

#### Scenario: Active agent has chat-link configuration

- **WHEN** an imported agent is active and the installation ID and valid
  native-admin domain are available
- **THEN** its entity includes a `backstage.io/links` entry for its derived
  browser-chat URL

#### Scenario: Chat-link prerequisites are unavailable

- **WHEN** no native-admin domain is configured, the installation lookup fails,
  including an authorization failure, or an agent is not active
- **THEN** its entity is still imported without a browser-chat link

#### Scenario: Optional installation lookup is unauthorized

- **WHEN** the required namespace and agent reads succeed but `GET
/installation` is unauthorized
- **THEN** the provider imports the agents without chat links
