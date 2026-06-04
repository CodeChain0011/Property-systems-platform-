# WORKFLOW 002: MAINTENANCE LIFECYCLE

## Purpose

Defines how a maintenance issue moves from request to completion.

## Trigger

Tenant, manager, inspection, or system creates a maintenance request.

## Main Actors

- Tenant
- Property Manager
- Vendor
- Maintenance Worker
- System

## Workflow Steps

1. Issue is reported.
2. System creates Work Order.
3. Work Order links to Property, Unit, Asset, and Requester.
4. Priority is assigned.
5. Manager reviews request.
6. Vendor is assigned.
7. Vendor accepts work.
8. Vendor schedules repair.
9. Tenant is notified.
10. Work is completed.
11. Vendor uploads invoice and photos.
12. Manager reviews completion.
13. Financial Transaction is created.
14. Asset lifecycle record is updated.
15. Work Order is closed.

## Records Created

- Work Order
- Communication
- Document
- Financial Transaction
- Asset History
- Event
- Audit Log

## Status

Active Draft
