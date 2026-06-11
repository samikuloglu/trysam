import type { ReactNode } from 'react';
import Reveal from './Reveal';
import styles from './CardCatalog.module.css';

export interface CatalogCard {
  q: string;
  a: string;
  /** Source citation — renders the red FILED stamp at the card foot. */
  cite?: string;
  /** A question with no record on file: Sam declines and routes it. */
  noRecord?: boolean;
}

export interface CardCatalogProps {
  heading: ReactNode;
  /** Founder aside, set in the rail under the section label. */
  railNote?: string;
  cards: CatalogCard[];
}

/** Sec. 04 — The card catalog. The Q&A bank as index cards: each
 *  question filed on real index-card stock — red headline rule,
 *  carbon-blue ruled lines, and a stamp at the foot. */
export default function CardCatalog({
  heading,
  railNote,
  cards,
}: CardCatalogProps) {
  return (
    <section className="sec">
      <div className="frame">
        <div className={`rule-double ${styles.ruleGap}`} />
        <div className="sec-grid">
          <div>
            <div className="mono-label">Sec. 04 — The card catalog</div>
            {railNote && (
              <p className={`margin-note ${styles.railNote}`}>{railNote}</p>
            )}
          </div>

          <div>
            <h2 className={`h-1 ${styles.heading}`}>{heading}</h2>

            <div className={styles.grid}>
              {cards.map((card, i) => (
                <Reveal
                  key={card.q}
                  delay={(i % 2) * 80}
                  className={styles.cardWrap}
                >
                  <article className={styles.card}>
                    <span className={styles.qTab} aria-hidden>
                      Q.{String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={styles.q}>{card.q}</h3>
                    <div className={styles.aArea}>
                      <p className={styles.a}>{card.a}</p>
                    </div>
                    <div className={styles.foot}>
                      {card.noRecord ? (
                        <span className="stamp stamp-norecord">
                          No record on file
                        </span>
                      ) : (
                        <span className="stamp stamp-filed">
                          Filed · {card.cite}
                        </span>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
