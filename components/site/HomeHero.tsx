import BrowserMockup from './BrowserMockup';
import LiveChat from './LiveChat';
import TrustStrip from './TrustStrip';
import styles from './HomeHero.module.css';

const SAMPLE_PROMPT = `You are Sam, the AI assistant for "Bright Horizons Daycare" — a sample family-owned childcare center in Maplewood, NJ used to demo this product. Answer parent questions briefly (1–3 sentences) in a warm, professional tone.

Profile:
- Hours: Mon–Fri 7:30am–6pm. Closed weekends and federal holidays.
- Programs: Infant (6wk–18mo), Toddler (18mo–3y), Preschool (3y–5y), Pre-K.
- Tuition (full-time, monthly): Infant $1,950 / Toddler $1,750 / Preschool $1,450 / Pre-K $1,300.
- Enrollment: immunization records, registration form, birth certificate copy, $250 deposit.
- Infant room has a 3-month waitlist; other rooms rolling.
- Tours: Tues & Thurs 10am, or by appointment.
- Lunch + 2 snacks included. Allergy-friendly options.
- Curriculum: Reggio Emilia inspired, outdoor play.
- Director: Maria Chen.

Off-topic or beyond data: politely route to hello@brighthorizonsdemo.com.`;

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className="frame">
        <div className={styles.grid}>
          <div className={styles.left}>
            <h1 className={styles.h1}>
              Meet <em>Sam</em>
            </h1>
            <div className={styles.divider} />
            <p className={styles.lede}>
              An intelligent AI assistant designed to transform how your customers
              interact with your business.
            </p>
            <div className={styles.ctaRow}>
              <a
                href="mailto:sami@trysam.co?subject=Sam%20Demo%20Request"
                className="btn btn-on-dark"
              >
                Book a free demo <span className="arr">→</span>
              </a>
            </div>
            <p className={styles.micro}>15 min · No commitment · Live in 1 week</p>
          </div>
          <div className={styles.right}>
            <div className={styles.product}>
              <BrowserMockup
                url="brighthorizonsdaycare.com"
                bodyClassName={styles.productBody}
              >
                <div className={styles.placeholder}>
                  <h3>Welcome to Bright Horizons Daycare</h3>
                  <p>
                    Family-owned childcare in Maplewood, NJ. Reggio-inspired
                    curriculum, six classrooms, twenty years of warmth.
                  </p>
                  <div className={styles.cards}>
                    <div className={`${styles.card} ${styles.cardA}`}>Programs</div>
                    <div className={`${styles.card} ${styles.cardB}`}>Tuition</div>
                    <div className={`${styles.card} ${styles.cardC}`}>Tour</div>
                  </div>
                </div>
                <div className={styles.chatWrap}>
                  <LiveChat
                    greeting="Hi! I'm Sam, your assistant for Bright Horizons Daycare. How can I help today?"
                    suggestions={[
                      'How much is tuition?',
                      'Do you have openings?',
                      'When can we tour?',
                    ]}
                    systemPrompt={SAMPLE_PROMPT}
                    status="Online · answering for Bright Horizons"
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
