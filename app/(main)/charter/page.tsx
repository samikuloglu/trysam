import type { Metadata } from 'next';
import CaseFilePage from '@/components/office/CaseFilePage';

export const metadata: Metadata = {
  title: 'Sam for Charter Schools — AI Enrollment Assistant',
  description:
    'Sam is an AI enrollment assistant trained on your own enrollment handbook. It answers lottery, enrollment, and sibling-preference questions 24/7 — in the languages your families speak — citing its sources and declining rather than guessing.',
};

const MAILTO =
  'mailto:sami@trysam.co?subject=Sam%20Demo%20Request%20-%20Charter';

const LIGHTHOUSE_SYSTEM_PROMPT = `You are Sam, the enrollment assistant for Lighthouse Charter Academy — a FICTIONAL demo school used to show how Sam works. Never present Lighthouse as a real school or a real customer, and never invent customer results or outcome statistics.

School profile (the only facts you may use):
- Lighthouse Charter Academy: a tuition-free public charter school in Newark, New Jersey. Grades K–8, single campus, founded 2008, about 480 students.
- Admission is by lottery: applications open January 5 and close March 1; the lottery drawing is March 15.
- Sibling preference: siblings of currently-enrolled students receive preference in the drawing.
- Waitlist: maintained year-round; movement varies by grade.
- Open houses: November 14, December 6, and February 8 (10am–noon).
- Transportation: school bus service is available; routes and stops are published on the transportation page.

Behavior:
- Answer warmly and concisely (1–3 sentences), only from the profile above. If a family writes in another language — Spanish, Turkish, Arabic, or any other — answer in that language.
- If asked anything not covered here (class assignments, placement decisions, staff names, outcomes), say there is no record on file and offer to pass the question to the front office. Never improvise an answer or a statistic.`;

export default function CharterSchoolsPage() {
  return (
    <CaseFilePage
      variant="charter"
      mailto={MAILTO}
      hero={{
        label: 'File B — Charter schools & networks',
        heading: (
          <>
            The front office closes at 4. <em>Questions don&rsquo;t.</em>
          </>
        ),
        lede:
          "Sam answers lottery, enrollment, and sibling-preference questions — in the languages your families speak — so lottery week doesn't take your front office down with it.",
        secondaryLabel: 'See the worksheet ↓',
      }}
      exhibit={{
        tab: 'Exhibit C — Charter school demo',
        url: 'lighthousecharter.org',
        school: {
          name: 'Lighthouse Charter Academy',
          initial: 'L',
          tagline: 'Tuition-free public charter · K–8',
          announcement: 'Lottery applications open Jan 5',
          navItems: ['Enroll', 'Families', 'Academics', 'Calendar'],
          heroTitle: 'A tuition-free public charter school in Newark',
          heroText:
            'Serving 480 K–8 students since 2008. Applications by lottery — sibling preference applies.',
          cards: [
            { title: 'Apply', sub: 'Lottery Jan 5–Mar 1' },
            { title: 'Families', sub: 'Handbook & calendar' },
            { title: 'Visit', sub: 'Open houses' },
          ],
          accent: '#1f4e79',
          accentSoft: '#edf3f8',
          gold: '#d99a2b',
        },
        chat: {
          schoolName: 'Lighthouse Charter Academy',
          greeting:
            "Hi — I'm Sam, Lighthouse's enrollment assistant. Ask me what families ask during lottery season.",
          script: [
            {
              q: 'When is the enrollment lottery?',
              a: 'Applications open January 5 and close March 1; the lottery drawing is March 15. Want me to send a reminder before the deadline?',
              cite: 'Enrollment — Lottery Rules',
            },
          ],
          chips: [
            {
              label: '¿La escuela es gratuita?',
              exchange: {
                q: '¿La escuela es gratuita?',
                a: 'Sí — Lighthouse es una escuela charter pública y gratuita. La admisión es por lotería; la solicitud abre el 5 de enero.',
                cite: 'Inscripción — Reglas',
                langTag: 'Specimen — ES',
                lang: 'es',
              },
            },
            {
              label: 'How does sibling preference work?',
              exchange: {
                q: 'How does sibling preference work?',
                a: 'Siblings of currently-enrolled students get preference in the drawing — if your older child already attends Lighthouse, your younger child moves up. The full rules are on the lottery page; want the link?',
                cite: 'Lottery Rules, §3',
              },
            },
            {
              label: "Ask something that's not on file",
              exchange: {
                q: 'Which teacher will my son get?',
                a: "Class assignments aren't in Lighthouse's published enrollment content, so I can't say — I've filed your question for the front office, who'll know.",
                decline: true,
              },
            },
          ],
          systemPrompt: LIGHTHOUSE_SYSTEM_PROMPT,
        },
      }}
      changes={[
        {
          title: 'Lottery week stops being phone week',
          body: "The same twenty questions, answered on your website — in the parent's language — instead of on hold.",
        },
        {
          title: 'Working parents get office-hours answers at night',
          body: "The parent who can't call at 2pm gets the same answer at 10pm, from your own enrollment handbook.",
        },
        {
          title: 'You see the friction before it costs you families',
          body: 'Transcripts plus a weekly report of unanswered questions show exactly where your enrollment content falls short.',
        },
      ]}
      ledger={{
        eyebrow: 'Built for the front office',
        heading: (
          <>
            The features charter schools <em>actually need.</em>
          </>
        ),
        subhead:
          'Charter front offices answer the same questions in three languages all day. Sam was built for that.',
        reviewed: 'June 2026',
        items: [
          {
            title: 'Multilingual',
            body: 'Spanish, Turkish, Arabic and more — no setup, no toggles.',
            status: 'live',
          },
          {
            title: 'After-hours mode',
            body: 'A different greeting and behavior outside school hours, so the experience reads right at 9am or 10pm.',
            status: 'live',
          },
          {
            title: 'Source-attributed answers',
            body: 'Every answer links to its page; designed to decline rather than improvise.',
            status: 'live',
          },
          {
            title: 'Transcripts & search',
            body: 'Find what the front office keeps repeating.',
            status: 'live',
          },
          {
            title: 'Knowledge-gap reporting',
            body: "A weekly email of what Sam couldn't answer.",
            status: 'live',
          },
          {
            title: 'FERPA-aware data handling',
            body: 'PII redaction, configurable retention, audit log — built to support public charter compliance review.',
            status: 'live',
          },
          {
            title: 'Lottery & enrollment mode',
            body: 'A seasonal mode that captures applicants and sends deadline reminders — ask about timing if this is core to your decision.',
            status: 'roadmap',
          },
          {
            title: 'Threat & safety alerts',
            body: 'Flags concerning language for human review.',
            status: 'roadmap',
          },
          {
            title: 'Multi-campus routing',
            body: 'Each campus answers from its own knowledge — no cross-campus leakage.',
            status: 'roadmap',
          },
          {
            title: 'Network admin dashboard',
            body: 'Every campus in one place, for networks of three campuses or more.',
            status: 'roadmap',
          },
        ],
      }}
      catalog={{
        heading: (
          <>
            Enrollment questions, <em>answered off your plate.</em>
          </>
        ),
        railNote:
          'Lottery season generates the same twenty questions — here are six, plus one Sam refuses to guess at.',
        cards: [
          {
            q: 'When is the enrollment lottery?',
            a: 'Sam answers from your enrollment calendar — application window, drawing date — and offers to send the family a reminder.',
            cite: 'Enrollment Calendar',
          },
          {
            q: 'How does sibling preference work?',
            a: 'Sam explains the rule in plain language — who qualifies, what it means for the drawing — and links the rules page.',
            cite: 'Lottery Rules, §3',
          },
          {
            q: 'Is the school really free?',
            a: 'Sam confirms your charter status and explains the difference — tuition-free, publicly funded, admission by lottery.',
            cite: 'About — Charter FAQ',
          },
          {
            q: 'Is there a waitlist for 4th grade?',
            a: 'Sam quotes your current waitlist process, grade by grade, instead of making a family call to find out.',
            cite: 'Enrollment — Waitlist',
          },
          {
            q: 'Do we have to live in the district?',
            a: 'Answered from your eligibility rules — residency requirements, enrollment zones, and what counts as proof.',
            cite: 'Enrollment — Eligibility',
          },
          {
            q: 'Is there a bus from East Orange?',
            a: 'Sam answers from your transportation map — route, stop, and pickup time.',
            cite: 'Transportation Map',
          },
          {
            q: 'Will my daughter get into the gifted track?',
            a: "Placement decisions aren't in the enrollment handbook — Sam declines and routes the family to your team instead of speculating.",
            noRecord: true,
          },
        ],
      }}
      worksheet={{
        defaults: { questions: 300, rate: 22, minutes: 6, share: 60 },
        ranges: {
          questionsMin: 50,
          questionsMax: 1500,
          questionsStep: 10,
          rateMin: 18,
          rateMax: 40,
        },
        questionsLabel: 'Parent questions / month',
        rateLabel: 'Front-office hourly rate',
        outputLabel:
          'in front-office time, per year — by your own assumptions.',
      }}
      slip={{
        heading: (
          <>
            Lottery season is coming. <em>Sam doesn&rsquo;t mind.</em>
          </>
        ),
        body: 'Twenty minutes. A live demo trained on your enrollment handbook — and an honest answer about whether Sam fits.',
      }}
    />
  );
}
