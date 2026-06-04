# ENTITY MAP 018: AUDIT LOG

## Purpose

Provides immutable accountability records.

## Examples

- Lease edited
- Payment approved
- User login
- Permission changed
- Document deleted

## Core Fields

- audit_id
- organization_id
- actor_person_id
- action_type
- entity_type
- entity_id
- before_value
- after_value
- timestamp
- source_ip

## Relationships

Audit Log records actions against every major entity.

## PostgreSQL Role

Official compliance and accountability record.

## Neo4j Role

Historical relationship analysis.

## Rule

Nothing important happens without an audit record.
