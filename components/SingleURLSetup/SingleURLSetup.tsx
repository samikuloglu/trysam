import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './SingleURLSetup.module.css';

export default function SingleURLSetup() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <ScrollReveal className={styles.copy}>
          <div className={styles.eyebrow}>Effortless Setup</div>
          <h2 className={styles.title}>Built from a single URL.</h2>
          <p className={styles.body}>
            Your knowledge base can be built straight from your website. Sam pulls
            your tuition, programs, admissions, and campus life &mdash; and keeps
            learning from every conversation.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="right" className={styles.visualWrap}>
          <div className={styles.urlBar}>
            <span className={styles.urlPrefix}>https://</span>
            <span className={styles.urlBody}>www.your-school.edu</span>
            <span className={styles.urlCursor} aria-hidden />
          </div>
          <div className={styles.urlArrow} aria-hidden>
            <svg width="24" height="42" viewBox="0 0 24 42" fill="none" stroke="var(--teal)" strokeWidth="1.5">
              <path d="M12 2 V36" strokeDasharray="3 3" />
              <path d="M5 30 L12 38 L19 30" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={styles.kbCard}>
            <div className={styles.kbCardTitle}>Sam Knowledge Base</div>
            <div className={styles.kbRow} />
            <div className={styles.kbRow} />
            <div className={styles.kbRowSplit}>
              <span /> <span />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
