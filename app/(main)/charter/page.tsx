import type { Metadata } from 'next';
import VerticalPageShell from '@/components/site/VerticalPageShell';

export const metadata: Metadata = {
  title: 'Sam — AI Enrollment Assistant for Charter Schools',
  description:
    'Sam answers lottery, enrollment, and sibling-preference questions for charter schools — across one campus or an entire network. 24/7, instantly.',
};

const SAMPLE = `You are Sam, the AI enrollment assistant for "Lighthouse Charter Academy" — a sample tuition-free public charter school used to demo this product. Answer prospective-family questions briefly (1–3 sentences) in a warm, professional tone.

Profile:
- Tuition-free public charter school, grades K–8.
- Two campuses in Newark, NJ: North Ward (K–4) and Central Ward (5–8).
- Founded 2008. ~480 students across both campuses.
- Lottery: applications open Jan 5, deadline Mar 1, drawing Mar 15.
- Sibling preference: applies to siblings of currently enrolled students.
- Waitlist: maintained year-round; movement varies by grade.
- Open houses: Nov 14, Dec 6, Feb 8 (10am–noon).
- Bus service: school bus pickup for both campuses.
- Head of School: Dr. Marcus Reed.

Off-topic or beyond data: politely route to enroll@lighthousedemo.org.`;

export default function CharterSchoolsPage() {
  return (
    <VerticalPageShell
      variant="charter"
      mailto="mailto:sami@trysam.co?subject=Sam%20Demo%20Request%20-%20Charter"
      heroEyebrow="For Charter Schools & Networks"
      heroHeading={
        <>
          The lottery question doesn&apos;t wait until{' '}
          <em>Monday morning.</em>
        </>
      }
      heroBody="Sam is an AI assistant trained on your school. It answers lottery, enrollment, and sibling-preference questions across one campus or an entire network — capturing interested families 24/7 so your enrollment team can focus on yield."
      heroUrl="lighthousecharter.org"
      placeholderTitle="Welcome to Lighthouse Charter Academy"
      placeholderBody="Tuition-free public charter school. Grades K–8 across two campuses in Newark. Founded 2008."
      placeholderCards={['Apply', 'Lottery', 'Visit']}
      chatStatus="Online · answering for Lighthouse Charter"
      chatGreeting="Hi! I'm Sam, your enrollment assistant for Lighthouse Charter. How can I help?"
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
          num: '3×',
          title: 'More applications',
          body: "Capture families when they're browsing — not when your office happens to be staffed. Most inquiries come outside 9–5.",
        },
        {
          num: '<2 min',
          title: 'Average answer time',
          body: 'Replace the back-and-forth email thread with one clear answer, on your site, the moment a parent asks.',
        },
        {
          num: '100%',
          title: 'One Sam per campus',
          body: 'Charter networks: each campus gets its own Sam, trained on its own enrollment rules. No cross-campus answer leakage.',
        },
      ]}
      featureHeading={
        <>
          From lottery question to submitted application,{' '}
          <em>without phone tag.</em>
        </>
      }
      featureBody="Lottery dates and rules. Sibling preference. Whether your school is tuition-free. Bus routes and zoning. Grade availability. Waitlist mechanics. Sam answers from your enrollment handbook, then walks the family right to your application form."
      featureBrandTitle="Lighthouse Charter"
      featureMiniMessages={[
        { role: 'user', text: 'Lottery?' },
        {
          role: 'bot',
          text: 'Sam pulls from your enrollment calendar and offers to send a reminder before the deadline.',
        },
        { role: 'user', text: 'Siblings?' },
      ]}
      qbankHeading={
        <>
          The kinds of enrollment questions Sam handles{' '}
          <em>without staff time.</em>
        </>
      }
      qbank={[
        {
          q: 'When is the lottery?',
          a: 'Sam pulls from your enrollment calendar and offers to send a reminder before the deadline.',
        },
        {
          q: 'How does sibling preference work?',
          a: 'Sam explains your sibling rule, who qualifies, and how it affects placement odds.',
        },
        {
          q: 'Is your school tuition-free?',
          a: 'Sam confirms your charter status and explains how it differs from private and district schools.',
        },
        {
          q: 'Is there a waitlist for 4th grade?',
          a: 'Sam quotes your current waitlist length by grade and explains how movement typically works.',
        },
        {
          q: 'Do I need to live in Newark to apply?',
          a: 'Sam answers from your eligibility rules — district preference, state-wide, or otherwise.',
        },
        {
          q: 'Is there a bus from East Orange?',
          a: 'Sam answers from your transportation map and shares pickup details if available.',
        },
      ]}
      roiInquiriesDefault={180}
      roiInquiriesMin={50}
      roiInquiriesMax={800}
      roiInquiriesStep={10}
      roiRateDefault={35}
      roiRateMin={18}
      roiRateMax={80}
      roiMinutesDefault={8}
      roiMinutesMin={2}
      roiMinutesMax={20}
      testimonialQuote='"Lottery week, our phones used to be unusable. This year, parents got their answers from the website and our team actually got work done."'
      testimonialName="Marcus Reed"
      testimonialCategory="Charter"
      testimonialOrg="Head of School, Lighthouse Charter Academy"
      featureChecklist={{
        eyebrow: 'Built for charter schools and networks',
        heading: <>The features charter schools <em>actually need.</em></>,
        subhead:
          "Charter schools don't have admissions teams. They have front offices answering the same questions in three languages across four campuses. Sam was built for that.",
        features: [
          {
            status: 'live',
            title: 'Multilingual',
            body:
              'Spanish, Turkish, Arabic. Parents ask in their language. Sam answers in their language. No setup, no toggles.',
          },
          {
            status: 'live',
            title: 'Multi-campus routing',
            body:
              'Charter networks: each campus answers from its own knowledge. No cross-campus answer leakage. Network office sees everything in one view.',
          },
          {
            status: 'live',
            title: 'Conversation transcripts & search',
            body:
              "Browse every parent question across all campuses. Find what the front office is repeating. Find what the website isn't explaining.",
          },
          {
            status: 'live',
            title: 'Knowledge gap reporting',
            body:
              "Weekly email of questions Sam couldn't answer. Tells your network office what friction exists across all campuses.",
          },
          {
            status: 'live',
            title: 'After-hours mode',
            body:
              'Different greeting and behavior outside school hours, configurable per campus.',
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
              'PII redaction, configurable data retention, full audit log. Built for public charter compliance review.',
          },
          {
            status: 'May 2026',
            title: 'Threat & safety alerts',
            body:
              'OpenAI moderation on every message. Real-time email + SMS to designated contacts when messages indicate self-harm, violence, or threats.',
          },
          {
            status: 'May 2026',
            title: 'Lottery & enrollment mode',
            body:
              'Seasonal mode that proactively captures lottery applicants and sends deadline reminders.',
          },
          {
            status: 'June 2026',
            title: 'Network admin dashboard',
            body:
              'Network directors see all campuses in one place, push updates, compare metrics.',
          },
        ],
      }}
      crossSellMode="two-model"
      crossSellEyebrow="Run a private school instead?"
      crossSellHeading={<>Sam works for both. <em>Tuned to your model.</em></>}
      crossSellHref="/private"
      crossSellLabel="See Sam for private schools"
    />
  );
}
