import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './StatsBar.module.css';

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className={styles.section}>
      <ScrollReveal staggerChildren={0.1} className={styles.inner}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.stat}>
            <div className={styles.num}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
