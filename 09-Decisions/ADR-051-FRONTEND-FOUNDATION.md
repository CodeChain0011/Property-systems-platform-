# ADR-051 FRONTEND FOUNDATION

## Decision

The MVP frontend will begin as a Next.js TypeScript application inside apps/web.

## Reason

Next.js provides a modern React-based application foundation suitable for dashboards, portals, forms, and future deployment.

## Termux Decision

For Android ARM64 Termux development, the frontend uses Webpack instead of Turbopack because Turbopack native bindings are not available on this platform.

## Consequence

All frontend MVP screens will be built from this application foundation.

## Status

Accepted
