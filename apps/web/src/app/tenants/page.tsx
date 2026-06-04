const leases = [
  {
    id: 'lease-001',
    tenant: 'Marcus Rivera',
    email: 'marcus.rivera@email.com',
    phone: '(512) 555-0101',
    property: 'Sunset Apartments',
    unit: '101',
    leaseType: 'Fixed',
    startDate: '2025-09-01',
    endDate: '2026-08-31',
    monthlyRent: 1750,
    status: 'active',
    daysLeft: 88,
  },
  {
    id: 'lease-002',
    tenant: 'Sofia Hernandez',
    email: 'sofia.h@email.com',
    phone: '(512) 555-0102',
    property: 'Sunset Apartments',
    unit: '102',
    leaseType: 'Fixed',
    startDate: '2025-11-01',
    endDate: '2026-10-31',
    monthlyRent: 1850,
    status: 'active',
    daysLeft: 149,
  },
  {
    id: 'lease-003',
    tenant: 'James Okafor',
    email: 'james.okafor@email.com',
    phone: '(512) 555-0103',
    property: 'Sunset Apartments',
    unit: '103',
    leaseType: 'Fixed',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    monthlyRent: 1800,
    status: 'active',
    daysLeft: 210,
  },
  {
    id: 'lease-004',
    tenant: 'Dana Kim',
    email: 'dana.kim@email.com',
    phone: '(512) 555-0201',
    property: 'Oak Park Duplex',
    unit: 'Unit A',
    leaseType: 'Fixed',
    startDate: '2025-07-01',
    endDate: '2026-06-30',
    monthlyRent: 1900,
    status: 'active',
    daysLeft: 26,
  },
  {
    id: 'lease-005',
    tenant: 'Chris Walters',
    email: 'c.walters@email.com',
    phone: '(512) 555-0202',
    property: 'Oak Park Duplex',
    unit: 'Unit B',
    leaseType: 'Month-to-Month',
    startDate: '2024-03-01',
    endDate: '2026-06-30',
    monthlyRent: 1950,
    status: 'active',
    daysLeft: 26,
  },
  {
    id: 'lease-006',
    tenant: 'Rachel Nguyen',
    email: 'rachel.n@email.com',
    phone: '(512) 555-0301',
    property: 'Highland House',
    unit: 'Main',
    leaseType: 'Fixed',
    startDate: '2025-06-01',
    endDate: '2026-05-31',
    monthlyRent: 2800,
    status: 'expired',
    daysLeft: -4,
  },
  {
    id: 'lease-007',
    tenant: 'Sam Taylor',
    email: 'sam.taylor@email.com',
    phone: '(512) 555-0401',
    property: 'Riverside Fourplex',
    unit: 'Unit A',
    leaseType: 'Fixed',
    startDate: '2025-10-01',
    endDate: '2026-09-30',
    monthlyRent: 1800,
    status: 'active',
    daysLeft: 118,
  },
  {
    id: 'lease-008',
    tenant: 'Mia Johnson',
    email: 'mia.j@email.com',
    phone: '(512) 555-0402',
    property: 'Riverside Fourplex',
    unit: 'Unit B',
    leaseType: 'Fixed',
    startDate: '2025-08-01',
    endDate: '2026-07-31',
    monthlyRent: 1800,
    status: 'active',
    daysLeft: 57,
  },
  {
    id: 'lease-009',
    tenant: 'Tom Park',
    email: 'tom.park@email.com',
    phone: '(512) 555-0403',
    property: 'Riverside Fourplex',
    unit: 'Unit C',
    leaseType: 'Fixed',
    startDate: '2025-12-01',
    endDate: '2026-11-30',
    monthlyRent: 1850,
    status: 'active',
    daysLeft: 179,
  },
  {
    id: 'lease-010',
    tenant: 'Priya Patel',
    email: 'priya.patel@email.com',
    phone: '(512) 555-0501',
    property: 'Congress Studios',
    unit: '204',
    leaseType: 'Fixed',
    startDate: '2025-09-01',
    endDate: '2026-08-31',
    monthlyRent: 1650,
    status: 'active',
    daysLeft: 88,
  },
]

function leaseStatusBadge(lease: typeof leases[0]) {
  if (lease.status === 'expired') return 'badge-red'
  if (lease.daysLeft <= 30) return 'badge-amber'
  return 'badge-green'
}

function leaseStatusLabel(lease: typeof leases[0]) {
  if (lease.status === 'expired') return 'Expired'
  if (lease.daysLeft <= 30) return `Expires in ${lease.daysLeft}d`
  return 'Active'
}

function leaseTypeBadge(type: string) {
  return type === 'Month-to-Month' ? 'badge-purple' : 'badge-blue'
}

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
}

const avatarColors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4']

export default function TenantsPage() {
  const active = leases.filter((l) => l.status === 'active')
  const expiringSoon = leases.filter((l) => l.daysLeft >= 0 && l.daysLeft <= 60)
  const totalRent = active.reduce((s, l) => s + l.monthlyRent, 0)

  return (
    <>
      <div className="page-header">
        <div className="page-header-left">
          <span className="page-title">Tenants</span>
          <span className="page-subtitle">{leases.length} leases · {active.length} active</span>
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
            Add Tenant
          </button>
        </div>
      </div>

      <div className="page-body">
        {/* Stats */}
        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px' }}>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">Active Leases</span>
              <div className="stat-icon stat-icon-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="stat-value">{active.length}</div>
            <div className="stat-change">{leases.length} total leases</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">Monthly Rent</span>
              <div className="stat-icon stat-icon-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
            <div className="stat-value">${(totalRent / 1000).toFixed(1)}k</div>
            <div className="stat-change">from active leases</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">Expiring (60d)</span>
              <div className="stat-icon stat-icon-amber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>
            <div className="stat-value">{expiringSoon.length}</div>
            <div className="stat-change">renewal action needed</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">Avg Rent</span>
              <div className="stat-icon stat-icon-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
            </div>
            <div className="stat-value">${Math.round(totalRent / active.length).toLocaleString()}</div>
            <div className="stat-change">per active lease</div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <div className="filter-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Search tenant or property…" readOnly />
          </div>
          <select className="filter-select" defaultValue="">
            <option value="">All Properties</option>
            <option>Sunset Apartments</option>
            <option>Oak Park Duplex</option>
            <option>Highland House</option>
            <option>Riverside Fourplex</option>
            <option>Congress Studios</option>
          </select>
          <select className="filter-select" defaultValue="">
            <option value="">All Statuses</option>
            <option>Active</option>
            <option>Expiring Soon</option>
            <option>Expired</option>
          </select>
        </div>

        {/* Leases Table */}
        <div className="card">
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tenant</th>
                  <th>Property &amp; Unit</th>
                  <th>Lease Type</th>
                  <th>Lease Period</th>
                  <th>Monthly Rent</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {leases.map((lease, i) => (
                  <tr key={lease.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            background: avatarColors[i % avatarColors.length],
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 11,
                            fontWeight: 700,
                            color: 'white',
                            flexShrink: 0,
                          }}
                        >
                          {getInitials(lease.tenant)}
                        </div>
                        <div>
                          <div className="table-primary">{lease.tenant}</div>
                          <div className="table-secondary">{lease.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="table-primary">{lease.property}</div>
                      <div className="table-secondary">Unit {lease.unit}</div>
                    </td>
                    <td>
                      <span className={`badge ${leaseTypeBadge(lease.leaseType)}`}>
                        {lease.leaseType}
                      </span>
                    </td>
                    <td>
                      <div className="table-primary">{lease.startDate} →</div>
                      <div className="table-secondary">{lease.endDate}</div>
                    </td>
                    <td>
                      <div className="table-primary font-semibold">${lease.monthlyRent.toLocaleString()}</div>
                    </td>
                    <td>
                      <span className={`badge ${leaseStatusBadge(lease)}`}>
                        <span className="badge-dot" />
                        {leaseStatusLabel(lease)}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-ghost" style={{ fontSize: 12, padding: '4px 8px' }}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
