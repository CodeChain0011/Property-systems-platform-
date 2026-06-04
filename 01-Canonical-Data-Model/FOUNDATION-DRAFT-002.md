# PROPERTY OPERATING SYSTEM

## FOUNDATION DRAFT 002

### Canonical Data Model

The Canonical Data Model serves as the single source of truth for the entire platform.

Every feature, workflow, report, automation, API endpoint, AI process, dashboard, and integration must ultimately connect to this model.

---

## Entity Hierarchy

Organization
└── Portfolio
    └── Property
        └── Building
            └── Unit

---

## Core Entities

### Organization

Represents a legal or operational business entity.

Examples:

- Individual Landlord
- LLC
- Property Management Company
- REIT
- Enterprise Operator

---

### Portfolio

Represents a collection of properties grouped together for management and reporting.

Examples:

- Residential Portfolio
- Commercial Portfolio
- California Portfolio
- Luxury Housing Portfolio

---

### Property

Represents a physical real estate location.

Examples:

- Single Family Home
- Duplex
- Apartment Community
- Commercial Center

---

### Building

Represents a physical structure located on a property.

Properties may contain:

- One Building
- Multiple Buildings

---

### Unit

Represents rentable or assignable space.

Examples:

- Apartment
- Office Suite
- Retail Space
- Storage Unit
- Parking Space

---

## Person Entity

All human actors are represented through Person.

Examples:

- Owner
- Tenant
- Applicant
- Manager
- Vendor
- Inspector
- Attorney
- Accountant

---

## Asset Entity

Represents physical systems and equipment.

Examples:

- Roof
- HVAC
- Water Heater
- Appliance
- Electrical Panel
- Irrigation System
- Elevator
- Security Camera

---

## Relationship Philosophy

The system should not hardcode assumptions.

Instead:

Person
→ has Role

Role
→ interacts with Property

Property
→ contains Buildings

Buildings
→ contain Units

Units
→ contain Assets

Assets
→ generate Events

Events
→ generate Records

Records
→ generate Intelligence

---

## Architectural Objective

Every future module must attach to the Canonical Data Model before implementation begins.
