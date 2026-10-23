import './Sidebar.css'

export type WorkspacePage =
  | 'dashboard'
  | 'sap'
  | 'sap-detail'
  | 'orders'
  | 'stocks'
  | 'reports'
  | 'adjustment'
  | 'stock-movements'
  | 'production-entry'
  | 'shipment-schedules'
  | 'shipment-create'
  | 'shipment-review'
  | 'shipment-saved'
  | 'shipment-detail'
  | 'agency'
  | 'notifications'
  | 'notification-preferences'
  | 'warehouse-handover'
  | 'reports-orders'
  | 'reports-handover'
  | 'account-preferences'

interface SidebarProps {
  activePage: WorkspacePage
  onNavigate: (page: WorkspacePage) => void
}

export type NavigationIcon = 'chart' | 'warehouse' | 'document' | 'document-check' | 'cube' | 'grid' | 'bell' | 'settings'

const navGroups = [
  {
    label: 'MAIN',
    items: [
      { label: 'Dashboard', icon: 'grid' as const, page: 'dashboard' as const },
      { label: 'SAP Requirements', icon: 'cube' as const, page: 'sap' as const },
      { label: 'Upcoming Orders', icon: 'chart' as const, page: 'orders' as const },
      { label: 'Manufacturing Stocks', icon: 'document-check' as const, page: 'stocks' as const },
    ],
  },
  {
    label: 'OPERATIONS',
    items: [
      { label: 'Shipment Schedules', icon: 'document' as const, page: 'shipment-schedules' as const },
      { label: 'Agency Management', icon: 'warehouse' as const, page: 'agency' as const },
      { label: 'Warehouse Handover', icon: 'chart' as const, page: 'warehouse-handover' as const },
    ],
  },
  {
    label: 'ANALYTICS',
    items: [{ label: 'Reports & History', icon: 'chart' as const, page: 'reports' as const }],
  },
  {
    label: 'SETTINGS',
    items: [
      { label: 'Settings', icon: 'settings' as const, page: 'account-preferences' as const },
      { label: 'Notifications', icon: 'bell' as const, page: 'notifications' as const },
    ],
  },
]

export function NavigationIconGraphic({ icon }: { icon: NavigationIcon }) {
  const paths = {
    chart: (
      <>
        <path d="M4 20V4M4 20h17" />
        <path d="M8 16v-4m5 4V8m5 8V5" />
      </>
    ),
    warehouse: (
      <>
        <path d="M3 10 12 3l9 7v10H3z" />
        <path d="M7 20v-7h10v7M8 9h8" />
      </>
    ),
    document: (
      <>
        <path d="M6 3h9l5 5v13H6z" />
        <path d="M15 3v5h5M9 12h8m-8 4h8" />
      </>
    ),
    'document-check': (
      <>
        <path d="M6 3h9l5 5v13H6z" />
        <path d="M15 3v5h5M9 12h5m-5 4 2 2 5-5" />
      </>
    ),
    cube: (
      <>
        <path d="m12 3 9 5v9l-9 5-9-5V8z" />
        <path d="m3 8 9 5 9-5m-9 5v9" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="0.5" />
        <rect x="14" y="3" width="7" height="7" rx="0.5" />
        <rect x="3" y="14" width="7" height="7" rx="0.5" />
        <rect x="14" y="14" width="7" height="7" rx="0.5" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    settings: (
      <>
        <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
        <path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.8 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.8-1l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.8-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.8 1l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 1.9Z" transform="translate(-1 -1)" />
      </>
    ),
  }

  return (
    <svg className="nav-icon-graphic" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[icon]}
    </svg>
  )
}

function Sidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <a className="brand" href="#" aria-label="FreightFlow dashboard">
        <span className="brand-mark" aria-hidden="true">
          F
        </span>
        <span className="brand-copy">
          <strong>FreightFlow</strong>
          <span>Manufacturing administration</span>
        </span>
      </a>

      <nav className="primary-navigation" aria-label="Main navigation">
        {navGroups.map((group) => (
          <div className="nav-group" key={group.label}>
            <h2>{group.label}</h2>
            {group.items.map((item) => (
              <button
                className={`nav-link${activePage === item.page || (activePage === 'sap-detail' && item.page === 'sap') || (activePage === 'adjustment' && item.page === 'stocks') || (['stock-movements', 'production-entry'].includes(activePage) && item.page === 'stocks') || (['shipment-create', 'shipment-review', 'shipment-saved', 'shipment-detail'].includes(activePage) && item.page === 'shipment-schedules') || (activePage === 'notification-preferences' && item.page === 'notifications') || (['reports-orders', 'reports-handover'].includes(activePage) && item.page === 'reports') || (activePage === 'account-preferences' && item.page === 'account-preferences') ? ' is-active' : ''}`}
                type="button"
                onClick={() => onNavigate(item.page)}
                aria-current={activePage === item.page ? 'page' : undefined}
                key={item.label}
              >
                <span className="nav-icon"><NavigationIconGraphic icon={item.icon} /></span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        ))}
      </nav>

      <section className="help-card" aria-label="Help">
        <strong>Need a hand?</strong>
        <p>Visit the help center for tips</p>
        <button type="button">Open help center</button>
      </section>
    </aside>
  )
}

export default Sidebar
