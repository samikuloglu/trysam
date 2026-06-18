import { ArrowRight } from '@/components/Icons';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './CTASection.module.css';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  subText?: string;
  variant?: 'default' | 'teal';
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonHref,
  subText,
  variant = 'default',
}: CTASectionProps) {
  const isTeal = variant === 'teal';

  return (
    <section className={`${styles.section} ${isTeal ? styles.sectionTeal : ''}`}>
      <ScrollReveal>
        <div className={styles.inner}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <a
            href={buttonHref}
            className={`${styles.btn} ${isTeal ? styles.btnWhite : styles.btnPrimary}`}
          >
            {buttonText}
            <ArrowRight size={18} className={styles.btnIcon} />
          </a>
          {subText && <p className={styles.sub}>{subText}</p>}
        </div>
      </ScrollReveal>
    </section>
  );
}
