# PropOS — Decision Form 003: Notification Trigger Map
**Version 001 · Print → Fill → Scan → Share with Claude**

---

## How to Fill

- **Notify:** circle role abbreviations who get notified
- **Channel:** circle one or more — `EMAIL` `IN-APP` `PUSH` `SMS` `NONE`
- **Timing:** write when it fires — `IMMEDIATE` · `DAILY DIGEST` · or e.g. `3 days before`
- **Content note:** one line — what does it say?

`OWN` Owner · `PM` Property Manager · `LA` Leasing Agent · `MC` Maint. Coord. · `TEN` Tenant · `VEN` Vendor

---

## Section A — Lease Events

| # | Event | Notify (circle) | Channel (circle) | Timing | Content Note |
|---|-------|-----------------|------------------|--------|--------------|
| 1 | Lease created (draft) | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 2 | Lease activated | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 3 | Lease expiring in 90 days | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 4 | Lease expiring in 60 days | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 5 | Lease expiring in 30 days | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 6 | Lease expired | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 7 | Lease terminated early | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |

---

## Section B — Rent & Payment Events

| # | Event | Notify (circle) | Channel (circle) | Timing | Content Note |
|---|-------|-----------------|------------------|--------|--------------|
| 8 | Rent due reminder | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 9 | Rent payment received | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 10 | Rent payment late | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 11 | Rent payment failed | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 12 | Security deposit released | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |

---

## Section C — Work Order Events

| # | Event | Notify (circle) | Channel (circle) | Timing | Content Note |
|---|-------|-----------------|------------------|--------|--------------|
| 13 | Work order created | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 14 | Work order assigned (vendor set) | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 15 | Work order scheduled (date set) | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 16 | Work order in progress | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 17 | Work order completed | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 18 | Work order cancelled | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 19 | Emergency WO created | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 20 | WO unassigned for N days (N=___) | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |

---

## Section D — Tenant & Move Events

| # | Event | Notify (circle) | Channel (circle) | Timing | Content Note |
|---|-------|-----------------|------------------|--------|--------------|
| 21 | Tenant account created | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 22 | Move-in confirmed | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 23 | Move-out notice given | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 24 | Move-out completed | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 25 | Document shared with tenant | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |

---

## Section E — Extra Events (add your own)

| # | Event | Notify (circle) | Channel (circle) | Timing | Content Note |
|---|-------|-----------------|------------------|--------|--------------|
| 26 | | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 27 | | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |
| 28 | | OWN PM LA MC TEN VEN | EMAIL IN-APP PUSH SMS NONE | | |

---

## Section F — Global Preferences

| # | Question | Answer |
|---|----------|--------|
| 1 | Can tenants opt out of non-critical notifications? Y / N | |
| 2 | Are emergency WO notifications always forced (no opt-out)? Y / N | |
| 3 | Default channel if user has no preference — circle: EMAIL · IN-APP · PUSH · SMS | |
| 4 | Should managers get a daily digest for low-priority events instead of individual alerts? Y / N | |

---

*Print date: ____________ · Filled by: ____________ · Scan and share with Claude → generates `57-Notification-Architecture/NOTIFICATION-TRIGGER-MAP-001.md`*
