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
  | 'reports-orders'
  | 'reports-handover'
  | 'account-preferences'

interface SidebarProps {
  activePage: WorkspacePage
  onNavigate: (page: WorkspacePage) => void
}

const navGroups = [
  {
    label: 'MAIN',
    items: [
      { label: 'Dashboard', icon: '▦', page: 'dashboard' as const },
      { label: 'SAP Requirements', icon: '⬡', page: 'sap' as const },
      { label: 'Upcoming Orders', icon: '▥', page: 'orders' as const },
      { label: 'Manufacturing Stocks', icon: '▣', page: 'stocks' as const },
    ],
  },
  {
    label: 'OPERATIONS',
    items: [
      { label: 'Shipment Schedules', icon: '▤', page: 'shipment-schedules' as const },
      { label: 'Agency Management', icon: '⌂', page: 'agency' as const },
      { label: 'Warehouse Handover', icon: '▥', page: 'dashboard' as const },
    ],
  },
  {
    label: 'ANALYTICS',
    items: [{ label: 'Reports & History', icon: '▥', page: 'reports' as const }],
  },
  {
    label: 'SETTINGS',
    items: [
      { label: 'Settings', icon: '⬡', page: 'account-preferences' as const },
      { label: 'Notifications', icon: '♢', page: 'notifications' as const },
    ],
  },
]

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
                <span className="nav-icon" aria-hidden="true">
                  {item.icon}
                </span>
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
