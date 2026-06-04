# BLUEPRINT 005: RENT COLLECTION

## Purpose

Map rent charge, payment, failure, and reconciliation.

## Flow

1. Lease creates rent obligation.
2. System creates rent charge.
3. Tenant receives reminder.
4. Tenant submits payment.
5. Payment processor confirms result.
6. Ledger updates.
7. Receipt is generated.
8. If failed, retry or alert begins.
9. If late, late fee rules are checked.
10. If unpaid, notice workflow may begin.

## Records Created

- Financial Transaction
- Ledger Entry
- Receipt
- Communication
- Event
- Audit Log

## Automation Opportunities

- Rent reminders
- Failed payment alerts
- Late fee evaluation
- Delinquency risk scoring
