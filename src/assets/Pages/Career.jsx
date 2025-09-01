import React, { useState } from 'react';
import '../style/style.css';

export default function Career() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => { setEmail(''); setSubmitted(false); }, 1000);
  };

  return (
    <div className="career-container">
      <h1 className="career-title">Opening Soon</h1>
      <p className="career-subtitle">
        Our careers page is being prepared. Leave your email to get notified.
      </p>

      <form onSubmit={handleSubmit} className="career-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="career-input"
        />
        <button type="submit" className="career-button">
          {submitted ? 'Thanks!' : 'Notify Me'}
        </button>
      </form>
    </div>
  );
}
