# Janine Ubal — Portfolio

A responsive, dark portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide React. Includes a homepage and two professional case studies. No backend, database, authentication, or contact service is required.

## Local setup

Use Node.js 22 LTS or a newer version supported by Next.js, and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Copy `.env.example` to `.env.local` and set the production URL when known. Geist is bundled locally with its SIL Open Font License in `public/fonts/`; builds do not need Google Fonts access. Font source: [Vercel’s Geist repository](https://github.com/vercel/geist-font).

## Checks and production build

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`typecheck` generates Next.js route types before running TypeScript. Dependencies are locked in `package-lock.json`; use `npm ci` for reproducible installs.

TypeScript 6 and ESLint 9 are used for compatibility with the current Next.js lint plugins. At implementation time, npm reports five high-severity development-only advisories through the lint tooling’s `braces` dependency chain. Avoid the suggested forced downgrade to Next.js 14 lint configuration; reassess when an upstream compatible fix is available.

## Structure

- `src/data/portfolio.ts`: typed personal content, skills, project contributions, and challenges.
- `src/components/sections/`: homepage sections.
- `src/components/layout/`: shared navigation and footer.
- `src/components/ui/`: section headings, accessible illustrations, social links, and motion wrapper.
- `src/components/case-study.tsx`: shared case-study layout.
- `src/app/projects/workforce-management/` and `src/app/projects/bcp-training/`: dedicated routes and metadata.
- `src/app/`: global styles, metadata, generated Open Graph image, favicon, robots, sitemap, and not-found page.

Illustrations use lightweight HTML/CSS and Lucide icons. They are explicitly labeled as illustrative, contain no real company screenshots or records, and are not interactive application interfaces. Case studies summarize only supplied contributions; they do not expose private code or proprietary architecture.

## Accessibility and responsive review

Includes semantic landmarks, a skip link, visible focus styles, keyboard-operable mobile navigation (Escape closes it), active desktop section markers, reduced-motion support, and conditional links. Review at 320, 375, 768, 1024, and 1440px after content edits. Check keyboard navigation, mobile menu, case-study links, resume download, mailto links, and reduced-motion settings.

Framework references: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Motion for React](https://motion.dev/docs/react-installation).
