import type { Metadata } from 'next';
import Letterhead from '@/components/office/Letterhead';
import ArchiveFooter from '@/components/office/ArchiveFooter';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Client Portal',
  robots: { index: false, follow: false },
};

export default function PortalPage() {
  return (
    <>
      <Letterhead />

      <main id="main" className="file">
        <section className={`sec ${styles.sec}`}>
          <div className="frame">
            <div className={`sheet ${styles.card}`}>
              <div className="mono-label">Client portal</div>
              <h1 className={`h-2 ${styles.heading}`}>
                Client logins open with the first cohort.
              </h1>
              <p className={styles.body}>
                Sam is pre-launch — self-serve access to the dashboard
                (transcripts, sources, knowledge-gap reports) opens as the
                first schools come aboard. If you&apos;re evaluating Sam or
                you&apos;re part of the first cohort, you have a direct line:
              </p>
              <div className={styles.action}>
                <a className="btn" href="mailto:sami@trysam.co?subject=Sam%20Portal">
                  Write to Sami{' '}
                  <span className="arr" aria-hidden>
                    →
                  </span>
                </a>
              </div>
              <p className={`mono-micro ${styles.micro}`}>
                No login exists yet. We&apos;d rather tell you that than fake
                one.
              </p>
            </div>
          </div>
        </section>
      </main>

      <ArchiveFooter />
    </>
  );
}
