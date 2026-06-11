import type { Metadata } from 'next';
import Link from 'next/link';
import Letterhead from '@/components/office/Letterhead';
import ArchiveFooter from '@/components/office/ArchiveFooter';
import Reveal from '@/components/office/Reveal';
import TearOffSlip from '@/components/office/TearOffSlip';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How Sam Works',
  description:
    "How Sam ingests your school's content, answers with citations, declines when it should, and what you see on your end.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Letterhead variant="how" />

      <main id="main" className="file">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className="frame">
            <Reveal>
              <div className="sec-grid">
                <div className={styles.heroRail}>
                  <div className="mono-label mono-label-red">
                    Procedure SAM-7 — Chain of custody
                  </div>
                </div>
                <div>
                  <h1 className={`h-display ${styles.heroH}`}>
                    From your handbook to a parent&apos;s question,{' '}
                    <em>traceable end-to-end.</em>
                  </h1>
                  <p className={`lede ${styles.heroLede}`}>
                    Sam isn&apos;t a generic LLM pointed at your website.
                    It&apos;s a retrieval pipeline built around what schools
                    actually need: grounded answers, source citations,
                    escalation when confidence is low, and a transcript of
                    every conversation. Here&apos;s the whole machine.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── The chain: seven stations on one routing slip ────── */}
        <section className={styles.chainSec}>
          <div className="frame">
            <div className="rule-double" />
            <div className={styles.chain}>
              {/* ── Station 01 — Intake ─────────────────────────── */}
              <section className={styles.station} id="intake">
                <span className={styles.node} aria-hidden />
                <Reveal>
                  <div className={`sec-grid ${styles.stationGrid}`}>
                    <div className={styles.rail}>
                      <div className="mono-label">Step 01 / 07</div>
                      <div className={styles.stationName}>Intake</div>
                    </div>
                    <div>
                      <h2 className={`h-1 ${styles.h}`}>
                        What Sam needs <em>from your school.</em>
                      </h2>
                      <p className={`lede ${styles.bodyLede}`}>
                        Most schools already have everything Sam needs. We
                        start from the content you&apos;ve already written.
                      </p>
                      <ul className={styles.ledgerList}>
                        <li>
                          <strong>Your website</strong> — crawled and
                          re-crawled automatically.
                        </li>
                        <li>
                          <strong>Admissions or enrollment handbook</strong> —
                          PDF is fine.
                        </li>
                        <li>
                          <strong>Academic &amp; admissions calendars</strong>{' '}
                          — the dates parents actually ask about.
                        </li>
                        <li>
                          <strong>Policy documents</strong> — tuition sheets,
                          lottery rules, dress code, transportation, financial
                          aid.
                        </li>
                        <li>
                          <strong>Optional</strong> — the FAQ you wish your
                          front office could hand parents.
                        </li>
                      </ul>
                      <div className={styles.plate}>
                        <div
                          className={`sheet ${styles.intake} ${styles.indexCard}`}
                        >
                          <div className={styles.sheetHead}>
                            <span>Sources received</span>
                            <span className={styles.sheetHeadRight}>
                              SAM-7 / 01
                            </span>
                          </div>
                          <ul className={styles.checkList}>
                            <li>
                              <span className={styles.check}>✓</span>
                              yourschool.org — crawl scheduled
                            </li>
                            <li>
                              <span className={styles.check}>✓</span>
                              Admissions handbook (PDF)
                            </li>
                            <li>
                              <span className={styles.check}>✓</span>
                              Academic &amp; admissions calendars
                            </li>
                            <li>
                              <span className={styles.check}>✓</span>
                              Tuition sheet · lottery rules · dress code
                            </li>
                            <li>
                              <span className={styles.check}>✓</span>
                              Transportation &amp; financial aid policies
                            </li>
                            <li>
                              <span className={styles.check}>✓</span>
                              Front-office FAQ (optional)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </section>

              {/* ── Station 02 — Indexing ───────────────────────── */}
              <section className={styles.station} id="indexing">
                <span className={styles.node} aria-hidden />
                <Reveal>
                  <div className={`sec-grid ${styles.stationGrid}`}>
                    <div className={styles.rail}>
                      <div className="mono-label">Step 02 / 07</div>
                      <div className={styles.stationName}>Indexing</div>
                    </div>
                    <div>
                      <h2 className={`h-1 ${styles.h}`}>
                        How Sam <em>learns your school.</em>
                      </h2>
                      <p className={`lede ${styles.bodyLede}`}>
                        We don&apos;t just point an LLM at your website. The
                        retrieval pipeline was built from scratch — no
                        off-the-shelf framework — because the off-the-shelf
                        options improvise tuition figures.
                      </p>
                      <ol className={styles.steps}>
                        <li>
                          <strong>Crawl.</strong> Sam crawls your website and
                          the documents you hand off. Every page becomes a
                          source.
                        </li>
                        <li>
                          <strong>Chunk.</strong> Long pages are split
                          semantically, by section — a tuition table
                          doesn&apos;t get cut in half.
                        </li>
                        <li>
                          <strong>Embed.</strong> Each chunk is indexed with
                          its source URL preserved.
                        </li>
                        <li>
                          <strong>Manual review.</strong> We walk the edge
                          cases together: what should never be answered, what
                          should always escalate.
                        </li>
                        <li>
                          <strong>Re-index.</strong> Update your site and Sam
                          re-indexes automatically — no re-training, no
                          downtime.
                        </li>
                      </ol>
                      <div className={styles.pipe} aria-hidden>
                        <span className={styles.pipeChip}>Crawl</span>
                        <span className={styles.pipeLeader} />
                        <span className={styles.pipeChip}>Chunk</span>
                        <span className={styles.pipeLeader} />
                        <span className={styles.pipeChip}>Embed</span>
                        <span className={styles.pipeLeader} />
                        <span className={styles.pipeChip}>Review</span>
                        <span className={styles.pipeLeader} />
                        <span className={styles.pipeChip}>Re-index</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </section>

              {/* ── Station 03 — Answering ──────────────────────── */}
              <section className={styles.station} id="answering">
                <span className={styles.node} aria-hidden />
                <Reveal>
                  <div className={`sec-grid ${styles.stationGrid}`}>
                    <div className={styles.rail}>
                      <div className="mono-label">Step 03 / 07</div>
                      <div className={styles.stationName}>Answering</div>
                    </div>
                    <div>
                      <h2 className={`h-1 ${styles.h}`}>
                        How Sam <em>answers a question.</em>
                      </h2>
                      <p className={`lede ${styles.bodyLede}`}>
                        The same four steps, every time, in any language Sam
                        supports.
                      </p>
                      <ol className={styles.steps}>
                        <li>
                          <strong>A parent asks</strong> — in Spanish, Turkish,
                          Arabic, English, or any other language Sam supports.
                        </li>
                        <li>
                          <strong>Sam retrieves</strong> the most relevant
                          chunks from your indexed content.
                        </li>
                        <li>
                          <strong>Sam answers</strong> in the parent&apos;s
                          language, citing the source page the answer came
                          from.
                        </li>
                        <li>
                          <strong>If confidence is low,</strong> Sam declines
                          politely and offers escalation to your team.
                        </li>
                      </ol>
                      <p className={`${styles.note} ${styles.noteGround}`}>
                        This is what grounding means in practice: Sam answers
                        only from sources you&apos;ve approved. If the answer
                        isn&apos;t in your content, Sam files a decline instead
                        of improvising one.
                      </p>
                      <div className={styles.plate}>
                        <div className={`sheet ${styles.qcard}`}>
                          <div className={styles.sheetHead}>
                            <span>One exchange, as filed</span>
                            <span className={styles.sheetHeadRight}>
                              SAM-7 / 03
                            </span>
                          </div>
                          <div className={styles.qcardBody}>
                            <p className={styles.qQ}>
                              &ldquo;How much is tuition for 7th grade?&rdquo;
                            </p>
                            <div className={styles.qA}>
                              Middle School tuition (grades 6–8) is $14,800
                              for 2026–27, and a 10% sibling discount applies.
                              Financial aid applications open October 1 —
                              here&apos;s the aid sheet and the form.
                            </div>
                            <span
                              className={`stamp stamp-filed ${styles.qStamp}`}
                            >
                              Filed · Tuition &amp; Aid Sheet, p.2
                            </span>
                          </div>
                          <div className={styles.sheetFoot}>
                            Specimen — fictional school, scripted for
                            illustration. Real answers cite your documents.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </section>

              {/* ── Station 04 — When it doesn't know ───────────── */}
              <section className={styles.station} id="declines">
                <span className={styles.node} aria-hidden />
                <Reveal>
                  <div className={`sec-grid ${styles.stationGrid}`}>
                    <div className={styles.rail}>
                      <div className="mono-label">Step 04 / 07</div>
                      <div className={styles.stationName}>
                        When it doesn&apos;t know
                      </div>
                      <p className={`margin-note ${styles.railNote}`}>
                        If a vendor won&apos;t show you the failure mode,
                        that&apos;s your answer.
                      </p>
                    </div>
                    <div className={styles.flagged}>
                      <h2 className={`h-1 ${styles.h}`}>
                        The right fear, <em>addressed head-on.</em>
                      </h2>
                      <p className={`lede ${styles.bodyLede}`}>
                        &ldquo;What if this embarrasses our school?&rdquo; is
                        the right question to ask an AI vendor. Here&apos;s
                        the machinery that answers it.
                      </p>
                      <ul className={styles.ledgerList}>
                        <li>
                          <strong>Polite decline.</strong> When confidence is
                          low, Sam says so plainly and routes the parent to
                          your team.
                        </li>
                        <li>
                          <strong>Escalation routing.</strong> Configurable
                          handoff to email or your front office, with the
                          parent&apos;s question attached.
                        </li>
                        <li>
                          <strong>Knowledge-gap report.</strong> A weekly
                          email of every question Sam couldn&apos;t answer.
                        </li>
                        <li>
                          <strong>Transcript review.</strong> Browse, search,
                          flag — corrections feed back into Sam&apos;s
                          sources.
                        </li>
                      </ul>
                      <div className={styles.plate}>
                        <div className={`sheet ${styles.gapReport}`}>
                          <div className={styles.sheetHead}>
                            <span>Knowledge-gap report — weekly</span>
                            <span className={styles.sheetHeadRight}>
                              SAM-7 / 04
                            </span>
                          </div>
                          <ul className={styles.gapRows}>
                            <li>
                              <span className={styles.gapCount}>14×</span>
                              <span className={styles.gapQ}>
                                &ldquo;Do you offer after-care?&rdquo;
                              </span>
                              <span className={styles.gapAction}>
                                → Add to handbook
                              </span>
                            </li>
                            <li>
                              <span className={styles.gapCount}>9×</span>
                              <span className={styles.gapQ}>
                                &ldquo;Bus from East Orange?&rdquo;
                              </span>
                              <span className={styles.gapAction}>
                                → Add to transport map
                              </span>
                            </li>
                            <li>
                              <span className={styles.gapCount}>6×</span>
                              <span className={styles.gapQ}>
                                &ldquo;Lottery for kindergarten?&rdquo;
                              </span>
                              <span className={styles.gapAction}>
                                → Update FAQ
                              </span>
                            </li>
                          </ul>
                          <div className={styles.sheetFoot}>
                            Example report — real reports use your
                            school&apos;s data.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </section>

              {/* ── Station 05 — Your end ───────────────────────── */}
              <section className={styles.station} id="dashboard">
                <span className={styles.node} aria-hidden />
                <Reveal>
                  <div className={`sec-grid ${styles.stationGrid}`}>
                    <div className={styles.rail}>
                      <div className="mono-label">Step 05 / 07</div>
                      <div className={styles.stationName}>Your end</div>
                    </div>
                    <div>
                      <h2 className={`h-1 ${styles.h}`}>The dashboard.</h2>
                      <p className={`lede ${styles.bodyLede}`}>
                        Every conversation Sam has is on the record. The
                        dashboard is where you read it, search it, and act on
                        it.
                      </p>
                      <ul className={styles.ledgerList}>
                        <li>
                          <strong>Transcripts</strong> — every conversation,
                          with full search.
                        </li>
                        <li>
                          <strong>Source management</strong> — upload,
                          refresh, retire.
                        </li>
                        <li>
                          <strong>Knowledge-gap report</strong> — in the
                          dashboard, and emailed weekly.
                        </li>
                        <li>
                          <strong>Parent feedback</strong> — per-conversation,
                          straight from families.
                        </li>
                        <li>
                          <strong>CSV export</strong> — leads and transcripts,
                          yours to take.
                        </li>
                      </ul>
                      <div className={styles.plate}>
                        <div className={`sheet ${styles.wire}`}>
                          <div className={styles.sheetHead}>
                            <span>Sam · Admin — Transcripts</span>
                            <span className={styles.sheetHeadRight}>
                              Wireframe — real screenshots replace this
                            </span>
                          </div>
                          <div className={styles.wireHeadRow} aria-hidden>
                            <span className={styles.wireWhen}>When</span>
                            <span>Lang</span>
                            <span>Conversation</span>
                            <span>Status</span>
                          </div>
                          <div className={styles.wireRow} aria-hidden>
                            <span
                              className={`${styles.wireBar} ${styles.wireWhen}`}
                            />
                            <span className={styles.wireLang}>ES</span>
                            <span
                              className={styles.wireBar}
                              style={{ width: '78%' }}
                            />
                            <span
                              className={`${styles.wireStatus} ${styles.wireFiled}`}
                            >
                              Filed
                            </span>
                          </div>
                          <div className={styles.wireRow} aria-hidden>
                            <span
                              className={`${styles.wireBar} ${styles.wireWhen}`}
                            />
                            <span className={styles.wireLang}>EN</span>
                            <span
                              className={styles.wireBar}
                              style={{ width: '56%' }}
                            />
                            <span
                              className={`${styles.wireStatus} ${styles.wireFiled}`}
                            >
                              Filed
                            </span>
                          </div>
                          <div className={styles.wireRow} aria-hidden>
                            <span
                              className={`${styles.wireBar} ${styles.wireWhen}`}
                            />
                            <span className={styles.wireLang}>TR</span>
                            <span
                              className={styles.wireBar}
                              style={{ width: '84%' }}
                            />
                            <span
                              className={`${styles.wireStatus} ${styles.wireEsc}`}
                            >
                              Escalated
                            </span>
                          </div>
                          <div className={styles.wireRow} aria-hidden>
                            <span
                              className={`${styles.wireBar} ${styles.wireWhen}`}
                            />
                            <span className={styles.wireLang}>AR</span>
                            <span
                              className={styles.wireBar}
                              style={{ width: '63%' }}
                            />
                            <span
                              className={`${styles.wireStatus} ${styles.wireFiled}`}
                            >
                              Filed
                            </span>
                          </div>
                          <div className={styles.sheetFoot}>
                            We deliberately don&apos;t show example metrics —
                            the dashboard is a tool, not a brag.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </section>

              {/* ── Station 06 — Going live ─────────────────────── */}
              <section className={styles.station} id="going-live">
                <span className={styles.node} aria-hidden />
                <Reveal>
                  <div className={`sec-grid ${styles.stationGrid}`}>
                    <div className={styles.rail}>
                      <div className="mono-label">Step 06 / 07</div>
                      <div className={styles.stationName}>Going live</div>
                      <p className={`margin-note ${styles.railNote}`}>
                        No day-by-day schedule here — I haven&apos;t seen your
                        content yet.
                      </p>
                    </div>
                    <div>
                      <h2 className={`h-1 ${styles.h}`}>
                        How you <em>go live.</em>
                      </h2>
                      <p className={`lede ${styles.bodyLede}`}>
                        Five stations on one slip. We do the setup; you
                        review, approve, and launch.
                      </p>
                      <div className={styles.plate}>
                        <div
                          className={`sheet ${styles.routing} ${styles.indexCard}`}
                        >
                          <div className={styles.sheetHead}>
                            <span>Routing slip — go-live</span>
                            <span className={styles.sheetHeadRight}>
                              SAM-7 / 06
                            </span>
                          </div>
                          <ul className={styles.slipList}>
                            <li>
                              <span className={styles.slipBox} aria-hidden />
                              <div>
                                <span className={styles.slipTitle}>
                                  Kickoff call
                                </span>
                                <span className={styles.slipDesc}>
                                  You hand off handbook, calendars, policies.
                                </span>
                              </div>
                            </li>
                            <li>
                              <span className={styles.slipBox} aria-hidden />
                              <div>
                                <span className={styles.slipTitle}>
                                  Indexing &amp; tuning
                                </span>
                                <span className={styles.slipDesc}>
                                  We run sample questions and flag thin spots.
                                </span>
                              </div>
                            </li>
                            <li>
                              <span className={styles.slipBox} aria-hidden />
                              <div>
                                <span className={styles.slipTitle}>
                                  Review session
                                </span>
                                <span className={styles.slipDesc}>
                                  You flag what should never be said and what
                                  should always escalate.
                                </span>
                              </div>
                            </li>
                            <li>
                              <span className={styles.slipBox} aria-hidden />
                              <div>
                                <span className={styles.slipTitle}>
                                  Launch
                                </span>
                                <span className={styles.slipDesc}>
                                  One line of script on your site.
                                </span>
                              </div>
                            </li>
                            <li>
                              <span className={styles.slipBox} aria-hidden />
                              <div>
                                <span className={styles.slipTitle}>
                                  First-week review
                                </span>
                                <span className={styles.slipDesc}>
                                  We read the first real transcripts together.
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className={styles.note}>
                        How long does that take? It depends on how organized
                        your content is — I&apos;ll tell you honestly on the
                        kickoff call, not in a marketing claim.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </section>

              {/* ── Station 07 — Security ───────────────────────── */}
              <section className={styles.station} id="security">
                <span className={styles.node} aria-hidden />
                <Reveal>
                  <div className={`sec-grid ${styles.stationGrid}`}>
                    <div className={styles.rail}>
                      <div className="mono-label">Step 07 / 07</div>
                      <div className={styles.stationName}>Security</div>
                    </div>
                    <div>
                      <h2 className={`h-1 ${styles.h}`}>
                        Data, FERPA, <em>and security.</em>
                      </h2>
                      <p className={`lede ${styles.bodyLede}`}>
                        Designed for FERPA-aware data handling — and reviewed
                        with your school before anything reaches production.
                      </p>
                      <ul className={styles.ledgerList}>
                        <li>
                          <strong>PII redaction</strong> — inbound messages
                          are scrubbed before they reach logs.
                        </li>
                        <li>
                          <strong>Configurable retention</strong> — default 90
                          days; set to your policy.
                        </li>
                        <li>
                          <strong>Audit log</strong> — admin actions on the
                          record: who exported what, who edited which source,
                          when.
                        </li>
                        <li>
                          <strong>No training on your data</strong> — your
                          content retrieves answers for your school; it never
                          trains shared models.
                        </li>
                        <li>
                          <strong>Hosting</strong> — US-based, with per-tenant
                          isolation.
                        </li>
                      </ul>
                      <p className={styles.note}>
                        <Link href="/security" className="pen-link">
                          Read the full memo → /security
                        </Link>
                      </p>
                      <div className={styles.plate}>
                        <div
                          className={`sheet ${styles.strongbox} ${styles.indexCard}`}
                        >
                          <div className={styles.sheetHead}>
                            <span>Strongbox inventory</span>
                            <span className={styles.sheetHeadRight}>
                              SAM-7 / 07
                            </span>
                          </div>
                          <ul className={styles.checkList}>
                            <li>
                              <span className={styles.check}>✓</span>
                              PII redaction before logs
                            </li>
                            <li>
                              <span className={styles.check}>✓</span>
                              Retention — default 90 days, configurable
                            </li>
                            <li>
                              <span className={styles.check}>✓</span>
                              Audit log of admin actions
                            </li>
                            <li>
                              <span className={styles.check}>✓</span>
                              No training on your data
                            </li>
                            <li>
                              <span className={styles.check}>✓</span>
                              US hosting · per-tenant isolation
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </section>

              {/* ── Terminus ────────────────────────────────────── */}
              <div className={styles.terminus}>
                <span className={styles.terminusNode} aria-hidden />
                <p className="mono-micro">
                  End of procedure SAM-7 — chain of custody complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TearOffSlip
          heading={
            <>
              See it on <em>your school&apos;s</em> content.
            </>
          }
          body="Twenty minutes on a call. A live demo trained on your school's real content. No commitment, no slide deck."
          mailto="mailto:sami@trysam.co?subject=Sam%20Demo%20Request"
          buttonLabel="Book a 20-minute demo"
        />
      </main>

      <ArchiveFooter />
    </>
  );
}
