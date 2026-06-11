'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Letterhead.module.css';

type Variant = 'home' | 'private' | 'charter' | 'how' | 'security';

const LINKS: { variant: Variant; href: string; label: string }[] = [
  { variant: 'private', href: '/private', label: 'Private' },
  { variant: 'charter', href: '/charter', label: 'Charter' },
  { variant: 'how', href: '/how-it-works', label: 'How it works' },
];

export default function Letterhead({ variant = 'home' }: { variant?: Variant }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.wrap}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className={styles.utility}>
        <div className={`frame ${styles.utilityInner}`}>
          <span>Form SAM-01 — Answers, filed with sources</span>
          <span className={styles.utilityRight}>Built in New Jersey</span>
        </div>
      </div>

      <nav className={styles.nav} aria-label="Main">
        <div className={`frame ${styles.inner}`}>
          <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
            Sam<span className={styles.brandDot}>.</span>
          </Link>

          <div className={`${styles.links} ${open ? styles.open : ''}`}>
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={l.variant === variant ? styles.active : undefined}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:sami@trysam.co?subject=Sam%20Demo%20Request"
              className={styles.mobileCta}
              onClick={() => setOpen(false)}
            >
              Write to Sami →
            </a>
          </div>

          <a
            href="mailto:sami@trysam.co?subject=Sam%20Demo%20Request"
            className={`pen-link ${styles.cta}`}
          >
            Write to Sami →
          </a>

          <button
            className={styles.menuBtn}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>
    </header>
  );
}
