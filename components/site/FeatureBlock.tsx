import { ReactNode } from 'react';
import styles from './FeatureBlock.module.css';

interface Props {
  eyebrow?: string;
  heading: ReactNode;
  body: ReactNode;
  cta?: { href: string; label: string };
  visual: ReactNode;
  reverse?: boolean;
  background?: 'soft' | 'plain';
}

export default function FeatureBlock({
  eyebrow,
  heading,
  body,
  cta,
  visual,
  reverse,
  background = 'plain',
}: Props) {
  return (
    <section className={`section ${background === 'soft' ? 'section-soft' : ''}`}>
      <div className="frame">
        <div className={`${styles.block} ${reverse ? styles.reverse : ''}`}>
          <div className={styles.content}>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            <h2 className={`h-1 ${styles.h1}`}>{heading}</h2>
            <p className={`lede ${styles.lede}`}>{body}</p>
            {cta && (
              <a href={cta.href} className="btn btn-outline">
                {cta.label} <span className="arr">→</span>
              </a>
            )}
          </div>
          <div className={styles.visual}>{visual}</div>
        </div>
      </div>
    </section>
  );
}
