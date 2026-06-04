# PHASE 2F DATABASE CONNECTION STRATEGY

## Status

Active

## Decision Needed

The Property Operating System needs a PostgreSQL database connection before migrations and real API data can work.

## Recommended Path

Use hosted PostgreSQL for MVP development.

## Best MVP Options

### Option 1: Supabase

Good for:

- Hosted PostgreSQL
- Simple dashboard
- Easy connection string
- Future auth/storage options

### Option 2: Neon

Good for:

- Hosted PostgreSQL
- Developer-friendly branching
- Serverless PostgreSQL

### Option 3: Local Termux PostgreSQL

Good for:

- Learning
- Offline development

Not recommended first because Android/Termux already has platform limits.

## Recommended Choice

Supabase or Neon.

## Required From User

The user must create the hosted PostgreSQL project and provide only the DATABASE_URL value for local `.env`.

Do not commit secrets to Git.

## Local File

packages/database/.env

## Example

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

## Rule

Never commit the real DATABASE_URL.

Only commit `.env.example`.

## Next Step

Create hosted PostgreSQL database, then update local `.env`.
