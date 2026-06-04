# ADR-055 SUPABASE CONNECTION

## Decision

The MVP will use Supabase PostgreSQL as the hosted database provider.

## Reason

Hosted PostgreSQL avoids Android Termux database limitations and gives the project a real external database for MVP development.

## Termux Finding

Prisma schema validation works in Termux. Prisma db pull reached Supabase but failed inside the Prisma schema engine, likely due to Android platform limitations.

## Consequence

The project will keep database schema work in Prisma but defer migrations/introspection to a supported environment such as desktop, VPS, GitHub Action, or cloud development environment.

## Status

Accepted
