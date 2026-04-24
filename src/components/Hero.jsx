import React, { useEffect, useRef } from 'react';
import './Hero.css';

const TICKER_GIGS = [
  'Wash plates at SUB',
  'Write CHE221 lab report',
  'Check if there\'s light at Moremi Hostel',
  'Fill seats at an embarrassing event',
  'Queue at the Registrar\'s office for me',
  'Move my mattress to Block C',
  'Tutor PHY101 — 2hrs',
  'Buy jollof rice from the cafeteria',
  'Proofread my final year project',
  'Pick up my package from the Porter',
  'Take notes in MTH302 today',
  'Design a departmental flyer in Canva',
  'Attend my birthday as my friend',
  'Run to GTBank ATM and confirm cash',
  'Fix this Python bug in 20 minutes',
  'Help set up chairs for departmental dinner',
  'Return my overdue library books',
  'Come celebrate with me — need 10 people',
];

const stats = [
  { value: '₦5,000', label: 'avg daily earn', icon: '💸' },
  { value: '1,200+', label: 'verified gigs', icon: '✅' },
  { value: 'Same-day', label: 'payout', icon: '⚡' },
  { value: '8,000+', label: 'students joined', icon: '🎓' },
];

function Hero() {
  const handleNavClick = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      {/* Noise texture layer */}
      <div className="hero__noise" />

      <div className="hero__inner">

        {/* ——— TOP: eyebrow + headline ——— */}
        <div className="hero__top container">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            UNILAG — Launching First &nbsp;·&nbsp; Any gig. Any skill. Any price.
          </div>

          <h1 className="hero__headline">
            No{' '}
            <span className="hero__headline-green">Broke</span>
            <br />
            <span className="hero__headline-white">Dayz.</span>
          </h1>

          <p className="hero__subline">
            The only campus marketplace where you can post <em>anything</em> — from writing lab
            reports to washing plates, filling event seats to checking hostel light.
            If it's legal and ethical, it belongs here.
          </p>

          <div className="hero__ctas">
            <a
              href="#browse-gigs"
              className="hero__cta-primary"
              onClick={(e) => handleNavClick(e, '#browse-gigs')}
            >
              Browse Gigs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#waitlist"
              className="hero__cta-secondary"
              onClick={(e) => handleNavClick(e, '#waitlist')}
            >
              Post a Gig
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </a>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-avatars">
              {['A','B','C','D','E'].map((l, i) => (
                <div key={i} className="hero__trust-avatar" style={{ '--i': i }}>{l}</div>
              ))}
            </div>
            <p className="hero__trust-text">
              <strong>8,000+ students</strong> on the waitlist
            </p>
          </div>
        </div>

        {/* ——— TICKER — the differentiator ——— */}
        <div className="hero__ticker-section">
          <div className="hero__ticker-label">real gigs on zbd</div>
          <div className="hero__ticker">
            <div className="hero__ticker-track">
              {[...TICKER_GIGS, ...TICKER_GIGS].map((gig, i) => (
                <span key={i} className="hero__ticker-item">
                  {gig}
                  <span className="hero__ticker-sep">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ——— BOTTOM: stats + card ——— */}
        <div className="hero__bottom container">
          {/* Stat strip */}
          <div className="hero__stats">
            {stats.map((s, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-icon">{s.icon}</span>
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Live gig card preview */}
          <div className="hero__card-preview">
            <div className="hero__card">
              <div className="hero__card-header">
                <div className="hero__card-avatar">KA</div>
                <div>
                  <p className="hero__card-name">Kemi Adeyemi</p>
                  <p className="hero__card-role">300L, UNILAG · Moremi Hostel</p>
                </div>
                <span className="hero__card-badge">✓ Verified</span>
              </div>
              <div className="hero__card-gig">
                <span className="hero__card-gig-tag urgent">URGENT</span>
                <p className="hero__card-gig-title">Event Setup Assistant</p>
                <p className="hero__card-gig-meta">Faculty Square · 4 hrs · Manual work</p>
              </div>
              <div className="hero__card-footer">
                <div className="hero__card-pay">
                  <span className="hero__card-pay-amount">₦7,500</span>
                  <span className="hero__card-pay-label">Same-day payout</span>
                </div>
                <button className="hero__card-apply">Apply Now</button>
              </div>
              <div className="hero__card-ping" />
            </div>

            {/* Floating payout notif */}
            <div className="hero__notif">
              <span className="hero__notif-icon">💰</span>
              <div>
                <p className="hero__notif-title">Payment Received!</p>
                <p className="hero__notif-sub">₦7,500 sent to your wallet</p>
              </div>
            </div>

            {/* Second card — the "unusual" gig */}
            <div className="hero__card hero__card--alt">
              <div className="hero__card-gig" style={{ marginBottom: 0 }}>
                <span className="hero__card-gig-tag casual">NEW</span>
                <p className="hero__card-gig-title">Check if light is on at Amina Hostel</p>
                <p className="hero__card-gig-meta">Amina Hostel · 5 mins · Errand</p>
              </div>
              <div className="hero__card-footer" style={{ marginTop: '0.85rem' }}>
                <div className="hero__card-pay">
                  <span className="hero__card-pay-amount">₦300</span>
                  <span className="hero__card-pay-label">Quick task</span>
                </div>
                <button className="hero__card-apply hero__card-apply--alt">Take it</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel" />
          </div>
          <span>scroll</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
