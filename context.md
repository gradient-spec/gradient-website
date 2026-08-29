# Gradient Website — Project Context

## Phase
**Phase 12G** — Projects Page Implementation (COMPLETE)
**Phase 12E** — About Page Implementation (COMPLETE)
**Phase 12F** — Events Page Architecture (COMPLETE - Planning Only)
**Phase 12D** — Home Page Implementation (COMPLETE)

## Tech Stack
- **Framework:** React 19 + TypeScript 6
- **Build Tool:** Vite 8
- **Routing:** React Router DOM 7
- **Animation:** Framer Motion 13 (used for route transitions and mobile menu animation)
- **Styling:** Custom CSS design system (no UI library)
- **Fonts:** Playfair Display, Source Sans 3, Geist Mono (via Google Fonts)

## Source of Truth
`Gradient_Design_Experience_Specification_v1.0.docx` — all design, experience, content, and architecture decisions.

## Project Structure
```
src/
├── App.tsx              — Root app component
├── main.tsx             — Entry point
├── router.tsx           — Route configuration (6 approved routes + 404)
├── assets/
│   └── images/          — logo/, events/, boards/, projects/, general/
├── components/
│   ├── global/
│   │   ├── Navbar.tsx           — Global desktop/mobile navigation and active route state
│   │   ├── MobileMenu.tsx       — Fullscreen mobile nav (focus trap, Esc handling, scroll lock, focus restoration)
│   │   └── Footer.tsx           — Shared minimal editorial footer
│   └── DesignSystemPreview.tsx  — Development-only Phase 12B design-system inspection tool
├── data/                        — Typed data placeholders (events, projects, boards)
│   └── timeline.ts              — Contains approved Phase 12E About page timeline data
├── hooks/
│   ├── useScroll.ts             — Tracks scroll position/direction for Navbar scroll state
│   └── useFocusTrap.ts          — Handles keyboard focus trapping for the mobile navigation
├── layouts/
│   └── RootLayout.tsx           — Global application shell (shared Navbar, page content outlet, Footer, route-change focus management, route-transition foundation)
├── lib/                 — Utilities (empty — later phases)
├── pages/               — 6 page shells + NotFound
├── sections/            — Page-specific compositions
│   ├── home/            — Phase 12D completed Home sections
│   ├── about/           — Phase 12E About page sections (AboutHistory, MissionVision, Timeline)
│   ├── events/          — Phase 12F Events page sections (EventsHero, ActiveEvents, PastEvents, EventGallery)
│   └── projects/        — Phase 12G Projects page sections (ProjectsHero, FeaturedProjects, ProjectCollection, ProjectExploration)
├── styles/
│   ├── global.css       — Import entry point
│   ├── fonts.css        — Google Fonts loading
│   ├── tokens.css       — CSS custom properties (design tokens)
│   ├── base.css         — Reset + accessibility foundations
│   ├── layout.css       — Container, grid, section utilities
│   └── typography.css   — Typography utility classes
└── types/               — TypeScript interfaces (events, projects, boards, timeline)
```

## Routes
| Path       | Page     | Status |
|------------|----------|--------|
| `/`        | Home     | Integrated |
| `/about`   | About    | Integrated |
| `/events`  | Events   | Integrated |
| `/projects`| Projects | Integrated |
| `/boards`  | Boards   | Shell  |
| `/contact` | Contact  | Shell  |
| `*`        | NotFound | Shell  |

## Locked Design Decisions
- Brand accent: `#960E29`
- Display font: Playfair Display (+ Italic for emphasis)
- Body font: Source Sans 3
- Mono font: Geist Mono
- Desktop grid: 12 columns
- Max content width: 1200–1400px
- Section padding: 96–128px vertical
- Card gaps: 24–32px
- Golden Ratio: φ ≈ 1.618 (compositional principle)
- No gradients, no neon glow, no UI component libraries

## Deferred Decisions (TEMPORARY values in tokens.css)
- All color tokens except `--color-accent`
- Typography sizes, weights, line-heights, letter-spacing
- Exact spacing scale
- Grid gutters
- Responsive breakpoints
- Border radii and shadow values
- Motion durations and easing
- Dark mode palette

## Key Architectural Notes
- `app/` directory was eliminated due to Windows case collision with `App.tsx`
- Router config lives at `src/router.tsx` instead
- All pages use lazy loading for code splitting
- RootLayout handles route-change focus management (accessibility)
- CSS uses `@import` chain: fonts → tokens → base → layout → typography
- Path alias `@/` → `src/` configured in both Vite and TypeScript
- **Route Transitions**: The current candidate motion choreography uses Framer Motion `AnimatePresence` with a restrained fade and a subtle approximately 10px Y translation. Motion durations and easing remain deferred candidate values.
- **Mobile Navigation**: Supports focus trap, focus entering the menu when opened, Escape-to-close, scroll lock, and focus restoration to the trigger when closed.
- **Footer**: Social/contact destinations are temporary development placeholders and must be replaced with verified Gradient information before production.
- **Phase 12E (About Page)**: The About page architecture consists of exactly four structures: About History / Opening, Mission, Vision, and Timeline (Mission and Vision share a unified `MissionVisionSection.tsx` component). All approved source-of-truth copy has been integrated.
- **Timeline Architecture (Phase 12E)**: The Timeline uses a semantic `<ol>` structure powered by a dedicated `src/types/timeline.ts` and `src/data/timeline.ts`. The timeline contains *exactly* the two approved milestones (2020 — Gradient begins; 2020 onward — SPECATHON) with no fabricated entries.
- **Image Dependency (Phase 12E)**: The About page is textually complete. The only remaining dependency is the supply of authentic Gradient photography to replace the structural development image frame in the History section.

## Recent Changes & Milestones

- **Phase 23A — Gradient Home Route Art Direction (29 Aug 2026):** Completely refactored the Home page components (`HeroSection`, `WhatIsGradientSection`, `FeaturedEventSection`, `HomeCTASection`) to shift from a standard interface to a strong "living brand experience." Established an IMPACT → BREATH → IMPACT → BREATH visual rhythm. Replaced bounded image placeholders with large, intersecting art-directed elements (massive SVG G geometry, scale-shock background typography for Specathon). Removed `CurrentBoardSection` from the Home route to strictly follow the narrative flow of Identity → Idea → Execution → Connection.
- **Initial UI Polish (29 Aug 2026):** Applied a repeating "GRADIENT" watermark, film-grain noise texture, and ambient glow orbs across all pages via `base.css` and `layout.css`. Addressed CSS conflicts in `FeaturedEventSection` and improved placeholder images for `CurrentBoardSection`.
- **Phase 2 — Specathon Launch Support (29 Aug 2026):** Integrated Specathon content into the `FeaturedEventSection`, added an Events page with tabs for Upcoming, Ongoing, and Past events, and set up dynamic routing for individual event pages. Replaced static text with data-driven components. Added detailed Specathon data to `src/data/events.ts`.
- **Website Initial Setup (29 Aug 2026):** Initialized a React application using Vite with a custom CSS styling system (no UI library). Created basic routing (Home, About, Projects, Events, Boards, Contact). Configured a comprehensive theme via `tokens.css`, `layout.css`, and `typography.css`.

## UI Polish Pass (Latest)
Changes made to improve visual depth, fix alignment issues, and reduce emptiness across the site:

### Global Background Enhancements (`base.css`)
- **Watermark**: Added a subtle repeating diagonal "GRADIENT" text watermark via inline SVG `background-image` on `body`. Very faint (`opacity 0.022`) monospace text at `-35deg`.
- **Noise Texture**: Added an `#app-root::before` pseudo-element with an SVG `feTurbulence` noise filter overlay (`opacity 0.035`, `mix-blend-mode: overlay`) for film-grain depth.

### Ambient Glow System (`layout.css`)
- Added `.bg-glow-top-right` and `.bg-glow-bottom-left` CSS classes — radial gradient orbs using the brand accent palette (blue/purple/cyan) at very low opacity. Applied to sections across all pages for cinematic depth.

### Hero Section (`HeroSection.tsx`, `tokens.css`)
- Reduced `--hero-frame-height-desktop` from `70vh` to `55vh` to reduce empty space in the placeholder SVG area.
- Added `bg-glow-top-right` class for ambient glow behind the hero image block.

### Featured Event Section (`FeaturedEventSection.tsx`) — CSS Bug Fix
- **Fixed conflicting CSS**: `.event-layout-grid` was declared twice — once as a 12-column grid and once with `grid-column` positioning. Split into `.event-section-grid` (outer wrapper) and `.event-layout-grid` (inner content grid).
- Added a left-margin label block (matching the editorial pattern of other sections) with "SPOTLIGHT" label and "Featured Event" heading.
- Changed inner event title from `<h2>` to `<h3>` (the section heading is now on the left margin `<h2>`).

### Current Board Section (`CurrentBoardSection.tsx`)
- Changed board member placeholder frame border from `dashed` to `solid` for a more polished look.
- Replaced plain "Image Placeholder" text with a subtle SVG avatar silhouette (head circle + shoulders arc + grid lines) plus member initials.
- Added `bg-atmospheric` and `bg-glow-bottom-left` classes for visual depth.

### CTA Section (`HomeCTASection.tsx`)
- Added `bg-atmospheric` and `bg-glow-top-right` classes for ambient depth.

### Other Pages (About, Events, Projects, Boards, Contact)
- Applied `bg-atmospheric` and/or `bg-glow-*` classes to hero/main sections for consistent visual depth:
  - `AboutHistorySection.tsx` → `bg-atmospheric bg-glow-top-right`
  - `EventsHeroSection.tsx` → `bg-atmospheric bg-glow-bottom-left`
  - `ActiveEventsSection.tsx` → `bg-glow-top-right`
  - `ProjectsHeroSection.tsx` → `bg-glow-bottom-left` (already had `bg-atmospheric`)
  - `BoardsHeroSection.tsx` → `bg-glow-top-right` (already had `bg-atmospheric`)
  - `EditorialClosingSection.tsx` → `bg-atmospheric bg-glow-bottom-left`

