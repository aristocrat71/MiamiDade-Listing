import React from 'react';

const Header = () => (
  <header>
    {/* Top blue bar */}
    <div style={{ background: '#28639a', color: '#fff', height: 36, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontSize: 16, padding: '0 32px' }}>
      <span style={{ marginRight: 24 }}>311</span>
      <span style={{ marginRight: 24 }}>GovMeetings</span>
      <span style={{ marginRight: 24 }}>Calendar</span>
      <span style={{ marginRight: 8 }}>Translate <span style={{ fontSize: 12 }}>▼</span></span>
    </div>
    {/* Main nav */}
    <nav style={{ boxShadow: 'none', borderBottom: '1px solid #e0e0e0', background: '#fff', minHeight: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Logo placeholder */}
        <img src="/logo-placeholder.png" alt="Miami-Dade Logo" style={{ height: 48, marginRight: 32 }} />
        {/* Nav links */}
        <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ marginRight: 32, fontWeight: 600, cursor: 'pointer' }}>Services & Information <span style={{ fontSize: 12 }}>▼</span></li>
          <li style={{ marginRight: 32, fontWeight: 600, cursor: 'pointer' }}>News & Social Media <span style={{ fontSize: 12 }}>▼</span></li>
          <li style={{ marginRight: 32, fontWeight: 600, cursor: 'pointer' }}>Your Government <span style={{ fontSize: 12 }}>▼</span></li>
          <li style={{ marginRight: 32, fontWeight: 600, cursor: 'pointer' }}>Employees <span style={{ fontSize: 12 }}>▼</span></li>
        </ul>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Search icon */}
        <div>
          <img src="/search-icon.png" alt="Search" style={{ width: 28, height: 28 }} />
        </div>
        {/* Login button */}
        <button style={{ background: 'none', border: 'none', color: '#333', fontWeight: 600, fontSize: 18, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <i className="material-icons" style={{ marginRight: 8, color: '#795548' }}>login</i>Login
        </button>
      </div>
    </nav>
  </header>
);

export default Header; 