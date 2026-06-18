import type { ReactNode } from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './BenefitSection.module.css';

interface BenefitSectionProps {
  label: string;
  title: string;
  description: string;
  visual: ReactNode;
  reversed?: boolean;
}

export default function BenefitSection({
  label,
  title,
  description,
  visual,
  reversed = false,
}: BenefitSectionProps) {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} ${reversed ? styles.reversed : ''}`}>
        <ScrollReveal direction={reversed ? 'right' : 'left'}>
          <div className={styles.text}>
            <div className={styles.label}>{label}</div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction={reversed ? 'left' : 'right'}>
          <div className={styles.visual}>{visual}</div>
        </ScrollReveal>
      </div>
    </section>
  );
}
