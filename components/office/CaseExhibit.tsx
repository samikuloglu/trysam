import BrowserFrame from './BrowserFrame';
import SchoolSite, { SchoolSiteProps } from './SchoolSite';
import DemoChat, { Exchange } from './DemoChat';
import styles from './CaseExhibit.module.css';

interface Props {
  /** Die-cut folder tab, e.g. "Exhibit A — Live demo" */
  tab: string;
  url: string;
  school: SchoolSiteProps;
  chat: {
    schoolName: string;
    greeting: string;
    script: Exchange[];
    chips: { label: string; exchange: Exchange }[];
    systemPrompt: string;
  };
}

/** The hero evidence: a demo school website in a browser frame,
 *  sitting on a manila folder, with Sam's widget answering on it. */
export default function CaseExhibit({ tab, url, school, chat }: Props) {
  return (
    <div className={styles.folder}>
      <div className={styles.tab}>{tab}</div>
      <span className={styles.punch} aria-hidden />
      <span className={`${styles.punch} ${styles.punchLow}`} aria-hidden />

      <div className={styles.stack}>
        {/* The mock school site is scenery — one decorative image to AT */}
        <div
          aria-hidden="true"
          role="presentation"
          className={styles.evidence}
        >
          <BrowserFrame url={url}>
            <SchoolSite {...school} />
          </BrowserFrame>
        </div>

        <div className={styles.chatSlot}>
          <DemoChat {...chat} />
        </div>
      </div>
    </div>
  );
}
