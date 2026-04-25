import type { Metadata } from 'next';
import SiteNav from '@/components/site/SiteNav';
import SiteFooter from '@/components/site/SiteFooter';
import HomeHero from '@/components/site/HomeHero';
import OutcomeStats from '@/components/site/OutcomeStats';
import FeatureBlock from '@/components/site/FeatureBlock';
import BrowserMockup from '@/components/site/BrowserMockup';
import MiniChat from '@/components/site/MiniChat';
import ROICalculator from '@/components/site/ROICalculator';
import BigStats from '@/components/site/BigStats';
import DashboardCard from '@/components/site/DashboardCard';
import FeatureTabs from '@/components/site/FeatureTabs';
import Industries from '@/components/site/Industries';
import Testimonial from '@/components/site/Testimonial';
import CaseStudy from '@/components/site/CaseStudy';
import CTABanner from '@/components/site/CTABanner';

export const metadata: Metadata = {
  title: 'Sam — AI Admissions Assistant for Private & Charter Schools',
  description:
    "Sam answers admissions and enrollment questions for private and charter schools — capturing prospective families 24/7 so your team isn't chasing cold leads on Monday.",
};

export default function HomePage() {
  return (
    <>
      <SiteNav variant="home" />

      <HomeHero />

      <Industries
        cols={2}
        eyebrow="Which best describes your school?"
        heading={
          <>
            Two paths. Same <em>Sam.</em>
          </>
        }
        cta="Learn more"
        industries={[
          {
            href: '/private',
            icon: 'P',
            title: 'Private & Independent Schools',
            body:
              'Tuition-supported. Admissions-driven. Sam answers tuition and financial aid questions, books campus tours, and captures inquiries from families researching at midnight.',
            cta: 'See Sam for private schools',
          },
          {
            href: '/charter',
            icon: 'C',
            title: 'Charter Schools & Networks',
            body:
              'Tuition-free. Lottery-based. Sam answers enrollment, lottery, and sibling-preference questions across one campus or an entire network — without bloating your enrollment team.',
            cta: 'See Sam for charter schools',
          },
        ]}
      />

      <OutcomeStats
        eyebrow="What changes for you"
        heading={
          <>
            Built for the way schools <em>actually run.</em>
          </>
        }
        stats={[
          {
            num: '3×',
            title: 'More tour bookings',
            body: "Capture families when they're browsing — not when your office happens to be staffed. Most inquiries come outside 9–5.",
          },
          {
            num: '<2 min',
            title: 'Average answer time',
            body: 'Replace the back-and-forth email thread with one clear answer, on your site, the moment a parent asks.',
          },
          {
            num: '100%',
            title: 'Trained on your handbook',
            body: 'Sam answers from your admissions or enrollment handbook, tuition or lottery info, and FAQ — and politely routes anything else to your team.',
          },
        ]}
      />

      <FeatureBlock
        background="soft"
        reverse
        eyebrow="Powered by Sam intelligence"
        heading={
          <>
            Turn every website visit into a <em>scheduled tour.</em>
          </>
        }
        body="Finding admissions information shouldn't be a struggle. Sam answers prospective families with immediate, accurate replies — pulled from your handbook, your tuition or lottery info, your FAQ — so they find what they need when they need it."
        cta={{ href: '#roi', label: 'See the ROI' }}
        visual={
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <BrowserMockup
              url="westbrookacademy.org"
              bodyStyle={{
                background:
                  'linear-gradient(135deg, #faf8f5 0%, #f0ebe4 100%)',
                minHeight: 360,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: 32 }}>
                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 28,
                    color: 'var(--navy)',
                    lineHeight: 1.1,
                    maxWidth: 240,
                    marginBottom: 16,
                  }}
                >
                  A warm welcome to your prospective families.
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                  <div
                    style={{
                      width: 60,
                      height: 50,
                      background: 'var(--coral)',
                      borderRadius: 6,
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: 8,
                      color: '#fff',
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  >
                    Admissions
                  </div>
                  <div
                    style={{
                      width: 60,
                      height: 50,
                      background: 'var(--navy)',
                      borderRadius: 6,
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: 8,
                      color: '#fff',
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  >
                    Tuition
                  </div>
                  <div
                    style={{
                      width: 60,
                      height: 50,
                      background: '#c8b89a',
                      borderRadius: 6,
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: 8,
                      color: '#fff',
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  >
                    Visit
                  </div>
                </div>
              </div>
              <MiniChat
                messages={[
                  { role: 'bot', text: "Hi! I'm Sam, your assistant. How can I help today?" },
                  { role: 'user', text: 'Tuition?' },
                ]}
              />
            </BrowserMockup>
          </div>
        }
      />

      <ROICalculator
        heading={
          <>
            How much admissions team time could Sam <em>recover?</em>
          </>
        }
        subtitle="Adjust the sliders to match your school's numbers. We'll estimate annual staff time saved."
      />

      <BigStats
        id="what"
        heading={
          <>
            A few numbers, in case you{' '}
            <em>like that sort of thing.</em>
          </>
        }
        stats={[
          {
            num: '70%',
            title: 'Routine questions handled',
            body: 'Sam answers the questions your team gets every day — pricing, hours, policies, availability — without staff intervention.',
          },
          {
            num: '7d',
            title: 'Time to live',
            body: 'From the day you send us your handbook to the day Sam answers your first customer. We do all the setup.',
          },
          {
            num: '3×',
            title: 'After-hours leads',
            body: 'Captured before they shop your competitor school. Late-night browsers get instant answers — and book a tour or start an application.',
          },
        ]}
      />

      <section className="section" id="how">
        <div className="frame">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              alignItems: 'center',
            }}
            className="feature-block"
          >
            <div>
              <DashboardCard />
            </div>
            <div>
              <div className="eyebrow">Powered by Sam intelligence</div>
              <h2
                className="h-1"
                style={{ marginTop: 24, marginBottom: 24, maxWidth: '16ch' }}
              >
                Your admissions team&apos;s{' '}
                <em>hardest-working teammate.</em>
              </h2>
              <p className="lede" style={{ marginBottom: 28 }}>
                Sam provides real-time admissions and enrollment answers
                directly from your website and approved documents — creating a
                seamless, efficient, on-brand parent experience.
              </p>
              <FeatureTabs
                tabs={[
                  {
                    label: 'Context-Aware',
                    title: 'Context-Aware Intelligence',
                    body:
                      'Sam reads the page your customer is on and tailors answers accordingly. A question on your tuition page gets a different reply than one on your tour page.',
                  },
                  {
                    label: 'Knowledge Base',
                    title: 'Comprehensive Knowledge Base',
                    body:
                      "Trained on your handbook, FAQ, tuition or lottery info, policy docs — anything you've already written down. Updated whenever you change them.",
                  },
                  {
                    label: 'Customizable',
                    title: 'Fully Customizable',
                    body:
                      'Match your brand voice, colors, and tone — formal, warm, mission-driven, matter-of-fact. We tune it during setup.',
                  },
                  {
                    label: 'Insightful Analytics',
                    title: 'Insightful Admin Analytics',
                    body:
                      'Understand parent behavior with a dashboard. Track top questions, identify gaps in your FAQ, measure engagement with metrics like CSAT, sessions, and ratings.',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="frame">
          <Testimonial
            quote='"Our admissions team used to spend Monday mornings on email triage. Now they spend it on the families who actually want to enroll."'
            name="James Whitfield"
            category="Director of Admissions"
            org="Westbrook Academy"
          />
          <CaseStudy />
        </div>
      </section>

      <CTABanner
        heading={
          <>
            Ready to give your prospective families <em>better answers?</em>
          </>
        }
        body="15 minutes on a call. We'll show you a live demo trained on your school's real info. No commitment, no slide deck."
        buttonHref="mailto:sami@trysam.co?subject=Sam%20Demo%20Request"
        buttonLabel="Get a free demo"
      />

      <SiteFooter />
    </>
  );
}
