import './Sidebar.css'

const navGroups = [
  {
    label: 'MAIN',
    items: [
      { label: 'Dashboard', icon: '▦', active: true },
      { label: 'SAP Requirements', icon: '⬡' },
      { label: 'Upcoming Orders', icon: '▥' },
      { label: 'Manufacturing Stocks', icon: '▣' },
    ],
  },
  {
    label: 'OPERATIONS',
    items: [
      { label: 'Shipment Schedules', icon: '▤' },
      { label: 'Agency Management', icon: '⌂' },
      { label: 'Warehouse Handover', icon: '▥' },
    ],
  },
  {
    label: 'ANALYTICS',
    items: [{ label: 'Reports & History', icon: '▥' }],
  },
  {
    label: 'SETTINGS',
    items: [{ label: 'Settings', icon: '⬡' }],
  },
]

function Sidebar() {
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
              <a
                className={`nav-link${item.active ? ' is-active' : ''}`}
                href="#"
                aria-current={item.active ? 'page' : undefined}
                key={item.label}
              >
                <span className="nav-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </a>
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
