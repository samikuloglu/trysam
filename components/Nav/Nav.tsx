'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ChevronDown } from '@/components/Icons';
import { DEMO_MAILTO } from '@/lib/constants';
import styles from './Nav.module.css';

const industryLinks = [
  { href: '/daycare', label: 'Childcare' },
  { href: '/k-12', label: 'Schools' },
  { href: '/venues', label: 'Venues' },
  { href: '/dental', label: 'Dental & Orthodontics' },
  { href: '/medical-aesthetics', label: 'Medical Aesthetics' },
  { href: '/law', label: 'Law Firms' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const pathname = usePathname();

  const isIndustryActive = industryLinks.some((l) => pathname === l.href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMenuOpen(false);
    setMobileIndustriesOpen(false);
    setDesktopDropdownOpen(false);
  }, [pathname]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoDot} />
        SamAI
      </Link>
      <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
        <Link
          href="/widget"
          className={`${styles.link} ${pathname === '/widget' ? styles.linkActive : ''}`}
        >
          Widget
        </Link>

        {/* Desktop dropdown — hover only */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => setDesktopDropdownOpen(true)}
          onMouseLeave={() => setDesktopDropdownOpen(false)}
        >
          <span
            className={`${styles.link} ${styles.dropdownTrigger} ${isIndustryActive ? styles.linkActive : ''}`}
          >
            Industries
            <ChevronDown size={14} className={`${styles.chevron} ${desktopDropdownOpen ? styles.chevronOpen : ''}`} />
          </span>
          <div className={`${styles.dropdownMenu} ${desktopDropdownOpen ? styles.dropdownMenuOpen : ''}`}>
            {industryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.dropdownItem} ${pathname === link.href ? styles.linkActive : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile industries — click to expand */}
        <div className={styles.mobileIndustries}>
          <button
            className={`${styles.link} ${styles.mobileIndustriesTrigger} ${isIndustryActive ? styles.linkActive : ''}`}
            onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
          >
            Industries
            <ChevronDown size={14} className={`${styles.chevron} ${mobileIndustriesOpen ? styles.chevronOpen : ''}`} />
          </button>
          {mobileIndustriesOpen && (
            <div className={styles.mobileIndustriesMenu}>
              {industryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.link} ${pathname === link.href ? styles.linkActive : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/portal"
          className={`${styles.link} ${pathname === '/portal' ? styles.linkActive : ''}`}
        >
          Client Portal
        </Link>
        <a href={DEMO_MAILTO} className={`${styles.link} ${styles.cta}`}>
          Book a Demo
        </a>
      </div>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}
