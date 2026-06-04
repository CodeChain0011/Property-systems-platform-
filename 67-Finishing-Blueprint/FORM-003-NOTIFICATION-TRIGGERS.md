# PROPERTY OPERATING SYSTEM — DECISION FORM
# FORM 003: NOTIFICATION TRIGGER MAP
# Version: 001 | Print, fill by hand, scan and share with Claude

---

## HOW TO USE THIS FORM

For each trigger event row:

1. **Notify** — circle the roles that should receive a notification
   - OWN = Owner/Admin   PM = Property Manager   LA = Leasing Agent
   - MC = Maint. Coord.  TEN = Tenant            VEN = Vendor
   - (leave blank if no one gets notified for that event)

2. **Channel** — circle one or more:  EMAIL   IN-APP   PUSH   SMS   (or NONE)

3. **Timing** — write when it fires:  IMMEDIATE / DAILY DIGEST / or a delay like "1 day before"

4. **Content note** — one line describing what the notification says

---
---

# SECTION A: LEASE EVENTS

```
┌─────────────────────────────┬──────────────────────┬─────────────────────┬────────────────┬─────────────────────────────────────┐
│ Event                       │ Notify (circle roles)│ Channel             │ Timing         │ Content Note                        │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Lease created (draft)       │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Lease activated             │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Lease expiring in 90 days   │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Lease expiring in 60 days   │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Lease expiring in 30 days   │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Lease expired               │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Lease terminated early      │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
└─────────────────────────────┴──────────────────────┴─────────────────────┴────────────────┴─────────────────────────────────────┘
```

---

# SECTION B: RENT & PAYMENT EVENTS

```
┌─────────────────────────────┬──────────────────────┬─────────────────────┬────────────────┬─────────────────────────────────────┐
│ Event                       │ Notify (circle roles)│ Channel             │ Timing         │ Content Note                        │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Rent due reminder           │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Rent payment received       │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Rent payment late           │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Rent payment failed         │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Security deposit released   │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
└─────────────────────────────┴──────────────────────┴─────────────────────┴────────────────┴─────────────────────────────────────┘
```

---

# SECTION C: WORK ORDER / MAINTENANCE EVENTS

```
┌─────────────────────────────┬──────────────────────┬─────────────────────┬────────────────┬─────────────────────────────────────┐
│ Event                       │ Notify (circle roles)│ Channel             │ Timing         │ Content Note                        │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Work order created          │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Work order assigned         │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│ (vendor assigned)           │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Work order scheduled        │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│ (date/time confirmed)       │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Work order in progress      │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Work order completed        │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Work order cancelled        │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Emergency WO created        │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│ (priority = emergency)      │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ WO unassigned for N days    │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│ N = _____                   │ TEN VEN              │ SMS   NONE          │                │                                     │
└─────────────────────────────┴──────────────────────┴─────────────────────┴────────────────┴─────────────────────────────────────┘
```

---

# SECTION D: TENANT & MOVE EVENTS

```
┌─────────────────────────────┬──────────────────────┬─────────────────────┬────────────────┬─────────────────────────────────────┐
│ Event                       │ Notify (circle roles)│ Channel             │ Timing         │ Content Note                        │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Tenant account created      │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Move-in confirmed           │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Move-out notice given       │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Move-out completed          │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│ Document shared with tenant │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
└─────────────────────────────┴──────────────────────┴─────────────────────┴────────────────┴─────────────────────────────────────┘
```

---

# SECTION E: ADDITIONAL EVENTS (write your own)

```
┌─────────────────────────────┬──────────────────────┬─────────────────────┬────────────────┬─────────────────────────────────────┐
│ Event                       │ Notify (circle roles)│ Channel             │ Timing         │ Content Note                        │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│                             │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│                             │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
├─────────────────────────────┼──────────────────────┼─────────────────────┼────────────────┼─────────────────────────────────────┤
│                             │ OWN PM LA MC         │ EMAIL IN-APP PUSH   │                │                                     │
│                             │ TEN VEN              │ SMS   NONE          │                │                                     │
└─────────────────────────────┴──────────────────────┴─────────────────────┴────────────────┴─────────────────────────────────────┘
```

---

# SECTION F: GLOBAL NOTIFICATION PREFERENCES

```
┌──────────────────────────────────────────────────────────────┬─────────────────────────────────────┐
│ Question                                                     │ Your Answer                         │
├──────────────────────────────────────────────────────────────┼─────────────────────────────────────┤
│ Can tenants opt out of non-critical notifications?  Y / N    │                                     │
├──────────────────────────────────────────────────────────────┼─────────────────────────────────────┤
│ Are emergency WO notifications always forced (no opt-out)?   │                                     │
│ Y / N                                                        │                                     │
├──────────────────────────────────────────────────────────────┼─────────────────────────────────────┤
│ Default notification channel if user has no preference set:  │                                     │
│ (circle one)  EMAIL   IN-APP   PUSH   SMS                    │                                     │
├──────────────────────────────────────────────────────────────┼─────────────────────────────────────┤
│ Should managers receive a daily digest instead of            │                                     │
│ individual alerts for low-priority events?  Y / N            │                                     │
└──────────────────────────────────────────────────────────────┴─────────────────────────────────────┘
```

---

_Print date: ____________   Filled by: ____________   Scan and share with Claude to generate NOTIFICATION-TRIGGER-MAP-001.md_
