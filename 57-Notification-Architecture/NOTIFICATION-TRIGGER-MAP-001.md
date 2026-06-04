# PROPERTY OPERATING SYSTEM

# NOTIFICATION TRIGGER MAP

Document: NOTIFICATION-TRIGGER-MAP-001

Version: 001

Status: Active

Date: 2026-06-04

---

## PURPOSE

Maps every system event to the specific roles that receive a notification, the channel used, and the message type.

Every feature that creates or mutates a core record must check this map and fire the appropriate notifications.

---

# CHANNELS

| Code | Meaning |
|------|---------|
| IN_APP | In-app notification bell / notification drawer |
| EMAIL | Transactional email via configured email provider |
| PUSH | Mobile push notification (post-MVP; mark as deferred for MVP) |

MVP delivers IN_APP and EMAIL only. PUSH is listed for completeness but deferred.

---

# PRIORITY LEVELS

| Level | Meaning |
|-------|---------|
| IMMEDIATE | Send within seconds of event |
| DAILY_DIGEST | Batch into daily summary email |
| NONE | Log only, no notification |

---

# LEASE NOTIFICATIONS

## LEASE_CREATED (draft created)

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| property_manager | IN_APP | IMMEDIATE | New draft lease created for [unit] |
| leasing_agent (creator) | IN_APP | IMMEDIATE | Draft lease created successfully |

## LEASE_ACTIVATED (draft → active)

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| tenant (primary) | EMAIL | IMMEDIATE | Your lease at [address] is now active. Start date: [date]. Monthly rent: $[amount]. |
| tenant (primary) | IN_APP | IMMEDIATE | Lease activated for [unit] |
| property_manager | IN_APP | IMMEDIATE | Lease activated: [tenant] at [unit] |
| owner | IN_APP | IMMEDIATE | Lease activated: [unit] is now occupied |

## LEASE_EXPIRING_60_DAYS (system check, 60 days before endDate)

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| tenant (primary) | EMAIL | IMMEDIATE | Your lease expires in 60 days. Contact your manager to discuss renewal. |
| property_manager | IN_APP | IMMEDIATE | Lease for [tenant] at [unit] expires in 60 days |

## LEASE_EXPIRING_30_DAYS (system check, 30 days before endDate)

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| tenant (primary) | EMAIL | IMMEDIATE | Your lease expires in 30 days. |
| property_manager | EMAIL | IMMEDIATE | Lease expiring in 30 days: [tenant] at [unit] |
| owner | IN_APP | IMMEDIATE | Lease renewal action needed: [unit] |

## LEASE_EXPIRED (active → expired)

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| property_manager | EMAIL | IMMEDIATE | Lease has expired: [tenant] at [unit] — unit is now vacant |
| owner | IN_APP | IMMEDIATE | Lease expired: [unit] is vacant |

## LEASE_TERMINATED (active → terminated)

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| tenant (primary) | EMAIL | IMMEDIATE | Your lease at [address] has been terminated. Effective date: [date]. |
| tenant (primary) | IN_APP | IMMEDIATE | Lease terminated |
| property_manager | IN_APP | IMMEDIATE | Lease terminated: [tenant] at [unit] |
| owner | IN_APP | IMMEDIATE | Lease terminated: [unit] |

---

# WORK ORDER NOTIFICATIONS

## WORK_ORDER_CREATED

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| property_manager | IN_APP | IMMEDIATE | New work order submitted: [category] at [unit] |
| maintenance_coordinator | IN_APP | IMMEDIATE | New work order requires review: [category] at [unit] |

Note: If priority = emergency, also send EMAIL to property_manager and owner.

## WORK_ORDER_CREATED (emergency priority)

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| property_manager | EMAIL | IMMEDIATE | EMERGENCY work order: [category] at [unit] — immediate action required |
| owner | EMAIL | IMMEDIATE | EMERGENCY work order: [category] at [unit] |
| maintenance_coordinator | EMAIL | IMMEDIATE | EMERGENCY work order assigned to your queue |

## WORK_ORDER_ASSIGNED

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| vendor (assigned) | EMAIL | IMMEDIATE | Work order assigned to you: [category] at [address, unit]. Details: [description]. |
| tenant (requester, if tenant) | IN_APP | IMMEDIATE | Your maintenance request is being handled |

## WORK_ORDER_SCHEDULED

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| tenant (unit occupant) | IN_APP | IMMEDIATE | Maintenance scheduled for [date]: [category] |
| tenant (unit occupant) | EMAIL | IMMEDIATE | Maintenance appointment: [date and time] at your unit |
| property_manager | IN_APP | IMMEDIATE | Work order scheduled: [category] at [unit] on [date] |

## WORK_ORDER_COMPLETED

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| property_manager | IN_APP | IMMEDIATE | Work order completed: [category] at [unit] — awaiting sign-off |
| owner | IN_APP | DAILY_DIGEST | Work order completed: [category] at [unit] |
| tenant (requester, if tenant) | IN_APP | IMMEDIATE | Your maintenance request has been completed |

## WORK_ORDER_CLOSED

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| tenant (requester, if tenant) | IN_APP | IMMEDIATE | Maintenance work order closed: [category] |
| maintenance_coordinator | IN_APP | IMMEDIATE | Work order signed off and closed |

## WORK_ORDER_CANCELLED

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| tenant (requester, if tenant) | IN_APP | IMMEDIATE | Your maintenance request was cancelled. Reason: [reason if provided] |
| maintenance_coordinator | IN_APP | IMMEDIATE | Work order cancelled: [category] at [unit] |

## WORK_ORDER_WAITING

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| property_manager | IN_APP | IMMEDIATE | Work order on hold: [category] at [unit] |

---

# INSPECTION NOTIFICATIONS

## INSPECTION_SCHEDULED

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| tenant (unit occupant) | EMAIL | IMMEDIATE | Inspection scheduled for your unit on [date]. Access will be required. |
| tenant (unit occupant) | IN_APP | IMMEDIATE | Inspection notice: [date] |
| property_manager | IN_APP | IMMEDIATE | Inspection scheduled: [unit] on [date] |

## INSPECTION_COMPLETED

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| property_manager | IN_APP | IMMEDIATE | Inspection completed: [unit] — [N] findings |
| owner | IN_APP | DAILY_DIGEST | Inspection completed: [unit] |
| inspector (author) | IN_APP | IMMEDIATE | Inspection report submitted |

---

# FINANCIAL NOTIFICATIONS

## PAYMENT_RECORDED

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| tenant (payer) | EMAIL | IMMEDIATE | Payment received: $[amount] for [period]. Reference: [id]. |
| tenant (payer) | IN_APP | IMMEDIATE | Payment confirmed: $[amount] |
| property_manager | IN_APP | DAILY_DIGEST | Payment recorded: $[amount] from [tenant] |

## RENT_OVERDUE (system check, 1 day after paymentDueDay with no payment)

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| tenant (primary) | EMAIL | IMMEDIATE | Rent payment overdue. Amount due: $[amount]. Please remit payment or contact your manager. |
| property_manager | IN_APP | IMMEDIATE | Overdue rent: [tenant] at [unit] — [N] days past due |
| owner | IN_APP | DAILY_DIGEST | Overdue rent alert: [unit] |

## RENT_OVERDUE_7_DAYS

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| tenant (primary) | EMAIL | IMMEDIATE | Rent is 7 days overdue. Please contact your property manager immediately. |
| property_manager | EMAIL | IMMEDIATE | Rent 7 days overdue: [tenant] at [unit] — $[amount] |
| owner | IN_APP | IMMEDIATE | Rent overdue 7 days: [unit] |

---

# DOCUMENT NOTIFICATIONS

## DOCUMENT_UPLOADED (linked to lease)

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| tenant (lease party) | IN_APP | IMMEDIATE | A new document has been added to your lease: [document name] |
| property_manager | IN_APP | NONE | — (no notification, they uploaded it) |

## DOCUMENT_UPLOADED (general, uploaded by tenant)

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| property_manager | IN_APP | IMMEDIATE | Tenant uploaded a document: [name] |

## DOCUMENT_DELETED

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| property_manager | IN_APP | IMMEDIATE | Document deleted: [name] |
| owner | IN_APP | NONE | — |

---

# SYSTEM / ACCOUNT NOTIFICATIONS

## USER_INVITED

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| invited user (any role) | EMAIL | IMMEDIATE | You have been invited to [org name]. Click to set up your account. |

## PASSWORD_RESET_REQUESTED

| Recipient Role | Channel | Priority | Message Summary |
|----------------|---------|----------|-----------------|
| requesting user | EMAIL | IMMEDIATE | Password reset link (expires 1 hour). |

---

# NOTIFICATION SUPPRESSION RULES

1. A user who triggers an event does not receive the notification for that event (no self-notifications).
2. Owners opted into daily digest do not receive per-event IN_APP for DAILY_DIGEST events.
3. Emergency work orders override digest preferences — always send immediately.
4. Tenant does not receive notifications about records they cannot read (permission boundary).

---

# NOTIFICATION-TRIGGER-MAP-001 OUTCOME

Every feature that mutates a core record has a lookup for whether a notification fires, to whom, and by what channel.

No feature ships without checking this map.
