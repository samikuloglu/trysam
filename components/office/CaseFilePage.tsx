import { Fragment, type ComponentProps, type ReactNode } from 'react';
import Letterhead from './Letterhead';
import ArchiveFooter from './ArchiveFooter';
import Reveal from './Reveal';
import CaseExhibit from './CaseExhibit';
import StatusLedger, { type StatusLedgerProps } from './StatusLedger';
import CardCatalog, { type CardCatalogProps } from './CardCatalog';
import Worksheet, { type WorksheetProps } from './Worksheet';
import TearOffSlip from './TearOffSlip';
import styles from './CaseFilePage.module.css';

type CaseExhibitProps = ComponentProps<typeof CaseExhibit>;

export interface CaseFilePageProps {
  variant: 'private' | 'charter';
  /** Every CTA on the page mails Sami. */
  mailto: string;
  hero: {
    label: string;
    heading: ReactNode;
    lede: string;
    /** Ghost CTA label; always links to the #roi worksheet. */
    secondaryLabel: string;
  };
  exhibit: CaseExhibitProps;
  /** Sec. 02 — exactly three rows, no invented numerals. */
  changes: { title: string; body: string }[];
  ledger: StatusLedgerProps;
  catalog: CardCatalogProps;
  worksheet: WorksheetProps;
  slip: { heading: ReactNode; body: string };
}

/** The shared CASE-FILE page shell: hero with exhibit, what changes,
 *  the status ledger, the card catalog, the worksheet, and the
 *  tear-off slip — one complete filing per audience. */
export default function CaseFilePage({
  variant,
  mailto,
  hero,
  exhibit,
  changes,
  ledger,
  catalog,
  worksheet,
  slip,
}: CaseFilePageProps) {
  return (
    <>
      <Letterhead variant={variant} />

      <main id="main" className="file">
        {/* ── Hero: the cover sheet ─────────────────────────── */}
        <section className={styles.hero}>
          <div className="frame">
            <div className={styles.heroGrid}>
              <Reveal className={styles.heroCopy}>
                <p className={`mono-label mono-label-red ${styles.heroLabel}`}>
                  {hero.label}
                </p>
                <h1 className={`h-display ${styles.heroHeading}`}>
                  {hero.heading}
                </h1>
                <p className={`lede ${styles.heroLede}`}>{hero.lede}</p>
                <div className={styles.ctaRow}>
                  <a className="btn" href={mailto}>
                    Book a 20-minute demo <span className="arr">→</span>
                  </a>
                  <a className="btn btn-ghost" href="#roi">
                    {hero.secondaryLabel}
                  </a>
                </div>
                <p className={`mono-micro ${styles.honesty}`}>
                  No fake testimonials, no invented stats — that part is on
                  purpose.
                </p>
              </Reveal>

              <Reveal delay={140} className={styles.heroExhibit}>
                <CaseExhibit {...exhibit} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Sec. 02 — What changes ────────────────────────── */}
        <section className="sec">
          <div className="frame">
            <div className={`rule-double ${styles.ruleGap}`} />
            <div className="sec-grid">
              <div>
                <div className="mono-label">Sec. 02 — What changes</div>
              </div>

              <div className={styles.changes}>
                {changes.map((c, i) => (
                  <Fragment key={c.title}>
                    {i > 0 && <div className="rule-single" />}
                    <Reveal delay={i * 70}>
                      <div className={styles.changeRow}>
                        <span className={styles.changeIndex}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h2 className={`h-3 ${styles.changeTitle}`}>
                            {c.title}
                          </h2>
                          <p className="body-sub">{c.body}</p>
                        </div>
                      </div>
                    </Reveal>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Sec. 03 — The status ledger ───────────────────── */}
        <StatusLedger {...ledger} />

        {/* ── Sec. 04 — The card catalog ────────────────────── */}
        <CardCatalog {...catalog} />

        {/* ── Sec. 05 — Worksheet (#roi) ────────────────────── */}
        <Worksheet {...worksheet} />

        {/* ── The tear-off slip ─────────────────────────────── */}
        <TearOffSlip
          heading={slip.heading}
          body={slip.body}
          mailto={mailto}
          buttonLabel="Book a 20-minute demo"
        />
      </main>

      <ArchiveFooter />
    </>
  );
}
