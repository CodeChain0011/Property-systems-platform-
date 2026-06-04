# ENTITY MAP 003: PROPERTY

## Purpose

Property represents a real-world property location.

It is one of the most important operational entities in the platform.

## Examples

- Single-family rental
- Duplex
- Apartment building
- Commercial building
- Mixed-use property
- Multi-building complex

## Core Fields

- property_id
- organization_id
- portfolio_id
- property_name
- property_type
- street_address
- city
- county
- state
- postal_code
- country
- latitude
- longitude
- parcel_number
- year_built
- lot_size
- total_units
- occupancy_status
- created_at
- updated_at

## Relationships

Property belongs to Portfolio.

Property contains Buildings.

Property contains Units.

Property contains Assets.

Property has Compliance Context.

Property has Documents.

Property has Financial Records.

Property has Work Orders.

## PostgreSQL Role

Stores address, identity, ownership, and operational property data.

## Neo4j Role

Maps property relationships across compliance, maintenance, finance, leasing, and documents.

## Notes

Property must be location-aware because legal compliance depends on jurisdiction.
