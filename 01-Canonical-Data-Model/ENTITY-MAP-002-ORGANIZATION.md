# ENTITY MAP 002: ORGANIZATION

## Purpose

Organization is the root account entity for the platform.

It represents the legal or operating group that owns or manages property records.

## Examples

- Individual landlord
- Retired couple with one rental
- Family LLC
- Property management company
- Multi-state operator
- Real estate enterprise

## Core Fields

- organization_id
- organization_name
- organization_type
- legal_name
- tax_id_reference
- primary_contact_id
- billing_contact_id
- default_timezone
- default_currency
- created_at
- updated_at
- status

## Relationships

Organization owns Portfolios.

Organization has Users.

Organization assigns Roles.

Organization owns Documents.

Organization receives Reports.

Organization has Audit Logs.

## PostgreSQL Role

Stores the official organization record.

## Neo4j Role

Connects the organization to portfolios, properties, people, permissions, documents, and activity history.

## Notes

This entity must support both small landlords and large enterprises.
