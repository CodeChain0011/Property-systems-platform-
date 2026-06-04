# ENTITY MAP 017: PERMISSION

## Purpose

Defines access rights.

## Examples

- View Lease
- Edit Property
- Approve Payment
- Create Work Order
- View Financials

## Core Fields

- permission_id
- permission_name
- permission_category
- role_id
- scope
- created_at
- updated_at

## Relationships

Permission belongs to Role.

Permission controls Workflow Access.

Permission controls Data Visibility.

## PostgreSQL Role

Official authorization records.

## Neo4j Role

Access relationship mapping.
