'use client';

import { useState, type ReactNode } from 'react';
import ChatMockup from '@/components/ChatMockup/ChatMockup';
import styles from './FeatureTabs.module.css';

const chessChat = [
  { role: 'user' as const, text: 'Do you have a chess club?' },
  { role: 'bot' as const, text: "Yes, we do! The Chess Club's purpose is to spread interest across the campus and offer opportunities to enhance skills." },
  { role: 'user' as const, text: 'How often do they meet?' },
  { role: 'bot' as const, text: 'The Chess Club meets weekly.' },
];

function KnowledgeBaseVisual() {
  const chips = [
    { label: 'HTML', x: 8, y: 52 },
    { label: 'PPT', x: 22, y: 14 },
    { label: 'iCal', x: 50, y: 4 },
    { label: 'DOC', x: 78, y: 14 },
    { label: 'PDF', x: 92, y: 52 },
  ];
  return (
    <div className={styles.kbVisual}>
      <svg
        className={styles.kbArc}
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M 8,52 Q 50,-20 92,52"
          fill="none"
          stroke="var(--teal)"
          strokeOpacity="0.35"
          strokeWidth="0.4"
          strokeDasharray="1.2 1.2"
        />
      </svg>
      {chips.map((c) => (
        <div
          key={c.label}
          className={styles.kbChip}
          style={{ left: `${c.x}%`, top: `${c.y}%` }}
        >
          <span className={styles.kbChipDot} />
          {c.label}
        </div>
      ))}
      <div className={styles.kbLaptop}>
        <div className={styles.kbScreen}>
          <div className={styles.kbScreenTitle}>Sam Knowledge Base</div>
          <div className={styles.kbRow} />
          <div className={styles.kbRow} />
          <div className={styles.kbRowSplit}>
            <span /> <span />
          </div>
        </div>
        <div className={styles.kbBase} />
      </div>
    </div>
  );
}

function CustomizableVisual() {
  const swatches = [
    '#F26B6B', '#E63946', '#C42030', '#7A1A24', '#3D0B12',
    '#FFE066', '#FFB14E', '#F77F00', '#E15A11', '#A93600',
    '#A8D26F', '#5BAE5C', '#2E8540', '#19663E', '#0F4525',
    '#5DC4EA', '#3AA0D9', '#1E76B6', '#155A8A', '#0E3D5E',
  ];
  return (
    <div className={styles.brandVisual}>
      <div className={styles.brandUpload}>
        <div className={styles.brandUploadHeader}>Upload photo</div>
        <div className={styles.brandUploadZone}>
          <div className={styles.brandUploadIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <circle cx="8.5" cy="10.5" r="1.5" />
              <path d="M21 16l-5-5-9 9" />
            </svg>
          </div>
          <div>Drag and drop files to upload</div>
        </div>
        <div className={styles.brandUploadActions}>
          <button type="button" className={styles.brandBtnGhost}>Cancel</button>
          <button type="button" className={styles.brandBtn}>Upload</button>
        </div>
      </div>
      <div className={styles.brandSwatches}>
        {swatches.map((c, i) => (
          <span
            key={i}
            className={`${styles.brandSwatch} ${i === 17 ? styles.brandSwatchActive : ''}`}
            style={{ background: c }}
          />
        ))}
        <span className={styles.brandDropper} aria-hidden>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 22l4-4 8-8" />
            <path d="M14 6l4 4-3 3" />
            <path d="M16 4l4 4" />
          </svg>
        </span>
      </div>
      <div className={styles.brandChatBar}>
        <div className={styles.brandChatAvatar} aria-hidden>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="8.5" cy="10.5" r="1.5" />
            <path d="M21 16l-5-5-9 9" />
          </svg>
        </div>
        <div className={styles.brandChatName}>Edit Name</div>
        <div className={styles.brandChatControls} aria-hidden>
          <span>↗</span>
          <span>—</span>
          <span>×</span>
        </div>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  const sessions = [
    { date: 'Mon, Mar 17', time: '10:42 am - 11:03 am', dur: '42 min' },
    { date: 'Tue, Mar 18', time: '9:00 am - 10:00 am', dur: '60 min' },
    { date: 'Wed, Mar 19', time: '8:15 am - 8:35 am', dur: '20 min' },
    { date: 'Thu, Mar 20', time: '11:12 am - 11:20 am', dur: '8 min' },
  ];
  // CSAT donut: 92% green ring
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const dash = (92 / 100) * circumference;
  return (
    <div className={styles.dash}>
      <div className={styles.dashTitle}>School Dashboard</div>
      <div className={styles.dashGrid}>
        <div className={styles.dashCard}>
          <div className={styles.dashLabel}>CSAT Score</div>
          <div className={styles.dashDonut}>
            <svg viewBox="0 0 70 70" width="86" height="86">
              <circle cx="35" cy="35" r={radius} fill="none" stroke="#E8E8E8" strokeWidth="7" />
              <circle
                cx="35"
                cy="35"
                r={radius}
                fill="none"
                stroke="#22C55E"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circumference}`}
                transform="rotate(-90 35 35)"
              />
              <text x="35" y="40" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--heading)">92%</text>
            </svg>
          </div>
        </div>
        <div className={styles.dashCard}>
          <div className={styles.dashLabel}>Total Number of Messages</div>
          <div className={styles.dashBig}>17,227</div>
          <div className={styles.dashTrend}>
            <span className={styles.dashTrendIcon}>↗</span>
            <span className={styles.dashTrendValue}>17%</span>
            <span className={styles.dashTrendNote}>Since last week</span>
          </div>
        </div>
        <div className={styles.dashCard}>
          <div className={styles.dashLabel}>Chat/Replies Rating</div>
          <div className={styles.dashRating}>
            <span aria-hidden>👍</span> <strong>82%</strong>
          </div>
          <div className={styles.dashRule} />
          <div className={styles.dashRating}>
            <span aria-hidden>👎</span> <strong>18%</strong>
          </div>
        </div>
        <div className={`${styles.dashCard} ${styles.dashCardWide}`}>
          <div className={styles.dashLabel}>Sessions</div>
          <table className={styles.dashTable}>
            <thead>
              <tr><th>Date</th><th>Time</th><th>Running Time</th></tr>
            </thead>
            <tbody>
              {sessions.map((s) => (
                <tr key={s.date}>
                  <td>{s.date}</td>
                  <td>{s.time}</td>
                  <td>{s.dur} <span className={styles.dashChip}>chat log</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={`${styles.dashCard} ${styles.dashCardWide}`}>
          <div className={styles.dashLabel}>Total number of sessions</div>
          <div className={styles.dashTrend}>
            <span className={styles.dashTrendIcon}>↗</span>
            <span className={styles.dashTrendValue}>17%</span>
          </div>
          <svg className={styles.dashSpark} viewBox="0 0 220 60" preserveAspectRatio="none" aria-hidden>
            <polyline
              fill="none"
              stroke="white"
              strokeOpacity="0.95"
              strokeWidth="1.6"
              points="0,42 18,30 36,38 54,22 72,32 90,16 108,28 126,18 144,28 162,14 180,22 198,8 216,10"
            />
            {[0,18,36,54,72,90,108,126,144,162,180,198,216].map((x, i) => (
              <circle key={i} cx={x} cy={[42,30,38,22,32,16,28,18,28,14,22,8,10][i]} r="1.6" fill="white" />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

interface Tab {
  key: string;
  tabLabel: string;
  panelLabel: string;
  panelTitle: string;
  panelBody: ReactNode;
  visual: ReactNode;
}

const tabs: Tab[] = [
  {
    key: 'context',
    tabLabel: 'Context-Aware Intelligence',
    panelLabel: 'Conversations that flow',
    panelTitle: 'Conversations That Make Sense',
    panelBody: (
      <>
        Unlike other chatbots, Sam is context-aware. It remembers conversation
        details, understands user intent, and personalizes responses for a natural,
        human-like interaction that supports engagement.
      </>
    ),
    visual: <ChatMockup businessName="Admissions" messages={chessChat} />,
  },
  {
    key: 'knowledge',
    tabLabel: 'Comprehensive Knowledge Base',
    panelLabel: 'Trained on every source',
    panelTitle: 'Unmatched Information Access',
    panelBody: (
      <>
        There&apos;s no limit to the number of webpages Sam can index, and with the
        ability to understand diverse file formats like PDFs, iCals, PPTs, and
        more, Sam provides comprehensive and accurate answers &mdash; taking the
        burden off your administrative staff.
      </>
    ),
    visual: <KnowledgeBaseVisual />,
  },
  {
    key: 'brand',
    tabLabel: 'Fully Customizable',
    panelLabel: 'Looks like you, sounds like you',
    panelTitle: 'Your Brand, Your Bot',
    panelBody: (
      <>
        Tailor Sam to your school&apos;s brand. Customize the name (e.g., your
        mascot), colors, fonts, and even the tone of responses to create a
        seamless and on-brand experience for <strong>your</strong> audience.
      </>
    ),
    visual: <CustomizableVisual />,
  },
  {
    key: 'analytics',
    tabLabel: 'Insightful Admin Analytics',
    panelLabel: 'See what families are asking',
    panelTitle: 'Data-Driven Insights for Continuous Improvement',
    panelBody: (
      <>
        Understand user behavior with a comprehensive admin analytics dashboard.
        Track top questions, identify areas for improvement, and measure
        engagement with metrics like CSAT scores, session numbers, and more.
      </>
    ),
    visual: <AnalyticsVisual />,
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.tabs} role="tablist" aria-label="Sam features">
          {tabs.map((t, i) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={i === active}
              className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
              onClick={() => setActive(i)}
            >
              {t.tabLabel}
            </button>
          ))}
        </div>
        <div className={styles.divider} />

        <div className={styles.panel} key={tab.key}>
          <div className={styles.panelText}>
            <div className={styles.panelLabel}>{tab.panelLabel}</div>
            <h3 className={styles.panelTitle}>{tab.panelTitle}</h3>
            <p className={styles.panelBody}>{tab.panelBody}</p>
            <div className={styles.panelAccent} />
          </div>
          <div className={styles.panelVisual}>{tab.visual}</div>
        </div>
      </div>
    </section>
  );
}
