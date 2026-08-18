import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import ChatMockup from '@/components/ChatMockup/ChatMockup';
import { ArrowRight } from '@/components/Icons';
import styles from './SchoolHero.module.css';

interface SchoolHeroProps {
  mailto: string;
}

const heroChat = [
  { role: 'user' as const, text: 'Do you have a chess club?' },
  { role: 'bot' as const, text: "Yes, we do! The Chess Club's purpose is to spread interest across the campus and offer opportunities to enhance skills." },
  { role: 'user' as const, text: 'How often do they meet?' },
  { role: 'bot' as const, text: 'The Chess Club meets weekly.' },
];

export default function SchoolHero({ mailto }: SchoolHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <ScrollReveal className={styles.copy}>
          <div className={styles.badge}>Built for Private Schools &amp; Academies</div>
          <h1 className={styles.title}>
            What if the answer was right there on your website,{' '}
            <span className={styles.titleAccent}>but no one could find it?</span>
          </h1>
          <p className={styles.sub}>
            When families can&apos;t find answers fast, they turn to unverified social
            media groups, call your school, or just give up. SamAI answers families
            instantly &mdash; straight from the source &mdash; so you never lose a
            prospective family to silence.
          </p>
          <a href={mailto} className={styles.btn}>
            Try it today
            <ArrowRight size={18} />
          </a>
          <p className={styles.note}>Free demo &middot; No commitment &middot; We handle everything</p>
        </ScrollReveal>
        <ScrollReveal delay={0.2} direction="right" className={styles.chatWrap}>
          <ChatMockup businessName="Ask SamAI" messages={heroChat} />
        </ScrollReveal>
      </div>
    </section>
  );
}
