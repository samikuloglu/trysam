import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './SchoolsCrossSell.module.css';

interface Props {
  mode: 'two-model' | 'pocket';
  eyebrow?: string;
  heading?: ReactNode;
  href?: string;
  label?: string;
}

export default function SchoolsCrossSell({
  mode,
  eyebrow,
  heading,
  href,
  label,
}: Props) {
  if (mode === 'pocket') {
    return (
      <section className="section section-warm">
        <div className="frame">
          <div className={styles.block}>
            <div className="eyebrow">Sam now focuses on</div>
            <h2 className={`h-1 ${styles.h}`}>Private and charter schools.</h2>
            <div className={styles.btns}>
              <Link href="/private" className="btn">
                Private schools <span className="arr">→</span>
              </Link>
              <Link href="/charter" className="btn btn-outline">
                Charter schools <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // two-model
  return (
    <section className="section section-warm">
      <div className="frame">
        <div className={styles.block}>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          {heading && <h2 className={`h-1 ${styles.h}`}>{heading}</h2>}
          {href && label && (
            <div className={styles.btns}>
              <Link href={href} className="btn">
                {label} <span className="arr">→</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
