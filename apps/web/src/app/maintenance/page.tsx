const workOrders = [
  {
    id: 'wo-003',
    property: 'Sunset Apartments',
    unit: '105',
    tenant: 'Jamie Chen',
    category: 'Electrical',
    priority: 'emergency',
    status: 'scheduled',
    description: 'Outlet in bathroom sparking when plugging in devices. Possible short circuit.',
    requestedDate: '2026-06-01',
    assignedTo: 'Bright Electric Co.',
    estimatedCost: 400,
  },
  {
    id: 'wo-001',
    property: 'Sunset Apartments',
    unit: '101',
    tenant: 'Marcus Rivera',
    category: 'Plumbing',
    priority: 'high',
    status: 'in_progress',
    description: 'Kitchen faucet leaking under the sink. Water pooling in cabinet.',
    requestedDate: '2026-05-28',
    assignedTo: 'Dave Plumbing',
    estimatedCost: 150,
  },
  {
    id: 'wo-002',
    property: 'Congress Studios',
    unit: '204',
    tenant: 'Priya Patel',
    category: 'HVAC',
    priority: 'medium',
    status: 'assigned',
    description: 'AC not cooling properly. Thermostat set to 72 but room stays at 80+.',
    requestedDate: '2026-05-30',
    assignedTo: 'Cool Air Services',
    estimatedCost: 300,
  },
  {
    id: 'wo-005',
    property: 'Oak Park Duplex',
    unit: 'Unit B',
    tenant: 'Dana Kim',
    category: 'Exterior',
    priority: 'medium',
    status: 'new',
    description: 'Fence gate broken. Latch damaged, gate will not close properly.',
    requestedDate: '2026-06-03',
    assignedTo: null,
    estimatedCost: null,
  },
  {
    id: 'wo-004',
    property: 'Riverside Fourplex',
    unit: 'Unit A',
    tenant: 'Sam Taylor',
    category: 'Appliance',
    priority: 'low',
    status: 'new',
    description: 'Dishwasher not draining completely. Standing water after each cycle.',
    requestedDate: '2026-06-02',
    assignedTo: null,
    estimatedCost: null,
  },
  {
    id: 'wo-007',
    property: 'Highland House',
    unit: '—',
    tenant: 'Vacant',
    category: 'General',
    priority: 'low',
    status: 'under_review',
    description: 'Repaint exterior — tenant vacated. Walls need cleaning and touch-up.',
    requestedDate: '2026-06-03',
    assignedTo: null,
    estimatedCost: 800,
  },
  {
    id: 'wo-006',
    property: 'Congress Studios',
    unit: '301',
    tenant: 'Alex Nguyen',
    category: 'Plumbing',
    priority: 'high',
    status: 'completed',
    description: 'Shower drain completely clogged. No drainage at all.',
    requestedDate: '2026-05-20',
    assignedTo: 'Dave Plumbing',
    estimatedCost: 120,
  },
]

const priorityConfig: Record<string, { label: string; badgeClass: string; dotColor: string }> = {
  emergency: { label: 'Emergency', badgeClass: 'badge-red', dotColor: '#dc2626' },
  high: { label: 'High', badgeClass: 'badge-red', dotColor: '#f97316' },
  medium: { label: 'Medium', badgeClass: 'badge-amber', dotColor: '#f59e0b' },
  low: { label: 'Low', badgeClass: 'badge-gray', dotColor: '#94a3b8' },
}

const statusConfig: Record<string, { label: string; badgeClass: string }> = {
  new: { label: 'New', badgeClass: 'badge-blue' },
  under_review: { label: 'Under Review', badgeClass: 'badge-blue' },
  assigned: { label: 'Assigned', badgeClass: 'badge-purple' },
  scheduled: { label: 'Scheduled', badgeClass: 'badge-purple' },
  in_progress: { label: 'In Progress', badgeClass: 'badge-amber' },
  waiting: { label: 'Waiting', badgeClass: 'badge-amber' },
  completed: { label: 'Completed', badgeClass: 'badge-green' },
  closed: { label: 'Closed', badgeClass: 'badge-gray' },
  cancelled: { label: 'Cancelled', badgeClass: 'badge-gray' },
}

const categoryIcons: Record<string, React.ReactNode> = {
  Plumbing: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h18v4H3z" /><path d="M7 7v14" /><path d="M7 21h10" /><path d="M17 7v4" /><path d="M13 11h4v10h-4z" />
    </svg>
  ),
  Electrical: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  HVAC: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20" /><path d="M5 5l14 14M19 5L5 19" />
    </svg>
  ),
  Appliance: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" /><line x1="4" y1="9" x2="20" y2="9" />
    </svg>
  ),
  Exterior: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  ),
  General: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
}

export default function MaintenancePage() {
  const open = workOrders.filter((w) => !['completed', 'closed', 'cancelled'].includes(w.status))
  const emergency = open.filter((w) => w.priority === 'emergency')
  const completed = workOrders.filter((w) => w.status === 'completed')

  return (
    <>
      <div className="page-header">
        <div className="page-header-left">
          <span className="page-title">Maintenance</span>
          <span className="page-subtitle">{workOrders.length} work orders · {open.length} open</span>
        </div>
        <div className="page-header-actions">
          <button className="btn btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export
          </button>
          <button className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Work Order
          </button>
        </div>
      </div>

      <div className="page-body">
        {/* Stats */}
        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', marginBottom: '24px' }}>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">Open</span>
              <div className="stat-icon stat-icon-amber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
            </div>
            <div className="stat-value">{open.length}</div>
            <div className="stat-change">need action</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">Emergency</span>
              <div className="stat-icon stat-icon-red">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
            </div>
            <div className="stat-value">{emergency.length}</div>
            <div className="stat-change negative">{emergency.length > 0 ? 'immediate attention' : 'all clear'}</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">In Progress</span>
              <div className="stat-icon stat-icon-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
            </div>
            <div className="stat-value">{open.filter((w) => w.status === 'in_progress').length}</div>
            <div className="stat-change">active repairs</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">Unassigned</span>
              <div className="stat-icon stat-icon-amber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
            </div>
            <div className="stat-value">{open.filter((w) => !w.assignedTo).length}</div>
            <div className="stat-change">need vendor assignment</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">Completed</span>
              <div className="stat-icon stat-icon-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <div className="stat-value">{completed.length}</div>
            <div className="stat-change positive">this month</div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <div className="filter-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Search work orders…" readOnly />
          </div>
          <select className="filter-select" defaultValue="">
            <option value="">All Priorities</option>
            <option>Emergency</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select className="filter-select" defaultValue="">
            <option value="">All Statuses</option>
            <option>New</option>
            <option>Assigned</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <select className="filter-select" defaultValue="">
            <option value="">All Properties</option>
            <option>Sunset Apartments</option>
            <option>Congress Studios</option>
            <option>Riverside Fourplex</option>
            <option>Oak Park Duplex</option>
            <option>Highland House</option>
          </select>
        </div>

        {/* Work Orders Table */}
        <div className="card">
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Property / Unit</th>
                  <th>Category</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Assigned To</th>
                  <th>Est. Cost</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {workOrders.map((wo) => {
                  const pc = priorityConfig[wo.priority]
                  const sc = statusConfig[wo.status]
                  return (
                    <tr key={wo.id}>
                      <td>
                        <span className="table-secondary font-mono" style={{ fontSize: 12 }}>{wo.id}</span>
                      </td>
                      <td style={{ maxWidth: 260 }}>
                        <div className="table-primary" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 240 }}>
                          {wo.description}
                        </div>
                        <div className="table-secondary">{wo.tenant}</div>
                      </td>
                      <td>
                        <div className="table-primary">{wo.property}</div>
                        <div className="table-secondary">Unit {wo.unit}</div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-text-secondary)', fontSize: 12 }}>
                          {categoryIcons[wo.category] || null}
                          {wo.category}
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${pc.badgeClass}`}>
                          <span className="badge-dot" style={{ background: pc.dotColor }} />
                          {pc.label}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${sc.badgeClass}`}>
                          {sc.label}
                        </span>
                      </td>
                      <td>
                        {wo.assignedTo ? (
                          <span className="table-primary">{wo.assignedTo}</span>
                        ) : (
                          <button className="btn btn-secondary" style={{ fontSize: 11, padding: '3px 8px' }}>
                            Assign
                          </button>
                        )}
                      </td>
                      <td>
                        <span className="table-primary">
                          {wo.estimatedCost ? `$${wo.estimatedCost}` : '—'}
                        </span>
                      </td>
                      <td>
                        <span className="table-secondary" style={{ fontSize: 12 }}>{wo.requestedDate}</span>
                      </td>
                      <td>
                        <button className="btn btn-ghost" style={{ fontSize: 12, padding: '4px 8px' }}>
                          View
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
