import React from 'react';

const Footer = () => (
  <footer style={{ background: '#28639a', color: '#fff', padding: '48px 0 0 0', position: 'relative' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
      {/* Columns */}
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ marginRight: 64 }}>
          <h4 style={{ fontWeight: 600, marginBottom: 16 }}>Help and Support</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>Miami-Dade Home</li>
            <li>Privacy Statement</li>
            <li>ADA Notice</li>
            <li>Disclaimer</li>
            <li>About Miami-Dade</li>
          </ul>
        </div>
        <div style={{ marginRight: 64 }}>
          <h4 style={{ fontWeight: 600, marginBottom: 16 }}>Self-Service</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>311 Contact Center</li>
            <li>Mobile Applications</li>
            <li>Open Data</li>
            <li>Public Records</li>
            <li>Service Directory</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: 16 }}>Stay Connected</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>Legal Ads & Public Notices</li>
            <li>Social Media Directory</li>
            <li>Watch Government Meetings</li>
            <li>County Calendar</li>
            <li>News RSS Feed</li>
          </ul>
        </div>
      </div>
      {/* Logo and Award */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="/logo-placeholder.png" alt="Miami-Dade Logo" style={{ height: 56, marginBottom: 16 }} />
        <span style={{ fontSize: 14, marginBottom: 8 }}>© 2025 Miami-Dade County. All rights reserved.</span>
        <img src="/award-placeholder.png" alt="Government Experience Award" style={{ height: 80, background: '#fff', padding: 8, borderRadius: 8 }} />
      </div>
    </div>
    {/* Legal disclaimer */}
    <div style={{ maxWidth: 1200, margin: '32px auto 0 auto', padding: '0 32px', fontSize: 15 }}>
      Under Florida law, e-mail addresses are public records. If you do not want your e-mail address released in response to a public records request, do not send electronic mail to this entity. Instead, contact this office by phone or in writing.
    </div>
    {/* Fixed bottom bar */}
    <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', background: '#fff', color: '#1976d2', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 48px', boxShadow: '0 -2px 8px rgba(0,0,0,0.05)', zIndex: 100 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontWeight: 700, fontSize: 28, color: '#0091d0', marginRight: 16 }}>miamidade.gov</span>
        {/* Social icons */}
        <span style={{ marginRight: 8 }}><img src="/facebook.png" alt="Facebook" style={{ width: 32, height: 32 }} /></span>
        <span style={{ marginRight: 8 }}><img src="/instagram.png" alt="Instagram" style={{ width: 32, height: 32 }} /></span>
        <span style={{ marginRight: 8 }}><img src="/twitter.png" alt="Twitter" style={{ width: 32, height: 32 }} /></span>
        <span style={{ marginRight: 8 }}><img src="/youtube.png" alt="YouTube" style={{ width: 32, height: 32 }} /></span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: '#1976d2', fontSize: 18, marginRight: 8 }}>Feedback</span>
        <img src="/chat.png" alt="Chat" style={{ width: 28, height: 28, marginRight: 8 }} />
      </div>
    </div>
  </footer>
);

export default Footer; 