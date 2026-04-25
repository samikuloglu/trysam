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

export default function HomePage() {
  return (
    <>
      <SiteNav variant="home" />

      <HomeHero />

      <OutcomeStats
        eyebrow="What changes for you"
        heading={
          <>
            Answer more questions{' '}
            <em>&amp; connect with customers faster.</em>
          </>
        }
        stats={[
          {
            num: '24/7',
            title: 'Availability',
            body: 'Provide instant support around the clock — even when your office is closed.',
          },
          {
            num: '45+',
            title: 'Languages',
            body: 'Connect with your diverse community and reach a wider audience with multilingual support.',
          },
          {
            num: '0 clicks',
            title: 'One question. Full support.',
            body: 'Simplify the search and browsing experience by answering questions instantly and accurately.',
          },
        ]}
      />

      <FeatureBlock
        background="soft"
        reverse
        eyebrow="Powered by Sam intelligence"
        heading={
          <>
            Turn every website visit into a{' '}
            <em>meaningful exchange.</em>
          </>
        }
        body="Finding the right information shouldn't be a struggle. Sam empowers your customers with immediate answers and effortless navigation, so they find what they need — when they need it."
        cta={{ href: '#roi', label: 'See the ROI' }}
        visual={
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <BrowserMockup
              url="your-business.com"
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
                  A warm welcome to your customers.
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                  <div
                    style={{
                      width: 60,
                      height: 50,
                      background: 'var(--coral)',
                      borderRadius: 6,
                    }}
                  />
                  <div
                    style={{
                      width: 60,
                      height: 50,
                      background: 'var(--navy)',
                      borderRadius: 6,
                    }}
                  />
                  <div
                    style={{
                      width: 60,
                      height: 50,
                      background: '#c8b89a',
                      borderRadius: 6,
                    }}
                  />
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
            How much staff time could Sam <em>recover?</em>
          </>
        }
        subtitle="Adjust the sliders to match your business's numbers. We'll estimate annual staff time saved."
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
            body: 'Captured before they shop your competitor. Late-night browsers get instant answers — and book a tour or consult.',
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
                Your business&apos;s{' '}
                <em>hardest-working teammate.</em>
              </h2>
              <p className="lede" style={{ marginBottom: 28 }}>
                Sam provides real-time assistance and accurate answers directly from
                your website and approved documents — creating a seamless,
                efficient, and on-brand customer experience.
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
                      "Trained on your handbook, FAQ, pricing sheet, policy docs — anything you've already written down. Updated whenever you change them.",
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
                      'Understand customer behavior with a dashboard. Track top questions, identify gaps in your FAQ, measure engagement with metrics like CSAT, sessions, and ratings.',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Industries
        id="industries"
        eyebrow="Built for the businesses that repeat themselves"
        heading={
          <>
            Sam is trained on <em>your specific operation.</em>
          </>
        }
        industries={[
          {
            href: '/daycare',
            icon: 'a',
            title: 'Childcare & Daycare',
            body:
              'Enrollment, schedules, tuition, immunization policy, waitlist status — handled.',
          },
          {
            href: '/k-12',
            icon: 'b',
            title: 'Private K–12 Schools',
            body:
              'Convert prospective parents into tour bookings, even when admissions is closed.',
          },
          {
            href: '/venues',
            icon: 'c',
            title: 'Wedding & Event Venues',
            body: 'Availability, packages, capacity. Couples decide fast — Sam answers faster.',
          },
          {
            href: '/dental',
            icon: 'd',
            title: 'Dental & Orthodontics',
            body:
              'Insurance, pricing, availability for new patients — without burying the front desk.',
          },
          {
            href: '/medical-aesthetics',
            icon: 'e',
            title: 'Medical Aesthetics',
            body:
              'Treatments, financing, expected results, consultation booking. All instant.',
          },
          {
            href: '/law',
            icon: 'f',
            title: 'Law Firms',
            body:
              "Capture the 2 AM caller searching for legal help. Take the intake while it's hot.",
          },
        ]}
      />

      <section className="section">
        <div className="frame">
          <Testimonial
            quote='"Sam answers the questions our front desk used to spend half the day on. We can actually focus on the families in front of us. The transcripts are gold — we now know exactly what parents are confused about."'
            name="Maria Chen"
            category="Director"
            org="Bright Horizons Daycare"
          />
          <CaseStudy />
        </div>
      </section>

      <CTABanner
        heading={
          <>
            Ready to give your customers <em>better answers?</em>
          </>
        }
        buttonHref="mailto:sami@trysam.co?subject=Sam%20Demo%20Request"
        buttonLabel="Get a free demo"
      />

      <SiteFooter />
    </>
  );
}
