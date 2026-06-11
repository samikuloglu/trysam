import type { CSSProperties, ReactNode } from 'react';
import styles from './BrowserFrame.module.css';

interface Props {
  url: string;
  children: ReactNode;
  bodyStyle?: CSSProperties;
}

/** A sheet of evidence: flat browser chrome around the demo school
 *  site. Graphite outline window dots — no Mac traffic lights. */
export default function BrowserFrame({ url, children, bodyStyle }: Props) {
  return (
    <div className={styles.browser}>
      <div className={styles.bar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.glyphs} aria-hidden>
          ←&ensp;→
        </span>
        <span className={styles.url}>
          <svg
            className={styles.lock}
            viewBox="0 0 10 12"
            width="9"
            height="11"
            aria-hidden
          >
            <rect x="1" y="5" width="8" height="6" rx="1" fill="currentColor" />
            <path
              d="M3 5V3.5a2 2 0 1 1 4 0V5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
          {url}
        </span>
      </div>
      <div className={styles.body} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}
