# PROPERTY OPERATING SYSTEM

## ENTITY MAP 001

### Purpose

This document defines the first complete entity map for the Property Operating System.

The entity map is the foundation for database design, graph relationships, API structure, permissions, workflows, reporting, AI context, and search.

---

## Storage Strategy

### PostgreSQL
Official structured records, transactions, accounting, permissions, and system integrity.

### Neo4j
Relationships, graph traversal, intelligence, dependency mapping, and operational context.

### Object Storage
Files, images, videos, reports, signed documents, and inspection media.

---

## Core Entities

1. Organization
2. Portfolio
3. Property
4. Building
5. Unit
6. Person
7. Role
8. Lease
9. Application
10. Asset
11. Work Order
12. Inspection
13. Document
14. Financial Transaction
15. Communication
16. Event

---

## Entity Relationship Direction

Organization owns Portfolios.

Portfolio contains Properties.

Property contains Buildings, Units, Assets, Documents, Financial Records, and Compliance Context.

Building contains Units and Assets.

Unit connects to Lease, Tenant, Inspection, Work Order, Asset, and Financial Records.

Person connects through Role.

Lease connects Tenant, Unit, Property, Documents, Payments, Notices, Deposits, and Renewals.

Asset connects to Work Orders, Inspections, Maintenance Schedules, and Lifecycle Records.

Work Order connects Unit, Asset, Vendor, Tenant, Invoice, Document, and Communication.

Document connects to any entity that needs evidence, compliance records, contracts, photos, or reports.

Financial Transaction connects to Organization, Portfolio, Property, Unit, Lease, Vendor, Invoice, and Ledger.

Communication connects to Person, Lease, Unit, Property, Work Order, Document, and Event.

Event records anything important that happens in the system.

---

## Phase 2 Rule

No application feature should be designed until its required entities and relationships are defined.
