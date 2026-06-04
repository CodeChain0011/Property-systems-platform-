# DB 002: PROPERTIES TABLE

## Purpose

Stores property-level records.

## Table Name

properties

## Fields

- property_id UUID PRIMARY KEY
- organization_id UUID NOT NULL
- portfolio_id UUID
- property_name TEXT
- property_type TEXT
- street_address TEXT
- city TEXT
- county TEXT
- state TEXT
- postal_code TEXT
- country TEXT
- latitude DECIMAL
- longitude DECIMAL
- parcel_number TEXT
- year_built INTEGER
- lot_size TEXT
- total_units INTEGER
- occupancy_status TEXT
- created_at TIMESTAMP
- updated_at TIMESTAMP

## Relationships

- property belongs to organization
- property belongs to portfolio
- property has many buildings
- property has many units
- property has many assets
- property has many documents
- property has many work orders

## Notes

Property location is critical for compliance, notices, taxes, and jurisdiction rules.
