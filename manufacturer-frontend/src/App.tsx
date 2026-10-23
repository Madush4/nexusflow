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

  return (
    <div className="app-layout">
      <Sidebar activePage={page} onNavigate={setPage} />
      <div className="main-column">
        <Header compact={page !== 'sap'} onNavigate={setPage} />
        {['notifications', 'notification-preferences', 'warehouse-handover', 'reports-orders', 'reports-handover', 'account-preferences'].includes(page) ? (
          <AdminScreens
            page={page}
            onNavigate={setPage}
            selectedScheduleId={selectedScheduleId}
            scheduleDraft={scheduleDraft}
          />
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
