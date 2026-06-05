# PROPERTY OPERATING SYSTEM

# STATUS TRANSITIONS

Document: STATUS-TRANSITIONS-001

Version: 001

Status: Active

Date: 2026-06-04

---

## PURPOSE

Defines every legal status transition for Lease and WorkOrder.

Sets the rules for who can trigger each transition, what side effects fire, and what transitions are permanently blocked.

Every PATCH endpoint that changes a status field must enforce these rules.

---

# LEASE STATUS TRANSITIONS

## Status Enum

```
draft
active
expired
terminated
```

## Legal Transitions

### draft → active

Trigger: Property manager or owner explicitly activates the lease.

Who can trigger: property_manager, administrator, owner.

Side effects:
- Unit.occupancyStatus changes to occupied.
- AuditLog entry created: LEASE_ACTIVATED.
- Notification: tenant receives in-app and email confirmation.
- Notification: property_manager receives in-app confirmation.

Validation required before allowing:
- startDate must be present and valid.
- primaryTenantId must reference an existing active Person.
- unitId must be in status vacant.
- monthlyRent must be present and >= 0.

### draft → terminated

Trigger: Lease cancelled before it was ever activated.

Who can trigger: property_manager, administrator, owner.

Side effects:
- AuditLog entry created: LEASE_CANCELLED.
- Unit.occupancyStatus remains vacant.

### active → expired

Trigger: System auto-transition when endDate passes and lease is still active.

Who can trigger: system process only.

Side effects:
- Unit.occupancyStatus changes to vacant (unless a new active lease exists for the unit).
- AuditLog entry created: LEASE_EXPIRED.
- Notification: property_manager receives in-app alert.

Note: Month-to-month leases with no endDate do not auto-expire.

### active → terminated

Trigger: Early termination by manager or owner.

Who can trigger: property_manager, administrator, owner.

Approval required: owner or administrator must confirm.

Side effects:
- Unit.occupancyStatus changes to notice_given (tenant still occupying) or vacant (if tenant has vacated).
- AuditLog entry created: LEASE_TERMINATED.
- Notification: tenant receives email and in-app notice.
- Notification: property_manager receives in-app confirmation.

---

## Blocked Lease Transitions

| From | To | Blocked | Reason |
|------|----|---------|--------|
| active | draft | BLOCKED | Cannot un-activate a lease |
| terminated | active | BLOCKED | Create a new lease instead |
| terminated | draft | BLOCKED | Terminal state |
| expired | active | BLOCKED | Create a new lease instead |
| expired | draft | BLOCKED | Terminal state |

---

## Lease Status Summary Table

| From \ To | draft | active | expired | terminated |
|-----------|-------|--------|---------|------------|
| draft | — | ALLOWED (PM+) | — | ALLOWED (PM+) |
| active | BLOCKED | — | SYSTEM ONLY | ALLOWED (Owner+) |
| expired | — | BLOCKED | — | — |
| terminated | — | BLOCKED | — | — |

---

# WORK ORDER STATUS TRANSITIONS

## Status Enum

```
new
under_review
assigned
scheduled
in_progress
waiting
completed
closed
cancelled
```

## Legal Transitions

### new → under_review

Trigger: Coordinator or manager begins review.

Who can trigger: maintenance_coordinator, property_manager, administrator, owner.

Side effects:
- AuditLog entry: WORK_ORDER_REVIEWED.

### new → cancelled

Trigger: Request determined invalid or duplicate.

Who can trigger: property_manager, administrator, owner.

Side effects:
- AuditLog entry: WORK_ORDER_CANCELLED.
- Notification: requester receives in-app notification with reason.

### under_review → assigned

Trigger: Vendor or staff member assigned.

Who can trigger: maintenance_coordinator, property_manager, administrator, owner.

Validation required: assignedVendorId or assignedPersonId must be set.

Side effects:
- AuditLog entry: WORK_ORDER_ASSIGNED.
- Notification: assigned vendor receives email.
- Notification: tenant receives in-app notice that work order is being addressed.

### under_review → cancelled

Who can trigger: property_manager, administrator, owner.

Side effects:
- AuditLog entry: WORK_ORDER_CANCELLED.

### assigned → scheduled

Trigger: Appointment date set.

Who can trigger: maintenance_coordinator, property_manager, administrator, owner.

Validation required: scheduledDate must be present and in the future.

Side effects:
- AuditLog entry: WORK_ORDER_SCHEDULED.
- Notification: tenant receives in-app appointment notice with date.

### assigned → under_review

Trigger: Vendor declines or assignment must be re-done.

Who can trigger: maintenance_coordinator, property_manager, administrator, owner.

Side effects:
- AuditLog entry: WORK_ORDER_REASSIGNMENT.

### scheduled → in_progress

Trigger: Work begins on site.

Who can trigger: maintenance_coordinator, property_manager, administrator, owner.

Side effects:
- AuditLog entry: WORK_ORDER_STARTED.

### scheduled → assigned

Trigger: Appointment cancelled; vendor not yet on site.

Who can trigger: maintenance_coordinator, property_manager, administrator, owner.

Side effects:
- AuditLog entry: WORK_ORDER_RESCHEDULED.
- Notification: tenant receives in-app update.

### in_progress → waiting

Trigger: Work paused pending parts, approval, or access.

Who can trigger: maintenance_coordinator, property_manager, administrator, owner.

Side effects:
- AuditLog entry: WORK_ORDER_WAITING.

### in_progress → completed

Trigger: Work physically finished.

Who can trigger: maintenance_coordinator, property_manager, administrator, owner.

Validation required: completedDate must be set. actualCost recommended but not blocked.

Side effects:
- AuditLog entry: WORK_ORDER_COMPLETED.
- Notification: property_manager and owner receive in-app notice.
- Notification: original requester (if tenant) receives in-app notice.

### waiting → in_progress

Trigger: Blocker resolved.

Who can trigger: maintenance_coordinator, property_manager, administrator, owner.

Side effects:
- AuditLog entry: WORK_ORDER_RESUMED.

### waiting → cancelled

Who can trigger: property_manager, administrator, owner.

Side effects:
- AuditLog entry: WORK_ORDER_CANCELLED.

### completed → closed

Trigger: Manager reviews and signs off.

Who can trigger: property_manager, administrator, owner.

Side effects:
- AuditLog entry: WORK_ORDER_CLOSED.

### completed → in_progress

Trigger: Work found inadequate; must be re-done. Allowed within 30 days of completion.

Who can trigger: maintenance_coordinator, property_manager, administrator, owner.

Side effects:
- AuditLog entry: WORK_ORDER_REOPENED.
- Notification: assigned vendor receives in-app notice.

---

## Blocked Work Order Transitions

| From | To | Blocked | Reason |
|------|----|---------|--------|
| closed | any | BLOCKED | Terminal state |
| cancelled | any | BLOCKED | Terminal state |
| completed | in_progress | BLOCKED after 30 days | Use new work order |
| new | completed | BLOCKED | Must follow workflow |
| new | closed | BLOCKED | Must follow workflow |

---

## Work Order Status Summary Table

| From \ To | new | under_review | assigned | scheduled | in_progress | waiting | completed | closed | cancelled |
|-----------|-----|--------------|----------|-----------|-------------|---------|-----------|--------|-----------|
| new | — | ALLOWED (MC+) | — | — | — | — | — | — | ALLOWED (PM+) |
| under_review | — | — | ALLOWED (MC+) | — | — | — | — | — | ALLOWED (PM+) |
| assigned | — | ALLOWED (MC+) | — | ALLOWED (MC+) | — | — | — | — | ALLOWED (PM+) |
| scheduled | — | — | ALLOWED (MC+) | — | ALLOWED (MC+) | — | — | — | ALLOWED (PM+) |
| in_progress | — | — | — | — | — | ALLOWED (MC+) | ALLOWED (MC+) | — | — |
| waiting | — | — | — | — | ALLOWED (MC+) | — | — | — | ALLOWED (PM+) |
| completed | — | — | — | — | ALLOWED (MC+, ≤30d) | — | — | ALLOWED (PM+) | — |
| closed | — | — | — | — | — | — | — | — | — |
| cancelled | — | — | — | — | — | — | — | — | — |

---

# ROLE ABBREVIATIONS USED IN TABLES

- MC+ = maintenance_coordinator and above
- PM+ = property_manager and above
- Owner+ = owner and administrator only
- System = automated process, no human actor

---

# STATUS-TRANSITIONS-001 OUTCOME

Every developer writing a status-changing endpoint has a single authoritative source.

No guessing. No inconsistency. Blocked transitions fail with HTTP 422 and a descriptive message.
