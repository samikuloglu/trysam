'use client';

import { useState, type FormEvent } from 'react';
import { Mail, Lock } from '@/components/Icons';
import { PORTAL_RESET_MAILTO, DEMO_MAILTO } from '@/lib/constants';
import styles from './page.module.css';

export default function PortalPage() {
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(true);
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <span className={styles.logoDot} />
          <span className={styles.logoText}>SamAI</span>
        </div>
        <h1 className={styles.heading}>Client Portal</h1>
        <p className={styles.tagline}>Manage your AI assistant</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.fieldLabel} htmlFor="email">Email</label>
            <div className={styles.inputWrapper}>
              <Mail size={18} className={styles.inputIcon} />
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div>
            <label className={styles.fieldLabel} htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <Lock size={18} className={styles.inputIcon} />
              <input
                className={styles.input}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>
          </div>
          {error && (
            <div className={styles.error}>
              Invalid email or password.
            </div>
          )}
          <button type="submit" className={styles.submitBtn}>
            Log in
          </button>
          <div className={styles.forgot}>
            <a href={PORTAL_RESET_MAILTO} className={styles.forgotLink}>
              Forgot password?
            </a>
          </div>
          <div className={styles.signup}>
            Not a client yet?{' '}
            <a href={DEMO_MAILTO} className={styles.signupLink}>
              Book a demo
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
