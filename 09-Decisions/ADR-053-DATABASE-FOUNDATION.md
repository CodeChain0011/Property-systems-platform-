# ADR-053 DATABASE FOUNDATION

## Decision

The MVP database foundation will use Prisma with PostgreSQL models inside packages/database.

## Reason

The platform requires a controlled database schema for organizations, people, roles, properties, units, leases, work orders, and audit logs.

## Termux Decision

Because Prisma 7 no longer supports datasource URLs directly inside schema.prisma, the project uses prisma.config.ts for DATABASE_URL configuration.

## Consequence

Future database models and migrations will build from this Prisma foundation.

## Status

Accepted
