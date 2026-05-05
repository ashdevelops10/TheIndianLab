# The Indian Lab

A modern Indian restaurant website — cinematic, dark-premium, mobile-first. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lenis smooth-scroll, and next-intl for English + Hindi.

## Quick start

\`\`\`bash
pnpm install
cp .env.example .env.local   # optional — only needed for live email
pnpm dev
\`\`\`

Open http://localhost:3000 (redirects to /en).

## Stack

- Next.js 15 App Router, React 19, TypeScript
- Tailwind CSS with custom "Lab Noir" theme tokens
- Framer Motion + Lenis smooth-scroll
- next-intl for EN/HI i18n
- react-hook-form + zod for forms
- Embla carousels, yet-another-react-lightbox

## Pages

/ Home, /menu, /about, /reservations, /gallery, /events, /blog, /contact

## Theme — Lab Noir

bg.base #0B0B0C, bg.surface #141417, accent.saffron #E1A85F, accent.ember #C8472B, fg.cream #F5EFE6.
Display: Fraunces. Body: Inter. Mono: JetBrains Mono. Hindi: Noto Serif Devanagari.

## Scripts

- pnpm dev / pnpm build / pnpm start / pnpm typecheck / pnpm lint

## Notes

All animations respect prefers-reduced-motion. Replace Unsplash placeholder photography before launch.
