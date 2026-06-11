import type { Metadata } from 'next';
import Link from 'next/link';
import Letterhead from '@/components/office/Letterhead';
import ArchiveFooter from '@/components/office/ArchiveFooter';
import CaseExhibit from '@/components/office/CaseExhibit';
import Reveal from '@/components/office/Reveal';
import TearOffSlip from '@/components/office/TearOffSlip';
import styles from './page.module.css';

// Title falls through to the root layout's default (identical text,
// no "· Sam" template suffix doubling the brand).
export const metadata: Metadata = {
  description:
    'Sam is an AI assistant trained on your school. It answers your families around the clock, in their language — and files every answer with its source.',
};

const SYSTEM_PROMPT = `You are Sam, the demo assistant for Maplecrest Academy — a fictional school used to demonstrate Sam on trysam.co. Maplecrest is an independent PreK–12 school in Princeton, New Jersey, with about 430 students. Facts on file: the Fall Open House is Saturday, October 12, 10 AM–noon, with tours leaving the main hall every twenty minutes; tuition for 2026–27 is $24,800 for Lower School and $28,400 for Middle and Upper School; need-based financial aid is available at every grade, applied for alongside enrollment. Answer warmly, in 1–3 sentences, in the language the question was asked in. If something is not covered by these facts, say so plainly and refer the family to office@maplecrest.demo. Do not invent statistics, policies, or results.`;

const FOLDERS = [
  {
    href: '/private',
    tab: 'File A — Independent & private schools',
    heading: 'For independent & private schools',
    body: 'Tuition-supported and admissions-driven. Sam answers tuition and aid questions, books campus tours, and captures the families browsing your site at midnight.',
    questions: [
      'Is tuition assistance available?',
      'When are campus tours?',
      'What’s the application deadline?',
    ],
  },
  {
    href: '/charter',
    tab: 'File B — Charter schools & networks',
    heading: 'For charter schools & networks',
    body: 'Tuition-free and lottery-based. Sam answers enrollment, lottery, and sibling-preference questions in your families’ languages — across one campus or a whole network.',
    questions: [
      'When does the lottery open?',
      'How does sibling preference work?',
      '¿La escuela es gratuita?',
    ],
  },
];

const INDEX_ROWS = [
  {
    href: '/how-it-works',
    label: 'How Sam works — the whole pipeline',
    ref: '§ 01–07',
  },
  { href: '/security', label: 'Security & data memo', ref: 'Memo' },
  { href: '/private', label: 'File A — Private schools', ref: 'File A' },
  { href: '/charter', label: 'File B — Charter schools', ref: 'File B' },
];

export default function HomePage() {
  return (
    <>
      <Letterhead variant="home" />

      <main id="main" className="file">
        {/* ── 01 · Hero ─────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={`frame ${styles.heroGrid}`}>
            <div>
              <Reveal>
                <p className={`mono-label mono-label-red ${styles.caseLabel}`}>
                  File: Admissions, after hours
                </p>
                <h1 className={`h-display ${styles.heroH}`}>
                  Every answer, filed with its <em>source.</em>
                  <sup className={styles.fnMark}>1</sup>
                </h1>
                <p className={`lede ${styles.heroLede}`}>
                  Sam is an AI assistant trained on your school — your
                  handbook, your calendar, your policies. It answers your
                  families around the clock, in their language, and shows
                  where every answer came from. When it doesn&rsquo;t know, it
                  says so.
                </p>
                <div className={styles.ctaRow}>
                  <a
                    className="btn"
                    href="mailto:sami@trysam.co?subject=Sam%20Demo%20Request"
                  >
                    Write to Sami <span className="arr">→</span>
                  </a>
                  <a className="btn btn-ghost" href="#items">
                    Read the file ↓
                  </a>
                </div>
                <p className={`mono-micro ${styles.footnote}`}>
                  &sup1; So is this page — no fake testimonials, no invented
                  stats. That part is on purpose.
                </p>
                <p className={`margin-note ${styles.heroNote}`}>
                  No slide deck, no sales team. You&rsquo;ll get me — I built
                  Sam and I answer my own email.{' '}
                  <span className={styles.noteSig}>—&nbsp;Sami</span>
                </p>
              </Reveal>
            </div>

            <div className={styles.heroExhibit}>
              <Reveal delay={120}>
                <CaseExhibit
                  tab="Exhibit A — Scripted demo"
                  url="maplecrest-academy.org"
                  school={{
                    name: 'Maplecrest Academy',
                    initial: 'M',
                    tagline: 'Independent · PreK–12',
                    announcement: 'Fall Open House — Sat, Oct 12 · RSVP',
                    navItems: [
                      'Admissions',
                      'Academics',
                      'Tuition & Aid',
                      'Calendar',
                    ],
                    heroTitle: 'A community of curious minds',
                    heroText:
                      'An independent PreK–12 school in Princeton, New Jersey. Small classes, big questions.',
                    cards: [
                      { title: 'Visit', sub: 'Tours & open houses' },
                      { title: 'Apply', sub: 'Deadlines & process' },
                      { title: 'Tuition & Aid', sub: 'Bands & assistance' },
                    ],
                    accent: '#33506b',
                    accentSoft: '#eef2f7',
                    gold: '#c9a227',
                  }}
                  chat={{
                    schoolName: 'Maplecrest Academy',
                    greeting:
                      "Hi — I'm Sam, Maplecrest's assistant. Ask me what families usually ask.",
                    script: [
                      {
                        q: 'When is the next open house?',
                        a: 'Our Fall Open House is Saturday, October 12, 10 AM–noon — tours leave from the main hall every twenty minutes. Want me to send you the RSVP link?',
                        cite: 'Admissions — Visit Us',
                      },
                    ],
                    chips: [
                      {
                        label: '¿Ofrecen ayuda financiera?',
                        exchange: {
                          q: '¿Ofrecen ayuda financiera?',
                          a: 'Sí — Maplecrest ofrece ayuda financiera según la necesidad de cada familia. La solicitud se hace junto con la inscripción; con gusto le envío el enlace.',
                          cite: 'Tuition & Aid, p.3',
                          langTag: 'Specimen — ES',
                          lang: 'es',
                        },
                      },
                      {
                        label: "Ask something that's not on file",
                        exchange: {
                          q: 'Can my daughter bring her pet iguana to school?',
                          a: "Honestly — there's nothing about iguanas in Maplecrest's handbook, so I won't guess. I've filed the question for the front office, and you can reach them at office@maplecrest.demo.",
                          decline: true,
                        },
                      },
                      {
                        label: 'How much is tuition?',
                        exchange: {
                          q: 'How much is tuition?',
                          a: 'Tuition for 2026–27 is $24,800 for Lower School and $28,400 for Middle and Upper School, with need-based aid available at every grade.',
                          cite: 'Tuition & Aid, p.1',
                        },
                      },
                    ],
                    systemPrompt: SYSTEM_PROMPT,
                  }}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 02 · Choose your file ─────────────────────────── */}
        <section className="sec">
          <div className="frame">
            <div className={`rule-double ${styles.secRule}`} />
            <div className="sec-grid">
              <div>
                <Reveal>
                  <div className="mono-label">Sec. 02 — Choose your file</div>
                  <p className={`margin-note ${styles.railNote}`}>
                    Not sure which file you&rsquo;re in? Write to me —
                    I&rsquo;ll tell you honestly whether Sam fits.
                  </p>
                </Reveal>
              </div>

              <div className={styles.folderRow}>
                {FOLDERS.map((f, i) => (
                  <Reveal
                    key={f.href}
                    delay={80 + i * 80}
                    className={styles.folderCell}
                  >
                    <Link href={f.href} className={styles.folder}>
                      <span className={styles.folderTab}>{f.tab}</span>
                      <span className={`h-3 ${styles.folderH}`}>
                        {f.heading}
                      </span>
                      <span className={styles.folderBody}>{f.body}</span>
                      <span className={styles.folderSheet}>
                        {f.questions.map((q) => (
                          <span
                            key={q}
                            className={styles.folderQ}
                            lang={q.startsWith('¿') ? 'es' : undefined}
                          >
                            {q}
                          </span>
                        ))}
                      </span>
                      <span className={styles.folderOpen}>
                        Open file{' '}
                        <span className={styles.folderArr} aria-hidden="true">
                          →
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 · The items on file ────────────────────────── */}
        <section className={`sec ${styles.items}`} id="items">
          <div className="frame">
            <div className={`rule-double ${styles.secRule}`} />
            <div className="sec-grid">
              <div>
                <Reveal>
                  <div className="mono-label">Sec. 03 — On file</div>
                  <p className={`margin-note ${styles.railNote}`}>
                    Show, don&rsquo;t claim — these specimens are exactly what
                    the widget does.
                  </p>
                </Reveal>
              </div>

              <div>
                <Reveal delay={80}>
                  <article
                    className={`${styles.itemRow} ${styles.itemFirst}`}
                  >
                    <div className={styles.itemIdx}>Item 01</div>
                    <div>
                      <h2 className={`h-2 ${styles.itemH}`}>
                        Answers in your families&rsquo; languages
                      </h2>
                      <p className={`body-sub ${styles.itemBody}`}>
                        Parents ask in Spanish, Turkish, Arabic — Sam answers
                        in their language, automatically. No toggles, no
                        translation menus, nothing for a family to configure.
                      </p>
                    </div>
                    <div className={styles.itemSpec} aria-hidden="true">
                      <div className={styles.specGroup}>
                        <div className={styles.specBubble}>
                          The enrollment lottery opens January&nbsp;5.
                        </div>
                        <span
                          className={`stamp stamp-filed ${styles.stampMini}`}
                        >
                          Filed ↗
                        </span>
                      </div>
                      <div className={styles.specGroup}>
                        <span className={styles.specTag}>Specimen — ES</span>
                        <div className={styles.specBubble} lang="es">
                          La lotería de inscripción abre el 5 de enero.
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>

                <div className="rule-single" />

                <Reveal delay={80}>
                  <article className={styles.itemRow}>
                    <div className={styles.itemIdx}>Item 02</div>
                    <div>
                      <h2 className={`h-2 ${styles.itemH}`}>
                        Files every answer with its source
                      </h2>
                      <p className={`body-sub ${styles.itemBody}`}>
                        Every answer cites the page it came from — a handbook
                        page, a calendar entry, a policy. Your staff can audit
                        any conversation, any time.
                      </p>
                    </div>
                    <div className={styles.itemSpec} aria-hidden="true">
                      <span
                        className={`stamp stamp-filed ${styles.stampBig}`}
                      >
                        Filed · Family Handbook, p.12 ↗
                      </span>
                      <div className={styles.annot}>
                        <svg
                          viewBox="0 0 40 36"
                          width="40"
                          height="36"
                          aria-hidden="true"
                        >
                          <path
                            d="M36 32 C 24 30 14 22 9 8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M4.5 14 L9 7 L14.5 11.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className={styles.annotText}>
                          Tap any stamp to open the source.
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>

                <div className="rule-single" />

                <Reveal delay={80}>
                  <article
                    className={`${styles.itemRow} ${styles.itemLast}`}
                  >
                    <div className={styles.itemIdx}>Item 03</div>
                    <div>
                      <h2 className={`h-2 ${styles.itemH}`}>
                        Declines rather than guesses
                      </h2>
                      <p className={`body-sub ${styles.itemBody}`}>
                        If it isn&rsquo;t in your content, Sam says so plainly
                        and routes the family to your team. You get a weekly
                        report of every question it couldn&rsquo;t answer.
                      </p>
                    </div>
                    <div className={styles.itemSpec} aria-hidden="true">
                      <div className={styles.specGroup}>
                        <div className={styles.specBubble}>
                          That&rsquo;s not in the handbook, so I won&rsquo;t
                          guess — I&rsquo;ve passed your question to the front
                          office.
                        </div>
                        <span
                          className={`stamp stamp-norecord ${styles.stampMini}`}
                        >
                          No record on file
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 · Index ────────────────────────────────────── */}
        <section className="sec">
          <div className="frame">
            <div className={`rule-double ${styles.secRule}`} />
            <div className="sec-grid">
              <div>
                <Reveal>
                  <div className="mono-label">Sec. 04 — Index</div>
                </Reveal>
              </div>

              <Reveal delay={80}>
                <div className={`sheet ${styles.index}`}>
                  {INDEX_ROWS.map((row) => (
                    <Link
                      key={row.href}
                      href={row.href}
                      className={`leader-row ${styles.idxRow}`}
                    >
                      <span className={styles.idxName}>{row.label}</span>
                      <span className="leader" />
                      <span className={styles.idxRef}>{row.ref}</span>
                      <span className={styles.idxGo} aria-hidden="true">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 05 · Tear-off slip ────────────────────────────── */}
        <TearOffSlip
          heading={
            <>
              No commitment, <em>no slide deck.</em>
            </>
          }
          body="Twenty minutes on a call. I'll show you a live demo trained on your school's real content — and tell you honestly if Sam isn't a fit."
          mailto="mailto:sami@trysam.co?subject=Sam%20Demo%20Request"
          buttonLabel="Book a 20-minute demo"
        />
      </main>

      <ArchiveFooter />
    </>
  );
}
