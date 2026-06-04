# SCHEMA 001: CORE TABLES

## Purpose

Defines the first development database tables.

## Core Tables

- organizations
- people
- roles
- portfolios
- properties
- buildings
- units
- leases
- assets
- work_orders
- documents
- financial_transactions
- events
- audit_logs

## Rule

Every table must include organization_id where multi-tenant separation is required.
