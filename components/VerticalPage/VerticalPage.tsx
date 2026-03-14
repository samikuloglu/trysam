'use client';

import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import ChatMockup from '@/components/ChatMockup/ChatMockup';
import StatsBar from '@/components/StatsBar/StatsBar';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import CTASection from '@/components/CTASection/CTASection';
import { ArrowRight, Phone, Moon, Clock, Bolt, Building, Heart, Clipboard } from '@/components/Icons';
import type { VerticalData } from '@/data/verticals';
import styles from './VerticalPage.module.css';

const iconMap: Record<string, React.ReactNode> = {
  phone: <Phone />,
  moon: <Moon />,
  clock: <Clock />,
  bolt: <Bolt />,
  building: <Building />,
  heart: <Heart />,
  clipboard: <Clipboard />,
};

interface VerticalPageProps {
  data: VerticalData;
}

export default function VerticalPage({ data }: VerticalPageProps) {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <ScrollReveal>
          <div className={styles.heroBadge}>{data.badge}</div>
          <h1 className={styles.heroTitle}>
            {data.title} <span className={styles.heroTitleAccent}>{data.titleAccent}</span>
          </h1>
          <p className={styles.heroSub}>{data.subtitle}</p>
          <a href={data.mailto} className={styles.heroBtn}>
            See It In Action
            <ArrowRight size={18} />
          </a>
          <p className={styles.heroNote}>Free demo · No commitment · Set up in one week</p>
        </ScrollReveal>
        <div className={styles.chatWrapper}>
          <ScrollReveal delay={0.2}>
            <ChatMockup businessName={data.chatBusinessName} messages={data.chatMessages} />
          </ScrollReveal>
        </div>
      </section>

      {/* Pain Points */}
      <section className={styles.painSection}>
        <div className={styles.painInner}>
          <SectionHeader
            label="The Problem"
            title={data.painTitle}
            subtitle={data.painSubtitle}
          />
          <div className={styles.painGrid}>
            {data.painCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.painCard}>
                  <div className={styles.painIcon}>
                    {iconMap[card.icon] || <Phone />}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks steps={data.howItWorksSteps} />

      {/* Stats */}
      <StatsBar stats={data.stats} />

      {/* Final CTA */}
      <CTASection
        title={data.ctaTitle}
        subtitle={data.ctaSubtitle}
        buttonText="Book Your Free Demo"
        buttonHref={data.mailto}
        variant="teal"
      />
    </>
  );
}
