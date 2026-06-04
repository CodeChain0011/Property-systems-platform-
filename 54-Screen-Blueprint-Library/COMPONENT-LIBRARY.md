# PROPERTY OPERATING SYSTEM

# COMPONENT LIBRARY: SHARED UI COMPONENT INVENTORY

Version: 001

Status: Active

---

## PURPOSE

Defines the shared component library for the Property Operating System web and
mobile interfaces. Every screen in the Screen Blueprint Library (Phase 54) is
built from this component set.

Components are organized by category. Each entry defines: purpose, props/variants,
usage context, and accessibility requirements.

---

# DESIGN TOKENS

All components consume these tokens. Do not use raw color or spacing values in component code.

## Color Tokens

```
--color-primary:        #3b82f6   (interactive elements, links, focus rings)
--color-primary-dark:   #2563eb   (hover state)
--color-primary-light:  #dbeafe   (tinted backgrounds)

--color-surface:        #ffffff   (card, panel, modal backgrounds)
--color-bg:             #f1f5f9   (page background)
--color-border:         #e2e8f0   (dividers, input borders)
--color-border-light:   #f1f5f9   (subtle row dividers)

--color-text:           #0f172a   (primary body text)
--color-text-secondary: #64748b   (labels, secondary info)
--color-text-muted:     #94a3b8   (placeholders, disabled)

--color-success:        #10b981
--color-success-bg:     #d1fae5
--color-success-text:   #065f46

--color-warning:        #f59e0b
--color-warning-bg:     #fef3c7
--color-warning-text:   #92400e

--color-danger:         #ef4444
--color-danger-bg:      #fee2e2
--color-danger-text:    #991b1b

--color-info:           #3b82f6
--color-info-bg:        #dbeafe
--color-info-text:      #1e40af

--color-purple:         #8b5cf6
--color-purple-bg:      #ede9fe
--color-purple-text:    #4c1d95

--color-sidebar-bg:     #0f172a
--color-sidebar-text:   #94a3b8
```

## Spacing Scale (4px base)

```
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-5:  20px
--space-6:  24px
--space-8:  32px
--space-10: 40px
--space-12: 48px
```

## Typography Scale

```
--text-xs:   11px / 500 weight — labels, badges, table headers
--text-sm:   13px / 400 weight — body, table cells, form inputs
--text-base: 14px / 400 weight — default body
--text-lg:   16px / 600 weight — section headings
--text-xl:   20px / 700 weight — page titles
--text-2xl:  24px / 700 weight — stat values
--text-3xl:  30px / 700 weight — hero figures
```

## Border Radius

```
--radius-sm:   4px
--radius:      6px
--radius-md:   8px
--radius-lg:   12px
--radius-full: 9999px
```

## Elevation (box-shadow)

```
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
--shadow:    0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)
--shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)
--shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)
```

---

# LAYOUT COMPONENTS

## AppShell

Container for the full application frame.

```
Slots:   sidebar, main
Layout:  flex row, full viewport height, overflow hidden
Usage:   Root layout wrapper — used once per app
```

## Sidebar

Fixed-width left navigation panel.

```
Width:      248px
Background: --color-sidebar-bg
Slots:      logo area, nav section(s), footer
Usage:      All authenticated screens
```

## SidebarNavItem

Single navigation link within the Sidebar.

```
Props:
  href        string       Route to navigate to
  label       string       Display text
  icon        ReactNode    16×16 SVG icon
  active      boolean      Derived from current pathname

States: default, hover, active
Behavior: highlights with left border + tinted background when active
Accessibility: aria-current="page" on active item
```

## PageHeader

Top bar for each page showing title, subtitle, and action buttons.

```
Height:  60px
Props:
  title     string
  subtitle  string (optional)
  actions   ReactNode (buttons, etc.)

Sticky: true (z-index 10)
Background: --color-surface with bottom border
```

## PageBody

Content wrapper inside the main scrolling area.

```
Padding:  28px 32px
Flex:     column, flex-1
Usage:    Wraps all page content below the PageHeader
```

---

# NAVIGATION COMPONENTS

## Breadcrumb

Shows the page hierarchy path.

```
Props:
  items  Array<{ label: string, href?: string }>

Separator: /
Last item: non-linked, bold
Usage: Detail pages (Property Detail, Lease Detail, etc.)
Accessibility: nav aria-label="Breadcrumb", aria-current="page" on last item
```

## Tabs

Horizontal tab strip for switching views within a page.

```
Props:
  tabs     Array<{ id, label, count?: number }>
  active   string (tab id)
  onChange (id) => void

Variants: underline (default), pill
Usage: Property Detail (Units/Leases/Work Orders/Documents tabs)
Accessibility: role="tablist", role="tab", aria-selected, aria-controls
```

---

# DATA DISPLAY COMPONENTS

## StatCard

KPI metric card for dashboard summary rows.

```
Props:
  label       string
  value       string | number
  change      string (optional)
  changeType  "positive" | "negative" | "neutral"
  icon        ReactNode
  iconVariant "blue" | "green" | "amber" | "red" | "purple"

Layout: label + icon top row, large value, change line
Usage: Dashboard, Properties summary, Tenants summary, Maintenance summary
```

## DataTable

Full-width sortable data table.

```
Props:
  columns   Array<{ key, label, width?, align?, sortable? }>
  rows      Array<Record<string, any>>
  loading   boolean
  empty     ReactNode

Sub-components: DataTable.Head, DataTable.Row, DataTable.Cell
Header style: uppercase, 11px, muted color, light background
Row hover: subtle background tint
Accessibility: role="table", scope="col" on headers, aria-sort on sortable columns
```

## PropertyCard

Card view for a single property in the portfolio grid.

```
Props:
  property  { id, name, type, address, city, totalUnits, occupiedUnits,
              monthlyRevenue, openWorkOrders, status }
  onClick   () => void

Sections:
  - Header: icon + name + address + type badge
  - Stats row: units, occupied, revenue, open WOs
  - Occupancy progress bar
  - Footer: status badge + View details link

Hover: elevated shadow, darker border
```

## OccupancyBar

Horizontal progress bar showing occupancy percentage.

```
Props:
  occupied  number
  total     number

Color thresholds:
  >= 85%: green fill
  70–84%: amber fill
  < 70%:  red fill

Label: shows "occupied/total — pct%" above bar
```

## ActivityFeed

Vertical list of timestamped activity events.

```
Props:
  items  Array<{ color, text, time }>

Each item: colored dot + text + relative timestamp
Usage: Dashboard recent activity panel
```

## EmptyState

Centered placeholder for empty lists or search results.

```
Props:
  icon     ReactNode (optional)
  title    string
  message  string
  action   ReactNode (optional, e.g. a button)

Usage: Empty table states, vacant property views
```

---

# BADGE COMPONENTS

## Badge

Inline status or label pill.

```
Props:
  variant  "green" | "amber" | "red" | "blue" | "purple" | "gray"
  dot      boolean (shows colored dot before label, default false)
  children ReactNode

Usage: Lease status, work order status, priority, occupancy status,
       property type, role type
```

## PriorityBadge

Specialized badge for work order priority.

```
Variants:
  emergency: red dot, red text ("Emergency")
  high:      orange dot, orange text ("High")
  medium:    amber dot, amber text ("Medium")
  low:       gray dot, gray text ("Low")
```

## StatusBadge

Specialized badge for work order or lease status.

```
Work order statuses: new (blue), under_review (blue), assigned (purple),
                     scheduled (purple), in_progress (amber), waiting (amber),
                     completed (green), closed (gray), cancelled (gray)

Lease statuses: draft (gray), active (green), expired (red), terminated (red)
```

---

# FORM COMPONENTS

## TextInput

Standard single-line text input.

```
Props:
  label       string
  placeholder string
  value       string
  onChange    (value) => void
  error       string (optional)
  required    boolean
  disabled    boolean
  prefix      ReactNode (optional icon)
  suffix      ReactNode (optional icon/text)

States: default, focus (blue border + ring), error (red border), disabled (muted)
Accessibility: label linked via htmlFor/id, aria-invalid on error, aria-describedby for error text
```

## TextArea

Multi-line text input.

```
Props:
  label       string
  placeholder string
  rows        number (default 4)
  value       string
  onChange    (value) => void
  error       string (optional)

Usage: Work order descriptions, notes fields
```

## Select

Dropdown select input.

```
Props:
  label    string
  options  Array<{ value, label }>
  value    string
  onChange (value) => void
  error    string (optional)
  disabled boolean

Custom arrow icon. Native select element for accessibility and mobile compatibility.
```

## DateInput

Date picker input.

```
Props:
  label    string
  value    string (ISO date)
  onChange (value) => void
  min      string (optional)
  max      string (optional)

Usage: Lease start/end dates, work order scheduled date
```

## CurrencyInput

Numeric input formatted as currency.

```
Props:
  label    string
  value    number
  onChange (value) => void
  currency string (default "USD")

Displays $ prefix. Strips formatting on submit.
Usage: Monthly rent, security deposit, estimated cost fields
```

## FormSection

Groups related form fields with a section heading.

```
Props:
  title    string
  children ReactNode

Usage: Break long forms into named sections (e.g., "Lease Terms", "Tenant Info")
```

## FormActions

Bottom row of a form with submit and cancel actions.

```
Props:
  onSubmit    () => void
  onCancel    () => void
  submitLabel string (default "Save")
  loading     boolean

Layout: flex row, right-aligned, gap between buttons
```

## FilterBar

Horizontal strip of search and filter controls.

```
Props:
  searchPlaceholder string
  filters           Array<SelectProps>
  onSearch          (value) => void
  onFilter          (key, value) => void

Usage: Above every list/table view (Properties, Tenants, Maintenance)
```

---

# BUTTON COMPONENTS

## Button

Standard action button.

```
Props:
  variant   "primary" | "secondary" | "ghost" | "danger"
  size      "sm" | "md" (default) | "lg"
  icon      ReactNode (optional, prepended)
  loading   boolean
  disabled  boolean
  onClick   () => void

Variants:
  primary:   blue fill, white text
  secondary: white fill, border, dark text
  ghost:     transparent, muted text, hover background
  danger:    red fill, white text — destructive actions only

Loading state: shows spinner, disables click
Accessibility: aria-busy on loading, aria-disabled on disabled
```

## IconButton

Square button containing only an icon.

```
Props:
  icon     ReactNode
  label    string (aria-label)
  variant  "ghost" | "secondary"
  size     "sm" | "md"

Usage: Table row actions, close buttons, refresh triggers
```

---

# FEEDBACK COMPONENTS

## Alert

Inline contextual message.

```
Props:
  variant  "info" | "success" | "warning" | "danger"
  title    string (optional)
  children ReactNode
  onClose  () => void (optional, shows close button)

Usage: Form validation errors, success confirmations, system warnings
```

## Toast

Transient notification that auto-dismisses.

```
Props:
  variant  "success" | "error" | "info"
  message  string
  duration number (default 4000ms)

Positioning: top-right, stacked
Animation: slide in from right, fade out
Usage: Post-action confirmations ("Lease saved", "Work order created")
```

## Modal

Centered overlay dialog.

```
Props:
  open     boolean
  onClose  () => void
  title    string
  size     "sm" | "md" | "lg" | "xl"
  children ReactNode
  footer   ReactNode (optional)

Backdrop: dark overlay, click to close
Keyboard: Escape to close, focus trap inside
Accessibility: role="dialog", aria-modal, aria-labelledby, focus management
Usage: Create/edit forms, confirmation dialogs, detail drawers
```

## ConfirmDialog

Specialized Modal for destructive action confirmation.

```
Props:
  open          boolean
  onConfirm     () => void
  onCancel      () => void
  title         string
  message       string
  confirmLabel  string (default "Confirm")
  variant       "danger" | "warning"

Usage: Deleting a document, terminating a lease, archiving a record
```

## LoadingSpinner

Animated loading indicator.

```
Props:
  size    "sm" | "md" | "lg"
  label   string (screen-reader only, aria-label)
  overlay boolean (full-area overlay mode)

Usage: Table loading states, form submission, page transitions
```

## SkeletonLoader

Placeholder shimmer for content that is loading.

```
Variants:
  SkeletonText   — single line of text
  SkeletonCard   — full card shape
  SkeletonTable  — table rows with column widths

Usage: Replace content areas while initial data fetches
```

---

# USER IDENTITY COMPONENTS

## Avatar

User photo or initials fallback.

```
Props:
  name    string (used for initials fallback)
  src     string (optional photo URL)
  size    "sm" (24px) | "md" (32px) | "lg" (48px)
  color   string (auto-assigned from name hash if not provided)

Usage: Tenant row, activity feed, assigned-to fields
```

## UserCard

Compact identity block showing avatar + name + secondary info.

```
Props:
  name      string
  secondary string (email, role, phone, etc.)
  avatar    AvatarProps
  onClick   () => void (optional)

Usage: Assigned vendor on work order, primary tenant on lease
```

---

# PROPERTY-SPECIFIC COMPONENTS

## UnitGrid

Grid of unit status cards for a property detail view.

```
Props:
  units  Array<{ unitNumber, unitType, occupancyStatus, currentRent, tenantName? }>
  onUnitClick (unitId) => void

Each cell: unit number, type badge, occupancy status color, rent
Color coding:
  occupied:         green border
  vacant:           gray border (dashed)
  notice_given:     amber border
  maintenance_hold: red border
```

## LeaseTimeline

Visual timeline showing lease start, current date, and end date.

```
Props:
  startDate  string
  endDate    string

Color:
  > 90 days remaining: green
  31–90 days:          amber
  <= 30 days:          red
  expired:             red, dashed

Usage: Lease detail screen, renewal alert panels
```

## WorkOrderCard

Compact card view for a single work order (used in list + detail contexts).

```
Props:
  workOrder  { id, category, priority, status, description,
               propertyName, unitNumber, assignedTo, requestedDate }
  onClick    () => void

Header: category icon + priority badge + status badge
Body: truncated description
Footer: property + unit + assigned vendor + date
```

---

# ACCESSIBILITY REQUIREMENTS

## All Interactive Components

- Must be keyboard navigable (Tab, Enter/Space to activate)
- Must have visible focus ring (2px solid --color-primary, offset 2px)
- Must meet WCAG 2.1 AA contrast ratios (4.5:1 for text, 3:1 for UI components)

## Screen Reader Support

- All icon-only buttons must have aria-label
- All form inputs must have associated label elements
- Status changes (toast, alerts) must use aria-live regions
- Modals must implement focus trap and restore focus on close
- Tables must use proper scope attributes on headers

## Color Independence

- Never use color alone to convey status — always pair with text, icon, or pattern
- Priority and status badges include a text label alongside the colored dot

---

# COMPONENT FILE STRUCTURE

```
packages/ui/
  tokens/
    colors.ts
    spacing.ts
    typography.ts
    shadows.ts
  layout/
    AppShell.tsx
    Sidebar.tsx
    SidebarNavItem.tsx
    PageHeader.tsx
    PageBody.tsx
  navigation/
    Breadcrumb.tsx
    Tabs.tsx
  data-display/
    StatCard.tsx
    DataTable.tsx
    PropertyCard.tsx
    OccupancyBar.tsx
    ActivityFeed.tsx
    EmptyState.tsx
  badges/
    Badge.tsx
    PriorityBadge.tsx
    StatusBadge.tsx
  forms/
    TextInput.tsx
    TextArea.tsx
    Select.tsx
    DateInput.tsx
    CurrencyInput.tsx
    FormSection.tsx
    FormActions.tsx
    FilterBar.tsx
  buttons/
    Button.tsx
    IconButton.tsx
  feedback/
    Alert.tsx
    Toast.tsx
    ToastProvider.tsx
    Modal.tsx
    ConfirmDialog.tsx
    LoadingSpinner.tsx
    SkeletonLoader.tsx
  identity/
    Avatar.tsx
    UserCard.tsx
  property/
    UnitGrid.tsx
    LeaseTimeline.tsx
    WorkOrderCard.tsx
  index.ts   ← re-exports all public components
```

---

# PHASE 54 COMPONENT LIBRARY OUTCOME

This document defines:
- Full design token system (colors, spacing, typography, radius, shadow)
- 35 shared components across 8 categories
- Per-component props, variants, states, and usage context
- Accessibility requirements for all interactive components
- File structure for the packages/ui shared library
