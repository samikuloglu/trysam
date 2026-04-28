import { ReactNode } from 'react';
import styles from './Testimonial.module.css';

interface Props {
  quote: ReactNode;
  name: string;
  category?: string;
  org: string;
}

export default function Testimonial({ quote, name, category, org }: Props) {
  return (
    <div className={styles.block}>
      <div className={styles.mark}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 7h4v4H7v6H3v-6c0-2.2 1.8-4 4-4zm10 0h4v4h-4v6h-4v-6c0-2.2 1.8-4 4-4z" />
        </svg>
      </div>
      <p className={styles.quote}>{quote}</p>
      <div className={styles.attribution}>
        <div className={styles.name}>
          {name}
          {category && (
            <>
              <span className={styles.sep}>·</span>
              {category}
            </>
          )}
        </div>
        <div className={styles.org}>{org}</div>
      </div>
    </div>
  );
}
