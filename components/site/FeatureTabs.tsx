'use client';

import { useState } from 'react';
import styles from './FeatureTabs.module.css';

interface Tab {
  label: string;
  title: string;
  body: string;
}

interface Props {
  tabs: Tab[];
}

export default function FeatureTabs({ tabs }: Props) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <>
      <div className={styles.tabs} role="tablist">
        {tabs.map((t, i) => (
          <button
            key={i}
            className={`${styles.tab} ${i === active ? styles.active : ''}`}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className={styles.panel}>
        <h3 className="h-3" style={{ marginBottom: 8 }}>{tab.title}</h3>
        <p className={styles.body}>{tab.body}</p>
      </div>
    </>
  );
}
