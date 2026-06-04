# PROPERTY OPERATING SYSTEM

# MASTER SCREEN BLUEPRINT LIBRARY

Version: 001

Status: Active

---

## PURPOSE

Defines the major user interface screens for the Property Operating System.

This section converts workflows, entities, dashboards, and permissions into screen-level product requirements.

---

# SCREEN DESIGN PRINCIPLES

## Principle 1

Every screen should answer what the user needs to know and what action they can take.

## Principle 2

Screens should follow business workflows, not database structure.

## Principle 3

Every screen must respect permissions.

## Principle 4

Every high-risk action must create an audit record.

---

# GLOBAL LAYOUT

## Main Navigation

- Dashboard
- Properties
- Units
- Tenants
- Applicants
- Leases
- Maintenance
- Inspections
- Vendors
- Financials
- Documents
- Communications
- Compliance
- Reports
- AI Copilot
- Settings

---

# SCREEN 001: OWNER DASHBOARD

## Purpose

Provide an owner-level summary of portfolio health.

## Widgets

- Total Properties
- Total Units
- Occupancy Rate
- Rent Collected This Month
- Outstanding Rent
- Open Work Orders
- Upcoming Lease Expirations
- Compliance Alerts
- AI Recommended Actions

## Primary Actions

- View Properties
- View Financials
- View Work Orders
- View Reports

## Data Sources

- properties
- units
- leases
- financial_transactions
- work_orders
- compliance_records

---

# SCREEN 002: PROPERTY LIST

## Purpose

Show all properties available to the user.

## Columns

- Property Name
- Address
- Type
- Units
- Occupancy
- Open Work Orders
- Status

## Actions

- Add Property
- View Property
- Filter
- Search
- Export

---

# SCREEN 003: PROPERTY DETAIL

## Purpose

Single source of truth for a property.

## Sections

- Summary
- Units
- Tenants
- Leases
- Maintenance
- Inspections
- Documents
- Financials
- Compliance
- Activity

## Primary Actions

- Add Unit
- Upload Document
- Create Work Order
- Schedule Inspection
- View Report

---

# SCREEN 004: BUILDING DETAIL

## Purpose

Support properties with multiple buildings.

## Sections

- Building Summary
- Units
- Assets
- Inspections
- Work Orders
- Documents

## Actions

- Add Unit
- Add Asset
- Create Inspection
- Create Work Order

---

# SCREEN 005: UNIT DETAIL

## Purpose

Show full unit-level operating status.

## Sections

- Unit Summary
- Occupancy
- Current Lease
- Tenant
- Work Orders
- Inspections
- Assets
- Documents
- Financial Activity

## Actions

- Create Lease
- Add Tenant
- Create Work Order
- Schedule Inspection
- Upload Document

---

# SCREEN 006: TENANT PROFILE

## Purpose

Show tenant-level operating history.

## Sections

- Contact Information
- Lease History
- Payment History
- Maintenance Requests
- Communications
- Notices
- Documents

## Actions

- Send Message
- View Lease
- Record Payment
- Upload Document
- Create Notice

---

# SCREEN 007: APPLICANT PIPELINE

## Purpose

Track prospective tenants.

## Columns

- New
- Incomplete
- Screening
- Review
- Approved
- Denied
- Converted to Tenant

## Actions

- Review Application
- Request Documents
- Approve
- Deny
- Generate Lease

---

# SCREEN 008: LEASE WORKSPACE

## Purpose

Manage lease records.

## Sections

- Lease Summary
- Parties
- Terms
- Documents
- Payments
- Notices
- Renewal
- Activity

## Actions

- Upload Lease
- Activate Lease
- Renew Lease
- Terminate Lease
- Generate Notice

---

# SCREEN 009: MAINTENANCE BOARD

## Purpose

Manage maintenance work orders.

## Columns

- New
- Under Review
- Assigned
- Scheduled
- In Progress
- Waiting
- Completed
- Closed

## Filters

- Property
- Unit
- Vendor
- Priority
- Category
- Status

## Actions

- Create Work Order
- Assign Vendor
- Update Status
- Upload Photos
- Close Work Order

---

# SCREEN 010: WORK ORDER DETAIL

## Purpose

Manage one maintenance request from start to finish.

## Sections

- Summary
- Request Details
- Tenant Information
- Property and Unit
- Asset
- Vendor
- Photos
- Notes
- Invoice
- Activity

## Actions

- Assign Vendor
- Schedule Visit
- Add Note
- Upload Evidence
- Approve Invoice
- Close Work Order

---

# SCREEN 011: INSPECTION WORKSPACE

## Purpose

Complete structured inspections.

## Sections

- Inspection Summary
- Checklist
- Findings
- Photos
- Videos
- Signatures
- Work Orders
- Report

## Actions

- Start Inspection
- Add Finding
- Upload Photo
- Create Work Order
- Complete Inspection
- Export Report

---

# SCREEN 012: DOCUMENT VAULT

## Purpose

Central document management.

## Categories

- Leases
- Applications
- Notices
- Inspections
- Invoices
- Insurance
- Permits
- Photos
- Videos
- Tax Records

## Actions

- Upload
- Search
- Filter
- Link to Record
- Download
- Archive

---

# SCREEN 013: FINANCIAL DASHBOARD

## Purpose

Show financial health.

## Widgets

- Rent Collected
- Outstanding Rent
- Expenses
- Net Cash Flow
- Security Deposits Held
- Vendor Payments
- Delinquency
- Property Profitability

## Actions

- Add Transaction
- View Rent Roll
- View Expense Report
- Export Report

---

# SCREEN 014: COMPLIANCE DASHBOARD

## Purpose

Show compliance status and risk.

## Widgets

- Upcoming Deadlines
- Missing Documents
- Expiring Insurance
- Expiring Licenses
- Open Violations
- Required Notices
- Inspection Requirements

## Actions

- Create Task
- Upload Document
- Generate Notice
- View Rule
- Mark Complete

---

# SCREEN 015: VENDOR PORTAL

## Purpose

Vendor workspace for assigned work.

## Sections

- Assigned Work Orders
- Schedule
- Messages
- Documents
- Invoices
- Profile

## Actions

- Accept Job
- Update Status
- Upload Photos
- Submit Invoice
- Send Message

---

# SCREEN 016: TENANT PORTAL

## Purpose

Tenant self-service interface.

## Sections

- Dashboard
- Lease
- Payments
- Maintenance
- Documents
- Notices
- Messages
- Profile

## Actions

- Submit Maintenance
- Upload Photos
- View Lease
- View Notices
- Send Message
- Pay Rent

---

# SCREEN 017: REPORTS CENTER

## Purpose

Central reporting area.

## Report Categories

- Owner Reports
- Property Reports
- Unit Reports
- Financial Reports
- Maintenance Reports
- Compliance Reports
- Vendor Reports
- AI Insight Reports

## Actions

- View Report
- Filter
- Export
- Schedule Report

---

# SCREEN 018: AI COPILOT WORKSPACE

## Purpose

Provide AI-assisted operational support.

## Copilot Modes

- Owner Copilot
- Manager Copilot
- Maintenance Copilot
- Compliance Copilot
- Financial Copilot
- Leasing Copilot

## Actions

- Ask Question
- Summarize Record
- Explain Risk
- Generate Checklist
- Find Documents
- Suggest Next Action

## Rule

AI only accesses records the user is authorized to view.

---

# SCREEN 019: SETTINGS

## Purpose

Configure platform behavior.

## Sections

- Organization Settings
- Users
- Roles
- Permissions
- Notifications
- Billing
- Integrations
- Security
- Data Export

---

# SCREEN 020: EXECUTIVE DASHBOARD

## Purpose

Enterprise-level overview.

## Widgets

- Portfolio Health
- Regional Performance
- Financial Trends
- Compliance Exposure
- Maintenance Burden
- Vendor Performance
- AI Risk Summary

## Rule

Executive dashboard must support drill-down.

---

# MOBILE SCREEN PRIORITIES

## Mobile-First Screens

- Tenant Dashboard
- Maintenance Request
- Vendor Work Order
- Inspection Checklist
- Photo Upload
- Notices
- Messages

---

# MVP SCREEN SCOPE

## Included in MVP

- Login
- Owner Dashboard
- Property List
- Property Detail
- Unit Detail
- Tenant Profile
- Lease Workspace
- Maintenance Board
- Work Order Detail
- Document Vault
- Basic Financial Dashboard

## Deferred

- Advanced AI Workspace
- Executive Dashboard
- Custom Report Builder
- Enterprise Admin Console
- Advanced Compliance Screens

---

# PHASE 54 OUTCOME

This screen blueprint library gives product designers and developers a first complete map of the application interface.

