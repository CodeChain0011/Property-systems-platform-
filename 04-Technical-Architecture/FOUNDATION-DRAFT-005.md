# PROPERTY OPERATING SYSTEM

## FOUNDATION DRAFT 005

### Technical Architecture

This document defines the initial technical direction.

## Recommended Architecture

The platform should use a hybrid architecture:

- PostgreSQL for structured business records
- Neo4j for relationships, graph intelligence, and complex connections
- Object storage for documents, photos, videos, and reports
- API layer for web, mobile, integrations, and AI tools
- Event system for automation and notifications

## Core Technical Layers

1. Frontend web application
2. Mobile application
3. API backend
4. SQL database
5. Graph database
6. File storage
7. Authentication and permissions
8. Notification service
9. Workflow engine
10. AI assistance layer
11. Reporting layer
12. Audit logging layer

## Architecture Rule

PostgreSQL stores the official record.

Neo4j stores relationship intelligence.

Both must reference the same canonical entity IDs.

## Status

Document Status: Active
Version: 005
