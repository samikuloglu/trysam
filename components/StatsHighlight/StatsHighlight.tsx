import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './StatsHighlight.module.css';

const stats = [
  {
    value: '24/7',
    title: 'Availability',
    body: 'Provide instant support around the clock, even when your offices are closed.',
  },
  {
    value: '45+',
    title: 'Languages',
    body: 'Connect with your diverse community and reach a wider audience with multilingual support.',
  },
  {
    value: '0 clicks',
    title: 'One question. Full support.',
    body: 'Simplify the search and browsing experience by answering questions instantly and accurately.',
  },
];

export default function StatsHighlight() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <ScrollReveal>
          <h2 className={styles.title}>
            Answer more questions &amp; connect with families faster.
          </h2>
        </ScrollReveal>
        <ScrollReveal staggerChildren={0.12} className={styles.grid}>
          {stats.map((s) => (
            <div key={s.value} className={styles.col}>
              <div className={styles.value}>{s.value}</div>
              <h3 className={styles.colTitle}>{s.title}</h3>
              <p className={styles.colBody}>{s.body}</p>
              <div className={styles.colRule} />
            </div>
          ))}
        </ScrollReveal>
      </div>
      <div className={styles.bottomRule} />
    </section>
  );
}
