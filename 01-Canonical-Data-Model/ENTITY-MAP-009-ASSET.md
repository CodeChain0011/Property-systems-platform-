# ENTITY MAP 009: ASSET

## Purpose

Asset represents a physical component, system, appliance, structure, or feature that requires tracking throughout its lifecycle.

## Examples

- HVAC System
- Roof
- Water Heater
- Refrigerator
- Dishwasher
- Electrical Panel
- Security Camera
- Irrigation Controller
- Elevator
- Parking Gate

## Core Fields

- asset_id
- organization_id
- property_id
- building_id
- unit_id
- asset_name
- asset_type
- manufacturer
- model_number
- serial_number
- install_date
- expected_life_years
- warranty_expiration
- status
- condition_rating
- replacement_cost
- created_at
- updated_at

## Relationships

Asset belongs to Property.

Asset may belong to Building.

Asset may belong to Unit.

Asset generates Work Orders.

Asset receives Inspections.

Asset follows Maintenance Schedule.

Asset creates Lifecycle History.

## PostgreSQL Role

Stores asset inventory and lifecycle data.

## Neo4j Role

Maps asset dependencies, maintenance history, and operational relationships.
