# ENTITY MAP 007: LEASE

## Purpose

Lease represents the legal and financial agreement that governs occupancy.

## Examples

- Residential lease
- Month-to-month lease
- Commercial lease
- Renewal agreement
- Lease amendment

## Core Fields

- lease_id
- organization_id
- property_id
- unit_id
- primary_tenant_id
- lease_type
- start_date
- end_date
- monthly_rent
- security_deposit_amount
- payment_due_day
- late_fee_rule_id
- lease_status
- renewal_status
- created_at
- updated_at

## Relationships

Lease governs Unit.

Lease is signed by Tenant.

Lease belongs to Property.

Lease has Documents.

Lease creates Payment Schedule.

Lease controls Security Deposit.

Lease may generate Notices.

Lease may generate Renewal.

## PostgreSQL Role

Stores the official lease terms and status.

## Neo4j Role

Connects lease to tenants, unit history, documents, notices, payments, communications, and compliance context.

## Notes

Lease is one of the most important legal anchors in the platform.
