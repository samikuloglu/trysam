import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './Industries.module.css';

export interface Industry {
  href: string;
  icon: string;
  title: ReactNode;
  body: string;
  cta?: string;
}

interface Props {
  eyebrow: string;
  heading: ReactNode;
  industries: Industry[];
  id?: string;
  cta?: string;
}

export default function Industries({
  eyebrow,
  heading,
  industries,
  id,
  cta = 'Learn more',
}: Props) {
  return (
    <section className="section section-warm" id={id}>
      <div className="frame">
        <div className={styles.head}>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className={`h-1 ${styles.h1}`}>{heading}</h2>
        </div>
        <div className={styles.grid}>
          {industries.map((ind) => (
            <Link key={ind.href} href={ind.href} className={styles.card}>
              <div className={styles.icon}>{ind.icon}</div>
              <h3>{ind.title}</h3>
              <p>{ind.body}</p>
              <span className={styles.foot}>
                {ind.cta || cta} <span className={styles.arr}>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
