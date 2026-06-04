# DB 010: AUDIT LOGS TABLE

## Purpose

Stores immutable accountability records.

## Table Name

audit_logs

## Fields

- audit_id UUID PRIMARY KEY
- organization_id UUID NOT NULL
- actor_person_id UUID
- action_type TEXT
- entity_type TEXT
- entity_id UUID
- before_value JSONB
- after_value JSONB
- timestamp TIMESTAMP
- source_ip TEXT

## Relationships

- audit log belongs to organization
- audit log may reference any entity
- audit log may reference actor person

## Notes

Nothing important should happen without an audit log.
