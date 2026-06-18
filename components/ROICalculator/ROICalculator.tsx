'use client';

import { useState, useMemo } from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './ROICalculator.module.css';

const QUESTIONS_PER_STUDENT = 0.11311; // Calibrated to Finalsite benchmark: 4500 → 509/mo

function fmtNum(n: number) {
  return n.toLocaleString('en-US');
}

export default function ROICalculator() {
  const [enrollment, setEnrollment] = useState(4500);
  const [hourlyRate, setHourlyRate] = useState(25);

  const { questionsPerMonth, hrsPerMonth, hrsPerYear, annualSavings } = useMemo(() => {
    const q = Math.round(enrollment * QUESTIONS_PER_STUDENT);
    const minutes = q * 10;
    const hpm = Math.round(minutes / 60);
    const hpy = Math.round((minutes * 12) / 60);
    const savings = hpy * hourlyRate;
    return {
      questionsPerMonth: q,
      hrsPerMonth: hpm,
      hrsPerYear: hpy,
      annualSavings: savings,
    };
  }, [enrollment, hourlyRate]);

  const beatsAverage = hrsPerMonth >= 53;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <ScrollReveal className={styles.header}>
          <div className={styles.eyebrow}>Your ROI Potential</div>
          <h2 className={styles.title}>How much staff time could Sam recover?</h2>
          <p className={styles.subtitle}>
            Adjust the sliders to match your school&apos;s numbers and see your
            estimated annual savings.
          </p>
        </ScrollReveal>

        <ScrollReveal className={styles.calc}>
          <div className={styles.left}>
            <div className={styles.leftLabel}>Your School&apos;s Numbers</div>

            <div className={styles.field}>
              <div className={styles.fieldRow}>
                <label htmlFor="enrollment" className={styles.fieldName}>
                  Student enrollment
                </label>
                <div className={styles.fieldValue}>{fmtNum(enrollment)}</div>
              </div>
              <input
                id="enrollment"
                type="range"
                min={100}
                max={35000}
                step={100}
                value={enrollment}
                onChange={(e) => setEnrollment(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.fieldScale}>
                <span>100</span><span>35,000</span>
              </div>
            </div>

            <div className={styles.field}>
              <div className={styles.fieldRow}>
                <label htmlFor="rate" className={styles.fieldName}>
                  Staff hourly rate
                </label>
                <div className={styles.fieldValue}>${hourlyRate}/hr</div>
              </div>
              <input
                id="rate"
                type="range"
                min={15}
                max={75}
                step={1}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.fieldScale}>
                <span>$15/hr</span><span>$75/hr</span>
              </div>
            </div>

            <div className={styles.note}>
              Based on <strong>{fmtNum(questionsPerMonth)} parent questions/month</strong>{' '}
              resolved by Sam for a school your size.
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.rightLabel}>Estimated Savings With Sam</div>
            <p className={styles.rightSub}>
              Based on industry benchmark data &mdash; 10 min saved per resolved
              question.
            </p>

            <div className={styles.savings}>${fmtNum(annualSavings)}</div>
            <div className={styles.savingsLabel}>estimated annual savings</div>

            <div className={styles.rightDivider} />

            <div className={styles.statsRow}>
              <div>
                <div className={styles.statBig}>{fmtNum(hrsPerMonth)}</div>
                <div className={styles.statSmall}>hrs/month saved</div>
              </div>
              <div>
                <div className={styles.statBig}>{fmtNum(hrsPerYear)}</div>
                <div className={styles.statSmall}>hrs/year saved</div>
              </div>
            </div>

            {beatsAverage && (
              <div className={styles.callout}>
                Your projected <strong>{fmtNum(hrsPerMonth)} hrs/month</strong> exceeds
                the average of 53 hrs saved by schools using Sam.
              </div>
            )}

            <div className={styles.fineprint}>
              Estimates based on industry benchmark inquiry volume by enrollment.
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
