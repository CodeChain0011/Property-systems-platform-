# COMPLIANCE ENGINE 002: JURISDICTION MODEL

## Purpose

Defines how jurisdictions should be modeled.

## Jurisdiction Levels

1. Federal
2. State
3. County
4. City
5. Local housing authority
6. Special district
7. Rent control zone

## Required Fields

- jurisdiction_id
- jurisdiction_name
- jurisdiction_type
- parent_jurisdiction_id
- state_code
- county_name
- city_name
- effective_date
- source_reference
- status

## Rule

Jurisdictions should be hierarchical.

A property may be subject to multiple overlapping jurisdictions.

## Status

Active Draft
