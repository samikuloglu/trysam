import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/site/SiteNav';
import SiteFooter from '@/components/site/SiteFooter';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Security & Privacy — Sam',
  description:
    'How Sam handles your school\u2019s data. FERPA-aware design, PII redaction, configurable retention, audit logs.',
};

export default function SecurityPage() {
  return (
    <>
      <SiteNav />

      <section className={styles.hero}>
        <div className="frame">
          <div className={styles.eyebrow}>Security &amp; privacy</div>
          <h1 className={styles.h}>
            Designed for FERPA-aware <em>data handling.</em>
          </h1>
          <p className={styles.lede}>
            Sam is in active development. The page below is a working summary
            of how we handle data today &mdash; not a marketing sheet, not a
            certification claim. If you&apos;re reviewing Sam for IT, email{' '}
            <a href="mailto:sami@trysam.co?subject=Sam%20Security%20Review">
              sami@trysam.co
            </a>{' '}
            and we&apos;ll send the current write-up with full details.
          </p>
        </div>
      </section>

      <section className={`section ${styles.body}`}>
        <div className="frame">
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>PII redaction</h3>
              <p>
                Inbound messages are scanned for personally identifying
                information before they hit logs. Names, phone numbers, and
                emails are redacted in transcripts available to admins by
                default; full transcripts are accessible to authorized roles
                only.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Configurable retention</h3>
              <p>
                Default retention is 90 days. Configurable up or down per
                school&apos;s policy. Deletion is real deletion &mdash; not
                tombstoned rows.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Admin audit log</h3>
              <p>
                Every admin action &mdash; source uploads, source retirement,
                CSV exports, transcript views &mdash; is recorded with user,
                timestamp, and target.
              </p>
            </div>
            <div className={styles.card}>
              <h3>No training on your data</h3>
              <p>
                Your school&apos;s content is used to retrieve answers for your
                school. It is never used to train shared models or made
                available to other tenants.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Per-tenant data isolation</h3>
              <p>
                Each school&apos;s sources, embeddings, and transcripts live in
                a logically isolated index. Cross-tenant queries are not
                possible by design.
              </p>
            </div>
            <div className={styles.card}>
              <h3>US-based hosting</h3>
              <p>
                Application and data hosted in US regions. Subprocessors are
                listed on request as part of IT review.
              </p>
            </div>
          </div>

          <div className={styles.note}>
            <strong>What this page is not.</strong> Sam does not currently
            advertise SOC&nbsp;2 or other formal certifications. We&apos;re
            happy to walk through our current controls in detail and to scope
            additional requirements with your school. Final compliance review
            with your school is part of every onboarding.
          </div>

          <div className={styles.back}>
            <Link href="/how-it-works">← Back to How it Works</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
