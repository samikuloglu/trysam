'use client';

import { useState } from 'react';
import styles from './Worksheet.module.css';

export interface WorksheetProps {
  defaults: { questions: number; rate: number; minutes: number; share: number };
  ranges: {
    questionsMin: number;
    questionsMax: number;
    questionsStep: number;
    rateMin: number;
    rateMax: number;
  };
  questionsLabel: string;
  rateLabel: string;
  outputLabel: string;
}

function SliderRow({
  label,
  display,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  display: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className={styles.sliderRow}>
      <span className={styles.sliderTop}>
        <span className={styles.sliderLabel}>{label}</span>
        <span className={styles.sliderValue}>{display}</span>
      </span>
      <input
        className={styles.range}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

/** Sec. 05 — Worksheet SAM-2. The ROI calculator, honest edition:
 *  arithmetic from the visitor's own inputs, labeled an estimate,
 *  with the resolution share explicitly their assumption. */
export default function Worksheet({
  defaults,
  ranges,
  questionsLabel,
  rateLabel,
  outputLabel,
}: WorksheetProps) {
  const [questions, setQuestions] = useState(defaults.questions);
  const [rate, setRate] = useState(defaults.rate);
  const [minutes, setMinutes] = useState(defaults.minutes);
  const [share, setShare] = useState(defaults.share);

  const resolved = questions * (share / 100);
  const hrsMonth = (resolved * minutes) / 60;
  const hrsYear = hrsMonth * 12;
  // Round to the nearest $100 — it's an estimate, and it says so.
  const dollars = Math.round((hrsYear * rate) / 100) * 100;
  const money = `$${dollars.toLocaleString('en-US')}`;

  return (
    <section className={`sec ${styles.anchor}`} id="roi">
      <div className="frame">
        <div className={`rule-double ${styles.ruleGap}`} />
        <div className="sec-grid">
          <div>
            <div className="mono-label">Sec. 05 — Worksheet</div>
          </div>

          <div>
            <div className={styles.strip}>
              Worksheet SAM-2 — Front-office time (estimate only)
            </div>

            <div className={`sheet ruled ${styles.card}`}>
              <div className={styles.panes}>
                <div className={styles.inputs}>
                  <div className={`mono-label ${styles.paneHead}`}>
                    Your inputs
                  </div>

                  <SliderRow
                    label={questionsLabel}
                    display={questions.toLocaleString('en-US')}
                    min={ranges.questionsMin}
                    max={ranges.questionsMax}
                    step={ranges.questionsStep}
                    value={questions}
                    onChange={setQuestions}
                  />
                  <SliderRow
                    label={rateLabel}
                    display={`$${rate}/hr`}
                    min={ranges.rateMin}
                    max={ranges.rateMax}
                    step={1}
                    value={rate}
                    onChange={setRate}
                  />
                  <SliderRow
                    label="Minutes per question"
                    display={`${minutes} min`}
                    min={2}
                    max={20}
                    step={1}
                    value={minutes}
                    onChange={setMinutes}
                  />
                  <SliderRow
                    label="Share Sam resolves — your assumption"
                    display={`${share}%`}
                    min={30}
                    max={90}
                    step={5}
                    value={share}
                    onChange={setShare}
                  />
                </div>

                <div className={styles.outputs}>
                  <div className={`mono-label ${styles.paneHead}`}>
                    Estimated, not promised
                  </div>

                  <div className="rule-double" />
                  <div className={styles.totals}>
                    <div
                      className={`${styles.big} ${
                        money.length > 7 ? styles.bigSnug : ''
                      }`}
                    >
                      {money}
                    </div>
                    <p className={styles.outLabel}>{outputLabel}</p>

                    <div className={styles.stats}>
                      <div className="leader-row">
                        <span className={styles.statLabel}>Hours / month</span>
                        <span className="leader" />
                        <span className={styles.statValue}>
                          ≈ {Math.round(hrsMonth).toLocaleString('en-US')} hrs
                        </span>
                      </div>
                      <div className="leader-row">
                        <span className={styles.statLabel}>Hours / year</span>
                        <span className="leader" />
                        <span className={styles.statValue}>
                          ≈ {Math.round(hrsYear).toLocaleString('en-US')} hrs
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rule-double" />
                </div>
              </div>

              <p className={`mono-micro ${styles.note}`}>
                No customer data behind this — it&rsquo;s arithmetic from your
                own inputs. The share slider is your assumption, not our claim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
