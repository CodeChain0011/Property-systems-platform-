# PROPERTY OPERATING SYSTEM

# MASTER API ARCHITECTURE

Version: 001

Status: Active

---

## PURPOSE

Defines the API architecture for the Property Operating System.

The API connects:

- Web application
- Mobile application
- PostgreSQL
- Neo4j
- Object storage
- AI services
- Notification services
- External integrations

---

# API PRINCIPLES

## Principle 1

APIs follow business domains and canonical entities.

## Principle 2

Authentication proves identity.

Authorization controls access.

## Principle 3

Workflow actions should be explicit.

## Principle 4

Every sensitive action must be auditable.

---

# CORE RESOURCE ENDPOINTS

## Organizations

GET /organizations

POST /organizations

GET /organizations/:organization_id

PATCH /organizations/:organization_id

---

## Portfolios

GET /portfolios

POST /portfolios

GET /portfolios/:portfolio_id

PATCH /portfolios/:portfolio_id

---

## Properties

GET /properties

POST /properties

GET /properties/:property_id

PATCH /properties/:property_id

DELETE /properties/:property_id

---

## Buildings

GET /buildings

POST /buildings

GET /buildings/:building_id

PATCH /buildings/:building_id

---

## Units

GET /units

POST /units

GET /units/:unit_id

PATCH /units/:unit_id

---

## People

GET /people

POST /people

GET /people/:person_id

PATCH /people/:person_id

---

## Roles

GET /roles

POST /roles

PATCH /roles/:role_id

---

## Leases

GET /leases

POST /leases

GET /leases/:lease_id

PATCH /leases/:lease_id

POST /leases/:lease_id/activate

POST /leases/:lease_id/renew

POST /leases/:lease_id/terminate

---

## Applications

GET /applications

POST /applications

GET /applications/:application_id

PATCH /applications/:application_id

POST /applications/:application_id/approve

POST /applications/:application_id/deny

---

## Assets

GET /assets

POST /assets

GET /assets/:asset_id

PATCH /assets/:asset_id

---

## Work Orders

GET /work-orders

POST /work-orders

GET /work-orders/:work_order_id

PATCH /work-orders/:work_order_id

POST /work-orders/:work_order_id/assign

POST /work-orders/:work_order_id/complete

POST /work-orders/:work_order_id/close

---

## Inspections

GET /inspections

POST /inspections

GET /inspections/:inspection_id

PATCH /inspections/:inspection_id

POST /inspections/:inspection_id/complete

---

## Documents

GET /documents

POST /documents

GET /documents/:document_id

POST /documents/:document_id/link

DELETE /documents/:document_id

---

## Financial Transactions

GET /financial-transactions

POST /financial-transactions

GET /financial-transactions/:transaction_id

PATCH /financial-transactions/:transaction_id

---

## Communications

GET /communications

POST /communications

GET /communications/:communication_id

---

## Events

GET /events

GET /events/:event_id

---

## Audit Logs

GET /audit-logs

GET /audit-logs/:audit_id

---

# API PATTERNS

## Standard CRUD

GET list

GET detail

POST create

PATCH update

DELETE archive

## Workflow Actions

POST /resource/:id/action

Examples:

POST /work-orders/:id/assign

POST /leases/:id/activate

POST /applications/:id/approve

---

# AUTHENTICATION

## Required

- Login
- Logout
- Session refresh
- Password reset
- MFA support

## Endpoints

POST /auth/login

POST /auth/logout

POST /auth/refresh

POST /auth/password-reset

---

# AUTHORIZATION

Authorization checks:

- Organization scope
- Role
- Permission
- Property scope
- Unit scope
- Document sensitivity
- Financial visibility

---

# ERROR STRUCTURE

Errors should include:

- error_code
- message
- details
- request_id
- timestamp

---

# PAGINATION

List endpoints should support:

- limit
- offset
- cursor
- sort
- filter

---

# AUDIT REQUIREMENTS

Audit required for:

- Lease changes
- Payment changes
- Permission changes
- Document deletion
- Notice generation
- Security deposit actions
- User role changes

---

# API MVP SCOPE

Included:

- Auth
- Organizations
- Properties
- Units
- People
- Roles
- Leases
- Work Orders
- Documents
- Financial Transactions
- Dashboard Summary

Deferred:

- Advanced AI APIs
- Enterprise reporting APIs
- Multi-region APIs
- Public developer API

