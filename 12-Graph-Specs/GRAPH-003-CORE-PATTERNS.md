# GRAPH 003: CORE GRAPH PATTERNS

## Purpose

Defines core graph patterns.

## Ownership Pattern

Organization OWNS Portfolio

Portfolio CONTAINS Property

Property CONTAINS Building

Building CONTAINS Unit

## Leasing Pattern

Lease GOVERNS Unit

Person SIGNED_BY Lease

Person OCCUPIES Unit

Lease DOCUMENTS Document

## Maintenance Pattern

WorkOrder RELATED_TO Property

WorkOrder RELATED_TO Unit

WorkOrder RELATED_TO Asset

WorkOrder ASSIGNED_TO Vendor

WorkOrder GENERATED Document

## Financial Pattern

FinancialTransaction RELATED_TO Property

FinancialTransaction RELATED_TO Unit

FinancialTransaction RELATED_TO Lease

FinancialTransaction PAID_TO Vendor

## Status

Active Draft
