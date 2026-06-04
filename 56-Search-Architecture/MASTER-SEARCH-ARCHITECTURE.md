# PROPERTY OPERATING SYSTEM

# MASTER SEARCH ARCHITECTURE

Version: 001

Status: Active

---

## PURPOSE

Defines how users, workflows, reports, and AI systems search across the Property Operating System.

Search must support:

- Structured search
- Full-text search
- Document search
- Graph search
- Semantic search
- AI retrieval

---

# SEARCH PRINCIPLES

## Principle 1

Users should not need to know where data is stored.

## Principle 2

Search results must respect permissions.

## Principle 3

Search should return records, documents, relationships, and actions.

## Principle 4

AI retrieval must be grounded in authorized sources.

---

# SEARCH TYPES

## Global Search

One search box for the whole platform.

Searches:

- Properties
- Units
- Tenants
- Leases
- Work Orders
- Documents
- Vendors
- Inspections
- Financial Records
- Communications
- Compliance Records

---

## Structured Search

Searches database fields.

Examples:

- property_name
- unit_number
- tenant_name
- lease_status
- work_order_status
- transaction_date

---

## Full-Text Search

Searches text content.

Sources:

- Notes
- Messages
- Notices
- Descriptions
- Documents
- Work Orders
- Inspection Findings

---

## Document Search

Searches uploaded files and document metadata.

Sources:

- PDFs
- DOCX
- Images with OCR
- Leases
- Invoices
- Notices
- Inspection Reports
- Insurance Certificates

---

## Graph Search

Searches relationships.

Examples:

- Show all work orders connected to Unit 4B.
- Show all documents connected to a lease.
- Show all vendors connected to repeated HVAC failures.
- Show all compliance records connected to a property.

---

## Semantic Search

Searches by meaning, not exact words.

Example:

Search:

water problem

May return:

- plumbing leak
- moisture finding
- pipe repair
- water heater work order
- inspection note about water damage

---

## AI Retrieval Search

Retrieves context for AI answers.

Sources:

- PostgreSQL records
- Neo4j relationships
- Documents
- Communications
- Work Orders
- Financial Records
- Compliance Rules
- Reports

---

# INDEX SOURCES

## PostgreSQL Index

Structured entity records.

## Search Index

Full-text and filtered search.

## Vector Index

Semantic search and AI retrieval.

## Neo4j Graph

Relationship traversal.

## Object Storage Metadata

Document lookup and file context.

---

# SEARCH RESULT TYPES

Results may include:

- Property
- Unit
- Person
- Lease
- Work Order
- Inspection
- Document
- Financial Transaction
- Communication
- Event
- Vendor
- Compliance Rule
- Report

---

# RESULT DISPLAY

Each result should show:

- Title
- Entity Type
- Related Property
- Related Unit
- Status
- Date
- Permission Level
- Quick Actions

---

# FILTERS

Global filters:

- Organization
- Portfolio
- Property
- Unit
- Entity Type
- Status
- Date Range
- Role
- Document Type
- Work Order Category
- Compliance Status

---

# PERMISSION RULES

Search must never expose records the user cannot access.

Examples:

Tenant cannot find another tenant's lease.

Vendor cannot search unrelated work orders.

Manager cannot search another organization.

AI cannot retrieve records outside the user's permission scope.

---

# SEARCH ACTIONS

Search results may allow:

- Open Record
- View Related Records
- Download Document
- Create Work Order
- Send Message
- Add Note
- Ask AI About This Record

---

# AI SEARCH USE CASES

## Property Summary

Retrieve:

- property
- units
- leases
- tenants
- work orders
- inspections
- financials
- compliance

## Lease Summary

Retrieve:

- lease
- tenants
- documents
- payments
- notices
- communications

## Maintenance Summary

Retrieve:

- work orders
- assets
- vendors
- photos
- invoices
- inspection findings

## Compliance Summary

Retrieve:

- jurisdiction
- rules
- deadlines
- documents
- notices
- inspections

---

# MVP SEARCH SCOPE

Included:

- Global record search
- Property search
- Unit search
- Tenant search
- Lease search
- Work order search
- Document metadata search

Deferred:

- Full semantic search
- OCR indexing
- Vector search
- Advanced graph exploration
- AI deep retrieval

---

# FUTURE SEARCH SCOPE

Future:

- Semantic search
- OCR search
- AI retrieval
- Natural language search
- Graph relationship explorer
- Saved searches
- Search alerts

---

# PHASE 56 OUTCOME

Search becomes a core platform capability for:

- Users
- Dashboards
- Reports
- AI
- Compliance
- Maintenance
- Financial operations
- Knowledge discovery

