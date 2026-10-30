/*
 * Copyright Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface paths {
  '/api/auth/accounts': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Create a local auth account as an Installation administrator
     * @description Requires administer permission on the Installation. Creates a Better Auth account and an explicit IAM Principal in one transaction. Supplying roleId also creates a binding to that existing IAM Role; omitting roleId creates no grants. Public signup remains disabled. An optional github.subject attaches that GitHub identity in the same transaction; it conflicts when GitHub sign-in is not configured or the identity is already assigned.
     */
    post: operations['createAuthAccount'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/accounts/{userId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Inspect current human account state
     * @description Requires a current human Native IAM Installation administrator and trusted Origin. Returns guarded present state, not a receipt for any prior operation.
     */
    get: operations['getAuthAccount'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/accounts/{userId}/disable': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Disable a human account
     * @description Requires a current human Native IAM Installation administrator who holds every grant of the target account's Principal, trusted Origin and expectedVersion from a guarded account read. Commits state and audit together. An unknown outcome must be inspected without automatic retry; present state does not attribute the earlier request.
     */
    post: operations['disableAuthAccount'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/accounts/{userId}/enable': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Re-enable a disabled human account
     * @description Requires a current human Native IAM Installation administrator who holds every grant of the target account's Principal, trusted Origin and expectedVersion from a guarded account read. Commits state and audit together. An unknown outcome must be inspected without automatic retry; present state does not attribute the earlier request.
     */
    post: operations['enableAuthAccount'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/accounts/{userId}/enrol': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Enrol an existing account that activation skipped
     * @description Requires a current human Native IAM Installation administrator and trusted Origin. The account must already have its IAM Principal and exactly one password. Idempotent; enrolment grants no access beyond the account's existing IAM bindings.
     */
    post: operations['enrolAuthAccount'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/accounts/{userId}/methods/{methodId}/detach': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Detach an external sign-in identity from an account
     * @description Requires a current human Native IAM Installation administrator who holds every grant of the target account's Principal, trusted Origin and expectedVersion from a guarded account read. Commits state and audit together. An unknown outcome must be inspected without automatic retry; present state does not attribute the earlier request.
     */
    post: operations['detachAuthMethod'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/accounts/{userId}/providers/github': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Attach an exact GitHub identity to an existing account
     * @description Requires a current human Native IAM Installation administrator who holds every grant of the target account's Principal, trusted Origin and expectedVersion from a guarded account read. Commits state and audit together. An unknown outcome must be inspected without automatic retry; present state does not attribute the earlier request.
     */
    post: operations['attachGitHubIdentity'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/accounts/{userId}/providers/google': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Attach an exact Google identity to an existing account
     * @description Requires a current human Native IAM Installation administrator who holds every grant of the target account's Principal, trusted Origin and expectedVersion from a guarded account read. Commits state and audit together. An unknown outcome must be inspected without automatic retry; present state does not attribute the earlier request.
     */
    post: operations['attachGoogleIdentity'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/accounts/{userId}/providers/oidc': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Attach an exact OIDC identity to an existing account
     * @description Requires a current human Native IAM Installation administrator who holds every grant of the target account's Principal, trusted Origin and expectedVersion from a guarded account read. Commits state and audit together. An unknown outcome must be inspected without automatic retry; present state does not attribute the earlier request.
     */
    post: operations['attachOidcIdentity'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/accounts/{userId}/revoke': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Revoke all sessions for a human account
     * @description Requires a current human Native IAM Installation administrator who holds every grant of the target account's Principal, trusted Origin and expectedVersion from a guarded account read. Commits state and audit together. An unknown outcome must be inspected without automatic retry; present state does not attribute the earlier request.
     */
    post: operations['revokeAuthAccountSessions'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/providers': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List configured browser sign-in methods */
    get: operations['getAuthProviders'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/providers/github/callback': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Complete an enrolled GitHub sign-in
     * @description Consumes the browser-bound attempt before provider exchange. Redirects to Console after session and audit commit or with a fixed failure classification.
     */
    get: operations['completeGitHubSignIn'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/providers/github/result': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Confirm which session a GitHub sign-in created
     * @description Requires the configured browser Origin, the one-use login receipt cookie set by the callback, the matching attemptId and the session cookie that callback issued. Returns that session's sessionKey; never issues or extends a session.
     */
    post: operations['confirmGitHubSignIn'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/providers/github/start': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Start GitHub sign-in for an enrolled account
     * @description Requires the exact configured browser Origin and, when Sec-Fetch-Site is present, same-origin. Creates a one-use browser-bound login attempt and returns its public attemptId for the result exchange; does not create an account or grant access.
     */
    post: operations['startGitHubSignIn'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/providers/google/callback': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Complete an enrolled Google sign-in
     * @description Consumes the browser-bound attempt before provider exchange. Redirects to Console after session and audit commit or with a fixed failure classification.
     */
    get: operations['completeGoogleSignIn'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/providers/google/result': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Confirm which session a Google sign-in created
     * @description Requires the configured browser Origin, the one-use login receipt cookie set by the callback, the matching attemptId and the session cookie that callback issued. Returns that session's sessionKey; never issues or extends a session.
     */
    post: operations['confirmGoogleSignIn'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/providers/google/start': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Start Google sign-in for an enrolled account
     * @description Requires the exact configured browser Origin and, when Sec-Fetch-Site is present, same-origin. Creates a one-use browser-bound login attempt and returns its public attemptId for the result exchange; does not create an account or grant access.
     */
    post: operations['startGoogleSignIn'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/providers/oidc/callback': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Complete an enrolled OIDC sign-in
     * @description Consumes the browser-bound attempt before provider exchange. Redirects to Console after session and audit commit or with a fixed failure classification.
     */
    get: operations['completeOidcSignIn'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/providers/oidc/result': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Confirm which session an OIDC sign-in created
     * @description Requires the configured browser Origin, the one-use login receipt cookie set by the callback, the matching attemptId and the session cookie that callback issued. Returns that session's sessionKey; never issues or extends a session.
     */
    post: operations['confirmOidcSignIn'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/providers/oidc/start': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Start OIDC sign-in for an enrolled account
     * @description Requires the exact configured browser Origin and, when Sec-Fetch-Site is present, same-origin. Creates a one-use browser-bound login attempt and returns its public attemptId for the result exchange; does not create an account or grant access.
     */
    post: operations['startOidcSignIn'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/recovery': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Inspect the recovery account designation
     * @description Requires a current human Native IAM Installation administrator and trusted Origin. Returns the present designation, whose password the database protects; not a receipt for any prior operation.
     */
    get: operations['getAuthRecovery'];
    put?: never;
    /**
     * Move the recovery designation to another Installation administrator
     * @description Requires a current human Native IAM Installation administrator and trusted Origin who holds every IAM grant of the current holder's Principal (else 403). The target must be an enrolled, enabled account with one password whose Principal administers the Installation. expectedCurrentUserId comes from the recovery read and expectedVersion from the target's account read. Commits state and audit together; an unknown outcome must be inspected without automatic retry.
     */
    post: operations['replaceAuthRecovery'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/service-keys': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Issue a service API key
     * @description Requires a session or Installation-scoped service key with administer on the Installation. Issues a Better Auth key for an existing non-Agent ServicePrincipal in its exact scope when the caller already holds every IAM grant of that ServicePrincipal at the same or a broader scope; creates no identity or IAM grant. The plaintext key is returned only here.
     */
    post: operations['createServiceKey'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/service-keys/{keyId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /**
     * Revoke a service API key
     * @description Requires a session or Installation-scoped service key with administer on the Installation, plus every IAM grant of the key's ServicePrincipal, as for issuance. Deletes the stored Better Auth key; subsequent requests cannot authenticate with it.
     */
    delete: operations['revokeServiceKey'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/session': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Inspect authentication without revealing session tokens
     * @description Returns authenticated status, public account identity, and a noncredential sessionKey that stays stable across reads and changes for a new session, or null without a valid session; session tokens and credentials are never returned.
     */
    get: operations['getAuthSession'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/sign-in/email': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Sign in with email and password
     * @description Authenticates a local account and issues a user session cookie. In both profiles, repeated failed attempts for one email, or from one client address behind a trusted proxy, spend the password budget and may return 429 once it is spent. A successful sign-in also sets an HttpOnly known-device cookie; later attempts for that email from the same browser spend the browser's own budget instead of the email's. The cookie never authenticates. An email with a NUL character or an unpaired UTF-16 surrogate is refused with 400 INVALID_REQUEST and spends budget like a rejected password; the password is not checked for either.
     */
    post: operations['signInEmail'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/auth/sign-out': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Sign out of the current session
     * @description Revokes the current user session cookie.
     */
    post: operations['signOut'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/backends': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List configured Backends (experimental)
     * @description Requires administer permission on the requested Installation.
     */
    get: operations['listBackends'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/installation': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get the singleton Installation
     * @description Requires read permission on the requested Installation.
     */
    get: operations['getInstallation'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/installation/bootstrap': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Bootstrap the singleton Installation
     * @description Requires administer permission on the requested Installation.
     */
    post: operations['bootstrapInstallation'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/installation/deployment-inventory': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get the complete authorized Agent deployment inventory
     * @description Requires administer permission on the requested Installation.
     */
    get: operations['getInstallationDeploymentInventory'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/installation/driver-configurations': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Inspect selected Driver startup configuration schemas
     * @description Requires administer permission on the requested Installation.
     */
    get: operations['discoverInstallationConfigurations'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List authorized Namespaces
     * @description Only Namespace resources with individual read permission are returned.
     */
    get: operations['listNamespaces'];
    put?: never;
    /**
     * Create an Installation-owned Namespace
     * @description Requires create permission for Namespace resources in the Installation. Requires administer permission on the Installation when selecting an existing Kubernetes namespace.
     */
    post: operations['createNamespace'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get an exact Installation-owned Namespace
     * @description Requires read permission on the requested Namespace.
     */
    get: operations['getNamespace'];
    put?: never;
    post?: never;
    /**
     * Begin or retry deletion of an empty Installation-owned Namespace
     * @description Requires delete permission on the requested Namespace.
     */
    delete: operations['deleteNamespace'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List authorized Agents in one exact Namespace
     * @description Requires read permission on the requested Namespace. Only Agent resources with individual read permission are returned.
     */
    get: operations['listAgents'];
    put?: never;
    /**
     * Create a Namespace-owned Agent
     * @description Requires create permission for Agent resources in the requested Namespace. Requires read permission on the requested Configuration. Requires read permission on each currently associated or newly associated ServiceAccount when present. Requires operate permission on each bound Secret when Secret bindings are present or selected. Requires operate permission on each CredentialSource listed in credentialSources or named by a credential-source harnessAuth.
     */
    post: operations['createAgent'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/device-authorizations': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Experimental: Start a private device login for Agent configuration
     * @description Requires create permission for Agent resources in the requested Namespace. Requires create permission for Secret resources in the requested Namespace.
     */
    post: operations['startAgentDeviceAuthorization'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/device-authorizations/{secretId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /**
     * Experimental: Discard a local device login without upstream revocation
     * @description Requires create permission for Agent resources in the requested Namespace. Requires operate permission on the requested Secret.
     */
    delete: operations['cancelAgentDeviceAuthorization'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/device-authorizations/{secretId}/poll': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Experimental: Complete device login without returning credential material
     * @description Requires create permission for Agent resources in the requested Namespace. Requires operate permission on the requested Secret.
     */
    post: operations['pollAgentDeviceAuthorization'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/models': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * List provider models for Agent creation without storing the supplied credential
     * @description Requires create permission for Agent resources in the requested Namespace.
     */
    post: operations['discoverAgentModels'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/plugins': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * List or search available plugins for Agent creation using the selected Driver
     * @description Requires create permission for Agent resources in the requested Namespace. Requires operate permission on the exact same-Namespace Secret when a Secret reference is supplied.
     */
    post: operations['discoverAgentPlugins'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/plugins/details': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Read plugin details using the selected Driver
     * @description Requires create permission for Agent resources in the requested Namespace. Requires operate permission on the exact same-Namespace Secret when a Secret reference is supplied.
     */
    post: operations['discoverAgentPluginDetails'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/provision': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Create a new Agent and queue first-time provisioning
     * @description Requires create permission for Agent resources in the requested Namespace. Requires create permission for Configuration resources in the requested Namespace. Requires administer permission on the requested Installation. Requires read permission on each currently associated or newly associated ServiceAccount when present. Requires operate permission on each existing Secret reference supplied in provisioning inputs.
     */
    post: operations['provisionAgent'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/provision/{workId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get first-time provisioning status for one exact work item
     * @description Requires create permission for Agent and Configuration resources in the requested Namespace and administer permission on the Installation. These are checked from the request path before any lookup, so a caller without them gets 403 whether or not the Namespace or work item exists. Only the principal that started the work can read it. The caller also needs read, operate and deploy permission on the work's Agent and read and update permission on its Configuration once the work has created them, operate permission on each Secret the work binds or uses for Harness authentication, and read permission on its Harness ServiceAccount when present. OCC re-checks these grants against the initiator while the work runs.
     */
    get: operations['getAgentProvisioning'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/provision/{workId}/retry': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Retry failed first-time provisioning for one exact work item
     * @description Requires create permission for Agent and Configuration resources in the requested Namespace and administer permission on the Installation. These are checked from the request path before any lookup, so a caller without them gets 403 whether or not the Namespace or work item exists. Only the principal that started the work can retry it. The caller also needs read, operate and deploy permission on the work's Agent and read and update permission on its Configuration once the work has created them, operate permission on each Secret the work binds or uses for Harness authentication, and read permission on its Harness ServiceAccount when present. OCC re-checks these grants against the initiator while the work runs.
     */
    post: operations['retryAgentProvisioning'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/repository-options': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List approved repository choices for Agent creation in one Namespace
     * @description Requires create permission for Agent resources in the requested Namespace.
     */
    get: operations['listRepositoryOptions'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/validate': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Check an unsaved Agent Configuration, plugin selections, initial workspace files and Harness authentication as Configuration and Agent create would, without saving anything
     * @description Requires create permission for Agent resources in the requested Namespace.
     */
    post: operations['validateAgentCreate'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get an exact Namespace-owned Agent
     * @description Requires read permission on the requested Agent.
     */
    get: operations['getAgent'];
    put?: never;
    post?: never;
    /**
     * Begin or retry deletion of the requested Agent and its Agent revisions
     * @description Requires delete permission on the requested Agent.
     */
    delete: operations['deleteAgent'];
    options?: never;
    head?: never;
    /**
     * Replace an exact Namespace-owned Agent's editable draft
     * @description Requires update permission on the requested Agent. Requires read permission on the requested Configuration. Requires read permission on each currently associated or newly associated ServiceAccount when present. Requires operate permission on each bound Secret when Secret bindings are present or selected. Requires operate permission on each CredentialSource the Agent lists or names in harnessAuth, before and after the update.
     */
    patch: operations['updateAgent'];
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/credential-sources/{credentialSourceId}/withdraw': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Revoke one credential source from the selected Agent revision
     * @description Requires operate permission on the requested Agent.
     */
    post: operations['withdrawAgentCredentialSource'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/credential-sources/{credentialSourceId}/withdrawal': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get the withdrawal state of a credential source for an Agent
     * @description Requires read permission on the requested Agent.
     */
    get: operations['getAgentCredentialWithdrawal'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/deploy': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Save an Agent revision from the Agent's saved settings
     * @description Requires deploy permission on the requested Agent. Requires read permission on the requested Configuration. Requires read permission on the Agent when the selected Compute Driver must generate missing runtime credentials for its first deployment. Requires operate permission on the Agent when the selected Compute Driver must generate missing runtime credentials for its first deployment. Requires read permission on each currently associated or newly associated ServiceAccount when present. Requires operate permission on each bound Secret when Secret bindings are present or selected. Requires operate permission on each CredentialSource the Agent lists or names in harnessAuth. Deployment also requires the owning Agent service principal to have operate permission on each bound Secret and on each CredentialSource the Agent lists.
     */
    post: operations['deployAgent'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/deployments/{deploymentId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get the saved deployment status for an Agent revision
     * @description Requires read permission on the requested Agent revision.
     */
    get: operations['getAgentDeployment'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/deployments/{deploymentId}/diagnostics': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Check the current runtime for an Agent revision
     * @description Requires operate permission on the requested Agent. Requires read permission on the requested Agent. Requires read permission on the requested Agent revision.
     */
    post: operations['diagnoseAgentDeployment'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/deployments/{deploymentId}/runtime': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Read Pod status, restart counts, Events, and log sources for an Agent revision
     * @description Requires operate permission on the requested Agent. Requires read permission on the requested Agent. Requires read permission on the requested Agent revision.
     */
    get: operations['getAgentDeploymentRuntime'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/deployments/{deploymentId}/runtime/logs': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Read one page of redacted container output for an Agent revision
     * @description Requires read_logs permission on the requested Agent. Without read_logs, administer permission on the requested Agent also admits the read. Requires read permission on the requested Agent.
     */
    get: operations['getAgentDeploymentRuntimeLogs'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/device-authorizations': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Experimental: Start a private device login for Agent configuration
     * @description Requires update permission on the requested Agent. Requires read permission on the requested Agent. Requires create permission for Secret resources in the requested Namespace.
     */
    post: operations['startSavedAgentDeviceAuthorization'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/device-authorizations/{secretId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /**
     * Experimental: Discard a local device login without upstream revocation
     * @description Requires update permission on the requested Agent. Requires read permission on the requested Agent. Requires operate permission on the requested Secret.
     */
    delete: operations['cancelSavedAgentDeviceAuthorization'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/device-authorizations/{secretId}/poll': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Experimental: Complete device login without returning credential material
     * @description Requires update permission on the requested Agent. Requires read permission on the requested Agent. Requires operate permission on the requested Secret.
     */
    post: operations['pollSavedAgentDeviceAuthorization'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/driver-configurations': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Discover authorized Agent Driver configuration contributions
     * @description Requires read permission on the requested Agent.
     */
    get: operations['discoverAgentConfigurations'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/harness-status': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Read the Sandbox Driver's record of a running Agent's dedicated Harness Sandbox
     * @description Requires read permission on the requested Agent.
     */
    get: operations['getAgentHarnessStatus'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/native-admin': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Resolve native admin UI launch availability for one Agent
     * @description Requires a human session with administer permission on the exact Agent. Service API keys cannot launch or inspect native admin UI access.
     */
    get: operations['getAgentNativeAdmin'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/permissions': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Report advisory primary IAM permissions on a readable Agent, not authorization for a later operation
     * @description Requires read permission on the requested Agent.
     */
    get: operations['getAgentCallerPermissions'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/permissions/secrets': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Report the readable Secrets that the caller may not bind to a readable Agent, not authorization for a later operation
     * @description Requires read permission on the requested Agent.
     */
    get: operations['getAgentSecretPermissions'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/plugins': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * List or search plugins for an active Agent; caller needs Agent read/update. Curated discovery needs no Secret; hosted discovery needs the Agent's bound Service Accounts Secret with caller and Agent Secret operate grants
     * @description Requires update permission on the requested Agent. Requires read permission on the requested Agent. Requires operate permission on the Agent's bound Secret when the selected Plugin Driver requires a discovery credential.
     */
    post: operations['discoverSavedAgentPlugins'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/plugins/capabilities': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Read selected Plugin Driver policy capabilities for an active Agent with caller Agent read/update permission
     * @description Requires update permission on the requested Agent. Requires read permission on the requested Agent.
     */
    get: operations['getSavedAgentPluginPolicyCapabilities'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/plugins/details': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Read plugin details for an active Agent; caller needs Agent read/update. Curated discovery needs no Secret; hosted discovery needs the Agent's bound Service Accounts Secret with caller and Agent Secret operate grants
     * @description Requires update permission on the requested Agent. Requires read permission on the requested Agent. Requires operate permission on the Agent's bound Secret when the selected Plugin Driver requires a discovery credential.
     */
    post: operations['discoverSavedAgentPluginDetails'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/repository-approval-scopes': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Review resolved repository scope before explicitly approving it
     * @description Requires administer permission on the requested Agent.
     */
    get: operations['listAgentStandingApprovalScopes'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/repository-approvals': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Read attributable repository approvals and removed generations for one Agent
     * @description Requires administer permission on the requested Agent.
     */
    get: operations['listAgentStandingApprovals'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/repository-approvals/{approvalId}/remove': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Remove repository approval independently of configuration or runtime cleanup
     * @description Requires administer permission on the requested Agent.
     */
    post: operations['removeAgentStandingApproval'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/repository-options': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List approved repository choices for updating one Agent
     * @description Requires update permission on the requested Agent.
     */
    get: operations['listAgentRepositoryOptions'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/revisions': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Agent revision summaries that you can read for the requested Agent, newest first
     * @description Requires read permission on the requested Agent. Only Agent revision resources with individual read permission are returned.
     */
    get: operations['listAgentRevisions'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/revisions/{revisionId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get an Agent revision that you can read
     * @description Requires read permission on the requested Agent revision.
     */
    get: operations['getAgentRevision'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/revisions/{revisionId}/sandbox-policy/{facet}/recommendations': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Read policy suggestions for the requested Agent revision
     * @description Requires read permission on the requested Agent. Requires read permission on the requested SandboxPolicy.
     */
    get: operations['getAgentSandboxRecommendations'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/runtime-credentials': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get metadata for one Agent's provisioned runtime credentials
     * @description Requires read permission on the requested Agent.
     */
    get: operations['getAgentRuntimeCredentials'];
    put?: never;
    /**
     * Provision initial runtime credentials for one undeployed Agent
     * @description Requires operate permission on the requested Agent. Requires read permission on the requested Agent.
     */
    post: operations['provisionAgentRuntimeCredentials'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/runtime-images': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Read observed images and source commits for an Agent's active runtime
     * @description Requires read permission on the requested Agent.
     */
    get: operations['getAgentRuntimeImages'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/sandbox-policy/{facet}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Read one Agent sandbox policy and delegation ceiling
     * @description Requires read permission on the requested Agent. Requires read permission on the requested SandboxPolicy.
     */
    get: operations['getAgentSandboxPolicy'];
    /**
     * Replace one Agent network policy additions
     * @description Requires manage_policy permission on the requested Agent. Requires update permission on the requested SandboxPolicy.
     */
    put: operations['updateAgentSandboxPolicy'];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/sandbox-policy/{facet}/apply': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Apply the saved policy to the running Agent revision
     * @description Requires manage_policy permission on the requested Agent. Requires update permission on the requested SandboxPolicy.
     */
    post: operations['applyAgentSandboxPolicy'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/sandbox-policy/{facet}/editing': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /**
     * Temporarily enable or disable future policy edits for one Agent
     * @description Requires administer permission on the requested Agent. Requires administer permission for Installation resources in the Installation.
     */
    patch: operations['TEMPORARY_API_WILL_BREAK_IN_FUTURE_setAgentSandboxPolicyEditing'];
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/sandbox-policy/{facet}/validate': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Preview Agent network policy admission without saving or applying
     * @description Requires manage_policy permission on the requested Agent.
     */
    post: operations['validateAgentSandboxPolicy'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/stop': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Stop one Agent and keep its saved Agent revision and persistent state
     * @description Requires operate permission on the requested Agent.
     */
    post: operations['stopAgent'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/agents/{agentId}/workspace/files/{name}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Read an allowed workspace file from one active Agent
     * @description Requires read permission on the requested Agent.
     */
    get: operations['getAgentWorkspaceFile'];
    /**
     * Create or replace an allowed workspace file for one active Agent
     * @description Requires operate permission on the requested Agent.
     */
    put: operations['putAgentWorkspaceFile'];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/channel-directory/lookup': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Search a channel directory using an authorized Namespace Secret
     * @description Requires operate permission on the exact Secret named by secretId. Without an edit target, requires Agent create permission in the Namespace. With agentId, requires update permission on that exact Agent. With configurationId, requires update permission on that exact Configuration.
     */
    post: operations['lookupChannelDirectory'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/configurations': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Create a native Namespace-owned Agent Configuration
     * @description Requires create permission for Configuration resources in the requested Namespace. Requires operate permission on each Secret supplied in request body Secret bindings.
     */
    post: operations['createConfiguration'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/configurations/{configurationId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get an exact Namespace-owned Configuration
     * @description Requires read permission on the requested Configuration.
     */
    get: operations['getConfiguration'];
    put?: never;
    post?: never;
    /**
     * Delete an exact unreferenced Namespace-owned Configuration
     * @description Requires delete permission on the requested Configuration.
     */
    delete: operations['deleteConfiguration'];
    options?: never;
    head?: never;
    /**
     * Replace values and increment an exact Namespace-owned Configuration generation
     * @description Requires update permission on the requested Configuration. Requires operate permission on each Secret bound by the resulting Configuration.
     */
    patch: operations['updateConfiguration'];
    trace?: never;
  };
  '/namespaces/{namespaceId}/credential-sources': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List readable credential sources without revealing credential values
     * @description Requires read permission on the requested Namespace. Only CredentialSource resources with individual read permission are returned.
     */
    get: operations['listCredentialSources'];
    put?: never;
    /**
     * Register a credential source with the selected Credential Gateway
     * @description Requires create permission for CredentialSource resources in the requested Namespace. Requires operate permission on each Secret named in the request body secrets.
     */
    post: operations['createCredentialSource'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/credential-sources/{credentialSourceId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get one credential source and its live Credential Gateway status
     * @description Requires read permission on the requested CredentialSource.
     */
    get: operations['getCredentialSource'];
    put?: never;
    post?: never;
    /**
     * Remove an unreferenced credential source from the Credential Gateway
     * @description Requires delete permission on the requested CredentialSource.
     */
    delete: operations['deleteCredentialSource'];
    options?: never;
    head?: never;
    /**
     * Push current or replacement Secret values to the Credential Gateway copy
     * @description Requires update permission on the requested CredentialSource. Requires operate permission on each Secret the source references after the update, including its current references when the request omits secrets.
     */
    patch: operations['updateCredentialSource'];
    trace?: never;
  };
  '/namespaces/{namespaceId}/credential-sources/{credentialSourceId}/rotate': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Force the Credential Refresh Driver to mint a new token for a refresh-type source
     * @description Requires update permission on the requested CredentialSource.
     */
    post: operations['rotateCredentialSource'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/iam/access-bindings': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List exact Namespace IAM AccessBindings
     * @description Requires administer permission on the requested Installation. Requires read permission on the requested Namespace.
     */
    get: operations['listIAMAccessBindings'];
    put?: never;
    /**
     * Create an immutable exact-resource Namespace IAM AccessBinding
     * @description Requires administer permission on the requested Installation. Requires read permission on the requested Namespace. Requires read permission on the request body Agent when the AccessBinding targets that resource kind. Requires read permission on the request body Agent revision when the AccessBinding targets that resource kind. Requires read permission on the request body Configuration when the AccessBinding targets that resource kind. Requires read permission on the request body CredentialSource when the AccessBinding targets that resource kind. Requires read permission on the request body Namespace when the AccessBinding targets that resource kind. Requires read permission on the request body Preset when the AccessBinding targets that resource kind. Requires read permission on the request body Secret when the AccessBinding targets that resource kind. Requires read permission on the request body ServiceAccount when the AccessBinding targets that resource kind.
     */
    post: operations['createIAMAccessBinding'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/iam/access-bindings/{bindingId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get an exact Namespace IAM AccessBinding
     * @description Requires administer permission on the requested Installation. Requires read permission on the requested Namespace.
     */
    get: operations['getIAMAccessBinding'];
    put?: never;
    post?: never;
    /**
     * Delete one exact Namespace IAM AccessBinding
     * @description Requires administer permission on the requested Installation. Requires read permission on the requested Namespace.
     */
    delete: operations['deleteIAMAccessBinding'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/iam/roles': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List exact Namespace IAM Roles
     * @description Requires administer permission on the requested Installation. Requires read permission on the requested Namespace.
     */
    get: operations['listIAMRoles'];
    put?: never;
    /**
     * Create an immutable Namespace IAM Role
     * @description Requires administer permission on the requested Installation. Requires read permission on the requested Namespace.
     */
    post: operations['createIAMRole'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/iam/roles/{roleId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get an exact Namespace IAM Role
     * @description Requires administer permission on the requested Installation. Requires read permission on the requested Namespace.
     */
    get: operations['getIAMRole'];
    put?: never;
    post?: never;
    /**
     * Delete an unreferenced exact Namespace IAM Role
     * @description Requires administer permission on the requested Installation. Requires read permission on the requested Namespace.
     */
    delete: operations['deleteIAMRole'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/iam/service-principals': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List the Namespace's non-Agent ServicePrincipals
     * @description Requires administer permission on the requested Installation. Requires read permission on the requested Namespace.
     */
    get: operations['listIAMServicePrincipals'];
    put?: never;
    /**
     * Create a Namespace ServicePrincipal with no grants for automation or CLI keys
     * @description Requires administer permission on the requested Installation. Requires read permission on the requested Namespace.
     */
    post: operations['createIAMServicePrincipal'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/iam/service-principals/{servicePrincipalId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get an exact Namespace ServicePrincipal
     * @description Requires administer permission on the requested Installation. Requires read permission on the requested Namespace.
     */
    get: operations['getIAMServicePrincipal'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/permissions': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Report advisory primary IAM permissions on a readable Namespace, not authorization for a later operation
     * @description Requires read permission on the requested Namespace.
     */
    get: operations['getNamespaceCallerPermissions'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/permissions/secrets': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Report the readable Secrets that the caller may not bind to a new Agent, not authorization for a later operation
     * @description Requires read permission on the requested Namespace.
     */
    get: operations['getNamespaceSecretPermissions'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/presets': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List readable Preset summaries in one Namespace
     * @description Requires read permission on the requested Namespace. Only Preset resources with individual read permission are returned.
     */
    get: operations['listPresets'];
    put?: never;
    /**
     * Create a reusable Namespace-owned Agent Preset
     * @description Requires create permission for Preset resources in the requested Namespace.
     */
    post: operations['createPreset'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/presets/{presetId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Read one exact Namespace-owned Preset
     * @description Requires read permission on the requested Preset.
     */
    get: operations['getPreset'];
    put?: never;
    post?: never;
    /**
     * Delete a Preset without changing existing Agents
     * @description Requires delete permission on the requested Preset.
     */
    delete: operations['deletePreset'];
    options?: never;
    head?: never;
    /**
     * Update a Preset without changing existing Agents
     * @description Requires update permission on the requested Preset.
     */
    patch: operations['updatePreset'];
    trace?: never;
  };
  '/namespaces/{namespaceId}/secrets': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List readable Namespace-owned Secret metadata without revealing material
     * @description Requires read permission on the requested Namespace. Only Secret resources with individual read permission are returned.
     */
    get: operations['listSecrets'];
    put?: never;
    /**
     * Create exact Namespace-owned Secret material and return metadata only
     * @description Requires create permission for Secret resources in the requested Namespace.
     */
    post: operations['createSecret'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/secrets/{secretId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get exact Namespace-owned Secret metadata and its readable consumers
     * @description Requires read permission on the requested Secret.
     */
    get: operations['getSecret'];
    put?: never;
    post?: never;
    /**
     * Delete exact unbound Namespace-owned Secret material
     * @description Requires delete permission on the requested Secret.
     */
    delete: operations['deleteSecret'];
    options?: never;
    head?: never;
    /**
     * Replace exact Namespace-owned Secret material and return stable metadata
     * @description Requires update permission on the requested Secret.
     */
    patch: operations['updateSecret'];
    trace?: never;
  };
  '/namespaces/{namespaceId}/service-accounts': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List authorized Namespace-owned ServiceAccounts in one exact Namespace
     * @description Requires read permission on the requested Namespace. Only ServiceAccount resources with individual read permission are returned.
     */
    get: operations['listServiceAccounts'];
    put?: never;
    /**
     * Create a native Namespace-owned ServiceAccount
     * @description Requires create permission for ServiceAccount resources in the requested Namespace.
     */
    post: operations['createServiceAccount'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/service-accounts/{serviceAccountId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get an exact Namespace-owned ServiceAccount
     * @description Requires read permission on the requested ServiceAccount.
     */
    get: operations['getServiceAccount'];
    put?: never;
    post?: never;
    /**
     * Delete an exact unreferenced Namespace-owned ServiceAccount
     * @description Requires delete permission on the requested ServiceAccount.
     */
    delete: operations['deleteServiceAccount'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/namespaces/{namespaceId}/service-accounts/{serviceAccountId}/credential': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /**
     * Associate an exact Namespace-local credential reference with a ServiceAccount
     * @description Requires update permission on the requested ServiceAccount.
     */
    patch: operations['updateServiceAccountCredential'];
    trace?: never;
  };
  '/namespaces/{namespaceId}/service-accounts/{serviceAccountId}/credentials': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Issue a managed credential for an exact Namespace-owned ServiceAccount
     * @description Requires update permission on the requested ServiceAccount.
     */
    post: operations['createServiceAccountCredential'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/native-admin/return/{agentKey}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Resolve an authorized Agent from a copied native chat link
     * @description Requires a human session with administer permission on the exact Agent. Unknown and inaccessible Agents both return 404. This lookup does not launch or start the Agent.
     */
    get: operations['resolveAgentNativeAdminReturn'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/observability': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get the configured external observability destination
     * @description Requires administer permission on the requested Installation.
     */
    get: operations['getObservability'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
type SafeJsonValue =
  | string
  | boolean
  | number
  | null
  | SafeJsonValue[]
  | { [key: string]: SafeJsonValue };

export interface components {
  schemas: {
    /** SafeJsonValue */
    'def-0': SafeJsonValue;
    /** PluginDriverIdentity */
    'def-1': {
      id: string;
      implementation: string;
    };
    /** AgentRuntimeLogsResponse */
    'def-10': {
      data: {
        cursor: string | null;
        /** Format: date-time */
        observedAt: string;
        records: (
          | {
              contentClass: 'operational' | 'activity' | 'content';
              decision?: {
                binary?: string;
                decision: 'denied' | 'allowed';
                enforcement: 'blocked' | 'reported';
                engine?: string;
                host?: string;
                policyGeneration?: string;
                port?: number;
                reason?: string;
                rule?: string;
              };
              fields?: {
                [key: string]: string | number | boolean;
              };
              kind: 'wrapper' | 'openclaw' | 'codex' | 'sandbox' | 'text';
              level: 'error' | 'warn' | 'info' | 'debug' | 'unknown';
              message: string;
              stream: {
                container?: string;
                pod?: string;
                podUid?: string;
                restartCount?: number;
                sandbox?: string;
                source: 'gateway' | 'agent' | 'sandbox';
              };
              subsystem?: string;
              time: string | null;
              /** @constant */
              truncated?: true;
              /** @constant */
              type: 'line';
            }
          | {
              reason:
                | 'stream_replaced'
                | 'window_exceeded'
                | 'cursor_expired'
                | 'truncated'
                | 'buffer_lost';
              remedy: string;
              stream: {
                container?: string;
                pod?: string;
                podUid?: string;
                restartCount?: number;
                sandbox?: string;
                source: 'gateway' | 'agent' | 'sandbox';
              };
              time: string | null;
              /** @constant */
              type: 'gap';
            }
          | {
              count: number;
              reason: 'unrecognised_structured' | 'oversized' | 'malformed';
              stream: {
                container?: string;
                pod?: string;
                podUid?: string;
                restartCount?: number;
                sandbox?: string;
                source: 'gateway' | 'agent' | 'sandbox';
              };
              time: string | null;
              /** @constant */
              type: 'withheld';
            }
        )[];
        revisionId: string;
        source: 'gateway' | 'agent' | 'sandbox';
        stream: {
          container?: string;
          pod?: string;
          podUid?: string;
          restartCount?: number;
          sandbox?: string;
          source: 'gateway' | 'agent' | 'sandbox';
        } | null;
        truncated: boolean;
        withheld: number;
      };
      meta: {
        requestId: string;
      };
    };
    /** AgentRuntimeCredentialResponse */
    'def-11': {
      data: {
        transportConfigured: boolean;
      };
      meta: {
        requestId: string;
      };
    };
    /** SecretResponse */
    'def-12': {
      data: {
        id: string;
        name: string;
        namespaceId: string;
        /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
        ref: {
          id: string;
          /** @constant */
          kind: 'secret';
          namespaceId: string;
        };
      };
      meta: {
        requestId: string;
      };
    };
    /** CredentialSourceResponse */
    'def-13': {
      data: {
        /** @description Non-secret source configuration keyed by catalog field name. */
        config: {
          [key: string]: string;
        };
        /** @description Protected live static, eligible prepared, or explicitly credential-free metadata access. Each profile requires its own grant; missing material never selects credential-free access. Runtime readiness requires current authenticated supervisor evidence. */
        egress?: {
          adoption: 'live' | 'prepared' | 'credential_free';
          /** @constant */
          retention: 'none';
        };
        id: string;
        name: string;
        namespaceId: string;
        /** @description The Driver capability that admitted this source. Changing the selected Driver does not transfer ownership. */
        ownerCapability: 'credential_gateway' | 'credential_proxy';
        /** @description Exact OCC credential source reference. Shape: `{ "kind": "credential_source", "namespaceId": "ns_...", "id": "cs_..." }`. */
        ref: {
          id: string;
          /** @constant */
          kind: 'credential_source';
          namespaceId: string;
        };
        /** @description Secret inputs keyed by catalog field name. Each value references an OCC Secret in the same Namespace; OCC never returns its value. */
        secrets: {
          [key: string]: {
            id: string;
            /** @constant */
            kind: 'secret';
            namespaceId: string;
          };
        };
        state: 'registering' | 'ready' | 'deleting';
        /** @description Source admission or selected Credential Gateway status. For protected sources, ready does not attest an installed enforcing Sandbox; current supervisor evidence is checked separately. Never contains credential values. */
        status?: {
          reason?: string;
          /** @description Token refresh status reported by the selected Credential Refresh Driver for a refresh-type source. It never contains tokens or refresh material. */
          refresh?: {
            /** Format: date-time */
            expiresAt?: string;
            failureCode?: string;
            /** Format: date-time */
            lastRefreshAt?: string;
            /** Format: date-time */
            nextRefreshAt?: string;
            recoveryAction?:
              | 'retry'
              | 'reauthorize'
              | 'fix_configuration'
              | 'investigate';
            state: 'pending' | 'ready' | 'failed';
          };
          state: 'ready' | 'pending' | 'failed' | 'absent';
        };
        /** @description Source type from the selected Credential Gateway catalog, for example `openai`. */
        type: string;
      };
      meta: {
        requestId: string;
      };
    };
    /** PluginApprovers */
    'def-2': {
      channel: string;
      id: string;
    }[];
    /** PluginToolPolicy */
    'def-3': {
      approval?: 'provider_default' | 'all_actions' | 'write_actions' | 'none';
      approvers?: components['schemas']['def-2'];
      enabled?: boolean;
      reviewer?: 'human' | 'auto';
    };
    /** PluginToolDefaults */
    'def-4': {
      approval?: 'provider_default' | 'all_actions' | 'write_actions' | 'none';
      enabled?: boolean;
      reviewer?: 'human' | 'auto';
    };
    /** PluginDesiredSelection */
    'def-5': {
      approvers?: components['schemas']['def-2'];
      driverPolicy?: {
        [key: string]: unknown;
      };
      enabled: boolean;
      toolDefaults?: components['schemas']['def-4'];
      /** @description Tool overrides keyed by exact opaque tool IDs from the selected Plugin Driver catalog. */
      tools?: {
        [key: string]: components['schemas']['def-3'];
      };
    };
    /**
     * PluginDesiredState
     * @description Agent plugin selection map. Keys must be 1-253 characters matching ^[A-Za-z0-9._~:@-]{1,253}$.
     */
    'def-6': {
      [key: string]: components['schemas']['def-5'];
    };
    /** ErrorResponse */
    'def-7': {
      error: {
        code:
          | 'INVALID_REQUEST'
          | 'UNAUTHENTICATED'
          | 'FORBIDDEN'
          | 'NOT_FOUND'
          | 'METHOD_NOT_ALLOWED'
          | 'INSTALLATION_EXISTS'
          | 'RESOURCE_CONFLICT'
          | 'AGENT_DELETING'
          | 'NAMESPACE_NOT_READY'
          | 'NAMESPACE_NOT_EMPTY'
          | 'PAYLOAD_TOO_LARGE'
          | 'UNSUPPORTED_MEDIA_TYPE'
          | 'UNKNOWN_OUTCOME'
          | 'NOT_IMPLEMENTED'
          | 'INTERNAL_ERROR'
          | 'DEPENDENCY_UNAVAILABLE'
          | 'CREDENTIAL_GATEWAY_NOT_CONFIGURED'
          | 'CREDENTIAL_WITHDRAWAL_IN_PROGRESS'
          | 'CREDENTIAL_TOKEN_UNSETTLED'
          | 'SANDBOX_POLICY_PROTECTED_EXECUTION'
          | 'REPOSITORY_GIT_SENDER_UNQUALIFIED'
          | 'REPOSITORY_GIT_PROFILE_UNSUPPORTED'
          | 'SERVICE_ACCOUNT_DRIVER_NOT_CONFIGURED'
          | 'REPOSITORY_OPTIONS_UNAVAILABLE'
          | 'MODEL_DISCOVERY_CREDENTIALS_REJECTED'
          | 'MODEL_DISCOVERY_RATE_LIMITED'
          | 'MODEL_DISCOVERY_UNAVAILABLE'
          | 'MODEL_DISCOVERY_INVALID_RESPONSE'
          | 'PLUGIN_DISCOVERY_CREDENTIALS_REJECTED'
          | 'PLUGIN_DISCOVERY_RATE_LIMITED'
          | 'PLUGIN_DISCOVERY_UNAVAILABLE'
          | 'PLUGIN_DISCOVERY_INVALID_RESPONSE'
          | 'CHANNEL_DIRECTORY_CREDENTIALS_REJECTED'
          | 'CHANNEL_DIRECTORY_MISSING_SCOPE'
          | 'CHANNEL_DIRECTORY_RATE_LIMITED'
          | 'CHANNEL_DIRECTORY_INVALID_RESPONSE'
          | 'CHANNEL_DIRECTORY_UNAVAILABLE'
          | 'CHANNEL_CREDENTIAL_ROLE_MISMATCH'
          | 'CHANNEL_CREDENTIAL_CREDENTIALS_REJECTED'
          | 'CHANNEL_CREDENTIAL_UNAVAILABLE'
          | 'CHANNEL_CREDENTIAL_BINDING_REQUIRED'
          | 'RUNTIME_LOGS_CURSOR_INVALID'
          | 'RUNTIME_LOGS_POD_INVALID'
          | 'RUNTIME_LOGS_SOURCE_UNAVAILABLE'
          | 'NATIVE_ADMIN_RETURN_RATE_LIMITED'
          | 'RUNTIME_LOGS_RATE_LIMITED'
          | 'RUNTIME_LOGS_CLUSTER_RBAC'
          | 'RUNTIME_LOGS_SANDBOX_NOT_FOUND'
          | 'RUNTIME_LOGS_UNAVAILABLE'
          | 'RUNTIME_LOGS_AUDIT_UNAVAILABLE'
          | 'RUNTIME_LOGS_TIMEOUT'
          | 'RUNTIME_CREDENTIALS_CLUSTER_RBAC';
        details?: {
          code:
            | 'REQUIRED'
            | 'UNKNOWN_FIELD'
            | 'INVALID_TYPE'
            | 'INVALID_FORMAT'
            | 'INVALID_VALUE'
            | 'TOO_LONG'
            | 'TOO_DEEP'
            | 'INVALID_RANGE'
            | 'OUTSIDE_CEILING';
          message?: string;
          path: string;
        }[];
        message: string;
      };
      meta: {
        requestId: string;
      };
    };
    /** AgentDeploymentDiagnosticsResponse */
    'def-8': {
      data: {
        checks: {
          check: string;
          checkedAt: string | null;
          code?: string;
          component: string;
          state: 'succeeded' | 'failed' | 'unknown';
        }[];
        /** Format: date-time */
        observedAt: string;
        revisionId: string;
      };
      meta: {
        requestId: string;
      };
    };
    /** AgentRuntimeResponse */
    'def-9': {
      data: {
        /** @description The Sandbox Driver reports this provider-owned Harness Sandbox (OpenShell). `lost` means that the Sandbox does not serve this Agent revision. OCC will not restart it. Deploy the Agent again to replace it. `starting` with `HARNESS_RESTARTING` means that the provider is restarting a Harness process that exited. */
        harness?: {
          code?:
            | 'SANDBOX_MISSING'
            | 'SANDBOX_DELETING'
            | 'SANDBOX_STOPPED'
            | 'SANDBOX_FAILED'
            | 'HARNESS_EXITED'
            | 'HARNESS_RESTARTING'
            | 'UNAVAILABLE';
          /** @description Present only with HARNESS_RESTARTING: the Harness process's last exit code. */
          exitCode?: number;
          /** @description Present only with HARNESS_RESTARTING: the restart number in the current crash loop (1 for a first restart). */
          restarts?: number;
          state: 'running' | 'starting' | 'lost' | 'unknown';
        };
        /** Format: date-time */
        observedAt: string;
        pods: {
          cluster: 'control' | 'execution';
          containers: {
            lastTermination: {
              exitCode: number | null;
              finishedAt: string | null;
              reason: string | null;
            } | null;
            name: string;
            ready: boolean;
            reason: string | null;
            restartCount: number;
            startedAt: string | null;
            state: 'waiting' | 'running' | 'terminated' | 'unknown';
          }[];
          createdAt: string | null;
          events: {
            container: string | null;
            count: number;
            lastObservedAt: string | null;
            message: string;
            reason: string;
            type: 'Normal' | 'Warning';
          }[];
          name: string;
          phase: string;
          ready: boolean;
          role: 'gateway' | 'agent';
          uid: string;
        }[];
        revisionId: string;
        sources: {
          available: boolean;
          id: 'gateway' | 'agent' | 'sandbox';
          kind: 'container' | 'sandbox';
          pods: {
            container: string;
            name: string;
            restartCount: number;
            uid: string;
          }[];
          retention: string;
          /** @constant */
          unavailableCode?: 'NO_POD';
        }[];
      };
      meta: {
        requestId: string;
      };
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  createAuthAccount: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          email: string;
          github?: {
            subject: string;
          };
          name?: string;
          password: string;
          roleId?: string;
        };
      };
    };
    responses: {
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: email */
              email: string;
              id: string;
              name: string;
              principalId: string;
            } & {
              [key: string]: unknown;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  getAuthAccount: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        userId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              disabled: boolean;
              methods: {
                methodId: string;
                providerId: string;
                subject: string;
              }[];
              principalId: string;
              userId: string;
              version: number;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  disableAuthAccount: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        userId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          expectedVersion: number;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              userId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  enableAuthAccount: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        userId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          expectedVersion: number;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              userId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  enrolAuthAccount: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        userId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              created: boolean;
              principalId: string;
              userId: string;
              version: number;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  detachAuthMethod: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        userId: string;
        methodId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          expectedVersion: number;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              userId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  attachGitHubIdentity: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        userId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          expectedVersion: number;
          subject: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              userId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  attachGoogleIdentity: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        userId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          expectedVersion: number;
          subject: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              userId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  attachOidcIdentity: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        userId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          expectedVersion: number;
          subject: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              userId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  revokeAuthAccountSessions: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        userId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          expectedVersion: number;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              userId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  getAuthProviders: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              github: boolean;
              google: boolean;
              oidc: boolean;
              /** @description Present only when OIDC sign-in is configured: the Console's button label and the configured authorization endpoint that the start URL must use. */
              oidcSignIn?: {
                /** Format: uri */
                authorizationUrl: string;
                label: string;
              };
              /** @description False when password sign-in is recovery-only: ordinary accounts sign in with an external provider, and only the recovery account uses a password. */
              password: boolean;
              sessionBinding: boolean;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  completeGitHubSignIn: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Redirect to Console */
      302: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  confirmGitHubSignIn: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          attemptId: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              sessionKey: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  startGitHubSignIn: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              attemptId: string;
              /** Format: uri */
              url: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  completeGoogleSignIn: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Redirect to Console */
      302: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  confirmGoogleSignIn: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          attemptId: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              sessionKey: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  startGoogleSignIn: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              attemptId: string;
              /** Format: uri */
              url: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  completeOidcSignIn: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Redirect to Console */
      302: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  confirmOidcSignIn: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          attemptId: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              sessionKey: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  startOidcSignIn: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              attemptId: string;
              /** Format: uri */
              url: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  getAuthRecovery: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              methodId: string;
              principalId: string;
              userId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  replaceAuthRecovery: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          expectedCurrentUserId: string;
          expectedVersion: number;
          userId: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              changed: boolean;
              methodId: string;
              principalId: string;
              userId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  createServiceKey: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          /** @description Lifetime in seconds; defaults to 30 days. */
          expiresIn?: number;
          name: string;
          namespaceId?: string;
          servicePrincipalId: string;
        };
      };
    };
    responses: {
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              expiresAt: string;
              id: string;
              key: string;
              name: string;
              namespaceId?: string;
              servicePrincipalId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  revokeServiceKey: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        keyId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              id: string;
              /** @constant */
              revoked: true;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  getAuthSession: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: null | {
              /** @constant */
              authenticated: true;
              sessionKey: string;
              user: {
                /** Format: email */
                email: string;
                id: string;
                name: string;
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  signInEmail: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          email: string;
          password: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** @constant */
              authenticated: true;
              sessionKey?: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Payload Too Large */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unsupported Media Type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Too Many Requests */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  signOut: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              [key: string]: unknown;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            error: {
              code: string;
              details?: {
                code:
                  | 'REQUIRED'
                  | 'UNKNOWN_FIELD'
                  | 'INVALID_TYPE'
                  | 'INVALID_FORMAT'
                  | 'INVALID_VALUE'
                  | 'TOO_LONG'
                  | 'TOO_DEEP'
                  | 'INVALID_RANGE'
                  | 'OUTSIDE_CEILING';
                message?: string;
                path: string;
              }[];
              message: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
    };
  };
  listBackends: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              id: string;
              type: 'chatgpt' | 'github' | 'openshell';
            }[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getInstallation: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              capabilities?: {
                agentProvisioning?: {
                  executionModes: ('embedded' | 'dedicated')[];
                };
                credentialSources?: {
                  types: {
                    config: {
                      description?: string;
                      issuerRotated?: boolean;
                      name: string;
                      required: boolean;
                    }[];
                    deviceAuthorization?: {
                      harnessId: string;
                    };
                    harnessAuth?: {
                      loginMode: 'api_key' | 'codex_pat' | 'chatgptAuthTokens';
                      modelProvider: string;
                    };
                    rotation: 'none' | 'external' | 'refresh';
                    secrets: {
                      description?: string;
                      issuerRotated?: boolean;
                      name: string;
                      required: boolean;
                    }[];
                    /** @description Source type from the selected Credential Gateway catalog, for example `openai`. */
                    type: string;
                  }[];
                };
                /** @description Present only when dedicated native OpenClaw can be admitted, and says where its native worker support comes from. */
                nativeWorkers?: {
                  support: 'pinned-runtime' | 'custom-image';
                };
                openclaw?: {
                  /** @description The OpenClaw execution modes this Installation's Sandbox Driver and runtime let an Agent deploy. Agent save refuses Embedded with a selected Sandbox Driver, and Dedicated when the Sandbox Driver's settings refuse it (settingRefusals); it saves Dedicated without a Sandbox Driver that can provision it, which deploy refuses. Empty when no mode can deploy: a selected Sandbox Driver refuses Embedded execution, Dedicated needs one that can provision dedicated OpenClaw with settings that allow it, and a selected Sandbox Driver that is unavailable admits neither. */
                  executionModes: ('embedded' | 'dedicated')[];
                  /**
                   * @description Present while the selected Sandbox Driver is unavailable. executionModes is then empty until it returns, and Agent save and deploy answer 503 DEPENDENCY_UNAVAILABLE.
                   * @constant
                   */
                  sandboxDriverUnavailable?: true;
                  /** @description Present when the selected Sandbox Driver can provision a mode missing from executionModes but its settings refuse it. Each value is the message Agent save and deploy return for that mode, naming the setting an operator changes. Absent for other reasons a mode is missing. */
                  settingRefusals?: {
                    dedicated?: string;
                  };
                };
                pluginDiscovery?: {
                  credential: 'required' | 'none';
                };
                pluginPolicies?: {
                  approvers?: {
                    agent: boolean;
                    plugin: boolean;
                    tools: boolean;
                  };
                  driver: components['schemas']['def-1'];
                  driverPolicySchema: {
                    [key: string]: unknown;
                  };
                  toolDefaults: {
                    approval: (
                      | 'provider_default'
                      | 'all_actions'
                      | 'write_actions'
                      | 'none'
                    )[];
                    enabled: boolean;
                    reviewer: ('human' | 'auto')[];
                  };
                  tools: {
                    approval: (
                      | 'provider_default'
                      | 'all_actions'
                      | 'write_actions'
                      | 'none'
                    )[];
                    enabled: boolean;
                    reviewer: ('human' | 'auto')[];
                  };
                };
              };
              /** Format: date-time */
              createdAt: string;
              id: string;
              name: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  bootstrapInstallation: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          name: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              capabilities?: {
                agentProvisioning?: {
                  executionModes: ('embedded' | 'dedicated')[];
                };
                credentialSources?: {
                  types: {
                    config: {
                      description?: string;
                      issuerRotated?: boolean;
                      name: string;
                      required: boolean;
                    }[];
                    deviceAuthorization?: {
                      harnessId: string;
                    };
                    harnessAuth?: {
                      loginMode: 'api_key' | 'codex_pat' | 'chatgptAuthTokens';
                      modelProvider: string;
                    };
                    rotation: 'none' | 'external' | 'refresh';
                    secrets: {
                      description?: string;
                      issuerRotated?: boolean;
                      name: string;
                      required: boolean;
                    }[];
                    /** @description Source type from the selected Credential Gateway catalog, for example `openai`. */
                    type: string;
                  }[];
                };
                /** @description Present only when dedicated native OpenClaw can be admitted, and says where its native worker support comes from. */
                nativeWorkers?: {
                  support: 'pinned-runtime' | 'custom-image';
                };
                openclaw?: {
                  /** @description The OpenClaw execution modes this Installation's Sandbox Driver and runtime let an Agent deploy. Agent save refuses Embedded with a selected Sandbox Driver, and Dedicated when the Sandbox Driver's settings refuse it (settingRefusals); it saves Dedicated without a Sandbox Driver that can provision it, which deploy refuses. Empty when no mode can deploy: a selected Sandbox Driver refuses Embedded execution, Dedicated needs one that can provision dedicated OpenClaw with settings that allow it, and a selected Sandbox Driver that is unavailable admits neither. */
                  executionModes: ('embedded' | 'dedicated')[];
                  /**
                   * @description Present while the selected Sandbox Driver is unavailable. executionModes is then empty until it returns, and Agent save and deploy answer 503 DEPENDENCY_UNAVAILABLE.
                   * @constant
                   */
                  sandboxDriverUnavailable?: true;
                  /** @description Present when the selected Sandbox Driver can provision a mode missing from executionModes but its settings refuse it. Each value is the message Agent save and deploy return for that mode, naming the setting an operator changes. Absent for other reasons a mode is missing. */
                  settingRefusals?: {
                    dedicated?: string;
                  };
                };
                pluginDiscovery?: {
                  credential: 'required' | 'none';
                };
                pluginPolicies?: {
                  approvers?: {
                    agent: boolean;
                    plugin: boolean;
                    tools: boolean;
                  };
                  driver: components['schemas']['def-1'];
                  driverPolicySchema: {
                    [key: string]: unknown;
                  };
                  toolDefaults: {
                    approval: (
                      | 'provider_default'
                      | 'all_actions'
                      | 'write_actions'
                      | 'none'
                    )[];
                    enabled: boolean;
                    reviewer: ('human' | 'auto')[];
                  };
                  tools: {
                    approval: (
                      | 'provider_default'
                      | 'all_actions'
                      | 'write_actions'
                      | 'none'
                    )[];
                    enabled: boolean;
                    reviewer: ('human' | 'auto')[];
                  };
                };
              };
              /** Format: date-time */
              createdAt: string;
              id: string;
              name: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getInstallationDeploymentInventory: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              installationId: string;
              namespaces: {
                agents: {
                  activeRevisionId?: string;
                  deploymentInProgress: boolean;
                  desiredRuntimeState: 'running' | 'stopped';
                  executionMode: 'embedded' | 'dedicated';
                  id: string;
                  status: 'active' | 'deleting';
                }[];
                id: string;
                status: 'provisioning' | 'ready' | 'failed' | 'deleting';
              }[];
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  discoverInstallationConfigurations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              configurations: {
                actions: {
                  apply?: {
                    available: boolean;
                    href: string;
                    method: 'GET' | 'POST' | 'PUT';
                  };
                  read?: {
                    available: boolean;
                    href: string;
                    method: 'GET' | 'POST' | 'PUT';
                  };
                  save?: {
                    available: boolean;
                    href: string;
                    method: 'GET' | 'POST' | 'PUT';
                  };
                  validate?: {
                    available: boolean;
                    href: string;
                    method: 'GET' | 'POST' | 'PUT';
                  };
                };
                binding: 'installation-startup' | 'sandbox-policy';
                capability: string;
                configurationSchema: {
                  [key: string]: unknown;
                };
                driverId: string;
                implementation: string;
                key: string;
                scope: 'installation' | 'agent';
              }[];
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listNamespaces: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              createdAt: string;
              existingNamespace?: string;
              id: string;
              name: string;
              status: 'provisioning' | 'ready' | 'failed' | 'deleting';
            }[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  createNamespace: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          existingNamespace?: string;
          name: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              createdAt: string;
              existingNamespace?: string;
              id: string;
              name: string;
              status: 'provisioning' | 'ready' | 'failed' | 'deleting';
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getNamespace: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              createdAt: string;
              existingNamespace?: string;
              id: string;
              name: string;
              status: 'provisioning' | 'ready' | 'failed' | 'deleting';
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  deleteNamespace: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              createdAt: string;
              existingNamespace?: string;
              id: string;
              name: string;
              status: 'provisioning' | 'ready' | 'failed' | 'deleting';
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listAgents: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @description An Agent with readable saved settings, or Agent metadata with configurationReadError (code SAVED_CONFIGURATION_UNREADABLE and the unreadable field). The error variant omits plugins, pluginApprovers, repositoryBindings, repositoryAccess, harnessAuth, and credentialSources. */
            data: (
              | {
                  activeRevisionId?: string;
                  backendId: string | null;
                  configurationId: string;
                  /** Format: date-time */
                  createdAt: string;
                  /** @description Every credential source the Agent uses, at each source's endpoints. A credential-source harnessAuth names one entry. The selected Credential Gateway injects them at deployment; the Agent never receives their values. */
                  credentialSources?: {
                    sourceId: string;
                  }[];
                  desiredRuntimeState: 'running' | 'stopped';
                  executionMode: 'embedded' | 'dedicated';
                  /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
                  gatewayManagedMode: boolean;
                  harnessAuth:
                    | (
                        | {
                            /** @constant */
                            method: 'runtime';
                          }
                        | {
                            /** @constant */
                            method: 'api_key';
                            /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                            source: {
                              id: string;
                              /** @constant */
                              kind: 'secret';
                              namespaceId: string;
                            };
                          }
                        | {
                            /** @constant */
                            method: 'codex_pat';
                            source:
                              | {
                                  id: string;
                                  /** @constant */
                                  kind: 'secret';
                                  namespaceId: string;
                                }
                              | {
                                  id: string;
                                  /** @constant */
                                  kind: 'service_account';
                                  namespaceId: string;
                                };
                          }
                        | {
                            /** @constant */
                            method: 'credential_source';
                            sourceId: string;
                          }
                      )
                    | null;
                  id: string;
                  name: string;
                  namespaceId: string;
                  pluginApprovers?: components['schemas']['def-2'];
                  plugins?: components['schemas']['def-6'];
                  /** @description Desired repository access. Each omitted repository profile inherits defaultProfile; explicit profiles remain overrides. Mutually exclusive with repositoryBindings in create, provision, and update requests. */
                  repositoryAccess?: {
                    defaultProfile: string;
                    repositories: {
                      profile?: string;
                      repositoryRef: string;
                    }[];
                  };
                  repositoryBindings?: {
                    profile: string;
                    repositoryRef: string;
                  }[];
                  sandboxPolicyEditing?: boolean;
                  servicePrincipalId: string;
                  status: 'active' | 'deleting';
                }
              | {
                  activeRevisionId?: string;
                  backendId: string | null;
                  configurationId: string;
                  configurationReadError: {
                    /** @constant */
                    code: 'SAVED_CONFIGURATION_UNREADABLE';
                    field:
                      | 'plugins'
                      | 'pluginApprovers'
                      | 'repositoryBindings'
                      | 'repositoryAccess'
                      | 'harnessAuth'
                      | 'credentialSources'
                      | 'secretBindings'
                      | 'repositoryCredentials'
                      | 'configuration';
                  };
                  /** Format: date-time */
                  createdAt: string;
                  desiredRuntimeState: 'running' | 'stopped';
                  executionMode: 'embedded' | 'dedicated';
                  /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
                  gatewayManagedMode: boolean;
                  id: string;
                  name: string;
                  namespaceId: string;
                  sandboxPolicyEditing?: boolean;
                  servicePrincipalId: string;
                  status: 'active' | 'deleting';
                }
            )[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  createAgent: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          backendId?: string | null;
          configurationId: string;
          /** @description Every credential source the Agent uses, at each source's endpoints. A credential-source harnessAuth names one entry. The selected Credential Gateway injects them at deployment; the Agent never receives their values. */
          credentialSources?: {
            sourceId: string;
          }[];
          executionMode?: 'embedded' | 'dedicated';
          /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
          gatewayManagedMode?: boolean;
          harnessAuth?:
            | (
                | {
                    /** @constant */
                    method: 'runtime';
                  }
                | {
                    /** @constant */
                    method: 'api_key';
                    /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                    source: {
                      id: string;
                      /** @constant */
                      kind: 'secret';
                      namespaceId: string;
                    };
                  }
                | {
                    /** @constant */
                    method: 'codex_pat';
                    source:
                      | {
                          id: string;
                          /** @constant */
                          kind: 'secret';
                          namespaceId: string;
                        }
                      | {
                          id: string;
                          /** @constant */
                          kind: 'service_account';
                          namespaceId: string;
                        };
                  }
                | {
                    /** @constant */
                    method: 'credential_source';
                    sourceId: string;
                  }
              )
            | null;
          initialWorkspaceFiles?: {
            'AGENTS.md'?: string;
            'IDENTITY.md'?: string;
            'SOUL.md'?: string;
            'USER.md'?: string;
          };
          name: string;
          pluginApprovers?: components['schemas']['def-2'];
          plugins?: components['schemas']['def-6'];
          /** @description Desired repository access. Each omitted repository profile inherits defaultProfile; explicit profiles remain overrides. Mutually exclusive with repositoryBindings in create, provision, and update requests. */
          repositoryAccess?: {
            defaultProfile: string;
            repositories: {
              profile?: string;
              repositoryRef: string;
            }[];
          };
          /** @description Requested repository references and optional profiles. Omission means no bindings on create and preserves bindings on update; an empty update clears bindings. Admission requires unique repository references. */
          repositoryBindings?: {
            profile?: string;
            repositoryRef: string;
          }[];
          workspaceDefaultsId?: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              activeRevisionId?: string;
              backendId: string | null;
              configurationId: string;
              /** Format: date-time */
              createdAt: string;
              /** @description Every credential source the Agent uses, at each source's endpoints. A credential-source harnessAuth names one entry. The selected Credential Gateway injects them at deployment; the Agent never receives their values. */
              credentialSources?: {
                sourceId: string;
              }[];
              desiredRuntimeState: 'running' | 'stopped';
              executionMode: 'embedded' | 'dedicated';
              /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
              gatewayManagedMode: boolean;
              harnessAuth:
                | (
                    | {
                        /** @constant */
                        method: 'runtime';
                      }
                    | {
                        /** @constant */
                        method: 'api_key';
                        /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                        source: {
                          id: string;
                          /** @constant */
                          kind: 'secret';
                          namespaceId: string;
                        };
                      }
                    | {
                        /** @constant */
                        method: 'codex_pat';
                        source:
                          | {
                              id: string;
                              /** @constant */
                              kind: 'secret';
                              namespaceId: string;
                            }
                          | {
                              id: string;
                              /** @constant */
                              kind: 'service_account';
                              namespaceId: string;
                            };
                      }
                    | {
                        /** @constant */
                        method: 'credential_source';
                        sourceId: string;
                      }
                  )
                | null;
              id: string;
              name: string;
              namespaceId: string;
              pluginApprovers?: components['schemas']['def-2'];
              plugins?: components['schemas']['def-6'];
              /** @description Desired repository access. Each omitted repository profile inherits defaultProfile; explicit profiles remain overrides. Mutually exclusive with repositoryBindings in create, provision, and update requests. */
              repositoryAccess?: {
                defaultProfile: string;
                repositories: {
                  profile?: string;
                  repositoryRef: string;
                }[];
              };
              repositoryBindings?: {
                profile: string;
                repositoryRef: string;
              }[];
              sandboxPolicyEditing?: boolean;
              servicePrincipalId: string;
              status: 'active' | 'deleting';
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  startAgentDeviceAuthorization: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          harnessId: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              expiresAt: string;
              intervalSeconds: number;
              /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
              session: {
                id: string;
                /** @constant */
                kind: 'secret';
                namespaceId: string;
              };
              /** @description Exact OCC credential source reference. Shape: `{ "kind": "credential_source", "namespaceId": "ns_...", "id": "cs_..." }`. */
              source?: {
                id: string;
                /** @constant */
                kind: 'credential_source';
                namespaceId: string;
              };
              status: 'pending' | 'ready';
              userCode: string;
              /** Format: uri */
              verificationUrl: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  cancelAgentDeviceAuthorization: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        secretId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  pollAgentDeviceAuthorization: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        secretId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': Record<string, never>;
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              expiresAt: string;
              intervalSeconds: number;
              /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
              session: {
                id: string;
                /** @constant */
                kind: 'secret';
                namespaceId: string;
              };
              /** @description Exact OCC credential source reference. Shape: `{ "kind": "credential_source", "namespaceId": "ns_...", "id": "cs_..." }`. */
              source?: {
                id: string;
                /** @constant */
                kind: 'credential_source';
                namespaceId: string;
              };
              status: 'pending' | 'ready';
              userCode: string;
              /** Format: uri */
              verificationUrl: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  discoverAgentModels: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          apiKey: string;
          authMethod: 'api_key' | 'codex_pat';
          provider: 'openai' | 'anthropic';
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              id: string;
              name: string;
            }[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  discoverAgentPlugins: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json':
          | {
              /** @description Exact OCC credential source reference. Shape: `{ "kind": "credential_source", "namespaceId": "ns_...", "id": "cs_..." }`. */
              credentialSource: {
                id: string;
                /** @constant */
                kind: 'credential_source';
                namespaceId: string;
              };
              cursor?: string;
              q?: string;
            }
          | {
              cursor?: string;
              q?: string;
            }
          | {
              accessToken: string;
              cursor?: string;
              q?: string;
            }
          | {
              cursor?: string;
              q?: string;
              /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
              secretRef: {
                id: string;
                /** @constant */
                kind: 'secret';
                namespaceId: string;
              };
            };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              nextCursor: string | null;
              plugins: {
                available?: boolean;
                description?: string;
                id: string;
                logoUrl?: string;
                name: string;
                privacyPolicyUrl?: string;
                remoteId?: string;
                selectableWithoutTools?: boolean;
                termsOfServiceUrl?: string;
                tools:
                  | null
                  | {
                      available?: boolean;
                      description?: string;
                      destructive?: boolean;
                      id: string;
                      name: string;
                      ownerId: string;
                      unavailableReason?: string;
                      writes?: boolean;
                    }[];
                unavailableHelp?: {
                  label: string;
                  url: string;
                };
                unavailableReason?: string;
                websiteUrl?: string;
              }[];
              setup?: {
                links: {
                  label: string;
                  url: string;
                }[];
                message: string;
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  discoverAgentPluginDetails: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json':
          | {
              /** @description Exact OCC credential source reference. Shape: `{ "kind": "credential_source", "namespaceId": "ns_...", "id": "cs_..." }`. */
              credentialSource: {
                id: string;
                /** @constant */
                kind: 'credential_source';
                namespaceId: string;
              };
              pluginId: string;
            }
          | {
              pluginId: string;
            }
          | {
              accessToken: string;
              pluginId: string;
            }
          | {
              pluginId: string;
              /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
              secretRef: {
                id: string;
                /** @constant */
                kind: 'secret';
                namespaceId: string;
              };
            };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              available?: boolean;
              description?: string;
              id: string;
              logoUrl?: string;
              name: string;
              privacyPolicyUrl?: string;
              remoteId?: string;
              selectableWithoutTools?: boolean;
              termsOfServiceUrl?: string;
              tools:
                | null
                | {
                    available?: boolean;
                    description?: string;
                    destructive?: boolean;
                    id: string;
                    name: string;
                    ownerId: string;
                    unavailableReason?: string;
                    writes?: boolean;
                  }[];
              unavailableHelp?: {
                label: string;
                url: string;
              };
              unavailableReason?: string;
              websiteUrl?: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  provisionAgent: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          backendId?: string | null;
          configuration: {
            /** @constant */
            kind: 'agent';
            /** @description Optional Secret binding map. Keys are destination environment variable names; at most 64 bindings are accepted. Each value must contain `source.kind`, `source.namespaceId`, and `source.id`, and may contain `delivery.type: "env"`. Admission rejects reserved or process-control destinations such as `OPENCLAW_*`, `CODEX_*`, `OPENAI_*`, `ANTHROPIC_*`, `OCC_*`, `KUBERNETES_*`, `PATH`, `HOME`, and proxy variables. Model authentication belongs to Agent.harnessAuth. */
            secretBindings?: {
              [key: string]: {
                /** @description Gateway delivery mode. Only `{ "type": "env" }` is supported. */
                delivery?: {
                  /** @constant */
                  type: 'env';
                };
                /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                source: {
                  id: string;
                  /** @constant */
                  kind: 'secret';
                  namespaceId: string;
                };
              };
            };
            /** @description A native OpenClaw configuration document. */
            values: {
              [key: string]: components['schemas']['def-0'];
            };
          };
          executionMode?: 'embedded' | 'dedicated';
          /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
          gatewayManagedMode?: boolean;
          /** @description Dedicated Harness authentication, required. Omitted, null and `runtime` are refused with 400 INVALID_REQUEST. A ready model `credential_source` is supported when the selected Credential Gateway owns it and the caller has source `operate` permission. */
          harnessAuth?:
            | (
                | {
                    /** @constant */
                    method: 'runtime';
                  }
                | {
                    /** @constant */
                    method: 'api_key';
                    /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                    source: {
                      id: string;
                      /** @constant */
                      kind: 'secret';
                      namespaceId: string;
                    };
                  }
                | {
                    /** @constant */
                    method: 'codex_pat';
                    source:
                      | {
                          id: string;
                          /** @constant */
                          kind: 'secret';
                          namespaceId: string;
                        }
                      | {
                          id: string;
                          /** @constant */
                          kind: 'service_account';
                          namespaceId: string;
                        };
                  }
                | {
                    /** @constant */
                    method: 'credential_source';
                    sourceId: string;
                  }
              )
            | null;
          initialWorkspaceFiles?: {
            'AGENTS.md'?: string;
            'IDENTITY.md'?: string;
            'SOUL.md'?: string;
            'USER.md'?: string;
          };
          name: string;
          pluginApprovers?: components['schemas']['def-2'];
          plugins?: components['schemas']['def-6'];
          /** @description Desired repository access. Each omitted repository profile inherits defaultProfile; explicit profiles remain overrides. Mutually exclusive with repositoryBindings in create, provision, and update requests. */
          repositoryAccess?: {
            defaultProfile: string;
            repositories: {
              profile?: string;
              repositoryRef: string;
            }[];
          };
          /** @description Requested repository references and optional profiles. Omission means no bindings on create and preserves bindings on update; an empty update clears bindings. Admission requires unique repository references. */
          repositoryBindings?: {
            profile?: string;
            repositoryRef: string;
          }[];
          requestId: string;
          workspaceDefaultsId?: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              provisioning: {
                agentId?: string;
                attemptCount: number;
                configurationId?: string;
                error?: {
                  code: string;
                  message: string;
                };
                phase: 'admitted' | 'configuration' | 'transport' | 'handoff';
                /** @description Present while a job past handoff is queued or running. The job defers without spending attempts while it waits, so `attemptCount` can stay 0. */
                progress?: {
                  /** @description With `agent_revision:read`, this can report the deployment's named wait. Otherwise it reports the job's own `PROVISIONING_DEPLOYMENT_PENDING`, or null if the job has not recorded that wait. The controller writes the message; a refusal can include a code restricted to uppercase letters, digits, and underscores. */
                  lastAttempt: null | {
                    /** Format: date-time */
                    at: string;
                    code: string;
                    message: string;
                  };
                  /**
                   * @description Handoff is done; the job waits for its initial deployment.
                   * @constant
                   */
                  phase: 'deployment';
                };
                /** @description The client request ID stored when this job was admitted. Older controllers omit it. The separate meta.requestId identifies the current HTTP request. */
                requestId?: string;
                revisionId?: string;
                status: 'queued' | 'running' | 'succeeded' | 'failed';
                /** Format: date-time */
                updatedAt: string;
                url: string;
                workId: string;
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentProvisioning: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        workId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              agentId?: string;
              attemptCount: number;
              configurationId?: string;
              error?: {
                code: string;
                message: string;
              };
              phase: 'admitted' | 'configuration' | 'transport' | 'handoff';
              /** @description Present while a job past handoff is queued or running. The job defers without spending attempts while it waits, so `attemptCount` can stay 0. */
              progress?: {
                /** @description With `agent_revision:read`, this can report the deployment's named wait. Otherwise it reports the job's own `PROVISIONING_DEPLOYMENT_PENDING`, or null if the job has not recorded that wait. The controller writes the message; a refusal can include a code restricted to uppercase letters, digits, and underscores. */
                lastAttempt: null | {
                  /** Format: date-time */
                  at: string;
                  code: string;
                  message: string;
                };
                /**
                 * @description Handoff is done; the job waits for its initial deployment.
                 * @constant
                 */
                phase: 'deployment';
              };
              /** @description The client request ID stored when this job was admitted. Older controllers omit it. The separate meta.requestId identifies the current HTTP request. */
              requestId?: string;
              revisionId?: string;
              status: 'queued' | 'running' | 'succeeded' | 'failed';
              /** Format: date-time */
              updatedAt: string;
              url: string;
              workId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  retryAgentProvisioning: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        workId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              agentId?: string;
              attemptCount: number;
              configurationId?: string;
              error?: {
                code: string;
                message: string;
              };
              phase: 'admitted' | 'configuration' | 'transport' | 'handoff';
              /** @description Present while a job past handoff is queued or running. The job defers without spending attempts while it waits, so `attemptCount` can stay 0. */
              progress?: {
                /** @description With `agent_revision:read`, this can report the deployment's named wait. Otherwise it reports the job's own `PROVISIONING_DEPLOYMENT_PENDING`, or null if the job has not recorded that wait. The controller writes the message; a refusal can include a code restricted to uppercase letters, digits, and underscores. */
                lastAttempt: null | {
                  /** Format: date-time */
                  at: string;
                  code: string;
                  message: string;
                };
                /**
                 * @description Handoff is done; the job waits for its initial deployment.
                 * @constant
                 */
                phase: 'deployment';
              };
              /** @description The client request ID stored when this job was admitted. Older controllers omit it. The separate meta.requestId identifies the current HTTP request. */
              requestId?: string;
              revisionId?: string;
              status: 'queued' | 'running' | 'succeeded' | 'failed';
              /** Format: date-time */
              updatedAt: string;
              url: string;
              workId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listRepositoryOptions: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              allowedProfiles: string[];
              description?: string;
              displayName: string;
              repositoryRef: string;
            }[];
            meta: {
              /**
               * @description Present when the Installation has no repository settings, so no repository credential Driver is selected. `data` is then empty, and Agent save refuses repository bindings with 409 RESOURCE_CONFLICT.
               * @constant
               */
              notConfigured?: true;
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Check `error.code`: `REPOSITORY_OPTIONS_UNAVAILABLE` means optional repository discovery is unavailable after Namespace lifecycle and Agent create authorization checks, because the selected Compute or Sandbox Driver cannot support repository credentials or the selected repository Driver is unavailable. Without repository settings the answer is 200 with `meta.notConfigured` instead. Creation without repository bindings remains available subject to fresh authorization. `DEPENDENCY_UNAVAILABLE` includes IAM and other required dependency failures and does not permit proceeding. Successful discovery returns a data array, including an empty array when no repositories are approved. */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  validateAgentCreate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          /** @description The Agent Configuration the caller will save, not yet saved. With `secretBindings`, a channel credential reference without a binding is refused where Configuration create refuses it (the bundled Kubernetes Compute); the bound Secrets are not read. Without them, that check is skipped. */
          configuration: {
            /** @constant */
            kind: 'agent';
            /** @description Optional Secret binding map. Keys are destination environment variable names; at most 64 bindings are accepted. Each value must contain `source.kind`, `source.namespaceId`, and `source.id`, and may contain `delivery.type: "env"`. Admission rejects reserved or process-control destinations such as `OPENCLAW_*`, `CODEX_*`, `OPENAI_*`, `ANTHROPIC_*`, `OCC_*`, `KUBERNETES_*`, `PATH`, `HOME`, and proxy variables. Model authentication belongs to Agent.harnessAuth. */
            secretBindings?: {
              [key: string]: {
                /** @description Gateway delivery mode. Only `{ "type": "env" }` is supported. */
                delivery?: {
                  /** @constant */
                  type: 'env';
                };
                /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                source: {
                  id: string;
                  /** @constant */
                  kind: 'secret';
                  namespaceId: string;
                };
              };
            };
            /** @description A native OpenClaw configuration document. */
            values: {
              [key: string]: components['schemas']['def-0'];
            };
          };
          executionMode?: 'embedded' | 'dedicated';
          /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
          gatewayManagedMode?: boolean;
          /** @description The Harness authentication Agent create will name, so Agent save's check of it against the execution mode and Compute settings runs here too. For a Secret the caller saves next, send only its `method`. The Secret and credential source are not read; omitted or null skips this check. */
          harnessAuth?:
            | (
                | {
                    /** @constant */
                    method: 'runtime';
                  }
                | {
                    /** @constant */
                    method: 'api_key';
                    /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                    source: {
                      id: string;
                      /** @constant */
                      kind: 'secret';
                      namespaceId: string;
                    };
                  }
                | {
                    /** @constant */
                    method: 'codex_pat';
                    source:
                      | {
                          id: string;
                          /** @constant */
                          kind: 'secret';
                          namespaceId: string;
                        }
                      | {
                          id: string;
                          /** @constant */
                          kind: 'service_account';
                          namespaceId: string;
                        };
                  }
                | {
                    /** @constant */
                    method: 'credential_source';
                    sourceId: string;
                  }
              )
            | {
                method: 'api_key' | 'codex_pat';
              }
            | null;
          initialWorkspaceFiles?: {
            'AGENTS.md'?: string;
            'IDENTITY.md'?: string;
            'SOUL.md'?: string;
            'USER.md'?: string;
          };
          /** @description The Agent name create will use. A name that another Agent in the Namespace has is refused with create's `409`. */
          name?: string;
          pluginApprovers?: components['schemas']['def-2'];
          plugins?: components['schemas']['def-6'];
        };
      };
    };
    responses: {
      /** @description Default Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgent: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @description An Agent with readable saved settings, or Agent metadata with configurationReadError (code SAVED_CONFIGURATION_UNREADABLE and the unreadable field). The error variant omits plugins, pluginApprovers, repositoryBindings, repositoryAccess, harnessAuth, and credentialSources. */
            data:
              | {
                  activeRevisionId?: string;
                  backendId: string | null;
                  configurationId: string;
                  /** Format: date-time */
                  createdAt: string;
                  /** @description Every credential source the Agent uses, at each source's endpoints. A credential-source harnessAuth names one entry. The selected Credential Gateway injects them at deployment; the Agent never receives their values. */
                  credentialSources?: {
                    sourceId: string;
                  }[];
                  desiredRuntimeState: 'running' | 'stopped';
                  executionMode: 'embedded' | 'dedicated';
                  /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
                  gatewayManagedMode: boolean;
                  harnessAuth:
                    | (
                        | {
                            /** @constant */
                            method: 'runtime';
                          }
                        | {
                            /** @constant */
                            method: 'api_key';
                            /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                            source: {
                              id: string;
                              /** @constant */
                              kind: 'secret';
                              namespaceId: string;
                            };
                          }
                        | {
                            /** @constant */
                            method: 'codex_pat';
                            source:
                              | {
                                  id: string;
                                  /** @constant */
                                  kind: 'secret';
                                  namespaceId: string;
                                }
                              | {
                                  id: string;
                                  /** @constant */
                                  kind: 'service_account';
                                  namespaceId: string;
                                };
                          }
                        | {
                            /** @constant */
                            method: 'credential_source';
                            sourceId: string;
                          }
                      )
                    | null;
                  id: string;
                  name: string;
                  namespaceId: string;
                  pluginApprovers?: components['schemas']['def-2'];
                  plugins?: components['schemas']['def-6'];
                  /** @description Desired repository access. Each omitted repository profile inherits defaultProfile; explicit profiles remain overrides. Mutually exclusive with repositoryBindings in create, provision, and update requests. */
                  repositoryAccess?: {
                    defaultProfile: string;
                    repositories: {
                      profile?: string;
                      repositoryRef: string;
                    }[];
                  };
                  repositoryBindings?: {
                    profile: string;
                    repositoryRef: string;
                  }[];
                  sandboxPolicyEditing?: boolean;
                  servicePrincipalId: string;
                  status: 'active' | 'deleting';
                }
              | {
                  activeRevisionId?: string;
                  backendId: string | null;
                  configurationId: string;
                  configurationReadError: {
                    /** @constant */
                    code: 'SAVED_CONFIGURATION_UNREADABLE';
                    field:
                      | 'plugins'
                      | 'pluginApprovers'
                      | 'repositoryBindings'
                      | 'repositoryAccess'
                      | 'harnessAuth'
                      | 'credentialSources'
                      | 'secretBindings'
                      | 'repositoryCredentials'
                      | 'configuration';
                  };
                  /** Format: date-time */
                  createdAt: string;
                  desiredRuntimeState: 'running' | 'stopped';
                  executionMode: 'embedded' | 'dedicated';
                  /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
                  gatewayManagedMode: boolean;
                  id: string;
                  name: string;
                  namespaceId: string;
                  sandboxPolicyEditing?: boolean;
                  servicePrincipalId: string;
                  status: 'active' | 'deleting';
                };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  deleteAgent: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              activeRevisionId?: string;
              backendId: string | null;
              configurationId: string;
              /** Format: date-time */
              createdAt: string;
              /** @description Every credential source the Agent uses, at each source's endpoints. A credential-source harnessAuth names one entry. The selected Credential Gateway injects them at deployment; the Agent never receives their values. */
              credentialSources?: {
                sourceId: string;
              }[];
              desiredRuntimeState: 'running' | 'stopped';
              executionMode: 'embedded' | 'dedicated';
              /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
              gatewayManagedMode: boolean;
              harnessAuth:
                | (
                    | {
                        /** @constant */
                        method: 'runtime';
                      }
                    | {
                        /** @constant */
                        method: 'api_key';
                        /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                        source: {
                          id: string;
                          /** @constant */
                          kind: 'secret';
                          namespaceId: string;
                        };
                      }
                    | {
                        /** @constant */
                        method: 'codex_pat';
                        source:
                          | {
                              id: string;
                              /** @constant */
                              kind: 'secret';
                              namespaceId: string;
                            }
                          | {
                              id: string;
                              /** @constant */
                              kind: 'service_account';
                              namespaceId: string;
                            };
                      }
                    | {
                        /** @constant */
                        method: 'credential_source';
                        sourceId: string;
                      }
                  )
                | null;
              id: string;
              name: string;
              namespaceId: string;
              pluginApprovers?: components['schemas']['def-2'];
              plugins?: components['schemas']['def-6'];
              /** @description Desired repository access. Each omitted repository profile inherits defaultProfile; explicit profiles remain overrides. Mutually exclusive with repositoryBindings in create, provision, and update requests. */
              repositoryAccess?: {
                defaultProfile: string;
                repositories: {
                  profile?: string;
                  repositoryRef: string;
                }[];
              };
              repositoryBindings?: {
                profile: string;
                repositoryRef: string;
              }[];
              sandboxPolicyEditing?: boolean;
              servicePrincipalId: string;
              status: 'active' | 'deleting';
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  updateAgent: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json':
          | {
              backendId?: string | null;
              configurationId?: string;
              /** @description Every credential source the Agent uses, at each source's endpoints. A credential-source harnessAuth names one entry. The selected Credential Gateway injects them at deployment; the Agent never receives their values. */
              credentialSources?: {
                sourceId: string;
              }[];
              executionMode?: 'embedded' | 'dedicated';
              /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
              gatewayManagedMode?: boolean;
              harnessAuth?:
                | (
                    | {
                        /** @constant */
                        method: 'runtime';
                      }
                    | {
                        /** @constant */
                        method: 'api_key';
                        /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                        source: {
                          id: string;
                          /** @constant */
                          kind: 'secret';
                          namespaceId: string;
                        };
                      }
                    | {
                        /** @constant */
                        method: 'codex_pat';
                        source:
                          | {
                              id: string;
                              /** @constant */
                              kind: 'secret';
                              namespaceId: string;
                            }
                          | {
                              id: string;
                              /** @constant */
                              kind: 'service_account';
                              namespaceId: string;
                            };
                      }
                    | {
                        /** @constant */
                        method: 'credential_source';
                        sourceId: string;
                      }
                  )
                | null;
              pluginApprovers?: components['schemas']['def-2'] | null;
              plugins?: components['schemas']['def-6'];
              /** @description Desired repository access. Each omitted repository profile inherits defaultProfile; explicit profiles remain overrides. Mutually exclusive with repositoryBindings in create, provision, and update requests. */
              repositoryAccess?: {
                defaultProfile: string;
                repositories: {
                  profile?: string;
                  repositoryRef: string;
                }[];
              };
              /** @description Requested repository references and optional profiles. Omission means no bindings on create and preserves bindings on update; an empty update clears bindings. Admission requires unique repository references. */
              repositoryBindings?: {
                profile?: string;
                repositoryRef: string;
              }[];
              repositoryStandingApproval?:
                | {
                    approvalId: string;
                    /** @constant */
                    approved: true;
                    /** @constant */
                    duration: 'until-removed';
                    expectedScopeFingerprint: string;
                    repositoryRef: string;
                  }
                | {
                    approvalId: string;
                    /** @constant */
                    approved: false;
                    expectedGeneration: number;
                    repositoryRef: string;
                  };
            }
          | unknown
          | unknown;
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              activeRevisionId?: string;
              backendId: string | null;
              configurationId: string;
              /** Format: date-time */
              createdAt: string;
              /** @description Every credential source the Agent uses, at each source's endpoints. A credential-source harnessAuth names one entry. The selected Credential Gateway injects them at deployment; the Agent never receives their values. */
              credentialSources?: {
                sourceId: string;
              }[];
              desiredRuntimeState: 'running' | 'stopped';
              executionMode: 'embedded' | 'dedicated';
              /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
              gatewayManagedMode: boolean;
              harnessAuth:
                | (
                    | {
                        /** @constant */
                        method: 'runtime';
                      }
                    | {
                        /** @constant */
                        method: 'api_key';
                        /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                        source: {
                          id: string;
                          /** @constant */
                          kind: 'secret';
                          namespaceId: string;
                        };
                      }
                    | {
                        /** @constant */
                        method: 'codex_pat';
                        source:
                          | {
                              id: string;
                              /** @constant */
                              kind: 'secret';
                              namespaceId: string;
                            }
                          | {
                              id: string;
                              /** @constant */
                              kind: 'service_account';
                              namespaceId: string;
                            };
                      }
                    | {
                        /** @constant */
                        method: 'credential_source';
                        sourceId: string;
                      }
                  )
                | null;
              id: string;
              name: string;
              namespaceId: string;
              pluginApprovers?: components['schemas']['def-2'];
              plugins?: components['schemas']['def-6'];
              /** @description Desired repository access. Each omitted repository profile inherits defaultProfile; explicit profiles remain overrides. Mutually exclusive with repositoryBindings in create, provision, and update requests. */
              repositoryAccess?: {
                defaultProfile: string;
                repositories: {
                  profile?: string;
                  repositoryRef: string;
                }[];
              };
              repositoryBindings?: {
                profile: string;
                repositoryRef: string;
              }[];
              sandboxPolicyEditing?: boolean;
              servicePrincipalId: string;
              status: 'active' | 'deleting';
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  withdrawAgentCredentialSource: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        credentialSourceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              agentId: string;
              /** Format: date-time */
              completedAt?: string;
              credentialSourceId: string;
              /** Format: date-time */
              lastAttemptAt?: string;
              namespaceId: string;
              /** @description Reason code of the worker's most recent attempt, for example `CREDENTIAL_WITHDRAWAL_PENDING` while the gateway has not confirmed revocation. */
              reason?: string;
              /** Format: date-time */
              requestedAt: string;
              /** @description Principal whose `agent:operate` permission the worker re-checks before revoking. */
              requestedBy: string;
              /** @description Identifies the Agent revision for the reported withdrawal. This is the selected Agent revision unless another Agent revision that can still run has a `pending` withdrawal for this source. A status read first reports a `pending` withdrawal with no queued or running attempt. `revoked` means every Agent revision that can still run with this source has confirmed withdrawal. */
              revisionId: string;
              /** @description `revoked` only after the Credential Gateway confirms that the Agent revision's placeholders no longer resolve. */
              state: 'pending' | 'revoked';
              /** @description `true` while a withdrawal attempt is queued or running. A `pending` withdrawal with `false` has no queued or running attempt. OCC maintenance can queue a new attempt. To request another attempt, send the withdraw request again. */
              withdrawalInProgress: boolean;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentCredentialWithdrawal: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        credentialSourceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              agentId: string;
              /** Format: date-time */
              completedAt?: string;
              credentialSourceId: string;
              /** Format: date-time */
              lastAttemptAt?: string;
              namespaceId: string;
              /** @description Reason code of the worker's most recent attempt, for example `CREDENTIAL_WITHDRAWAL_PENDING` while the gateway has not confirmed revocation. */
              reason?: string;
              /** Format: date-time */
              requestedAt: string;
              /** @description Principal whose `agent:operate` permission the worker re-checks before revoking. */
              requestedBy: string;
              /** @description Identifies the Agent revision for the reported withdrawal. This is the selected Agent revision unless another Agent revision that can still run has a `pending` withdrawal for this source. A status read first reports a `pending` withdrawal with no queued or running attempt. `revoked` means every Agent revision that can still run with this source has confirmed withdrawal. */
              revisionId: string;
              /** @description `revoked` only after the Credential Gateway confirms that the Agent revision's placeholders no longer resolve. */
              state: 'pending' | 'revoked';
              /** @description `true` while a withdrawal attempt is queued or running. A `pending` withdrawal with `false` has no queued or running attempt. OCC maintenance can queue a new attempt. To request another attempt, send the withdraw request again. */
              withdrawalInProgress: boolean;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  deployAgent: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              agentId: string;
              backendId: string | null;
              compute: {
                id: string;
                implementation: string;
              };
              /** @description A native OpenClaw configuration document. */
              configuration: {
                [key: string]: components['schemas']['def-0'];
              };
              configurationGeneration: number;
              configurationId: string;
              /** @constant */
              configurationKind: 'agent';
              /** Format: date-time */
              createdAt: string;
              /** @description Every credential source the Agent uses, at each source's endpoints. A credential-source harnessAuth names one entry. The selected Credential Gateway injects them at deployment; the Agent never receives their values. */
              credentialSources?: {
                sourceId: string;
              }[];
              /** @description Gateway managed mode requested for this Agent version. It does not report Gateway runtime state. */
              gatewayManagedMode: boolean;
              harness: {
                id: string;
                mode: 'embedded' | 'dedicated';
                version: string;
              };
              harnessAuth:
                | {
                    /** @constant */
                    method: 'runtime';
                  }
                | {
                    /** @constant */
                    method: 'api_key';
                    /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                    source: {
                      id: string;
                      /** @constant */
                      kind: 'secret';
                      namespaceId: string;
                    };
                  }
                | {
                    /** @constant */
                    method: 'codex_pat';
                    source:
                      | {
                          id: string;
                          /** @constant */
                          kind: 'secret';
                          namespaceId: string;
                        }
                      | {
                          id: string;
                          /** @constant */
                          kind: 'service_account';
                          namespaceId: string;
                        };
                  }
                | {
                    /** @constant */
                    method: 'credential_source';
                    sourceId: string;
                  };
              id: string;
              namespaceId: string;
              pluginApprovers?: components['schemas']['def-2'];
              plugins?: {
                driver: components['schemas']['def-1'];
                plugins: components['schemas']['def-6'];
              };
              repositoryCredentials?: {
                bindings: {
                  profile: string;
                  repositoryRef: string;
                }[];
                deadlineWallMs: number;
                driver: {
                  id: string;
                  implementation: string;
                };
              };
              revision: number;
              /** @description The Sandbox Driver that provisions this version. Absent when the version runs without a Sandbox, so it has no Sandbox log source and records no policy denials. */
              sandboxDriverId?: string;
              /** @description Optional Secret binding map. Keys are destination environment variable names; at most 64 bindings are accepted. Each value must contain `source.kind`, `source.namespaceId`, and `source.id`, and may contain `delivery.type: "env"`. Admission rejects reserved or process-control destinations such as `OPENCLAW_*`, `CODEX_*`, `OPENAI_*`, `ANTHROPIC_*`, `OCC_*`, `KUBERNETES_*`, `PATH`, `HOME`, and proxy variables. Model authentication belongs to Agent.harnessAuth. */
              secretBindings?: {
                [key: string]: {
                  /** @description Gateway delivery mode. Only `{ "type": "env" }` is supported. */
                  delivery?: {
                    /** @constant */
                    type: 'env';
                  };
                  /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                  source: {
                    id: string;
                    /** @constant */
                    kind: 'secret';
                    namespaceId: string;
                  };
                };
              };
              secretDriverId?: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentDeployment: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        deploymentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              agentId: string;
              /** @description Saved cleanup status for this Agent revision, separate from its deployment result. `null` means no cleanup requirement was recorded. `succeeded` confirms that cleanup is complete. */
              cleanup: null | {
                nextAttemptAt: string | null;
                status: 'queued' | 'running' | 'succeeded' | 'failed';
              };
              deploymentId: string;
              /** @description `null` unless deployment failed. A failure contains `code`, a fixed safe message, and optional data with known fields. `CONVERGENCE_DEADLINE_EXCEEDED` can include `data.timeoutMs` and `data.runtimeFailure` with startup failure details. A component, check, or code unknown to the runtime is shown as `UNRECOGNIZED`. `RUNTIME_MODEL_PROBE_FAILED` can include `data.runtimeFailure` with the cause of the failed startup model check. The response never includes native error text. */
              error: null | {
                code: string;
                data?:
                  | {
                      preparation: {
                        finishedAt: string | null;
                        observedAt: string;
                        pods: {
                          containers: {
                            exitCode: number | null;
                            finishedAt: string | null;
                            kind: 'init' | 'main';
                            name: string;
                            reason:
                              | null
                              | 'Completed'
                              | 'Error'
                              | 'OOMKilled'
                              | 'ContainerCannotRun'
                              | 'StartError'
                              | 'ImagePullBackOff'
                              | 'ErrImagePull'
                              | 'CreateContainerConfigError'
                              | 'CreateContainerError'
                              | 'RunContainerError'
                              | 'ContainerCreating'
                              | 'PodInitializing';
                            startedAt: string | null;
                            state:
                              | 'waiting'
                              | 'running'
                              | 'terminated'
                              | 'unknown';
                          }[];
                          name: string;
                          phase:
                            | 'Pending'
                            | 'Running'
                            | 'Succeeded'
                            | 'Failed'
                            | 'Unknown';
                          scheduling:
                            | 'pending'
                            | 'scheduled'
                            | 'unschedulable'
                            | 'unknown';
                          uid: string;
                        }[];
                        reason: 'retry_limit' | 'deadline' | 'unknown';
                        startedAt: string | null;
                        workload: {
                          kind: string;
                          name: string;
                          namespace: string;
                          uid: string;
                        };
                      };
                    }
                  | {
                      runtimeFailure?: {
                        check: string;
                        /** Format: date-time */
                        checkedAt: string;
                        code: string;
                        component: string;
                      };
                      timeoutMs: number;
                    }
                  | {
                      runtimeFailure: {
                        /** @description Why the startup model check failed, classified by the runtime. */
                        cause?: {
                          /** @description A fixed token for the kind, such as exit-1, signal-SIGKILL, error-ENOBUFS, format, rate_limit, billing, no_model, turn-failed, tool-event, no-reply, json or shape. A Codex token ends -attempt2, such as rate_limit-attempt2, when a retried check failed again. Never native output. */
                          detail?: string;
                          /** @description PROCESS_EXIT: the check process exited nonzero, was killed or could not run. PROBE_STATUS: the check ran and reported the model unusable. INVALID_OUTPUT: its output was not the expected JSON. WRAPPER_ERROR: the runtime wrapper could not prepare or read the check. */
                          kind:
                            | 'PROCESS_EXIT'
                            | 'PROBE_STATUS'
                            | 'INVALID_OUTPUT'
                            | 'WRAPPER_ERROR';
                        };
                        check: string;
                        /** Format: date-time */
                        checkedAt: string;
                        /** @constant */
                        code: 'MODEL_PROBE_FAILED';
                        component: string;
                      };
                    };
                message: string;
              };
              namespaceId: string;
              /** @description Pending deployment progress. Null for terminal outcomes. A last attempt describes a recorded result, not current runtime health. */
              progress: null | {
                /** @description Latest reconciliation result bound to this exact deployment work item. Null means no bound result is available, not proof that work never ran. Codes and messages are allowlisted; provider text is not exposed. */
                lastAttempt: null | {
                  /** Format: date-time */
                  at: string;
                  code: string;
                  message: string;
                };
                /** @description Earliest time queued work is eligible to run, not a promised start time. Null while claimed. */
                nextAttemptAt: string | null;
              };
              status: 'queued' | 'running' | 'succeeded' | 'failed';
              /** @description Warnings recorded from this deployment startup. Plugin install and connector-auth warnings mean the deployment succeeded after the runtime disabled the affected admitted plugin for that startup. */
              warnings: {
                code: 'PLUGIN_INSTALL_FAILED' | 'PLUGIN_AUTH_REQUIRED';
                /** @description The admitted Agent plugin selection key. */
                pluginId: string;
              }[];
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  diagnoseAgentDeployment: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        deploymentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              checks: {
                check: string;
                checkedAt: string | null;
                code?: string;
                component: string;
                state: 'succeeded' | 'failed' | 'unknown';
              }[];
              /** Format: date-time */
              observedAt: string;
              revisionId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentDeploymentRuntime: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        deploymentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** @description The Sandbox Driver reports this provider-owned Harness Sandbox (OpenShell). `lost` means that the Sandbox does not serve this Agent revision. OCC will not restart it. Deploy the Agent again to replace it. `starting` with `HARNESS_RESTARTING` means that the provider is restarting a Harness process that exited. */
              harness?: {
                code?:
                  | 'SANDBOX_MISSING'
                  | 'SANDBOX_DELETING'
                  | 'SANDBOX_STOPPED'
                  | 'SANDBOX_FAILED'
                  | 'HARNESS_EXITED'
                  | 'HARNESS_RESTARTING'
                  | 'UNAVAILABLE';
                /** @description Present only with HARNESS_RESTARTING: the Harness process's last exit code. */
                exitCode?: number;
                /** @description Present only with HARNESS_RESTARTING: the restart number in the current crash loop (1 for a first restart). */
                restarts?: number;
                state: 'running' | 'starting' | 'lost' | 'unknown';
              };
              /** Format: date-time */
              observedAt: string;
              pods: {
                cluster: 'control' | 'execution';
                containers: {
                  lastTermination: {
                    exitCode: number | null;
                    finishedAt: string | null;
                    reason: string | null;
                  } | null;
                  name: string;
                  ready: boolean;
                  reason: string | null;
                  restartCount: number;
                  startedAt: string | null;
                  state: 'waiting' | 'running' | 'terminated' | 'unknown';
                }[];
                createdAt: string | null;
                events: {
                  container: string | null;
                  count: number;
                  lastObservedAt: string | null;
                  message: string;
                  reason: string;
                  type: 'Normal' | 'Warning';
                }[];
                name: string;
                phase: string;
                ready: boolean;
                role: 'gateway' | 'agent';
                uid: string;
              }[];
              revisionId: string;
              sources: {
                available: boolean;
                id: 'gateway' | 'agent' | 'sandbox';
                kind: 'container' | 'sandbox';
                pods: {
                  container: string;
                  name: string;
                  restartCount: number;
                  uid: string;
                }[];
                retention: string;
                /** @constant */
                unavailableCode?: 'NO_POD';
              }[];
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      504: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentDeploymentRuntimeLogs: {
    parameters: {
      query: {
        source: 'gateway' | 'agent' | 'sandbox';
        pod?: string;
        /** @description Actual container in an owned Pod, including init containers. Defaults to the first advertised main container. */
        container?: string;
        previous?: 'true' | 'false';
        /** @description Lines from the end of the stream, 1 to 1000; default 200. */
        tailLines?: string;
        /** @description Only lines newer than this many seconds, 1 to 86400. */
        sinceSeconds?: string;
        /** @description Return only lines at this level or above; lines of unknown level, gaps and withheld counts are always returned. Default: every level. */
        minLevel?: 'error' | 'warn' | 'info' | 'debug';
        /** @description Opaque cursor returned by the previous page of the same view. */
        cursor?: string;
        /** @description `true` returns the last 1000 lines as a text/plain attachment and is audited per download; it cannot be combined with `cursor`. */
        download?: 'true' | 'false';
      };
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        deploymentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description One page of records, or a text/plain attachment when `download=true` */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              cursor: string | null;
              /** Format: date-time */
              observedAt: string;
              records: (
                | {
                    contentClass: 'operational' | 'activity' | 'content';
                    decision?: {
                      binary?: string;
                      decision: 'denied' | 'allowed';
                      enforcement: 'blocked' | 'reported';
                      engine?: string;
                      host?: string;
                      policyGeneration?: string;
                      port?: number;
                      reason?: string;
                      rule?: string;
                    };
                    fields?: {
                      [key: string]: string | number | boolean;
                    };
                    kind: 'wrapper' | 'openclaw' | 'codex' | 'sandbox' | 'text';
                    level: 'error' | 'warn' | 'info' | 'debug' | 'unknown';
                    message: string;
                    stream: {
                      container?: string;
                      pod?: string;
                      podUid?: string;
                      restartCount?: number;
                      sandbox?: string;
                      source: 'gateway' | 'agent' | 'sandbox';
                    };
                    subsystem?: string;
                    time: string | null;
                    /** @constant */
                    truncated?: true;
                    /** @constant */
                    type: 'line';
                  }
                | {
                    reason:
                      | 'stream_replaced'
                      | 'window_exceeded'
                      | 'cursor_expired'
                      | 'truncated'
                      | 'buffer_lost';
                    remedy: string;
                    stream: {
                      container?: string;
                      pod?: string;
                      podUid?: string;
                      restartCount?: number;
                      sandbox?: string;
                      source: 'gateway' | 'agent' | 'sandbox';
                    };
                    time: string | null;
                    /** @constant */
                    type: 'gap';
                  }
                | {
                    count: number;
                    reason:
                      | 'unrecognised_structured'
                      | 'oversized'
                      | 'malformed';
                    stream: {
                      container?: string;
                      pod?: string;
                      podUid?: string;
                      restartCount?: number;
                      sandbox?: string;
                      source: 'gateway' | 'agent' | 'sandbox';
                    };
                    time: string | null;
                    /** @constant */
                    type: 'withheld';
                  }
              )[];
              revisionId: string;
              source: 'gateway' | 'agent' | 'sandbox';
              stream: {
                container?: string;
                pod?: string;
                podUid?: string;
                restartCount?: number;
                sandbox?: string;
                source: 'gateway' | 'agent' | 'sandbox';
              } | null;
              truncated: boolean;
              withheld: number;
            };
            meta: {
              requestId: string;
            };
          };
          'text/plain': string;
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      504: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  startSavedAgentDeviceAuthorization: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          harnessId: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              expiresAt: string;
              intervalSeconds: number;
              /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
              session: {
                id: string;
                /** @constant */
                kind: 'secret';
                namespaceId: string;
              };
              /** @description Exact OCC credential source reference. Shape: `{ "kind": "credential_source", "namespaceId": "ns_...", "id": "cs_..." }`. */
              source?: {
                id: string;
                /** @constant */
                kind: 'credential_source';
                namespaceId: string;
              };
              status: 'pending' | 'ready';
              userCode: string;
              /** Format: uri */
              verificationUrl: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  cancelSavedAgentDeviceAuthorization: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        secretId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  pollSavedAgentDeviceAuthorization: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        secretId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': Record<string, never>;
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              expiresAt: string;
              intervalSeconds: number;
              /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
              session: {
                id: string;
                /** @constant */
                kind: 'secret';
                namespaceId: string;
              };
              /** @description Exact OCC credential source reference. Shape: `{ "kind": "credential_source", "namespaceId": "ns_...", "id": "cs_..." }`. */
              source?: {
                id: string;
                /** @constant */
                kind: 'credential_source';
                namespaceId: string;
              };
              status: 'pending' | 'ready';
              userCode: string;
              /** Format: uri */
              verificationUrl: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  discoverAgentConfigurations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              configurations: {
                actions: {
                  apply?: {
                    available: boolean;
                    href: string;
                    method: 'GET' | 'POST' | 'PUT';
                  };
                  read?: {
                    available: boolean;
                    href: string;
                    method: 'GET' | 'POST' | 'PUT';
                  };
                  save?: {
                    available: boolean;
                    href: string;
                    method: 'GET' | 'POST' | 'PUT';
                  };
                  validate?: {
                    available: boolean;
                    href: string;
                    method: 'GET' | 'POST' | 'PUT';
                  };
                };
                binding: 'installation-startup' | 'sandbox-policy';
                capability: string;
                configurationSchema: {
                  [key: string]: unknown;
                };
                driverId: string;
                implementation: string;
                key: string;
                scope: 'installation' | 'agent';
              }[];
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentHarnessStatus: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** @description The Sandbox Driver reports this provider-owned Harness Sandbox (OpenShell). `lost` means that the Sandbox does not serve this Agent revision. OCC will not restart it. Deploy the Agent again to replace it. `starting` with `HARNESS_RESTARTING` means that the provider is restarting a Harness process that exited. */
              harness?: {
                code?:
                  | 'SANDBOX_MISSING'
                  | 'SANDBOX_DELETING'
                  | 'SANDBOX_STOPPED'
                  | 'SANDBOX_FAILED'
                  | 'HARNESS_EXITED'
                  | 'HARNESS_RESTARTING'
                  | 'UNAVAILABLE';
                /** @description Present only with HARNESS_RESTARTING: the Harness process's last exit code. */
                exitCode?: number;
                /** @description Present only with HARNESS_RESTARTING: the restart number in the current crash loop (1 for a first restart). */
                restarts?: number;
                state: 'running' | 'starting' | 'lost' | 'unknown';
              };
              revisionId?: string;
              /** @description `observed` when OCC read the Sandbox record of the running Agent's active revision. `unobserved` when there is nothing to read: the Agent is stopped, deleting or has no active revision, its Harness is not dedicated, or the selected Sandbox Driver keeps no lifecycle record. */
              status: 'observed' | 'unobserved';
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentNativeAdmin: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              activeRevisionId?: string;
              host?: string;
              /** Format: uri */
              origin?: string;
              /** @enum {string} */
              status:
                | 'available'
                | 'disabled'
                | 'stopped'
                | 'unavailable'
                | 'unsupported';
              /** Format: uri */
              url?: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentCallerPermissions: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** @description Whether the selected IAM Driver allows Agent administer now, which native admin UI access needs. Advisory only: other required permissions (native admin UI also needs a signed-in console session), lifecycle state, or a later authorization decision can still prevent the operation. */
              administer: boolean;
              /** @description Whether the selected IAM Driver allows, now, the source grants that each Agent update checks: Secret operate on every Secret that the Agent's Configuration binds and on a Secret Harness authentication source, credential source operate on every credential source the Agent lists or uses for Harness authentication, and ServiceAccount read on a ServiceAccount Harness authentication source. `true` when the Agent and its Configuration bind no source. Reported only to a caller with Agent update and Configuration read whose Agent settings are readable; otherwise `false`. Advisory only: other required permissions, lifecycle state, sources that an update adds, or a later authorization decision can still prevent the operation. */
              agentSourcesOperate: boolean;
              /** @description Whether the selected IAM Driver allows read of the Agent's Configuration now, which each Agent update needs. Advisory only: other required permissions, lifecycle state, or a later authorization decision can still prevent the operation. */
              configurationRead: boolean;
              /** @description Whether the selected IAM Driver allows Secret operate now on every Secret that the Agent's Configuration binds. Each Configuration save needs it for the Secrets it binds: the Secrets in its `secretBindings`, or every bound Secret when it omits them. `true` when the Configuration binds no Secret. Reported only to a caller with Configuration read and update; otherwise `false`. Advisory only: other required permissions, lifecycle state, or a later authorization decision can still prevent the operation. */
              configurationSecretsOperate: boolean;
              /** @description The names of the Agent's Configuration Secret bindings whose bound Secret the selected IAM Driver does not allow Secret operate on now, sorted. A Configuration save that submits `secretBindings` needs Secret operate only on the Secrets it submits, so a save that binds each listed name to another Secret does not need it on the Secrets they bind now. A save that omits `secretBindings` keeps every binding. Empty when `configurationSecretsOperate` is `true`, and when it is not reported: reported only to a caller with Configuration read and update. Advisory only: other required permissions, lifecycle state, the Secrets a save binds, or a later authorization decision can still prevent the operation. */
              configurationSecretsOperateDeniedBindings: string[];
              /** @description Whether the selected IAM Driver allows update of the Agent's Configuration now, which saving its draft Configuration needs. Advisory only: other required permissions, lifecycle state, or a later authorization decision can still prevent the operation. */
              configurationUpdate: boolean;
              /** @description Whether the selected IAM Driver allows Agent delete now. Advisory only: other required permissions, lifecycle state, or a later authorization decision can still prevent the operation. */
              delete: boolean;
              /** @description Whether the selected IAM Driver allows Agent deploy now. Advisory only: other required permissions, lifecycle state, or a later authorization decision can still prevent the operation. */
              deploy: boolean;
              /** @description Whether the selected IAM Driver allows Agent operate (used for Stop) now. Advisory only: other required permissions, lifecycle state, or a later authorization decision can still prevent the operation. */
              operate: boolean;
              /** @description Whether the selected IAM Driver allows reading the Agent's runtime log text now: Agent `read_logs`, or Agent `administer` when no Restriction denies `read_logs`. Advisory only: other required permissions, Compute Driver support, or a later authorization decision can still prevent the read. */
              readLogs: boolean;
              /** @description Whether the selected IAM Driver allows read now on the Agent's sandbox policy, which reading its network policy and policy suggestions needs. Advisory only: other required permissions, Sandbox Driver support, or a later authorization decision can still prevent the read. */
              sandboxPolicyRead: boolean;
              /** @description Whether the selected IAM Driver allows Agent update now. Advisory only: other required permissions, lifecycle state, or a later authorization decision can still prevent the operation. */
              update: boolean;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentSecretPermissions: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** @description The IDs of the Namespace's Secrets that the caller may read but the selected IAM Driver does not allow Secret operate on now, sorted. Binding a Secret to this Agent's Configuration or as its Harness authentication source needs Secret operate on it, and so does deploying a draft that binds it. Empty when it is not reported: reported only to a caller with read on the Namespace and on the Agent's Configuration, and update on the Agent or its Configuration or deploy on the Agent. A caller with deploy but neither update gets only the Secrets the draft binds: its Configuration's Secret bindings and a Secret Harness authentication source. Advisory only: other required permissions, lifecycle state, or a later authorization decision can still prevent the operation. */
              operateDenied: string[];
              /** @description How many of the Secrets the draft binds the caller may neither read nor Secret operate now: its Configuration's Secret bindings and a Secret Harness authentication source. Deploying the draft needs Secret operate on each. A count only: the caller may not read them, so their IDs are never reported. 0 when it is not reported, under the same conditions as `operateDenied`. Advisory only: other required permissions, lifecycle state, or a later authorization decision can still prevent the operation. */
              unreadableOperateDenied: number;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  discoverSavedAgentPlugins: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          /** @description Exact OCC credential source reference. Shape: `{ "kind": "credential_source", "namespaceId": "ns_...", "id": "cs_..." }`. */
          credentialSource?: {
            id: string;
            /** @constant */
            kind: 'credential_source';
            namespaceId: string;
          };
          cursor?: string;
          q?: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              nextCursor: string | null;
              plugins: {
                available?: boolean;
                description?: string;
                id: string;
                logoUrl?: string;
                name: string;
                privacyPolicyUrl?: string;
                remoteId?: string;
                selectableWithoutTools?: boolean;
                termsOfServiceUrl?: string;
                tools:
                  | null
                  | {
                      available?: boolean;
                      description?: string;
                      destructive?: boolean;
                      id: string;
                      name: string;
                      ownerId: string;
                      unavailableReason?: string;
                      writes?: boolean;
                    }[];
                unavailableHelp?: {
                  label: string;
                  url: string;
                };
                unavailableReason?: string;
                websiteUrl?: string;
              }[];
              setup?: {
                links: {
                  label: string;
                  url: string;
                }[];
                message: string;
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getSavedAgentPluginPolicyCapabilities: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              approvers?: {
                agent: boolean;
                plugin: boolean;
                tools: boolean;
              };
              discoveryCredential: 'required' | 'none';
              driver: components['schemas']['def-1'];
              driverPolicySchema: {
                [key: string]: unknown;
              };
              toolDefaults: {
                approval: (
                  | 'provider_default'
                  | 'all_actions'
                  | 'write_actions'
                  | 'none'
                )[];
                enabled: boolean;
                reviewer: ('human' | 'auto')[];
              };
              tools: {
                approval: (
                  | 'provider_default'
                  | 'all_actions'
                  | 'write_actions'
                  | 'none'
                )[];
                enabled: boolean;
                reviewer: ('human' | 'auto')[];
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  discoverSavedAgentPluginDetails: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          /** @description Exact OCC credential source reference. Shape: `{ "kind": "credential_source", "namespaceId": "ns_...", "id": "cs_..." }`. */
          credentialSource?: {
            id: string;
            /** @constant */
            kind: 'credential_source';
            namespaceId: string;
          };
          pluginId: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              available?: boolean;
              description?: string;
              id: string;
              logoUrl?: string;
              name: string;
              privacyPolicyUrl?: string;
              remoteId?: string;
              selectableWithoutTools?: boolean;
              termsOfServiceUrl?: string;
              tools:
                | null
                | {
                    available?: boolean;
                    description?: string;
                    destructive?: boolean;
                    id: string;
                    name: string;
                    ownerId: string;
                    unavailableReason?: string;
                    writes?: boolean;
                  }[];
              unavailableHelp?: {
                label: string;
                url: string;
              };
              unavailableReason?: string;
              websiteUrl?: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listAgentStandingApprovalScopes: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              binding: {
                [key: string]: unknown;
              };
              repositoryRef: string;
              scope: {
                [key: string]: unknown;
              };
              scopeFingerprint: string;
            }[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listAgentStandingApprovals: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              approvedBy: string;
              createdAt: string;
              generation: number;
              id: string;
              profile: string;
              repositoryRef: string;
              revokedAt?: string;
              scopeFingerprint: string;
              status: 'active' | 'removed';
            }[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  removeAgentStandingApproval: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        approvalId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          expectedGeneration: number;
        };
      };
    };
    responses: {
      /** @description Default Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listAgentRepositoryOptions: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              allowedProfiles: string[];
              description?: string;
              displayName: string;
              repositoryRef: string;
            }[];
            meta: {
              /**
               * @description Present when the Installation has no repository settings, so no repository credential Driver is selected. `data` is then empty, and Agent save refuses repository bindings with 409 RESOURCE_CONFLICT.
               * @constant
               */
              notConfigured?: true;
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listAgentRevisions: {
    parameters: {
      query?: {
        /** @description Agent revisions per page, 1 to 100; default 50. */
        limit?: string;
        /** @description Opaque cursor from `meta.nextCursor` of the previous page. */
        cursor?: string;
      };
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @description Agent revisions that you can read, newest first. */
            data: {
              agentId: string;
              backendId: string | null;
              configurationGeneration: number;
              configurationId: string;
              /** Format: date-time */
              createdAt: string;
              /** @description The `error.code` that reading this revision's deployment would report, or `null` when it reports no error. It tells a failure from a deployment that a newer version or a Stop ended. */
              deploymentErrorCode: string | null;
              /** @description The status that reading this revision's deployment would report, or `null` when OCC has no deployment record for it. */
              deploymentStatus:
                | 'queued'
                | 'running'
                | 'succeeded'
                | 'failed'
                | null;
              harness: {
                id: string;
                mode: 'embedded' | 'dedicated';
                version: string;
              };
              id: string;
              namespaceId: string;
              revision: number;
            }[];
            meta: {
              /** @description Pass this value as `cursor` to read older Agent revisions. OCC returns a cursor only when it finds an older Agent revision that you can read during this request. A later page can be empty if access changes. `null` means OCC found no older Agent revision that you can read. */
              nextCursor: string | null;
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentRevision: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        revisionId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @description Returns an Agent revision with saved settings that cannot change. If OCC cannot read them, the response omits saved configuration fields and includes `configurationReadError` with code `SAVED_CONFIGURATION_UNREADABLE` and the unreadable field. */
            data:
              | {
                  agentId: string;
                  backendId: string | null;
                  compute: {
                    id: string;
                    implementation: string;
                  };
                  /** @description A native OpenClaw configuration document. */
                  configuration: {
                    [key: string]: components['schemas']['def-0'];
                  };
                  configurationGeneration: number;
                  configurationId: string;
                  /** @constant */
                  configurationKind: 'agent';
                  /** Format: date-time */
                  createdAt: string;
                  /** @description Every credential source the Agent uses, at each source's endpoints. A credential-source harnessAuth names one entry. The selected Credential Gateway injects them at deployment; the Agent never receives their values. */
                  credentialSources?: {
                    sourceId: string;
                  }[];
                  /** @description Gateway managed mode requested for this Agent version. It does not report Gateway runtime state. */
                  gatewayManagedMode: boolean;
                  harness: {
                    id: string;
                    mode: 'embedded' | 'dedicated';
                    version: string;
                  };
                  harnessAuth:
                    | {
                        /** @constant */
                        method: 'runtime';
                      }
                    | {
                        /** @constant */
                        method: 'api_key';
                        /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                        source: {
                          id: string;
                          /** @constant */
                          kind: 'secret';
                          namespaceId: string;
                        };
                      }
                    | {
                        /** @constant */
                        method: 'codex_pat';
                        source:
                          | {
                              id: string;
                              /** @constant */
                              kind: 'secret';
                              namespaceId: string;
                            }
                          | {
                              id: string;
                              /** @constant */
                              kind: 'service_account';
                              namespaceId: string;
                            };
                      }
                    | {
                        /** @constant */
                        method: 'credential_source';
                        sourceId: string;
                      };
                  id: string;
                  namespaceId: string;
                  pluginApprovers?: components['schemas']['def-2'];
                  plugins?: {
                    driver: components['schemas']['def-1'];
                    plugins: components['schemas']['def-6'];
                  };
                  repositoryCredentials?: {
                    bindings: {
                      profile: string;
                      repositoryRef: string;
                    }[];
                    deadlineWallMs: number;
                    driver: {
                      id: string;
                      implementation: string;
                    };
                  };
                  revision: number;
                  /** @description The Sandbox Driver that provisions this version. Absent when the version runs without a Sandbox, so it has no Sandbox log source and records no policy denials. */
                  sandboxDriverId?: string;
                  /** @description Optional Secret binding map. Keys are destination environment variable names; at most 64 bindings are accepted. Each value must contain `source.kind`, `source.namespaceId`, and `source.id`, and may contain `delivery.type: "env"`. Admission rejects reserved or process-control destinations such as `OPENCLAW_*`, `CODEX_*`, `OPENAI_*`, `ANTHROPIC_*`, `OCC_*`, `KUBERNETES_*`, `PATH`, `HOME`, and proxy variables. Model authentication belongs to Agent.harnessAuth. */
                  secretBindings?: {
                    [key: string]: {
                      /** @description Gateway delivery mode. Only `{ "type": "env" }` is supported. */
                      delivery?: {
                        /** @constant */
                        type: 'env';
                      };
                      /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                      source: {
                        id: string;
                        /** @constant */
                        kind: 'secret';
                        namespaceId: string;
                      };
                    };
                  };
                  secretDriverId?: string;
                }
              | {
                  agentId: string;
                  backendId: string | null;
                  configurationReadError: {
                    /** @constant */
                    code: 'SAVED_CONFIGURATION_UNREADABLE';
                    field:
                      | 'plugins'
                      | 'pluginApprovers'
                      | 'repositoryBindings'
                      | 'repositoryAccess'
                      | 'harnessAuth'
                      | 'credentialSources'
                      | 'secretBindings'
                      | 'repositoryCredentials'
                      | 'configuration';
                  };
                  /** Format: date-time */
                  createdAt: string;
                  id: string;
                  namespaceId: string;
                  revision: number;
                };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentSandboxRecommendations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        facet: 'networking' | 'filesystem' | 'process';
        revisionId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              providerVersion?: string;
              recommendations: {
                grant: {
                  /**
                   * Executable path
                   * @description Absolute path of the executable receiving access.
                   */
                  binary: string;
                  /**
                   * Destination hostname
                   * @description DNS hostname or permitted single-label wildcard. Grants allow access; omitted destinations stay denied.
                   */
                  host: string;
                  /** Rule ID */
                  id: string;
                  /** Port ranges */
                  ports: {
                    /** Start port */
                    from: number;
                    /** End port */
                    to: number;
                  }[];
                };
                id: string;
                observations?: number;
                status: 'pending' | 'approved' | 'rejected';
              }[];
              truncated: boolean;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentRuntimeCredentials: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              transportConfigured: boolean;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  provisionAgentRuntimeCredentials: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': Record<string, never>;
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              transportConfigured: boolean;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentRuntimeImages: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              images: {
                commit: string | null;
                container: string;
                image: string;
                imageId: string | null;
                openclawCommit: string | null;
                workload: string;
              }[];
              status: 'observed' | 'undeployed' | 'unsupported';
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentSandboxPolicy: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        facet: 'networking' | 'filesystem' | 'process';
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              capability: null | {
                live: boolean;
                portRanges: boolean;
                wildcards: boolean;
              };
              /** Network rules */
              ceiling: {
                /**
                 * Executable path
                 * @description Absolute path of the executable receiving access.
                 */
                binary: string;
                /**
                 * Destination hostname
                 * @description DNS hostname or permitted single-label wildcard. Grants allow access; omitted destinations stay denied.
                 */
                host: string;
                /** Rule ID */
                id: string;
                /** Port ranges */
                ports: {
                  /** Start port */
                  from: number;
                  /** End port */
                  to: number;
                }[];
              }[];
              configuration?: {
                actions: {
                  apply?: {
                    available: boolean;
                    href: string;
                    method: 'GET' | 'POST' | 'PUT';
                  };
                  read?: {
                    available: boolean;
                    href: string;
                    method: 'GET' | 'POST' | 'PUT';
                  };
                  save?: {
                    available: boolean;
                    href: string;
                    method: 'GET' | 'POST' | 'PUT';
                  };
                  validate?: {
                    available: boolean;
                    href: string;
                    method: 'GET' | 'POST' | 'PUT';
                  };
                };
                binding: 'installation-startup' | 'sandbox-policy';
                capability: string;
                configurationSchema: {
                  [key: string]: unknown;
                };
                driverId: string;
                implementation: string;
                key: string;
                scope: 'installation' | 'agent';
              };
              defaults: null | {
                [key: string]: unknown;
              };
              defaultsRevisionId?: string;
              /** @description The saved policy version the active revision (defaultsRevisionId) was deployed with. Its Sandbox enforces that version without a live application. */
              deployedPolicyVersion?: number;
              editingEnabled: boolean;
              policy: {
                /** Network rules */
                additions: {
                  /**
                   * Executable path
                   * @description Absolute path of the executable receiving access.
                   */
                  binary: string;
                  /**
                   * Destination hostname
                   * @description DNS hostname or permitted single-label wildcard. Grants allow access; omitted destinations stay denied.
                   */
                  host: string;
                  /** Rule ID */
                  id: string;
                  /** Port ranges */
                  ports: {
                    /** Start port */
                    from: number;
                    /** End port */
                    to: number;
                  }[];
                }[];
                agentId: string;
                application?: {
                  /** Format: uuid */
                  id: string;
                  policyVersion: number;
                  providerVersion?: string;
                  reason?: string;
                  requestedAt: string;
                  requestedBy: string;
                  revisionId: string;
                  state: 'pending' | 'applied' | 'failed';
                };
                applied?: {
                  appliedAt: string;
                  policyVersion: number;
                  providerVersion: string;
                  revisionId: string;
                };
                id: string;
                namespaceId: string;
                version: number;
              };
              /** @description True while the active revision or the next deploy runs under protected execution. Saving network policy additions is then refused with SANDBOX_POLICY_PROTECTED_EXECUTION; saving an empty policy stays allowed. */
              protectedExecution: boolean;
              /** @description Why per-Agent network policy is unavailable, when capability is null: the sentence the save, validate, apply and editing refusals give. */
              unavailableReason?: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  updateAgentSandboxPolicy: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        facet: 'networking' | 'filesystem' | 'process';
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          /** Network rules */
          additions: {
            /**
             * Executable path
             * @description Absolute path of the executable receiving access.
             */
            binary: string;
            /**
             * Destination hostname
             * @description DNS hostname or permitted single-label wildcard. Grants allow access; omitted destinations stay denied.
             */
            host: string;
            /** Rule ID */
            id: string;
            /** Port ranges */
            ports: {
              /** Start port */
              from: number;
              /** End port */
              to: number;
            }[];
          }[];
          expectedVersion: number;
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Network rules */
              additions: {
                /**
                 * Executable path
                 * @description Absolute path of the executable receiving access.
                 */
                binary: string;
                /**
                 * Destination hostname
                 * @description DNS hostname or permitted single-label wildcard. Grants allow access; omitted destinations stay denied.
                 */
                host: string;
                /** Rule ID */
                id: string;
                /** Port ranges */
                ports: {
                  /** Start port */
                  from: number;
                  /** End port */
                  to: number;
                }[];
              }[];
              agentId: string;
              application?: {
                /** Format: uuid */
                id: string;
                policyVersion: number;
                providerVersion?: string;
                reason?: string;
                requestedAt: string;
                requestedBy: string;
                revisionId: string;
                state: 'pending' | 'applied' | 'failed';
              };
              applied?: {
                appliedAt: string;
                policyVersion: number;
                providerVersion: string;
                revisionId: string;
              };
              id: string;
              namespaceId: string;
              version: number;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  applyAgentSandboxPolicy: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        facet: 'networking' | 'filesystem' | 'process';
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          expectedVersion: number;
          revisionId: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Network rules */
              additions: {
                /**
                 * Executable path
                 * @description Absolute path of the executable receiving access.
                 */
                binary: string;
                /**
                 * Destination hostname
                 * @description DNS hostname or permitted single-label wildcard. Grants allow access; omitted destinations stay denied.
                 */
                host: string;
                /** Rule ID */
                id: string;
                /** Port ranges */
                ports: {
                  /** Start port */
                  from: number;
                  /** End port */
                  to: number;
                }[];
              }[];
              agentId: string;
              application?: {
                /** Format: uuid */
                id: string;
                policyVersion: number;
                providerVersion?: string;
                reason?: string;
                requestedAt: string;
                requestedBy: string;
                revisionId: string;
                state: 'pending' | 'applied' | 'failed';
              };
              applied?: {
                appliedAt: string;
                policyVersion: number;
                providerVersion: string;
                revisionId: string;
              };
              id: string;
              namespaceId: string;
              version: number;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  TEMPORARY_API_WILL_BREAK_IN_FUTURE_setAgentSandboxPolicyEditing: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        facet: 'networking' | 'filesystem' | 'process';
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          enabled: boolean;
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              activeRevisionId?: string;
              backendId: string | null;
              configurationId: string;
              /** Format: date-time */
              createdAt: string;
              /** @description Every credential source the Agent uses, at each source's endpoints. A credential-source harnessAuth names one entry. The selected Credential Gateway injects them at deployment; the Agent never receives their values. */
              credentialSources?: {
                sourceId: string;
              }[];
              desiredRuntimeState: 'running' | 'stopped';
              executionMode: 'embedded' | 'dedicated';
              /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
              gatewayManagedMode: boolean;
              harnessAuth:
                | (
                    | {
                        /** @constant */
                        method: 'runtime';
                      }
                    | {
                        /** @constant */
                        method: 'api_key';
                        /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                        source: {
                          id: string;
                          /** @constant */
                          kind: 'secret';
                          namespaceId: string;
                        };
                      }
                    | {
                        /** @constant */
                        method: 'codex_pat';
                        source:
                          | {
                              id: string;
                              /** @constant */
                              kind: 'secret';
                              namespaceId: string;
                            }
                          | {
                              id: string;
                              /** @constant */
                              kind: 'service_account';
                              namespaceId: string;
                            };
                      }
                    | {
                        /** @constant */
                        method: 'credential_source';
                        sourceId: string;
                      }
                  )
                | null;
              id: string;
              name: string;
              namespaceId: string;
              pluginApprovers?: components['schemas']['def-2'];
              plugins?: components['schemas']['def-6'];
              /** @description Desired repository access. Each omitted repository profile inherits defaultProfile; explicit profiles remain overrides. Mutually exclusive with repositoryBindings in create, provision, and update requests. */
              repositoryAccess?: {
                defaultProfile: string;
                repositories: {
                  profile?: string;
                  repositoryRef: string;
                }[];
              };
              repositoryBindings?: {
                profile: string;
                repositoryRef: string;
              }[];
              sandboxPolicyEditing?: boolean;
              servicePrincipalId: string;
              status: 'active' | 'deleting';
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  validateAgentSandboxPolicy: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        facet: 'networking' | 'filesystem' | 'process';
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          additions: unknown;
          expectedVersion: number;
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data:
              | {
                  data: unknown;
                  /** @constant */
                  success: true;
                }
              | {
                  error: {
                    details: {
                      code:
                        | 'REQUIRED'
                        | 'UNKNOWN_FIELD'
                        | 'INVALID_TYPE'
                        | 'INVALID_FORMAT'
                        | 'INVALID_VALUE'
                        | 'TOO_LONG'
                        | 'TOO_DEEP'
                        | 'INVALID_RANGE'
                        | 'OUTSIDE_CEILING';
                      message?: string;
                      path: string;
                    }[];
                  };
                  /** @constant */
                  success: false;
                };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  stopAgent: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      202: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              activeRevisionId?: string;
              backendId: string | null;
              configurationId: string;
              /** Format: date-time */
              createdAt: string;
              /** @description Every credential source the Agent uses, at each source's endpoints. A credential-source harnessAuth names one entry. The selected Credential Gateway injects them at deployment; the Agent never receives their values. */
              credentialSources?: {
                sourceId: string;
              }[];
              desiredRuntimeState: 'running' | 'stopped';
              executionMode: 'embedded' | 'dedicated';
              /** @description Whether OCE restricts Gateway-local administration. Defaults on when the selected Compute Driver supports it, otherwise off. Changing the setting requires Installation administer permission and takes effect on deployment. */
              gatewayManagedMode: boolean;
              harnessAuth:
                | (
                    | {
                        /** @constant */
                        method: 'runtime';
                      }
                    | {
                        /** @constant */
                        method: 'api_key';
                        /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                        source: {
                          id: string;
                          /** @constant */
                          kind: 'secret';
                          namespaceId: string;
                        };
                      }
                    | {
                        /** @constant */
                        method: 'codex_pat';
                        source:
                          | {
                              id: string;
                              /** @constant */
                              kind: 'secret';
                              namespaceId: string;
                            }
                          | {
                              id: string;
                              /** @constant */
                              kind: 'service_account';
                              namespaceId: string;
                            };
                      }
                    | {
                        /** @constant */
                        method: 'credential_source';
                        sourceId: string;
                      }
                  )
                | null;
              id: string;
              name: string;
              namespaceId: string;
              pluginApprovers?: components['schemas']['def-2'];
              plugins?: components['schemas']['def-6'];
              /** @description Desired repository access. Each omitted repository profile inherits defaultProfile; explicit profiles remain overrides. Mutually exclusive with repositoryBindings in create, provision, and update requests. */
              repositoryAccess?: {
                defaultProfile: string;
                repositories: {
                  profile?: string;
                  repositoryRef: string;
                }[];
              };
              repositoryBindings?: {
                profile: string;
                repositoryRef: string;
              }[];
              sandboxPolicyEditing?: boolean;
              servicePrincipalId: string;
              status: 'active' | 'deleting';
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getAgentWorkspaceFile: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        name: 'AGENTS.md' | 'SOUL.md' | 'IDENTITY.md' | 'USER.md';
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              content: string;
              /** @enum {unknown} */
              name: 'AGENTS.md' | 'SOUL.md' | 'IDENTITY.md' | 'USER.md';
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Conflict. The Agent has no running version: deploy it, or wait until its deployment finishes. */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  putAgentWorkspaceFile: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        agentId: string;
        name: 'AGENTS.md' | 'SOUL.md' | 'IDENTITY.md' | 'USER.md';
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          /** @description Workspace file content. The controller also enforces a 16 KiB UTF-8 byte limit and rejects unpaired UTF-16 surrogates. */
          content: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** @enum {unknown} */
              name: 'AGENTS.md' | 'SOUL.md' | 'IDENTITY.md' | 'USER.md';
              size?: number;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Service Unavailable. Check `error.code`: `DEPENDENCY_UNAVAILABLE` means workspace access is unavailable. `UNKNOWN_OUTCOME` means OCC could not confirm the write or its audit record; the file may already contain the requested content. Read the same file with `GET` and compare its content before deciding whether to retry. If the content matches, do not retry. If you cannot read it, wait or ask someone with `read` permission on the Agent to check. */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  lookupChannelDirectory: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json':
          | {
              cursor?: string;
              kind: 'users' | 'channels';
              query?: string;
              secretId: string;
            }
          | {
              agentId: string;
              cursor?: string;
              kind: 'users' | 'channels';
              query?: string;
              secretId: string;
            }
          | {
              configurationId: string;
              cursor?: string;
              kind: 'users' | 'channels';
              query?: string;
              secretId: string;
            }
          | {
              ids: string[];
              kind: 'users' | 'channels';
              secretId: string;
            }
          | {
              agentId: string;
              ids: string[];
              kind: 'users' | 'channels';
              secretId: string;
            }
          | {
              configurationId: string;
              ids: string[];
              kind: 'users' | 'channels';
              secretId: string;
            };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              candidates: {
                displayName?: string;
                id: string;
                name: string;
              }[];
              complete: boolean;
              nextCursor?: string;
              workspaceId: string;
              workspaceName?: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      501: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  createConfiguration: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          /** @constant */
          kind: 'agent';
          /** @description Optional Secret binding map. Keys are destination environment variable names; at most 64 bindings are accepted. Each value must contain `source.kind`, `source.namespaceId`, and `source.id`, and may contain `delivery.type: "env"`. Admission rejects reserved or process-control destinations such as `OPENCLAW_*`, `CODEX_*`, `OPENAI_*`, `ANTHROPIC_*`, `OCC_*`, `KUBERNETES_*`, `PATH`, `HOME`, and proxy variables. Model authentication belongs to Agent.harnessAuth. */
          secretBindings?: {
            [key: string]: {
              /** @description Gateway delivery mode. Only `{ "type": "env" }` is supported. */
              delivery?: {
                /** @constant */
                type: 'env';
              };
              /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
              source: {
                id: string;
                /** @constant */
                kind: 'secret';
                namespaceId: string;
              };
            };
          };
          /** @description A native OpenClaw configuration document. */
          values: {
            [key: string]: components['schemas']['def-0'];
          };
        };
      };
    };
    responses: {
      /** @description Default Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              createdAt: string;
              generation: number;
              id: string;
              /** @constant */
              kind: 'agent';
              namespaceId: string;
              /** @description Optional Secret binding map. Keys are destination environment variable names; at most 64 bindings are accepted. Each value must contain `source.kind`, `source.namespaceId`, and `source.id`, and may contain `delivery.type: "env"`. Admission rejects reserved or process-control destinations such as `OPENCLAW_*`, `CODEX_*`, `OPENAI_*`, `ANTHROPIC_*`, `OCC_*`, `KUBERNETES_*`, `PATH`, `HOME`, and proxy variables. Model authentication belongs to Agent.harnessAuth. */
              secretBindings?: {
                [key: string]: {
                  /** @description Gateway delivery mode. Only `{ "type": "env" }` is supported. */
                  delivery?: {
                    /** @constant */
                    type: 'env';
                  };
                  /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                  source: {
                    id: string;
                    /** @constant */
                    kind: 'secret';
                    namespaceId: string;
                  };
                };
              };
              /** @description A native OpenClaw configuration document. */
              values: {
                [key: string]: components['schemas']['def-0'];
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getConfiguration: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        configurationId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              createdAt: string;
              generation: number;
              id: string;
              /** @constant */
              kind: 'agent';
              namespaceId: string;
              /** @description Optional Secret binding map. Keys are destination environment variable names; at most 64 bindings are accepted. Each value must contain `source.kind`, `source.namespaceId`, and `source.id`, and may contain `delivery.type: "env"`. Admission rejects reserved or process-control destinations such as `OPENCLAW_*`, `CODEX_*`, `OPENAI_*`, `ANTHROPIC_*`, `OCC_*`, `KUBERNETES_*`, `PATH`, `HOME`, and proxy variables. Model authentication belongs to Agent.harnessAuth. */
              secretBindings?: {
                [key: string]: {
                  /** @description Gateway delivery mode. Only `{ "type": "env" }` is supported. */
                  delivery?: {
                    /** @constant */
                    type: 'env';
                  };
                  /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                  source: {
                    id: string;
                    /** @constant */
                    kind: 'secret';
                    namespaceId: string;
                  };
                };
              };
              /** @description A native OpenClaw configuration document. */
              values: {
                [key: string]: components['schemas']['def-0'];
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  deleteConfiguration: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        configurationId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  updateConfiguration: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        configurationId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          /** @description The generation this update replaces, from the caller's last read. A Configuration at another generation refuses the update with 409 and an `/expectedGeneration` detail, and keeps its content. Omitted, the update replaces whatever generation is current. */
          expectedGeneration?: number;
          /** @description Optional Secret binding map. Keys are destination environment variable names; at most 64 bindings are accepted. Each value must contain `source.kind`, `source.namespaceId`, and `source.id`, and may contain `delivery.type: "env"`. Admission rejects reserved or process-control destinations such as `OPENCLAW_*`, `CODEX_*`, `OPENAI_*`, `ANTHROPIC_*`, `OCC_*`, `KUBERNETES_*`, `PATH`, `HOME`, and proxy variables. Model authentication belongs to Agent.harnessAuth. */
          secretBindings?: {
            [key: string]: {
              /** @description Gateway delivery mode. Only `{ "type": "env" }` is supported. */
              delivery?: {
                /** @constant */
                type: 'env';
              };
              /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
              source: {
                id: string;
                /** @constant */
                kind: 'secret';
                namespaceId: string;
              };
            };
          };
          /** @description A native OpenClaw configuration document. */
          values: {
            [key: string]: components['schemas']['def-0'];
          };
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              createdAt: string;
              generation: number;
              id: string;
              /** @constant */
              kind: 'agent';
              namespaceId: string;
              /** @description Optional Secret binding map. Keys are destination environment variable names; at most 64 bindings are accepted. Each value must contain `source.kind`, `source.namespaceId`, and `source.id`, and may contain `delivery.type: "env"`. Admission rejects reserved or process-control destinations such as `OPENCLAW_*`, `CODEX_*`, `OPENAI_*`, `ANTHROPIC_*`, `OCC_*`, `KUBERNETES_*`, `PATH`, `HOME`, and proxy variables. Model authentication belongs to Agent.harnessAuth. */
              secretBindings?: {
                [key: string]: {
                  /** @description Gateway delivery mode. Only `{ "type": "env" }` is supported. */
                  delivery?: {
                    /** @constant */
                    type: 'env';
                  };
                  /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
                  source: {
                    id: string;
                    /** @constant */
                    kind: 'secret';
                    namespaceId: string;
                  };
                };
              };
              /** @description A native OpenClaw configuration document. */
              values: {
                [key: string]: components['schemas']['def-0'];
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listCredentialSources: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** @description Non-secret source configuration keyed by catalog field name. */
              config: {
                [key: string]: string;
              };
              /** @description Protected live static, eligible prepared, or explicitly credential-free metadata access. Each profile requires its own grant; missing material never selects credential-free access. Runtime readiness requires current authenticated supervisor evidence. */
              egress?: {
                adoption: 'live' | 'prepared' | 'credential_free';
                /** @constant */
                retention: 'none';
              };
              id: string;
              name: string;
              namespaceId: string;
              /** @description The Driver capability that admitted this source. Changing the selected Driver does not transfer ownership. */
              ownerCapability: 'credential_gateway' | 'credential_proxy';
              /** @description Exact OCC credential source reference. Shape: `{ "kind": "credential_source", "namespaceId": "ns_...", "id": "cs_..." }`. */
              ref: {
                id: string;
                /** @constant */
                kind: 'credential_source';
                namespaceId: string;
              };
              /** @description Secret inputs keyed by catalog field name. Each value references an OCC Secret in the same Namespace; OCC never returns its value. */
              secrets: {
                [key: string]: {
                  id: string;
                  /** @constant */
                  kind: 'secret';
                  namespaceId: string;
                };
              };
              state: 'registering' | 'ready' | 'deleting';
              /** @description Source admission or selected Credential Gateway status. For protected sources, ready does not attest an installed enforcing Sandbox; current supervisor evidence is checked separately. Never contains credential values. */
              status?: {
                reason?: string;
                /** @description Token refresh status reported by the selected Credential Refresh Driver for a refresh-type source. It never contains tokens or refresh material. */
                refresh?: {
                  /** Format: date-time */
                  expiresAt?: string;
                  failureCode?: string;
                  /** Format: date-time */
                  lastRefreshAt?: string;
                  /** Format: date-time */
                  nextRefreshAt?: string;
                  recoveryAction?:
                    | 'retry'
                    | 'reauthorize'
                    | 'fix_configuration'
                    | 'investigate';
                  state: 'pending' | 'ready' | 'failed';
                };
                state: 'ready' | 'pending' | 'failed' | 'absent';
              };
              /** @description Source type from the selected Credential Gateway catalog, for example `openai`. */
              type: string;
            }[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  createCredentialSource: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          /** @description Non-secret source configuration keyed by catalog field name. */
          config?: {
            [key: string]: string;
          };
          name: string;
          /** @description Secret inputs keyed by catalog field name. Each value references an OCC Secret in the same Namespace; OCC never returns its value. */
          secrets?: {
            [key: string]: {
              id: string;
              /** @constant */
              kind: 'secret';
              namespaceId: string;
            };
          };
          /** @description Source type from the selected Credential Gateway catalog, for example `openai`. */
          type: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-13'];
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getCredentialSource: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        credentialSourceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-13'];
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  deleteCredentialSource: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        credentialSourceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  updateCredentialSource: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        credentialSourceId: string;
      };
      cookie?: never;
    };
    /** @description For a legacy source, omitting adoption and authorityScope updates the Credential Gateway copy. To admit an unbound legacy or narrower source for protected per-operation reads, send adoption: live and authorityScope: execution together. Existing approvals never expand because of an upgrade or a Secret change. Already-admitted sources remain live. PATCH requires an unbound source. A refresh token field (`refresh_token` of `oauth2-refresh-token`) must reference a new Secret. Non-secret config is immutable. */
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description Opt an unbound static source into protected live Secret reads. A legacy or narrower source also requires explicit authorityScope: execution. Requires source update and Secret operate permission.
           * @constant
           */
          adoption?: 'live';
          /**
           * @description Consent to every process in this dedicated execution using the constrained inference grant. An older executable-specific grant is never broadened by an upgrade or Secret change.
           * @constant
           */
          authorityScope?: 'execution';
          /** @description Secret inputs keyed by catalog field name. Each value references an OCC Secret in the same Namespace; OCC never returns its value. */
          secrets?: {
            [key: string]: {
              id: string;
              /** @constant */
              kind: 'secret';
              namespaceId: string;
            };
          };
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-13'];
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  rotateCredentialSource: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        credentialSourceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-13'];
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listIAMAccessBindings: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: (
              | {
                  id: string;
                  namespaceId: string;
                  roleId: string;
                  subjectId: string;
                  subjectKind: 'identity' | 'group';
                }
              | {
                  id: string;
                  namespaceId: string;
                  resourceId: string;
                  resourceKind:
                    | 'installation'
                    | 'namespace'
                    | 'configuration'
                    | 'preset'
                    | 'service_account'
                    | 'secret'
                    | 'agent'
                    | 'agent_revision'
                    | 'credential_source'
                    | 'sandbox_policy';
                  roleId: string;
                  subjectId: string;
                  subjectKind: 'identity' | 'group';
                }
            )[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  createIAMAccessBinding: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          resourceId: string;
          resourceKind:
            | 'namespace'
            | 'agent'
            | 'agent_revision'
            | 'configuration'
            | 'credential_source'
            | 'sandbox_policy'
            | 'preset'
            | 'secret'
            | 'service_account';
          roleId: string;
          subjectId: string;
          /** @constant */
          subjectKind: 'identity';
        };
      };
    };
    responses: {
      /** @description Default Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data:
              | {
                  id: string;
                  namespaceId: string;
                  roleId: string;
                  subjectId: string;
                  subjectKind: 'identity' | 'group';
                }
              | {
                  id: string;
                  namespaceId: string;
                  resourceId: string;
                  resourceKind:
                    | 'installation'
                    | 'namespace'
                    | 'configuration'
                    | 'preset'
                    | 'service_account'
                    | 'secret'
                    | 'agent'
                    | 'agent_revision'
                    | 'credential_source'
                    | 'sandbox_policy';
                  roleId: string;
                  subjectId: string;
                  subjectKind: 'identity' | 'group';
                };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getIAMAccessBinding: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        bindingId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data:
              | {
                  id: string;
                  namespaceId: string;
                  roleId: string;
                  subjectId: string;
                  subjectKind: 'identity' | 'group';
                }
              | {
                  id: string;
                  namespaceId: string;
                  resourceId: string;
                  resourceKind:
                    | 'installation'
                    | 'namespace'
                    | 'configuration'
                    | 'preset'
                    | 'service_account'
                    | 'secret'
                    | 'agent'
                    | 'agent_revision'
                    | 'credential_source'
                    | 'sandbox_policy';
                  roleId: string;
                  subjectId: string;
                  subjectKind: 'identity' | 'group';
                };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  deleteIAMAccessBinding: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        bindingId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listIAMRoles: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              id: string;
              name?: string;
              namespaceId: string;
              permissions: {
                action:
                  | 'create'
                  | 'read'
                  | 'update'
                  | 'delete'
                  | 'deploy'
                  | 'operate'
                  | 'administer'
                  | 'read_logs'
                  | 'manage_policy';
                resourceKind:
                  | 'installation'
                  | 'namespace'
                  | 'configuration'
                  | 'preset'
                  | 'service_account'
                  | 'secret'
                  | 'agent'
                  | 'agent_revision'
                  | 'credential_source'
                  | 'sandbox_policy';
              }[];
            }[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  createIAMRole: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          name?: string;
          permissions: {
            action:
              | 'create'
              | 'read'
              | 'update'
              | 'delete'
              | 'deploy'
              | 'operate'
              | 'administer'
              | 'read_logs'
              | 'manage_policy';
            resourceKind:
              | 'namespace'
              | 'agent'
              | 'agent_revision'
              | 'configuration'
              | 'credential_source'
              | 'sandbox_policy'
              | 'preset'
              | 'secret'
              | 'service_account';
          }[];
        };
      };
    };
    responses: {
      /** @description Default Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              id: string;
              name?: string;
              namespaceId: string;
              permissions: {
                action:
                  | 'create'
                  | 'read'
                  | 'update'
                  | 'delete'
                  | 'deploy'
                  | 'operate'
                  | 'administer'
                  | 'read_logs'
                  | 'manage_policy';
                resourceKind:
                  | 'installation'
                  | 'namespace'
                  | 'configuration'
                  | 'preset'
                  | 'service_account'
                  | 'secret'
                  | 'agent'
                  | 'agent_revision'
                  | 'credential_source'
                  | 'sandbox_policy';
              }[];
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getIAMRole: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        roleId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              id: string;
              name?: string;
              namespaceId: string;
              permissions: {
                action:
                  | 'create'
                  | 'read'
                  | 'update'
                  | 'delete'
                  | 'deploy'
                  | 'operate'
                  | 'administer'
                  | 'read_logs'
                  | 'manage_policy';
                resourceKind:
                  | 'installation'
                  | 'namespace'
                  | 'configuration'
                  | 'preset'
                  | 'service_account'
                  | 'secret'
                  | 'agent'
                  | 'agent_revision'
                  | 'credential_source'
                  | 'sandbox_policy';
              }[];
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  deleteIAMRole: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        roleId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listIAMServicePrincipals: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              id: string;
              namespaceId: string;
            }[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  createIAMServicePrincipal: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': Record<string, never>;
      };
    };
    responses: {
      /** @description Default Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @description A non-Agent automation identity fixed to one Namespace. It holds only the grants of AccessBindings that name it. */
            data: {
              id: string;
              namespaceId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getIAMServicePrincipal: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        servicePrincipalId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @description A non-Agent automation identity fixed to one Namespace. It holds only the grants of AccessBindings that name it. */
            data: {
              id: string;
              namespaceId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getNamespaceCallerPermissions: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              agents: {
                /** @description Whether the selected IAM Driver allows Agent creation in this Namespace now. Advisory only: other required permissions, lifecycle state, or a later authorization decision can still prevent the operation. */
                create: boolean;
              };
              installation: {
                /** @description Whether the selected IAM Driver allows Installation administer now, which Installation-wide operations such as listing Backends need. The check targets the Installation, not this Namespace. Advisory only: a later authorization decision can still prevent the operation. */
                administer: boolean;
              };
              secrets: {
                /** @description Whether the selected IAM Driver allows Secret creation in this Namespace now. Advisory only: other required permissions, lifecycle state, or a later authorization decision can still prevent the operation. */
                create: boolean;
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getNamespaceSecretPermissions: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** @description The IDs of the Namespace's Secrets that the caller may read but the selected IAM Driver does not allow Secret operate on now, sorted. Agent creation needs Secret operate on each Secret it binds or uses: its Harness authentication source, its Configuration's Secret bindings, and a directory search Secret. Empty when it is not reported: reported only to a caller who may create an Agent in this Namespace. Advisory only: other required permissions, lifecycle state, or a later authorization decision can still prevent the operation. */
              operateDenied: string[];
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listPresets: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              createdAt: string;
              id: string;
              name: string;
              namespaceId: string;
            }[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  createPreset: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          name: string;
          /** @description Reusable partial Agent launch settings. Scalar values may use {{ vars.name }}. Admission validates template syntax and credential boundaries. Ordinary creation APIs validate concrete launch settings. */
          template: {
            agent?: {
              backendId?: components['schemas']['def-0'];
              executionMode?: components['schemas']['def-0'];
              harnessAuth?: components['schemas']['def-0'];
              initialWorkspaceFiles?: {
                'AGENTS.md'?: string;
                'IDENTITY.md'?: string;
                'SOUL.md'?: string;
                'USER.md'?: string;
              };
              name?: components['schemas']['def-0'];
              pluginApprovers?: components['schemas']['def-0'];
              plugins?: components['schemas']['def-0'];
              repositoryAccess?: components['schemas']['def-0'];
              repositoryBindings?: components['schemas']['def-0'];
            };
            configuration?: {
              /** @description Namespace-owned Secret bindings. Reference fields may use {{ vars.name }}. */
              secretBindings?: {
                [key: string]: components['schemas']['def-0'];
              };
              /** @description A native OpenClaw configuration document. */
              values?: {
                [key: string]: components['schemas']['def-0'];
              };
            };
            variables?: {
              [key: string]: {
                /** @description A value of the declared type. Password variables take no default. */
                default?: string | number | boolean;
                description?: string;
                type: 'string' | 'number' | 'boolean' | 'password';
              };
            };
          };
        };
      };
    };
    responses: {
      /** @description Default Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              createdAt: string;
              id: string;
              name: string;
              namespaceId: string;
              /** @description Reusable partial Agent launch settings. Scalar values may use {{ vars.name }}. Admission validates template syntax and credential boundaries. Ordinary creation APIs validate concrete launch settings. */
              template: {
                agent?: {
                  backendId?: components['schemas']['def-0'];
                  executionMode?: components['schemas']['def-0'];
                  harnessAuth?: components['schemas']['def-0'];
                  initialWorkspaceFiles?: {
                    'AGENTS.md'?: string;
                    'IDENTITY.md'?: string;
                    'SOUL.md'?: string;
                    'USER.md'?: string;
                  };
                  name?: components['schemas']['def-0'];
                  pluginApprovers?: components['schemas']['def-0'];
                  plugins?: components['schemas']['def-0'];
                  repositoryAccess?: components['schemas']['def-0'];
                  repositoryBindings?: components['schemas']['def-0'];
                };
                configuration?: {
                  /** @description Namespace-owned Secret bindings. Reference fields may use {{ vars.name }}. */
                  secretBindings?: {
                    [key: string]: components['schemas']['def-0'];
                  };
                  /** @description A native OpenClaw configuration document. */
                  values?: {
                    [key: string]: components['schemas']['def-0'];
                  };
                };
                variables?: {
                  [key: string]: {
                    /** @description A value of the declared type. Password variables take no default. */
                    default?: string | number | boolean;
                    description?: string;
                    type: 'string' | 'number' | 'boolean' | 'password';
                  };
                };
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getPreset: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        presetId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              createdAt: string;
              id: string;
              name: string;
              namespaceId: string;
              /** @description Reusable partial Agent launch settings. Scalar values may use {{ vars.name }}. Admission validates template syntax and credential boundaries. Ordinary creation APIs validate concrete launch settings. */
              template: {
                agent?: {
                  backendId?: components['schemas']['def-0'];
                  executionMode?: components['schemas']['def-0'];
                  harnessAuth?: components['schemas']['def-0'];
                  initialWorkspaceFiles?: {
                    'AGENTS.md'?: string;
                    'IDENTITY.md'?: string;
                    'SOUL.md'?: string;
                    'USER.md'?: string;
                  };
                  name?: components['schemas']['def-0'];
                  pluginApprovers?: components['schemas']['def-0'];
                  plugins?: components['schemas']['def-0'];
                  repositoryAccess?: components['schemas']['def-0'];
                  repositoryBindings?: components['schemas']['def-0'];
                };
                configuration?: {
                  /** @description Namespace-owned Secret bindings. Reference fields may use {{ vars.name }}. */
                  secretBindings?: {
                    [key: string]: components['schemas']['def-0'];
                  };
                  /** @description A native OpenClaw configuration document. */
                  values?: {
                    [key: string]: components['schemas']['def-0'];
                  };
                };
                variables?: {
                  [key: string]: {
                    /** @description A value of the declared type. Password variables take no default. */
                    default?: string | number | boolean;
                    description?: string;
                    type: 'string' | 'number' | 'boolean' | 'password';
                  };
                };
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  deletePreset: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        presetId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  updatePreset: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        presetId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          name?: string;
          /** @description Reusable partial Agent launch settings. Scalar values may use {{ vars.name }}. Admission validates template syntax and credential boundaries. Ordinary creation APIs validate concrete launch settings. */
          template?: {
            agent?: {
              backendId?: components['schemas']['def-0'];
              executionMode?: components['schemas']['def-0'];
              harnessAuth?: components['schemas']['def-0'];
              initialWorkspaceFiles?: {
                'AGENTS.md'?: string;
                'IDENTITY.md'?: string;
                'SOUL.md'?: string;
                'USER.md'?: string;
              };
              name?: components['schemas']['def-0'];
              pluginApprovers?: components['schemas']['def-0'];
              plugins?: components['schemas']['def-0'];
              repositoryAccess?: components['schemas']['def-0'];
              repositoryBindings?: components['schemas']['def-0'];
            };
            configuration?: {
              /** @description Namespace-owned Secret bindings. Reference fields may use {{ vars.name }}. */
              secretBindings?: {
                [key: string]: components['schemas']['def-0'];
              };
              /** @description A native OpenClaw configuration document. */
              values?: {
                [key: string]: components['schemas']['def-0'];
              };
            };
            variables?: {
              [key: string]: {
                /** @description A value of the declared type. Password variables take no default. */
                default?: string | number | boolean;
                description?: string;
                type: 'string' | 'number' | 'boolean' | 'password';
              };
            };
          };
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** Format: date-time */
              createdAt: string;
              id: string;
              name: string;
              namespaceId: string;
              /** @description Reusable partial Agent launch settings. Scalar values may use {{ vars.name }}. Admission validates template syntax and credential boundaries. Ordinary creation APIs validate concrete launch settings. */
              template: {
                agent?: {
                  backendId?: components['schemas']['def-0'];
                  executionMode?: components['schemas']['def-0'];
                  harnessAuth?: components['schemas']['def-0'];
                  initialWorkspaceFiles?: {
                    'AGENTS.md'?: string;
                    'IDENTITY.md'?: string;
                    'SOUL.md'?: string;
                    'USER.md'?: string;
                  };
                  name?: components['schemas']['def-0'];
                  pluginApprovers?: components['schemas']['def-0'];
                  plugins?: components['schemas']['def-0'];
                  repositoryAccess?: components['schemas']['def-0'];
                  repositoryBindings?: components['schemas']['def-0'];
                };
                configuration?: {
                  /** @description Namespace-owned Secret bindings. Reference fields may use {{ vars.name }}. */
                  secretBindings?: {
                    [key: string]: components['schemas']['def-0'];
                  };
                  /** @description A native OpenClaw configuration document. */
                  values?: {
                    [key: string]: components['schemas']['def-0'];
                  };
                };
                variables?: {
                  [key: string]: {
                    /** @description A value of the declared type. Password variables take no default. */
                    default?: string | number | boolean;
                    description?: string;
                    type: 'string' | 'number' | 'boolean' | 'password';
                  };
                };
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listSecrets: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              id: string;
              name: string;
              namespaceId: string;
              /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
              ref: {
                id: string;
                /** @constant */
                kind: 'secret';
                namespaceId: string;
              };
            }[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  createSecret: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          name: string;
          /** @description Protected Secret value. It must be nonempty UTF-8 without NUL; OCC accepts at most 65,536 UTF-8 bytes and still enforces the route request body limit. */
          value: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-12'];
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getSecret: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        secretId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              /** @description What the selected IAM Driver allows you to do to this Secret now. Checking it records no authorization denial. Returned by the exact Secret read only. */
              callerPermissions: {
                /** @description Whether the selected IAM Driver allows you to delete this Secret now (Secret delete). Advisory only: current references, lifecycle state or a later authorization decision can still prevent the operation. */
                delete: boolean;
                /** @description Whether the selected IAM Driver allows you to replace this Secret's value now (Secret update). Advisory only: lifecycle state or a later authorization decision can still prevent the operation. */
                update: boolean;
              };
              /** @description Current references that block deletion of the Secret. Returned by the exact Secret read only. */
              consumers: {
                /** @description Agents that you can read. Each Agent has a Secret reference in its saved settings, selected Agent revision, or pending deployment. Deploy each Agent again to use a rotated value. */
                agents: string[];
                /** @description Readable Configurations whose `secretBindings` reference the Secret. */
                configurations: string[];
                /** @description Readable credential sources that hold the Secret. */
                credentialSources: string[];
                /** @description Work IDs of queued or running Agent provisioning requests that reference the Secret, listed only for the actor that started them. */
                provisioningRequests: string[];
                /** @description `true` when the Secret has more than 50 references; only the first 50, ordered by kind and ID, are examined. */
                truncated: boolean;
                /** @description Examined references to resources the caller may not read. They are counted, never named. */
                unreadable: number;
              };
              id: string;
              name: string;
              namespaceId: string;
              /** @description Exact OCC Secret reference. Shape: `{ "kind": "secret", "namespaceId": "ns_...", "id": "sec_..." }`. */
              ref: {
                id: string;
                /** @constant */
                kind: 'secret';
                namespaceId: string;
              };
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  deleteSecret: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        secretId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  updateSecret: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        secretId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          /** @description Protected Secret value. It must be nonempty UTF-8 without NUL; OCC accepts at most 65,536 UTF-8 bytes and still enforces the route request body limit. */
          value: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-12'];
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  listServiceAccounts: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              credential?: {
                kind: 'api_key' | 'access_token' | 'oauth_access_token';
              };
              id: string;
              name: string;
              namespaceId: string;
            }[];
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  createServiceAccount: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          name: string;
        };
      };
    };
    responses: {
      /** @description Default Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              credential?: {
                kind: 'api_key' | 'access_token' | 'oauth_access_token';
              };
              id: string;
              name: string;
              namespaceId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getServiceAccount: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        serviceAccountId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              credential?: {
                kind: 'api_key' | 'access_token' | 'oauth_access_token';
              };
              id: string;
              name: string;
              namespaceId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  deleteServiceAccount: {
    parameters: {
      query?: {
        /** @description `true` deletes an account whose issued access token no ChatGPT Backend can revoke, and leaves the token for a ChatGPT workspace administrator to revoke at the provider. With a ChatGPT Backend configured it is ignored and the token is revoked as usual. */
        force?: 'true' | 'false';
      };
      header?: never;
      path: {
        namespaceId: string;
        serviceAccountId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description A forced deletion removed the account and its credential Secret but could not revoke its issued access token. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              backendId?: string;
              id: string;
              namespaceId: string;
              /**
               * @description The account's issued access token was not revoked: no ChatGPT Backend can revoke it. Revoke it at the provider; the audit event names its Backend and credential ID.
               * @constant
               */
              revocation: 'skipped';
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  updateServiceAccountCredential: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        serviceAccountId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': {
          kind: 'api_key' | 'oauth_access_token';
          secretRef: {
            key: string;
            name: string;
          };
        };
      };
    };
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              credential?: {
                kind: 'api_key' | 'access_token' | 'oauth_access_token';
              };
              id: string;
              name: string;
              namespaceId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  createServiceAccountCredential: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        namespaceId: string;
        serviceAccountId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': Record<string, never>;
      };
    };
    responses: {
      /** @description Default Response */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              credential?: {
                kind: 'api_key' | 'access_token' | 'oauth_access_token';
              };
              id: string;
              name: string;
              namespaceId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      409: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      413: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  resolveAgentNativeAdminReturn: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        agentKey: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              agentId: string;
              namespaceId: string;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Invalid Agent key */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Too many requests; wait for Retry-After */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Service Unavailable */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
  getObservability: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Default Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: {
              url: string | null;
            };
            meta: {
              requestId: string;
            };
          };
        };
      };
      /** @description Default Response */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
      /** @description Default Response */
      503: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['def-7'];
        };
      };
    };
  };
}
