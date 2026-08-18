import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/site/SiteNav';
import SiteFooter from '@/components/site/SiteFooter';
import CTABanner from '@/components/site/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How SamAI Works — SamAI',
  description:
    'How SamAI ingests your school content, answers a question, escalates when it doesn\u2019t know, and what you see on your end.',
};

export default function HowItWorksPage() {
  return (
    <>
      <SiteNav variant="how" />

      <section className={styles.hero}>
        <div className="frame">
          <div className={styles.heroEyebrow}>How it works</div>
          <h1 className={styles.heroH}>
            From your handbook to a parent&apos;s question,{' '}
            <em>traceable end-to-end.</em>
          </h1>
          <p className={styles.heroLede}>
            SamAI isn&apos;t a generic LLM pointed at your website. It&apos;s a
            retrieval pipeline built from scratch around what schools
            actually need: grounded answers, source citations, escalation when
            confidence is low, and a transcript of every conversation. Here&apos;s
            what that looks like in practice.
          </p>
        </div>
      </section>

      <section className={`section ${styles.sec}`}>
        <div className="frame">
          <div className={styles.row}>
            <div className={styles.rowText}>
              <div className={styles.step}>01</div>
              <h2 className="h-1">What SamAI needs from your school <em>to get started.</em></h2>
              <p className="lede">
                Most schools already have everything SamAI needs. We start from
                the content you&apos;ve already written.
              </p>
              <ul className={styles.list}>
                <li>Your school website (SamAI crawls and re-crawls automatically)</li>
                <li>Your admissions or enrollment handbook (PDF is fine)</li>
                <li>Your academic and admissions calendars</li>
                <li>Policy documents you want answered: tuition sheets, lottery rules, dress code, transportation, FA, etc.</li>
                <li>Optional: an FAQ document you wish your front office could just hand parents</li>
              </ul>
              <p className={styles.note}>
                Setup time scales with how organized your content is. Schools that already keep an internal FAQ are typically live in under a week.
              </p>
            </div>
            <div className={styles.rowVisual}>
              <div className={styles.assetCard}>
                <div className={styles.assetLabel}>Sources SamAI ingests</div>
                <ul className={styles.assetList}>
                  <li><span>·</span> yourschool.org <em>(crawled)</em></li>
                  <li><span>·</span> Admissions handbook.pdf</li>
                  <li><span>·</span> 2026–27 Academic calendar</li>
                  <li><span>·</span> Tuition &amp; aid sheet</li>
                  <li><span>·</span> Transportation map</li>
                  <li><span>·</span> Lottery rules &amp; sibling preference</li>
                  <li><span>·</span> FAQ document</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section section-soft ${styles.sec}`}>
        <div className="frame">
          <div className={`${styles.row} ${styles.rowReverse}`}>
            <div className={styles.rowText}>
              <div className={styles.step}>02</div>
              <h2 className="h-1">How SamAI <em>learns your school.</em></h2>
              <p className="lede">
                We don&apos;t just point an LLM at your website and call it a
                day. The retrieval pipeline was built from scratch — no
                off-the-shelf framework — because the off-the-shelf options
                hallucinate tuition figures.
              </p>
              <ol className={styles.steps}>
                <li>
                  <strong>Crawl.</strong> SamAI crawls your website and the documents you&apos;ve uploaded. Every page becomes a source.
                </li>
                <li>
                  <strong>Chunk.</strong> Long pages are split semantically — by section, not by character count — so a tuition table doesn&apos;t get cut in half.
                </li>
                <li>
                  <strong>Embed.</strong> Each chunk is embedded and indexed with its source URL preserved.
                </li>
                <li>
                  <strong>Manual review.</strong> Before you go live, we walk through edge cases — what should happen if a parent asks about something not in your handbook, what should never be answered, what should always escalate.
                </li>
                <li>
                  <strong>Re-index.</strong> When you update your website or upload new policies, SamAI re-indexes automatically. No re-training, no downtime.
                </li>
              </ol>
            </div>
            <div className={styles.rowVisual}>
              <div className={styles.pipeline}>
                {['Crawl', 'Chunk', 'Embed', 'Review', 'Re-index'].map((s, i) => (
                  <div key={s} className={styles.pipeStep}>
                    <span className={styles.pipeNum}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.pipeLabel}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.sec}`}>
        <div className="frame">
          <div className={styles.row}>
            <div className={styles.rowText}>
              <div className={styles.step}>03</div>
              <h2 className="h-1">How SamAI <em>answers a question.</em></h2>
              <p className="lede">
                Every answer is retrieval-augmented and source-attributed. If SamAI isn&apos;t confident, it says so — instead of guessing.
              </p>
              <ol className={styles.steps}>
                <li><strong>Parent asks a question</strong> in any language SamAI supports.</li>
                <li><strong>SamAI retrieves</strong> the most relevant chunks from your indexed content.</li>
                <li><strong>SamAI answers</strong> in the parent&apos;s language, citing the source page the answer came from.</li>
                <li><strong>If confidence is low</strong>, SamAI declines politely and offers to escalate to your team.</li>
              </ol>
              <p className={styles.note}>
                This is the part that earns the no-hallucinations claim. SamAI can only answer from sources you&apos;ve approved. It cannot make up tuition figures, application deadlines, or policies that don&apos;t exist in your content.
              </p>
            </div>
            <div className={styles.rowVisual}>
              <div className={styles.qaCard}>
                <div className={styles.qaQ}>
                  &ldquo;How much is tuition for 7th grade?&rdquo;
                </div>
                <div className={styles.qaSrc}>
                  <span>Source:</span> Tuition &amp; aid sheet, p. 2
                </div>
                <div className={styles.qaA}>
                  SamAI quotes the Middle School band, notes the sibling discount, and links the family to the financial aid application.
                </div>
                <div className={styles.qaCite}>
                  Cited: <em>tuition-2026.pdf · oakridge.org/admissions/aid</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section section-soft ${styles.sec}`}>
        <div className="frame">
          <div className={`${styles.row} ${styles.rowReverse}`}>
            <div className={styles.rowText}>
              <div className={styles.step}>04</div>
              <h2 className="h-1">When SamAI doesn&apos;t know, <em>or gets it wrong.</em></h2>
              <p className="lede">
                The fear &mdash; &ldquo;what if this embarrasses our school?&rdquo; &mdash; is the right fear. Here&apos;s how we address it.
              </p>
              <ul className={styles.list}>
                <li><strong>Polite decline.</strong> If SamAI&apos;s confidence is low, it says so plainly and offers to route the parent to your team.</li>
                <li><strong>Escalation routing.</strong> Configurable handoff to email or your front office, with the parent&apos;s question and contact info attached.</li>
                <li><strong>Knowledge gap reporting.</strong> Weekly email of every question SamAI couldn&apos;t answer, so you know what&apos;s missing from your site.</li>
                <li><strong>Transcript review.</strong> Every conversation is browsable. You can search, flag, and correct &mdash; the corrections feed back into SamAI&apos;s sources.</li>
              </ul>
            </div>
            <div className={styles.rowVisual}>
              <div className={styles.escCard}>
                <div className={styles.escHead}>Weekly knowledge gap report</div>
                <ul className={styles.escList}>
                  <li>
                    <span className={styles.escCount}>14×</span>
                    <span>&ldquo;Do you offer after-care?&rdquo;</span>
                    <span className={styles.escTag}>Add to handbook</span>
                  </li>
                  <li>
                    <span className={styles.escCount}>9×</span>
                    <span>&ldquo;Bus from East Orange?&rdquo;</span>
                    <span className={styles.escTag}>Add to transport map</span>
                  </li>
                  <li>
                    <span className={styles.escCount}>6×</span>
                    <span>&ldquo;Lottery for kindergarten?&rdquo;</span>
                    <span className={styles.escTag}>Update FAQ</span>
                  </li>
                </ul>
                <div className={styles.escNote}>Example report. Real reports use your school&apos;s data.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.sec}`}>
        <div className="frame">
          <div className={styles.row}>
            <div className={styles.rowText}>
              <div className={styles.step}>05</div>
              <h2 className="h-1">What you see <em>on your end.</em></h2>
              <p className="lede">
                Your admin dashboard. Browse every conversation, manage sources, see what your families are actually asking week-over-week.
              </p>
              <ul className={styles.list}>
                <li>Conversation transcripts with full search</li>
                <li>Source management — upload, refresh, retire documents</li>
                <li>Knowledge gap report (also emailed weekly)</li>
                <li>Per-conversation thumbs-up / thumbs-down feedback from parents</li>
                <li>CSV export of leads and transcripts</li>
              </ul>
            </div>
            <div className={styles.rowVisual}>
              <div className={styles.dash}>
                <div className={styles.dashHead}>
                  <span>SamAI · Admin</span>
                  <span className={styles.dashTag}>Wireframe placeholder</span>
                </div>
                <div className={styles.dashGrid}>
                  <div className={styles.dashTile}>
                    <div className={styles.dashLabel}>Conversations this week</div>
                    <div className={styles.dashBar}><span style={{ width: '60%' }} /></div>
                    <div className={styles.dashSub}>Replaced with your data</div>
                  </div>
                  <div className={styles.dashTile}>
                    <div className={styles.dashLabel}>Top questions</div>
                    <div className={styles.dashBar}><span style={{ width: '85%' }} /></div>
                    <div className={styles.dashBar}><span style={{ width: '70%' }} /></div>
                    <div className={styles.dashBar}><span style={{ width: '45%' }} /></div>
                  </div>
                  <div className={styles.dashTile}>
                    <div className={styles.dashLabel}>Knowledge gaps</div>
                    <div className={styles.dashBar}><span style={{ width: '30%' }} /></div>
                    <div className={styles.dashSub}>Replaced with your data</div>
                  </div>
                  <div className={styles.dashTile}>
                    <div className={styles.dashLabel}>Source health</div>
                    <div className={styles.dashBar}><span style={{ width: '95%' }} /></div>
                    <div className={styles.dashSub}>Replaced with your data</div>
                  </div>
                </div>
                <div className={styles.dashFoot}>
                  Real screenshots replace this on the production site. We deliberately don&apos;t show example metrics here &mdash; the dashboard is a tool, not a brag.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section section-soft ${styles.sec}`}>
        <div className="frame">
          <div className={`${styles.row} ${styles.rowReverse}`}>
            <div className={styles.rowText}>
              <div className={styles.step}>06</div>
              <h2 className="h-1">How you <em>go live.</em></h2>
              <p className="lede">
                One week, end-to-end, for schools that already have their content organized. We do the setup; you review and approve.
              </p>
              <ol className={styles.timeline}>
                <li>
                  <strong>Day 1 &mdash; Kickoff.</strong> 30-minute call. You hand off your handbook, calendar, and policy documents. We start the crawl.
                </li>
                <li>
                  <strong>Days 2&ndash;4 &mdash; Indexing &amp; tuning.</strong> We ingest, chunk, and tune. We run sample questions across your content and flag any thin areas.
                </li>
                <li>
                  <strong>Day 5 &mdash; Review.</strong> We walk you through the dashboard and a transcript of test conversations. You flag anything that should never be said and anything that should always escalate.
                </li>
                <li>
                  <strong>Day 6&ndash;7 &mdash; Launch.</strong> Single line of script on your site. SamAI is live. You watch the first day of real conversations from the dashboard.
                </li>
              </ol>
              <p className={styles.note}>
                Schools with messier content take longer. We&apos;ll tell you on the kickoff call which week you&apos;re in.
              </p>
            </div>
            <div className={styles.rowVisual}>
              <div className={styles.timelineCard}>
                {['Kickoff', 'Indexing', 'Tuning', 'Review', 'Launch', 'Live'].map((d, i) => (
                  <div key={d} className={styles.tlDay}>
                    <div className={styles.tlDayNum}>Day {i + 1}</div>
                    <div className={styles.tlDayLabel}>{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.sec}`}>
        <div className="frame">
          <div className={styles.row}>
            <div className={styles.rowText}>
              <div className={styles.step}>07</div>
              <h2 className="h-1">Data, FERPA, <em>and security.</em></h2>
              <p className="lede">
                SamAI is designed for FERPA-aware data handling. Final compliance review with your school before any production deployment.
              </p>
              <ul className={styles.list}>
                <li><strong>PII redaction</strong> on inbound messages before they hit logs.</li>
                <li><strong>Configurable retention.</strong> Default 90 days; configurable down or up to your policy.</li>
                <li><strong>Audit log</strong> of admin actions: who exported what, who edited what source, when.</li>
                <li><strong>No training on your data.</strong> Your school&apos;s content is used to retrieve answers for your school. It&apos;s never used to train shared models.</li>
                <li><strong>Hosting.</strong> US-based. Per-tenant data isolation.</li>
              </ul>
              <p className={styles.note}>
                Full security details live on{' '}
                <Link href="/security" className={styles.inlineLink}>
                  /security
                </Link>{' '}
                (in progress &mdash; ask us for the current write-up if you need it for IT review).
              </p>
            </div>
            <div className={styles.rowVisual}>
              <div className={styles.secCard}>
                <ul className={styles.secList}>
                  <li><span className={styles.secCheck}>✓</span> PII redaction</li>
                  <li><span className={styles.secCheck}>✓</span> Configurable retention (default 90d)</li>
                  <li><span className={styles.secCheck}>✓</span> Admin audit log</li>
                  <li><span className={styles.secCheck}>✓</span> No training on your data</li>
                  <li><span className={styles.secCheck}>✓</span> Per-tenant data isolation</li>
                  <li><span className={styles.secCheck}>✓</span> US-based hosting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading={
          <>
            See it on <em>your school&apos;s</em> content.
          </>
        }
        body="20 minutes on a call. We'll show you a live demo trained on your school's real info. No commitment, no slide deck."
        buttonHref="mailto:sami@trysam.co?subject=SamAI%20Demo%20Request"
        buttonLabel="Book a 20-minute demo"
      />

      <SiteFooter />
    </>
  );
}
