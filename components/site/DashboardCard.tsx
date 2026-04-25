import styles from './DashboardCard.module.css';

export default function DashboardCard() {
  return (
    <div className={styles.card}>
      <div className={styles.head}>Sam Dashboard · This week</div>
      <div className={styles.grid}>
        <div className={styles.tile}>
          <h5>CSAT Score</h5>
          <div className={styles.donut}>
            <svg viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="3"
              />
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="#1ec97a"
                strokeWidth="3"
                strokeDasharray="86 100"
                strokeLinecap="round"
              />
            </svg>
            <div className={styles.donutPct}>92%</div>
          </div>
        </div>
        <div className={styles.tile}>
          <h5>Total Messages</h5>
          <div className={styles.num}>17,227</div>
          <div className={styles.delta}>▲ 17% since last week</div>
        </div>
        <div className={styles.tile}>
          <h5>Reply Rating</h5>
          <div className={styles.rating}>
            <div className={styles.row}>
              <span className={styles.lab} aria-hidden>
                👍
              </span>
              <span className={styles.val}>82%</span>
            </div>
            <div className={styles.row}>
              <span className={styles.lab} aria-hidden>
                👎
              </span>
              <span className={styles.val}>18%</span>
            </div>
          </div>
        </div>
        <div className={styles.tile}>
          <h5>Sessions</h5>
          <div className={styles.spark}>
            <svg viewBox="0 0 100 40" preserveAspectRatio="none">
              <polyline
                points="0,30 12,28 24,22 36,24 48,16 60,18 72,10 84,14 100,4"
                fill="none"
                stroke="#6dd29f"
                strokeWidth="2"
              />
              <polyline
                points="0,30 12,28 24,22 36,24 48,16 60,18 72,10 84,14 100,4 100,40 0,40"
                fill="rgba(109,210,159,0.15)"
                stroke="none"
              />
            </svg>
          </div>
          <div className={styles.delta} style={{ marginTop: 8 }}>
            ▲ 17% — this month
          </div>
        </div>
      </div>
    </div>
  );
}
