import type { AdminAction } from '../../types/dashboard'

interface AdminActionsProps {
  actions: AdminAction[]
  onAction?: (label: string) => void
}

function AdminActions({ actions, onAction }: AdminActionsProps) {
  return (
    <section className="panel admin-actions-panel">
      <div className="panel-heading">
        <div>
          <h2>Admin actions</h2>
          <p>Common manufacturing administration tasks</p>
        </div>
        <span className="panel-count">{actions.length} actions</span>
      </div>
      <div className="admin-actions">
        {actions.map((action) => (
          <button
            className={`button${action.primary ? ' button-primary' : ''}`}
            type="button"
            onClick={() => onAction?.(action.label)}
            key={action.label}
          >
            {action.label}
          </button>
        ))}
      </div>
    </section>
  )
}

export default AdminActions
