import type { CSSProperties } from 'react';
import styles from './SchoolSite.module.css';

export interface SchoolSiteProps {
  name: string;
  initial: string;
  tagline: string;
  announcement: string;
  navItems: string[];
  heroTitle: string;
  heroText: string;
  cards: { title: string; sub: string }[];
  /** The school's own brand colors — so the mockup reads as a real
   *  third-party website, not Sam's brand. */
  accent: string;
  accentSoft: string;
  gold?: string;
}

/** The demo school's website. It has its own design system (Lora
 *  headings, its own palette) on a white page so it visibly is not
 *  part of Sam's paper world. */
export default function SchoolSite(p: SchoolSiteProps) {
  const vars = {
    '--ss-accent': p.accent,
    '--ss-soft': p.accentSoft,
    '--ss-gold': p.gold ?? '#c9a227',
  } as CSSProperties;

  return (
    <div className={styles.site} style={vars}>
      <div className={styles.announce}>{p.announcement}</div>

      <div className={styles.masthead}>
        <div className={styles.crest} aria-hidden>
          <svg viewBox="0 0 28 32" width="22" height="26">
            <path
              d="M14 1 26 5v10c0 8-5.5 13.5-12 16C7.5 28.5 2 23 2 15V5L14 1z"
              fill="var(--ss-accent)"
            />
            <text
              x="14"
              y="19"
              textAnchor="middle"
              fontSize="13"
              fontFamily="Georgia, serif"
              fontWeight="700"
              fill="#fff"
            >
              {p.initial}
            </text>
          </svg>
        </div>
        <div className={styles.mastText}>
          <div className={styles.schoolName}>{p.name}</div>
          <div className={styles.schoolTag}>{p.tagline}</div>
        </div>
        <nav className={styles.miniNav} aria-hidden>
          {p.navItems.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </nav>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.heroTitle}>{p.heroTitle}</div>
          <p className={styles.heroBody}>{p.heroText}</p>
          <span className={styles.heroBtn} aria-hidden>
            Inquire
          </span>
        </div>
        <div className={styles.heroArt} aria-hidden>
          {/* Two-color line-drawn campus building */}
          <svg viewBox="0 0 220 110" width="100%">
            <g
              fill="none"
              stroke="var(--ss-accent)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* main hall */}
              <rect x="60" y="46" width="100" height="52" />
              <path d="M52 46 110 18l58 28" />
              {/* pediment + columns */}
              <path d="M78 60h64M82 60v38M98 60v38M122 60v38M138 60v38" />
              {/* door */}
              <rect x="104" y="74" width="12" height="24" />
              {/* steps */}
              <path d="M70 98h80M74 103h72" />
              {/* flag */}
              <path d="M110 18V4" />
              <path d="M110 5h16l-4 4 4 4h-16" fill="var(--ss-gold)" stroke="var(--ss-gold)" />
              {/* wings */}
              <rect x="22" y="64" width="38" height="34" />
              <rect x="160" y="64" width="38" height="34" />
              <path d="M28 72h8M44 72h8M28 84h8M44 84h8M166 72h8M182 72h8M166 84h8M182 84h8" />
            </g>
            {/* trees */}
            <g fill="none" stroke="var(--ss-gold)" strokeWidth="1.6" strokeLinecap="round">
              <circle cx="12" cy="78" r="9" />
              <path d="M12 87v12" />
              <circle cx="208" cy="78" r="9" />
              <path d="M208 87v12" />
            </g>
          </svg>
        </div>
      </div>

      <div className={styles.cards} aria-hidden>
        {p.cards.map((c) => (
          <div key={c.title} className={styles.card}>
            <div className={styles.cardTitle}>{c.title}</div>
            <div className={styles.cardSub}>{c.sub}</div>
          </div>
        ))}
      </div>

      <div className={styles.footStrip} aria-hidden>
        <span>{p.name}</span>
        <span>Admissions · Contact</span>
      </div>
    </div>
  );
}
