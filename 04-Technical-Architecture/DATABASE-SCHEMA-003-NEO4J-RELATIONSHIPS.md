# DATABASE SCHEMA 003: NEO4J RELATIONSHIPS

## Purpose

Defines the first graph relationship types.

## Relationship Types

- OWNS
- MANAGES
- CONTAINS
- BELONGS_TO
- OCCUPIES
- GOVERNS
- SIGNED_BY
- REQUESTED_BY
- ASSIGNED_TO
- RELATED_TO
- DOCUMENTS
- GENERATED
- PAID_BY
- PAID_TO
- TRIGGERED
- CREATED_BY
- HAS_ROLE
- HAS_PERMISSION

## Example Pattern

Organization OWNS Portfolio

Portfolio CONTAINS Property

Property CONTAINS Building

Building CONTAINS Unit

Lease GOVERNS Unit

Person HAS_ROLE Role

WorkOrder ASSIGNED_TO Vendor

Document DOCUMENTS Lease

## Status

Active Draft
