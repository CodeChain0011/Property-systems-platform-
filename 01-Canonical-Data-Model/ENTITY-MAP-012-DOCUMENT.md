# ENTITY MAP 012: DOCUMENT

## Purpose

Document represents evidence, records, files, reports, media, contracts, notices, and compliance artifacts.

## Examples

- Lease PDF
- Inspection report
- Insurance certificate
- Permit
- Invoice
- Notice
- Photo
- Video
- Vendor license
- Tax record

## Core Fields

- document_id
- organization_id
- document_type
- file_name
- file_size
- file_format
- storage_location
- uploaded_by_person_id
- upload_date
- retention_policy
- confidentiality_level
- created_at
- updated_at

## Relationships

Document may connect to:

- Property
- Unit
- Person
- Lease
- Application
- Work Order
- Inspection
- Asset
- Financial Transaction
- Communication

## PostgreSQL Role

Stores metadata and indexing information.

## Object Storage Role

Stores the actual file.

## Neo4j Role

Maps evidence relationships and compliance context.
