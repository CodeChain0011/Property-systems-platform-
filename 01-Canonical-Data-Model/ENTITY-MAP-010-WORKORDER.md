# ENTITY MAP 010: WORK ORDER

## Purpose

Work Order represents a maintenance task, repair request, inspection action, or operational activity.

## Examples

- Plumbing repair
- HVAC service
- Tenant request
- Preventive maintenance
- Safety correction
- Turnover preparation

## Core Fields

- work_order_id
- organization_id
- property_id
- building_id
- unit_id
- asset_id
- requester_person_id
- assigned_vendor_id
- priority
- category
- status
- requested_date
- assigned_date
- completed_date
- estimated_cost
- actual_cost
- created_at
- updated_at

## Relationships

Work Order belongs to Property.

Work Order may belong to Unit.

Work Order may belong to Asset.

Work Order may involve Vendor.

Work Order may involve Tenant.

Work Order generates Documents.

Work Order generates Communications.

Work Order generates Events.

## PostgreSQL Role

Stores official maintenance workflow records.

## Neo4j Role

Maps maintenance relationships and operational dependencies.
