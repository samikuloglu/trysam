import styles from './MiniChat.module.css';

export interface MiniMsg {
  role: 'bot' | 'user';
  text: string;
}

interface Props {
  messages: MiniMsg[];
  inputPlaceholder?: string;
}

export default function MiniChat({
  messages,
  inputPlaceholder = 'Ask anything…',
}: Props) {
  return (
    <div className={`chat-widget ${styles.mini}`}>
      <div className={`cw-head ${styles.head}`}>
        <div className={`cw-avatar ${styles.avatar}`}>S</div>
        <div>
          <div className={`cw-title ${styles.title}`}>SamAI</div>
          <div className={`cw-status ${styles.status}`}>Online</div>
        </div>
      </div>
      <div className={styles.body}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={`cw-bubble ${m.role} ${styles.bubble}`}
            style={{ animation: 'none', opacity: 1 }}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className={styles.foot}>{inputPlaceholder}</div>
    </div>
  );
}
