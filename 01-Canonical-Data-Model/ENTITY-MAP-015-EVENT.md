# ENTITY MAP 015: EVENT

## Purpose

Represents something that happened.

## Examples

- Lease signed
- Rent received
- Work order opened
- Inspection completed
- Notice sent
- Document uploaded

## Core Fields

- event_id
- organization_id
- event_type
- entity_type
- entity_id
- triggered_by_person_id
- event_timestamp
- event_status
- created_at

## Relationships

Event may involve:

- Person
- Property
- Unit
- Lease
- Work Order
- Inspection
- Document
- Financial Transaction

## PostgreSQL Role

System activity history.

## Neo4j Role

Timeline and relationship analysis.
