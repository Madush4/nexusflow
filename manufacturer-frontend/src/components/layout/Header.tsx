import './Header.css'

function Header() {
  return (
    <header className="page-header">
      <div className="page-heading">
        <p className="breadcrumb">Manufacturing Admin / Dashboard</p>
        <h1>Good morning, Ayesha</h1>
      </div>

      <div className="header-tools">
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
