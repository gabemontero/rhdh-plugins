# Implementation Verification

Verification refreshed on 2026-10-30. Local checks cover the package and
workspace. A read-only OCC check confirmed the `default` namespace and target
agent/revision. That live agent response omitted `gatewayManagedMode`; the
provider now accepts the omission because it does not project that field, and
continues to require `backendId` as string or null. The user's log confirmed
the provider submitted one entity, then catalog processing warned that
`backstage.io/managed-by-origin-location` was missing. The provider now emits
both managed-by annotations with the normalized OCC URL. Full catalog
visibility remains to be confirmed after the backend restarts with this
update.

For the managed-by-origin-location follow-up, the focused mapper and provider
integration tests passed (2 suites, 8 tests), `yarn tsc --pretty false`
passed, and `git diff --check` passed. The backend was not restarted as part
of this verification; catalog visibility still awaits the user's next run.

For the original console/login link implementation, the focused mapper suite
passed (1 suite, 7 tests), strict OpenSpec validation passed, and Prettier
passed. That implementation's mapper coverage confirmed the console link used
the OCC origin, remained for inactive agents and missing installation IDs,
and preceded the chat link when available. The configured agent URL follow-up
below replaces the installation-ID behavior.

After updating the visible chat-link title and the provider test expectation,
`yarn test --watchAll=false` passed across all 18 projects: 94 suites, 2,023
tests, and 2 snapshots. A sandboxed run hit `listen EPERM` in integration
tests that bind local servers; the approved rerun completed successfully.

| Command                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Result                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `YARN_ENABLE_SCRIPTS=false yarn install --immutable`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Passed. Yarn reported existing workspace peer-dependency warnings. |
| `yarn workspace @red-hat-developer-hub/backstage-plugin-catalog-backend-module-openclaw-agent-provider test --watchAll=false --runInBand`                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Passed: 8 suites, 60 tests.                                        |
| `yarn tsc --pretty false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Passed.                                                            |
| `yarn tsc:full`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Passed.                                                            |
| `yarn build:api-reports:only`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Passed; the new package API report contains no warnings.           |
| `yarn prettier --check plugins/catalog-backend-module-openclaw-agent-provider/README.md plugins/catalog-backend-module-openclaw-agent-provider/package.json plugins/catalog-backend-module-openclaw-agent-provider/src/*.ts plugins/catalog-backend-module-openclaw-agent-provider/src/generated/occ-api.ts .changeset/quiet-agents-publish.md openspec/changes/openclaw-enterprise-agent-catalog-provider/design.md openspec/changes/openclaw-enterprise-agent-catalog-provider/specs/openclaw-agent-catalog-provider/spec.md openspec/changes/openclaw-enterprise-agent-catalog-provider/tasks.md` | Passed; all matched files use Prettier style.                      |
| `openspec validate --type change --strict --no-interactive openclaw-enterprise-agent-catalog-provider --json`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Passed: one change validated, no issues.                           |
| `git diff --check`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Passed.                                                            |

The generated OCC declarations were also verified against the pinned OpenAPI
document by checksum and reproducible generation during package setup.

## Configured agent URL follow-up

The provider now accepts an optional HTTPS `agentUrl` and uses it for active
agents instead of deriving an `agent-<hash>` host or requesting the OCC
installation endpoint. The local `app-config.yaml` points to the currently
working `/new` route. This follow-up has not been tested or type-checked yet;
the user will run the backend and verify the catalog links before any commit.
