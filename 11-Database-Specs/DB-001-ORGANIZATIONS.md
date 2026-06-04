# DB 001: ORGANIZATIONS TABLE

## Purpose

Stores the root operating entity for the platform.

## Table Name

organizations

## Fields

- organization_id UUID PRIMARY KEY
- organization_name TEXT NOT NULL
- organization_type TEXT
- legal_name TEXT
- primary_contact_id UUID
- billing_contact_id UUID
- default_timezone TEXT
- default_currency TEXT
- status TEXT
- created_at TIMESTAMP
- updated_at TIMESTAMP

## Relationships

- organizations has many portfolios
- organizations has many people
- organizations has many roles
- organizations has many properties
- organizations has many audit logs

## Notes

Every record in the system should ultimately trace back to an organization.
