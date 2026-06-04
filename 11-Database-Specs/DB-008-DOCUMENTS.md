# DB 008: DOCUMENTS TABLE

## Purpose

Stores document metadata.

## Table Name

documents

## Fields

- document_id UUID PRIMARY KEY
- organization_id UUID NOT NULL
- document_type TEXT
- file_name TEXT
- file_size INTEGER
- file_format TEXT
- storage_location TEXT
- uploaded_by_person_id UUID
- upload_date TIMESTAMP
- retention_policy TEXT
- confidentiality_level TEXT
- created_at TIMESTAMP
- updated_at TIMESTAMP

## Relationships

- document may link to property
- document may link to unit
- document may link to lease
- document may link to person
- document may link to work order
- document may link to inspection
- document may link to financial transaction

## Notes

The file body belongs in object storage. Metadata belongs in PostgreSQL.
