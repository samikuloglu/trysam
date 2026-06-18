import BrowserMockup from './BrowserMockup';
import LiveChat from './LiveChat';
import TrustStrip from './TrustStrip';
import styles from './HomeHero.module.css';

const SAMPLE_PROMPT = `You are Sam, the AI assistant for "Westbrook Academy" — a sample K–12 school used to demo this product. Westbrook is intentionally generic so it can represent either a private/independent school or a public charter school. Answer prospective-family questions briefly (1–3 sentences) in a warm, professional tone.

Profile:
- K–12 school in the Princeton, NJ area, ~520 students.
- Open houses: Oct 12, Nov 9, Jan 18 (10am–noon). Private tours by appointment.
- Application/enrollment deadline: Jan 31. Decisions by Mar 10.
- Class size avg 16. Six AP offerings.
- In their first quarter using Sam, captured 10,000+ prospect questions.

Off-topic or beyond data: politely route to admissions@westbrookdemo.org.`;

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
              An AI assistant trained on your school. Answers your families
              accurately, around the clock, in their language.
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
                url="westbrookacademy.org"
                bodyClassName={styles.productBody}
              >
                <div className={styles.placeholder}>
                  <h3>Welcome to Westbrook Academy</h3>
                  <p>
                    K–12 school in the Princeton, NJ area. ~520 students. Small
                    classes, strong outcomes, prospective-family inquiries 24/7.
                  </p>
                  <div className={styles.cards}>
                    <div className={`${styles.card} ${styles.cardA}`}>Admissions</div>
                    <div className={`${styles.card} ${styles.cardB}`}>Visit</div>
                    <div className={`${styles.card} ${styles.cardC}`}>Apply</div>
                  </div>
                </div>
                <div className={styles.chatWrap}>
                  <LiveChat
                    greeting="Hi! I'm Sam, your assistant for Westbrook Academy. How can I help?"
                    suggestions={[
                      'What grades do you serve?',
                      'When is the next open house?',
                      'How do I apply?',
                    ]}
                    systemPrompt={SAMPLE_PROMPT}
                    status="Online · answering for Westbrook Academy"
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
