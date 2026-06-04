# DB 006: LEASES TABLE

## Purpose

Stores lease records.

## Table Name

leases

## Fields

- lease_id UUID PRIMARY KEY
- organization_id UUID NOT NULL
- property_id UUID NOT NULL
- unit_id UUID NOT NULL
- primary_tenant_id UUID
- lease_type TEXT
- start_date DATE
- end_date DATE
- monthly_rent DECIMAL
- security_deposit_amount DECIMAL
- payment_due_day INTEGER
- late_fee_rule_id UUID
- lease_status TEXT
- renewal_status TEXT
- created_at TIMESTAMP
- updated_at TIMESTAMP

## Relationships

- lease belongs to unit
- lease belongs to property
- lease has tenant parties
- lease has documents
- lease has financial transactions
- lease has communications

## Notes

Lease is a legal and financial anchor.
