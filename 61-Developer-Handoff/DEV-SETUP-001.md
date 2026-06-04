# PROPERTY OPERATING SYSTEM

# DEV SETUP 001: LOCAL DEVELOPMENT SETUP GUIDE

Version: 001

Status: Active

---

## PURPOSE

Step-by-step guide to get a fully working local development environment
running from a clean checkout. Covers prerequisites, environment variables,
Docker Compose services, database migration, seed data, and running all apps.

Estimated setup time: 20–30 minutes on a first run.

---

# PREREQUISITES

Install the following before starting:

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 22.x LTS | https://nodejs.org or `nvm install 22` |
| npm | 10.x | Comes with Node |
| Docker Desktop | 4.x+ | https://www.docker.com/products/docker-desktop |
| Git | any recent | https://git-scm.com |

Verify your environment:

```bash
node --version    # v22.x.x
npm --version     # 10.x.x
docker --version  # Docker version 4x.x.x
```

---

# REPOSITORY SETUP

```bash
git clone https://github.com/codechain0011/property-operating-system.git
cd property-operating-system
```

---

# ENVIRONMENT VARIABLES

## Step 1 — Copy the env template

```bash
cp .env.example .env
```

If `.env.example` does not exist yet, create `.env` manually using the
variables defined below.

## Required Variables

### Root `.env` (shared across apps via Docker Compose)

```env
# PostgreSQL
POSTGRES_USER=propOS
POSTGRES_PASSWORD=localdevpassword
POSTGRES_DB=propos_dev
DATABASE_URL=postgresql://propOS:localdevpassword@localhost:5432/propos_dev

# Neo4j
NEO4J_URI=bolt://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=localdevpassword

# JWT
JWT_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----"
JWT_PUBLIC_KEY="-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----"
JWT_ACCESS_EXPIRY=900
JWT_REFRESH_EXPIRY=2592000

# App
NODE_ENV=development
API_PORT=3001
WEB_PORT=3000
CORS_ORIGIN=http://localhost:3000

# Object Storage (MinIO for local dev)
S3_ENDPOINT=http://localhost:9000
S3_BUCKET=propos-local
S3_ACCESS_KEY=minioadmin
S3_SECRET_KEY=minioadmin

# Seed Control
ALLOW_PRODUCTION_SEED=false
```

### Generating JWT Keys (run once, paste output into .env)

```bash
# Generate RS256 key pair
openssl genrsa -out jwt_private.pem 2048
openssl rsa -in jwt_private.pem -pubout -out jwt_public.pem

# Print as single-line env var format
echo "JWT_PRIVATE_KEY=\"$(cat jwt_private.pem | awk '{printf "%s\\n", $0}')\""
echo "JWT_PUBLIC_KEY=\"$(cat jwt_public.pem | awk '{printf "%s\\n", $0}')\""

# Clean up key files (don't commit them)
rm jwt_private.pem jwt_public.pem
```

---

# DOCKER COMPOSE

The `docker-compose.yml` at the repo root starts all backing services.
Application code (Next.js, NestJS) runs locally via npm for faster dev iteration.

## docker-compose.yml

```yaml
version: "3.9"

services:
  postgres:
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER}"]
      interval: 5s
      timeout: 5s
      retries: 5

  neo4j:
    image: neo4j:5-community
    restart: unless-stopped
    environment:
      NEO4J_AUTH: ${NEO4J_USER}/${NEO4J_PASSWORD}
      NEO4J_PLUGINS: '["apoc"]'
    ports:
      - "7474:7474"   # Browser UI
      - "7687:7687"   # Bolt protocol
    volumes:
      - neo4j_data:/data

  minio:
    image: minio/minio:latest
    restart: unless-stopped
    command: server /data --console-address ":9001"
    environment:
      MINIO_ROOT_USER: minioadmin
      MINIO_ROOT_PASSWORD: minioadmin
    ports:
      - "9000:9000"
      - "9001:9001"   # MinIO Console
    volumes:
      - minio_data:/data

volumes:
  postgres_data:
  neo4j_data:
  minio_data:
```

## Start services

```bash
docker compose up -d
```

## Verify services are running

```bash
docker compose ps
# All three services should show "running" or "healthy"
```

---

# DATABASE SETUP

## Step 1 — Install Prisma dependencies

```bash
cd packages/database
npm install
```

## Step 2 — Run migrations

```bash
npx prisma migrate dev --name init
```

This creates all tables in your local PostgreSQL instance.

## Step 3 — Generate Prisma client

```bash
npx prisma generate
```

## Step 4 — Run seed data

```bash
npx prisma db seed
```

This loads the canonical seed data defined in `63-Data-Migration-Seed/SEED-001-MASTER.md`
into your local database. See that document for the full list of seed records.

## Step 5 — Verify (optional)

```bash
npx prisma studio
# Opens Prisma Studio at http://localhost:5555
# Confirm seed records appear in each table
```

---

# INSTALL APP DEPENDENCIES

```bash
# From the repo root:

cd apps/api && npm install && cd ../..
cd apps/web && npm install && cd ../..
```

---

# RUN THE APPLICATIONS

Open two terminal windows (or use a process manager like `tmux`).

## Terminal 1 — NestJS API

```bash
cd apps/api
npm run start:dev
```

API runs at: `http://localhost:3001`

Verify: `curl http://localhost:3001/health` → `{ "status": "ok" }`

## Terminal 2 — Next.js Web App

```bash
cd apps/web
npm run dev
```

Web app runs at: `http://localhost:3000`

Open `http://localhost:3000` in your browser.

---

# SERVICE URLS SUMMARY

| Service | URL | Notes |
|---------|-----|-------|
| Web app (Next.js) | http://localhost:3000 | |
| API (NestJS) | http://localhost:3001 | |
| PostgreSQL | localhost:5432 | User: propOS, DB: propos_dev |
| Neo4j Browser | http://localhost:7474 | User: neo4j |
| MinIO Console | http://localhost:9001 | User: minioadmin |
| Prisma Studio | http://localhost:5555 | Run `npx prisma studio` first |

---

# SEED USER CREDENTIALS

Use these accounts to log in during local development.
Passwords follow the format `Dev1234!` for all seed users.

| Name | Email | Role |
|------|-------|------|
| Jordan Mercer | jordan.mercer@greenfieldpg.dev | Owner |
| Alex Rivera | alex.rivera@greenfieldpg.dev | Property Manager |
| Morgan Chen | morgan.chen@devmail.test | Tenant |
| Priya Okafor | priya.okafor@devmail.test | Tenant |
| Dana Walsh | dana@walshplumbing.dev | Vendor |
| Casey Burns | casey@burnselectric.dev | Vendor |

---

# COMMON COMMANDS REFERENCE

```bash
# Reset database and re-seed from scratch
cd packages/database
npx prisma migrate reset   # drops DB, re-runs migrations, re-runs seed

# Run API tests
cd apps/api
npm test

# Run API e2e tests (requires running Postgres)
npm run test:e2e

# Lint everything
cd apps/api && npm run lint
cd apps/web && npm run lint

# Build for production
cd apps/api && npm run build
cd apps/web && npm run build

# Check Prisma schema is valid
cd packages/database && npx prisma validate

# Open Neo4j browser
open http://localhost:7474
# Credentials: neo4j / localdevpassword

# Open MinIO Console (create bucket manually on first run)
open http://localhost:9001
# Create bucket named: propos-local
```

---

# TROUBLESHOOTING

## Postgres connection refused

- Confirm Docker is running: `docker compose ps`
- Confirm `DATABASE_URL` in `.env` matches Docker Compose credentials
- Wait a few seconds after `docker compose up -d` for healthcheck to pass

## Prisma migration fails

- Confirm `DATABASE_URL` is set correctly in `.env`
- Run `npx prisma migrate reset` to wipe and start fresh
- Check for TypeScript errors in `schema.prisma` with `npx prisma validate`

## Next.js build error: Cannot find module

- Run `npm install` inside `apps/web`
- Clear `.next` cache: `rm -rf apps/web/.next` and restart

## NestJS won't start

- Run `npm install` inside `apps/api`
- Check for TypeScript errors: `cd apps/api && npx tsc --noEmit`
- Confirm `API_PORT=3001` in `.env` and port is not occupied

## Neo4j connection refused

- Allow 30–60 seconds for Neo4j to fully initialize after `docker compose up -d`
- Confirm bolt port 7687 is not used by another process

## JWT errors on API calls

- Confirm `JWT_PRIVATE_KEY` and `JWT_PUBLIC_KEY` are set in `.env`
- Key must be in PEM format with literal `\n` between lines (not actual newlines) in `.env`

---

# WORKFLOW: ADDING A NEW DATABASE FIELD

1. Edit `packages/database/prisma/schema.prisma`
2. Run `npx prisma migrate dev --name describe_your_change`
3. Run `npx prisma generate` to update the client
4. Update seed data in `packages/database/prisma/seed.ts` if needed
5. Update the relevant DB spec in `11-Database-Specs/`

---

# WORKFLOW: ADDING A NEW API ENDPOINT

1. Create or update the controller in `apps/api/src/<domain>/`
2. Register the controller in `apps/api/src/app.module.ts`
3. Add the endpoint to `53-API-Architecture/MASTER-API-ARCHITECTURE.md`
4. Write a test in `apps/api/src/<domain>/<domain>.controller.spec.ts`

---

# PHASE 61 OUTCOME

This document covers:
- All prerequisites and version requirements
- Environment variable reference with generation instructions for JWT keys
- Docker Compose service definitions (PostgreSQL, Neo4j, MinIO)
- Step-by-step migration, seed, and run instructions
- Seed user credentials for all six roles
- Common commands reference
- Troubleshooting for the most frequent setup failures
- Contribution workflows for schema and API changes
