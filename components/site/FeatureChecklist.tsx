import { ReactNode } from 'react';
import styles from './FeatureChecklist.module.css';

export interface ChecklistItem {
  title: string;
  body?: string;
  /** 'live' or a coming date string like 'May 2026' */
  status: 'live' | string;
}

interface Props {
  eyebrow: string;
  heading: ReactNode;
  subhead: string;
  features: ChecklistItem[];
  liveHeading?: string;
  roadmapHeading?: string;
}

export default function FeatureChecklist({
  eyebrow,
  heading,
  subhead,
  features,
  liveHeading,
  roadmapHeading,
}: Props) {
  const live = features.filter((f) => f.status === 'live');
  const roadmap = features.filter((f) => f.status !== 'live');
  const split = Boolean(liveHeading || roadmapHeading);

  return (
    <section className="section">
      <div className="frame">
        <div className={styles.head}>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className={`h-1 ${styles.h}`}>{heading}</h2>
          <p className={`lede ${styles.sub}`}>{subhead}</p>
        </div>

        {split ? (
          <>
            {liveHeading && live.length > 0 && (
              <div className={styles.group}>
                <h3 className={styles.groupHead}>{liveHeading}</h3>
                <ul className={styles.grid}>
                  {live.map((f, i) => (
                    <li key={`l-${i}`} className={`${styles.item} ${styles.live}`}>
                      <div className={styles.badge}>
                        <span className={styles.dot} aria-hidden />
                        Live
                      </div>
                      <h3 className={styles.title}>{f.title}</h3>
                      {f.body && <p className={styles.body}>{f.body}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {roadmapHeading && roadmap.length > 0 && (
              <div className={`${styles.group} ${styles.groupRoadmap}`}>
                <h3 className={styles.groupHead}>{roadmapHeading}</h3>
                <ul className={styles.grid}>
                  {roadmap.map((f, i) => (
                    <li key={`r-${i}`} className={`${styles.item} ${styles.coming}`}>
                      <div className={styles.badge}>
                        <span className={styles.dot} aria-hidden />
                        Coming {f.status}
                      </div>
                      <h3 className={styles.title}>{f.title}</h3>
                      {f.body && <p className={styles.body}>{f.body}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul className={styles.grid}>
            {features.map((f, i) => {
              const isLive = f.status === 'live';
              return (
                <li
                  key={i}
                  className={`${styles.item} ${isLive ? styles.live : styles.coming}`}
                >
                  <div className={styles.badge}>
                    <span className={styles.dot} aria-hidden />
                    {isLive ? 'Live' : `Coming ${f.status}`}
                  </div>
                  <h3 className={styles.title}>{f.title}</h3>
                  {f.body && <p className={styles.body}>{f.body}</p>}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
