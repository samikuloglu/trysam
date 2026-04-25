import { ReactNode } from 'react';
import styles from './BigStats.module.css';

export interface BigStat {
  num: ReactNode;
  title: string;
  body: string;
}

interface Props {
  heading: ReactNode;
  stats: BigStat[];
  id?: string;
}

export default function BigStats({ heading, stats, id }: Props) {
  return (
    <section className="section section-soft" id={id}>
      <div className="frame">
        <div className={styles.head}>
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
