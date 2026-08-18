'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatMockup.module.css';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface ChatMockupProps {
  businessName: string;
  messages: Message[];
  className?: string;
}

export default function ChatMockup({ businessName, messages, className }: ChatMockupProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const hasStarted = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasStarted.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startAnimation() {
    let index = 0;
    function showNext() {
      if (index >= messages.length) return;

      const msg = messages[index];
      if (msg.role === 'bot') {
        setShowTyping(true);
        setTimeout(() => {
          setShowTyping(false);
          index++;
          setVisibleCount(index);
          setTimeout(showNext, 1200);
        }, 1000);
      } else {
        index++;
        setVisibleCount(index);
        setTimeout(showNext, 800);
      }
    }
    setTimeout(showNext, 600);
  }

  return (
    <div ref={containerRef} className={`${styles.chat} ${className || ''}`}>
      <div className={styles.header}>
        <div className={styles.avatar}>S</div>
        <div>
          <div className={styles.headerName}>SamAI &middot; {businessName}</div>
          <div className={styles.headerStatus}>Online now</div>
        </div>
      </div>
      <div className={styles.body}>
        <AnimatePresence mode="popLayout">
          {messages.slice(0, visibleCount).map((msg, i) => (
            <motion.div
              key={i}
              className={`${styles.msg} ${msg.role === 'user' ? styles.msgUser : styles.msgBot}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {msg.text}
            </motion.div>
          ))}
          {showTyping && (
            <motion.div
              key="typing"
              className={styles.typing}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
