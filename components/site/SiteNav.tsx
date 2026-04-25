'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './SiteNav.module.css';

type Variant = 'home' | 'private' | 'charter';

const SCHOOL_LINKS: { variant: Variant; href: string; label: string }[] = [
  { variant: 'private', href: '/private', label: 'Private' },
  { variant: 'charter', href: '/charter', label: 'Charter' },
];

const ANCHOR_LINKS = [
  { href: '/#how', label: 'How it works' },
  { href: '/#roi', label: 'ROI' },
];

export default function SiteNav({ variant = 'home' }: { variant?: Variant }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>S</span>
          Sam
        </Link>

        <div className={`${styles.links} ${open ? styles.open : ''}`}>
          {SCHOOL_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={l.variant === variant ? { color: 'var(--coral)' } : undefined}
            >
              {l.label}
            </Link>
          ))}
          {ANCHOR_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="mailto:sami@trysam.co?subject=Sam%20Demo%20Request"
            className={styles.ctaBtn}
          >
            Get Started
          </a>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          Menu
        </button>
      </div>
    </nav>
  );
}
