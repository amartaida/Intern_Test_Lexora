# Lexora of Singapore — Web Intern Test Case

Implementation of the Lexora of Singapore homepage mockup with a live News carousel powered by The Guardian API.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Oswald (headings) and Montserrat (body), via `@fontsource-variable`
- **API**: The Guardian Open Platform (Content API)
- **Deployment**: Vercel (recommended)

## Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd lexora-website
npm install
```

### 2. Environment Variables

Copy the example env file and add your API key:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
GUARDIAN_API_KEY=your_real_key_here
```

The key is read **server-side only** by the `/api/news` route (there is no `NEXT_PUBLIC_` prefix), so it is never sent to the browser.

#### How to get a free Guardian API key

1. Go to [https://open-platform.theguardian.com/access/](https://open-platform.theguardian.com/access/)
2. Choose a **Developer** key (free, non-commercial)
3. Fill in the short form (name, email, brief description)
4. The key is sent by email

> For a quick local check you can use the public key `test` (rate-limited).
> If `GUARDIAN_API_KEY` is not set, the app falls back to `test`.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build & Deploy

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

To deploy, push to GitHub and import the repo on [Vercel](https://vercel.com). It detects Next.js automatically. Add `GUARDIAN_API_KEY` under **Project Settings → Environment Variables** before the first deploy.

## News Carousel

The Media & Press section is the main focus of the test.

- **Data flow**: the browser calls `GET /api/news`, which calls the Guardian API on the server. The route fetches the 10 newest articles from the Guardian **Law** section (thumbnail and trail text), caches them for 5 minutes, and returns a normalised list. The browser never talks to the Guardian directly.
- **Card contents**: thumbnail (placeholder if missing or broken), category and date formatted `DD MMM YYYY`, title clamped to 2 lines, excerpt clamped to 3 lines, and a "Read more" link that opens the article in a new tab.
- **Cards per view**: 3 at ≥1280px, 2 at 768–1279px, 1 below 768px. This is done in CSS, so there is no layout flash on first paint.
- **Navigation**: previous/next arrows (disabled at the ends), a "1–3 of 10" counter, swipe on touch devices, and a smooth slide animation.
- **Autoplay**: advances every 5 seconds, loops, pauses on hover and keyboard focus, and is disabled for users who prefer reduced motion.
- **States**: skeleton cards while loading, an error message with a "Try again" button if the request fails, and a message if the feed is empty.
- **Accessibility**: the carousel and slides use carousel/slide roles, the arrows have `aria-label`s, and off-screen cards are `inert` so keyboard focus cannot reach them.
- **Images**: grayscale until the card is hovered or focused, then full colour. Touch devices show colour. Remote images are allowed for `**.guim.co.uk` in `next.config.ts`.

## Project Structure

```
lexora-website/
├── public/images/            # photos, textures, paper-shred assets
├── src/
│   ├── app/
│   │   ├── api/news/route.ts # GET /api/news — server-side Guardian proxy
│   │   ├── globals.css       # Tailwind + design tokens (crimson, gold, paper…)
│   │   ├── layout.tsx        # Root layout, fonts, metadata
│   │   └── page.tsx          # Homepage composition
│   ├── components/
│   │   ├── Header.tsx, Hero.tsx, StatutoryFunctions.tsx, Anniversary.tsx,
│   │   │   RoadTo2027.tsx, LegalSupport.tsx, CareerBanner.tsx, Footer.tsx
│   │   ├── PaperShred.tsx    # torn-paper section transitions
│   │   ├── MediaPress.tsx    # section wrapper
│   │   ├── NewsCarousel.tsx  # carousel, autoplay, states
│   │   ├── NewsCard.tsx
│   │   ├── NewsCardSkeleton.tsx
│   │   └── ui/               # ArrowLink, SectionLabel, Icons
│   ├── data/                 # navigation and static page content
│   ├── hooks/
│   │   ├── useNews.ts        # fetch + loading/error/retry state
│   │   └── useItemsPerView.ts# 3 / 2 / 1 cards per breakpoint
│   ├── lib/
│   │   ├── guardian.ts       # Guardian API helper (server-only)
│   │   └── formatDate.ts     # DD MMM YYYY formatter (UTC)
│   └── types/news.ts         # API and card types
├── .env.example
├── next.config.ts
└── package.json
```

## Design Notes

- Primary colour: crimson `#AA0433` with gold `#927642`, charcoal text and a `#F9F9F9` paper background (sampled from the mockup)
- Figma reference: [Web Test Case](https://www.figma.com/design/6XKkcfeMx3iEAVxmGiJAS6/Web-Test-Case)
- Breakpoints follow the brief:
  - Desktop ≥ 1280px → 3 cards, full navigation
  - Tablet 768–1279px → 2 cards
  - Mobile < 768px → 1 card + hamburger menu

## Known Issues / Decisions

- Uses the free Developer tier of The Guardian API (500 calls/day is more than enough). Articles come from the Law section to suit the site.
- The mockup crops the third news card at the right edge. The carousel instead scales its cards so exactly three fit, as the brief asks for 3 visible.
- **Not yet responsive**: `body` still has `min-width: 1280px`, so the 2-card and 1-card layouts only take effect once Phase 3 removes it.
- On touch devices, the What We Do card description and "More detail" only appear on hover, so they are not shown yet (Phase 3).
- The Play button on the anniversary banner opens a placeholder dialog. A video embed URL is still needed.
- Most menu links are `#` placeholders, and the menu search field is not wired up.
- `NewsSection.tsx` is an older component that is no longer used and can be deleted.

## Roadmap Status

- [x] **Phase 0** — Project setup, TypeScript, Tailwind, API helper, types, README
- [x] **Phase 1** — Static homepage layout (header, hero, statutory cards, anniversary, footer, menu, paper-shred transitions)
- [x] **Phase 2** — News carousel, Guardian API, loading/error/empty states
- [ ] **Phase 3** — Full responsive polish (tablet and mobile, mobile nav)
- [ ] **Phase 4** — Remaining bonus items (entrance animations)

Already done from the bonus list: skeleton cards, autoplay with pause on hover, accessible carousel controls, and TypeScript.

## License

This is a test submission for the Web Intern position.