# MyWebResume

Personal résumé site for Christian Rodriguez — IT Project Coordinator / PMO Specialist.
A single-page, bilingual (English / Spanish) portfolio with light and dark themes,
deployed to GitHub Pages.

## Tech stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** with **shadcn/ui** (Radix primitives)
- **Vitest** + **Testing Library** for tests
- **GitHub Actions** for CI and Pages deployment

## Getting started

Requires Node.js 20 (the version CI uses).

```sh
npm ci        # install exactly what the lockfile pins
npm run dev   # dev server on http://localhost:8080
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over the whole project |
| `npm run test` | Vitest, single run |
| `npm run test:watch` | Vitest in watch mode |

## Project layout

```
src/
  lib/content.ts          all site copy, in English and Spanish
  contexts/               LanguageContext (language state + persistence)
  components/
    sections/             Hero, Competencies, Experience, Tools, Education, Contact
    ui/                   shadcn/ui primitives
    LanguageToggle.tsx    EN / ES switch
    ThemeToggle.tsx       light / dark switch
  pages/Index.tsx         composes the sections into the single page
```

## Editing the content

**All copy lives in `src/lib/content.ts`** — no prose is hard-coded in components.
It exports one `content` object with parallel `en` and `es` trees.

Two rules keep it working:

1. **The two trees must stay structurally identical** — same keys, same array
   lengths. The language toggle swaps them wholesale, so any drift drops copy.
2. **Some arrays are index-matched to icons in the components.**
   `competencies.items` pairs with the icon array in `sections/Competencies.tsx`,
   and `education.items` with the one in `sections/Education.tsx`. Adding an entry
   means adding an icon in the same position.

`src/test/content.test.ts` enforces both, so `npm run test` will fail loudly
rather than let the site render half-translated. Adding a section to the résumé
means updating `content.ts`, both icon arrays if relevant, and the counts asserted
in that test.

Because the copy is isolated this way, `content.ts` is also the natural place to
fork variants tailored to a specific job application.

## Language and theme behaviour

Language resolves in this order: a previously saved choice (`localStorage`), then
the browser's `navigator.languages` preference, then English. The choice is saved
on every change and `<html lang>` is kept in sync for accessibility and SEO.
Theme is handled by `next-themes` and likewise persists; the site defaults to light.

## Social preview image

`public/og-image.png` is the 1200x630 card shown when the site is shared on
LinkedIn, Slack, WhatsApp, and similar. Its source is `design/og-image.svg`;
edit that and re-render:

```sh
npx sharp-cli@5 --input design/og-image.svg --output public/ --format png resize 1200 630
```

`sharp-cli` is intentionally not a project dependency — it is only needed on the
rare occasions the card changes. The SVG uses generic font families with common
fallbacks so the render does not depend on Inter or Playfair being installed
locally.

Tests assert that the dimensions declared in `index.html` match the file on
disk, so a re-render at a different size fails rather than silently breaking
previews.

Note the `og:` and `twitter:` tags in `index.html` are always the English ones,
whatever language a visitor picks. Social crawlers read the served HTML without
running JavaScript, so localizing previews for real would need prerendered
per-language pages. The runtime metadata swap fixes the browser tab for the
person reading the site, not the crawler.

## CI and deployment

- **`.github/workflows/ci.yml`** — runs lint → test → build on every pull request
  into `main`, and on pushes to `feat/**`, `fix/**`, and `chore/**` branches.
- **`.github/workflows/deploy.yml`** — builds and publishes to GitHub Pages on
  every push to `main`.

Work on a branch and merge via pull request so changes are gated by CI before
they reach the live site.

`vite.config.ts` derives the Pages base path from the `GITHUB_REPOSITORY`
environment variable when running under GitHub Actions, and uses `/` locally, so
the built site works at both `/MyWebResume/` and the dev server root without
manual configuration.

## Origin

Scaffolded from a generic Vite + React + shadcn/ui template and since rewritten.
