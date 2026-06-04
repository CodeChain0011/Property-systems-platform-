# PROPERTY OPERATING SYSTEM

# MASTER PERMISSION MATRIX

Version: 001

Status: Active

---

## PURPOSE

Defines authorization rules for every major role in the Property Operating System.

Authentication proves identity.

Authorization determines access.

---

# CORE ROLES

## Organization Owner

Highest business authority.

## Administrator

System administration authority.

## Property Manager

Property operations authority.

## Leasing Agent

Applicant and lease authority.

## Maintenance Coordinator

Maintenance authority.

## Vendor

External contractor.

## Inspector

Inspection authority.

## Accountant

Financial visibility authority.

## Attorney

Legal document authority.

## Tenant

Self-service authority.

## AI Copilot

Restricted delegated authority.

---

# PERMISSION LEVELS

NONE

VIEW

CREATE

UPDATE

DELETE

APPROVE

ADMINISTER

---

# ORGANIZATION PERMISSIONS

Organization Owner
- Full Access

Administrator
- Full Access

Property Manager
- View

Tenant
- None

Vendor
- None

---

# PROPERTY PERMISSIONS

Owner
- Full

Administrator
- Full

Property Manager
- Full

Leasing Agent
- View

Maintenance Coordinator
- View

Vendor
- Limited View

Tenant
- None

---

# UNIT PERMISSIONS

Owner
- Full

Administrator
- Full

Property Manager
- Full

Leasing Agent
- Full

Maintenance Coordinator
- View

Vendor
- Assigned Only

Tenant
- Own Unit Only

---

# TENANT RECORDS

Owner
- View

Administrator
- View

Property Manager
- View

Leasing Agent
- View

Maintenance Coordinator
- Limited View

Vendor
- None

Tenant
- Self Only

Attorney
- View

---

# APPLICATIONS

Owner
- View

Administrator
- Full

Property Manager
- Full

Leasing Agent
- Full

Tenant
- Own Application

Vendor
- None

---

# LEASES

Owner
- View

Administrator
- Full

Property Manager
- Full

Leasing Agent
- Create Update

Tenant
- Own Lease View

Vendor
- None

Attorney
- View

---

# WORK ORDERS

Owner
- View

Administrator
- Full

Property Manager
- Full

Maintenance Coordinator
- Full

Vendor
- Assigned Work Orders

Tenant
- Own Requests

Inspector
- View

---

# INSPECTIONS

Owner
- View

Administrator
- Full

Property Manager
- Full

Inspector
- Full

Vendor
- None

Tenant
- View Relevant Reports

---

# DOCUMENTS

Owner
- View

Administrator
- Full

Property Manager
- Full

Leasing Agent
- Relevant Documents

Maintenance Coordinator
- Relevant Documents

Vendor
- Assigned Documents

Tenant
- Own Documents

Attorney
- Legal Documents

---

# FINANCIAL RECORDS

Owner
- Full

Administrator
- Full

Property Manager
- View

Leasing Agent
- None

Maintenance Coordinator
- Limited

Vendor
- Own Invoices

Tenant
- Own Charges

Accountant
- Full

Attorney
- Limited

---

# COMPLIANCE RECORDS

Owner
- View

Administrator
- Full

Property Manager
- Full

Inspector
- View

Attorney
- View

Tenant
- None

Vendor
- None

---

# REPORTS

Owner
- Full

Administrator
- Full

Property Manager
- Operational Reports

Accountant
- Financial Reports

Attorney
- Legal Reports

Tenant
- Personal Reports Only

Vendor
- Vendor Reports Only

---

# USER MANAGEMENT

Owner
- Full

Administrator
- Full

Property Manager
- None

Tenant
- None

Vendor
- None

---

# ROLE MANAGEMENT

Owner
- Full

Administrator
- Full

Everyone Else
- None

---

# AUDIT LOGS

Owner
- View

Administrator
- Full

Property Manager
- Limited

Everyone Else
- None

---

# AI COPILOT PERMISSIONS

AI may:

- Search
- Summarize
- Explain
- Recommend
- Forecast

AI may NOT:

- Sign Documents
- Approve Payments
- Approve Leases
- Approve Evictions
- Delete Records
- Change Permissions

AI only sees records visible to the user.

---

# PERMISSION INHERITANCE

Organization

inherits to

Portfolio

inherits to

Property

inherits to

Building

inherits to

Unit

unless explicitly overridden.

---

# SENSITIVE DATA RULES

Sensitive categories:

- Social Security Numbers
- Tax IDs
- Banking Data
- Payment Methods
- Legal Documents
- Medical Data

Require elevated permissions.

---

# APPROVAL ACTIONS

Require approval authority:

- Lease Activation
- Lease Termination
- Security Deposit Release
- Vendor Payment
- User Creation
- Permission Changes
- Compliance Closure

---

# PHASE 55 OUTCOME

Provides the security foundation for:

- APIs
- Screens
- Reports
- Documents
- AI
- Workflows
- Compliance
- Financial Operations

