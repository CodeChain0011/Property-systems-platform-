# ENTITY MAP 004: UNIT

## Purpose

Unit represents rentable or assignable space within a property or building.

## Examples

- Apartment 101
- Duplex Unit A
- Office Suite 200
- Retail Space B
- Storage Unit
- Parking Space

## Core Fields

- unit_id
- property_id
- building_id
- unit_number
- unit_type
- bedrooms
- bathrooms
- square_feet
- market_rent
- current_rent
- occupancy_status
- availability_date
- condition_status
- created_at
- updated_at

## Relationships

Unit belongs to Property.

Unit may belong to Building.

Unit is governed by Lease.

Unit is occupied by Tenant.

Unit has Assets.

Unit has Inspections.

Unit has Work Orders.

Unit has Financial Records.

## PostgreSQL Role

Stores official unit data, rent information, and occupancy status.

## Neo4j Role

Connects unit to tenant history, lease history, inspections, assets, maintenance, and financial performance.

## Notes

Unit is the operational center of leasing, rent collection, maintenance, and tenant experience.
