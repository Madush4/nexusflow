import type { LowStockAlert } from '../../types/dashboard'

interface LowStockAlertsProps {
  alerts: LowStockAlert[]
}

function LowStockAlerts({ alerts }: LowStockAlertsProps) {
  return (
    <section className="panel alerts-panel">
      <div className="panel-heading">
        <div>
          <h2>Low stock alerts</h2>
          <p>Products below safety stock threshold</p>
        </div>
        <span className="panel-count">{alerts.length} alerts</span>
      </div>
      <ul className="alert-list">
        {alerts.map((alert) => (
          <li className="alert-item" key={alert.id}>
            <strong>
              {alert.id} · {alert.product}
            </strong>
            <span>Available {alert.available}</span>
            <span>Threshold {alert.threshold}</span>
            <span>{alert.message}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LowStockAlerts
