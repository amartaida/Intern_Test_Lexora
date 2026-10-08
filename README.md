# Lexora of Singapore — Web Intern Test Case

Implementation of the Lexora of Singapore homepage mockup with a live News carousel powered by The Guardian API.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
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
NEXT_PUBLIC_GUARDIAN_API_KEY=your_real_key_here
```

#### How to get a free Guardian API key

1. Go to → [https://open-platform.theguardian.com/access/](https://open-platform.theguardian.com/access/)
2. Choose **Developer** key (free, non-commercial)
3. Fill in the short form (name, email, brief description)
4. Key is sent immediately by email

> During development you can temporarily use the public test key `test`  
> (rate-limited and some fields may be stripped).

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build & Deploy

```bash
npm run build
npm start
```

Or push to GitHub and import the repo on [Vercel](https://vercel.com) — it will detect Next.js automatically.

## Project Structure (Phase 0)

```
lexora-website/
├── public/                 # static assets
├── src/
│   ├── app/
│   │   ├── globals.css     # Tailwind + design tokens (maroon, gold…)
│   │   ├── layout.tsx      # Root layout + metadata
│   │   └── page.tsx        # Homepage (placeholder for now)
│   ├── components/         # (to be added in Phase 1+)
│   ├── lib/
│   │   └── guardian.ts     # Guardian API helper + date formatter
│   └── types/
│       └── news.ts         # TypeScript interfaces for API & cards
├── .env.example
├── next.config.ts
├── package.json
├── tailwind / postcss config
└── README.md
```

## Design Notes

- Primary color: Maroon `#8B1A1A`
- Accent: Gold / Amber
- Figma reference: [Web Test Case](https://www.figma.com/design/6XKkcfeMx3iEAVxmGiJAS6/Web-Test-Case)
- Mobile breakpoints follow the brief:  
  - Desktop ≥ 1280px → 3 cards  
  - Tablet 768–1279px → 2 cards  
  - Mobile < 768px → 1 card + hamburger

## Known Issues / Decisions
- Using the free Developer tier of The Guardian API (500 calls/day is more than enough).

## Roadmap Status

- [x] **Phase 0** — Project setup, TypeScript, Tailwind, API helper, types, README
- [ ] Phase 1 — Static homepage layout (Navbar, Hero, Statutory cards, Anniversary, Footer)
- [ ] Phase 2 — News carousel + real API data + loading/error states
- [ ] Phase 3 — Full responsive polish
- [ ] Phase 4 — Bonus (skeletons, autoplay, a11y, animations)

## License

This is a test submission for the Web Intern position.
