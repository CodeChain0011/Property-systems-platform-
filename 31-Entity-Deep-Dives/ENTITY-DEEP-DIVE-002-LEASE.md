# ENTITY DEEP DIVE 002: LEASE

## Purpose

Defines the Lease entity in detail.

## Lease Represents

A legal and financial agreement governing occupancy.

## Required Fields

- lease_id
- organization_id
- property_id
- unit_id
- primary_tenant_id
- start_date
- end_date
- monthly_rent
- security_deposit
- payment_due_day
- lease_status
- renewal_status

## Key Relationships

- governs Unit
- signed by Tenant
- linked to Documents
- generates Financial Transactions
- creates Compliance Requirements
- creates Events

## Notes

Lease is one of the most important legal anchors in the platform.
