# MAINTENANCE KNOWLEDGE GRAPH

## Core Concepts

Property
Unit
Asset
Work Order
Vendor
Inspection
Invoice

## Relationships

Asset GENERATES WorkOrder

Vendor PERFORMS WorkOrder

Inspection IDENTIFIES AssetIssue

WorkOrder CREATES Invoice

Invoice RELATES_TO Asset

## Operational Questions

- Which assets fail most often?
- Which vendors perform best?
- Which properties have highest maintenance cost?
- Which inspections generated repairs?

