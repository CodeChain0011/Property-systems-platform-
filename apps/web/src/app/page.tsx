import Link from 'next/link'

const stats = [
  {
    label: 'Total Properties',
    value: '5',
    change: '+1 this quarter',
    changeType: 'positive',
    iconClass: 'stat-icon-blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'Total Units',
    value: '27',
    change: '23 occupied',
    changeType: 'neutral',
    iconClass: 'stat-icon-purple',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: 'Occupancy Rate',
    value: '85%',
    change: '+3% vs last month',
    changeType: 'positive',
    iconClass: 'stat-icon-green',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: 'Monthly Revenue',
    value: '$45,800',
    change: '+$1,200 vs last month',
    changeType: 'positive',
    iconClass: 'stat-icon-green',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    label: 'Open Work Orders',
    value: '6',
    change: '1 emergency',
    changeType: 'negative',
    iconClass: 'stat-icon-amber',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
]

const recentWorkOrders = [
  { id: 'wo-003', unit: '105 · Sunset Apartments', category: 'Electrical', priority: 'emergency', status: 'scheduled', age: '3 days ago' },
  { id: 'wo-001', unit: '101 · Sunset Apartments', category: 'Plumbing', priority: 'high', status: 'in_progress', age: '7 days ago' },
  { id: 'wo-002', unit: '204 · Congress Studios', category: 'HVAC', priority: 'medium', status: 'assigned', age: '5 days ago' },
  { id: 'wo-004', unit: 'Unit A · Riverside Fourplex', category: 'Appliance', priority: 'low', status: 'new', age: '2 days ago' },
  { id: 'wo-005', unit: 'Unit B · Oak Park Duplex', category: 'Exterior', priority: 'medium', status: 'new', age: '1 day ago' },
]

const expiringLeases = [
  { tenant: 'Rachel Nguyen', unit: 'Main · Highland House', endDate: '2026-05-31', daysLeft: -4, rent: 2800 },
  { tenant: 'Dana Kim', unit: 'Unit A · Oak Park Duplex', endDate: '2026-06-30', daysLeft: 26, rent: 1900 },
  { tenant: 'Marcus Rivera', unit: '101 · Sunset Apartments', endDate: '2026-08-31', daysLeft: 88, rent: 1750 },
  { tenant: 'Mia Johnson', unit: 'Unit B · Riverside Fourplex', endDate: '2026-07-31', daysLeft: 57, rent: 1800 },
]

const activityFeed = [
  { color: '#10b981', text: <><strong>Rent collected</strong> — $1,750 from Marcus Rivera (Unit 101)</>, time: '2 hours ago' },
  { color: '#3b82f6', text: <><strong>Work order #003</strong> scheduled — Bright Electric Co. arriving June 5</>, time: '4 hours ago' },
  { color: '#f59e0b', text: <><strong>New work order</strong> submitted by Sam Taylor (Riverside Fourplex, Unit A)</>, time: 'Yesterday' },
  { color: '#8b5cf6', text: <><strong>Lease renewed</strong> — Chris Walters extended month-to-month at Oak Park Duplex</>, time: '2 days ago' },
  { color: '#ef4444', text: <><strong>Late rent notice</strong> sent to Tom Park (Congress Studios, Unit 301)</>, time: '3 days ago' },
]

function priorityBadge(priority: string) {
  const map: Record<string, string> = {
    emergency: 'badge-red',
    high: 'badge-red',
    medium: 'badge-amber',
    low: 'badge-gray',
  }
  return map[priority] || 'badge-gray'
}

function statusBadge(status: string) {
  const map: Record<string, string> = {
    new: 'badge-blue',
    under_review: 'badge-blue',
    assigned: 'badge-purple',
    scheduled: 'badge-purple',
    in_progress: 'badge-amber',
    waiting: 'badge-amber',
    completed: 'badge-green',
    closed: 'badge-gray',
    cancelled: 'badge-gray',
  }
  return map[status] || 'badge-gray'
}

function statusLabel(status: string) {
  return status.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function DashboardPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-left">
          <span className="page-title">Dashboard</span>
          <span className="page-subtitle">Welcome back — here&apos;s your portfolio overview</span>
        </div>
        <div className="page-header-actions">
          <button className="btn btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
            Refresh
          </button>
          <button className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Quick Add
          </button>
        </div>
      </div>

      <div className="page-body">
        {/* KPI Stats */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-card-header">
                <span className="stat-label">{stat.label}</span>
                <div className={`stat-icon ${stat.iconClass}`}>{stat.icon}</div>
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className={`stat-change ${stat.changeType === 'positive' ? 'positive' : stat.changeType === 'negative' ? 'negative' : ''}`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px', marginBottom: '20px' }}>
          {/* Recent Work Orders */}
          <div className="card">
            <div className="card-header">
              <span className="card-title">Open Work Orders</span>
              <Link href="/maintenance" className="section-link">View all</Link>
            </div>
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Unit / Property</th>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {recentWorkOrders.map((wo) => (
                    <tr key={wo.id}>
                      <td>
                        <div className="table-primary">{wo.unit.split(' · ')[0]}</div>
                        <div className="table-secondary">{wo.unit.split(' · ')[1]}</div>
                      </td>
                      <td className="table-secondary">{wo.category}</td>
                      <td>
                        <span className={`badge ${priorityBadge(wo.priority)}`}>
                          <span className="badge-dot" />
                          {wo.priority.charAt(0).toUpperCase() + wo.priority.slice(1)}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${statusBadge(wo.status)}`}>
                          {statusLabel(wo.status)}
                        </span>
                      </td>
                      <td className="table-secondary">{wo.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="card">
            <div className="card-header">
              <span className="card-title">Recent Activity</span>
            </div>
            <div className="card-body" style={{ padding: '8px 20px' }}>
              <div className="activity-list">
                {activityFeed.map((item, i) => (
                  <div key={i} className="activity-item">
                    <div className="activity-dot" style={{ background: item.color }} />
                    <div className="activity-content">
                      <div className="activity-text">{item.text}</div>
                      <div className="activity-time">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expiring Leases + Occupancy */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {/* Expiring Leases */}
          <div className="card">
            <div className="card-header">
              <span className="card-title">Lease Renewals</span>
              <Link href="/tenants" className="section-link">Manage</Link>
            </div>
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Tenant</th>
                    <th>Unit</th>
                    <th>Rent</th>
                    <th>Expires</th>
                  </tr>
                </thead>
                <tbody>
                  {expiringLeases.map((lease) => (
                    <tr key={lease.tenant}>
                      <td className="table-primary">{lease.tenant}</td>
                      <td className="table-secondary">{lease.unit}</td>
                      <td className="table-primary">${lease.rent.toLocaleString()}</td>
                      <td>
                        {lease.daysLeft < 0 ? (
                          <span className="badge badge-red">
                            <span className="badge-dot" />
                            Expired
                          </span>
                        ) : lease.daysLeft <= 30 ? (
                          <span className="badge badge-amber">
                            <span className="badge-dot" />
                            {lease.daysLeft}d left
                          </span>
                        ) : (
                          <span className="badge badge-gray">
                            {lease.daysLeft}d left
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Property Occupancy */}
          <div className="card">
            <div className="card-header">
              <span className="card-title">Occupancy by Property</span>
              <Link href="/properties" className="section-link">View all</Link>
            </div>
            <div className="card-body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'Sunset Apartments', occupied: 7, total: 8 },
                  { name: 'Congress Studios', occupied: 10, total: 12 },
                  { name: 'Riverside Fourplex', occupied: 3, total: 4 },
                  { name: 'Oak Park Duplex', occupied: 2, total: 2 },
                  { name: 'Highland House', occupied: 1, total: 1 },
                ].map((p) => {
                  const pct = Math.round((p.occupied / p.total) * 100)
                  return (
                    <div key={p.name} className="progress-container">
                      <div className="progress-label">
                        <span style={{ fontWeight: 500, fontSize: 13, color: 'var(--color-text)' }}>{p.name}</span>
                        <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
                          {p.occupied}/{p.total} units — {pct}%
                        </span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className={`progress-fill ${pct < 70 ? 'red' : pct < 85 ? 'amber' : ''}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
