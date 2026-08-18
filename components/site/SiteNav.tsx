'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './SiteNav.module.css';

type Variant = 'home' | 'private' | 'charter' | 'how';

const LINKS: { variant: Variant; href: string; label: string }[] = [
  { variant: 'private', href: '/private', label: 'Private' },
  { variant: 'charter', href: '/charter', label: 'Charter' },
  { variant: 'how', href: '/how-it-works', label: 'How it works' },
];

export default function SiteNav({ variant = 'home' }: { variant?: Variant }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <img src="/sam-icon.png" alt="" width={32} height={32} className={styles.brandImg} />
          SamAI
        </Link>

        <div className={`${styles.links} ${open ? styles.open : ''}`}>
          {LINKS.map((l) => (
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
            href="mailto:sami@trysam.co?subject=SamAI%20Demo%20Request"
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
