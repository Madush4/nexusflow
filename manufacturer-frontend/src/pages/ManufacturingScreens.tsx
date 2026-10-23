import { useMemo, useState } from 'react'
import type { WorkspacePage } from '../components/layout/Sidebar'
import type { ReactNode } from 'react'

interface ManufacturingScreensProps {
  page: Exclude<WorkspacePage, 'dashboard'>
  onNavigate: (page: WorkspacePage) => void
  scheduleDraft: {
    productId: string
    pickupDate: string
    quantity: string
    notes: string
  }
  onScheduleDraftChange: (draft: ManufacturingScreensProps['scheduleDraft']) => void
  selectedScheduleId: string
  onSelectSchedule: (id: string) => void
}

const sapReports = [
  { filename: 'upcoming_orders.xlsx', date: '18 Oct 2026', orders: '24', status: 'Needs review' },
  { filename: 'shop_orders_2026-10-12.xlsx', date: '17 Oct 2026', orders: '18', status: 'Imported' },
  { filename: 'orders_adjustment.xlsx', date: '16 Oct 2026', orders: '12', status: 'Imported' },
  { filename: 'shop_orders_archive.xlsx', date: '15 Oct 2026', orders: '09', status: 'Imported' },
  { filename: 'sap_report_batch_18.xlsx', date: '18 Oct 2026', orders: '08', status: 'Imported' },
]

const products = [
  { id: 'MC-BIS-001', name: 'Cream Cracker', size: '200g', onHand: 12400, reserved: 2400, available: 10000 },
  { id: 'MC-BIS-002', name: 'Chocolate Cream', size: '150g', onHand: 6800, reserved: 1200, available: 5600 },
  { id: 'MC-BIS-003', name: 'Lemon Puff', size: '120g', onHand: 5200, reserved: 4500, available: 700 },
  { id: 'MC-BIS-004', name: 'Nice', size: '100g', onHand: 5400, reserved: 800, available: 4600 },
  { id: 'MC-BIS-005', name: 'Milk Marie', size: '', onHand: 1000, reserved: 800, available: 200 },
  { id: 'MC-BIS-006', name: 'Tikir Marie', size: '150g', onHand: 2500, reserved: 2100, available: 400 },
]

const history = [
  { date: '18 Oct 2026', product: 'Cream Cracker · MC-BIS-001', onHand: 12400, reserved: 2400, available: 10000 },
  { date: '18 Oct 2026', product: 'Chocolate Cream · MC-BIS-002', onHand: 6800, reserved: 1200, available: 5600 },
  { date: '18 Oct 2026', product: 'Lemon Puff · MC-BIS-003', onHand: 5200, reserved: 4500, available: 700 },
  { date: '18 Oct 2026', product: 'Nice · MC-BIS-004', onHand: 5400, reserved: 800, available: 4600 },
  { date: '18 Oct 2026', product: 'Milk Marie · MC-BIS-005', onHand: 1000, reserved: 800, available: 200 },
  { date: '18 Oct 2026', product: 'Tikir Marie · MC-BIS-006', onHand: 2500, reserved: 2100, available: 400 },
]

const number = (value: number) => value.toLocaleString('en-US')

function Panel({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <section className={`screen-panel ${className}`}>
      <h2 className="screen-panel-title">{title}</h2>
      <div className="screen-panel-content">{children}</div>
    </section>
  )
}

function KeyValueRows({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="detail-rows">
      {rows.map(([label, value]) => (
        <div className="detail-row" key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}

function SapList({ onNavigate }: ManufacturingScreensProps) {
  const [query, setQuery] = useState('')
  const [uploadedName, setUploadedName] = useState('')
  const visibleReports = sapReports.filter((report) =>
    `${report.filename} ${report.date} ${report.status}`.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <main className="dashboard-content screen-content">
      <section className="summary-grid" aria-label="SAP report summary">
        {[
          ['Received SAP reports', '5', 'Excel files in the report inbox'],
          ['Latest report orders', '24', 'upcoming_orders.xlsx'],
          ['Imported', '4', 'Validated and ready for review'],
          ['Needs review', '1', 'Awaiting validation confirmation'],
        ].map(([label, value, description]) => (
          <article className="summary-card" key={label}>
            <h2>{label}</h2><p className="summary-value">{value}</p><p className="summary-description">{description}</p>
          </article>
        ))}
      </section>
      <Panel title="SAP import review">
        <div className="table-toolbar">
          <label className="screen-search"><span aria-hidden="true">⌕</span><span className="visually-hidden">Search SAP reports</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search report filename, received date, reviewer..." /></label>
          <select aria-label="Filter by received date"><option>All received dates</option><option>18 Oct 2026</option><option>17 Oct 2026</option></select>
          <select aria-label="Filter by reviewer"><option>All reviewers</option><option>Ayesha M.</option></select>
          <button className="button" type="button" onClick={() => setQuery('')}>☷ Filters</button>
          <label className="button button-primary upload-button">➜ Upload SAP report<input type="file" accept=".xlsx,.xls,.csv" onChange={(event) => setUploadedName(event.target.files?.[0]?.name ?? '')} /></label>
        </div>
        {uploadedName && <p className="inline-notice">Selected report: {uploadedName}. Source data is not imported until reviewed.</p>}
        <div className="responsive-table">
          <table className="screen-table">
            <thead><tr><th>Filename</th><th>Received date</th><th>Order count</th><th>Reviewer</th><th>Import status</th><th>Action</th></tr></thead>
            <tbody>{visibleReports.map((report) => <tr key={report.filename}>
              <td><span className="file-mark">⌂</span><strong>{report.filename}</strong></td><td>{report.date}</td><td>{report.orders}</td><td>Ayesha M.</td><td>{report.status}</td>
              <td><button className="text-button" type="button" onClick={() => onNavigate('sap-detail')}>{report.status === 'Needs review' ? 'Review' : 'View'}</button></td>
            </tr>)}</tbody>
          </table>
        </div>
        <div className="table-footer">Showing 1–{visibleReports.length} of 5 received SAP reports <span>‹　<strong>1</strong>　›</span></div>
      </Panel>
    </main>
  )
}

function SapDetail({ onNavigate }: ManufacturingScreensProps) {
  return (
    <main className="dashboard-content screen-content">
      <div className="detail-layout">
        <div className="detail-main">
          <Panel title="upcoming_orders.xlsx">
            <KeyValueRows rows={[
              ['Source filename', 'upcoming_orders.xlsx'], ['Received date', '18 Oct 2026'],
              ['Order count', '24'], ['Reviewer', 'Ayesha M.'], ['Import status', 'Needs review'],
            ]} />
          </Panel>
          <Panel title="Requirement content" className="content-panel">
            <div className="empty-state"><strong>Source metadata available</strong><p>Requirement line items have not been verified. No requirement identifiers, quantities or product lines are shown.</p></div>
          </Panel>
        </div>
        <Panel title="Review scope">
          <p className="body-copy">The inbox identifies this file as Needs review. Review its source information without approving or changing imported data.</p>
          <div className="notice-box"><strong>Data confirmation</strong><p>Requirement fields and source-to-order relationships require ERP confirmation.</p></div>
          <p className="footnote">The source filename is not a requirement ID.</p>
        </Panel>
      </div>
      <div className="screen-actions"><button className="button" type="button" onClick={() => onNavigate('sap')}>Back to SAP requirements</button><button className="button button-primary" type="button" onClick={() => onNavigate('orders')}>Review source</button></div>
      <div className="screen-footnote"><span>FreightFlow · Manufacturing administration</span><span>Manufacturer-side review only</span></div>
    </main>
  )
}

function OrderDetails({ onNavigate }: ManufacturingScreensProps) {
  return (
    <main className="dashboard-content screen-content">
      <div className="detail-layout">
        <div className="detail-main">
          <Panel title="Selected order">
            <div className="empty-state order-empty"><strong>No order selected</strong><p>No verified order record is available to select. Return to the source review to check the known file metadata.</p></div>
            <div className="notice-box"><strong>Order details pending</strong><p>Order fields and source-to-order relationships require ERP confirmation. Schedule references are not used as order identifiers.</p></div>
          </Panel>
          <Panel title="Source context">
            <KeyValueRows rows={[
              ['Source filename', 'upcoming_orders.xlsx'], ['Received date', '18 Oct 2026'],
              ['Order count', '24'], ['Reviewer', 'Ayesha M.'], ['Import status', 'Needs review'],
            ]} />
            <p className="footnote">Source metadata only; individual order rows are not verified.</p>
          </Panel>
        </div>
        <Panel title="Reference catalog">
          <p className="body-copy">Existing products for reference only. These are not imported order rows.</p>
          <ul className="catalog-list">{products.map((product) => <li key={product.id}><span>{product.id}</span><strong>{product.name}{product.size ? ` · ${product.size}` : ''}</strong></li>)}</ul>
        </Panel>
      </div>
      <div className="screen-actions"><button className="button" type="button" onClick={() => onNavigate('orders')}>Back to upcoming orders</button><button className="button button-primary" type="button" onClick={() => onNavigate('sap-detail')}>Review SAP source</button></div>
      <div className="screen-footnote"><span>FreightFlow · Manufacturing administration</span><span>Manufacturer-side review only</span></div>
    </main>
  )
}

function ProductDetails({ onNavigate }: ManufacturingScreensProps) {
  const product = products[0]
  return (
    <main className="dashboard-content screen-content">
      <div className="screen-intro"><div className="intro-actions"><button className="button" type="button" onClick={() => onNavigate('stocks')}>← Back to products</button><button className="button" type="button" onClick={() => onNavigate('production-entry')}>Record quantity</button><button className="button" type="button" onClick={() => onNavigate('adjustment')}>Adjust stock</button></div></div>
      <section className="product-summary screen-panel">
        <div className="product-summary-heading"><div><strong>MC-BIS-001 · Cream Cracker</strong><p>Product master record · Manufacturing Admin review queue · Illustrative data</p></div><span className="status-chip">Active</span><strong className="threshold-copy">Stock threshold 8000</strong></div>
        <div className="product-facts">{[['Product name', product.name, 'MC-BIS-001 · 200g'], ['Category', 'Biscuits', 'Standard factory SKU'], ['Packaging', '200g · 24 units / case', 'Standard retail pack'], ['Last production', '17 Oct 2026 · 10:30 AM', 'Batch MC-BIS-001-20261017']].map(([label, value, detail]) => <div key={label}><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>)}</div>
      </section>
      <section className="summary-grid stock-metrics">{[['On-hand stock', '12,400', 'Current factory stock'], ['Reserved', '2,400', 'Allocated to scheduled shipments'], ['Available', '10,000', 'Available manufacturing stock'], ['Threshold', '8,000', 'Safety stock trigger']].map(([label, value, description]) => <article className="summary-card" key={label}><h2>{label}</h2><p className="summary-value">{value}</p><p className="summary-description">{description}</p></article>)}</section>
      <Panel title="Manufactured quantity history">
        <div className="history-heading"><p>Illustrative production records for the last 30 days.</p><button className="button" type="button" onClick={() => onNavigate('stock-movements')}>↗ View stock movements</button></div>
        <div className="responsive-table"><table className="screen-table"><thead><tr><th>Date</th><th>Batch</th><th>Produced</th><th>Reserved</th><th>Available</th><th>Status</th></tr></thead><tbody>
          {[
            ['17 Oct 2026', 'MC-BIS-001-20261017', '2,400', '2,400', '10,000'],
            ['14 Oct 2026', 'MC-BIS-001-20261014', '2,100', '1,800', '7,300'],
            ['11 Oct 2026', 'MC-BIS-001-20261011', '2,000', '1,200', '5,500'],
          ].map(([date, batch, produced, reserved, available]) => <tr key={batch}><td><strong>{date}</strong></td><td>{batch}</td><td>{produced}</td><td>{reserved}</td><td>{available}</td><td><span className="status-chip">Completed</span></td></tr>)}
        </tbody></table></div>
      </Panel>
    </main>
  )
}

function Reports({ onNavigate }: ManufacturingScreensProps) {
  const [productFilter, setProductFilter] = useState('All manufacturing products')
  const reportTabs: { label: string; page: WorkspacePage }[] = [
    { label: 'Orders', page: 'reports-orders' },
    { label: 'Stock', page: 'reports' },
    { label: 'Schedules', page: 'shipment-schedules' },
    { label: 'Handover', page: 'reports-handover' },
  ]
  const displayedHistory = useMemo(() => productFilter === 'All manufacturing products' ? history : history.filter((row) => row.product.includes(productFilter)), [productFilter])
  const totals = displayedHistory.reduce(
    (sum, row) => ({
      onHand: sum.onHand + row.onHand,
      reserved: sum.reserved + row.reserved,
      available: sum.available + row.available,
    }),
    { onHand: 0, reserved: 0, available: 0 },
  )
  const exportCsv = () => {
    const csv = ['Snapshot date,Product / SKU,On-hand,Reserved,Available', ...displayedHistory.map((row) => `${row.date},"${row.product}",${row.onHand},${row.reserved},${row.available}`)].join('\n')
    const link = document.createElement('a')
    link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
    link.download = 'stock-history.csv'
    link.click()
    URL.revokeObjectURL(link.href)
  }
  return (
    <main className="dashboard-content screen-content">
      <Panel title="Manufacturing history">
        <div className="tab-list" role="tablist" aria-label="Report type">
          {reportTabs.map(({ label, page }) => (
            <button className={page === 'reports' ? 'active-tab' : ''} type="button" role="tab" aria-selected={page === 'reports'} key={label} onClick={() => page !== 'reports' && onNavigate(page)}>{label}</button>
          ))}
        </div>
        <div className="filter-grid"><label>Date range · SLST<input type="text" defaultValue="18 Oct 2026 – 20 Oct 2026" /></label><label>Product<select value={productFilter} onChange={(event) => setProductFilter(event.target.value)}><option>All manufacturing products</option>{products.map((item) => <option key={item.id}>{item.name}</option>)}</select></label></div>
        <div className="report-actions"><button className="button button-primary" type="button">Apply filters</button><button className="button" type="button" onClick={() => setProductFilter('All manufacturing products')}>Reset</button><button className="button" type="button" onClick={exportCsv}>Export CSV</button><button className="button" type="button" onClick={() => window.print()}>Export PDF</button></div>
        <div className="responsive-table"><table className="screen-table"><thead><tr><th>Snapshot date</th><th>Product / SKU</th><th>On-hand</th><th>Reserved</th><th>Available</th><th>Source</th></tr></thead><tbody>
          {displayedHistory.map((row) => <tr key={row.product}><td>{row.date}</td><td>{row.product}</td><td>{number(row.onHand)}</td><td>{number(row.reserved)}</td><td>{number(row.available)}</td><td>Baseline</td></tr>)}
          <tr><td>18 Oct 2026</td><td><strong>Total · {displayedHistory.length} factory SKUs</strong></td><td>{number(totals.onHand)}</td><td>{number(totals.reserved)}</td><td>{number(totals.available)}</td><td>Baseline</td></tr>
        </tbody></table></div>
        <p className="footnote">{displayedHistory.length + 1} snapshot rows · All quantities in units · Available = on-hand − reserved · Baseline precedes illustrative action states.</p>
      </Panel>
      <div className="screen-footnote"><span>FreightFlow · Manufacturing administration</span><span>Static action state · Factory-owned stock only</span></div>
    </main>
  )
}

function StockAdjustment({ onNavigate }: ManufacturingScreensProps) {
  const [reason, setReason] = useState('100 damaged packs identified in factory stock count.')
  const [deltaText, setDeltaText] = useState('-100')
  const [confirmed, setConfirmed] = useState(true)
  const [message, setMessage] = useState('')
  const [selectedProductId, setSelectedProductId] = useState(products[0].id)
  const selectedProduct = products.find((product) => product.id === selectedProductId) ?? products[0]
  const delta = Number(deltaText)
  const validDelta = Number.isInteger(delta) && delta !== 0
  const after = selectedProduct.onHand + (validDelta ? delta : 0)
  const canConfirm = validDelta && Boolean(reason.trim()) && confirmed && after >= selectedProduct.reserved
  return (
    <main className="dashboard-content screen-content">
      <div className="detail-layout adjustment-layout">
        <Panel title="Adjustment details">
          <form onSubmit={(event) => { event.preventDefault(); setMessage(canConfirm ? 'Adjustment confirmed in this illustrative screen.' : 'Review the adjustment values and safeguards before confirming.') }}>
            <label className="form-field">Product *<select value={selectedProduct.id} onChange={(event) => setSelectedProductId(event.target.value)}>{products.map((product) => <option value={product.id} key={product.id}>{product.name} - {product.id}</option>)}</select></label>
            <label className="form-field">Reason *<input value={reason} onChange={(event) => setReason(event.target.value)} /></label>
            <label className="form-field">Quantity delta *<input inputMode="numeric" value={deltaText} onChange={(event) => setDeltaText(event.target.value)} /><small>Use a signed whole number. This adjustment {validDelta ? `${delta < 0 ? 'removes' : 'adds'} ${number(Math.abs(delta))} units.` : 'requires a non-zero whole number.'}</small></label>
            <div className="responsive-table"><table className="screen-table"><thead><tr><th>Factory stock · units</th><th>Before</th><th>After</th></tr></thead><tbody><tr><td>On-hand</td><td>{number(selectedProduct.onHand)}</td><td>{number(after)}</td></tr><tr><td>Reserved</td><td>{number(selectedProduct.reserved)}</td><td>{number(selectedProduct.reserved)}</td></tr><tr><td>Available</td><td>{number(selectedProduct.available)}</td><td>{number(after - selectedProduct.reserved)}</td></tr></tbody></table></div>
            <label className="confirm-check"><input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />I confirm the physical count and the reason for this adjustment.</label>
            {message && <p className={canConfirm ? 'inline-notice' : 'inline-error'} role="status">{message}</p>}
            <div className="form-actions"><span className="footnote">Illustrative state only</span><div><button className="button" type="button" onClick={() => onNavigate('stocks')}>Cancel</button><button className="button button-primary" type="submit" disabled={!canConfirm}>Confirm adjustment</button></div></div>
          </form>
        </Panel>
        <Panel title="Adjustment safeguards">
          <KeyValueRows rows={ [['Reference', 'ADJ-0106 · Draft'], ['Product', selectedProduct.name], ['SKU', selectedProduct.id], ['Requested change', `${validDelta ? (delta > 0 ? '+' : '−') + number(Math.abs(delta)) : '—'} units`]] } />
          <div className="notice-box"><strong>Negative balance blocked</strong><p>Example: −12,500 would result in −100 on-hand and cannot be confirmed.</p></div>
          <div className="notice-box"><strong>Reserved stock protected</strong><p>An adjustment must also leave enough on-hand stock to cover the existing {number(selectedProduct.reserved)} reserved units.</p></div>
        </Panel>
      </div>
      <div className="screen-footnote"><span>FreightFlow · Manufacturing administration</span><span>Static action state · Factory-owned stock only</span></div>
    </main>
  )
}

const movementEntries = [
  { date: '18 Oct · 00:00', id: 'BASE-001', movement: 'Baseline · Cream Cracker', change: '—', onHand: 12400, details: 'Opening stock baseline for Cream Cracker.' },
  { date: '20 Oct · 09:15', id: 'PRD-1062', movement: 'Production · B-20261020-CC01', change: '+600', onHand: 13000, details: '600 units added from batch B-20261020-CC01 · Ayesha M. · View entry opens the production receipt.' },
  { date: '20 Oct · 09:40', id: 'ADJ-0106', movement: 'Adjustment · damaged packs', change: '−100', onHand: 12900, details: '100 units removed after damaged packs were identified in the factory stock count.' },
]

function StockMovements({ onNavigate }: ManufacturingScreensProps) {
  const [query, setQuery] = useState('Cream Cracker - MC-BIS-001')
  const [selectedId, setSelectedId] = useState('PRD-1062')
  const visibleEntries = movementEntries.filter((entry) => `${entry.id} ${entry.movement} ${entry.details} Cream Cracker MC-BIS-001`.toLowerCase().includes(query.toLowerCase().replace(' - ', ' ')))
  const selected = movementEntries.find((entry) => entry.id === selectedId) ?? movementEntries[0]
  const exportEntries = () => {
    const csv = ['Date/time,Entry,Movement,Change,On-hand after', ...visibleEntries.map((entry) => `"${entry.date}",${entry.id},"${entry.movement}",${entry.change},${entry.onHand}`)].join('\n')
    const link = document.createElement('a')
    link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
    link.download = 'stock-movements.csv'
    link.click()
    URL.revokeObjectURL(link.href)
  }
  return (
    <main className="dashboard-content screen-content">
      <Panel title="Detailed movement ledger">
        <div className="movement-filters">
          <label className="form-field">Search product, SKU or entry<input value={query} onChange={(event) => setQuery(event.target.value)} /></label>
          <label className="form-field">From date<input type="text" defaultValue="18 Oct 2026" /></label>
          <label className="form-field">To date<input type="text" defaultValue="20 Oct 2026" /></label>
        </div>
        <div className="report-actions"><button className="button button-primary" type="button">Apply</button><button className="button" type="button" onClick={() => setQuery('')}>Reset</button><button className="button" type="button" onClick={exportEntries}>Export</button></div>
        <div className="responsive-table"><table className="screen-table"><thead><tr><th>Date / time · SLST</th><th>Entry</th><th>Movement / reference</th><th>Change</th><th>On-hand after</th><th>Action</th></tr></thead><tbody>{visibleEntries.map((entry) => <tr key={entry.id}><td>{entry.date}</td><td>{entry.id}</td><td>{entry.movement}</td><td>{entry.change}</td><td>{number(entry.onHand)}</td><td>{entry.id !== 'BASE-001' && <button className="text-button" type="button" onClick={() => setSelectedId(entry.id)}>View entry</button>}</td></tr>)}</tbody></table></div>
        <div className="notice-box selected-entry"><strong>Selected entry · {selected.id}</strong><p>{selected.details}</p>{selected.id === 'PRD-1062' && <button className="text-button" type="button" onClick={() => onNavigate('production-entry')}>Open production entry</button>}{selected.id === 'ADJ-0106' && <button className="text-button" type="button" onClick={() => onNavigate('adjustment')}>Open stock adjustment</button>}</div>
        <p className="footnote">{visibleEntries.length} entries shown · Illustrative stock ledger · No transport execution or warehouse receiving operations.</p>
      </Panel>
      <div className="screen-footnote"><span>FreightFlow · Manufacturing administration</span><span>Static action state · Factory-owned stock only</span></div>
    </main>
  )
}

function ProductionEntry({ onNavigate }: ManufacturingScreensProps) {
  const [productId, setProductId] = useState('MC-BIS-001')
  const [quantity, setQuantity] = useState('600')
  const [batch, setBatch] = useState('B-20261020-CC01')
  const [notes, setNotes] = useState('Morning production run. Quality release completed.')
  const product = products.find((item) => item.id === productId) ?? products[0]
  const quantityValue = Number(quantity)
  const valid = Number.isInteger(quantityValue) && quantityValue > 0 && Boolean(batch.trim())
  return (
    <main className="dashboard-content screen-content">
      <div className="detail-layout">
        <Panel title="Production entry">
          <form className="screen-form" onSubmit={(event) => { event.preventDefault(); onNavigate('stock-movements') }}>
            <label className="form-field">Product *<select value={productId} onChange={(event) => setProductId(event.target.value)}>{products.map((item) => <option value={item.id} key={item.id}>{item.name} - {item.id}</option>)}</select></label>
            <div className="form-pair"><label className="form-field">Production date *<input type="text" defaultValue="20 Oct 2026" /><small>Required date · SLST</small></label><label className="form-field">Batch reference *<input value={batch} onChange={(event) => setBatch(event.target.value)} /></label></div>
            <label className="form-field">Manufactured quantity *<input inputMode="numeric" value={quantity} onChange={(event) => setQuantity(event.target.value)} /><small>Positive whole units only.</small></label>
            <label className="form-field">Notes<textarea value={notes} onChange={(event) => setNotes(event.target.value)} /></label>
            <div className="notice-box"><strong>Review entry</strong><p>{valid ? `${number(quantityValue)} units will increase on-hand and available factory stock. Reserved quantity stays unchanged.` : 'Enter a positive whole quantity and batch reference to continue.'}</p></div>
            <div className="form-actions"><span className="footnote">Illustrative state only</span><div><button className="button" type="button" onClick={() => onNavigate('stocks')}>Cancel</button><button className="button button-primary" type="submit" disabled={!valid}>Review entry</button></div></div>
          </form>
        </Panel>
        <Panel title="Factory stock baseline">
          <strong className="baseline-product">{product.name} · {product.id}</strong>
          <KeyValueRows rows={ [['On-hand', `${number(product.onHand)} units`], ['Reserved', `${number(product.reserved)} units`], ['Available', `${number(product.available)} units`]] } />
          <div className="notice-box"><strong>Quantity validation</strong><p>Quantity must be greater than zero. Zero or negative production quantities cannot be reviewed.</p></div>
          <p className="body-copy">This illustration adds {valid ? number(quantityValue) : '0'} units from the manufacturing production entry.</p>
        </Panel>
      </div>
      <div className="screen-footnote"><span>FreightFlow · Manufacturing administration</span><span>Static action state · Factory-owned stock only</span></div>
    </main>
  )
}

const schedules = [
  ['SCH-2048', 'Cream Cracker 200g', 'Kandy Shop 014', '2,400', '20 Oct'],
  ['SCH-2049', 'Chocolate Cream 150g', 'Gampaha Shop 006', '1,200', '21 Oct'],
  ['SCH-2050', 'Lemon Puff 120g', 'Colombo Shop 021', '3,000', '22 Oct'],
  ['SCH-2051', 'Nice 100g', 'Kurunegala Shop 003', '800', '23 Oct'],
  ['SCH-2052', 'Tikir Marie 150g', 'Negombo Shop 011', '1,600', '24 Oct'],
]

function selectSchedule(row: string[], props: ManufacturingScreensProps) {
  const product = products.find((item) => row[1].startsWith(item.name))
  const day = row[4].match(/\d+/)?.[0] ?? '23'
  props.onSelectSchedule(row[0])
  props.onScheduleDraftChange({
    productId: product?.id ?? products[3].id,
    pickupDate: `2026-10-${day.padStart(2, '0')}`,
    quantity: row[3].replaceAll(',', ''),
    notes: '',
  })
}

function ShipmentSchedules(props: ManufacturingScreensProps) {
  const { onNavigate } = props
  const [query, setQuery] = useState('')
  const [productFilter, setProductFilter] = useState('All products')
  const filtered = schedules.filter((row) => `${row.join(' ')} Scheduled`.toLowerCase().includes(query.toLowerCase()) && (productFilter === 'All products' || row[1].startsWith(productFilter)))
  return (
    <main className="dashboard-content screen-content">
      <div className="screen-intro"><button className="button button-primary" type="button" onClick={() => onNavigate('shipment-create')}>➜ Create shipment schedule</button></div>
      <section className="summary-grid">{[['Planned next pickup date', '20 Oct', 'Planned next manufacturer pickup'], ['Required quantity', '2,400', 'Units scheduled for next pickup'], ['Scheduled products', '5', 'Products included in next pickup'], ['Scheduled lines', '24', 'Manufacturer-owned schedule lines']].map(([label, value, description]) => <article className="summary-card" key={label}><h2>{label}</h2><p className="summary-value">{value}</p><p className="summary-description">{description}</p></article>)}</section>
      <Panel title="Manufacturer shipment schedules">
        <div className="table-toolbar"><label className="screen-search"><span aria-hidden="true">⌕</span><span className="visually-hidden">Search schedules</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search product, shop, or schedule ID" /></label><select aria-label="Pickup date"><option>Next pickup date</option><option>20 Oct</option><option>23 Oct</option></select><select aria-label="Filter by product" value={productFilter} onChange={(event) => setProductFilter(event.target.value)}><option>All products</option>{products.map((product) => <option key={product.id}>{product.name}</option>)}</select><button className="button" type="button" onClick={() => { setQuery(''); setProductFilter('All products') }}>☷ Filters</button></div>
        <div className="responsive-table"><table className="screen-table"><thead><tr><th>Schedule ID</th><th>Product</th><th>Shop</th><th>Req. qty</th><th>Next pickup</th><th>Status</th><th>Action</th></tr></thead><tbody>{filtered.map((row) => <tr key={row[0]}><td><strong>{row[0]}</strong></td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td><td>Scheduled</td><td><button className="text-button" type="button" onClick={() => { selectSchedule(row, props); onNavigate('shipment-create') }}>Edit</button>　<button className="text-button" type="button" onClick={() => { selectSchedule(row, props); onNavigate('shipment-detail') }}>View details</button></td></tr>)}</tbody></table></div>
        <div className="table-footer">Showing 1–{filtered.length} of 24 manufacturer schedule lines <span>‹　<strong>1</strong>　›</span></div>
      </Panel>
    </main>
  )
}

function ShipmentCreate({ onNavigate, scheduleDraft, onScheduleDraftChange }: ManufacturingScreensProps) {
  const product = products.find((item) => item.id === scheduleDraft.productId) ?? products[3]
  const quantity = Number(scheduleDraft.quantity)
  const valid = Number.isInteger(quantity) && quantity > 0 && Boolean(scheduleDraft.pickupDate)
  const update = (key: keyof typeof scheduleDraft, value: string) => onScheduleDraftChange({ ...scheduleDraft, [key]: value })
  return (
    <main className="dashboard-content screen-content">
      <div className="detail-layout">
        <Panel title="Shipment schedule details">
          <form className="screen-form" onSubmit={(event) => { event.preventDefault(); onNavigate('shipment-review') }}>
            <label className="form-field">Product *<select value={product.id} onChange={(event) => update('productId', event.target.value)}>{products.map((item) => <option value={item.id} key={item.id}>{item.name} · {item.id}</option>)}</select></label>
            <div className="form-pair"><label className="form-field">Planned next pickup date *<input type="date" value={scheduleDraft.pickupDate} onChange={(event) => update('pickupDate', event.target.value)} /><small>Planned next pickup date for this schedule.</small></label><label className="form-field">Required quantity *<input inputMode="numeric" value={scheduleDraft.quantity} onChange={(event) => update('quantity', event.target.value)} /><small>Editable · positive whole units only.</small></label></div>
            <label className="form-field">Notes<textarea value={scheduleDraft.notes} onChange={(event) => update('notes', event.target.value)} /></label>
            <div className="notice-box"><strong>Manufacturer-owned schedule</strong><p>Save only after the pickup date and quantity are confirmed. This records a schedule, not a pickup order.</p></div>
            <div className="form-actions"><span className="footnote">Illustrative state only</span><div><button className="button" type="button" onClick={() => onNavigate('shipment-schedules')}>Cancel</button><button className="button button-primary" type="submit" disabled={!valid}>Review schedule</button></div></div>
          </form>
        </Panel>
        <Panel title="Scheduling context">
          <KeyValueRows rows={ [['Product', product.name], ['SKU', product.id], ['On-hand', `${number(product.onHand)} units`], ['Reserved', `${number(product.reserved)} units`], ['Available', `${number(product.available)} units`]] } />
          <div className="notice-box"><strong>ERP confirmation needed</strong><p>Stock reservation and deduction rules require ERP confirmation. This form records scheduling details only.</p></div>
          <p className="body-copy">Next: review the schedule, then record the manufacturer-side warehouse handover.</p>
        </Panel>
      </div>
      <div className="screen-footnote"><span>FreightFlow · Manufacturing administration</span><span>Static action state · Factory-owned stock only</span></div>
    </main>
  )
}

function ShipmentReview({ onNavigate, scheduleDraft, selectedScheduleId }: ManufacturingScreensProps) {
  const product = products.find((item) => item.id === scheduleDraft.productId) ?? products[3]
  const pickupDate = new Date(`${scheduleDraft.pickupDate}T00:00:00`).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  return (
    <main className="dashboard-content screen-content">
      <div className="detail-layout">
        <div className="detail-main">
          <Panel title={`${selectedScheduleId} · Review before saving`}>
            <p className="footnote">Unsubmitted review · Existing values shown unchanged</p>
            <KeyValueRows rows={ [['Schedule', selectedScheduleId], ['Product', `${product.name} · ${product.id} · ${product.size}`], ['Required quantity', `${number(Number(scheduleDraft.quantity))} units`], ['Planned next pickup date', pickupDate]] } />
            <div className="notice-box"><strong>No changes submitted</strong><p>Required quantity remains {number(Number(scheduleDraft.quantity))} units and planned next pickup remains {pickupDate}. Saving is illustrative only.</p></div>
            <div className="review-buttons"><button className="button" type="button" onClick={() => onNavigate('shipment-create')}>Back to edit schedule</button><button className="button button-primary" type="button" onClick={() => onNavigate('shipment-saved')}>Save schedule</button></div>
          </Panel>
          <Panel title="Next step"><p className="body-copy">After shipment scheduling, record the manufacturer-side warehouse handover using the actual handed-over quantity.</p></Panel>
        </div>
        <Panel title="Factory stock · Reference only">
          <KeyValueRows rows={ [['On-hand', `${number(product.onHand)} units`], ['Reserved', `${number(product.reserved)} units`], ['Available', `${number(product.available)} units`]] } />
          <div className="notice-box"><strong>Stock handling</strong><p>Stock reservation and deduction rules require ERP confirmation. No stock change is implied by this review.</p></div>
        </Panel>
      </div>
    </main>
  )
}

function ShipmentSaved({ onNavigate, scheduleDraft, selectedScheduleId }: ManufacturingScreensProps) {
  const product = products.find((item) => item.id === scheduleDraft.productId) ?? products[3]
  const pickupDate = new Date(`${scheduleDraft.pickupDate}T00:00:00`).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
  return (
    <main className="dashboard-content screen-content">
      <div className="detail-layout">
        <Panel title={`${selectedScheduleId} · Scheduled`}>
          <div className="notice-box"><strong>Illustrative schedule saved</strong><p>No live schedule was created or changed.</p></div>
          <KeyValueRows rows={ [['Product', product.name], ['SKU', product.id], ['Next pickup date', pickupDate], ['Required quantity', `${number(Number(scheduleDraft.quantity))} units`], ['Shipment status', 'Scheduled'], ['Factory on-hand', `${number(product.onHand)} units · unchanged`], ['Reserved / available', `${number(product.reserved)} / ${number(product.available)} units`]] } />
          <div className="review-buttons"><span className="footnote">Illustrative state only</span><div><button className="button" type="button" onClick={() => onNavigate('shipment-create')}>Edit schedule</button><button className="button button-primary" type="button" onClick={() => onNavigate('shipment-schedules')}>Back to schedules</button></div></div>
        </Panel>
        <Panel title="What happens next">
          <p className="body-copy">Review the manufacturer-side Warehouse Handover when ready to record the actual quantity handed over.</p>
          <div className="notice-box"><strong>Manufacturer-side handover</strong><p>Recording a schedule does not record a warehouse receipt or change factory stock.</p></div>
          <KeyValueRows rows={ [['Saved by', 'Ayesha M.'], ['Saved at', '20 Oct · 10:20 SLST'], ['Schedule owner', 'Manufacturer Admin']] } />
        </Panel>
      </div>
      <div className="screen-footnote"><span>FreightFlow · Manufacturing administration</span><span>Static action state · Factory-owned stock only</span></div>
    </main>
  )
}

function ShipmentDetails({ onNavigate, scheduleDraft, selectedScheduleId }: ManufacturingScreensProps) {
  const product = products.find((item) => item.id === scheduleDraft.productId) ?? products[3]
  return (
    <main className="dashboard-content screen-content">
      <div className="detail-layout">
        <Panel title={selectedScheduleId}>
          <span className="status-chip">Scheduled</span>
          <KeyValueRows rows={ [['Product', `${product.name} · ${product.id} · ${product.size}`], ['Relevant order', 'Not confirmed'], ['Destination agency', 'Not confirmed'], ['Required quantity', `${number(Number(scheduleDraft.quantity))} units`], ['Planned next pickup date', new Date(`${scheduleDraft.pickupDate}T00:00:00`).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })], ['Notes', scheduleDraft.notes || 'No confirmed notes supplied']] } />
          <div className="notice-box"><strong>Permitted schedule edits</strong><p>Date, required quantity and notes may be edited. Order and agency relationships remain unconfirmed.</p></div>
          <div className="review-buttons"><button className="button button-primary" type="button" onClick={() => onNavigate('shipment-create')}>Edit permitted information</button><button className="button" type="button" onClick={() => onNavigate('reports')}>View history</button></div>
        </Panel>
        <div className="detail-main">
          <Panel title="Stock context · Read only">
            <p className="footnote">{product.name} · Reference snapshot 18 Oct 2026</p>
            <KeyValueRows rows={ [['On-hand', `${number(product.onHand)} units`], ['Reserved', `${number(product.reserved)} units`], ['Available', `${number(product.available)} units`], ['Threshold', `${product.id === 'MC-BIS-004' ? '3,000' : '8,000'} units`]] } />
            <p className="footnote">The baseline reservation is not evidence of a reservation for {selectedScheduleId}.</p>
          </Panel>
          <Panel title="Schedule scope"><p className="body-copy">A schedule records planning information only. It does not reserve or deduct stock, book pickup or record a handover.</p><p className="footnote">No confirmed history events have been supplied.</p></Panel>
        </div>
      </div>
      <div className="screen-actions"><button className="button" type="button" onClick={() => onNavigate('shipment-schedules')}>Back to shipment schedules</button></div>
    </main>
  )
}

function AgencyMaintenance({ onNavigate }: ManufacturingScreensProps) {
  const [showList, setShowList] = useState(false)
  if (showList) {
    return (
      <main className="dashboard-content screen-content">
        <Panel title="Agency records"><div className="empty-state"><strong>No confirmed agencies available</strong><p>Agency records have not been supplied. No agency identity, contact details, or relationships are inferred.</p><button className="button" type="button" onClick={() => setShowList(false)}>Open read-only maintenance view</button></div></Panel>
        <div className="screen-actions"><button className="button" type="button" onClick={() => onNavigate('dashboard')}>Back to dashboard</button></div>
      </main>
    )
  }
  return (
    <main className="dashboard-content screen-content">
      <div className="detail-layout">
        <Panel title="Agency information">
          <div className="agency-heading"><strong>Agency record</strong><span className="status-chip">Read only · No record selected</span></div>
          <label className="form-field">Agency record<select disabled><option>No confirmed agencies available</option></select><small>Agency records have not been supplied. Return to the agency list for record review.</small></label>
          <div className="form-pair"><label className="form-field">Agency identifier<input disabled placeholder="—" /></label><label className="form-field">Agency name<input disabled placeholder="—" /></label></div>
          <label className="form-field">Agency address<textarea disabled placeholder="—" /></label>
          <div className="form-pair"><label className="form-field">Contact person<input disabled placeholder="—" /></label><label className="form-field">Contact number<input disabled placeholder="—" /></label></div>
          <label className="form-field">Contact email<input disabled placeholder="—" /></label>
          <p className="footnote">Potential agency fields are shown empty. No identity, contact data or agency relationships have been inferred.</p>
          <div className="form-actions"><span className="footnote">No changes available</span><button className="button" type="button" disabled>Maintain agency · Locked</button></div>
        </Panel>
        <div className="detail-main">
          <Panel title="Maintenance access"><KeyValueRows rows={ [['Selected record', 'None'], ['Maintenance authority', 'Not confirmed'], ['Current state', 'Read-only layout']] } /><div className="notice-box"><strong>Authorization required</strong><p>Maintenance is locked until authority is confirmed and a confirmed agency record is selected. No save action is available.</p></div></Panel>
          <Panel title="Agency record boundary"><p className="body-copy">Shop names are not agency records. No relationship to orders or schedules is established by this screen.</p><button className="button" type="button" onClick={() => setShowList(true)}>Return to agency list</button></Panel>
        </div>
      </div>
      <div className="screen-actions"><button className="button" type="button" onClick={() => setShowList(true)}>Return to agency list</button></div>
      <div className="screen-footnote"><span>FreightFlow · Manufacturing administration</span><span>Manufacturer-side administration only</span></div>
    </main>
  )
}

function ManufacturingScreens(props: ManufacturingScreensProps) {
  switch (props.page) {
    case 'sap': return <SapList {...props} />
    case 'sap-detail': return <SapDetail {...props} />
    case 'orders': return <OrderDetails {...props} />
    case 'stocks': return <ProductDetails {...props} />
    case 'reports': return <Reports {...props} />
    case 'adjustment': return <StockAdjustment {...props} />
    case 'stock-movements': return <StockMovements {...props} />
    case 'production-entry': return <ProductionEntry {...props} />
    case 'shipment-schedules': return <ShipmentSchedules {...props} />
    case 'shipment-create': return <ShipmentCreate {...props} />
    case 'shipment-review': return <ShipmentReview {...props} />
    case 'shipment-saved': return <ShipmentSaved {...props} />
    case 'shipment-detail': return <ShipmentDetails {...props} />
    case 'agency': return <AgencyMaintenance {...props} />
  }
}

export default ManufacturingScreens
