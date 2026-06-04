# DB 005: ROLES TABLE

## Purpose

Stores role assignments for people.

## Table Name

roles

## Fields

- role_id UUID PRIMARY KEY
- organization_id UUID NOT NULL
- person_id UUID NOT NULL
- role_type TEXT NOT NULL
- permission_group TEXT
- start_date DATE
- end_date DATE
- status TEXT
- created_at TIMESTAMP
- updated_at TIMESTAMP

## Relationships

- role belongs to person
- role belongs to organization
- role connects to permissions
- role controls workflow access

## Notes

Permissions should be role-based and auditable.
