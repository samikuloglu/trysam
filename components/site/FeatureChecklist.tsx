import { ReactNode } from 'react';
import styles from './FeatureChecklist.module.css';

export interface ChecklistItem {
  title: string;
  body?: string;
  /** 'live' or a coming date string like 'May 2026' */
  status: 'live' | string;
}

interface Props {
  eyebrow: string;
  heading: ReactNode;
  subhead: string;
  features: ChecklistItem[];
}

export default function FeatureChecklist({ eyebrow, heading, subhead, features }: Props) {
  return (
    <section className="section">
      <div className="frame">
        <div className={styles.head}>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className={`h-1 ${styles.h}`}>{heading}</h2>
          <p className={`lede ${styles.sub}`}>{subhead}</p>
        </div>
        <ul className={styles.grid}>
          {features.map((f, i) => {
            const live = f.status === 'live';
            return (
              <li key={i} className={`${styles.item} ${live ? styles.live : styles.coming}`}>
                <div className={styles.badge}>
                  <span className={styles.dot} aria-hidden />
                  {live ? 'Live' : `Coming ${f.status}`}
                </div>
                <h3 className={styles.title}>{f.title}</h3>
                {f.body && <p className={styles.body}>{f.body}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
