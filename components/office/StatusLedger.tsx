import type { ReactNode } from 'react';
import Reveal from './Reveal';
import styles from './StatusLedger.module.css';

export interface LedgerItem {
  title: string;
  body: string;
  status: 'live' | 'roadmap';
}

export interface StatusLedgerProps {
  eyebrow: string;
  heading: ReactNode;
  subhead: string;
  /** e.g. "June 2026" — when the ledger was last reviewed by hand. */
  reviewed: string;
  items: LedgerItem[];
}

/** Sec. 03 — The Status Ledger. An official register of what is
 *  actually live versus pencilled in. The honesty centerpiece:
 *  if it isn't stamped LIVE, you can't buy it yet. */
export default function StatusLedger({
  eyebrow,
  heading,
  subhead,
  reviewed,
  items,
}: StatusLedgerProps) {
  const live = items.filter((i) => i.status === 'live');
  const roadmap = items.filter((i) => i.status === 'roadmap');

  const row = (item: LedgerItem, index: number) => (
    <Reveal
      key={item.title}
      delay={Math.min(index * 60, 300)}
      className={styles.rowWrap}
    >
      <div className={styles.row}>
        <div className={styles.rowText}>
          <div className={styles.rowTitle}>{item.title}</div>
          <p className={styles.rowBody}>{item.body}</p>
        </div>
        <div className={styles.rowStamp}>
          {item.status === 'live' ? (
            <span className="stamp stamp-live">Live</span>
          ) : (
            <span className="stamp stamp-roadmap">Roadmap — pencilled in</span>
          )}
        </div>
      </div>
    </Reveal>
  );

  return (
    <section className="sec">
      <div className="frame">
        <div className={`rule-double ${styles.ruleGap}`} />
        <div className="sec-grid">
          <div>
            <div className="mono-label">Sec. 03 — The status ledger</div>
          </div>

          <div>
            <header className={styles.head}>
              <p className={`mono-label ${styles.eyebrow}`}>{eyebrow}</p>
              <h2 className={`h-1 ${styles.heading}`}>{heading}</h2>
              <p className={styles.subhead}>{subhead}</p>
            </header>

            <div className={styles.register}>
              <div className={styles.colHeads} aria-hidden>
                <span className="mono-label">Feature</span>
                <span className={`mono-label ${styles.colStatus}`}>Status</span>
              </div>
              <div className="rule-double" />

              {live.map((item, i) => row(item, i))}

              <div className={styles.divider}>
                On the roadmap — not yet for sale
              </div>

              {roadmap.map((item, i) => row(item, i))}
            </div>

            <p className={`mono-micro ${styles.foot}`}>
              This ledger is maintained by hand · Reviewed {reviewed} · If it
              isn&rsquo;t stamped live, you can&rsquo;t buy it yet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
