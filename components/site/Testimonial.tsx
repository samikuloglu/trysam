import { ReactNode } from 'react';
import styles from './Testimonial.module.css';

interface Props {
  quote: ReactNode;
  /** Pass a real name. Omit for anonymous "what we hear from operators" framing. */
  name?: string;
  category?: string;
  org?: string;
  /** Override the unattributed label (default: "What we hear from school operators"). */
  anonymousLabel?: string;
}

export default function Testimonial({
  quote,
  name,
  category,
  org,
  anonymousLabel = 'What we hear from school operators',
}: Props) {
  const attributed = Boolean(name);
  return (
    <div className={styles.block}>
      <div className={styles.mark}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 7h4v4H7v6H3v-6c0-2.2 1.8-4 4-4zm10 0h4v4h-4v6h-4v-6c0-2.2 1.8-4 4-4z" />
        </svg>
      </div>
      <p className={styles.quote}>{quote}</p>
      <div className={styles.attribution}>
        {attributed ? (
          <>
            <div className={styles.name}>
              {name}
              {category && (
                <>
                  <span className={styles.sep}>·</span>
                  {category}
                </>
              )}
            </div>
            {org && <div className={styles.org}>{org}</div>}
          </>
        ) : (
          <div className={styles.name}>{anonymousLabel}</div>
        )}
      </div>
    </div>
  );
}
