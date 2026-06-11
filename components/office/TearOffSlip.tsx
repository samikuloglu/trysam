import type { ReactNode } from 'react';
import styles from './TearOffSlip.module.css';

interface Props {
  heading: ReactNode;
  body: string;
  mailto: string;
  buttonLabel?: string;
}

/** The CTA band: a cream slip with a perforated top edge — the
 *  "return this portion" remnant of a school form — sitting on the
 *  dark after-hours archive. The mailto is the whole point. */
export default function TearOffSlip({
  heading,
  body,
  mailto,
  buttonLabel = 'Write to Sami',
}: Props) {
  return (
    <section className={`band-night ${styles.band}`}>
      <div className="frame">
        <div className={styles.slip}>
          <div className={styles.perforation} aria-hidden />
          <div className={styles.grid}>
            <div>
              <h2 className={`h-1 ${styles.h}`}>{heading}</h2>
              <p className={styles.body}>{body}</p>
            </div>
            <div className={styles.action}>
              <a href={mailto} className={styles.mailLine}>
                sami@trysam.co
              </a>
              <a href={mailto} className="btn">
                {buttonLabel} <span className="arr">→</span>
              </a>
              <p className={styles.micro}>
                Replies come from a human (Sami). No automation, no sequence,
                no CRM.
              </p>
            </div>
          </div>
          <span className={styles.ghostStamp} aria-hidden>
            Received
          </span>
        </div>
      </div>
    </section>
  );
}
