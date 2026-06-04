# API 004: FILE STORAGE

## Purpose

Defines how files are stored and connected to system records.

## File Types

- Lease PDFs
- Inspection photos
- Inspection videos
- Invoices
- Receipts
- Notices
- Insurance documents
- Vendor licenses
- Tax records

## Storage Rule

The file itself belongs in object storage.

The file metadata belongs in PostgreSQL.

The file relationship context belongs in Neo4j.

## Status

Active Draft
