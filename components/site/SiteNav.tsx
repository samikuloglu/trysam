'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './SiteNav.module.css';

type Variant = 'home' | 'daycare' | 'k-12' | 'venues' | 'dental' | 'medical-aesthetics' | 'law';

const HOME_LINKS = [
  { href: '#what', label: 'What it does' },
  { href: '#industries', label: 'Industries' },
  { href: '#how', label: 'How it works' },
  { href: '#roi', label: 'ROI' },
];

const VERTICAL_LINKS: { variant: Variant; href: string; label: string }[] = [
  { variant: 'daycare', href: '/daycare', label: 'Childcare' },
  { variant: 'k-12', href: '/k-12', label: 'K–12' },
  { variant: 'venues', href: '/venues', label: 'Venues' },
  { variant: 'dental', href: '/dental', label: 'Dental' },
  { variant: 'medical-aesthetics', href: '/medical-aesthetics', label: 'Aesthetics' },
  { variant: 'law', href: '/law', label: 'Law' },
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
          {variant === 'home'
            ? HOME_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              ))
            : VERTICAL_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={l.variant === variant ? { color: 'var(--coral)' } : undefined}
                >
                  {l.label}
                </Link>
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
