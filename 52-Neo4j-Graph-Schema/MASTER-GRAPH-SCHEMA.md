# PROPERTY OPERATING SYSTEM

# MASTER NEO4J GRAPH SCHEMA

Version: 001

Status: Active

---

## PURPOSE

Defines the Neo4j graph model for the Property Operating System.

PostgreSQL remains the official system of record.

Neo4j stores relationship intelligence, contextual links, operational patterns, and graph-based discovery.

---

# GRAPH PRINCIPLES

## Principle 1

Every graph node should reference the same canonical UUID used in PostgreSQL.

## Principle 2

Neo4j should enrich the platform, not replace PostgreSQL.

## Principle 3

Relationships should describe real business meaning.

## Principle 4

Graph patterns should support search, reporting, AI context, risk detection, and operational intelligence.

---

# CORE NODE LABELS

## Organization

Represents the operating business or account.

Key Properties:

- organization_id
- organization_name
- organization_type
- status

---

## Portfolio

Represents a group of properties.

Key Properties:

- portfolio_id
- organization_id
- portfolio_name
- portfolio_type

---

## Property

Represents a managed real-world location.

Key Properties:

- property_id
- organization_id
- property_name
- property_type
- city
- county
- state
- postal_code

---

## Building

Represents a physical structure on a property.

Key Properties:

- building_id
- property_id
- building_name
- building_type

---

## Unit

Represents rentable or assignable space.

Key Properties:

- unit_id
- property_id
- unit_number
- unit_type
- occupancy_status

---

## Person

Represents a human actor.

Key Properties:

- person_id
- display_name
- email
- phone

---

## Role

Represents a person's operational role.

Key Properties:

- role_id
- role_type
- status

---

## Lease

Represents a legal occupancy agreement.

Key Properties:

- lease_id
- property_id
- unit_id
- lease_status
- start_date
- end_date

---

## Application

Represents a rental application.

Key Properties:

- application_id
- applicant_person_id
- property_id
- unit_id
- application_status

---

## Asset

Represents a physical asset or system.

Key Properties:

- asset_id
- asset_name
- asset_type
- condition_rating
- status

---

## WorkOrder

Represents a maintenance or repair workflow.

Key Properties:

- work_order_id
- category
- priority
- status

---

## Inspection

Represents a property, unit, or asset inspection.

Key Properties:

- inspection_id
- inspection_type
- status
- inspection_date

---

## Finding

Represents an inspection finding.

Key Properties:

- finding_id
- severity
- category
- status

---

## Document

Represents a document or media record.

Key Properties:

- document_id
- document_type
- file_name
- confidentiality_level

---

## FinancialTransaction

Represents money movement.

Key Properties:

- transaction_id
- transaction_type
- amount
- transaction_date
- status

---

## Communication

Represents a message, notice, or communication record.

Key Properties:

- communication_id
- communication_type
- delivery_status
- sent_at

---

## Event

Represents system or business activity.

Key Properties:

- event_id
- event_type
- event_timestamp
- event_status

---

## Vendor

Represents a contractor or service provider.

Key Properties:

- vendor_id
- vendor_name
- business_type
- approval_status

---

## ComplianceRule

Represents a legal, procedural, or jurisdiction rule.

Key Properties:

- rule_id
- rule_name
- jurisdiction
- effective_date
- status

---

## Jurisdiction

Represents a compliance jurisdiction.

Key Properties:

- jurisdiction_id
- jurisdiction_name
- jurisdiction_type
- parent_jurisdiction_id

---

# CORE RELATIONSHIP TYPES

## OWNS

Example:

Organization OWNS Portfolio

Organization OWNS Property

---

## CONTAINS

Example:

Portfolio CONTAINS Property

Property CONTAINS Building

Building CONTAINS Unit

Property CONTAINS Unit

---

## HAS_ROLE

Example:

Person HAS_ROLE Role

---

## MANAGES

Example:

Person MANAGES Property

Organization MANAGES Portfolio

---

## OCCUPIES

Example:

Person OCCUPIES Unit

---

## GOVERNS

Example:

Lease GOVERNS Unit

---

## SIGNED_BY

Example:

Lease SIGNED_BY Person

---

## APPLIED_FOR

Example:

Person APPLIED_FOR Unit

Application APPLIED_FOR Unit

---

## RELATED_TO

Example:

WorkOrder RELATED_TO Unit

WorkOrder RELATED_TO Asset

Document RELATED_TO Lease

---

## ASSIGNED_TO

Example:

WorkOrder ASSIGNED_TO Vendor

WorkOrder ASSIGNED_TO Person

---

## REQUESTED_BY

Example:

WorkOrder REQUESTED_BY Person

---

## DOCUMENTS

Example:

Document DOCUMENTS Lease

Document DOCUMENTS Inspection

Document DOCUMENTS WorkOrder

---

## GENERATED

Example:

Inspection GENERATED Finding

WorkOrder GENERATED FinancialTransaction

Event GENERATED Notification

---

## PAID_BY

Example:

FinancialTransaction PAID_BY Person

---

## PAID_TO

Example:

FinancialTransaction PAID_TO Vendor

---

## TRIGGERED

Example:

Event TRIGGERED WorkOrder

Event TRIGGERED Communication

---

## LOCATED_IN

Example:

Property LOCATED_IN Jurisdiction

---

## REQUIRES

Example:

ComplianceRule REQUIRES Document

ComplianceRule REQUIRES Inspection

ComplianceRule REQUIRES Notice

---

## SATISFIES

Example:

Inspection SATISFIES ComplianceRule

Document SATISFIES ComplianceRule

---

## CREATES_RISK

Example:

Finding CREATES_RISK Property

ComplianceRule CREATES_RISK Property

---

# GRAPH PATTERNS

## Ownership Pattern

Organization

OWNS

Portfolio

CONTAINS

Property

CONTAINS

Building

CONTAINS

Unit

---

## Leasing Pattern

Person

SIGNED_BY

Lease

GOVERNS

Unit

Unit

PART_OF

Property

Person

OCCUPIES

Unit

---

## Application Pattern

Person

APPLIED_FOR

Application

Application

APPLIED_FOR

Unit

Application

GENERATED

Document

Application

BECOMES

Lease

---

## Maintenance Pattern

Person

REQUESTED_BY

WorkOrder

WorkOrder

RELATED_TO

Unit

WorkOrder

RELATED_TO

Asset

WorkOrder

ASSIGNED_TO

Vendor

WorkOrder

GENERATED

Document

WorkOrder

GENERATED

FinancialTransaction

---

## Inspection Pattern

Inspection

RELATED_TO

Property

Inspection

RELATED_TO

Unit

Inspection

RELATED_TO

Asset

Inspection

GENERATED

Finding

Finding

TRIGGERED

WorkOrder

---

## Financial Pattern

Lease

GENERATED

FinancialTransaction

FinancialTransaction

RELATED_TO

Property

FinancialTransaction

RELATED_TO

Unit

FinancialTransaction

PAID_BY

Person

FinancialTransaction

PAID_TO

Vendor

---

## Compliance Pattern

Property

LOCATED_IN

Jurisdiction

Jurisdiction

ENFORCES

ComplianceRule

ComplianceRule

REQUIRES

Document

ComplianceRule

REQUIRES

Inspection

Document

SATISFIES

ComplianceRule

---

## Document Evidence Pattern

Document

DOCUMENTS

Lease

Document

DOCUMENTS

Inspection

Document

DOCUMENTS

WorkOrder

Document

DOCUMENTS

FinancialTransaction

---

## Communication Pattern

Person

SENT

Communication

Communication

RELATED_TO

Lease

Communication

RELATED_TO

WorkOrder

Communication

RELATED_TO

Notice

---

# AI GRAPH USE CASES

## Property Summary

Retrieve:

- Property
- Units
- Leases
- Tenants
- Work Orders
- Assets
- Documents
- Financial Records
- Compliance Rules

---

## Tenant Summary

Retrieve:

- Person
- Roles
- Lease
- Unit
- Payments
- Work Orders
- Communications
- Notices

---

## Maintenance Risk

Retrieve:

- Asset
- Work Orders
- Inspections
- Findings
- Vendor History
- Cost History

---

## Compliance Risk

Retrieve:

- Property
- Jurisdiction
- Compliance Rules
- Required Documents
- Inspections
- Notices
- Deadlines

---

## Financial Insight

Retrieve:

- Property
- Unit
- Lease
- Financial Transactions
- Vendor Payments
- Work Orders
- Reports

---

# GRAPH QUERY EXAMPLES

## Question

Which units have repeated maintenance problems?

Graph Path:

Unit

RELATED_TO

WorkOrder

RELATED_TO

Asset

---

## Question

Which vendors are connected to high-cost repairs?

Graph Path:

Vendor

ASSIGNED_TO

WorkOrder

GENERATED

FinancialTransaction

---

## Question

Which properties have compliance exposure?

Graph Path:

Property

LOCATED_IN

Jurisdiction

ENFORCES

ComplianceRule

REQUIRES

Document

---

## Question

Which documents support a security deposit deduction?

Graph Path:

MoveOutInspection

GENERATED

Finding

DOCUMENTS

Document

RELATED_TO

Lease

---

# SYNC STRATEGY

PostgreSQL creates or updates official records.

A graph sync process creates or updates corresponding Neo4j nodes and relationships.

Each Neo4j node stores:

- canonical_id
- source_table
- organization_id
- created_at
- updated_at

---

# GRAPH RULES

## Rule 1

Do not store official accounting amounts only in Neo4j.

## Rule 2

Do not store legal source of truth only in Neo4j.

## Rule 3

Use Neo4j for relationships, traversal, AI context, and operational insight.

## Rule 4

Every graph node must trace back to a PostgreSQL record when possible.

---

# PHASE 52 OUTCOME

This graph schema supports:

- Relationship search
- AI context retrieval
- Risk analysis
- Maintenance intelligence
- Compliance mapping
- Portfolio analytics
- Investigation workflows
- Knowledge graph exploration

