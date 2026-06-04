# WORKFLOW 005: RENT COLLECTION

## Purpose

Defines the rent collection lifecycle.

## Trigger

Lease payment schedule reaches rent due date.

## Main Actors

- Tenant
- Owner
- Property Manager
- Payment Processor
- System

## Workflow Steps

1. System generates rent charge.
2. Tenant receives reminder.
3. Tenant submits payment.
4. Payment processor confirms transaction.
5. Financial Transaction is created.
6. Ledger is updated.
7. Receipt is generated.
8. If payment fails, tenant is notified.
9. If payment is late, late fee rules are evaluated.
10. If unpaid after threshold, notice workflow may begin.

## Records Created

- Financial Transaction
- Ledger Entry
- Communication
- Receipt Document
- Event
- Audit Log

## Compliance Notes

Late fees and notices must follow jurisdiction-specific rules.

## Status

Active Draft
