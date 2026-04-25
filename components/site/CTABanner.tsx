import { ReactNode } from 'react';
import styles from './CTABanner.module.css';

interface Props {
  heading: ReactNode;
  body?: string;
  buttonHref: string;
  buttonLabel?: string;
}

export default function CTABanner({
  heading,
  body = "15 minutes on a call. We'll show you a live demo trained on your real info. No commitment, no slide deck.",
  buttonHref,
  buttonLabel = 'Book a free demo',
}: Props) {
  return (
    <section className={styles.banner}>
      <div className="frame">
        <h2 className={styles.h}>{heading}</h2>
        <p className={styles.p}>{body}</p>
        <a href={buttonHref} className="btn btn-on-dark">
          {buttonLabel} <span className="arr">→</span>
        </a>
      </div>
    </section>
  );
}
