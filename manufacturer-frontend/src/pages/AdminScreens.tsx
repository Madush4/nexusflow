import { useState } from 'react'
import type { ReactNode } from 'react'
import type { WorkspacePage } from '../components/layout/Sidebar'

interface AdminScreensProps {
  page: WorkspacePage
  onNavigate: (page: WorkspacePage) => void
  selectedScheduleId?: string
  scheduleDraft?: {
    productId: string
    pickupDate: string
    quantity: string
    notes: string
  }
}

const alerts = [
  {
    id: 'sap',
    category: 'Requirements',
    title: 'SAP requirement source needs review',
    summary: 'upcoming_orders.xlsx · Received 18 Oct 2026 · Source count 24',
    detail: 'Products, required quantities and destination agencies await verification.',
    destination: 'sap' as const,
    action: 'Review requirements',
    unread: true,
  },
  {
    id: 'lemon',
    category: 'Low stock',
    title: 'Low manufacturing stock · Lemon Puff',
    summary: 'MC-BIS-003 · Available 700 · Threshold 1,000 units',
    detail: 'Threshold gap 300 units · Snapshot 18 Oct 2026',
    destination: 'stocks' as const,
    action: 'View stock',
    unread: true,
  },
  {
    id: 'milk',
    category: 'Low stock',
    title: 'Low manufacturing stock · Milk Marie',
    summary: 'MC-BIS-005 · Available 200 · Threshold 500 units',
    detail: 'Threshold gap 300 units · Snapshot 18 Oct 2026',
    destination: 'stocks' as const,
    action: 'View stock',
    unread: true,
  },
  {
    id: 'tikir',
    category: 'Low stock',
    title: 'Low manufacturing stock · Tikir Marie',
    summary: 'MC-BIS-006 · Available 400 · Threshold 500 units',
    detail: 'Threshold gap 100 units · Snapshot 18 Oct 2026',
    destination: 'stocks' as const,
    action: 'View stock',
    unread: false,
  },
]

const reportTabs: { label: string; page: WorkspacePage }[] = [
  { label: 'Orders', page: 'reports-orders' },
  { label: 'Stock', page: 'reports' },
  { label: 'Schedules', page: 'shipment-schedules' },
  { label: 'Handover', page: 'reports-handover' },
]

function Panel({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <section className={`screen-panel ${className}`}>
      <h2 className="screen-panel-title">{title}</h2>
      <div className="screen-panel-content">{children}</div>
    </section>
  )
}

function ScreenFooter({ note = 'Manufacturer-side administration only' }: { note?: string }) {
  return (
    <div className="screen-footnote">
      <span>FreightFlow · Manufacturing administration</span>
      <span>{note}</span>
    </div>
  )
}

function Notifications({ onNavigate }: AdminScreensProps) {
  const [category, setCategory] = useState('All alerts')
  const [readFilter, setReadFilter] = useState('All')
  const [readIds, setReadIds] = useState<string[]>(alerts.filter((alert) => !alert.unread).map((alert) => alert.id))
  const categoryOptions = ['All alerts', 'Requirements', 'Low stock', 'Order deadlines', 'Due / overdue schedules', 'Handover updates']
  const visibleAlerts = alerts.filter((alert) => {
    const categoryMatches = category === 'All alerts' || category === alert.category
    const isRead = readIds.includes(alert.id)
    return categoryMatches && (readFilter === 'All' || (readFilter === 'Unread' ? !isRead : isRead))
  })
  const unreadCount = alerts.filter((alert) => !readIds.includes(alert.id)).length
  const markAllRead = () => setReadIds(alerts.map((alert) => alert.id))
  const markRead = (id: string) => setReadIds((current) => current.includes(id) ? current : [...current, id])

  return (
    <main className="dashboard-content screen-content">
      <div className="alert-category-tabs" role="tablist" aria-label="Notification categories">
        {categoryOptions.map((option) => {
          const count = option === 'All alerts' ? alerts.length : option === 'Requirements' ? 1 : option === 'Low stock' ? 3 : 0
          return (
            <button
              className={category === option ? 'active-tab' : ''}
              type="button"
              role="tab"
              aria-selected={category === option}
              key={option}
              onClick={() => setCategory(option)}
            >
              {option}{count > 0 && ` · ${count}`}
            </button>
          )
        })}
      </div>
      <div className="detail-layout notification-layout">
        <Panel title="Requirement & stock alerts">
          <div className="notification-panel-heading">
            <span>{unreadCount} unread</span>
            <button className="button" type="button" onClick={markAllRead}>Mark all as read</button>
          </div>
          <div className="notification-filters" role="group" aria-label="Read status">
            {['All', 'Unread', 'Read'].map((filter) => (
              <button className={readFilter === filter ? 'active-filter' : ''} key={filter} type="button" onClick={() => setReadFilter(filter)}>{filter}</button>
            ))}
            <span>Read states shown as examples</span>
          </div>
          <div className="alert-cards">
            {visibleAlerts.map((alert) => {
              const isRead = readIds.includes(alert.id)
              return (
                <article className={`notification-card${isRead ? ' is-read' : ''}`} key={alert.id}>
                  <span className="notification-dot" aria-hidden="true" />
                  <div className="notification-card-content">
                    <strong>{alert.title}</strong>
                    <p>{alert.summary}</p>
                    <p>{alert.detail}</p>
                    <div className="notification-card-actions">
                      <button className="text-button" type="button" onClick={() => { markRead(alert.id); onNavigate(alert.destination) }}>{alert.action} →</button>
                      <button className="text-button read-action" type="button" onClick={() => isRead ? setReadIds((current) => current.filter((id) => id !== alert.id)) : markRead(alert.id)}>
                        {isRead ? 'Mark as unread' : 'Mark as read'}
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
            {visibleAlerts.length === 0 && <p className="empty-inline">No alerts match this filter.</p>}
          </div>
        </Panel>
        <div className="detail-main">
          <Panel title="Awaiting verified data">
            <div className="notice-box"><strong>Upcoming order deadlines</strong><p>Required dates are not verified. No deadline alerts are calculated.</p></div>
            <div className="notice-box"><strong>Due / overdue schedules</strong><p>No due or overdue state is asserted without a verified reference date.</p></div>
            <div className="notice-box"><strong>Relevant handover updates</strong><p>No confirmed handover events have been supplied.</p></div>
          </Panel>
          <Panel title="Alert delivery">
            <p className="body-copy">Choose the manufacturing alerts you want to review.</p>
            <button className="button" type="button" onClick={() => onNavigate('notification-preferences')}>Notification preferences</button>
          </Panel>
        </div>
      </div>
      <ScreenFooter />
    </main>
  )
}

const preferenceCategories = [
  ['New / changed requirements', 'SAP product, quantity or destination-agency changes.'],
  ['Upcoming order deadlines', 'Required dates for verified upcoming orders.'],
  ['Low manufacturing stock', 'Products below the manufacturing stock threshold.'],
  ['Due / overdue shipment schedules', 'Planned schedules requiring timely review.'],
  ['Relevant handover updates', 'Manufacturer-side handover record updates.'],
]

function NotificationPreferences({ onNavigate }: AdminScreensProps) {
  const [inApp, setInApp] = useState([true, true, true, true, false])
  const [message, setMessage] = useState('')
  const toggle = (index: number) => setInApp((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value))
  return (
    <main className="dashboard-content screen-content">
      <Panel title="Alert delivery preferences">
        <span className="draft-badge">Draft values</span>
        <div className="preferences-table">
          <div className="preferences-header"><span>Alert category</span><span>In-app</span><span>Email (optional)</span></div>
          {preferenceCategories.map(([title, description], index) => (
            <div className="preference-row" key={title}>
              <div><strong>{title}</strong><p>{description}</p></div>
              <label className="preference-toggle"><input type="checkbox" checked={inApp[index]} onChange={() => toggle(index)} /><span className="toggle-track" aria-hidden="true" /><span>{inApp[index] ? 'On' : 'Off'}</span></label>
              <span className="email-unavailable"><span aria-hidden="true">○</span> Not configured</span>
            </div>
          ))}
        </div>
        <div className="notice-box"><strong>Email needs a configured account address</strong><p>No confirmed account email is available. Optional email delivery remains unavailable until an account address is configured.</p></div>
        <p className="footnote">These are proposed preference controls and draft examples. No changes have been saved and delivery permissions are not confirmed.</p>
        {message && <p className="inline-notice" role="status">{message}</p>}
      </Panel>
      <div className="screen-actions"><button className="button" type="button" onClick={() => onNavigate('notifications')}>Cancel · Back to notifications</button><button className="button button-primary" type="button" onClick={() => setMessage('Draft values are displayed for review. No account settings were changed.')}>Save preferences</button></div>
      <ScreenFooter />
    </main>
  )
}

function ReportsNavigation({ page, onNavigate }: AdminScreensProps) {
  return (
    <div className="tab-list reports-tabs" role="tablist" aria-label="Report type">
      {reportTabs.map((tab) => (
        <button className={page === tab.page ? 'active-tab' : ''} type="button" role="tab" aria-selected={page === tab.page} key={tab.label} onClick={() => onNavigate(tab.page)}>{tab.label}</button>
      ))}
    </div>
  )
}

function OrdersReport({ page, onNavigate }: AdminScreensProps) {
  return (
    <main className="dashboard-content screen-content">
      <ReportsNavigation page={page} onNavigate={onNavigate} />
      <Panel title="Order report filters">
        <div className="report-filter-grid">
          <label className="form-field">Required date range<select><option>All dates</option><option>18 Oct 2026</option></select></label>
          <label className="form-field">Status<select><option>All statuses</option><option>Needs review</option></select></label>
          <label className="form-field">Destination agency<select><option>All confirmed agencies</option></select></label>
          <label className="form-field">Product<select><option>All products</option></select></label>
        </div>
        <div className="report-actions"><button className="button button-primary" type="button">Apply filters</button><button className="button" type="button">Reset</button><button className="button export-disabled" type="button" disabled>Export orders</button></div>
      </Panel>
      <Panel title="Order requirements report">
        <span className="status-chip attention-chip">Awaiting verification</span>
        <div className="responsive-table"><table className="screen-table"><thead><tr><th>Order</th><th>Product / SKU</th><th>Required quantity</th><th>Destination agency</th><th>Required date</th><th>Attention</th></tr></thead></table></div>
        <div className="empty-state report-empty"><strong>No verified order records to report</strong><p>upcoming_orders.xlsx was received 18 Oct 2026 and needs review. Products, quantities, required dates and agency relationships remain unverified.</p></div>
        <p className="footnote">24 is the source count only, not a verified order count. Export is unavailable until verified order records are available.</p>
        <div className="report-bottom"><span className="footnote">No verified records displayed</span><button className="button button-primary" type="button" onClick={() => onNavigate('sap')}>Review requirements</button></div>
      </Panel>
      <div className="screen-actions"><button className="button" type="button" onClick={() => onNavigate('reports')}>Back to reports overview</button></div>
      <ScreenFooter />
    </main>
  )
}

function HandoverReport({ page, onNavigate }: AdminScreensProps) {
  return (
    <main className="dashboard-content screen-content">
      <ReportsNavigation page={page} onNavigate={onNavigate} />
      <Panel title="Handover report filters">
        <div className="report-filter-grid">
          <label className="form-field">Recorded date range<select><option>All recorded dates</option></select></label>
          <label className="form-field">Product<select><option>All products</option></select></label>
          <label className="form-field">Recorded by<select><option>All confirmed recorders</option></select></label>
          <label className="form-field">Related schedule<select><option>Confirmed relationships only</option></select></label>
        </div>
        <div className="report-actions"><button className="button button-primary" type="button">Apply filters</button><button className="button" type="button">Reset</button><button className="button export-disabled" type="button" disabled>Export handover report</button></div>
      </Panel>
      <Panel title="Manufacturer handover history">
        <span className="status-chip">No verified records</span>
        <div className="responsive-table"><table className="screen-table"><thead><tr><th>Record</th><th>Product / SKU</th><th>Actual handed-over quantity</th><th>Recorded date</th><th>Recorded by</th><th>Related schedule (confirmed only)</th></tr></thead></table></div>
        <div className="empty-state report-empty"><strong>No verified manufacturer-side handover records</strong><p>No saved records or history have been supplied. A shipment schedule does not establish that a handover occurred.</p></div>
        <p className="footnote">Related schedules will appear only when the record relationship is confirmed.</p>
      </Panel>
      <div className="notice-box authorization-notice"><strong>Recording is subject to authorization</strong><p>Record actual manufacturer-side handed-over quantity only when authorized. Warehouse acceptance and receiving are outside this responsibility.</p></div>
      <div className="screen-actions"><button className="button" type="button" onClick={() => onNavigate('reports')}>Back to reports overview</button><button className="button export-disabled" type="button" disabled>Record handover · Authorization required</button></div>
      <ScreenFooter />
    </main>
  )
}

function WarehouseHandover({ onNavigate, selectedScheduleId = 'SCH-2051', scheduleDraft }: AdminScreensProps) {
  const productName = scheduleDraft?.productId === 'MC-BIS-004'
    ? 'Nice · MC-BIS-004 · 100g'
    : 'Cream Cracker · MC-BIS-001 · 200g'
  const requiredQuantity = scheduleDraft?.quantity || '800'
  const pickupDate = scheduleDraft?.pickupDate
    ? new Date(`${scheduleDraft.pickupDate}T00:00:00`).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    : '23 Oct 2026'
  return (
    <main className="dashboard-content screen-content">
      <div className="detail-layout handover-layout">
        <div className="detail-main">
          <Panel title="Manufacturer handover records">
            <div className="empty-state handover-empty">
              <strong>No verified handover records</strong>
              <p>No saved manufacturer-side handover records have been supplied. Start a record using the existing schedule as read-only context.</p>
            </div>
            <div className="notice-box"><strong>Data confirmation</strong><p>Handover record fields and schedule relationships require ERP confirmation.</p></div>
          </Panel>
          <Panel title="Manufacturer-side scope">
            <p className="body-copy handover-scope">Record actual handed-over quantity only. This view does not manage warehouse inventory, receiving or stock acceptance.</p>
            <p className="footnote">A shipment schedule is context, not evidence that a handover has occurred.</p>
          </Panel>
        </div>
        <Panel title="Schedule context · Read only">
          <dl className="detail-rows">
            <div className="detail-row"><dt>Schedule</dt><dd>{selectedScheduleId}</dd></div>
            <div className="detail-row"><dt>Product</dt><dd>{productName}</dd></div>
            <div className="detail-row"><dt>Required quantity</dt><dd>{Number(requiredQuantity).toLocaleString('en-US')} units</dd></div>
            <div className="detail-row"><dt>Planned next pickup date</dt><dd>{pickupDate}</dd></div>
          </dl>
          <p className="footnote">Context from the existing manufacturer schedule, not a saved handover record.</p>
        </Panel>
      </div>
      <div className="screen-actions">
        <button className="button" type="button" onClick={() => onNavigate('shipment-schedules')}>Back to shipment schedules</button>
        <button className="button button-primary" type="button" onClick={() => onNavigate('reports-handover')}>Record warehouse handover</button>
      </div>
      <ScreenFooter note="Manufacturer-side review only" />
    </main>
  )
}

function AccountPreferences({ onNavigate }: AdminScreensProps) {
  const [language, setLanguage] = useState('English')
  const [timeZone, setTimeZone] = useState('SLST · UTC+05:30')
  const [dateFormat, setDateFormat] = useState('DD MMM YYYY')
  const [density, setDensity] = useState('Compact')
  const [message, setMessage] = useState('')
  return (
    <main className="dashboard-content screen-content">
      <div className="detail-layout account-layout">
        <div className="detail-main">
          <Panel title="Interface preferences">
            <span className="draft-badge">Draft values</span>
            <div className="account-preference-grid">
              <label className="form-field">Language<select value={language} onChange={(event) => setLanguage(event.target.value)}><option>English</option></select><small>Proposed interface language.</small></label>
              <label className="form-field">Time zone<select value={timeZone} onChange={(event) => setTimeZone(event.target.value)}><option>SLST · UTC+05:30</option></select><small>Sri Lanka Standard Time.</small></label>
              <label className="form-field">Date format<select value={dateFormat} onChange={(event) => setDateFormat(event.target.value)}><option>DD MMM YYYY</option><option>YYYY-MM-DD</option></select><small>Example: 18 Oct 2026</small></label>
              <label className="form-field">Table density<select value={density} onChange={(event) => setDensity(event.target.value)}><option>Compact</option><option>Comfortable</option></select><small>Compact rows for operational review.</small></label>
            </div>
            <div className="notice-box"><strong>Proposed preference controls</strong><p>Values are draft examples, not live changed account settings. No account preferences have been saved.</p></div>
            {message && <p className="inline-notice" role="status">{message}</p>}
          </Panel>
          <Panel title="Compact table preview">
            <div className="preview-table"><div><strong>REFERENCE DATE</strong><strong>DISPLAY</strong></div><div><span>18 Oct 2026</span><span>{density} · Draft preview</span></div></div>
          </Panel>
        </div>
        <div className="detail-main">
          <Panel title="Profile summary">
            <div className="profile-summary"><span className="avatar">AM</span><div><strong>Ayesha M.</strong><span>Manufacturing Admin</span></div></div>
            <button className="button" type="button" onClick={() => setMessage('Admin profile details are not available in this preview.')}>View admin profile</button>
          </Panel>
          <Panel title="Notification preferences">
            <p className="body-copy">Manage in-app alerts and optional email delivery for manufacturer-side requirements, stock, schedules and handover updates.</p>
            <button className="button" type="button" onClick={() => onNavigate('notification-preferences')}>Notification preferences</button>
          </Panel>
        </div>
      </div>
      <div className="screen-actions"><button className="button" type="button" onClick={() => onNavigate('dashboard')}>Cancel · Back to settings</button><button className="button button-primary" type="button" onClick={() => setMessage('Draft values are displayed for review. No account settings were changed.')}>Save preferences</button></div>
      <ScreenFooter />
    </main>
  )
}

function AdminScreens({ page, onNavigate }: AdminScreensProps) {
  switch (page) {
    case 'notifications': return <Notifications page={page} onNavigate={onNavigate} />
    case 'notification-preferences': return <NotificationPreferences page={page} onNavigate={onNavigate} />
    case 'warehouse-handover': return <WarehouseHandover page={page} onNavigate={onNavigate} />
    case 'reports-orders': return <OrdersReport page={page} onNavigate={onNavigate} />
    case 'reports-handover': return <HandoverReport page={page} onNavigate={onNavigate} />
    case 'account-preferences': return <AccountPreferences page={page} onNavigate={onNavigate} />
    default: return null
  }
}

export default AdminScreens
