# CORE DATABASE CONVENTIONS

## ID Strategy

Use UUID primary keys.

## Common Fields

Every major table should include:

- id
- organization_id
- created_at
- updated_at
- created_by
- updated_by
- status

## Naming Rule

Use snake_case for tables and columns.

## Audit Rule

Important changes should create audit log records.
