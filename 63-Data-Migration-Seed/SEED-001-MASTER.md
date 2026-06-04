# PROPERTY OPERATING SYSTEM

# SEED 001: MASTER SEED DATA SPECIFICATION

Version: 001

Status: Active

---

## PURPOSE

Defines the canonical seed data for local development, integration testing,
and staging environments. Seed data must represent a realistic but fictional
property portfolio so all platform features can be exercised end-to-end.

Seed data is loaded after migrations complete and before any manual testing begins.

---

# SEED PRINCIPLES

## Principle 1

All seed records use deterministic UUIDs so tests and scripts can reference
them by a known ID without a database lookup.

## Principle 2

Seed data covers the full lifecycle for each domain — not just happy-path records.
Include vacant units, expired leases, open work orders, and inactive people.

## Principle 3

Seed data must not use real names, addresses, phone numbers, or email addresses.
All data is fictional.

## Principle 4

Seed data is idempotent. Running the seed script twice should not create duplicate records.
Use upsert operations keyed on the deterministic ID.

---

# ORGANIZATION

## Organization 001

```
id:               org-seed-0001-0000-0000-000000000001
organizationName: Greenfield Property Group
legalName:        Greenfield Property Group LLC
organizationType: property_management_company
status:           active
```

---

# PEOPLE

All people belong to org-seed-0001.

## Person 001 — Owner / Administrator

```
id:          person-seed-0001-0000-000000000001
firstName:   Jordan
lastName:    Mercer
displayName: Jordan Mercer
email:       jordan.mercer@greenfieldpg.dev
phone:       555-100-0001
status:      active
```

## Person 002 — Property Manager

```
id:          person-seed-0001-0000-000000000002
firstName:   Alex
lastName:    Rivera
displayName: Alex Rivera
email:       alex.rivera@greenfieldpg.dev
phone:       555-100-0002
status:      active
```

## Person 003 — Tenant (active lease)

```
id:          person-seed-0001-0000-000000000003
firstName:   Morgan
lastName:    Chen
displayName: Morgan Chen
email:       morgan.chen@devmail.test
phone:       555-200-0003
status:      active
```

## Person 004 — Tenant (active lease, different property)

```
id:          person-seed-0001-0000-000000000004
firstName:   Priya
lastName:    Okafor
displayName: Priya Okafor
email:       priya.okafor@devmail.test
phone:       555-200-0004
status:      active
```

## Person 005 — Tenant (expired lease, inactive)

```
id:          person-seed-0001-0000-000000000005
firstName:   Sam
lastName:    Torres
displayName: Sam Torres
email:       sam.torres@devmail.test
phone:       555-200-0005
status:      inactive
```

## Person 006 — Vendor (plumbing)

```
id:          person-seed-0001-0000-000000000006
firstName:   Dana
lastName:    Walsh
displayName: Dana Walsh — Walsh Plumbing
email:       dana@walshplumbing.dev
phone:       555-300-0006
status:      active
```

## Person 007 — Vendor (electrical)

```
id:          person-seed-0001-0000-000000000007
firstName:   Casey
lastName:    Burns
displayName: Casey Burns — Burns Electric
email:       casey@burnselectric.dev
phone:       555-300-0007
status:      active
```

---

# ROLES

## Role 001 — Jordan Mercer as Owner

```
id:             role-seed-0001-0000-000000000001
organizationId: org-seed-0001
personId:       person-seed-0001 (Jordan Mercer)
roleType:       owner
permissionGroup: full_access
status:         active
```

## Role 002 — Alex Rivera as Property Manager

```
id:             role-seed-0001-0000-000000000002
organizationId: org-seed-0001
personId:       person-seed-0002 (Alex Rivera)
roleType:       property_manager
permissionGroup: property_operations
status:         active
```

## Role 003 — Morgan Chen as Tenant

```
id:             role-seed-0001-0000-000000000003
organizationId: org-seed-0001
personId:       person-seed-0003 (Morgan Chen)
roleType:       tenant
permissionGroup: tenant_portal
status:         active
```

## Role 004 — Priya Okafor as Tenant

```
id:             role-seed-0001-0000-000000000004
organizationId: org-seed-0001
personId:       person-seed-0004 (Priya Okafor)
roleType:       tenant
permissionGroup: tenant_portal
status:         active
```

## Role 005 — Dana Walsh as Vendor

```
id:             role-seed-0001-0000-000000000005
organizationId: org-seed-0001
personId:       person-seed-0006 (Dana Walsh)
roleType:       vendor
permissionGroup: vendor_portal
status:         active
```

## Role 006 — Casey Burns as Vendor

```
id:             role-seed-0001-0000-000000000006
organizationId: org-seed-0001
personId:       person-seed-0007 (Casey Burns)
roleType:       vendor
permissionGroup: vendor_portal
status:         active
```

---

# PROPERTIES

## Property 001 — Apartment Complex

```
id:            property-seed-0001-000000000001
organizationId: org-seed-0001
propertyName:  Maplewood Apartments
propertyType:  apartment
streetAddress: 100 Maplewood Dr
city:          Austin
county:        Travis
state:         TX
postalCode:    78701
country:       US
totalUnits:    6
status:        active
```

## Property 002 — Duplex

```
id:            property-seed-0001-000000000002
organizationId: org-seed-0001
propertyName:  Birchwood Duplex
propertyType:  duplex
streetAddress: 242 Birch Ave
city:          Austin
county:        Travis
state:         TX
postalCode:    78702
country:       US
totalUnits:    2
status:        active
```

## Property 003 — Single Family

```
id:            property-seed-0001-000000000003
organizationId: org-seed-0001
propertyName:  Cedar Ridge House
propertyType:  single_family
streetAddress: 9 Cedar Ridge Ln
city:          Austin
county:        Travis
state:         TX
postalCode:    78703
country:       US
totalUnits:    1
status:        active
```

---

# UNITS

## Units — Maplewood Apartments (Property 001)

### Unit 101

```
id:             unit-seed-prop01-0000-000000000101
organizationId: org-seed-0001
propertyId:     property-seed-0001 (Maplewood)
unitNumber:     101
unitType:       1BR
bedrooms:       1
bathrooms:      1.0
squareFeet:     720
marketRent:     1500.00
currentRent:    1450.00
occupancyStatus: occupied
status:         active
```

### Unit 102

```
id:             unit-seed-prop01-0000-000000000102
unitNumber:     102
unitType:       1BR
bedrooms:       1
bathrooms:      1.0
squareFeet:     720
marketRent:     1500.00
currentRent:    1500.00
occupancyStatus: occupied
status:         active
```

### Unit 103

```
id:             unit-seed-prop01-0000-000000000103
unitNumber:     103
unitType:       2BR
bedrooms:       2
bathrooms:      1.0
squareFeet:     980
marketRent:     1850.00
currentRent:    null
occupancyStatus: vacant
status:         active
```

### Unit 104

```
id:             unit-seed-prop01-0000-000000000104
unitNumber:     104
unitType:       2BR
bedrooms:       2
bathrooms:      2.0
squareFeet:     1050
marketRent:     1950.00
currentRent:    1900.00
occupancyStatus: occupied
status:         active
```

### Unit 105

```
id:             unit-seed-prop01-0000-000000000105
unitNumber:     105
unitType:       studio
bedrooms:       0
bathrooms:      1.0
squareFeet:     480
marketRent:     1100.00
currentRent:    1100.00
occupancyStatus: occupied
status:         active
```

### Unit 106

```
id:             unit-seed-prop01-0000-000000000106
unitNumber:     106
unitType:       1BR
bedrooms:       1
bathrooms:      1.0
squareFeet:     720
marketRent:     1500.00
currentRent:    null
occupancyStatus: maintenance_hold
status:         active
```

## Units — Birchwood Duplex (Property 002)

### Unit A

```
id:             unit-seed-prop02-0000-00000000000A
unitNumber:     A
unitType:       3BR
bedrooms:       3
bathrooms:      2.0
squareFeet:     1400
marketRent:     2200.00
currentRent:    2100.00
occupancyStatus: occupied
status:         active
```

### Unit B

```
id:             unit-seed-prop02-0000-00000000000B
unitNumber:     B
unitType:       3BR
bedrooms:       3
bathrooms:      2.0
squareFeet:     1400
marketRent:     2200.00
currentRent:    null
occupancyStatus: vacant
status:         active
```

## Units — Cedar Ridge House (Property 003)

### Unit Main

```
id:             unit-seed-prop03-0000-0000000MAIN
unitNumber:     Main
unitType:       4BR
bedrooms:       4
bathrooms:      2.5
squareFeet:     2100
marketRent:     3200.00
currentRent:    3000.00
occupancyStatus: occupied
status:         active
```

---

# LEASES

## Lease 001 — Morgan Chen, Unit 101

```
id:                   lease-seed-0001-00000000000001
organizationId:        org-seed-0001
propertyId:            property-seed-0001 (Maplewood)
unitId:                unit-seed-prop01-101
primaryTenantId:       person-seed-0003 (Morgan Chen)
leaseType:             fixed
startDate:             2025-09-01
endDate:               2026-08-31
monthlyRent:           1450.00
securityDepositAmount: 1450.00
paymentDueDay:         1
leaseStatus:           active
```

## Lease 002 — Priya Okafor, Unit A (Birchwood)

```
id:                   lease-seed-0001-00000000000002
organizationId:        org-seed-0001
propertyId:            property-seed-0002 (Birchwood)
unitId:                unit-seed-prop02-A
primaryTenantId:       person-seed-0004 (Priya Okafor)
leaseType:             fixed
startDate:             2025-11-01
endDate:               2026-10-31
monthlyRent:           2100.00
securityDepositAmount: 2100.00
paymentDueDay:         1
leaseStatus:           active
```

## Lease 003 — Sam Torres, Unit 102 (expired)

```
id:                   lease-seed-0001-00000000000003
organizationId:        org-seed-0001
propertyId:            property-seed-0001 (Maplewood)
unitId:                unit-seed-prop01-102
primaryTenantId:       person-seed-0005 (Sam Torres)
leaseType:             fixed
startDate:             2024-06-01
endDate:               2025-05-31
monthlyRent:           1350.00
securityDepositAmount: 1350.00
paymentDueDay:         1
leaseStatus:           expired
```

Note: Unit 102 now has a new tenant not represented in seed. The unit's
occupancyStatus is occupied to indicate a replacement tenant is in place
but their lease record is not part of the core seed set.

---

# WORK ORDERS

## Work Order 001 — Plumbing, Unit 101, open/in_progress

```
id:               wo-seed-0001-00000000000001
organizationId:   org-seed-0001
propertyId:       property-seed-0001 (Maplewood)
unitId:           unit-seed-prop01-101
requesterPersonId: person-seed-0003 (Morgan Chen)
category:         Plumbing
priority:         high
status:           in_progress
description:      Kitchen faucet dripping constantly. Tenant reports water pooling under sink cabinet.
requestedDate:    2026-05-28
estimatedCost:    150.00
```

## Work Order 002 — Electrical, Unit 106, maintenance hold

```
id:               wo-seed-0001-00000000000002
organizationId:   org-seed-0001
propertyId:       property-seed-0001 (Maplewood)
unitId:           unit-seed-prop01-106
requesterPersonId: person-seed-0002 (Alex Rivera)
category:         Electrical
priority:         emergency
status:           scheduled
description:      Bathroom outlet sparking on plug insertion. Unit placed on maintenance hold pending repair.
requestedDate:    2026-06-01
estimatedCost:    400.00
```

## Work Order 003 — General, Unit B (vacant turn), unassigned

```
id:               wo-seed-0001-00000000000003
organizationId:   org-seed-0001
propertyId:       property-seed-0002 (Birchwood)
unitId:           unit-seed-prop02-B
requesterPersonId: person-seed-0002 (Alex Rivera)
category:         General
priority:         medium
status:           new
description:      Vacant unit turn: repaint interior walls, deep clean, replace carpet in bedroom 2.
requestedDate:    2026-06-03
estimatedCost:    1200.00
```

## Work Order 004 — Completed, Unit 104, plumbing

```
id:               wo-seed-0001-00000000000004
organizationId:   org-seed-0001
propertyId:       property-seed-0001 (Maplewood)
unitId:           unit-seed-prop01-104
category:         Plumbing
priority:         medium
status:           completed
description:      Slow drain in shower. Cleared blockage with snake. No further issues.
requestedDate:    2026-05-10
completedDate:    2026-05-11
estimatedCost:    95.00
actualCost:       85.00
```

---

# AUDIT LOGS

Seed two audit log entries to verify audit capture is working.

## Audit Log 001 — Lease created

```
id:             auditlog-seed-000000000000001
organizationId: org-seed-0001
actorPersonId:  person-seed-0002 (Alex Rivera)
actionType:     LEASE_CREATED
entityType:     Lease
entityId:       lease-seed-0001-00000000000001
```

## Audit Log 002 — Work order status update

```
id:             auditlog-seed-000000000000002
organizationId: org-seed-0001
actorPersonId:  person-seed-0002 (Alex Rivera)
actionType:     WORK_ORDER_STATUS_UPDATED
entityType:     WorkOrder
entityId:       wo-seed-0001-00000000000001
beforeValue:    { "status": "assigned" }
afterValue:     { "status": "in_progress" }
```

---

# SEED SCRIPT REQUIREMENTS

## Order of Operations

Seed must be applied in this dependency order:

1. Organization
2. People
3. Roles (depends on Organization + People)
4. Properties (depends on Organization)
5. Units (depends on Organization + Properties)
6. Leases (depends on Organization + Properties + Units + People)
7. Work Orders (depends on Organization + Properties + Units)
8. Audit Logs (depends on Organization + People)

## Script Location

```
packages/database/prisma/seed.ts
```

## Run Command

```
npx prisma db seed
```

## Idempotency

Use Prisma `upsert` with `where: { id: SEED_ID }` for every record.

## Environment

Seed should only auto-run in `development` and `test` environments.
Block seed execution in `production` unless `ALLOW_PRODUCTION_SEED=true` is explicitly set.

---

# PHASE 63 OUTCOME

Seed data covers:
- 1 organization
- 7 people (owner, manager, 3 tenants, 2 vendors)
- 6 roles
- 3 properties (apartment, duplex, single family)
- 9 units (mixed occupancy statuses)
- 3 leases (active, active, expired)
- 4 work orders (mixed priority, status, assignment)
- 2 audit log entries

This set exercises every major entity in the Prisma schema and supports
end-to-end testing of all core platform workflows.
