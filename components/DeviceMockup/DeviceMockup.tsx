import type { ReactNode } from 'react';
import styles from './DeviceMockup.module.css';

interface DeviceMockupProps {
  type: 'phone' | 'laptop';
  children: ReactNode;
  className?: string;
}

export default function DeviceMockup({ type, children, className }: DeviceMockupProps) {
  if (type === 'phone') {
    return (
      <div className={`${styles.phone} ${className || ''}`}>
        <div className={styles.phoneNotch} />
        <div className={styles.phoneScreen}>{children}</div>
      </div>
    );
  }

  return (
    <div className={`${styles.laptop} ${className || ''}`}>
      <div className={styles.laptopScreen}>
        <div className={styles.laptopScreenInner}>{children}</div>
      </div>
      <div className={styles.laptopBase} />
    </div>
  );
}
