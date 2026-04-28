import { ReactNode } from 'react';
import BrowserMockup from './BrowserMockup';
import LiveChat from './LiveChat';
import TrustStrip from './TrustStrip';
import styles from './VerticalHero.module.css';

interface Props {
  eyebrow: string;
  heading: ReactNode;
  body: string;
  mailto: string;
  url: string;
  placeholderTitle: string;
  placeholderBody: string;
  placeholderCards: [string, string, string];
  chatStatus: string;
  chatGreeting: string;
  chatSuggestions: string[];
  chatSystemPrompt: string;
}

export default function VerticalHero({
  eyebrow,
  heading,
  body,
  mailto,
  url,
  placeholderTitle,
  placeholderBody,
  placeholderCards,
  chatStatus,
  chatGreeting,
  chatSuggestions,
  chatSystemPrompt,
}: Props) {
  return (
    <section className={styles.hero}>
      <div className="frame">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.eyebrow}>{eyebrow}</div>
            <h1 className={styles.h1}>{heading}</h1>
            <div className={styles.divider} />
            <p className={styles.lede}>{body}</p>
            <div className={styles.ctaRow}>
              <a href={mailto} className="btn btn-on-dark">
                Book a free demo <span className="arr">→</span>
              </a>
              <a href="#roi" className="btn btn-ghost-on-dark">
                See the ROI <span className="arr">→</span>
              </a>
            </div>
            <p className={styles.micro}>15 min · No commitment · Live in 1 week</p>
          </div>
          <div className={styles.right}>
            <div className={styles.product}>
              <BrowserMockup url={url} bodyClassName={styles.productBody}>
                <div className={styles.placeholder}>
                  <h3>{placeholderTitle}</h3>
                  <p>{placeholderBody}</p>
                  <div className={styles.cards}>
                    <div className={`${styles.card} ${styles.cardA}`}>{placeholderCards[0]}</div>
                    <div className={`${styles.card} ${styles.cardB}`}>{placeholderCards[1]}</div>
                    <div className={`${styles.card} ${styles.cardC}`}>{placeholderCards[2]}</div>
                  </div>
                </div>
                <div className={styles.chatWrap}>
                  <LiveChat
                    greeting={chatGreeting}
                    suggestions={chatSuggestions}
                    systemPrompt={chatSystemPrompt}
                    status={chatStatus}
                  />
                </div>
              </BrowserMockup>
            </div>
          </div>
        </div>
      </div>
      <TrustStrip />
    </section>
  );
}
