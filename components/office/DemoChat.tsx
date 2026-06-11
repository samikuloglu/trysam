'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './DemoChat.module.css';

export interface Exchange {
  q: string;
  a: string;
  /** Source citation — renders the FILED stamp. */
  cite?: string;
  /** Renders the NO RECORD ON FILE decline stamp instead. */
  decline?: boolean;
  /** Mono tag over the answer, e.g. "SPECIMEN — ES" */
  langTag?: string;
  /** BCP-47 language of the exchange (e.g. "es") for screen readers. */
  lang?: string;
}

interface Props {
  schoolName: string;
  greeting: string;
  /** Played automatically, in order, when the widget scrolls into view. */
  script: Exchange[];
  /** Suggestion chips — each plays a deterministic scripted exchange. */
  chips: { label: string; exchange: Exchange }[];
  /** Passed to /api/chat for free-typed questions (live backend, when wired). */
  systemPrompt: string;
}

type Msg =
  | { id: number; role: 'user'; text: string; time?: string; lang?: string }
  | {
      id: number;
      role: 'sam';
      text: string;
      cite?: string;
      decline?: boolean;
      langTag?: string;
      lang?: string;
      done: boolean;
      thinking?: boolean;
    };

const OFFLINE_REPLY =
  "(That part of the demo is scripted — free-typed questions need a live deployment. The real Sam answers from your school's own handbook. Write to sami@trysam.co to see it on your content.)";

function nowTime() {
  return new Date().toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  });
}

export default function DemoChat({
  schoolName,
  greeting,
  script,
  chips,
  systemPrompt,
}: Props) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [usedChips, setUsedChips] = useState<Set<string>>(new Set());
  const [chipsReady, setChipsReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState('');
  const [started, setStarted] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  const aliveRef = useRef(true);
  const reduceRef = useRef(false);
  const timeShownRef = useRef(false);
  // Serializes all playback: scripted runs, chips, and free-typed sends
  // must never interleave. Ref (not state) so guards can't go stale.
  const busyRef = useRef(false);

  const nextId = () => ++idRef.current;

  const setBusyAll = (v: boolean) => {
    busyRef.current = v;
    setBusy(v);
  };

  useEffect(() => {
    aliveRef.current = true;
    reduceRef.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return () => {
      aliveRef.current = false;
    };
  }, []);

  // Auto-scroll on new content
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const sleep = (ms: number) =>
    new Promise<void>((res) => setTimeout(res, reduceRef.current ? 0 : ms));

  // Plays one exchange. Callers own the busy flag (setBusyAll) so a
  // whole scripted run stays atomic.
  const playExchange = useCallback(
    async (ex: Exchange) => {
      const userMsg: Msg = {
        id: nextId(),
        role: 'user',
        text: ex.q,
        lang: ex.lang,
        time: timeShownRef.current ? undefined : nowTime(),
      };
      timeShownRef.current = true;
      setMessages((m) => [...m, userMsg]);
      await sleep(450);

      const samId = nextId();
      if (reduceRef.current) {
        setMessages((m) => [
          ...m,
          {
            id: samId,
            role: 'sam',
            text: ex.a,
            cite: ex.cite,
            decline: ex.decline,
            langTag: ex.langTag,
            lang: ex.lang,
            done: true,
          },
        ]);
        return;
      }

      // typing dots
      setMessages((m) => [
        ...m,
        { id: samId, role: 'sam', text: '', done: false, thinking: true },
      ]);
      await sleep(750);
      if (!aliveRef.current) return;

      // stream the answer
      setMessages((m) =>
        m.map((x) =>
          x.id === samId
            ? { ...x, thinking: false, langTag: ex.langTag, lang: ex.lang }
            : x
        )
      );
      const step = 3;
      for (let i = step; i < ex.a.length + step; i += step) {
        if (!aliveRef.current) return;
        const slice = ex.a.slice(0, i);
        setMessages((m) =>
          m.map((x) => (x.id === samId ? { ...x, text: slice } : x))
        );
        await sleep(22);
      }

      // the stamp lands, a beat after the answer settles
      await sleep(340);
      if (!aliveRef.current) return;
      setMessages((m) =>
        m.map((x) =>
          x.id === samId
            ? { ...x, cite: ex.cite, decline: ex.decline, done: true }
            : x
        )
      );
    },
    []
  );

  // Autoplay the script when scrolled into view
  useEffect(() => {
    const el = rootRef.current;
    if (!el || started) return;
    const start = async () => {
      if (busyRef.current) return;
      setStarted(true);
      setBusyAll(true);
      try {
        await sleep(550);
        for (const ex of script) {
          if (!aliveRef.current) return;
          await playExchange(ex);
          await sleep(400);
        }
      } finally {
        if (aliveRef.current) {
          setBusyAll(false);
          setChipsReady(true);
        }
      }
    };
    if (typeof IntersectionObserver === 'undefined') {
      start();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          io.disconnect();
          start();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [script, started, playExchange]);

  async function onChip(label: string, ex: Exchange) {
    if (busyRef.current) return;
    setBusyAll(true);
    setUsedChips((s) => new Set(s).add(label));
    try {
      await playExchange(ex);
    } finally {
      if (aliveRef.current) setBusyAll(false);
    }
  }

  async function onSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busyRef.current) return;
    setBusyAll(true);
    setInput('');
    setMessages((m) => [
      ...m,
      { id: nextId(), role: 'user', text: trimmed },
    ]);
    const samId = nextId();
    setMessages((m) => [
      ...m,
      { id: samId, role: 'sam', text: '', done: false, thinking: true },
    ]);
    let reply = OFFLINE_REPLY;
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemPrompt, message: trimmed }),
      });
      const data = await res.json().catch(() => ({}));
      if (typeof data?.reply === 'string' && data.reply.trim()) {
        reply = data.reply.trim();
      }
    } catch {
      /* offline reply stands */
    }
    if (!aliveRef.current) return;
    setMessages((m) =>
      m.map((x) =>
        x.id === samId
          ? { ...x, thinking: false, text: reply, done: true }
          : x
      )
    );
    setBusyAll(false);
  }

  const visibleChips = chips.filter((c) => !usedChips.has(c.label));

  return (
    <div className={styles.widget} ref={rootRef}>
      <div className={styles.head}>
        <div className={styles.seal} aria-hidden>
          S
        </div>
        <div>
          <div className={styles.title}>Sam</div>
          <div className={styles.status}>
            <span className={styles.dot} aria-hidden />
            Demo · {schoolName}
          </div>
        </div>
      </div>

      <div
        className={styles.body}
        ref={bodyRef}
        role="log"
        aria-live="polite"
        aria-label={`Demo conversation with Sam, ${schoolName}`}
        tabIndex={0}
      >
        <div className={`${styles.bubble} ${styles.sam}`}>{greeting}</div>

        {messages.map((m) =>
          m.role === 'user' ? (
            <div key={m.id} className={styles.userWrap}>
              <div className={`${styles.bubble} ${styles.user}`} lang={m.lang}>
                {m.text}
              </div>
              {m.time && (
                <div className={styles.received}>
                  Received {m.time} — your time
                </div>
              )}
            </div>
          ) : m.thinking ? (
            <div
              key={m.id}
              className={`${styles.bubble} ${styles.sam} ${styles.thinking}`}
            >
              <span />
              <span />
              <span />
            </div>
          ) : (
            <div key={m.id} className={styles.samWrap}>
              {m.langTag && (
                <div className={styles.langTag}>{m.langTag}</div>
              )}
              <div className={`${styles.bubble} ${styles.sam}`} lang={m.lang}>
                {m.text}
              </div>
              {m.done && m.cite && (
                <span className="stamp stamp-filed stamp-anim">
                  Filed · {m.cite} ↗
                </span>
              )}
              {m.done && m.decline && (
                <span className="stamp stamp-norecord stamp-anim">
                  No record on file
                </span>
              )}
            </div>
          )
        )}

        {chipsReady && visibleChips.length > 0 && (
          <div className={styles.chips}>
            {visibleChips.map((c) => (
              <button
                key={c.label}
                type="button"
                disabled={busy}
                lang={c.exchange.lang}
                onClick={() => onChip(c.label, c.exchange)}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <form
        className={styles.inputRow}
        onSubmit={(e) => {
          e.preventDefault();
          onSend(input);
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a question…"
          aria-label="Type a question"
          autoComplete="off"
        />
        <button type="submit" disabled={busy} aria-label="Send">
          →
        </button>
      </form>

      <div className={styles.foot}>
        Scripted specimen · The real Sam is trained on your school
      </div>
    </div>
  );
}
