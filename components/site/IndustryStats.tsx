import styles from './IndustryStats.module.css';

interface Stat {
  num: string;
  label: string;
  source: string;
  sourceHref?: string;
}

const STATS: Stat[] = [
  {
    num: '70%+',
    label:
      'of admissions inquiries arrive outside school office hours, when staff aren’t available to respond.',
    source: 'NAIS — Trends in Admission, 2024',
    sourceHref: 'https://www.nais.org/learn/research/',
  },
  {
    num: '5 days',
    label:
      'average response time to a prospective-family inquiry across independent and charter schools.',
    source: 'Enrollment Management Association',
    sourceHref: 'https://www.enrollment.org/',
  },
  {
    num: '~58%',
    label:
      'of families who request information from a school never receive a follow-up reply within a week.',
    source: 'EMA — Ravenna Inquiry Benchmarking',
    sourceHref: 'https://www.enrollment.org/',
  },
];

export default function IndustryStats() {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div className="eyebrow">What admissions teams are actually seeing</div>
        <h3 className={styles.h}>
          The numbers schools already know about their own funnel.
        </h3>
        <p className={styles.lede}>
          Public benchmarks from NAIS and the Enrollment Management
          Association — the gap SamAI is built to close.
        </p>
      </div>
      <div className={styles.grid}>
        {STATS.map((s, i) => (
          <div key={i} className={styles.cell}>
            <div className={styles.num}>{s.num}</div>
            <p className={styles.label}>{s.label}</p>
            <div className={styles.source}>
              {s.sourceHref ? (
                <a href={s.sourceHref} target="_blank" rel="noopener noreferrer">
                  {s.source}
                </a>
              ) : (
                s.source
              )}
            </div>
          </div>
        ))}
      </div>
      <p className={styles.note}>
        Numbers above are public industry benchmarks, not SamAI customer
        results. We&rsquo;ll publish first-customer outcomes once they&rsquo;re
        verifiable on the customer&rsquo;s own letterhead.
      </p>
    </div>
  );
}
