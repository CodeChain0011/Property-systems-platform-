# BUILD DEPENDENCIES

## Dependency Order

Authentication before permissions.

Organization before property.

Property before unit.

Person before tenant role.

Unit and person before lease.

Lease before rent schedule.

Property and unit before work order.

Work order before vendor invoice.

Document storage before document vault.

## Rule

Do not build workflows before required entities exist.
