# ENTITY DEEP DIVE 001: PROPERTY

## Purpose

Defines the Property entity in detail.

## Property Represents

A real-world managed location.

## Required Fields

- property_id
- organization_id
- portfolio_id
- property_name
- property_type
- address
- city
- county
- state
- postal_code
- country
- latitude
- longitude
- parcel_number
- year_built
- unit_count
- compliance_context_id
- status

## Key Relationships

- belongs to Organization
- belongs to Portfolio
- contains Buildings
- contains Units
- contains Assets
- has Documents
- has Work Orders
- has Financial Transactions

## Notes

Property is the center of legal jurisdiction, operations, and reporting.
