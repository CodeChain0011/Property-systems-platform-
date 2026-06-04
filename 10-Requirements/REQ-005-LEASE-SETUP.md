# REQ 005: LEASE SETUP

## Requirement ID

REQ-LEASE-001

## User Role

Owner or Property Manager

## Goal

Create a lease record linking tenant to unit.

## Main Flow

1. User opens Unit or Tenant.
2. User selects Create Lease.
3. User selects tenant.
4. User enters lease dates and rent terms.
5. System creates Lease record.
6. System links Lease to Unit.
7. System links Lease to Tenant.
8. System updates Unit occupancy status.
9. System creates Event.
10. System creates Audit Log.

## Data Created

- Lease
- Event
- Audit Log

## Data Updated

- Unit
- Person Role

## Acceptance Criteria

- Lease connects tenant and unit.
- Lease appears under tenant and unit.
- Unit occupancy status updates.
- Audit log is created.

## Priority

High
