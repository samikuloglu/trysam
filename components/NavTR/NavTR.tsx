'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './NavTR.module.css';

export default function NavTR() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/tr/giris" className={styles.logo}>
        <span className={styles.logoDot} />
        Sam
      </Link>
      <Link href="/portal" className={styles.link}>
        Müşteri Portalı
      </Link>
    </nav>
  );
}
