# PROPERTY OPERATING SYSTEM

# MASTER MOBILE ARCHITECTURE

Version: 001

Status: Active

---

## PURPOSE

Defines the mobile strategy for the Property Operating System.

Mobile is required because many property operations happen away from a desk:

- Inspections
- Maintenance
- Vendor work
- Tenant requests
- Photo uploads
- Notices
- Messages
- Approvals

---

# MOBILE PRINCIPLES

## Principle 1

Field work must be mobile-first.

## Principle 2

Mobile screens should be simple and task-focused.

## Principle 3

Photos, videos, notes, and signatures are core mobile capabilities.

## Principle 4

Mobile must respect the same permissions as web.

---

# MOBILE USER TYPES

## Owner

Needs quick visibility and approval.

## Property Manager

Needs operational control in the field.

## Tenant

Needs self-service.

## Vendor

Needs work-order access.

## Inspector

Needs checklist and evidence capture.

## Maintenance Worker

Needs task updates and photo upload.

---

# MOBILE APP OPTIONS

## Option A

Responsive Web App

Best for MVP.

## Option B

Progressive Web App

Better offline and app-like behavior.

## Option C

Native Mobile App

Best long-term for field-heavy workflows.

## Recommendation

Start with responsive web.

Move toward PWA.

Consider native mobile later.

---

# TENANT MOBILE EXPERIENCE

## Core Actions

- View lease
- Submit maintenance request
- Upload photos
- View notices
- Send message
- View documents
- View balance
- Pay rent later

## Rule

Tenant mobile must reduce phone calls and text messages.

---

# VENDOR MOBILE EXPERIENCE

## Core Actions

- View assigned work orders
- Accept job
- View access instructions
- Upload before photos
- Upload after photos
- Update status
- Submit invoice
- Message manager

## Rule

Vendor mobile must support field completion.

---

# INSPECTOR MOBILE EXPERIENCE

## Core Actions

- Open checklist
- Add findings
- Capture photos
- Capture video
- Add notes
- Capture signature
- Generate report
- Create work order

## Rule

Inspection mobile must prioritize evidence capture.

---

# PROPERTY MANAGER MOBILE EXPERIENCE

## Core Actions

- View dashboard
- Approve work order
- Assign vendor
- View property
- View unit
- Send message
- Review photos
- Approve invoice

## Rule

Manager mobile must support fast decision-making.

---

# OWNER MOBILE EXPERIENCE

## Core Actions

- View portfolio snapshot
- View financial summary
- View maintenance alerts
- Approve large expense
- View compliance alerts
- Read AI summary

## Rule

Owner mobile should provide high-level clarity.

---

# MOBILE SCREEN PRIORITIES

## MVP Mobile Screens

- Login
- Tenant Dashboard
- Maintenance Request
- Photo Upload
- Work Order Detail
- Vendor Work Order
- Inspection Checklist
- Messages
- Notices
- Property Summary

---

# OFFLINE SUPPORT

## Future Offline Needs

- Inspection drafts
- Photo capture
- Notes
- Checklist completion
- Work order updates

## Rule

Offline support is important but not required for first MVP.

---

# PHOTO AND VIDEO UPLOADS

## Requirements

- Compress media
- Preserve metadata
- Link to entity
- Support upload progress
- Handle failed uploads
- Respect permissions

## Linked Records

- Work Order
- Inspection
- Unit
- Asset
- Document
- Finding

---

# PUSH NOTIFICATIONS

## Future Use Cases

- New work order
- Message received
- Inspection reminder
- Vendor assignment
- Rent reminder
- Compliance alert

## MVP

Use email and in-app notification first.

---

# MOBILE SECURITY

## Requirements

- Secure login
- Session timeout
- MFA support
- Device awareness
- Permission scoping
- Document access control

## Rule

Mobile access cannot weaken platform security.

---

# MOBILE AI

## Use Cases

- Ask about lease
- Summarize work order
- Suggest maintenance category
- Explain inspection finding
- Summarize property status

## Rule

AI mobile must respect user role and record access.

---

# MVP MOBILE SCOPE

## Included

- Responsive web interface
- Tenant maintenance request
- Photo uploads
- Vendor work order view
- Inspection checklist basics
- Mobile-friendly dashboard

## Deferred

- Native app
- Offline sync
- Push notifications
- Voice notes
- Barcode scanning
- AR inspection tools

---

# PHASE 58 OUTCOME

Mobile architecture supports:

- Tenant self-service
- Vendor field work
- Inspections
- Maintenance operations
- Owner approvals
- Property manager mobility

