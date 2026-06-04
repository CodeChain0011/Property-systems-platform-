# ENTITY MAP 008: APPLICATION

## Purpose

Application represents the pre-lease process for a prospective tenant.

## Examples

- Rental application
- Co-signer application
- Commercial tenant application
- Renewal application

## Core Fields

- application_id
- organization_id
- property_id
- unit_id
- applicant_id
- application_status
- submitted_at
- screening_status
- income_verification_status
- background_check_status
- decision_status
- decision_reason_code
- created_at
- updated_at

## Relationships

Application belongs to Applicant.

Application targets Unit.

Application belongs to Property.

Application has Screening Report.

Application has Documents.

Application may become Lease.

Application creates Decision Record.

## PostgreSQL Role

Stores application data, screening status, and decision records.

## Neo4j Role

Connects applicant, unit, screening documents, communications, decision history, and future lease relationship.

## Notes

Application records must support fair housing audit requirements.
