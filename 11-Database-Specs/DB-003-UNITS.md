# DB 003: UNITS TABLE

## Purpose

Stores rentable or assignable spaces.

## Table Name

units

## Fields

- unit_id UUID PRIMARY KEY
- organization_id UUID NOT NULL
- property_id UUID NOT NULL
- building_id UUID
- unit_number TEXT
- unit_type TEXT
- bedrooms INTEGER
- bathrooms DECIMAL
- square_feet INTEGER
- market_rent DECIMAL
- current_rent DECIMAL
- occupancy_status TEXT
- availability_date DATE
- condition_status TEXT
- created_at TIMESTAMP
- updated_at TIMESTAMP

## Relationships

- unit belongs to property
- unit may belong to building
- unit has many leases
- unit has many inspections
- unit has many work orders
- unit has many assets
- unit has many financial transactions

## Notes

Unit is the center of leasing, occupancy, maintenance, and rent collection.
