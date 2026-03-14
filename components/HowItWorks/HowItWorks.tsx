import SectionHeader from '@/components/SectionHeader/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './HowItWorks.module.css';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  label?: string;
  title?: string;
  subtitle?: string;
  steps: Step[];
}

export default function HowItWorks({
  label = 'How It Works',
  title = 'Up and running in one week. Not months.',
  subtitle = 'We handle everything. You just approve the final result.',
  steps,
}: HowItWorksProps) {
  return (
    <section className={styles.section}>
      <SectionHeader label={label} title={title} subtitle={subtitle} />
      <ScrollReveal staggerChildren={0.1} className={styles.steps}>
        {steps.map((step, i) => (
          <div key={i} className={styles.step}>
            <div className={styles.numCol}>
              <div className={styles.num}>{i + 1}</div>
              <div className={styles.line} />
            </div>
            <div className={styles.content}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
