# DATABASE SCHEMA 004: ID STRATEGY

## Purpose

Defines how IDs should work across PostgreSQL, Neo4j, APIs, files, and AI context.

## Rule

Every canonical entity must have one stable global ID.

## Recommended ID Pattern

Use UUIDs for canonical records.

Examples:

- organization_id
- property_id
- unit_id
- lease_id
- person_id
- work_order_id
- document_id
- transaction_id
- event_id

## Cross-System Rule

The same canonical ID must be used in:

- PostgreSQL
- Neo4j
- Object storage metadata
- API responses
- Audit logs
- AI context records

## Status

Active Draft
