import './Header.css'
import type { WorkspacePage } from './Sidebar'

interface HeaderProps {
  breadcrumb?: string
  title?: string
  compact?: boolean
  onNavigate?: (page: WorkspacePage) => void
}

function Header({
  breadcrumb = 'Manufacturing Admin / Dashboard',
  title = 'Good morning, Ayesha',
  compact = false,
  onNavigate,
}: HeaderProps) {
  return (
    <header className={`page-header${compact ? ' is-compact' : ''}`}>
      <div className="page-heading">
        <p className="breadcrumb">{breadcrumb}</p>
        {!compact && <h1>{title}</h1>}
      </div>

      <div className="header-tools">
        {compact ? (
          <div className="compact-header-tools">
            <span className="header-time">SLST</span>
            <button className="notification-button" type="button" aria-label="Notifications" onClick={() => onNavigate?.('notifications')}>♧</button>
          </div>
        ) : (
          <>
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
              <span aria-hidden="true" className="chevron">
                ⌄
              </span>
            </button>
          </>
        )}

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
    </header>
  )
}

export default Header
