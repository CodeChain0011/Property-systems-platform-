# ENTITY DEEP DIVE 003: WORK ORDER

## Purpose

Defines the Work Order entity in detail.

## Work Order Represents

A maintenance, repair, inspection, or operational task.

## Required Fields

- work_order_id
- organization_id
- property_id
- unit_id
- asset_id
- requester_id
- assigned_vendor_id
- category
- priority
- status
- description
- requested_date
- completed_date
- estimated_cost
- actual_cost

## Key Relationships

- belongs to Property
- may belong to Unit
- may relate to Asset
- may be assigned to Vendor
- may generate Documents
- may create Financial Transactions

## Notes

Work Orders connect tenant experience, vendors, assets, and expenses.
