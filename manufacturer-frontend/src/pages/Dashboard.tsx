import AdminActions from '../components/dashboard/AdminActions'
import LowStockAlerts from '../components/dashboard/LowStockAlerts'
import ShipmentSummary from '../components/dashboard/ShipmentSummary'
import StockOverview from '../components/dashboard/StockOverview'
import SummaryCard from '../components/dashboard/SummaryCard'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import {
  adminActions,
  lowStockAlerts,
  shipments,
  stockRecords,
  summaryMetrics,
} from '../data/dashboardData'

function Dashboard() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-column">
        <Header />
        <main className="dashboard-content">
          <section className="summary-grid" aria-label="Inventory summary">
            {summaryMetrics.map((metric) => (
              <SummaryCard metric={metric} key={metric.label} />
            ))}
          </section>

          <div className="dashboard-grid dashboard-grid-primary">
            <StockOverview records={stockRecords} />
            <ShipmentSummary shipments={shipments} />
          </div>

          <div className="dashboard-grid dashboard-grid-secondary">
            <LowStockAlerts alerts={lowStockAlerts} />
            <AdminActions actions={adminActions} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
