'use client';

import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import StatsBar from '@/components/StatsBar/StatsBar';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import ChatMockup from '@/components/ChatMockup/ChatMockup';
import DeviceMockup from '@/components/DeviceMockup/DeviceMockup';
import { Phone, Moon, Clock, MapPin, Heart, GraduationCap, Building, WhatsApp, Mail } from '@/components/Icons';
import styles from './page.module.css';

// TRANSLATE: Generic Turkish chat conversation for hero mockup
const heroChat = [
  { role: 'user' as const, text: 'Merhaba, fiyat listenizi alabilir miyim?' },
  { role: 'bot' as const, text: 'Merhaba! Tabii ki. Hangi hizmetimizle ilgileniyorsunuz? Size hemen detaylı bilgi ve güncel fiyatlarımızı ileteyim.' },
  { role: 'user' as const, text: 'Danışmanlık paketleriniz hakkında bilgi istiyorum.' },
  { role: 'bot' as const, text: 'Danışmanlık paketlerimiz aylık ve yıllık seçeneklerle sunulmaktadır. Size özel bir teklif hazırlamamı ister misiniz? E-posta adresinizi paylaşırsanız detayları hemen gönderebilirim.' },
];

const stats = [
  // TRANSLATE: 70% of routine questions answered without staff
  { value: '%70', label: 'rutin soru, ekibinize gerek kalmadan yanıtlanır' },
  // TRANSLATE: 24/7 availability — evenings, weekends, holidays
  { value: '7/24', label: 'erişim — akşamlar, hafta sonları, tatiller' },
];

const howItWorksSteps = [
  {
    /* TRANSLATE: Send us your info */
    title: 'Bilgilerinizi gönderin',
    /* TRANSLATE: Your website, handbook, pricing, FAQ — anything customers ask about. We train Sam on your specific business. */
    description: 'Web siteniz, fiyat listeniz, SSS, broşürleriniz — müşterilerinizin sorduğu her şey. Sam\'i sizin işletmenize özel eğitiyoruz.',
  },
  {
    /* TRANSLATE: We build your assistant */
    title: 'Asistanınızı biz kurarız',
    /* TRANSLATE: Sam learns your rates, policies, hours, services — everything. It answers questions exactly the way you would. */
    description: 'Sam fiyatlarınızı, politikalarınızı, çalışma saatlerinizi ve hizmetlerinizi öğrenir. Soruları tıpkı sizin gibi yanıtlar.',
  },
  {
    /* TRANSLATE: One line of code */
    title: 'Tek satır kod',
    /* TRANSLATE: We add a small chat widget to your website. Customers get instant answers. Your phone stops ringing for the same 10 questions. */
    description: 'Web sitenize küçük bir sohbet penceresi ekliyoruz. Müşterileriniz anında yanıt alır. Aynı 10 soruyu tekrar tekrar yanıtlamak zorunda kalmazsınız.',
  },
];

export default function TurkishLandingPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <ScrollReveal>
            {/* TRANSLATE: AI-Powered Customer Service for Turkish Businesses */}
            <div className={styles.heroBadge}>Türk İşletmeleri İçin Yapay Zeka Destekli Müşteri Hizmeti</div>
            <h1 className={styles.heroTitle}>
              {/* TRANSLATE: Your customers have questions. */}
              Müşterilerinizin soruları var.
              <br />
              {/* TRANSLATE: Sam has the answers. */}
              <span className={styles.heroTitleAccent}>Sam yanıtlıyor.</span>
            </h1>
            {/* TRANSLATE: Sam is an AI assistant that lives on your website and answers customer questions about your business — accurately, 24/7 — so your team can focus on what matters. */}
            <p className={styles.heroSub}>
              Sam, web sitenizde yaşayan ve işletmenizle ilgili müşteri sorularını 7/24 doğru şekilde yanıtlayan bir yapay zeka asistanıdır. Ekibiniz önemli işlere odaklanabilir.
            </p>
            <div className={styles.heroCtas}>
              <a
                href="https://wa.me/PLACEHOLDER_PHONE?text=PLACEHOLDER_MESSAGE"
                className={`${styles.heroBtn} ${styles.heroBtnWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp size={20} />
                {/* TRANSLATE: Chat on WhatsApp */}
                WhatsApp ile Yazın
              </a>
              <a
                href="mailto:PLACEHOLDER_EMAIL?subject=Sam%20Demo%20Talebi"
                className={`${styles.heroBtn} ${styles.heroBtnEmail}`}
              >
                <Mail size={18} />
                {/* TRANSLATE: Send Email */}
                E-posta Gönderin
              </a>
            </div>
            {/* TRANSLATE: Or try the chat widget in the corner → */}
            <p className={styles.heroNote}>Veya sağ alttaki sohbet penceresini deneyin →</p>
          </ScrollReveal>
        </div>
        <div className={styles.heroVisual}>
          <ScrollReveal delay={0.2}>
            <DeviceMockup type="phone">
              <ChatMockup businessName="İşletmeniz" messages={heroChat} />
            </DeviceMockup>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar stats={stats} />

      {/* The Problem */}
      <section className={styles.problemSection}>
        <div className={styles.problemInner}>
          {/* TRANSLATE: label="The Problem" title="You're losing customers while you sleep." subtitle="Most people research businesses after hours — when no one's there to answer. Every unanswered question is a missed opportunity." */}
          <SectionHeader
            label="Sorun"
            title="Siz uyurken müşteri kaybediyorsunuz."
            subtitle="Çoğu kişi mesai saatleri dışında araştırma yapar — kimsenin yanıt veremediği saatlerde. Yanıtsız kalan her soru, kaçırılmış bir fırsattır."
          />
          <ScrollReveal staggerChildren={0.1} className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}><Phone /></div>
              {/* TRANSLATE: Same questions, all day */}
              <h3>Her gün aynı sorular</h3>
              {/* TRANSLATE: "What are your hours?" "How much does it cost?" "Do you have availability?" Your team answers these on repeat, every single day. */}
              <p>&ldquo;Çalışma saatleriniz nedir?&rdquo; &ldquo;Fiyatlarınız ne?&rdquo; &ldquo;Müsaitlik var mı?&rdquo; Ekibiniz her gün aynı soruları tekrar tekrar yanıtlıyor.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}><Moon /></div>
              {/* TRANSLATE: 70% browse after hours */}
              <h3>Mesai dışı saatlerde gelen müşteriler</h3>
              {/* TRANSLATE: Most customers research evenings and weekends — when no one is there to respond. By morning, they've already moved on. */}
              <p>Müşterilerin çoğu akşam saatlerinde ve hafta sonlarında araştırma yapar. Sabaha kadar yanıt gelmezse, çoktan rakibinize gitmiş olurlar.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}><Clock /></div>
              {/* TRANSLATE: WhatsApp messages pile up */}
              <h3>WhatsApp mesajları birikir</h3>
              {/* TRANSLATE: Messages pile up, inquiries go unanswered during busy hours. By the time you respond, they've already chosen your competitor. */}
              <p>Yoğun saatlerde mesajlar birikir, sorular yanıtsız kalır. Siz dönüş yaptığınızda, müşteri çoktan başka birini seçmiş olur.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who It's For — Turkish Verticals */}
      <section className={styles.verticalsSection}>
        <div className={styles.verticalsInner}>
          {/* TRANSLATE: label="Who It's For" title="Built for businesses that answer the same questions every day." subtitle="Sam is trained on your specific business, so it answers questions exactly the way you would." */}
          <SectionHeader
            label="Kimler İçin"
            title="Her gün aynı soruları yanıtlayan işletmeler için."
            subtitle="Sam, sizin işletmenize özel eğitilir. Soruları tıpkı sizin yanıtlayacağınız gibi yanıtlar."
          />
          <ScrollReveal staggerChildren={0.1} className={styles.verticalsGrid}>
            <div className={styles.verticalCard}>
              <div className={styles.verticalIcon}><MapPin /></div>
              {/* TRANSLATE: Tourism & Hospitality */}
              <h3>Turizm &amp; Otelcilik</h3>
              {/* TRANSLATE: Answer guest questions about rooms, rates, amenities, and local attractions — in any language, any time of day. */}
              <p>Odalar, fiyatlar, olanaklar ve yerel gezilecek yerler hakkında misafir sorularını her dilde, günün her saatinde yanıtlayın.</p>
            </div>
            <div className={styles.verticalCard}>
              <div className={styles.verticalIcon}><Heart /></div>
              {/* TRANSLATE: Medical Tourism & Private Clinics */}
              <h3>Medikal Turizm &amp; Özel Klinikler</h3>
              {/* TRANSLATE: Respond to international patient inquiries about procedures, pricing, and travel logistics — 24/7, in their language. */}
              <p>Uluslararası hasta sorularını prosedürler, fiyatlandırma ve seyahat detayları hakkında 7/24, kendi dillerinde yanıtlayın.</p>
            </div>
            <div className={styles.verticalCard}>
              <div className={styles.verticalIcon}><GraduationCap /></div>
              {/* TRANSLATE: Private Education Institutions */}
              <h3>Özel Eğitim Kurumları</h3>
              {/* TRANSLATE: Convert prospective families browsing your website into campus tour bookings and enrollment inquiries. */}
              <p>Web sitenizi inceleyen velileri kampüs turu rezervasyonlarına ve kayıt başvurularına dönüştürün.</p>
            </div>
            <div className={styles.verticalCard}>
              <div className={styles.verticalIcon}><Building /></div>
              {/* TRANSLATE: Real Estate */}
              <h3>Gayrimenkul</h3>
              {/* TRANSLATE: Answer buyer and renter questions about listings, pricing, availability, and viewing appointments — without tying up your agents. */}
              <p>Alıcı ve kiracı sorularını ilanlar, fiyatlar, müsaitlik ve görüşme randevuları hakkında yanıtlayın — danışmanlarınızı meşgul etmeden.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      {/* TRANSLATE: label="How It Works" title="Ready quickly. We handle everything." subtitle="You just approve the final result." */}
      <HowItWorks
        label="Nasıl Çalışır"
        title="Hızlıca hazır. Biz her şeyi hallederiz."
        subtitle="Siz sadece onaylarsınız."
        steps={howItWorksSteps}
      />

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <ScrollReveal>
          <div className={styles.ctaInner}>
            {/* TRANSLATE: See what Sam looks like for your business. */}
            <h2 className={styles.ctaTitle}>Sam&apos;in işletmeniz için nasıl çalıştığını görün.</h2>
            {/* TRANSLATE: Write to us. We'll show you a live demo built with your real business info — no commitment. */}
            <p className={styles.ctaSubtitle}>Bize yazın. İşletmenize özel canlı bir demo gösterelim — hiçbir taahhüt yok.</p>
            <div className={styles.ctaCtas}>
              <a
                href="https://wa.me/PLACEHOLDER_PHONE?text=PLACEHOLDER_MESSAGE"
                className={styles.ctaBtnWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp size={20} />
                {/* TRANSLATE: Chat on WhatsApp */}
                WhatsApp ile Yazın
              </a>
              <a
                href="mailto:PLACEHOLDER_EMAIL?subject=Sam%20Demo%20Talebi"
                className={styles.ctaBtnEmail}
              >
                <Mail size={18} />
                {/* TRANSLATE: Send Email */}
                E-posta Gönderin
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
