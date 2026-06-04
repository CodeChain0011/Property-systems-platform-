# ENTITY MAP 016: VENDOR

## Purpose

Represents companies or contractors providing services.

## Examples

- Plumber
- Electrician
- HVAC Company
- Roofer
- Painter
- Landscaper

## Core Fields

- vendor_id
- vendor_name
- business_type
- contact_person_id
- phone
- email
- license_number
- insurance_status
- tax_id_reference
- vendor_status
- created_at
- updated_at

## Relationships

Vendor receives Work Orders.

Vendor submits Invoices.

Vendor performs Services.

Vendor receives Payments.

Vendor stores Documents.

## PostgreSQL Role

Official vendor records.

## Neo4j Role

Vendor performance and relationship mapping.
