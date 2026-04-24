import React from 'react';
import './Features.css';

const features = [
  {
    icon: '🔓',
    title: 'Any Gig. Zero Gatekeeping.',
    description:
      'Wash plates. Write a lab report. Fill seats at an event. Help someone move a mattress. If it\'s ethical and legal, it lives here. No task is too small, no hustle beneath you.',
    color: '#00D97F',
    bg: 'rgba(0, 217, 127, 0.07)',
    stat: '200+',
    statLabel: 'unique gig types',
  },
  {
    icon: '⚡',
    title: 'Same-Day Payout',
    description:
      'The moment your work is confirmed, the money moves. No Friday paydays, no "we\'ll process it next week." You work today. You eat today.',
    color: '#F5A623',
    bg: 'rgba(245, 166, 35, 0.07)',
    stat: '< 60 sec',
    statLabel: 'avg payout time',
  },
  {
    icon: '🎓',
    title: 'Campus-Verified Trust',
    description:
      'Every user is verified by student ID or NYSC cert. You know the person offering or taking a gig is a real, verified student on your campus — not a stranger from the internet.',
    color: '#63B3ED',
    bg: 'rgba(99, 179, 237, 0.07)',
    stat: '100%',
    statLabel: 'verified users',
  },
  {
    icon: '📍',
    title: 'Proximity Engine',
    description:
      'Gigs surface by hostel, faculty, and campus zone. If you\'re in Angola, you see Angola gigs first. A task in the Engineering faculty reaches Engineering students first. Speed comes from closeness.',
    color: '#A78BFA',
    bg: 'rgba(167, 139, 250, 0.07)',
    stat: '< 8 min',
    statLabel: 'time to first application',
  },
];

const extras = [
  { icon: '👥', label: 'Group Gigs' },
  { icon: '🕵️', label: 'Anonymous Posting' },
  { icon: '🏦', label: 'Escrow Wallet' },
  { icon: '⭐', label: 'Rep System' },
  { icon: '📶', label: 'Low-data Mode' },
  { icon: '🛡️', label: 'Dispute Protection' },
];

function FeatureCard({ feature }) {
  return (
    <div className="feature-card" style={{ '--color': feature.color, '--bg': feature.bg }}>
      <div className="feature-card__icon-wrap">
        <span className="feature-card__icon">{feature.icon}</span>
      </div>
      <div className="feature-card__body">
        <h3 className="feature-card__title">{feature.title}</h3>
        <p className="feature-card__desc">{feature.description}</p>
      </div>
      <div className="feature-card__stat">
        <span className="feature-card__stat-value">{feature.stat}</span>
        <span className="feature-card__stat-label">{feature.statLabel}</span>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="features" id="features">
      <div className="features__bg-orb features__bg-orb--1" />
      <div className="features__bg-orb features__bg-orb--2" />

      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why ZBD is Different</span>
          <h2 className="section-title">
            Built for the <span>campus reality.</span>
          </h2>
          <p className="section-subtitle">
            Not the cleaned-up, investor-deck version of campus life —
            the actual one. Where you need ₦500 for data today, and the person
            two doors down needs their plates washed.
          </p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} />
          ))}
        </div>

        <div className="features__extras">
          <p className="features__extras-label">Plus even more:</p>
          <div className="features__chips">
            {extras.map((e, i) => (
              <div key={i} className="features__chip">
                <span>{e.icon}</span>
                {e.label}
              </div>
            ))}
          </div>
        </div>

        <div className="features__testimonials">
          {[
            {
              quote: '"I made ₦12,000 in one Saturday. From three different gigs. No one believed me until I sent my wallet screenshot."',
              name: 'Tolu O.',
              role: 'OAU, 400 Level',
              avatar: 'TO',
            },
            {
              quote: '"The gig was washing plates. I was embarrassed at first. Then ₦800 hit my wallet in 45 minutes. Now I check ZBD every morning."',
              name: 'Emeka N.',
              role: '200 Level, UNILAG',
              avatar: 'EN',
            },
            {
              quote: '"I posted my event attendance gig at 3pm. By 5pm I had 18 confirmed people. My hall of 20 looked full. Worth every kobo."',
              name: 'Fatimah A.',
              role: 'Law Faculty, UNILAG',
              avatar: 'FA',
            },
          ].map((t, i) => (
            <div key={i} className="features__testimonial">
              <p className="features__testimonial-quote">{t.quote}</p>
              <div className="features__testimonial-author">
                <div className="features__testimonial-avatar">{t.avatar}</div>
                <div>
                  <p className="features__testimonial-name">{t.name}</p>
                  <p className="features__testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
