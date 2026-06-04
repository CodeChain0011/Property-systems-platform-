# DB 004: PEOPLE TABLE

## Purpose

Stores human identity records.

## Table Name

people

## Fields

- person_id UUID PRIMARY KEY
- organization_id UUID
- first_name TEXT
- last_name TEXT
- display_name TEXT
- email TEXT
- phone TEXT
- alternate_phone TEXT
- mailing_address TEXT
- preferred_contact_method TEXT
- identity_status TEXT
- created_at TIMESTAMP
- updated_at TIMESTAMP

## Relationships

- person has many roles
- person may be tenant
- person may be applicant
- person may be owner
- person may be vendor contact
- person may create communications
- person may upload documents

## Notes

A person can have multiple roles over time.
