import styles from './TrustStrip.module.css';

export default function TrustStrip() {
  return (
    <div className={styles.trust}>
      <div className="frame">
        <div className={styles.inner}>
          <span className={styles.pill}>Built for private and charter schools</span>
          <span><strong>Trained on your school</strong> — never makes things up</span>
          <span><strong>Live in 1 week</strong> — we do the setup</span>
          <span><strong>Cancel anytime</strong> — no long contracts</span>
        </div>
      </div>
    </div>
  );
}
