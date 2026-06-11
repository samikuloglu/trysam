import type { Metadata } from 'next';
import CaseFilePage from '@/components/office/CaseFilePage';

export const metadata: Metadata = {
  title: 'Sam for Private Schools — AI Admissions Assistant',
  description:
    "Sam is an AI admissions assistant trained on your school's own handbook, calendar, and policies. It answers families 24/7 in their language, cites its sources, books tours, and declines rather than guesses.",
};

const MAILTO =
  'mailto:sami@trysam.co?subject=Sam%20Demo%20Request%20-%20Private';

const OAKRIDGE_SYSTEM_PROMPT = `You are Sam, the admissions assistant for Oakridge Academy — a FICTIONAL demo school used to show how Sam works. Never present Oakridge as a real school or a real customer, and never invent customer results or outcome statistics.

School profile (the only facts you may use):
- Oakridge Academy: an independent, coeducational K–12 day school in Princeton, New Jersey. Founded 1958. About 480 students; average class size of 14.
- Tuition for 2026–27: Lower School (K–4) $34,500 · Middle School (grades 5–8) $38,900 · Upper School (grades 9–12) $42,500. A 7% sibling discount applies to younger siblings enrolled concurrently.
- Financial aid: need-based; about 28% of families receive aid, and the average award is about $14,000. Applications go through SSS (School and Student Services) and are due January 15.
- Admissions: application deadline January 31. Open house Sunday, November 9, 10am–noon. Private tours Tuesdays and Thursdays by appointment.
- Transportation: bus routes serve Princeton, Hopewell, and Lawrenceville.

Behavior:
- Answer warmly and concisely (1–3 sentences), only from the profile above. If a family writes in another language, answer in that language.
- If asked anything not covered here (rankings, test scores, outcomes, staff names), say there is no record on file and offer to pass the question to the admissions office. Never improvise an answer or a statistic.`;

export default function PrivateSchoolsPage() {
  return (
    <CaseFilePage
      variant="private"
      mailto={MAILTO}
      hero={{
        label: 'File A — Independent & private schools',
        heading: (
          <>
            Prospective families research schools{' '}
            <em>after the kids go to bed.</em>
          </>
        ),
        lede:
          "Sam answers admissions questions, books campus tours, and captures interested families — including the ones browsing at 11pm — so Monday morning isn't email triage.",
        secondaryLabel: 'See the worksheet ↓',
      }}
      exhibit={{
        tab: 'Exhibit B — Private school demo',
        url: 'oakridge-academy.org',
        school: {
          name: 'Oakridge Academy',
          initial: 'O',
          tagline: 'Independent · K–12 · Est. 1958',
          announcement: 'Open House — Sun, Nov 9 · Register',
          navItems: ['Admissions', 'Academics', 'Athletics', 'Giving'],
          heroTitle: 'Small classes. Big questions.',
          heroText:
            'An independent K–12 day school in Princeton, New Jersey — 480 students, average class size of 14.',
          cards: [
            { title: 'Visit', sub: 'Tours Tues & Thurs' },
            { title: 'Apply', sub: 'Deadline Jan 31' },
            { title: 'Tuition & Aid', sub: '28% receive aid' },
          ],
          accent: '#2f4a38',
          accentSoft: '#eef3ee',
          gold: '#c9a227',
        },
        chat: {
          schoolName: 'Oakridge Academy',
          greeting:
            "Hi — I'm Sam, Oakridge's admissions assistant. Ask me what prospective families ask.",
          script: [
            {
              q: 'How much is tuition for 7th grade?',
              a: 'Middle School tuition (grades 5–8) is $38,900 for 2026–27, and a 7% sibling discount applies. About 28% of families receive need-based aid — happy to walk you through the application.',
              cite: 'Tuition & Aid Sheet, p.1',
            },
          ],
          chips: [
            {
              label: 'When is the next open house?',
              exchange: {
                q: 'When is the next open house?',
                a: 'The next open house is Sunday, November 9, from 10am to noon. Private tours run Tuesdays and Thursdays by appointment. Want me to RSVP you for November 9?',
                cite: 'Admissions Calendar',
              },
            },
            {
              label: 'Do you offer financial aid?',
              exchange: {
                q: 'Do you offer financial aid?',
                a: 'Yes — Oakridge offers need-based aid, and the average award is about $14,000. Applications go through SSS and are due January 15. I can point you to the application page.',
                cite: 'Tuition & Aid Sheet, p.2',
              },
            },
            {
              label: "Ask something that's not on file",
              exchange: {
                q: "What's your students' average SAT score?",
                a: "Oakridge's handbook doesn't publish SAT averages, so I won't improvise one. I've filed your question for the admissions office — they'll follow up directly.",
                decline: true,
              },
            },
          ],
          systemPrompt: OAKRIDGE_SYSTEM_PROMPT,
        },
      }}
      changes={[
        {
          title: 'The 11pm inquiry gets an answer at 11pm',
          body: "Families compare schools at night. Sam answers while they're still on your site — and asks if they'd like a tour.",
        },
        {
          title: 'Your team stops re-answering the handbook',
          body: 'Tuition bands, deadlines, bus routes, aid — answered from your own documents, the same way every time.',
        },
        {
          title: 'You see what families actually ask',
          body: "Every conversation is browsable, and a weekly report lists the questions your website couldn't answer.",
        },
      ]}
      ledger={{
        eyebrow: 'Built for admissions season',
        heading: (
          <>
            Designed for the way enrollment <em>actually works.</em>
          </>
        ),
        subhead:
          "Sam isn't a generic chatbot pointed at your website — it's an admissions tool with a paper trail.",
        reviewed: 'June 2026',
        items: [
          {
            title: 'Tour & open-house booking',
            body: 'Books families into your admissions calendar; a confirmation goes to the family, an invite to your team.',
            status: 'live',
          },
          {
            title: 'Lead capture',
            body: 'Families who ask more than one question become a soft lead — CSV export today.',
            status: 'live',
          },
          {
            title: 'Financial aid intake',
            body: 'Answers aid questions carefully and routes families to your application.',
            status: 'live',
          },
          {
            title: 'After-hours capture',
            body: 'The families comparing schools at night reach a staffed-feeling front door.',
            status: 'live',
          },
          {
            title: 'Source-attributed answers',
            body: 'Every answer links to the page it came from; designed to decline rather than improvise.',
            status: 'live',
          },
          {
            title: 'Transcripts & search',
            body: "Browse every question; spot what your viewbook isn't answering.",
            status: 'live',
          },
          {
            title: 'Knowledge-gap reporting',
            body: "A weekly email of questions Sam couldn't answer.",
            status: 'live',
          },
          {
            title: 'Multilingual',
            body: 'Spanish, Turkish, Arabic and more — parents ask in their language, Sam answers in it.',
            status: 'live',
          },
          {
            title: 'FERPA-aware data handling',
            body: 'PII redaction, configurable retention, full audit log.',
            status: 'live',
          },
          {
            title: 'CRM push — Veracross, Blackbaud, Ravenna',
            body: 'Lead records flow into your admissions CRM; CSV export is live today.',
            status: 'roadmap',
          },
          {
            title: 'Threat & safety alerts',
            body: 'Flags concerning language for human review.',
            status: 'roadmap',
          },
        ],
      }}
      catalog={{
        heading: (
          <>
            The kinds of questions Sam handles <em>without staff time.</em>
          </>
        ),
        railNote:
          'Real questions from real handbooks — this is the bar Sam has to clear.',
        cards: [
          {
            q: 'When is the next open house?',
            a: 'Sam answers from your admissions calendar — date, time, where to park — and offers to RSVP the family while it has their attention.',
            cite: 'Admissions Calendar',
          },
          {
            q: 'How much is 7th grade tuition?',
            a: 'Sam quotes the right band for the right grade and notes the sibling discount — no rounding off, no “starting at.”',
            cite: 'Tuition & Aid, p.1',
          },
          {
            q: 'Do you offer financial aid?',
            a: 'Sam explains the program and the average award, then links the family straight to the application — a question many parents would rather not ask a person.',
            cite: 'Tuition & Aid, p.2',
          },
          {
            q: 'When are applications due?',
            a: 'Answered from your calendar, with an offer to send the family a reminder before the deadline.',
            cite: 'Admissions Calendar',
          },
          {
            q: 'Is there a bus from Hopewell?',
            a: 'Sam answers from your transportation map — route, stop, and pickup time included.',
            cite: 'Transportation Map',
          },
          {
            q: "What's the average class size?",
            a: 'Sam quotes the viewbook number — fourteen — with the context around it, not a bare statistic.',
            cite: 'Viewbook, p.4',
          },
          {
            q: 'Do you have a gifted program ranking?',
            a: "Not in Oakridge's published content — Sam declines, files the question, and your team answers it once, properly.",
            noRecord: true,
          },
        ],
      }}
      worksheet={{
        defaults: { questions: 180, rate: 35, minutes: 8, share: 60 },
        ranges: {
          questionsMin: 50,
          questionsMax: 800,
          questionsStep: 10,
          rateMin: 18,
          rateMax: 80,
        },
        questionsLabel: 'Admissions inquiries / month',
        rateLabel: 'Staff hourly rate',
        outputLabel:
          'in admissions team time, per year — by your own assumptions.',
      }}
      slip={{
        heading: (
          <>
            See it on <em>your school&rsquo;s</em> content.
          </>
        ),
        body: 'Twenty minutes. A live demo trained on your real handbook and calendar — and an honest answer about whether Sam fits.',
      }}
    />
  );
}
