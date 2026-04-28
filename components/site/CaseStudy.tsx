import Link from 'next/link';
import styles from './CaseStudy.module.css';

export default function CaseStudy() {
  return (
    <div className={styles.case}>
      <div className={styles.img}>
        <div className={styles.content}>
          <div className={styles.tag}>Case Study</div>
          <div className={styles.title}>
            Westbrook
            <br />
            Academy
          </div>
        </div>
        <div className={styles.controls}>
          <span className={`${styles.dot} ${styles.dotActive}`} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.h3}>Westbrook Academy</h3>
        <p className={styles.p}>
          Westbrook launched Sam as an after-hours admissions tool. To the school&apos;s
          surprise, Sam answered over 10,000 prospect questions in the first quarter
          — and saved the admissions team more than 1,000 hours of intake calls.
        </p>
        <Link href="/private" className={styles.link}>
          Read case study <span aria-hidden>→</span>
        </Link>
        <div className={styles.arrows}>
          <button className={styles.arrow} aria-label="Previous">
            ←
          </button>
          <button className={styles.arrow} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
