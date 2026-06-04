# PROPERTY OPERATING SYSTEM

# MASTER MVP SPRINT BACKLOG

Version: 001

Status: Active

---

## PURPOSE

Defines the first build backlog for the Property Operating System MVP.

This section converts architecture into sprint-ready development work.

---

# MVP GOAL

Build the smallest useful version of the Property Operating System that allows a small landlord or property manager to manage:

- Properties
- Units
- Tenants
- Leases
- Documents
- Work Orders
- Inspections
- Basic Financial Records
- Basic Dashboard

---

# MVP PRINCIPLES

## Principle 1

Build core records first.

## Principle 2

Build workflows second.

## Principle 3

Build reports after real data exists.

## Principle 4

Do not build enterprise features before core landlord operations work.

---

# SPRINT STRUCTURE

Recommended sprint length:

2 weeks

Each sprint includes:

- Planning
- Development
- Testing
- Review
- Documentation

---

# EPIC 001: PROJECT SETUP

## Goal

Create the runnable application foundation.

## Stories

### Story 001

Create monorepo structure.

Acceptance:

- apps folder exists
- packages folder exists
- docs folder exists
- project runs locally

### Story 002

Create frontend shell.

Acceptance:

- web app starts
- dashboard route exists
- layout exists

### Story 003

Create backend shell.

Acceptance:

- API starts
- health check endpoint works
- environment variables load

### Story 004

Connect PostgreSQL.

Acceptance:

- database connection works
- migration system works

---

# EPIC 002: AUTHENTICATION

## Goal

Allow secure user login.

## Stories

### Story 001

User login.

Acceptance:

- user enters credentials
- system authenticates user
- session created

### Story 002

User logout.

Acceptance:

- session ends
- protected routes blocked

### Story 003

Password reset.

Acceptance:

- user can request reset
- reset flow works

---

# EPIC 003: ORGANIZATIONS

## Goal

Create root account structure.

## Stories

### Story 001

Create organization.

Acceptance:

- organization record created
- owner assigned
- audit log created

### Story 002

Edit organization.

Acceptance:

- allowed user can edit organization
- unauthorized user blocked

---

# EPIC 004: PEOPLE AND ROLES

## Goal

Create human identity and role system.

## Stories

### Story 001

Create person record.

Acceptance:

- person saved
- contact data stored

### Story 002

Assign role.

Acceptance:

- role assigned
- permissions update

### Story 003

View people list.

Acceptance:

- people list loads
- filtered by organization

---

# EPIC 005: PROPERTY MANAGEMENT

## Goal

Create and manage properties.

## Stories

### Story 001

Create property.

Acceptance:

- property saved
- organization linked
- audit log created

### Story 002

View property list.

Acceptance:

- properties display
- search works
- filters work

### Story 003

View property detail.

Acceptance:

- property summary loads
- related units display

---

# EPIC 006: UNIT MANAGEMENT

## Goal

Create and manage units.

## Stories

### Story 001

Create unit.

Acceptance:

- unit saved
- linked to property

### Story 002

Update unit status.

Acceptance:

- occupancy status changes
- event created

### Story 003

View unit detail.

Acceptance:

- unit info loads
- lease and tenant context displays

---

# EPIC 007: TENANT MANAGEMENT

## Goal

Create tenant records.

## Stories

### Story 001

Create tenant.

Acceptance:

- person created
- tenant role assigned

### Story 002

View tenant profile.

Acceptance:

- contact info visible
- lease history visible

---

# EPIC 008: LEASE MANAGEMENT

## Goal

Create basic lease records.

## Stories

### Story 001

Create lease.

Acceptance:

- lease saved
- tenant linked
- unit linked

### Story 002

Activate lease.

Acceptance:

- lease status active
- unit status occupied
- event created

### Story 003

View lease workspace.

Acceptance:

- terms visible
- documents visible
- tenant visible

---

# EPIC 009: DOCUMENT MANAGEMENT

## Goal

Upload and link documents.

## Stories

### Story 001

Upload document.

Acceptance:

- file stored
- metadata saved

### Story 002

Link document to record.

Acceptance:

- document link created
- related record shows document

### Story 003

View document vault.

Acceptance:

- documents searchable
- filters work

---

# EPIC 010: MAINTENANCE

## Goal

Create and track work orders.

## Stories

### Story 001

Create work order.

Acceptance:

- work order saved
- linked to property or unit

### Story 002

Update work order status.

Acceptance:

- status changes
- event created

### Story 003

Assign vendor placeholder.

Acceptance:

- assigned vendor field saved
- assignment event created

### Story 004

Close work order.

Acceptance:

- completion date saved
- status closed
- audit log created

---

# EPIC 011: INSPECTIONS

## Goal

Create basic inspection records.

## Stories

### Story 001

Create inspection.

Acceptance:

- inspection saved
- linked to property or unit

### Story 002

Add finding.

Acceptance:

- finding saved
- severity selected

### Story 003

Complete inspection.

Acceptance:

- status completed
- findings count updated

---

# EPIC 012: BASIC FINANCIALS

## Goal

Track simple money movement.

## Stories

### Story 001

Record rent payment.

Acceptance:

- transaction saved
- lease linked
- unit linked

### Story 002

Record expense.

Acceptance:

- expense saved
- property linked

### Story 003

View financial dashboard.

Acceptance:

- totals calculate
- transactions display

---

# EPIC 013: DASHBOARD

## Goal

Create basic owner dashboard.

## Widgets

- Property Count
- Unit Count
- Occupied Units
- Vacant Units
- Open Work Orders
- Rent Collected This Month

## Acceptance

Dashboard loads accurate data.

---

# EPIC 014: SEARCH

## Goal

Create MVP search.

## Search Targets

- Properties
- Units
- People
- Leases
- Work Orders
- Documents

## Acceptance

Search returns permitted records only.

---

# EPIC 015: NOTIFICATIONS

## Goal

Create basic in-app notifications.

## Stories

- Work order created
- Lease activated
- Document uploaded
- Inspection completed

## Acceptance

Notification is created and visible to allowed users.

---

# EPIC 016: PERMISSIONS

## Goal

Enforce role-based access.

## Stories

- Owner access
- Manager access
- Tenant access
- Vendor limited access

## Acceptance

Allowed actions succeed.

Blocked actions fail.

---

# EPIC 017: AUDIT LOGGING

## Goal

Record high-risk changes.

## Audit Events

- Property created
- Unit created
- Lease activated
- Work order closed
- Payment recorded
- Document deleted
- Permission changed

## Acceptance

Audit log exists for each required event.

---

# EPIC 018: MVP REPORTS

## Reports

- Property Summary
- Unit Summary
- Rent Roll
- Open Work Orders
- Lease Expiration Report

## Acceptance

Reports load and export basic data.

---

# 90-DAY MVP TARGET

## First 30 Days

- Project setup
- Auth
- Organization
- Property
- Unit

## First 60 Days

- People
- Roles
- Tenant
- Lease
- Documents
- Work Orders

## First 90 Days

- Inspections
- Financials
- Dashboard
- Search
- Notifications
- Reports
- Testing
- Deployment

---

# MVP OUT OF SCOPE

Not included:

- Full accounting
- Advanced AI
- Multi-state compliance automation
- Native mobile app
- Vendor marketplace
- Enterprise reporting
- Advanced integrations

---

# PHASE 62 OUTCOME

Creates the first sprint-ready development backlog for building the MVP.

