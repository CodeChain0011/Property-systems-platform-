# ADR-054 DATABASE CONNECTION STRATEGY

## Decision

The MVP should use hosted PostgreSQL for initial development instead of local Termux PostgreSQL.

## Reason

The development environment is Android Termux, which has already shown platform limits with npm symlinks and Turbopack.

## Consequence

Termux will be used for coding and running the app, while PostgreSQL will run on a hosted provider such as Supabase or Neon.

## Status

Accepted
