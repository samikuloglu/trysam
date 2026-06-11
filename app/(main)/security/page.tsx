import type { Metadata } from 'next';
import Link from 'next/link';
import Letterhead from '@/components/office/Letterhead';
import ArchiveFooter from '@/components/office/ArchiveFooter';
import Reveal from '@/components/office/Reveal';
import PrintLink from '@/components/office/PrintLink';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Security & Privacy',
  description:
    "How Sam handles your school's data: FERPA-aware design, PII redaction, configurable retention, audit logs.",
};

const MEMO_ROWS = [
  { label: 'TO:', value: 'School IT & leadership' },
  { label: 'FROM:', value: 'Sami — founder, Sam' },
  { label: 'RE:', value: "How Sam handles your school's data" },
  { label: 'REVIEWED:', value: 'June 2026' },
];

const SECTIONS = [
  {
    num: '1.0',
    title: 'PII redaction',
    body: 'Inbound messages are scanned for personally identifying information before they hit logs. Names, phone numbers and emails are redacted in the default transcripts; full transcripts are restricted to authorized roles.',
  },
  {
    num: '2.0',
    title: 'Retention',
    body: 'Default retention is 90 days, configurable up or down per school policy. Deletion is real deletion — not tombstoned rows.',
  },
  {
    num: '3.0',
    title: 'Admin audit log',
    body: 'Every admin action — source uploads, source retirement, CSV exports, transcript views — is recorded with user, timestamp and target.',
  },
  {
    num: '4.0',
    title: 'No training on your data',
    body: "Your school's content retrieves answers for your school. It is never used to train shared models, and it is never available to other tenants.",
  },
  {
    num: '5.0',
    title: 'Tenant isolation',
    body: "Each school's sources, embeddings and transcripts live in a logically isolated index. Cross-tenant queries are not possible by design.",
  },
  {
    num: '6.0',
    title: 'Hosting',
    body: 'Application and data are hosted in US-based regions. Subprocessors are listed on request as part of IT review.',
  },
];

export default function SecurityPage() {
  return (
    <div className={styles.page}>
      <Letterhead variant="security" />

      <main id="main" className="file">
        <section className={`band-night ${styles.band}`}>
          <div className={`frame ${styles.bandFrame}`}>
            <Reveal>
              <article className={styles.memo}>
                <h1 className="visually-hidden">Security &amp; Privacy</h1>

                <div className={styles.memoTop} aria-hidden>
                  <span>Memorandum</span>
                  <span>1 of 1</span>
                </div>

                <div className="rule-double" />
                <div className={styles.memoHead}>
                  {MEMO_ROWS.map((row) => (
                    <div key={row.label} className={styles.memoRow}>
                      <span className={styles.memoLabel}>{row.label}</span>
                      <span className={styles.memoValue}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="rule-double" />

                <p className={styles.opening}>
                  Sam is in active development. This memo is a working summary
                  of how we handle data today — not a marketing sheet, not a
                  certification claim. If you&apos;re reviewing Sam for IT,
                  email{' '}
                  <a
                    href="mailto:sami@trysam.co?subject=Sam%20Security%20Review"
                    className="pen-link"
                  >
                    sami@trysam.co
                  </a>{' '}
                  and I&apos;ll send the current write-up with full details.
                </p>

                {SECTIONS.map((sec) => (
                  <section key={sec.num} className={styles.memoSec}>
                    <h2 className={styles.secHead}>
                      <span className={styles.secNum}>{sec.num} —</span>
                      <span className={styles.secTitle}>{sec.title}</span>
                    </h2>
                    <p className={styles.secBody}>{sec.body}</p>
                  </section>
                ))}

                <aside className={styles.aside}>
                  <div className={`mono-label ${styles.asideHead}`}>
                    What this memo is not
                  </div>
                  <p className={styles.asideBody}>
                    Sam does not currently advertise SOC&nbsp;2 or other formal
                    certifications. I&apos;m happy to walk through current
                    controls in detail and scope additional requirements with
                    your school. A final compliance review with your school is
                    part of every onboarding.
                  </p>
                </aside>

                <div className={styles.signoff}>
                  <p className="margin-note">— Sami, founder</p>
                  <div className={styles.seal} aria-hidden>
                    S
                  </div>
                </div>

                <div className={styles.foot}>
                  <PrintLink className={styles.footAction}>
                    Print this memo
                  </PrintLink>
                  <Link
                    href="/how-it-works"
                    className={`pen-link ${styles.footAction}`}
                  >
                    ← Back to How it works
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </section>
      </main>

      <ArchiveFooter />
    </div>
  );
}
