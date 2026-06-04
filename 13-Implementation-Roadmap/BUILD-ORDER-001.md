# BUILD ORDER 001

## Purpose

Defines the recommended build order for the first real application version.

## Build Sequence

### Stage 1: Foundation

1. Project repository
2. Frontend setup
3. Backend setup
4. Database setup
5. Authentication setup
6. Environment configuration

### Stage 2: Core Records

1. Organization
2. Person
3. Role
4. Property
5. Unit
6. Lease

### Stage 3: Operating Workflows

1. Document upload
2. Work order creation
3. Work order status updates
4. Basic financial transaction log
5. Basic dashboard

### Stage 4: Reporting

1. Property summary
2. Unit summary
3. Occupancy summary
4. Maintenance summary
5. Financial summary

### Stage 5: Expansion

1. Tenant portal
2. Vendor portal
3. Inspection workflow
4. Notifications
5. Neo4j graph intelligence
6. AI assistant

## Rule

Do not build advanced automation before the core records and workflows are stable.

## Status

Active Draft
