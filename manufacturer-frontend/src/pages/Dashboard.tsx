import AdminActions from '../components/dashboard/AdminActions'
import LowStockAlerts from '../components/dashboard/LowStockAlerts'
import ShipmentSummary from '../components/dashboard/ShipmentSummary'
import StockOverview from '../components/dashboard/StockOverview'
import SummaryCard from '../components/dashboard/SummaryCard'
import Header from '../components/layout/Header'
import Sidebar, { type WorkspacePage } from '../components/layout/Sidebar'
import {
  adminActions,
  lowStockAlerts,
  shipments,
  stockRecords,
  summaryMetrics,
} from '../data/dashboardData'

interface DashboardProps {
  onNavigate: (page: WorkspacePage) => void
}

function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="app-layout">
      <Sidebar activePage="dashboard" onNavigate={onNavigate} />
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
            <ShipmentSummary shipments={shipments} onNavigate={onNavigate} />
          </div>

          <div className="dashboard-grid dashboard-grid-secondary">
            <LowStockAlerts alerts={lowStockAlerts} />
            <AdminActions
              actions={adminActions}
              onAction={(label) => {
                if (label.includes('SAP')) onNavigate('sap')
                else if (label.includes('orders')) onNavigate('orders')
                else if (label.includes('stocks')) onNavigate('stocks')
                else if (label.includes('Reports')) onNavigate('reports')
              }}
            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
