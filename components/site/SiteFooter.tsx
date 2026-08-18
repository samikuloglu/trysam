import Link from 'next/link';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.foot}>
      <div className={styles.inner}>
        <div>
          <Link href="/" className={styles.brand}>
            <img src="/sam-icon.png" alt="" width={32} height={32} className={styles.brandImg} />
            SamAI
          </Link>
          <p className={styles.tag}>
            An AI assistant trained on your school. Built and maintained in
            New Jersey.
          </p>
        </div>
        <div>
          <h4>Built for</h4>
          <ul>
            <li><Link href="/private">Private schools</Link></li>
            <li><Link href="/charter">Charter schools</Link></li>
          </ul>
        </div>
        <div>
          <h4>Product</h4>
          <ul>
            <li><Link href="/how-it-works">How it works</Link></li>
            <li><Link href="/security">Security &amp; privacy</Link></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href="mailto:sami@trysam.co">sami@trysam.co</a></li>
            <li><a href="mailto:sami@trysam.co?subject=SamAI%20Demo%20Request">Book a demo</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.compliance}>
        SamAI is designed for FERPA-aware data handling. PII redaction,
        configurable retention, audit logs. Final compliance review with your
        school before any production deployment.
      </div>
      <div className={styles.bottom}>
        <span>© 2026 SamAI · trysam.co</span>
        <span>Made in New Jersey</span>
      </div>
    </footer>
  );
}
