import './Header.css'
import { NavigationIconGraphic, type WorkspacePage } from './Sidebar'

interface HeaderProps {
  compact?: boolean
  onNavigate?: (page: WorkspacePage) => void
}

function Header({
  compact = false,
  onNavigate,
}: HeaderProps) {
  return (
    <header className="page-header">
      <div className="header-tools">
        {compact ? (
          <div className="compact-header-tools">
            <span className="header-time">SLST</span>
          </div>
        ) : (
          <div className="header-controls">
            <label className="search-field">
              <span aria-hidden="true" className="search-icon">
                ⌕
              </span>
              <span className="visually-hidden">Search manufacturer workspace</span>
              <input
                type="search"
                placeholder="Search manufacturer workspace..."
              />
            </label>

            <button className="date-filter" type="button" aria-label="Selected date">
              <span>18 October 2026 10:45 SLST</span>
            </button>
          </div>
        )}

        <div className="header-actions">
          <button className="notification-button" type="button" aria-label="Notifications" onClick={() => onNavigate?.('notifications')}>
            <NavigationIconGraphic icon="bell" />
          </button>
          <div className="admin-profile">
            <span className="avatar" aria-hidden="true">
              AM
            </span>
            <span className="profile-copy">
              <strong>Ayesha M.</strong>
              <span>Manufacturing Admin</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
