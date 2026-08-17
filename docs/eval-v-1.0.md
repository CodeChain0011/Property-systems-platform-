# Codebase Evaluation v 1.0

## Executive Summary

This repository is currently a **hybrid architecture workbook + early runnable MVP foundation** for a Property Operating System. The README describes the repository primarily as an architecture workbook and development blueprint, and the current implementation appears to be in a foundation/MVP scaffold stage.

The runnable codebase has three main parts:

- **NestJS API** under `apps/api`, with modules/controllers/services for auth, organizations, properties, work orders, leases, health checks, and Prisma access.
- **Next.js web app** under `apps/web`, with a dashboard shell, sidebar navigation, and static MVP dashboard data.
- **Prisma database package** under `packages/database`, defining the initial property-management domain schema.

Overall, the project is in a reasonable **MVP scaffold stage**, but it is not yet production-ready. The strongest areas are domain documentation, basic Prisma modeling, and a working web build. The largest gaps are API dependency installation/testability, consistent auth enforcement, input validation, multi-tenant data isolation, migrations/seed strategy in code, and CI-style project orchestration.

---

## Architecture Observations

### 1. Repository Maturity

The repo is heavily documentation-driven and appears to have evolved from a blueprint-first process. That is a good fit for early product definition, but the runnable implementation is still thin relative to the breadth of docs. The live code currently covers core CRUD-style API surfaces and a static dashboard rather than the full documented system.

### 2. API Structure

The API is a NestJS app with a straightforward module composition:

- `PrismaModule`
- `AuthModule`
- `OrganizationsModule`
- direct registration of health, property, work order, and lease controllers/services in `AppModule`

This is clear and easy to follow, but it is somewhat inconsistent: organizations have their own module, while properties, work orders, leases, health, and database services are wired directly in `AppModule`. For maintainability, each domain should eventually have its own module.

#### Existing API surfaces

The API currently exposes:

- Organizations endpoints, protected at the controller level by `JwtAuthGuard`.
- Permission-gated organization updates using `PermissionGuard` and `RequirePermission('full_access')`.
- Properties list, summary, detail, and create endpoints.
- Work order list, summary, detail, and create endpoints.
- Lease list, expiring lease, detail, and create endpoints.

The key concern is that **only organizations appear controller-protected by JWT**, while properties, work orders, and leases accept `organizationId` query parameters directly. That creates a likely multi-tenant data isolation risk unless there is another enforcement layer not visible in these controllers.

---

## Security and Auth Review

### Strengths

The auth implementation includes several good foundations:

- Password verification uses bcrypt.
- Access tokens include subject, organization, role, permission group, and JWT ID.
- Refresh tokens are generated with cryptographic randomness and stored as SHA-256 hashes, not plaintext.
- Refresh tokens are rotated: the old record is revoked before a new refresh token is created.

### Risks / Gaps

#### Hardcoded development JWT fallback

`AuthModule` and JWT strategy fall back to `dev-secret-change-in-production` if `JWT_SECRET` is missing.

That is acceptable for local development only, but production startup should fail if `JWT_SECRET` is absent. Otherwise, a misconfigured deployment could silently run with a known secret.

#### Inconsistent endpoint protection

Organizations are protected with `JwtAuthGuard`. However, properties, work orders, and leases controllers shown during evaluation do not use `JwtAuthGuard`.

That means high-value property, tenant, lease, and work-order data may be exposed unless protection is applied globally elsewhere. No global guard registration was identified in `AppModule` during the evaluation.

#### Tenant isolation is caller-controlled

Several endpoints take `organizationId` from the query string.

For a multi-tenant property platform, organization scope should generally come from the authenticated user/session context, not from a user-controlled query parameter.

---

## Database / Prisma Review

### Strengths

The Prisma schema has a clean starting domain model:

- Organizations connect to people, properties, units, roles, and leases.
- People support organization membership, roles, lease linkage, password hash, and refresh tokens.
- Refresh tokens are hashed and uniquely stored with expiry/revocation fields.
- Properties, units, leases, and work orders are modeled with useful MVP fields.
- Audit logs exist as a generic event trail foundation.

### Concerns

#### Missing important indexes and uniqueness constraints

For expected query patterns, the schema likely needs more indexes and constraints, such as:

- `Person.email`
- `Role.organizationId/personId/roleType`
- `Property.organizationId`
- `Unit.organizationId/propertyId`
- `Lease.organizationId/propertyId/unitId/primaryTenantId`
- `WorkOrder.organizationId/propertyId/unitId/status/priority`

The evaluated schema had an index on `RefreshToken.personId`, but organization-scoped operational queries likely need additional database support.

#### WorkOrder lacks explicit organization relation

`WorkOrder` has `organizationId`, but unlike `Property`, `Unit`, and `Lease`, it did not appear to define an `Organization` relation during evaluation.

That may be intentional for MVP simplicity, but it weakens relational integrity for organization-scoped work orders.

#### No visible migrations in evaluation

The schema validated successfully, but migration files were not surfaced during the evaluation. For a production path, migrations should be committed and reviewed alongside schema changes.

---

## Frontend Review

### Strengths

The web app builds successfully with Next.js. The dashboard contains a polished static MVP overview with KPIs for properties, units, occupancy, revenue, and work orders.

The dashboard layout renders a page header, actions, KPI grid, open work orders, and activity sections.

The sidebar provides a clear navigation shell for dashboard, properties, tenants, maintenance, documents, and settings.

### Gaps

#### Static data only

The dashboard data appears hardcoded in the page component.

That is fine for visual scaffolding, but the next step should be wiring API-backed data fetching and loading/error/empty states.

#### Navigation routes are partially ahead of implemented pages

The sidebar links to documents and settings. The evaluated build output showed routes for `/`, `/maintenance`, `/properties`, and `/tenants`, so some sidebar destinations may currently resolve to 404.

---

## Testing / Build Health

### What passed

- The **web app production build passed**.
- The **Prisma schema validation passed**.

### What failed / was blocked

- The API test command failed because `jest` was not found in the API workspace. That indicates dependencies are not installed there, or local `node_modules` is incomplete.

### Git state note

At evaluation time, there were pre-existing tracked deletions under `packages/database/node_modules`:

- `packages/database/node_modules/.cache/jiti/database-prisma.config.4ffae141.mjs`
- `packages/database/node_modules/@prisma/engines/schema-engine-debian-openssl-1.1.x`

Those were not part of the source evaluation changes. Also, `node_modules` appears to be tracked or partially tracked, which is a repository hygiene issue worth fixing separately.

---

## Priority Recommendations

### P0 — Security / correctness

1. **Require auth on all sensitive API routes**
   - Add `JwtAuthGuard` to properties, leases, and work orders.
   - Prefer organization scoping from `req.user.organizationId`, not `organizationId` query params.

2. **Fail production startup without `JWT_SECRET`**
   - Keep the dev fallback only for non-production or local test environments.

3. **Add DTO validation**
   - Controllers currently accept raw body types inferred from service signatures.
   - Add DTO classes and global validation pipes.

### P1 — API structure and data model

4. **Create modules for each API domain**
   - `PropertiesModule`
   - `WorkOrdersModule`
   - `LeasesModule`
   - `HealthModule`

5. **Add database indexes and uniqueness constraints**
   - Especially for organization-scoped queries and email/auth lookups.

6. **Add missing relational integrity**
   - Consider connecting `WorkOrder.organizationId` to `Organization`.

### P2 — Developer experience

7. **Stop tracking `node_modules`**
   - Ensure `node_modules/` is ignored globally and remove tracked artifacts from Git.

8. **Add root workspace orchestration**
   - A root `package.json` with npm/pnpm workspaces would make `install`, `build`, `test`, and `lint` easier.

9. **Add CI checks**
   - API test/build
   - Web build/lint
   - Prisma validate
   - Formatting

### P3 — Product maturity

10. **Wire frontend to backend**
    - Replace hardcoded dashboard data with API calls and typed contracts.

11. **Add seed data**
    - The static frontend data is useful; mirror that through database seeds so API + UI can exercise the same demo scenario.

12. **Add end-to-end happy paths**
    - Login
    - View dashboard
    - Create property
    - Create unit
    - Create lease
    - Create work order

---

## Commands Used During Evaluation

### Testing / Checks

- `cd apps/api && npm test -- --runInBand` — failed because `jest` was not found in the API workspace.
- `cd apps/web && npm run build` — passed.
- `cd packages/database && npm run prisma:validate` — passed.
- `git status --short` — passed.

### Inspection Commands

- `pwd && rg --files -g 'AGENTS.md' -g '!node_modules' -g '!vendor'`
- `cat apps/web/AGENTS.md`
- `rg --files -g '!node_modules' -g '!vendor' -g '!dist' -g '!build'`
- `find .. -name AGENTS.md -print`
- `find . -maxdepth 2 -type f | sed 's#^./##' | sort | sed -n '1,200p'`
- `find . -maxdepth 4 \( -name package.json -o -name pnpm-lock.yaml -o -name yarn.lock -o -name package-lock.json -o -name turbo.json -o -name tsconfig.json \) -print`
- `sed -n '1,220p' README.md`
- `cat apps/api/package.json apps/web/package.json packages/database/package.json`
- `find apps packages -maxdepth 4 -type f \( -name '*.ts' -o -name '*.tsx' -o -name '*.js' -o -name '*.prisma' \) -not -path '*/node_modules/*' | sort`
- `nl -ba README.md`
- `nl -ba apps/api/src/app.module.ts`
- `nl -ba apps/api/src/auth/auth.module.ts`
- `nl -ba apps/api/src/auth/auth.service.ts`
- `nl -ba apps/api/src/organizations/organizations.controller.ts`
- `nl -ba apps/api/src/leases/leases.controller.ts`
- `nl -ba apps/api/src/properties/properties.controller.ts`
- `nl -ba apps/api/src/work-orders/work-orders.controller.ts`
- `nl -ba packages/database/prisma/schema.prisma`
- `nl -ba apps/web/src/app/page.tsx`
- `nl -ba apps/web/src/components/Sidebar.tsx`
