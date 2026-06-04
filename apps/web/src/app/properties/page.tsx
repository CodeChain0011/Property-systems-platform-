import Link from 'next/link'

const properties = [
  {
    id: 'prop-001',
    name: 'Sunset Apartments',
    type: 'Apartment',
    address: '78 Sunset Blvd',
    city: 'Austin, TX 78701',
    totalUnits: 8,
    occupiedUnits: 7,
    monthlyRevenue: 14000,
    openWorkOrders: 2,
    status: 'active',
  },
  {
    id: 'prop-002',
    name: 'Oak Park Duplex',
    type: 'Duplex',
    address: '456 Oak Ave',
    city: 'Austin, TX 78702',
    totalUnits: 2,
    occupiedUnits: 2,
    monthlyRevenue: 3850,
    openWorkOrders: 1,
    status: 'active',
  },
  {
    id: 'prop-003',
    name: 'Highland House',
    type: 'Single Family',
    address: '789 Pine Rd',
    city: 'Austin, TX 78703',
    totalUnits: 1,
    occupiedUnits: 0,
    monthlyRevenue: 0,
    openWorkOrders: 1,
    status: 'active',
  },
  {
    id: 'prop-004',
    name: 'Riverside Fourplex',
    type: 'Fourplex',
    address: '321 River Rd',
    city: 'Austin, TX 78704',
    totalUnits: 4,
    occupiedUnits: 3,
    monthlyRevenue: 5450,
    openWorkOrders: 1,
    status: 'active',
  },
  {
    id: 'prop-005',
    name: 'Congress Studios',
    type: 'Apartment',
    address: '555 Congress Ave',
    city: 'Austin, TX 78701',
    totalUnits: 12,
    occupiedUnits: 10,
    monthlyRevenue: 16500,
    openWorkOrders: 2,
    status: 'active',
  },
]

const typeColors: Record<string, string> = {
  Apartment: 'badge-blue',
  Duplex: 'badge-purple',
  'Single Family': 'badge-green',
  Fourplex: 'badge-amber',
}

export default function PropertiesPage() {
  const totalRevenue = properties.reduce((s, p) => s + p.monthlyRevenue, 0)
  const totalUnits = properties.reduce((s, p) => s + p.totalUnits, 0)
  const occupiedUnits = properties.reduce((s, p) => s + p.occupiedUnits, 0)

  return (
    <>
      <div className="page-header">
        <div className="page-header-left">
          <span className="page-title">Properties</span>
          <span className="page-subtitle">{properties.length} properties · {totalUnits} total units</span>
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
            Add Property
          </button>
        </div>
      </div>

      <div className="page-body">
        {/* Summary Row */}
        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px' }}>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">Properties</span>
              <div className="stat-icon stat-icon-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              </div>
            </div>
            <div className="stat-value">{properties.length}</div>
            <div className="stat-change">across Austin, TX</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">Total Units</span>
              <div className="stat-icon stat-icon-purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
            </div>
            <div className="stat-value">{totalUnits}</div>
            <div className="stat-change">{occupiedUnits} occupied, {totalUnits - occupiedUnits} vacant</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">Occupancy</span>
              <div className="stat-icon stat-icon-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
            </div>
            <div className="stat-value">{Math.round((occupiedUnits / totalUnits) * 100)}%</div>
            <div className="stat-change positive">portfolio average</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span className="stat-label">Monthly Revenue</span>
              <div className="stat-icon stat-icon-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
            <div className="stat-value">${(totalRevenue / 1000).toFixed(0)}k</div>
            <div className="stat-change">from occupied units</div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="property-grid">
          {properties.map((property) => {
            const pct = Math.round((property.occupiedUnits / property.totalUnits) * 100)
            return (
              <div key={property.id} className="property-card">
                <div className="property-card-header">
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div className="property-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div>
                      <div className="property-name">{property.name}</div>
                      <div className="property-address">{property.address}</div>
                      <div className="property-address">{property.city}</div>
                    </div>
                  </div>
                  <span className={`badge ${typeColors[property.type] || 'badge-gray'}`}>
                    {property.type}
                  </span>
                </div>

                <div className="property-stats">
                  <div className="property-stat">
                    <span className="property-stat-value">{property.totalUnits}</span>
                    <span className="property-stat-label">Units</span>
                  </div>
                  <div className="property-stat">
                    <span className="property-stat-value">{property.occupiedUnits}</span>
                    <span className="property-stat-label">Occupied</span>
                  </div>
                  <div className="property-stat">
                    <span className="property-stat-value">
                      {property.monthlyRevenue > 0 ? `$${(property.monthlyRevenue / 1000).toFixed(1)}k` : '—'}
                    </span>
                    <span className="property-stat-label">Mo. Revenue</span>
                  </div>
                  <div className="property-stat">
                    <span className="property-stat-value">{property.openWorkOrders}</span>
                    <span className="property-stat-label">Open WOs</span>
                  </div>
                </div>

                <div className="progress-container" style={{ marginBottom: 12 }}>
                  <div className="progress-label">
                    <span>Occupancy</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className={`progress-fill ${pct === 0 ? 'red' : pct < 75 ? 'amber' : ''}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>

                <div className="property-card-footer">
                  <span className={`badge ${property.status === 'active' ? 'badge-green' : 'badge-gray'}`}>
                    <span className="badge-dot" />
                    {property.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                  <Link href={`/properties/${property.id}`} className="btn btn-ghost" style={{ fontSize: 12, padding: '4px 8px' }}>
                    View details →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
