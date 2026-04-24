import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    icon: '🎓',
    title: 'Verify Your Student ID',
    description:
      'Sign up with your student ID or NYSC cert. We verify you in minutes. This is the thing that makes everything else work — every person on ZBD is a real, identified campus person.',
    detail: 'UNILAG verified in minutes',
    color: '#00D97F',
  },
  {
    number: '02',
    icon: '📍',
    title: 'Post or Pick a Gig',
    description:
      'Post anything — from lab report help to plate washing to event attendance. Or browse what\'s nearby and apply in under 60 seconds. No CV. No cover letter. Just show up.',
    detail: 'Any gig, any price',
    color: '#F5A623',
  },
  {
    number: '03',
    icon: '💸',
    title: 'Work. Confirm. Get Paid.',
    description:
      'Complete the task. Poster confirms. Money moves to your ZBD wallet instantly. Withdraw to your bank account same day. No broke days after this.',
    detail: 'Same-day bank payout',
    color: '#A78BFA',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works__bg-shape" />

      <div className="container">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">
            From zero to <span>first payout</span> — same day.
          </h2>
          <p className="section-subtitle">
            Three steps. No experience required. No formal skills needed.
            Just a verified student ID and willingness to work.
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="how-it-works__step">
                <div className="how-it-works__step-num" style={{ '--color': step.color }}>
                  {step.number}
                </div>

                <div className="how-it-works__icon-wrap" style={{ '--color': step.color }}>
                  <span className="how-it-works__icon">{step.icon}</span>
                  <div className="how-it-works__icon-ring" />
                </div>

                <div className="how-it-works__step-text">
                  <h3 className="how-it-works__step-title">{step.title}</h3>
                  <p className="how-it-works__step-desc">{step.description}</p>
                  <div className="how-it-works__step-tag" style={{ '--color': step.color }}>
                    <span className="how-it-works__step-dot" />
                    {step.detail}
                  </div>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="how-it-works__connector">
                  <div className="how-it-works__connector-line" />
                  <svg className="how-it-works__connector-arrow" width="18" height="18"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="how-it-works__banner">
          <div className="how-it-works__banner-left">
            <p className="how-it-works__banner-title">Ready to earn your first ₦800 today?</p>
            <p className="how-it-works__banner-sub">
              There's a plate-washing gig, an errand, or an event seat with your name on it.
            </p>
          </div>
          <a
            href="#waitlist"
            className="how-it-works__banner-btn"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#waitlist');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' });
            }}
          >
            Join the Waitlist
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
