# PropOS — Decision Form 004: Field Validation Rules
**Version 001 · Print → Fill → Scan → Share with Claude**

---

## How to Fill

- **Req?** circle `Y` or `N`
- **Format / Values** write constraint (e.g. `email format` · `1–28` · `positive number` · `max 500 chars`)
- **Business Rule** write any logic beyond format (e.g. `must be after start date` · `cannot change once active`)

---

## Section A — Organization

| # | Field | Req? | Format / Allowed Values | Business Rule |
|---|-------|:----:|------------------------|---------------|
| 1 | organizationName | Y / N | | |
| 2 | legalName | Y / N | | |
| 3 | organizationType | Y / N | | |

---

## Section B — Person

| # | Field | Req? | Format / Allowed Values | Business Rule |
|---|-------|:----:|------------------------|---------------|
| 4 | firstName | Y / N | | |
| 5 | lastName | Y / N | | |
| 6 | displayName | Y / N | | |
| 7 | email | Y / N | valid email format? Y / N | |
| 8 | phone | Y / N | format: _________________ | |
| 9 | preferredContactMethod | Y / N | allowed values: _________ | |

---

## Section C — Property

| # | Field | Req? | Format / Allowed Values | Business Rule |
|---|-------|:----:|------------------------|---------------|
| 10 | propertyName | Y / N | | |
| 11 | propertyType | Y / N | allowed values: _________ | |
| 12 | streetAddress | Y / N | | |
| 13 | city | Y / N | | |
| 14 | state | Y / N | 2-letter code? Y / N | |
| 15 | postalCode | Y / N | format: _________________ | |
| 16 | totalUnits | Y / N | min: ______ max: ________ | |

---

## Section D — Unit

| # | Field | Req? | Format / Allowed Values | Business Rule |
|---|-------|:----:|------------------------|---------------|
| 17 | unitNumber | Y / N | | Unique within property? Y / N |
| 18 | unitType | Y / N | allowed values: _________ | |
| 19 | bedrooms | Y / N | min: ______ max: ________ | |
| 20 | bathrooms | Y / N | 0.5 increments allowed? Y / N | |
| 21 | squareFeet | Y / N | min: ______ max: ________ | |
| 22 | marketRent | Y / N | can be 0? Y / N | |
| 23 | currentRent | Y / N | can be 0? Y / N | |

---

## Section E — Lease

| # | Field | Req? | Format / Allowed Values | Business Rule |
|---|-------|:----:|------------------------|---------------|
| 24 | leaseType | Y / N | allowed values: _________ | |
| 25 | startDate | Y / N | | Can be in the past? Y / N |
| 26 | endDate | Y / N | | Min gap after startDate: ______ |
| 27 | monthlyRent | Y / N | can be 0? Y / N | |
| 28 | securityDepositAmount | Y / N | can be 0? Y / N | Max = N × rent? N = _______ |
| 29 | paymentDueDay | Y / N | min: ______ max: ________ | |
| 30 | primaryTenantId | Y / N | | Must have active role? Y / N |
| 31 | Can a unit have two active leases at once? | Y / N | | |

---

## Section F — Work Order

| # | Field | Req? | Format / Allowed Values | Business Rule |
|---|-------|:----:|------------------------|---------------|
| 32 | description | Y / N | min: ______ max: ________ chars | |
| 33 | category | Y / N | fixed list? Y / N · values: ______ | |
| 34 | priority | Y / N | low / medium / high / emergency | Who can set emergency? ____________ |
| 35 | unitId | Y / N | | Required for tenant submissions? Y / N |
| 36 | estimatedCost | Y / N | | Required before assigning vendor? Y / N |
| 37 | actualCost | Y / N | | Required before closing? Y / N |

---

## Section G — Dashboard KPI Definitions

| # | KPI | Definition — circle or fill in |
|---|-----|-------------------------------|
| 38 | **Occupancy Rate** | Units with status = "occupied" / total active units — OR — active leases / total units · Circle: **STATUS-BASED** / **LEASE-BASED** |
| 39 | **Monthly Revenue** | Sum of monthlyRent on all active leases — OR — payments collected this month · Circle: **EXPECTED** / **COLLECTED** |
| 40 | **Open Work Orders** | All WOs where status NOT IN (completed, closed, cancelled) · Confirm or change: _________________ |
| 41 | **Expiring Leases window** | Show leases expiring within _______ days |
| 42 | **Vacant Units** | Units where occupancyStatus = "vacant" · Confirm or change: _________________ |

---

## Section H — Notes

| # | Note |
|---|------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |

---

*Print date: ____________ · Filled by: ____________ · Scan and share with Claude → generates `10-Requirements/FIELD-VALIDATION-RULES-001.md`*
