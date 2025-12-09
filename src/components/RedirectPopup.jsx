import React, { useEffect, useState } from 'react';
import '../assets/style/style.css';

const RedirectPopup = ({
  open,
  title = 'You are leaving this site',
  message = 'You will be redirected to another page shortly.',
  targetUrl = '/',
  delay = 5,
  onClose = () => {},
}) => {
  const [remaining, setRemaining] = useState(delay);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setRemaining(delay);

    const timer = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(timer);
          // navigate
          window.location.href = targetUrl;
          return 0;
        }
        return r - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = original;
    };
  }, [open, delay, targetUrl]);

  if (!open) return null;

  const progressPct = Math.max(0, ((delay - remaining) / delay) * 100);

  return (
    <div className="redirect-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="redirect-card" onClick={(e) => e.stopPropagation()}>
        <div className="redirect-icon">🔗</div>
        <h3 className="redirect-title">{title}</h3>
        <p className="redirect-message">{message}</p>

        <div className="redirect-timer">
          <div className="progress-wrap">
            <div className="redirect-progress" style={{ width: `${progressPct}%` }} />
          </div>
          <div className="timer-text">{remaining}s</div>
        </div>

        <div className="redirect-actions">
          <button
            className="btn primary"
            onClick={() => (window.location.href = targetUrl)}
          >
            Proceed now
          </button>
          <button className="btn" onClick={onClose}>
            Stay
          </button>
        </div>

        <p className="redirect-footer">
          You will be taken to: <a href={targetUrl}>{targetUrl}</a>
        </p>
      </div>
    </div>
  );
};

export default RedirectPopup;
