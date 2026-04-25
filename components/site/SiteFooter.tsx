import Link from 'next/link';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.foot}>
      <div className={styles.inner}>
        <div>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}>S</span>
            Sam
          </Link>
          <p className={styles.tag}>
            An intelligent AI assistant trained on your business. Built and maintained
            in New Jersey.
          </p>
        </div>
        <div>
          <h4>Industries</h4>
          <ul>
            <li><Link href="/daycare">Childcare</Link></li>
            <li><Link href="/k-12">K–12 Schools</Link></li>
            <li><Link href="/venues">Wedding venues</Link></li>
            <li><Link href="/dental">Dental &amp; ortho</Link></li>
            <li><Link href="/medical-aesthetics">Medical aesthetics</Link></li>
            <li><Link href="/law">Law firms</Link></li>
          </ul>
        </div>
        <div>
          <h4>Product</h4>
          <ul>
            <li><Link href="/#what">What it does</Link></li>
            <li><Link href="/#how">How it works</Link></li>
            <li><Link href="/#roi">ROI calculator</Link></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href="mailto:sami@trysam.co">sami@trysam.co</a></li>
            <li><a href="mailto:sami@trysam.co?subject=Sam%20Demo%20Request">Book a demo</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2026 Sam · trysam.co</span>
        <span>Made in New Jersey</span>
      </div>
    </footer>
  );
}
