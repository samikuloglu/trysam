import Link from 'next/link';
import styles from './ArchiveFooter.module.css';

const NAV = [
  { label: 'Private schools', href: '/private' },
  { label: 'Charter schools', href: '/charter' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Security & privacy', href: '/security' },
];

export default function ArchiveFooter() {
  return (
    <footer className={`band-night ${styles.foot}`}>
      <div className={`frame ${styles.inner}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brand}>
            Sam<span className={styles.brandDot}>.</span>
          </Link>
          <p className={styles.tag}>
            An AI assistant trained on your school. Built by one person who
            answers his own email.
          </p>
          <a href="mailto:sami@trysam.co" className={styles.mail}>
            sami@trysam.co
          </a>
        </div>

        <div className={styles.navCol}>
          <div className={styles.colHead}>Index</div>
          <ul>
            {NAV.map((l) => (
              <li key={l.href} className="leader-row">
                <Link href={l.href}>{l.label}</Link>
                <span className="leader" />
                <span className={styles.section}>§</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.fileCol}>
          <div className={styles.colHead}>Filing information</div>
          <ul className={styles.fileList}>
            <li>Built in New Jersey</li>
            <li>No VC. No sales team.</li>
            <li>Form SAM-01 · Rev. 06/2026</li>
            <li>Set in Besley, Public Sans &amp; IBM Plex Mono</li>
            <li>No cookies that follow you</li>
          </ul>
        </div>
      </div>

      <div className={`frame ${styles.compliance}`}>
        Sam is designed for FERPA-aware data handling — PII redaction,
        configurable retention, audit logs. Final compliance review with your
        school before any production deployment.
      </div>

      <div className={`frame ${styles.bottom}`}>
        <span>© 2026 Sam · trysam.co</span>
        <span className={styles.endStamp} aria-hidden>
          End of file.
        </span>
      </div>
    </footer>
  );
}
