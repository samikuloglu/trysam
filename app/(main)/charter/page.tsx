import type { Metadata } from 'next';
import VerticalPageShell from '@/components/site/VerticalPageShell';

export const metadata: Metadata = {
  title: 'SamAI — AI Enrollment Assistant for Charter Schools',
  description:
    'SamAI answers lottery, enrollment, and sibling-preference questions for charter schools — across one campus or an entire network. 24/7, instantly.',
};

const SAMPLE = `You are SamAI, the AI enrollment assistant for "Lighthouse Charter Academy" — a sample tuition-free public charter school used to demo this product. Answer prospective-family questions briefly (1–3 sentences) in a warm, professional tone.

Profile:
- Tuition-free public charter school, grades K–8.
- Newark, NJ. Single campus serving K–8.
- Founded 2008. ~480 students.
- Lottery: applications open Jan 5, deadline Mar 1, drawing Mar 15.
- Sibling preference: applies to siblings of currently enrolled students.
- Waitlist: maintained year-round; movement varies by grade.
- Open houses: Nov 14, Dec 6, Feb 8 (10am–noon).
- Bus service: school bus pickup available.

Off-topic or beyond data: politely route to enroll@lighthousedemo.org.`;

export default function CharterSchoolsPage() {
  return (
    <VerticalPageShell
      variant="charter"
      mailto="mailto:sami@trysam.co?subject=SamAI%20Demo%20Request%20-%20Charter"
      heroEyebrow="For Charter Schools"
      heroHeading={
        <>
          The lottery question doesn&apos;t wait until{' '}
          <em>Monday morning.</em>
        </>
      }
      heroBody="SamAI is an AI assistant trained on your school. It answers lottery, enrollment, and sibling-preference questions — in the languages your families speak — so your front office isn't drowning in repeat phone calls during lottery week."
      heroPrimaryCta={{ label: 'Book a 20-minute demo', href: 'mailto:sami@trysam.co?subject=SamAI%20Demo%20Request%20-%20Charter' }}
      heroSecondaryCta={{ label: 'See the ROI', href: '#roi' }}
      heroUrl="lighthousecharter.org"
      placeholderTitle="Welcome to Lighthouse Charter Academy"
      placeholderBody="Tuition-free public charter school. Grades K–8 in Newark, NJ. Founded 2008."
      placeholderCards={['Apply', 'Lottery', 'Visit']}
      chatStatus="Online · answering for Lighthouse Charter"
      chatGreeting="Hi! I'm SamAI, your enrollment assistant for Lighthouse Charter. How can I help?"
      chatSuggestions={[
        'When is the lottery?',
        'How does sibling preference work?',
        'What grades do you serve?',
      ]}
      chatSystemPrompt={SAMPLE}
      outcomeHeading={
        <>
          Built for the way charter schools <em>actually run.</em>
        </>
      }
      outcomes={[
        {
          num: '70%',
          title: 'Parent questions self-served',
          body: 'The repeat questions your front office answers all day — lottery dates, sibling preference, bus routes — handled on your website, in the parent\u2019s language.',
        },
        {
          num: '<2 min',
          title: 'Answers any hour',
          body: 'Working parents who can\u2019t call during 9–5 office hours get the same answer at 10pm that they\u2019d get at the front desk.',
        },
        {
          num: '24/7',
          title: 'Lottery-week relief',
          body: 'When the phones used to be unusable, parents get their answers from your site — and your team gets to do the work that needs them.',
        },
      ]}
      featureHeading={
        <>
          From lottery question to submitted application,{' '}
          <em>without phone tag.</em>
        </>
      }
      featureBody="Lottery dates and rules. Sibling preference. Whether your school is tuition-free. Bus routes and zoning. Grade availability. Waitlist mechanics. SamAI answers from your enrollment handbook, then walks the family right to your application form."
      featureBrandTitle="Lighthouse Charter"
      featureMiniMessages={[
        { role: 'user', text: 'Lottery?' },
        {
          role: 'bot',
          text: 'SamAI pulls from your enrollment calendar and offers to send a reminder before the deadline.',
        },
        { role: 'user', text: 'Siblings?' },
      ]}
      qbankHeading={
        <>
          The kinds of enrollment questions SamAI handles{' '}
          <em>without staff time.</em>
        </>
      }
      qbank={[
        {
          q: 'When is the lottery?',
          a: 'SamAI pulls from your enrollment calendar and offers to send a reminder before the deadline.',
        },
        {
          q: 'How does sibling preference work?',
          a: 'SamAI explains your sibling rule, who qualifies, and how it affects placement odds.',
        },
        {
          q: 'Is your school tuition-free?',
          a: 'SamAI confirms your charter status and explains how it differs from private and district schools.',
        },
        {
          q: 'Is there a waitlist for 4th grade?',
          a: 'SamAI quotes your current waitlist length by grade and explains how movement typically works.',
        },
        {
          q: 'Do I need to live in Newark to apply?',
          a: 'SamAI answers from your eligibility rules — district preference, state-wide, or otherwise.',
        },
        {
          q: 'Is there a bus from East Orange?',
          a: 'SamAI answers from your transportation map and shares pickup details if available.',
        },
      ]}
      roiInquiriesDefault={300}
      roiInquiriesMin={50}
      roiInquiriesMax={1500}
      roiInquiriesStep={10}
      roiRateDefault={22}
      roiRateMin={18}
      roiRateMax={30}
      roiMinutesDefault={6}
      roiMinutesMin={2}
      roiMinutesMax={20}
      roiInquiriesLabel="Parent questions / month"
      roiRateLabel="Front-office hourly rate"
      roiOutputLabel="In front office hours recovered, per year."
      testimonialQuote='"Lottery week, our phones used to be unusable. This year, parents got their answers from the website and our team actually got work done."'
      featureChecklist={{
        eyebrow: 'Built for charter schools',
        heading: <>The features charter schools <em>actually need.</em></>,
        subhead:
          "Charter schools don't have admissions teams. They have front offices answering the same questions in three languages all day. SamAI was built for that.",
        liveHeading: 'Available today',
        roadmapHeading: 'On the roadmap',
        features: [
          {
            status: 'live',
            title: 'Multilingual',
            body:
              'Spanish, Turkish, Arabic. Parents ask in their language. SamAI answers in their language. No setup, no toggles. Critical for working families who can\u2019t call during office hours.',
          },
          {
            status: 'live',
            title: 'After-hours mode',
            body:
              'Different greeting and behavior outside school hours, so the experience reads right whether a parent asks at 9am or 10pm.',
          },
          {
            status: 'live',
            title: 'Conversation transcripts & search',
            body:
              "Browse every parent question. Find what the front office is repeating. Find what your website isn't explaining.",
          },
          {
            status: 'live',
            title: 'Knowledge gap reporting',
            body:
              "Weekly email of questions SamAI couldn't answer. Tells you what friction parents are hitting.",
          },
          {
            status: 'live',
            title: 'Source-attributed answers',
            body:
              'Every answer links to the page it came from. No hallucinations.',
          },
          {
            status: 'live',
            title: 'FERPA-aware data handling',
            body:
              'PII redaction, configurable data retention, full audit log. Designed to support public charter compliance review.',
          },
          {
            status: 'May 2026',
            title: 'Lottery & enrollment mode',
            body:
              'Seasonal mode that proactively captures lottery applicants and sends deadline reminders. The most charter-specific feature on the roadmap — ask us about timing if this is core to your buying decision.',
          },
          {
            status: 'May 2026',
            title: 'Threat & safety alerts',
            body:
              'Flags concerning language for human review. Real-time email + SMS to designated contacts.',
          },
          {
            status: 'June 2026',
            title: 'Multi-campus routing',
            body:
              'For networks: each campus answers from its own knowledge with no cross-campus answer leakage. Single-campus charters don\u2019t need this.',
          },
          {
            status: 'June 2026',
            title: 'Network admin dashboard',
            body:
              'Network directors see all campuses in one place, push updates, compare metrics. For 3+ campus networks.',
          },
        ],
      }}
      crossSellMode="none"
    />
  );
}
