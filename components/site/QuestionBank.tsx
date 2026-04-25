import { ReactNode } from 'react';
import styles from './QuestionBank.module.css';

export interface QA {
  q: string;
  a: string;
}

interface Props {
  heading: ReactNode;
  intro?: string;
  qa: QA[];
}

export default function QuestionBank({ heading, intro, qa }: Props) {
  return (
    <section className="section">
      <div className="frame">
        <div className={styles.head}>
          <div className="eyebrow no-bar">Sample Question Bank</div>
          <h2 className={`h-1 ${styles.h1}`}>{heading}</h2>
          {intro && <p className={`lede ${styles.intro}`}>{intro}</p>}
        </div>
        <div className={styles.list}>
          {qa.map((row, i) => (
            <div key={i} className={styles.row}>
              <span className={styles.n}>Q.{String(i + 1).padStart(2, '0')}</span>
              <p className={styles.q}>{row.q}</p>
              <p className={styles.a}>{row.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
