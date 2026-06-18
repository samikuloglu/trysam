import { ReactNode } from 'react';
import styles from './OutcomeStats.module.css';

export interface OutcomeStat {
  num: ReactNode;
  title: string;
  body: string;
}

interface Props {
  eyebrow: string;
  heading: ReactNode;
  stats: OutcomeStat[];
}

export default function OutcomeStats({ eyebrow, heading, stats }: Props) {
  return (
    <section className="section">
      <div className="frame">
        <div className={styles.head}>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className={`h-1 ${styles.h1}`}>{heading}</h2>
        </div>
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.cell}>
              <div className={styles.num}>{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className={styles.underline} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
