# PROPERTY OPERATING SYSTEM

# SECURITY 006: AUTHENTICATION AND AUTHORIZATION FLOW

Version: 001

Status: Active

---

## PURPOSE

Defines the complete authentication and authorization flow for the platform.
Covers JWT issuance, refresh token rotation, session lifecycle, permission
enforcement at the API layer, and role-to-scope mapping.

This document extends SECURITY-002 (Role-Based Access Control) with
implementation-level detail.

---

# AUTHENTICATION OVERVIEW

The platform uses stateless JWT-based authentication with refresh token rotation.

## Token Types

### Access Token

- Format: JWT (JSON Web Token), signed with RS256
- Lifetime: 15 minutes
- Contains: subject (person_id), organization_id, role_type, permission_group, issued_at, expires_at
- Transmitted: `Authorization: Bearer <access_token>` header on every API request
- Storage (client): memory only — never localStorage, never a cookie accessible to JS

### Refresh Token

- Format: opaque random string (256-bit entropy), stored as a hash in the database
- Lifetime: 30 days, sliding (reset on each use)
- Transmitted: HttpOnly, Secure, SameSite=Strict cookie
- Storage (server): hashed value stored in `refresh_tokens` table alongside person_id, expiry, device_fingerprint
- Rotation: each refresh call invalidates the old token and issues a new one

---

# AUTHENTICATION FLOWS

## Flow 1: Login

```
Client                          API
  |                              |
  |  POST /auth/login            |
  |  { email, password }         |
  |----------------------------->|
  |                              | 1. Look up person by email
  |                              | 2. Verify password (bcrypt compare)
  |                              | 3. Load person's active roles for org
  |                              | 4. Sign access token (RS256, 15m TTL)
  |                              | 5. Generate refresh token, store hash in DB
  |                              | 6. Set refresh token as HttpOnly cookie
  |                              |
  |  200 OK                      |
  |  { access_token, person_id,  |
  |    role_type, expires_in }   |
  |<-----------------------------|
```

## Flow 2: Authenticated Request

```
Client                          API
  |                              |
  |  GET /leases                 |
  |  Authorization: Bearer <AT>  |
  |----------------------------->|
  |                              | 1. Verify JWT signature (RS256 public key)
  |                              | 2. Check exp claim — reject if expired
  |                              | 3. Extract organization_id, role_type, permission_group
  |                              | 4. Run permission guard for the endpoint
  |                              | 5. Scope query to organization_id from token
  |                              |
  |  200 OK { data: [...] }      |
  |<-----------------------------|
```

## Flow 3: Access Token Refresh

```
Client                          API
  |                              |
  |  POST /auth/refresh          |
  |  (HttpOnly cookie sent auto) |
  |----------------------------->|
  |                              | 1. Read refresh token from cookie
  |                              | 2. Hash it, look up in refresh_tokens table
  |                              | 3. Verify not expired, not revoked
  |                              | 4. Invalidate old refresh token record
  |                              | 5. Issue new access token (15m TTL)
  |                              | 6. Issue new refresh token, store hash
  |                              | 7. Set new refresh cookie
  |                              |
  |  200 OK { access_token, ... }|
  |<-----------------------------|
```

If the refresh token is expired or not found, return `401 Unauthorized`.
The client must send the user back to the login screen.

## Flow 4: Logout

```
Client                          API
  |                              |
  |  POST /auth/logout           |
  |  Authorization: Bearer <AT>  |
  |----------------------------->|
  |                              | 1. Extract person_id from access token
  |                              | 2. Delete all refresh tokens for person + device
  |                              | 3. Clear HttpOnly cookie (set Max-Age=0)
  |                              |
  |  204 No Content              |
  |<-----------------------------|
```

The client discards the in-memory access token.

---

# JWT PAYLOAD STRUCTURE

## Access Token Claims

```json
{
  "sub":              "person-uuid",
  "org":              "organization-uuid",
  "role":             "property_manager",
  "perm":             "property_operations",
  "iat":              1717200000,
  "exp":              1717200900,
  "jti":              "unique-token-id"
}
```

| Claim | Description |
|-------|-------------|
| sub   | Person UUID (primary identity) |
| org   | Organization UUID (all queries scoped to this) |
| role  | RoleType enum value from Prisma schema |
| perm  | Permission group for coarse-grained guards |
| iat   | Issued at (Unix timestamp) |
| exp   | Expires at (iat + 900 seconds) |
| jti   | JWT ID — unique per token, used for replay detection |

---

# PERMISSION GROUPS AND ROLE MAPPING

Each role maps to a permission group. Guards check the permission group,
not the role directly, to allow future role consolidation without changing guard code.

| Role | Permission Group | Description |
|------|-----------------|-------------|
| owner | full_access | All operations across the organization |
| administrator | full_access | Same as owner for operational purposes |
| property_manager | property_operations | Manage properties, units, leases, work orders, people |
| leasing_agent | leasing_operations | Manage applications, leases, prospects; read-only on financials |
| maintenance_coordinator | maintenance_operations | Manage work orders; read-only on units and properties |
| tenant | tenant_portal | Own lease, own payments, own documents, own maintenance requests |
| vendor | vendor_portal | Assigned work orders only; no tenant PII |
| inspector | inspection_operations | Create and update inspections; read-only on properties and units |
| accountant | financial_operations | Full access to financials; read-only on everything else |
| attorney | legal_operations | Legal documents and notices only, when explicitly assigned |

---

# PERMISSION ENFORCEMENT AT THE API LAYER

## Guard Hierarchy

Every protected route passes through three guards in order:

### 1. Authentication Guard

Verifies the JWT signature and expiry.
Attaches the decoded payload to the request context.
Returns `401 Unauthorized` if token is missing, invalid, or expired.

### 2. Organization Scope Guard

Confirms the `org` claim in the token matches the organization implied by the
requested resource (e.g., `organizationId` on the entity being accessed).
Returns `403 Forbidden` if there is a cross-organization access attempt.

### 3. Permission Guard

Checks whether the caller's `perm` claim satisfies the permission required
by the endpoint decorator.

```typescript
@RequirePermission('property_operations')
@Get('/properties')
findAll() { ... }
```

Returns `403 Forbidden` if the permission group does not match.

## Resource Ownership Guard (tenant and vendor roles)

For tenant_portal and vendor_portal roles, an additional ownership check
runs after the permission guard:

- Tenant: request must reference a lease, unit, or work order that belongs to that person
- Vendor: request must reference a work order assigned to that person

Returns `403 Forbidden` if the resource does not belong to the caller.

---

# MULTI-ROLE HANDLING

A person may hold more than one role within an organization (e.g., an owner
who is also a tenant in one of their own properties). In this case:

- The login response returns all active roles for the person in the organization
- The client selects an active role for the session
- The selected role's permission group is embedded in the issued access token
- The person can switch roles by calling `POST /auth/switch-role` with the target role_id
- Switching role issues a new access token with the new permission group

---

# TOKEN SECURITY REQUIREMENTS

## Signing Keys

- Algorithm: RS256 (asymmetric)
- Private key: stored in environment variable `JWT_PRIVATE_KEY`, never committed to source control
- Public key: stored in environment variable `JWT_PUBLIC_KEY`, used by all services that need to verify tokens
- Key rotation: replace keys and re-issue tokens at most every 90 days or immediately on suspected compromise

## Refresh Token Storage

- Store only the SHA-256 hash of the refresh token, never the raw value
- Index on `(person_id, device_fingerprint)` for fast lookup and revocation
- Include `created_at` and `last_used_at` for anomaly detection

## Replay Prevention

- The `jti` (JWT ID) claim is unique per access token
- For sensitive actions (payment, document deletion, permission change), check `jti`
  against a short-lived Redis blocklist to prevent replay within the 15-minute window

## Rate Limiting

- `POST /auth/login`: 5 attempts per email per 15-minute window
- `POST /auth/refresh`: 30 requests per device per hour
- Return `429 Too Many Requests` with `Retry-After` header on breach

---

# AUTH ENDPOINTS

```
POST /auth/login
  Body: { email, password }
  Response: { access_token, person_id, role_type, expires_in, available_roles[] }

POST /auth/refresh
  Cookie: refresh_token (HttpOnly)
  Response: { access_token, expires_in }

POST /auth/logout
  Header: Authorization: Bearer <access_token>
  Response: 204 No Content

POST /auth/switch-role
  Header: Authorization: Bearer <access_token>
  Body: { role_id }
  Response: { access_token, role_type, expires_in }

GET /auth/me
  Header: Authorization: Bearer <access_token>
  Response: { person_id, display_name, email, org_id, role_type, perm }
```

---

# ERROR RESPONSES

| Scenario | HTTP Status | error_code |
|----------|-------------|------------|
| Missing or malformed token | 401 | AUTH_TOKEN_MISSING |
| Token signature invalid | 401 | AUTH_TOKEN_INVALID |
| Token expired | 401 | AUTH_TOKEN_EXPIRED |
| Refresh token missing | 401 | AUTH_REFRESH_MISSING |
| Refresh token expired or revoked | 401 | AUTH_REFRESH_EXPIRED |
| Cross-org access attempt | 403 | AUTH_ORG_MISMATCH |
| Insufficient permission group | 403 | AUTH_PERMISSION_DENIED |
| Resource ownership violation | 403 | AUTH_RESOURCE_FORBIDDEN |
| Rate limit exceeded | 429 | AUTH_RATE_LIMITED |

---

# PHASE 17 AUTH OUTCOME

This document defines:
- Two-token authentication model (access + refresh) with HttpOnly cookie delivery
- JWT payload structure with org-scoped identity
- Role-to-permission-group mapping for all 10 platform roles
- Three-layer guard hierarchy (auth → org scope → permission → ownership)
- Multi-role session switching
- Key management, replay prevention, and rate limiting requirements
- All auth endpoints and their error codes
