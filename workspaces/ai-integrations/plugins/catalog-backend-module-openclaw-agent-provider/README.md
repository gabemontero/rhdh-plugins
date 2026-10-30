# OpenClaw Enterprise Agent Catalog Provider

This prototype backend module imports OpenClaw Enterprise agents into the RHDH
catalog as typed `AiResource` entities with `spec.type: agent`. It reads OCC's
REST API from the backend and projects only the agent ID, display name,
namespace ID, status, desired runtime state, execution mode, and optional
active revision. It does not import agent instructions, saved configuration,
plugins, repository access, credential references, service-principal data, or
secret values.

This is prototype code for evaluation. It is not supported or intended for
production use and is not a feature planned to ship in RHDH 2.2.

## Backend registration

This package is a new-backend-system module that extends the `catalog` plugin.
The ai-integrations workspace backend registers it in
`packages/backend/src/index.ts`. Another backend must add the package to its
backend dependencies and add the module's default export to its backend:

```ts
backend.add(
  import(
    '@red-hat-developer-hub/backstage-plugin-catalog-backend-module-openclaw-agent-provider'
  ),
);
```

The typed agent model package and its catalog validation module must also be
registered. This provider does not define or validate the `AiResource` agent
kind itself.

## Configuration

Add one keyed entry for each OCC namespace to import. Enabled entries require
an OCC base URL, service key, catalog owner, and catalog lifecycle. Keep the
service key in backend-only secret configuration and use a least-privilege
OCC key when available; the bootstrap key described in the integration notes
has broad permissions.

```yaml
catalog:
  providers:
    openclawAgentProvider:
      oce-dev:
        occApiBaseUrl: ${OCC_API_URL}
        serviceKey: ${OCC_SERVICE_KEY}
        namespaceName: default
        catalogNamespace: default
        defaultOwner: group:ai-platform
        defaultLifecycle: production
        nativeAdminDomain: ${OCC_NATIVE_ADMIN_DOMAIN}
        schedule:
          frequency:
            minutes: 10
          timeout:
            minutes: 10
          initialDelay:
            seconds: 0
```

`occApiBaseUrl` must be an absolute HTTPS URL without embedded credentials,
query, or fragment. A path prefix is preserved. The default OCC namespace name
and catalog namespace are both `default`. The provider resolves the current OCC
namespace ID by name on every refresh, so deployment-specific IDs do not need
to be stored in RHDH configuration.

`defaultOwner` and `defaultLifecycle` are required because the typed agent
AiResource schema requires `spec.owner` and `spec.lifecycle`. These values are
copied to every imported entity; OCC runtime state does not determine catalog
lifecycle. Every imported agent has an `OpenClaw console/login` link first in
`metadata.links`, pointing to the OCC origin plus `/console`. A path prefix on
`occApiBaseUrl` is not included in the console URL.
`nativeAdminDomain` is optional and accepts a hostname only, without a scheme,
port, or path. When configured, active agents receive a derived browser-chat
link after the console link if OCC returns the installation ID. Its title
reminds users to log in through the console link above first. A failed
installation lookup omits only the chat link and does not block the agent
import.

Without a `schedule` block, the provider uses a ten-minute frequency,
ten-minute timeout, and an immediate initial run. Backstage scheduler schedule
overrides are honored, including `initialDelay`. To disable automatic refresh,
set `frequency.trigger: manual`; the provider then runs only when triggered
through the Backstage scheduler.

For OCC deployments using a private CA, add the CA bundle to the backend
process trust configuration with Node's `NODE_EXTRA_CA_CERTS`, for example:

```sh
NODE_EXTRA_CA_CERTS=/path/to/oce-ingress-ca.pem
```

TLS verification remains enabled. The provider sends the service key only in
the backend `x-api-key` request header. It rejects redirects and logs only a
sanitized refresh failure; it does not log response bodies, request headers,
service keys, or snapshot freshness annotations. Backend logs are the freshness
signal for this prototype. OpenClaw sync logs use the `openclaw-agent-connector`
plugin label and `openClawEnterpriseConnectorPlugin` source field.

## Catalog projection and cleanup

Each entity has a stable provider-scoped name, the OCC name as
`metadata.title`, and `spec.type: agent`. It includes the `rhdh.io/ai-asset-*`
category and source annotations, normalized
`backstage.io/managed-by-location` and
`backstage.io/managed-by-origin-location` provenance, both set to the normalized
OCC URL, and allowlisted OCC identifier and runtime-state annotations. It omits
`backstage.io/source-location` because OCC does not identify an agent's source
repository.

To remove imported entities before uninstalling the module, retain the same
provider instance ID and set `enabled: false`:

```yaml
catalog:
  providers:
    openclawAgentProvider:
      oce-dev:
        enabled: false
```

The disabled provider submits an empty catalog snapshot for its provider-owned
location key without contacting OCC or starting a schedule. Wait for that
cleanup to run before removing the config entry or module. It removes catalog
entities only; it does not delete OCC agents. If changing the provider
instance ID, first disable the old ID and allow cleanup to complete, then add
the new ID. Removing the old ID first leaves its catalog entities behind.

## Optional OCC environment cross-check

The OpenClaw Enterprise checkout includes `discover-agent.sh`. Run it from that
checkout with `--discover-only` when you want to compare the deployment's
current namespace and agent IDs, active revision, and browser-chat URL with the
catalog projection. The script writes `agent-env.sh` under
`OCC_INPUT_DIRECTORY` (default `~/oce-secure`) with values including
`NAMESPACE_ID`, `AGENT_ID`, `REVISION_ID`, and `AGENT_URL`. The provider itself
does not use those stored IDs; it discovers namespace IDs through OCC on every
refresh.

`--discover-only` skips the chat turn and port-forward, but the script also
reads the agent gateway password Secret and writes a temporary password file
under `OCC_INPUT_DIRECTORY`. Run it only with the secure OCE environment
directory and protect the generated files. The RHDH provider never consumes
this gateway password.

## Refreshing the generated OCC API types

The generated client declarations come from OpenClaw Enterprise's
`packages/contracts/openapi/occ-api.openapi.json` at revision
`92cc1a89c069f865ad53d769f22f14abb1292b53`. The source is vendored at
`openapi/occ-api.openapi.json`; the generation script checks its SHA-256 before
writing the declarations. It then applies a deterministic TypeScript alias for
the recursive `SafeJsonValue` schema so the declarations type-check with the
workspace compiler, and formats the output with Prettier.

From the `workspaces/ai-integrations` directory, run:

```sh
yarn workspace @red-hat-developer-hub/backstage-plugin-catalog-backend-module-openclaw-agent-provider generate:openapi
```
