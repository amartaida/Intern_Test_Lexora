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
git clone https://github.com/amartaida/Intern_Test_Lexora-.git
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
- **Cards per view**: at ≥1280px two full cards plus a peek of the third (the track bleeds to the right edge of the screen, as in the mockup), 2 at 768–1279px, and 1 card plus a peek of the next below 768px. Layout is done in CSS (`--n`, `--gap`, `--peek`), so there is no layout flash on first paint.
- **Navigation**: previous/next arrows (disabled at the ends), a counter, and a smooth slide animation. The counter shows a range such as "1–2 of 10" when several cards are in view and a single number such as "6 of 10" when one card is in view (mobile).
- **Drag to slide**: the carousel can be dragged with a mouse or a finger on every screen size. Cards follow the pointer, then snap to the nearest card on release (a flick of more than 50px moves one card). Pulling past either end resists and springs back. Autoplay pauses while dragging, and a drag never triggers a click on a card link. Built with pointer events, with `touch-action: pan-y` so vertical page scrolling still works.
- **Desktop end stop**: on desktop the track is clamped (`.news-track` in `globals.css`) so the last card ends flush with the 60px page gutter instead of leaving an empty third column.
- **Autoplay**: advances every 5 seconds, loops, pauses on hover and keyboard focus, and is disabled for users who prefer reduced motion.
- **States**: skeleton cards while loading, an error message with a "Try again" button if the request fails, and a message if the feed is empty.
- **Accessibility**: the carousel and slides use carousel/slide roles, the arrows have `aria-label`s, and off-screen cards are `inert` so keyboard focus cannot reach them.
- **Images**: grayscale until the card is hovered or focused, then full colour. Touch devices show colour. Remote images are allowed for `**.guim.co.uk` in `next.config.ts`.

## Entrance Animations

- **How it works**: elements marked `data-reveal` fade and rise into place as they scroll into view. `RevealOnScroll.tsx` (one small client component in `page.tsx`) uses a single `IntersectionObserver`; the styles are in `globals.css`. Add `data-reveal="fade"` for fade-only, and `data-reveal-delay="100"` (ms) to stagger siblings such as the statutory cards and the legal support rows.
- **Where**: the What We Do text and cards, the anniversary banner, Road to 2027 (heading, photo, text), Legal Support, Media & Press, the career banner and the footer. The hero plays a one-off fade-up on load, in CSS only.
- **Safe by default**: the server-rendered page is fully visible. Elements are hidden only after JavaScript runs and only if they are below the fold, so nothing flashes and nothing stays hidden if JavaScript is off. Users who prefer reduced motion get no animation at all.

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
│   │   ├── Header.tsx (top bar + menu), Hero.tsx, StatutoryFunctions.tsx, Anniversary.tsx,
│   │   │   RoadTo2027.tsx, LegalSupport.tsx, CareerBanner.tsx, Footer.tsx
│   │   ├── PaperShred.tsx    # torn-paper section transitions
│   │   ├── RevealOnScroll.tsx# scroll entrance animations
│   │   ├── MediaPress.tsx    # section wrapper
│   │   ├── NewsCarousel.tsx  # carousel, drag, autoplay, states
│   │   ├── NewsCard.tsx
│   │   ├── NewsCardSkeleton.tsx
│   │   └── ui/               # ArrowLink, SectionLabel, Icons
│   ├── data/                 # navigation and static page content
│   ├── hooks/
│   │   ├── useNews.ts        # fetch + loading/error/retry state
│   │   └── useItemsPerView.ts# fully visible cards per breakpoint + peek flag
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
  - Desktop ≥ 1280px → 2 full cards + peek of the third, full navigation
  - Tablet 768–1279px → 2 cards
  - Mobile < 768px → 1 card + hamburger menu

## Responsive Layout

- Breakpoints: **mobile < 768px**, **tablet 768–1279px**, **desktop ≥ 1280px** (`xl:`). The desktop layout keeps the pixel values from the mockup; below `xl` sections switch to flow layouts built from the mobile mockup (`Homepage Mobile` and `Nav mobile`).
- Hero, anniversary title and career banner are absolutely positioned on a 1440px artboard at `xl`. Below that the hero art is scaled down, the anniversary title becomes a centred stack, and the career banner stacks text above the hand and phone.
- Statutory cards are 2 columns below `xl` and 4 at `xl`. Hover effects only apply on devices that can hover, so touch devices see the idle state shown in the mobile mockup.
- Mobile menu: full-screen panel with the scales artwork; "About us" expands its sub-links inline when tapped. On `lg` and up the original two-column menu is used.
- On mobile the news carousel shows **one full card with the next card peeking in at the screen edge**, as in the mobile mockup (`--peek` in `NewsCarousel.tsx`). Tablet shows 2 cards with no peek. Desktop uses the same idea with 2 full cards and a partly visible third. The carousel viewport uses `touch-action: pan-y` so horizontal swipes do not fight page scroll.
- No horizontal scroll at 360, 375, 402, 768, 1024, 1279, 1280, 1440 and 1920px.

## Known Issues / Decisions

- Uses the free Developer tier of The Guardian API (500 calls/day is more than enough). Articles come from the Law section to suit the site.
- **Desktop carousel follows the mockup, not the brief.** The brief says "3 cards visible" on desktop, but the mockup shows two full cards and a cropped third at the right edge. I followed the mockup (a peek carousel), so roughly 2.6 cards are visible. To get exactly three, change `xl:[--n:2.6]` to `xl:[--n:3]` in `NewsCarousel.tsx`, remove `xl:pr-0` / `xl:mr-0` from the same file, and delete the desktop block in `globals.css`.
- The brief names maroon `#8B1A1A`; the site uses crimson `#AA0433` sampled from the mockup.
- The mobile mockup shows a 3-line news title; the brief asks for a 2-line clamp, so the brief wins.
- The phone in the career banner shows the Featured Jobs screenshot supplied with the mockup (`public/images/phone-jobs.webp`).
- The Play button on the anniversary banner opens a placeholder dialog. A video embed URL is still needed.
- Most menu links are `#` placeholders, and the menu search field is not wired up.
- Only the 2025 roadmap state is designed; 2026 and 2027 use placeholder copy.

## Roadmap Status

- [x] **Phase 0** — Project setup, TypeScript, Tailwind, API helper, types, README
- [x] **Phase 1** — Static homepage layout (header, hero, statutory cards, anniversary, footer, menu, paper-shred transitions)
- [x] **Phase 2** — News carousel, Guardian API, loading/error/empty states
- [x] **Phase 3** — Responsive layout (tablet and mobile) and mobile menu
- [x] **Phase 3b** — Desktop peek carousel, drag / swipe sliding, single-card counter
- [x] **Phase 4** — Entrance animations (all bonus items are now done)

All bonus items are done: skeleton cards, autoplay with pause on hover (and while dragging), accessible carousel controls, TypeScript, and scroll / entrance animations.

## Deployment

Live URL: https://lexora.jahvi.online/  or  https://intern-test-lexora.vercel.app/

## License

This is a test submission for the Web Intern position.