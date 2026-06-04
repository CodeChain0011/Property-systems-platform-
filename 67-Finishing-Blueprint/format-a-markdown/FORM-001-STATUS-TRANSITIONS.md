# PropOS — Decision Form 001: Status Transitions
**Version 001 · Print → Fill → Scan → Share with Claude**

---

## Role Key

| Abbrev | Role |
|--------|------|
| OWN | Owner / Administrator |
| PM | Property Manager |
| LA | Leasing Agent |
| MC | Maintenance Coordinator |
| TEN | Tenant |
| VEN | Vendor |

**Cell values:** `Y` = allowed · `N` = blocked · leave blank if unsure

---

## Section A — Work Order Transition Grid
**Row = FROM · Column = TO**

| FROM \ TO | new | under_review | assigned | scheduled | in_progress | waiting | completed | closed | cancelled |
|-----------|:---:|:------------:|:--------:|:---------:|:-----------:|:-------:|:---------:|:------:|:---------:|
| **new** | — | | | | | | | | |
| **under_review** | | — | | | | | | | |
| **assigned** | | | — | | | | | | |
| **scheduled** | | | | — | | | | | |
| **in_progress** | | | | | — | | | | |
| **waiting** | | | | | | — | | | |
| **completed** | | | | | | | — | | |
| **closed** | | | | | | | | — | |
| **cancelled** | | | | | | | | | — |

---

## Section B — Work Order Transition Details

| # | Transition | Who Can Trigger | Side Effects / Notes |
|---|-----------|-----------------|----------------------|
| 1 | new → under_review | | |
| 2 | new → cancelled | | |
| 3 | under_review → assigned | | |
| 4 | under_review → cancelled | | |
| 5 | assigned → scheduled | | |
| 6 | assigned → new (un-assign) | | |
| 7 | scheduled → in_progress | | |
| 8 | in_progress → waiting | | |
| 9 | in_progress → completed | | |
| 10 | waiting → in_progress | | |
| 11 | completed → in_progress (reopen) | | |
| 12 | completed → closed | | |
| 13 | *(add your own)* | | |
| 14 | *(add your own)* | | |

---

## Section C — Lease Transition Grid
**Row = FROM · Column = TO**

| FROM \ TO | draft | active | expired | terminated |
|-----------|:-----:|:------:|:-------:|:----------:|
| **draft** | — | | | |
| **active** | | — | | |
| **expired** | | | — | |
| **terminated** | | | | — |

---

## Section D — Lease Transition Details

| # | Transition | Who Can Trigger | Side Effects / Notes |
|---|-----------|-----------------|----------------------|
| 1 | draft → active | | |
| 2 | draft → terminated (cancel draft) | | |
| 3 | active → expired (auto or manual?) | | |
| 4 | active → terminated (early) | | |
| 5 | expired → active (renewal) | | |
| 6 | terminated → active (reinstate?) | | |

---

## Section E — Additional Questions

| # | Question | Answer |
|---|----------|--------|
| 1 | When lease activates, does unit occupancyStatus auto → "occupied"? Y / N | |
| 2 | When lease terminates, does unit auto → "vacant"? Y / N | |
| 3 | Can two active leases exist on the same unit? Y / N | |
| 4 | When WO moves to in_progress, does tenant get notified? Y / N | |
| 5 | WO completed: manager must confirm/close, OR auto-close after N days? CONFIRM / AUTO | |
| 6 | If auto-close, how many days? | |
| 7 | *(add your own)* | |

---

*Print date: ____________ · Filled by: ____________ · Scan and share with Claude → generates `03-Workflows/STATUS-TRANSITIONS-001.md`*
