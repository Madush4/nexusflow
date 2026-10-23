import type { Shipment } from '../../types/dashboard'
import type { WorkspacePage } from '../layout/Sidebar'

interface ShipmentSummaryProps {
  shipments: Shipment[]
  onNavigate: (page: WorkspacePage) => void
}

function ShipmentSummary({ shipments, onNavigate }: ShipmentSummaryProps) {
  return (
    <section className="panel shipment-panel">
      <div className="panel-heading">
        <div>
          <h2>Shipment summary</h2>
          <p>Required quantity and planned pickup</p>
        </div>
        <span className="panel-count">{shipments.length} shipments</span>
      </div>
      <ul className="shipment-list">
        {shipments.map((shipment) => (
          <li className="shipment-item" key={shipment.id}>
            <strong>
              {shipment.id} · {shipment.scheduled} · {shipment.quantity}
            </strong>
            <span>
              {shipment.product} · {shipment.destination}
            </span>
          </li>
        ))}
      </ul>
      <div className="shipment-actions">
        <button className="button button-primary" type="button" onClick={() => onNavigate('shipment-create')}>
          Create shipment schedule
        </button>
        <button className="button" type="button" onClick={() => onNavigate('shipment-schedules')}>
          Warehouse handover
        </button>
      </div>
    </section>
  )
}

export default ShipmentSummary
