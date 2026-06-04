# PROPERTY OPERATING SYSTEM

# MASTER DATA MIGRATION AND SEED DATA STRATEGY

Version: 001

Status: Active

---

## PURPOSE

Defines how initial data, demo data, test data, imported data, and future customer migration data should be handled.

This section prepares the platform for development, testing, demos, pilots, and future onboarding.

---

# DATA STRATEGY PRINCIPLES

## Principle 1

Seed data must support testing and demos.

## Principle 2

Migration data must be validated before import.

## Principle 3

Imported records must preserve source history when possible.

## Principle 4

Production customer data must never be casually reused in development.

---

# DATA TYPES

## Seed Data

Created intentionally for local development, testing, and demos.

## Test Data

Used for automated tests.

## Demo Data

Used to show the product to users, investors, or collaborators.

## Migration Data

Imported from spreadsheets, old systems, PDFs, or other property software.

## Production Data

Real customer data.

---

# SEED DATA GOALS

Seed data should create a realistic small landlord environment.

Minimum demo scenario:

- 1 organization
- 1 owner
- 1 property manager
- 2 properties
- 1 duplex
- 1 small apartment building
- 6 units
- 4 tenants
- 4 active leases
- 2 vacant units
- 5 work orders
- 2 inspections
- 10 documents
- 12 financial transactions

---

# CORE SEED RECORDS

## Organization

Example:

Property Operating Demo Company

## Users

- Owner
- Property Manager
- Tenant
- Vendor
- Inspector

## Properties

- Duplex property
- Small apartment property

## Units

- Unit A
- Unit B
- Unit 101
- Unit 102
- Unit 103
- Unit 104

## Tenants

- Active tenant
- Late payment tenant
- New move-in tenant
- Upcoming move-out tenant

---

# WORKFLOW SEED DATA

Seed examples should include:

- Active lease
- Expiring lease
- Vacant unit
- Open work order
- Completed work order
- Move-in inspection
- Move-out inspection
- Rent payment
- Failed payment
- Uploaded document

---

# DOCUMENT SEED DATA

Demo documents should include:

- Lease PDF placeholder
- Inspection report placeholder
- Invoice placeholder
- Insurance certificate placeholder
- Notice placeholder
- Photo placeholder

## Rule

Demo files must be clearly marked as sample documents.

---

# FINANCIAL SEED DATA

Seed financial transactions should include:

- Rent payment
- Late fee
- Security deposit
- Repair expense
- Vendor invoice
- Owner contribution

## Rule

Financial seed data should allow dashboard totals to display realistic values.

---

# COMPLIANCE SEED DATA

Seed compliance examples:

- Insurance expiration
- Required inspection
- Missing document
- Upcoming lease notice deadline
- Open compliance task

## Rule

Compliance seed data should demonstrate risk alerts.

---

# AI SEED DATA

AI testing should include:

- Lease summary source
- Work order history
- Inspection finding
- Tenant communication
- Financial transaction
- Compliance deadline

## Rule

AI test data must include enough context to test retrieval quality.

---

# MIGRATION SOURCES

Future customer import may come from:

- Spreadsheets
- CSV exports
- QuickBooks
- Property management software
- Google Drive
- Dropbox
- PDF leases
- Paper records manually entered

---

# MIGRATION STAGES

## Stage 1

Upload source file.

## Stage 2

Map columns to canonical fields.

## Stage 3

Validate data.

## Stage 4

Preview import.

## Stage 5

Import records.

## Stage 6

Review import results.

## Stage 7

Resolve errors.

---

# IMPORTABLE ENTITIES

Initial import support should eventually include:

- Properties
- Units
- Tenants
- Leases
- Vendors
- Documents
- Financial Transactions
- Work Orders

---

# DATA VALIDATION RULES

Validate:

- Required fields
- Date formats
- Currency values
- Email format
- Duplicate properties
- Duplicate tenants
- Missing unit links
- Missing lease links
- Invalid statuses

---

# DUPLICATE DETECTION

Potential duplicate checks:

- Same property address
- Same tenant email
- Same unit number under same property
- Same lease dates for same unit
- Same invoice number for same vendor

## Rule

Imports should warn before creating likely duplicates.

---

# IMPORT ERROR HANDLING

Import results should show:

- Successful rows
- Failed rows
- Warning rows
- Duplicate warnings
- Missing required fields
- Suggested fixes

---

# TEST DATA RULES

Test data should be predictable.

Automated tests should be able to reset test data.

Test data should not rely on production data.

---

# DEMO DATA RULES

Demo data must be realistic but fictional.

No real tenant names.

No real financial accounts.

No real legal documents.

No real private information.

---

# DATA PRIVACY RULES

Production data must not be copied into:

- Local development
- Demo environments
- Public presentations
- Training screenshots

unless anonymized.

---

# SEED DATA MVP SCOPE

Included:

- Demo organization
- Demo properties
- Demo units
- Demo tenants
- Demo leases
- Demo work orders
- Demo documents
- Demo financial records
- Demo dashboard data

Deferred:

- Full migration wizard
- QuickBooks import
- OCR import
- AI-assisted import
- Bulk document classification

---

# PHASE 63 OUTCOME

This strategy ensures developers, testers, and future users have reliable data foundations for:

- Local development
- Automated testing
- Product demos
- MVP pilots
- Future customer onboarding

