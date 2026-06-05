# PROPERTY OPERATING SYSTEM

# PERMISSION MATRIX TABLE

Document: PERMISSION-MATRIX-TABLE-001

Version: 001

Status: Active

Date: 2026-06-04

---

## PURPOSE

Provides the definitive row-and-column permission grid for every core entity and action in the Property Operating System.

This document translates the principles in MASTER-PERMISSION-MATRIX.md into implementation-ready decisions.

Every API guard, middleware check, and frontend conditional must derive from this table.

---

# ROLES

| Abbreviation | Full Role |
|---|---|
| OWN | Organization Owner |
| ADM | Administrator |
| PM | Property Manager |
| LA | Leasing Agent |
| MC | Maintenance Coordinator |
| TEN | Tenant |
| VEN | Vendor |
| INS | Inspector |
| ACC | Accountant |
| ATT | Attorney |

---

# ACTION CODES

| Code | Meaning |
|---|---|
| C | Create |
| R | Read |
| U | Update |
| D | Delete (soft only) |
| A | Approve |
| — | No access |

All deletes are soft (RecordStatus = archived). Hard deletes are not permitted by any role.

---

# ORGANIZATION

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Create | C | C | — | — | — | — | — | — | — | — |
| Read | R | R | R | — | — | — | — | — | R | — |
| Update | U | U | — | — | — | — | — | — | — | — |
| Delete | D | D | — | — | — | — | — | — | — | — |

---

# PROPERTY

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Create | C | C | C | — | — | — | — | — | — | — |
| Read | R | R | R | R | R | — | — | R | R | — |
| Update | U | U | U | — | — | — | — | — | — | — |
| Delete | D | D | D | — | — | — | — | — | — | — |

---

# UNIT

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Create | C | C | C | C | — | — | — | — | — | — |
| Read | R | R | R | R | R | own unit | assigned | R | R | — |
| Update | U | U | U | U | — | — | — | — | — | — |
| Delete | D | D | D | — | — | — | — | — | — | — |
| Update occupancy status | U | U | U | U | — | — | — | — | — | — |

Note: Tenant reads own unit only. Vendor reads units on assigned work orders only.

---

# PERSON

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Create | C | C | C | C | — | — | — | — | — | — |
| Read | R | R | R | R | R (limited) | self only | self only | self only | R | R |
| Update | U | U | U | U (own org) | — | self only | self only | self only | — | — |
| Delete | D | D | — | — | — | — | — | — | — | — |

Note: Limited read for MC means name and unit assignment only, no SSN, banking, or legal data.

---

# ROLE ASSIGNMENT

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Assign role | A | A | — | — | — | — | — | — | — | — |
| View roles | R | R | R | — | — | — | — | — | — | — |
| Remove role | D | D | — | — | — | — | — | — | — | — |

---

# LEASE

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Create (draft) | C | C | C | C | — | — | — | — | — | — |
| Read | R | R | R | R | — | own lease | — | — | R | R |
| Update (while draft) | U | U | U | U | — | — | — | — | — | — |
| Activate (draft→active) | A | A | A | — | — | — | — | — | — | — |
| Terminate (active→terminated) | A | A | A | — | — | — | — | — | — | — |
| Delete (archived) | D | D | — | — | — | — | — | — | — | — |

Note: Leasing agents can create and edit draft leases but cannot activate or terminate.

---

# WORK ORDER

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Create | C | C | C | — | C | C (own unit) | — | — | — | — |
| Read | R | R | R | — | R | own requests | assigned | — | — | — |
| Update fields | U | U | U | — | U | — | assigned | — | — | — |
| Change status | U | U | U | — | U | — | limited* | — | — | — |
| Assign vendor | U | U | U | — | U | — | — | — | — | — |
| Close | A | A | A | — | — | — | — | — | — | — |
| Cancel | A | A | A | — | — | — | — | — | — | — |
| Delete | D | D | D | — | — | — | — | — | — | — |

Note: Vendor status changes limited to in_progress and waiting on assigned work orders only.

---

# INSPECTION

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Create | C | C | C | — | — | — | — | C | — | — |
| Read | R | R | R | — | — | own unit (report only) | — | R | — | — |
| Update / add findings | U | U | U | — | — | — | — | U | — | — |
| Complete | A | A | A | — | — | — | — | A | — | — |
| Delete | D | D | — | — | — | — | — | — | — | — |

---

# DOCUMENT

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Upload | C | C | C | C | C (maint. docs) | C (own) | C (invoices) | C | — | C |
| Read | R | R | R | relevant | relevant | own docs | own invoices | relevant | financial | legal |
| Delete | D | D | D | — | — | — | — | — | — | — |
| Download | R | R | R | relevant | relevant | own docs | own invoices | relevant | financial | legal |

---

# FINANCIAL TRANSACTION

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Create | C | C | C | — | — | — | — | — | C | — |
| Read | R | R | R | — | — | own charges | own invoices | — | R | limited |
| Update | U | U | — | — | — | — | — | — | U | — |
| Approve payment | A | A | A | — | — | — | — | — | A | — |
| Delete | D | D | — | — | — | — | — | — | — | — |

---

# AUDIT LOG

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Read all | R | R | — | — | — | — | — | — | — | — |
| Read own-org | R | R | R | — | — | — | — | — | — | — |
| Delete / purge | — | D | — | — | — | — | — | — | — | — |

Note: Audit logs are append-only. The Delete column represents purge by legal retention schedule, administrator only.

---

# NOTIFICATION

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Read own | R | R | R | R | R | R | R | R | R | R |
| Dismiss own | U | U | U | U | U | U | U | U | U | U |
| Create system notification | — | A | A | — | — | — | — | — | — | — |

---

# USER ACCOUNT

| Action | OWN | ADM | PM | LA | MC | TEN | VEN | INS | ACC | ATT |
|--------|-----|-----|----|----|----|-----|-----|-----|-----|-----|
| Create user account | C | C | — | — | — | — | — | — | — | — |
| Disable user account | U | U | — | — | — | — | — | — | — | — |
| Reset password (own) | U | U | U | U | U | U | U | U | U | U |
| View user list | R | R | — | — | — | — | — | — | — | — |

---

# SENSITIVE DATA ELEVATION

The following fields require explicit elevated permission checks beyond the base role:

| Field | Standard Role | Elevated Requirement |
|-------|--------------|---------------------|
| Person.ssn | None visible | administrator or owner + explicit consent |
| Person.taxId | None visible | administrator or owner |
| banking / payment method | None visible | owner + accountant |
| Legal documents (evictions, legal notices) | None visible | attorney or owner |
| securityDepositAmount on Lease | PM+ | as normal | 

---

# PERMISSION ENFORCEMENT RULES

1. Check organization membership before any other permission.
2. A person can only access records within their own organization unless explicitly granted cross-org access.
3. Role with higher permissions supersedes lower (owner > administrator > property_manager).
4. All permission checks run server-side. Frontend hiding is cosmetic only.
5. HTTP 403 is returned for access denied. HTTP 404 is returned when leaking the record's existence would itself be a security risk.

---

# PERMISSION-MATRIX-TABLE-001 OUTCOME

Every guard in the API has a definitive answer for every role and action combination.

Consistent enforcement. No ambiguous calls at implementation time.
