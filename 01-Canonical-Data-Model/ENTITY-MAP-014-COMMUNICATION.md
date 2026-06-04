# ENTITY MAP 014: COMMUNICATION

## Purpose

Represents communication between parties.

## Examples

- Email
- SMS
- Letter
- Notice
- Phone log
- Portal message

## Core Fields

- communication_id
- sender_person_id
- recipient_person_id
- communication_type
- subject
- message_body
- delivery_status
- sent_at
- created_at
- updated_at

## Relationships

Communication connects:

- Person
- Lease
- Property
- Unit
- Work Order
- Document
- Event

## PostgreSQL Role

Official communication record.

## Neo4j Role

Relationship history and communication graph.
