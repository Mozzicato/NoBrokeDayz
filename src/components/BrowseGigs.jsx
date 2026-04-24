import React, { useState } from 'react';
import './BrowseGigs.css';

const ALL_GIGS = [
  {
    id: 1,
    title: 'Check if light is on at Amina Hostel',
    pay: '₦300',
    payNum: 300,
    duration: '5 mins',
    type: 'Errand',
    location: 'Amina Hostel',
    urgent: true,
    posted: '3 mins ago',
    spots: 1,
    desc: 'I\'m outside campus. Just walk past Amina Hostel, check if NEPA is on, and message me. That\'s all.',
  },
  {
    id: 2,
    title: 'Write CHE221 Lab Report — Titration',
    pay: '₦3,500',
    payNum: 3500,
    duration: '3 hrs',
    type: 'Academic',
    location: 'Remote',
    urgent: true,
    posted: '18 mins ago',
    spots: 1,
    desc: 'Need a clean, properly formatted CHE221 lab report on acid-base titration. Will provide all data and results.',
  },
  {
    id: 3,
    title: 'Come to my event — 20 seats to fill',
    pay: '₦500 / person',
    payNum: 500,
    duration: '2 hrs',
    type: 'Social',
    location: 'Faculty of Arts Theatre',
    urgent: true,
    posted: '45 mins ago',
    spots: 20,
    desc: 'Departmental symposium. Need warm bodies in seats. Just come, sit, and look engaged. Light refreshment provided too.',
  },
  {
    id: 4,
    title: 'Queue at Registrar\'s Office for clearance form',
    pay: '₦1,500',
    payNum: 1500,
    duration: '2–4 hrs',
    type: 'Errand',
    location: 'Admin Block',
    urgent: false,
    posted: '1 hr ago',
    spots: 1,
    desc: 'I have a 9am class. Need someone to join the queue from 7:30am and hold my spot. Will come relieve you by 10am.',
  },
  {
    id: 5,
    title: 'Take thorough notes in MTH302 — Fri 10am',
    pay: '₦1,200',
    payNum: 1200,
    duration: '1 hr',
    type: 'Academic',
    location: 'Auditorium A',
    urgent: false,
    posted: '2 hrs ago',
    spots: 1,
    desc: 'I\'ll be travelling Friday. Lecturer rarely posts slides. Need someone attentive to take full notes (handwritten or typed is fine).',
  },
  {
    id: 6,
    title: 'Help me move things from Fabian to Angola',
    pay: '₦2,000',
    payNum: 2000,
    duration: '1.5 hrs',
    type: 'Manual',
    location: 'Fabian Felicitas → Angola',
    urgent: true,
    posted: '20 mins ago',
    spots: 2,
    desc: 'Two bags + a small box. Need two strong people. Will carry one side, you carry the other. Saturday morning 8am.',
  },
  {
    id: 7,
    title: 'Wash 3 days of plates — Room 14, Block B',
    pay: '₦800',
    payNum: 800,
    duration: '45 mins',
    type: 'Manual',
    location: 'Angola Hostel',
    urgent: false,
    posted: '3 hrs ago',
    spots: 1,
    desc: 'Plate, pots, and 2 cups. Soap and sponge provided. Just need someone to wash and leave them drying. No judgment.',
  },
  {
    id: 8,
    title: 'Buy 2 plates of jollof from SUB — deliver to Law Library',
    pay: '₦600',
    payNum: 600,
    duration: '20 mins',
    type: 'Errand',
    location: 'SUB → Law Library',
    urgent: true,
    posted: '8 mins ago',
    spots: 1,
    desc: 'Stuck in the library. 2 plates jollof + 2 bottles of water. Money will be sent first. Take ₦100 above cost as your cut.',
  },
  {
    id: 9,
    title: 'Proofread my FYP Chapter 3 — 12 pages',
    pay: '₦4,000',
    payNum: 4000,
    duration: '2 hrs',
    type: 'Academic',
    location: 'Remote',
    urgent: false,
    posted: '5 hrs ago',
    spots: 1,
    desc: 'Social Sciences chapter on research methodology. Need grammar, coherence, and citation checks (APA 7th). Send edit in Google Docs.',
  },
  {
    id: 10,
    title: 'Attend my birthday gathering — need 15 people',
    pay: '₦1,000 / person',
    payNum: 1000,
    duration: '3 hrs',
    type: 'Social',
    location: 'Moremi Hostel Common Room',
    urgent: false,
    posted: '6 hrs ago',
    spots: 15,
    desc: 'Saturday 6pm. Food and drinks will be available. Just come, vibe, take photos, be cheerful. Please dress presentably.',
  },
];

const FILTERS = ['All', 'Urgent', 'Academic', 'Errand', 'Manual', 'Social'];

const TYPE_COLORS = {
  Academic: { bg: 'rgba(245, 166, 35, 0.1)', color: '#F5A623' },
  Errand:   { bg: 'rgba(0, 217, 127, 0.1)',  color: '#00D97F' },
  Manual:   { bg: 'rgba(99, 179, 237, 0.1)', color: '#63B3ED' },
  Social:   { bg: 'rgba(236, 72, 153, 0.1)', color: '#EC4899' },
  Creative: { bg: 'rgba(167, 139, 250, 0.1)', color: '#A78BFA' },
  Technical:{ bg: 'rgba(52, 211, 153, 0.1)', color: '#34D399' },
};

function GigCard({ gig, onApply }) {
  const typeStyle = TYPE_COLORS[gig.type] || { bg: 'rgba(255,255,255,0.06)', color: '#fff' };

  return (
    <div className={`gig-card${gig.urgent ? ' gig-card--urgent' : ''}`}>
      {gig.urgent && (
        <div className="gig-card__urgent-banner">
          <span className="gig-card__urgent-dot" />
          URGENT
        </div>
      )}

      <div className="gig-card__header">
        <div className="gig-card__title-row">
          <h3 className="gig-card__title">{gig.title}</h3>
          <span
            className="gig-card__type-badge"
            style={{ background: typeStyle.bg, color: typeStyle.color }}
          >
            {gig.type}
          </span>
        </div>
        <p className="gig-card__desc">{gig.desc}</p>
      </div>

      <div className="gig-card__meta">
        <div className="gig-card__meta-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          {gig.duration}
        </div>
        <div className="gig-card__meta-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          {gig.location}
        </div>
        <div className="gig-card__meta-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
          </svg>
          {gig.posted}
        </div>
      </div>

      <div className="gig-card__footer">
        <div className="gig-card__pay-info">
          <span className="gig-card__pay">{gig.pay}</span>
          <span className="gig-card__spots">{gig.spots} spot{gig.spots !== 1 ? 's' : ''} left</span>
        </div>
        <button className="gig-card__apply-btn" onClick={() => onApply(gig)}>
          Apply Now
        </button>
      </div>
    </div>
  );
}

function ApplyModal({ gig, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', why: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!gig) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="modal__gig-header">
              <h2 className="modal__title">Apply for Gig</h2>
              <p className="modal__gig-name">{gig.title}</p>
              <div className="modal__gig-tags">
                <span>{gig.pay}</span>
                <span>·</span>
                <span>{gig.duration}</span>
                <span>·</span>
                <span>{gig.location}</span>
              </div>
            </div>

            <form className="modal__form" onSubmit={handleSubmit}>
              <div className="modal__field">
                <label htmlFor="m-name">Full Name</label>
                <input id="m-name" type="text" placeholder="e.g. Kemi Adeyemi"
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="modal__field">
                <label htmlFor="m-phone">WhatsApp Number</label>
                <input id="m-phone" type="tel" placeholder="e.g. 08012345678"
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
              </div>
              <div className="modal__field">
                <label htmlFor="m-why">Why are you a good fit? (optional)</label>
                <textarea id="m-why" placeholder="Brief context — helps your application stand out..."
                  rows={3} value={form.why} onChange={(e) => setForm({ ...form, why: e.target.value })} />
              </div>
              <button type="submit" className="modal__submit">
                Submit Application
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </>
        ) : (
          <div className="modal__success">
            <div className="modal__success-icon">🎉</div>
            <h3>Application Sent!</h3>
            <p>Your application for <strong>{gig.title}</strong> has been submitted. The poster will reach you on WhatsApp shortly.</p>
            <p className="modal__success-earn">Potential earn: <strong>{gig.pay}</strong> — paid same day!</p>
            <button className="modal__submit" onClick={onClose}>Browse More Gigs</button>
          </div>
        )}
      </div>
    </div>
  );
}

function BrowseGigs() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedGig, setSelectedGig] = useState(null);

  const filteredGigs = ALL_GIGS.filter((g) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Urgent') return g.urgent;
    return g.type === activeFilter;
  });

  return (
    <section className="browse-gigs" id="browse-gigs">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Browse Gigs</span>
          <h2 className="section-title">
            Real gigs. <span>Real campus.</span> Right now.
          </h2>
          <p className="section-subtitle">
            From ₦300 errands to ₦15,000 projects — every task is real, every payout is same-day.
            No task is too small. No hustle is beneath you.
          </p>
        </div>

        {/* Stats bar */}
        <div className="browse-gigs__stats-bar">
          <div className="browse-gigs__stat">
            <strong>{ALL_GIGS.length}</strong> live gigs
          </div>
          <div className="browse-gigs__stat-divider" />
          <div className="browse-gigs__stat">
            <strong>{ALL_GIGS.filter(g => g.urgent).length}</strong> urgent
          </div>
          <div className="browse-gigs__stat-divider" />
          <div className="browse-gigs__stat">
            <strong>₦300 – ₦4,000</strong> pay range
          </div>
          <div className="browse-gigs__stat-divider" />
          <div className="browse-gigs__stat">
            <span className="browse-gigs__live-dot" />
            Updated live
          </div>
        </div>

        {/* Filter tabs */}
        <div className="browse-gigs__filters" role="tablist">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={activeFilter === f}
              className={`browse-gigs__filter-btn${activeFilter === f ? ' browse-gigs__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f === 'Urgent' && <span className="browse-gigs__filter-dot" />}
              {f}
              <span className="browse-gigs__filter-count">
                {f === 'All' ? ALL_GIGS.length
                  : f === 'Urgent' ? ALL_GIGS.filter(g => g.urgent).length
                  : ALL_GIGS.filter(g => g.type === f).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="browse-gigs__grid">
          {filteredGigs.length > 0 ? (
            filteredGigs.map((gig) => (
              <GigCard key={gig.id} gig={gig} onApply={setSelectedGig} />
            ))
          ) : (
            <div className="browse-gigs__empty">
              <span>😕</span>
              <p>No gigs match that filter right now. Check back soon!</p>
            </div>
          )}
        </div>

        <div className="browse-gigs__load-more">
          <p>Showing {filteredGigs.length} of many more gigs. Join the waitlist to see all.</p>
          <a href="#waitlist" className="browse-gigs__waitlist-link"
            onClick={(e) => { e.preventDefault(); const el = document.querySelector('#waitlist'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' }); }}>
            Get Full Access →
          </a>
        </div>
      </div>

      {selectedGig && <ApplyModal gig={selectedGig} onClose={() => setSelectedGig(null)} />}
    </section>
  );
}

export default BrowseGigs;
