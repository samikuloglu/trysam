'use client';

import { useEffect, useRef, useState } from 'react';

type Msg = { role: 'bot' | 'user'; text: string; thinking?: boolean };

interface Props {
  greeting: string;
  suggestions: string[];
  systemPrompt: string;
  status: string;
}

export default function LiveChat({ greeting, suggestions, systemPrompt, status }: Props) {
  const [messages, setMessages] = useState<Msg[]>([{ role: 'bot', text: greeting }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [shownSuggestions, setShownSuggestions] = useState(true);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    setShownSuggestions(false);
    setMessages((m) => [...m, { role: 'user', text: trimmed }]);
    setInput('');
    setBusy(true);
    setMessages((m) => [...m, { role: 'bot', text: '', thinking: true }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemPrompt,
          message: trimmed,
        }),
      });
      const data = await res.json().catch(() => ({}));
      const reply =
        (typeof data?.reply === 'string' && data.reply.trim()) ||
        "(Demo offline — but on a real site, I'd answer here based on your business info.)";
      setMessages((m) => {
        const next = m.filter((x) => !x.thinking);
        return [...next, { role: 'bot', text: reply }];
      });
    } catch {
      setMessages((m) => {
        const next = m.filter((x) => !x.thinking);
        return [
          ...next,
          {
            role: 'bot',
            text: "(Demo offline — but on a real site, I'd answer here based on your business info.)",
          },
        ];
      });
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  return (
    <div className="chat-widget">
      <div className="cw-head">
        <div className="cw-avatar">S</div>
        <div>
          <div className="cw-title">SamAI</div>
          <div className="cw-status">{status}</div>
        </div>
        <div className="cw-actions">
          <span aria-hidden>⛶</span>
          <span aria-hidden>—</span>
          <span aria-hidden>×</span>
        </div>
      </div>
      <div className="cw-body" ref={bodyRef}>
        {messages.map((m, i) =>
          m.thinking ? (
            <div key={i} className="cw-bubble bot thinking">
              <span /><span /><span />
            </div>
          ) : (
            <div key={i} className={`cw-bubble ${m.role}`}>{m.text}</div>
          )
        )}
        {shownSuggestions && (
          <div className="cw-suggestions">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                disabled={busy}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
      <form
        className="cw-input"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything…"
          autoComplete="off"
        />
        <button type="submit" disabled={busy} aria-label="Send">→</button>
      </form>
      <div className="cw-foot">Powered by SamAI · trysam.co</div>
    </div>
  );
}
