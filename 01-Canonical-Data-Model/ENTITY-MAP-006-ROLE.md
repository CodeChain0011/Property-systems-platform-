# ENTITY MAP 006: ROLE

## Purpose

Role defines what a person is allowed to do in the system.

## Examples

- Owner
- Admin
- Property Manager
- Tenant
- Applicant
- Vendor
- Inspector
- Accountant
- Attorney
- Maintenance Worker

## Core Fields

- role_id
- person_id
- organization_id
- role_type
- permission_group
- start_date
- end_date
- status
- created_at
- updated_at

## Relationships

Role belongs to Person.

Role belongs to Organization.

Role controls Permissions.

Role grants Workflow Access.

Role limits Data Visibility.

## PostgreSQL Role

Stores permission assignments and role status.

## Neo4j Role

Maps what each person can access, affect, approve, or view.

## Notes

Permissions should be role-based, not hardcoded into user accounts.
