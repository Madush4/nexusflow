import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import ManufacturingScreens from './pages/ManufacturingScreens'
import AdminScreens from './pages/AdminScreens'
import Header from './components/layout/Header'
import Sidebar, { type WorkspacePage } from './components/layout/Sidebar'
import './App.css'

function App() {
  const [page, setPage] = useState<WorkspacePage>('dashboard')
  const [scheduleDraft, setScheduleDraft] = useState({
    productId: 'MC-BIS-004',
    pickupDate: '2026-10-23',
    quantity: '800',
    notes: 'Next factory pickup for Nice.',
  })
  const [selectedScheduleId, setSelectedScheduleId] = useState('SCH-2051')

  if (page === 'dashboard') return <Dashboard onNavigate={setPage} />

  const pageHeaders: Record<Exclude<WorkspacePage, 'dashboard'>, { breadcrumb: string; title: string }> = {
    sap: { breadcrumb: 'Manufacturing Admin / SAP Requirements', title: 'SAP Requirements' },
    'sap-detail': { breadcrumb: 'Manufacturing Admin / SAP Requirements / Requirement details', title: 'SAP requirement details' },
    orders: { breadcrumb: 'Manufacturing Admin / Upcoming Orders / Order details', title: 'Upcoming order details' },
    stocks: { breadcrumb: 'Manufacturing Admin / Manufacturing Stocks', title: 'Product Details' },
    reports: { breadcrumb: 'Manufacturing Admin / Reports & History', title: 'Reports · Stock history' },
    adjustment: { breadcrumb: 'Manufacturing Admin / Manufacturing Stocks', title: 'Stock adjustment' },
    'stock-movements': { breadcrumb: 'Manufacturing Admin / Manufacturing Stocks', title: 'Stock movements' },
    'production-entry': { breadcrumb: 'Manufacturing Admin / Manufacturing Stocks / Products', title: 'Record manufactured quantity' },
    'shipment-schedules': { breadcrumb: 'Manufacturing Admin / Shipment Schedules', title: 'Shipment Schedules' },
    'shipment-create': { breadcrumb: 'Manufacturing Admin / Shipment Schedules', title: 'Create shipment schedule' },
    'shipment-review': { breadcrumb: 'Manufacturing Admin / Shipment Schedules / SCH-2051 / Review', title: 'Review shipment schedule' },
    'shipment-saved': { breadcrumb: 'Manufacturing Admin / Shipment Schedules', title: 'Schedule saved' },
    'shipment-detail': { breadcrumb: `Manufacturing Admin / Shipment Schedules / ${selectedScheduleId}`, title: 'Shipment schedule details' },
    agency: { breadcrumb: 'Manufacturing Admin / Agency Management / Maintenance', title: 'Agency maintenance' },
    notifications: { breadcrumb: 'Manufacturing Admin / Notifications', title: 'Notifications' },
    'notification-preferences': { breadcrumb: 'Manufacturing Admin / Settings / Notification preferences', title: 'Notification preferences' },
    'reports-orders': { breadcrumb: 'Manufacturing Admin / Reports & History / Orders', title: 'Reports & History — orders' },
    'reports-handover': { breadcrumb: 'Manufacturing Admin / Reports & History / Handover', title: 'Reports & History — handover' },
    'account-preferences': { breadcrumb: 'Manufacturing Admin / Settings / Account preferences', title: 'Account preferences' },
  }

  return (
    <div className="app-layout">
      <Sidebar activePage={page} onNavigate={setPage} />
      <div className="main-column">
        <Header {...pageHeaders[page]} compact={page !== 'sap'} onNavigate={setPage} />
        {['notifications', 'notification-preferences', 'reports-orders', 'reports-handover', 'account-preferences'].includes(page) ? (
          <AdminScreens page={page} onNavigate={setPage} />
        ) : (
          <ManufacturingScreens
            page={page}
            onNavigate={setPage}
            scheduleDraft={scheduleDraft}
            onScheduleDraftChange={setScheduleDraft}
            selectedScheduleId={selectedScheduleId}
            onSelectSchedule={setSelectedScheduleId}
          />
        )}
      </div>
    </div>
  )
}

export default App
