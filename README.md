# trysam.co

Marketing site for Sam — an AI assistant trained on a school's own handbook, calendar, and policies. It answers families' questions 24/7, in their language, citing its source — and declines rather than guesses. Schools only (private & charter). Built by Sami in New Jersey.

## Stack

Next.js 14 (App Router) + TypeScript + CSS Modules. Deployed on Vercel.

## Design system — "On File"

The front office's paperwork (ledgers, index cards, manila folders, rubber stamps) as a warm-paper design system. Tokens and global utility classes live in `app/globals.css`; shared components in `components/office/` (Letterhead, ArchiveFooter, CaseExhibit, SchoolSite, DemoChat, TearOffSlip, Reveal, etc.).

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/private` | Private & independent schools |
| `/charter` | Charter schools |
| `/how-it-works` | Onboarding & product mechanics |
| `/security` | Security & data handling |
| `/portal` | Customer portal placeholder |

Legacy vertical routes (`/property`, `/law`, `/daycare`, `/dental`, `/venues`, `/medical-aesthetics`, `/widget`) 301 to `/`; `/k-12` 301s to `/private` (see `next.config.js`).

## /api/chat

`POST /api/chat` is a stub (`app/api/chat/route.ts`). The demo widget posts free-typed input there and expects `{ reply: string }`; an empty reply triggers the widget's honest "demo offline" message. Wire it to the real Sam backend when ready.

## Notes

- `app/tr/` (Turkish landing page) still uses the legacy component set (`NavTR`, `FooterTR`, `SamWidget`, `ScrollReveal`, etc.) and the legacy CSS token block in `globals.css`. Leave it be until it's redesigned.
- `public/demo.html` is a live sales demo — do not touch.
