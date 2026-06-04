# ENTITY MAP 005: PERSON

## Purpose

Person represents any human actor in the platform.

A person is not automatically a tenant, owner, vendor, or manager. Those meanings are assigned through roles.

## Examples

- Owner
- Tenant
- Applicant
- Property manager
- Vendor contact
- Inspector
- Attorney
- Accountant

## Core Fields

- person_id
- first_name
- last_name
- display_name
- email
- phone
- alternate_phone
- mailing_address
- preferred_contact_method
- identity_status
- created_at
- updated_at

## Relationships

Person has Roles.

Person belongs to Organization through Role.

Person may sign Lease.

Person may submit Application.

Person may create Communication.

Person may upload Document.

Person may trigger Event.

## PostgreSQL Role

Stores official identity and contact records.

## Neo4j Role

Connects people to roles, organizations, leases, communications, documents, workflows, and events.

## Notes

The same person can have multiple roles over time.
