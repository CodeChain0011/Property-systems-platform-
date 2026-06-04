# ADR-002: Hybrid SQL and Neo4j Architecture

## Decision

The project will use a hybrid PostgreSQL and Neo4j architecture.

## Reason

PostgreSQL is best for structured records, transactions, accounting, and system integrity.

Neo4j is best for complex relationships, entity connections, graph intelligence, and advanced querying.

## Consequence

Every canonical entity must have a stable ID that can exist in both systems.

## Status

Accepted
