# ENTITY MAP 013: FINANCIAL TRANSACTION

## Purpose

Represents movement of money within the platform.

## Examples

- Rent payment
- Security deposit
- Late fee
- Vendor payment
- Utility payment
- Mortgage payment
- Tax payment
- Insurance payment

## Core Fields

- transaction_id
- organization_id
- portfolio_id
- property_id
- unit_id
- lease_id
- vendor_id
- transaction_type
- amount
- transaction_date
- ledger_account
- payment_method
- reference_number
- status
- created_at
- updated_at

## Relationships

Transaction belongs to Organization.

Transaction may belong to Property.

Transaction may belong to Unit.

Transaction may belong to Lease.

Transaction may belong to Vendor.

Transaction affects Ledger.

## PostgreSQL Role

Official accounting record.

## Neo4j Role

Financial relationship mapping and analytics.
