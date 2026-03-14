import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ label, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      {label && <div className={styles.label}>{label}</div>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
