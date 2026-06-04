# DB 007: WORK ORDERS TABLE

## Purpose

Stores maintenance and repair workflow records.

## Table Name

work_orders

## Fields

- work_order_id UUID PRIMARY KEY
- organization_id UUID NOT NULL
- property_id UUID NOT NULL
- building_id UUID
- unit_id UUID
- asset_id UUID
- requester_person_id UUID
- assigned_vendor_id UUID
- priority TEXT
- category TEXT
- status TEXT
- requested_date TIMESTAMP
- assigned_date TIMESTAMP
- completed_date TIMESTAMP
- estimated_cost DECIMAL
- actual_cost DECIMAL
- created_at TIMESTAMP
- updated_at TIMESTAMP

## Relationships

- work order belongs to property
- work order may belong to unit
- work order may belong to asset
- work order may be assigned to vendor
- work order may generate documents
- work order may generate financial transactions

## Notes

Work orders connect tenant experience, maintenance, vendors, assets, and financial records.
