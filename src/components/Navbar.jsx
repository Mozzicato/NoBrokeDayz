import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(target);
    if (el) {
      const navHeight = 72;
      const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <div className="navbar__logo-icon">
            <span>Z</span>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">Zero</span>
            <span className="navbar__logo-sub">Broke Days</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar__links">
          <li>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>
              How it Works
            </a>
          </li>
          <li>
            <a href="#browse-gigs" onClick={(e) => handleNavClick(e, '#browse-gigs')}>
              Browse Gigs
            </a>
          </li>
          <li>
            <a href="#waitlist" onClick={(e) => handleNavClick(e, '#waitlist')}>
              Join Waitlist
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="#waitlist"
          className="navbar__cta"
          onClick={(e) => handleNavClick(e, '#waitlist')}
        >
          Get Started
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-links">
          <li>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>
              How it Works
            </a>
          </li>
          <li>
            <a href="#browse-gigs" onClick={(e) => handleNavClick(e, '#browse-gigs')}>
              Browse Gigs
            </a>
          </li>
          <li>
            <a href="#waitlist" onClick={(e) => handleNavClick(e, '#waitlist')}>
              Join Waitlist
            </a>
          </li>
          <li>
            <a
              href="#waitlist"
              className="navbar__mobile-cta"
              onClick={(e) => handleNavClick(e, '#waitlist')}
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
