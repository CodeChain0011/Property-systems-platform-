# PROPERTY OPERATING SYSTEM

# FINISHING BLUEPRINT V1

Version: 001

Status: Active

Date: 2026-06-04

---

## PURPOSE

This document captures the gap analysis performed after the architecture workbook
reached ~95% completion. It identifies the four remaining pre-code documents
that provide the highest value before MVP sprints begin, explains why each matters,
and links to the printable decision forms used to fill them in.

---

# ARCHITECTURE STATUS AT TIME OF THIS REVIEW

## What Was Complete

- Canonical data model (01) — 20 entity maps
- Business domain definitions (02)
- Core workflows (03) — 12 workflow docs including applicant-to-tenant,
  move-in, move-out, maintenance lifecycle, rent collection
- Technical architecture (04) — 16 docs
- MVP specification (39) — 11 docs
- Sprint backlog (62)
- Prisma schema — packages/database/prisma/schema.prisma
- Neo4j graph schema (12) — 5 docs
- API architecture (53) — endpoint list for all core domains
- Screen blueprint library (54) — 20 screens + component library
- Security overview, RBAC, JWT auth flow (17) — 6 docs
- Seed data specification (63)
- Developer handoff and Docker Compose setup (61)
- Permission matrix principles (55)
- Notification architecture principles (57)
- Requirements (10) — REQ-001 through REQ-009

## What Remained — The Four Gaps

The architecture workbook defined the right structures and principles throughout,
but four specific documents needed implementation-level detail before sprint work
could begin without inconsistent developer decisions.

---

# GAP 1: STATUS TRANSITION TABLES

## Why This Matters

Lease and WorkOrder both have status enums in the Prisma schema. Nothing in the
workbook defines which transitions are legal, who can trigger them, or what side
effects fire on each transition.

Without this, every developer writing a PATCH endpoint invents their own rules.
Can a completed work order be reopened? Can an assigned order go back to new if
the vendor cancels? Does activating a lease automatically update the unit's
occupancy status? These are not obvious — and inconsistent answers across
the codebase cause bugs that are hard to trace.

## Documents to Create

- FORM-001-STATUS-TRANSITIONS.md (printable decision form)
- STATUS-TRANSITIONS-001.md (architecture doc, written after form is filled)

## Target Location After Form Is Filled

03-Workflows/STATUS-TRANSITIONS-001.md

---

# GAP 2: PERMISSION MATRIX AS A TABLE

## Why This Matters

55-Permission-Matrix defines roles and principles but contains no grid. A developer
writing a guard for PATCH /leases/:id/activate has to synthesize the RBAC doc, the
security overview, and the API architecture doc — and still make a judgment call about
whether a leasing_agent can activate a lease or only a property_manager can.

Without a filled-in row-and-column matrix, access control will be inconsistent across
endpoints. Some guards will be too permissive, others too restrictive. Both are
security issues.

## Documents to Create

- FORM-002-PERMISSION-MATRIX.md (printable decision form)
- PERMISSION-MATRIX-TABLE-001.md (architecture doc, written after form is filled)

## Target Location After Form Is Filled

55-Permission-Matrix/PERMISSION-MATRIX-TABLE-001.md

---

# GAP 3: NOTIFICATION TRIGGER MAP

## Why This Matters

57-Notification-Architecture defines categories and principles but no specific
trigger events. The moment any feature creates or updates a core record, a developer
needs to know: does anything get notified? Which role? By what channel? When?

Without a trigger map, notifications are either skipped entirely or hard-coded
inconsistently — some features send emails, others don't, with no coherent pattern.
Fixing this later requires retrofitting every feature.

## Documents to Create

- FORM-003-NOTIFICATION-TRIGGERS.md (printable decision form)
- NOTIFICATION-TRIGGER-MAP-001.md (architecture doc, written after form is filled)

## Target Location After Form Is Filled

57-Notification-Architecture/NOTIFICATION-TRIGGER-MAP-001.md

---

# GAP 4: FIELD VALIDATION RULES

## Why This Matters

Requirements REQ-001 through REQ-009 define workflows but no field constraints.
Frontend and backend developers will independently decide: Is email required on a
Person? Can monthly rent be zero? What is a valid payment due day? What phone
formats are accepted? Must end date be after start date?

These decisions will diverge across the stack. Users will encounter validation
errors on the frontend that the backend accepts, or API rejections that the
frontend never warned about.

## Documents to Create

- FORM-004-FIELD-VALIDATION.md (printable decision form)
- FIELD-VALIDATION-RULES-001.md (architecture doc, written after form is filled)

## Target Location After Form Is Filled

10-Requirements/FIELD-VALIDATION-RULES-001.md

---

# WHAT WAS DELIBERATELY SKIPPED

These items were evaluated and intentionally excluded from this finishing sprint.

| Item | Reason Skipped |
|------|---------------|
| Test case scripts | Written alongside code; REQ docs provide enough scaffolding |
| S3 / object storage key naming | Small enough to standardize in one code review |
| API request/response body schemas | Generate from code via Swagger once API is running |
| Detailed error catalog per endpoint | Build incrementally as errors are discovered |
| Deployment runbooks | Needed at deploy time, not dev time |
| Mobile-specific interaction patterns | Deferred from MVP scope |

---

# HOW THE PRINTABLE FORMS WORK

Each of the four gaps has a corresponding printable form in this folder:

```
67-Finishing-Blueprint/
  FINISHING-BLUEPRINT-V1.md       ← this document
  FORM-001-STATUS-TRANSITIONS.md  ← print, fill by hand, scan
  FORM-002-PERMISSION-MATRIX.md   ← print, fill by hand, scan
  FORM-003-NOTIFICATION-TRIGGERS.md
  FORM-004-FIELD-VALIDATION.md
```

## Fill-In Process

1. Print the form
2. Fill in decisions by hand using pen
3. Scan the completed form (phone camera is fine)
4. Share the scan in a Claude session
5. Claude reads the scan and writes the corresponding architecture document

## Scan Instructions for Best Results

- Use good lighting — avoid shadows over the form
- Keep the page flat
- Capture the full page including the form title and all rows
- If a table is split across pages, scan each page separately and share both

## After All Four Forms Are Filled

The architecture workbook will be complete for MVP development. The four new
documents created from the forms, combined with everything already in the workbook,
provide a developer with unambiguous answers to every common decision they will
encounter during the first three sprints.

---

# FINISHING BLUEPRINT V1 OUTCOME

Four gaps identified. Four printable forms created. When all four forms are filled,
scanned, and converted to architecture docs, the workbook moves from 95% to
developer-ready for MVP.
