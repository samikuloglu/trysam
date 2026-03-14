'use client';

import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import ChatMockup from '@/components/ChatMockup/ChatMockup';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import CTASection from '@/components/CTASection/CTASection';
import { ArrowRight, MessageCircle, Zap, Globe, Shield, Palette, BarChart, UserPlus, Code, Smartphone } from '@/components/Icons';
import { DEMO_MAILTO } from '@/lib/constants';
import styles from './page.module.css';

const features = [
  { icon: <MessageCircle />, title: 'Natural Conversations', desc: 'Sam chats like a real team member — warm, specific, and helpful. Not a robotic FAQ bot.' },
  { icon: <Zap />, title: 'Instant Responses', desc: 'Customers get accurate answers in seconds, not hours. No waiting for callbacks or email replies.' },
  { icon: <Shield />, title: 'Trained on Your Business', desc: 'Sam only answers from your approved content. It doesn\'t guess, hallucinate, or go off-script.' },
  { icon: <UserPlus />, title: 'Lead Capture', desc: 'Sam naturally collects names, emails, and phone numbers during conversations. Every chat is a warm lead.' },
  { icon: <Globe />, title: 'Works 24/7', desc: 'Nights, weekends, holidays. Sam never sleeps, never calls in sick, never puts anyone on hold.' },
  { icon: <BarChart />, title: 'Conversation Analytics', desc: 'See what customers are asking, which questions come up most, and where they drop off.' },
];

const integrations = [
  { name: 'WordPress', icon: '🌐' },
  { name: 'Shopify', icon: '🛍️' },
  { name: 'Squarespace', icon: '◼️' },
  { name: 'Wix', icon: '✨' },
  { name: 'Custom HTML', icon: '🔧' },
];

const howItWorksSteps = [
  { title: 'Give us your website URL', description: 'That\'s all we need to get started. We pull your hours, services, pricing, and policies directly from your site. Want Sam to know something that isn\'t on your website? Just send it over — but it\'s completely optional.' },
  { title: 'We customize your widget', description: 'We match Sam\'s appearance to your brand — colors, tone, greeting message. You approve before it goes live.' },
  { title: 'Paste one line of code', description: 'Add a single script tag to your site. Sam appears as a chat bubble in the corner. That\'s it — you\'re live.' },
];

export default function WidgetPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <ScrollReveal>
          <div className={styles.heroBadge}>The Sam Widget</div>
          <h1 className={styles.heroTitle}>
            A chat widget that actually knows{' '}
            <span className={styles.heroTitleAccent}>your business.</span>
          </h1>
          <p className={styles.heroSub}>
            Not a generic chatbot. Sam is trained on your specific content — your policies, your pricing, your hours — and answers questions exactly the way you would.
          </p>
          <a href={DEMO_MAILTO} className={styles.heroBtn}>
            Ask Sam About Pricing
            <ArrowRight size={18} />
          </a>
          <p className={styles.heroNote}>Custom-built for your business · Live in one week</p>
        </ScrollReveal>
        <div className={styles.chatWrapper}>
          <ScrollReveal delay={0.2}>
            <ChatMockup
              businessName="Your Business"
              messages={[
                { role: 'user', text: 'What services do you offer?' },
                { role: 'bot', text: 'We offer three main services: residential cleaning (weekly, bi-weekly, or monthly), deep cleaning for move-in/move-out, and commercial office cleaning. Would you like details on any of these?' },
                { role: 'user', text: 'How do I book a cleaning?' },
                { role: 'bot', text: 'You can book directly through our website or I can help you right now! I just need your address, preferred date, and the type of cleaning. What works best for you?' },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresInner}>
          <SectionHeader
            label="Features"
            title="Everything you need. Nothing you don't."
            subtitle="Sam is designed to be simple, accurate, and genuinely useful for small businesses."
          />
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className={styles.customSection}>
        <div className={styles.customInner}>
          <ScrollReveal direction="left">
            <div className={styles.customText}>
              <h3>Customization</h3>
              <h2>Matches your brand. Speaks your tone.</h2>
              <p>
                Sam isn&rsquo;t a one-size-fits-all chatbot. We customize the widget colors, greeting message, and conversational tone to match your brand. It feels like a natural part of your website, not a bolted-on tool.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className={styles.customVisual}>
              <div className={styles.colorSwatch} style={{ background: '#0F6E56', color: 'white' }}>Teal</div>
              <div className={styles.colorSwatch} style={{ background: '#1B2A4A', color: 'white' }}>Navy</div>
              <div className={styles.colorSwatch} style={{ background: '#7C3AED', color: 'white' }}>Purple</div>
              <div className={styles.colorSwatch} style={{ background: '#DC2626', color: 'white' }}>Red</div>
              <div className={styles.colorSwatch} style={{ background: '#F59E0B', color: 'white' }}>Amber</div>
              <div className={styles.colorSwatch} style={{ background: '#059669', color: 'white' }}>Green</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Integrations */}
      <section className={styles.integrationsSection}>
        <SectionHeader
          label="Integrations"
          title="Works with any website."
          subtitle="One line of code. That's all it takes to add Sam to your site."
        />
        <div className={styles.integrationsGrid}>
          {integrations.map((int, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className={styles.integrationCard}>
                <div className={styles.integrationIcon}>{int.icon}</div>
                {int.name}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks steps={howItWorksSteps} />

      {/* Final CTA */}
      <CTASection
        title="Curious about pricing? Ask Sam."
        subtitle="We don't list pricing on our website because every business is different. Ask Sam — it knows our plans inside and out."
        buttonText="Ask Sam About Pricing"
        buttonHref={DEMO_MAILTO}
        variant="teal"
      />
    </>
  );
}
