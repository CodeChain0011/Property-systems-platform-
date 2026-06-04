# DB 009: FINANCIAL TRANSACTIONS TABLE

## Purpose

Stores money movement records.

## Table Name

financial_transactions

## Fields

- transaction_id UUID PRIMARY KEY
- organization_id UUID NOT NULL
- portfolio_id UUID
- property_id UUID
- unit_id UUID
- lease_id UUID
- vendor_id UUID
- transaction_type TEXT
- amount DECIMAL
- transaction_date DATE
- ledger_account TEXT
- payment_method TEXT
- reference_number TEXT
- status TEXT
- created_at TIMESTAMP
- updated_at TIMESTAMP

## Relationships

- transaction belongs to organization
- transaction may belong to property
- transaction may belong to unit
- transaction may belong to lease
- transaction may belong to vendor
- transaction affects ledger

## Notes

Financial records require strong audit logging.
