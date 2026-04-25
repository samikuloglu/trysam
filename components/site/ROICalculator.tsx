'use client';

import { ReactNode, useState } from 'react';
import styles from './ROICalculator.module.css';

interface Props {
  eyebrow?: string;
  heading: ReactNode;
  subtitle?: string;
  inquiriesDefault?: number;
  inquiriesMin?: number;
  inquiriesMax?: number;
  inquiriesStep?: number;
  rateDefault?: number;
  rateMin?: number;
  rateMax?: number;
  minutesDefault?: number;
  minutesMin?: number;
  minutesMax?: number;
  background?: 'soft' | 'plain';
}

export default function ROICalculator({
  eyebrow = 'Your ROI Potential',
  heading,
  subtitle = 'Adjust the inputs to match your business. Sam typically resolves 70% of inquiries without staff time.',
  inquiriesDefault = 800,
  inquiriesMin = 50,
  inquiriesMax = 5000,
  inquiriesStep = 50,
  rateDefault = 25,
  rateMin = 15,
  rateMax = 100,
  minutesDefault = 5,
  minutesMin = 2,
  minutesMax = 20,
  background = 'plain',
}: Props) {
  const [inq, setInq] = useState(inquiriesDefault);
  const [rate, setRate] = useState(rateDefault);
  const [min, setMin] = useState(minutesDefault);

  const resolved = Math.round(inq * 0.7);
  const hrsM = Math.round((resolved * min) / 60);
  const hrsY = hrsM * 12;
  const savings = hrsY * rate;

  return (
    <section
      className={`section ${background === 'soft' ? 'section-soft' : ''}`}
      id="roi"
    >
      <div className="frame">
        <div className={styles.head}>
          <div className="eyebrow no-bar">{eyebrow}</div>
          <h2 className={`h-1 ${styles.h1}`}>{heading}</h2>
          <p className={`lede ${styles.sub}`}>{subtitle}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.left}>
            <h4>Your business</h4>
            <div className={styles.input}>
              <div className={styles.row}>
                <span className={styles.label}>Inquiries per month</span>
                <span className={styles.val}>{inq.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={inquiriesMin}
                max={inquiriesMax}
                step={inquiriesStep}
                value={inq}
                onChange={(e) => setInq(+e.target.value)}
                className={styles.slider}
              />
              <div className={styles.bounds}>
                <span>{inquiriesMin.toLocaleString()}</span>
                <span>{inquiriesMax.toLocaleString()}</span>
              </div>
            </div>
            <div className={styles.input}>
              <div className={styles.row}>
                <span className={styles.label}>Staff hourly rate</span>
                <span className={styles.val}>${rate}/hr</span>
              </div>
              <input
                type="range"
                min={rateMin}
                max={rateMax}
                step={1}
                value={rate}
                onChange={(e) => setRate(+e.target.value)}
                className={styles.slider}
              />
              <div className={styles.bounds}>
                <span>${rateMin}</span>
                <span>${rateMax}</span>
              </div>
            </div>
            <div className={styles.input}>
              <div className={styles.row}>
                <span className={styles.label}>Minutes per inquiry</span>
                <span className={styles.val}>{min} min</span>
              </div>
              <input
                type="range"
                min={minutesMin}
                max={minutesMax}
                step={1}
                value={min}
                onChange={(e) => setMin(+e.target.value)}
                className={styles.slider}
              />
              <div className={styles.bounds}>
                <span>{minutesMin} min</span>
                <span>{minutesMax} min</span>
              </div>
            </div>
            <div className={styles.callout}>
              <strong>Sam handles 70%</strong> of these without staff time.
            </div>
          </div>

          <div className={styles.right}>
            <h4>Annualized impact</h4>
            <div className={styles.rsub}>
              Based on your inputs, scaled across 12 months.
            </div>
            <div className={styles.savings}>${savings.toLocaleString()}</div>
            <div className={styles.savingsLabel}>
              In recovered staff time, per year.
            </div>
            <div className={styles.statsRow}>
              <div>
                <div className={styles.statNum}>{hrsM.toLocaleString()}</div>
                <div className={styles.statLabel}>Hrs / month saved</div>
              </div>
              <div>
                <div className={styles.statNum}>{hrsY.toLocaleString()}</div>
                <div className={styles.statLabel}>Hrs / year saved</div>
              </div>
            </div>
            <div className={styles.note}>
              <strong>{resolved.toLocaleString()}</strong> inquiries / month
              resolved by Sam without staff time. Plus the ones you would have lost
              overnight or on weekends.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
