# ORGANIZATIONS TABLE

```sql
CREATE TABLE organizations (
    organization_id UUID PRIMARY KEY,
    organization_name TEXT NOT NULL,
    organization_type TEXT,
    legal_name TEXT,
    primary_contact_id UUID,
    billing_contact_id UUID,
    default_timezone TEXT,
    default_currency TEXT DEFAULT 'USD',
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);
cd ~/storage/documents/property-operating-system

mkdir -p 51-Database-Schema-Design

cat > 51-Database-Schema-Design/MASTER-DATABASE-SCHEMA.md <<'EOF'
# PROPERTY OPERATING SYSTEM

# MASTER DATABASE SCHEMA

Version: 001

Status: Active

---

## PURPOSE

Defines the primary PostgreSQL schema for the Property Operating System.

PostgreSQL is the official system of record.

Neo4j provides relationship intelligence.

---

# DATABASE STANDARDS

## Primary Keys

All major entities use UUID.

## Common Fields

Most tables should include:

- id
- organization_id
- created_at
- updated_at
- created_by
- updated_by
- status

## Naming Convention

snake_case

## Audit Requirement

Critical changes create audit log entries.

---

# CORE TABLES

## organizations

Stores the root operating entity.

Fields:

- organization_id
- organization_name
- legal_name
- organization_type
- status
- created_at
- updated_at

---

## portfolios

Groups properties.

Fields:

- portfolio_id
- organization_id
- portfolio_name
- portfolio_type
- status
- created_at
- updated_at

---

## properties

Stores real property locations.

Fields:

- property_id
- organization_id
- portfolio_id
- property_name
- property_type
- street_address
- city
- county
- state
- postal_code
- country
- latitude
- longitude
- parcel_number
- year_built
- total_units
- occupancy_status
- status

---

## buildings

Stores physical structures.

Fields:

- building_id
- organization_id
- property_id
- building_name
- building_type
- year_built
- floor_count
- status

---

## units

Stores rentable spaces.

Fields:

- unit_id
- organization_id
- property_id
- building_id
- unit_number
- unit_type
- bedrooms
- bathrooms
- square_feet
- market_rent
- current_rent
- occupancy_status
- availability_date
- status

---

## people

Stores human identities.

Fields:

- person_id
- organization_id
- first_name
- last_name
- display_name
- email
- phone
- mailing_address
- preferred_contact_method
- identity_status

Examples:

- Tenant
- Owner
- Manager
- Vendor Contact
- Inspector
- Accountant

---

## roles

Assigns permissions.

Fields:

- role_id
- organization_id
- person_id
- role_type
- permission_group
- start_date
- end_date
- status

Examples:

- Owner
- Manager
- Tenant
- Vendor
- Inspector
- Accountant

---

## leases

Stores legal occupancy agreements.

Fields:

- lease_id
- organization_id
- property_id
- unit_id
- primary_tenant_id
- lease_type
- start_date
- end_date
- monthly_rent
- security_deposit_amount
- payment_due_day
- lease_status
- renewal_status

---

## lease_parties

Supports multiple tenants and guarantors.

Fields:

- lease_party_id
- lease_id
- person_id
- party_type
- signature_status

---

## applications

Rental applications.

Fields:

- application_id
- organization_id
- applicant_person_id
- property_id
- unit_id
- application_date
- screening_status
- decision_status

---

## assets

Tracks physical systems.

Examples:

- HVAC
- Roof
- Water Heater
- Appliance
- Electrical Panel
- Plumbing

Fields:

- asset_id
- property_id
- building_id
- unit_id
- asset_name
- asset_type
- manufacturer
- model_number
- serial_number
- install_date
- expected_life_years
- warranty_expiration
- condition_rating
- replacement_cost

---

## work_orders

Maintenance workflow.

Fields:

- work_order_id
- property_id
- building_id
- unit_id
- asset_id
- requester_person_id
- assigned_vendor_id
- category
- priority
- status
- description
- requested_date
- assigned_date
- completed_date
- estimated_cost
- actual_cost

---

## inspections

Inspection records.

Fields:

- inspection_id
- property_id
- building_id
- unit_id
- asset_id
- inspection_type
- inspector_person_id
- inspection_date
- score
- findings_count
- corrective_actions_required

---

## inspection_findings

Issues found during inspections.

Fields:

- finding_id
- inspection_id
- category
- severity
- description
- recommended_action
- work_order_required
- work_order_id
- status

---

## documents

Metadata for files.

Files remain in object storage.

Fields:

- document_id
- document_type
- file_name
- file_size
- file_format
- storage_location
- uploaded_by_person_id
- upload_date
- retention_policy
- confidentiality_level

---

## document_links

Allows documents to attach to any entity.

Fields:

- document_link_id
- document_id
- entity_type
- entity_id
- relationship_type

Examples:

- Lease PDF
- Inspection Photo
- Vendor Invoice
- Insurance Certificate

---

## financial_transactions

Money movement.

Fields:

- transaction_id
- portfolio_id
- property_id
- unit_id
- lease_id
- vendor_id
- transaction_type
- amount
- transaction_date
- payment_method
- ledger_account
- reference_number
- status

Examples:

- Rent Payment
- Security Deposit
- Vendor Payment
- Late Fee
- Repair Expense

---

## communications

Messages and notices.

Fields:

- communication_id
- sender_person_id
- recipient_person_id
- communication_type
- subject
- message_body
- delivery_status
- sent_at

Examples:

- Email
- SMS
- Notice
- Portal Message

---

## events

System activity history.

Fields:

- event_id
- event_type
- entity_type
- entity_id
- triggered_by_person_id
- event_timestamp
- event_status

Examples:

- Lease Signed
- Rent Paid
- Work Order Created
- Inspection Completed

---

## audit_logs

Immutable accountability records.

Fields:

- audit_id
- actor_person_id
- action_type
- entity_type
- entity_id
- before_value
- after_value
- timestamp
- source_ip

---

# INDEXING STRATEGY

Required indexes:

- organization_id
- property_id
- unit_id
- lease_id
- person_id
- status
- created_at

Goal:

Fast dashboard loading and reporting.

---

# MIGRATION STRATEGY

Rules:

- All changes use migrations
- Production migrations tested first
- Backups before destructive changes
- Rollback plan required
- Version controlled

---

# PHASE 51 OUTCOME

This schema establishes:

- Property records
- Tenant records
- Lease records
- Asset records
- Maintenance records
- Inspection records
- Financial records
- Compliance records
- Document records
- Communication records
- Audit records

This becomes the PostgreSQL foundation for the Property Operating System.

