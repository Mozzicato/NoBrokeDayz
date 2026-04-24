import React, { useState } from 'react';
import './Waitlist.css';

function Waitlist() {
  const [form, setForm] = useState({ name: '', email: '', role: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = 'Please enter a valid email address.';
    if (!form.role) errs.role = 'Please select your role.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section className="waitlist" id="waitlist">
      <div className="waitlist__bg-grad" />
      <div className="waitlist__bg-grid" />

      <div className="container">
        <div className="waitlist__inner">
          {/* Left — copy */}
          <div className="waitlist__copy">
            <span className="section-tag" style={{ borderColor: 'rgba(0,217,127,0.4)', color: '#00D97F' }}>
              Join the Waitlist
            </span>

            <h2 className="waitlist__title">
              We're launching<br />
              <span>at UNILAG first.</span>
            </h2>

            <p className="waitlist__subtitle">
              Every student who has ever needed money to eat, buy data, or simply
              survive the week — this is built for you. Join the waitlist now.
              First 500 on the list get founding member perks and a ₦500 bonus.
            </p>

            <ul className="waitlist__perks">
              {[
                { icon: '🎁', text: '₦500 bonus credited on first gig completion' },
                { icon: '🔓', text: 'Early access before public launch' },
                { icon: '⭐', text: 'Permanent "Founding Hustler" badge on your profile' },
                { icon: '📣', text: 'Exclusive updates and launch event invites' },
              ].map((p, i) => (
                <li key={i} className="waitlist__perk">
                  <span className="waitlist__perk-icon">{p.icon}</span>
                  {p.text}
                </li>
              ))}
            </ul>

            <div className="waitlist__counter">
              <div className="waitlist__counter-dots">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="waitlist__counter-dot" style={{ '--i': i }} />
                ))}
              </div>
              <p className="waitlist__counter-text">
                <strong>8,247 students</strong> already waiting
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="waitlist__form-wrap">
            {!submitted ? (
              <form className="waitlist__form" onSubmit={handleSubmit} noValidate>
                <h3 className="waitlist__form-title">Reserve Your Spot</h3>
                <p className="waitlist__form-sub">Free. 30 seconds. No broke days after this.</p>

                <div className="waitlist__field">
                  <label htmlFor="wl-name">Full Name</label>
                  <input id="wl-name" type="text" placeholder="e.g. Adaeze Nwosu"
                    value={form.name} onChange={(e) => handleChange('name', e.target.value)}
                    className={errors.name ? 'input--error' : ''} />
                  {errors.name && <span className="waitlist__error">{errors.name}</span>}
                </div>

                <div className="waitlist__field">
                  <label htmlFor="wl-email">Email Address</label>
                  <input id="wl-email" type="email" placeholder="e.g. adaeze@gmail.com"
                    value={form.email} onChange={(e) => handleChange('email', e.target.value)}
                    className={errors.email ? 'input--error' : ''} />
                  {errors.email && <span className="waitlist__error">{errors.email}</span>}
                </div>

                <div className="waitlist__field">
                  <label htmlFor="wl-role">I am a...</label>
                  <select id="wl-role" value={form.role}
                    onChange={(e) => handleChange('role', e.target.value)}
                    className={errors.role ? 'input--error' : ''}>
                    <option value="">Select your role</option>
                    <option value="student">Student — I want to earn</option>
                    <option value="poster">Student — I want things done</option>
                    <option value="graduate">Fresh Graduate — I want to earn</option>
                    <option value="employer">Business / Employer — posting gigs</option>
                  </select>
                  {errors.role && <span className="waitlist__error">{errors.role}</span>}
                </div>

                <button type="submit" className="waitlist__submit">
                  Join the Waitlist
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <p className="waitlist__privacy">🔒 No spam. Your info stays on campus.</p>
              </form>
            ) : (
              <div className="waitlist__success">
                <div className="waitlist__success-icon">🎉</div>
                <h3>You're on the list!</h3>
                <p>Welcome, <strong>{form.name.split(' ')[0]}</strong>! We'll reach you at <strong>{form.email}</strong> the moment we go live.</p>
                <div className="waitlist__success-bonus">
                  <span>🎁</span>
                  <p>Your ₦500 bonus is reserved — it'll hit your wallet on your first completed gig.</p>
                </div>
                <p className="waitlist__success-count">You're one of <strong>8,248 students</strong> who secured their spot.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Waitlist;
