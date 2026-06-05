# PROPERTY OPERATING SYSTEM

# FIELD VALIDATION RULES

Document: FIELD-VALIDATION-RULES-001

Version: 001

Status: Active

Date: 2026-06-04

---

## PURPOSE

Defines the exact validation constraints for every field in every core Prisma model.

Frontend forms and backend DTOs must enforce the same rules. These rules are the single source of truth.

Where frontend and backend disagree, backend wins. Backend must always validate.

---

# VALIDATION CODES

| Code | Meaning |
|------|---------|
| REQUIRED | Field must be present and non-empty |
| OPTIONAL | Field may be absent or null |
| MIN | Minimum value or minimum string length |
| MAX | Maximum value or maximum string length |
| FORMAT | Must match a specific pattern |
| ENUM | Must be one of a defined list |
| REF | Must reference an existing record in the same organization |
| LOGIC | Cross-field constraint (e.g., end must be after start) |

---

# ORGANIZATION

| Field | Rule | Constraint | Error Message |
|-------|------|-----------|---------------|
| organizationName | REQUIRED | 2–200 chars | Organization name is required (2–200 characters) |
| legalName | OPTIONAL | max 300 chars | Legal name cannot exceed 300 characters |
| organizationType | OPTIONAL | ENUM: landlord, property_management_company, hoa, other | Invalid organization type |
| status | REQUIRED | ENUM: active, inactive, archived | Invalid status |

---

# PERSON

| Field | Rule | Constraint | Error Message |
|-------|------|-----------|---------------|
| displayName | REQUIRED | 2–200 chars | Display name is required (2–200 characters) |
| firstName | OPTIONAL | max 100 chars | First name cannot exceed 100 characters |
| lastName | OPTIONAL | max 100 chars | Last name cannot exceed 100 characters |
| email | OPTIONAL (staff) / REQUIRED (tenant, vendor) | valid email format; RFC 5322 | Invalid email address |
| phone | OPTIONAL | E.164 or (xxx) xxx-xxxx; 7–15 digits after stripping formatting | Invalid phone number |
| preferredContactMethod | OPTIONAL | ENUM: email, phone, sms, in_app | Invalid contact method |
| organizationId | OPTIONAL | REF: Organization.id | Organization not found |
| status | REQUIRED | ENUM: active, inactive, archived | Invalid status |

Note: email is required when the person is assigned a tenant or vendor role.

---

# ROLE

| Field | Rule | Constraint | Error Message |
|-------|------|-----------|---------------|
| organizationId | REQUIRED | REF: Organization.id | Organization not found |
| personId | REQUIRED | REF: Person.id (same org) | Person not found |
| roleType | REQUIRED | ENUM: owner, administrator, property_manager, leasing_agent, maintenance_coordinator, tenant, vendor, inspector, accountant, attorney | Invalid role type |
| permissionGroup | OPTIONAL | max 100 chars | — |
| status | REQUIRED | ENUM: active, inactive, archived | Invalid status |

Note: A person may hold multiple roles within the same organization.

---

# PROPERTY

| Field | Rule | Constraint | Error Message |
|-------|------|-----------|---------------|
| organizationId | REQUIRED | REF: Organization.id | Organization not found |
| propertyName | OPTIONAL | max 200 chars | Property name cannot exceed 200 characters |
| propertyType | OPTIONAL | ENUM: single_family, duplex, triplex, fourplex, apartment, commercial, mixed_use, condo, townhouse, mobile_home, other | Invalid property type |
| streetAddress | REQUIRED | 5–300 chars | Street address is required |
| city | REQUIRED | 2–100 chars | City is required |
| state | REQUIRED (US) | 2-letter US state code or full name | State is required for US properties |
| postalCode | REQUIRED (US) | 5 digits or 5+4 format (xxxxx or xxxxx-xxxx) | Invalid postal code |
| country | REQUIRED | default US; ISO 3166-1 alpha-2 | Country code is required |
| totalUnits | REQUIRED | INTEGER; min 1, max 10000 | Total units must be between 1 and 10000 |
| status | REQUIRED | ENUM: active, inactive, archived | Invalid status |

---

# UNIT

| Field | Rule | Constraint | Error Message |
|-------|------|-----------|---------------|
| organizationId | REQUIRED | REF: Organization.id | Organization not found |
| propertyId | REQUIRED | REF: Property.id (same org) | Property not found |
| unitNumber | REQUIRED | 1–50 chars; UNIQUE within property | Unit number is required and must be unique within the property |
| unitType | OPTIONAL | ENUM: studio, one_bed, two_bed, three_bed, four_plus_bed, commercial | Invalid unit type |
| bedrooms | OPTIONAL | INTEGER; min 0 (studio), max 20 | Bedrooms must be between 0 and 20 |
| bathrooms | OPTIONAL | FLOAT; increments of 0.5; min 0.5, max 10 | Bathrooms must be between 0.5 and 10 in 0.5 increments |
| squareFeet | OPTIONAL | INTEGER; min 100, max 50000 | Square footage must be between 100 and 50,000 |
| marketRent | OPTIONAL | FLOAT; min 0, max 100000 | Market rent must be between $0 and $100,000 |
| currentRent | OPTIONAL | FLOAT; min 0, max 100000 | Current rent must be between $0 and $100,000 |
| occupancyStatus | REQUIRED | ENUM: vacant, occupied, notice_given, maintenance_hold | Invalid occupancy status |
| status | REQUIRED | ENUM: active, inactive, archived | Invalid status |

---

# LEASE

| Field | Rule | Constraint | Error Message |
|-------|------|-----------|---------------|
| organizationId | REQUIRED | REF: Organization.id | Organization not found |
| propertyId | REQUIRED | REF: Property.id (same org) | Property not found |
| unitId | REQUIRED | REF: Unit.id (same property) | Unit not found |
| primaryTenantId | REQUIRED | REF: Person.id (same org; must have tenant role) | Tenant not found |
| leaseType | OPTIONAL | ENUM: fixed, month_to_month, week_to_week | Invalid lease type |
| startDate | REQUIRED | valid date; not more than 1 year in the past | Start date is required |
| endDate | OPTIONAL | LOGIC: if provided, must be strictly after startDate; required if leaseType = fixed | End date must be after start date |
| monthlyRent | REQUIRED | FLOAT; min 0, max 100000 | Monthly rent is required ($0–$100,000) |
| securityDepositAmount | OPTIONAL | FLOAT; min 0, max 500000 | Security deposit must be $0 or more |
| paymentDueDay | OPTIONAL | INTEGER; min 1, max 28 | Payment due day must be between 1 and 28 |
| leaseStatus | REQUIRED | ENUM: draft, active, expired, terminated | Invalid lease status (use status transition endpoint to change) |

Cross-field rule: When leaseType = fixed, endDate is required.

Cross-field rule: unitId's occupancyStatus must be vacant when activating a lease (enforced at activation, not creation).

---

# WORK ORDER

| Field | Rule | Constraint | Error Message |
|-------|------|-----------|---------------|
| organizationId | REQUIRED | REF: Organization.id | Organization not found |
| propertyId | REQUIRED | REF: Property.id (same org) | Property not found |
| unitId | OPTIONAL | REF: Unit.id (same property) | Unit not found |
| requesterPersonId | OPTIONAL | REF: Person.id (same org) | Requester not found |
| category | REQUIRED | ENUM: plumbing, electrical, hvac, appliance, structural, exterior, pest_control, cleaning, landscaping, locksmith, other | Category is required |
| priority | REQUIRED | ENUM: low, medium, high, emergency | Priority is required |
| description | REQUIRED | 10–2000 chars | Description is required (10–2000 characters) |
| requestedDate | REQUIRED | valid date; max +24 hours in the future | Requested date is required |
| estimatedCost | OPTIONAL | FLOAT; min 0, max 1000000 | Estimated cost must be $0 or more |
| actualCost | OPTIONAL (REQUIRED when status = completed) | FLOAT; min 0, max 1000000 | Actual cost is required when closing a work order |
| completedDate | OPTIONAL (REQUIRED when status = completed) | LOGIC: must be >= requestedDate and <= now + 24h | Completed date must be on or after requested date |
| status | REQUIRED | ENUM: new, under_review, assigned, scheduled, in_progress, waiting, completed, closed, cancelled | Use status transition endpoint to change status |

Cross-field rule: When status transitions to completed, both completedDate and actualCost are required.

Cross-field rule: status may only be changed via the dedicated status transition endpoint, not via a general PATCH.

---

# AUDIT LOG

Audit log records are system-created only. No user-submitted fields require validation.

System must always write:
- organizationId
- actorPersonId (nullable for system events)
- actionType (string; max 100 chars)
- entityType (string; max 100 chars)
- entityId (UUID)
- createdAt (auto)

---

# GENERAL RULES APPLYING TO ALL MODELS

## UUIDs

All id fields are UUID v4, generated server-side. Never accepted from client input.

## Timestamps

createdAt and updatedAt are managed by Prisma. Never accepted from client input.

## String Trimming

All string fields are trimmed of leading and trailing whitespace before storage.

## Empty String

An empty string after trimming is treated as null for optional fields. Required fields reject empty strings.

## Encoding

All text fields accept UTF-8. No binary content in text fields.

## Monetary Amounts

All monetary amounts are stored as FLOAT in PostgreSQL but returned to clients rounded to 2 decimal places.

Max 2 decimal places accepted from client. Extra decimals are rejected.

---

# VALIDATION ERROR RESPONSE FORMAT

All validation errors return HTTP 422 Unprocessable Entity with body:

```json
{
  "statusCode": 422,
  "message": "Validation failed",
  "errors": [
    {
      "field": "monthlyRent",
      "code": "MIN",
      "message": "Monthly rent is required ($0–$100,000)"
    }
  ]
}
```

Multiple validation errors are returned together, not one at a time.

---

# FIELD-VALIDATION-RULES-001 OUTCOME

Frontend forms and backend DTOs have a single source of truth.

No inconsistencies between what the UI allows and what the API accepts.

All validation errors return structured, actionable messages.
