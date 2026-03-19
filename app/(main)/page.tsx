'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import StatsBar from '@/components/StatsBar/StatsBar';
import BenefitSection from '@/components/BenefitSection/BenefitSection';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import CTASection from '@/components/CTASection/CTASection';
import ChatMockup from '@/components/ChatMockup/ChatMockup';
import DeviceMockup from '@/components/DeviceMockup/DeviceMockup';
import { Phone, Moon, Clock, Users, GraduationCap, MapPin, Tooth, Sparkles, Scale, ArrowRight } from '@/components/Icons';
import { DEMO_MAILTO } from '@/lib/constants';
import styles from './page.module.css';

const heroChat = [
  { role: 'user' as const, text: 'Hi! Do you have openings for a 3-year-old starting in September?' },
  { role: 'bot' as const, text: 'Hi there! We do have limited availability in our Preschool Room (ages 3–4) for September. Hours are 7:30 AM – 6:00 PM, Mon–Fri. Would you like me to add your child to our tour list?' },
  { role: 'user' as const, text: 'Yes please! What documents do I need?' },
  { role: 'bot' as const, text: 'Great! For enrollment you\'ll need: immunization records, a registration form, and a birth certificate copy. I\'ll send these details to the email you provide. What\'s the best email to reach you?' },
];

const stats = [
  { value: '70%', label: 'of routine questions answered without staff' },
  { value: '24/7', label: 'availability — evenings, weekends, holidays' },
  { value: '5 min', label: 'install — one line of code on your site' },
];

const howItWorksSteps = [
  {
    title: 'Give us your website URL',
    description: 'That\'s all we need to get started. We pull your hours, services, pricing, and policies directly from your site. Want Sam to know something that isn\'t on your website? Just send it over — but it\'s completely optional.',
  },
  {
    title: 'We build your assistant',
    description: 'Sam learns your rates, policies, hours, services — everything. It answers questions exactly the way you would.',
  },
  {
    title: 'One line of code',
    description: 'We add a small chat widget to your website. Customers get instant answers. Your phone stops ringing for the same 10 questions.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <ScrollReveal>
          <div className={styles.heroBadge}>AI-Powered Customer Service for Small Businesses</div>
          <h1 className={styles.heroTitle}>
            Your customers have questions.
            <br />
            <span className={styles.heroTitleAccent}>Sam has the answers.</span>
          </h1>
          <p className={styles.heroSub}>
            Sam is an AI assistant that lives on your website and answers customer questions about your business — accurately, 24/7 — so your team can focus on what matters.
          </p>
          <div className={styles.heroCtas}>
            <a href={DEMO_MAILTO} className={styles.heroBtn}>
              Book a Free Demo
              <ArrowRight size={18} />
            </a>
          </div>
          <p className={styles.heroNote}>Free demo · No commitment · We handle everything</p>
        </ScrollReveal>
        <div className={styles.heroVisual}>
          <ScrollReveal delay={0.2}>
            <DeviceMockup type="phone">
              <ChatMockup businessName="Bright Horizons Daycare" messages={heroChat} />
            </DeviceMockup>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar stats={stats} />

      {/* The Problem */}
      <section className={styles.problemSection}>
        <div className={styles.problemInner}>
          <SectionHeader
            label="The Problem"
            title="You're losing customers while you sleep."
            subtitle="Most people research businesses after hours — when no one's there to answer. Every unanswered question is a missed opportunity."
          />
          <ScrollReveal staggerChildren={0.1} className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}><Phone /></div>
                <h3>Same questions, all day</h3>
                <p>&ldquo;What are your hours?&rdquo; &ldquo;How much does it cost?&rdquo; &ldquo;Do you have availability?&rdquo; Your team answers these on repeat, every single day.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}><Moon /></div>
                <h3>70% browse after hours</h3>
                <p>Most customers research evenings and weekends — when no one is there to respond. By morning, they&rsquo;ve already moved on.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}><Clock /></div>
                <h3>Inquiries slip through</h3>
                <p>Voicemails pile up, emails go unanswered during busy hours. By the time you respond, they&rsquo;ve already chosen your competitor.</p>
              </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefit: Always On */}
      <BenefitSection
        label="Always On"
        title="Answer questions at 2 AM without losing sleep."
        description="Sam works around the clock — nights, weekends, holidays. Your customers get instant, accurate answers the moment they land on your site, no matter when that is."
        visual={
          <ChatMockup
            businessName="Your Business"
            messages={[
              { role: 'user', text: 'Are you open on Saturday?' },
              { role: 'bot', text: 'Yes! We\'re open Saturday 9 AM – 5 PM. Would you like to schedule an appointment?' },
            ]}
          />
        }
      />

      {/* Benefit: Trained on You */}
      <BenefitSection
        label="Trained on You"
        title="Not generic AI. Your business, your answers."
        description="Sam is trained on your specific content — your handbook, your pricing, your policies. It doesn't guess or hallucinate. It answers with the same detail and accuracy your best team member would."
        visual={
          <ChatMockup
            businessName="Your Business"
            messages={[
              { role: 'user', text: 'What\'s your cancellation policy?' },
              { role: 'bot', text: 'You can cancel or reschedule up to 24 hours before your appointment with no charge. Same-day cancellations are subject to a $25 fee. Would you like to make any changes?' },
            ]}
          />
        }
        reversed
      />

      {/* Benefit: Works Everywhere */}
      <BenefitSection
        label="Works Everywhere"
        title="One widget. Every device. Every page."
        description="Sam lives on your website as a small chat bubble. It works beautifully on phones, tablets, and desktops. One line of code and you're live."
        visual={
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-end', flexWrap: 'wrap', justifyContent: 'center' }}>
            <DeviceMockup type="phone">
              <div style={{ padding: '1rem', fontSize: '0.7rem', color: 'var(--muted)', textAlign: 'center' }}>
                <div style={{ fontWeight: 700, color: 'var(--heading)', marginBottom: '0.25rem' }}>Your Website</div>
                Mobile-optimized widget
              </div>
            </DeviceMockup>
            <DeviceMockup type="laptop">
              <div style={{ padding: '1.5rem', fontSize: '0.8rem', color: 'var(--muted)', textAlign: 'center' }}>
                <div style={{ fontWeight: 700, color: 'var(--heading)', marginBottom: '0.25rem' }}>Your Website</div>
                Desktop chat widget in the corner
              </div>
            </DeviceMockup>
          </div>
        }
      />

      {/* Benefit: Capture Leads */}
      <BenefitSection
        label="Capture Leads"
        title="Turn visitors into contacts. Automatically."
        description="Sam captures names, emails, and phone numbers during natural conversations. Every chat is a warm lead delivered to your inbox — not just a website bounce."
        visual={
          <ChatMockup
            businessName="Your Business"
            messages={[
              { role: 'user', text: 'I\'d like to schedule a tour' },
              { role: 'bot', text: 'I\'d love to help you schedule a tour! What\'s the best email to reach you so I can send you available times?' },
              { role: 'user', text: 'sarah@email.com' },
              { role: 'bot', text: 'Perfect! I\'ll have someone reach out to sarah@email.com within 24 hours with available tour times. Looking forward to meeting you!' },
            ]}
          />
        }
        reversed
      />

      {/* Who It's For */}
      <section className={styles.verticalsSection}>
        <div className={styles.verticalsInner}>
          <SectionHeader
            label="Who It's For"
            title="Built for businesses that answer the same questions every day."
            subtitle="Sam is trained on your specific business, so it answers questions exactly the way you would."
          />
          <ScrollReveal staggerChildren={0.1} className={styles.verticalsGrid}>
              <Link href="/daycare" className={styles.verticalCard}>
                <div className={styles.verticalIcon}><Users /></div>
                <h3>Childcare & Daycare Centers</h3>
                <p>Answer parent questions about enrollment, schedules, tuition, and policies — so your staff can focus on the kids.</p>
                <span className={styles.verticalLink}>Learn more →</span>
              </Link>
              <Link href="/k-12" className={styles.verticalCard}>
                <div className={styles.verticalIcon}><GraduationCap /></div>
                <h3>Private Schools (K-12)</h3>
                <p>Convert prospective families browsing your website at night into campus tour bookings and admissions inquiries.</p>
                <span className={styles.verticalLink}>Learn more →</span>
              </Link>
              <Link href="/venues" className={styles.verticalCard}>
                <div className={styles.verticalIcon}><MapPin /></div>
                <h3>Wedding & Event Venues</h3>
                <p>Give couples instant answers about availability, packages, and capacity — before they move on to the next venue.</p>
                <span className={styles.verticalLink}>Learn more →</span>
              </Link>
              <Link href="/dental" className={styles.verticalCard}>
                <div className={styles.verticalIcon}><Tooth /></div>
                <h3>Dental & Orthodontic Practices</h3>
                <p>Answer new patient questions about insurance, pricing, and availability — so your front desk can focus on the patients already in your chairs.</p>
                <span className={styles.verticalLink}>Learn more →</span>
              </Link>
              <Link href="/medical-aesthetics" className={styles.verticalCard}>
                <div className={styles.verticalIcon}><Sparkles /></div>
                <h3>Medical Aesthetics & Skincare</h3>
                <p>Give clients instant answers about treatments, pricing, and financing — before they book a consultation with your competitor.</p>
                <span className={styles.verticalLink}>Learn more →</span>
              </Link>
              <Link href="/law" className={styles.verticalCard}>
                <div className={styles.verticalIcon}><Scale /></div>
                <h3>Law Firms</h3>
                <p>Capture potential clients searching for legal help at 2 AM — when your office is closed but their problem feels urgent.</p>
                <span className={styles.verticalLink}>Learn more →</span>
              </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks steps={howItWorksSteps} />

      {/* Results / Social Proof */}
      <section className={styles.resultsSection}>
        <div className={styles.resultsInner}>
          <SectionHeader
            label="Results"
            title="Built for real impact, not just demos."
          />
          <ScrollReveal staggerChildren={0.1} className={styles.resultsGrid}>
              <div className={styles.resultCard}>
                <div className={styles.resultValue}>70%</div>
                <div className={styles.resultLabel}>of routine questions handled without staff involvement</div>
              </div>
              <div className={styles.resultCard}>
                <div className={styles.resultValue}>5 min</div>
                <div className={styles.resultLabel}>install — one line of code on your site</div>
              </div>
              <div className={styles.resultCard}>
                <div className={styles.resultValue}>24/7</div>
                <div className={styles.resultLabel}>availability means you never miss an after-hours lead</div>
              </div>
          </ScrollReveal>
          <p className={styles.resultsNote}>
            Based on early deployments. We&rsquo;re a young company — we share real numbers, not inflated marketing claims.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="See what Sam looks like for your business."
        subtitle="Book a 15-minute call. We'll show you a live demo built with your real business info — no commitment."
        buttonText="Book Your Free Demo"
        buttonHref={DEMO_MAILTO}
        subText="Free demo · No commitment · We handle everything"
        variant="teal"
      />
    </>
  );
}
