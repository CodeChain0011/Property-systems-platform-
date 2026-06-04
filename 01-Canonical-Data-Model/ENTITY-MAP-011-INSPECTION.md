# ENTITY MAP 011: INSPECTION

## Purpose

Inspection represents a structured evaluation of condition, compliance, safety, occupancy, or maintenance status.

## Examples

- Move-in inspection
- Move-out inspection
- Annual inspection
- Safety inspection
- Insurance inspection
- Maintenance inspection

## Core Fields

- inspection_id
- organization_id
- property_id
- building_id
- unit_id
- asset_id
- inspection_type
- inspector_person_id
- inspection_date
- score
- status
- findings_count
- corrective_actions_required
- created_at
- updated_at

## Relationships

Inspection belongs to Property.

Inspection may belong to Unit.

Inspection may involve Asset.

Inspection generates Documents.

Inspection may create Work Orders.

Inspection creates Compliance Records.

## PostgreSQL Role

Stores official inspection records.

## Neo4j Role

Connects inspections to assets, units, findings, corrective actions, and compliance history.
