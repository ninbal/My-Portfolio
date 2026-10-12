# Janine Ubal — Portfolio

A responsive, dark portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide React. Includes a homepage and two professional case studies. No backend, database, authentication, or contact service is required.

## Local setup

Use Node.js 22 LTS or a newer version supported by Next.js, and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Copy `.env.example` to `.env.local` and set the production URL when known. Geist is bundled locally with its SIL Open Font License in `public/fonts/`; builds do not need Google Fonts access. Font source: [Vercel’s Geist repository](https://github.com/vercel/geist-font).

## Configuration before sharing

Edit `src/data/portfolio.ts`:

- `profile.employer`: replace `[Employer name]` with your employer’s approved public name.
- `profile.email`: add your actual email address.
- `profile.github` and `profile.linkedin`: add full HTTPS profile URLs. Empty or malformed URLs are not rendered.
- `profile.resume`: add your real PDF in `public/resume/`, then set `/resume/janine-ubal-resume.pdf`. Until configured, the resume button is disabled and marked “Soon”. Verify that the configured file exists.
- `profile.photo`: place your portrait in `public/images/` and set `/images/janine.jpg` (or your actual filename). A portrait-oriented image works best; it is cropped to a 4:5 area, aligned to the top, with soft fading edges and a blurred violet glow. Until configured, the hero shows an initials placeholder. The photo appears to the right on desktop and below the introduction on smaller screens.
- `profile.openToOpportunities`: defaults to `false`; set `true` to show the optional badge.
- Set `NEXT_PUBLIC_SITE_URL` to your actual HTTPS production origin. This enables canonical URLs and sitemap entries without inventing a domain. Rebuild after changing it.

Contact details are deliberately blank. The contact section shows an unavailable state until the real email is configured. Do not publish personal details or employer information without reviewing them.

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

## Deploy to Vercel

Nothing is published automatically by this project.

1. Create your personal GitHub repository and push this source (exclude `.env.local`, `node_modules`, and `.next`).
2. In Vercel, choose **Add New Project**, import that repository, and select the Next.js preset.
3. Use `npm run build` as the build command and the default Next.js output settings.
4. Set `NEXT_PUBLIC_SITE_URL` to your assigned production HTTPS URL (or your custom domain) and deploy. If the URL is assigned on the first deploy, add it and redeploy.
5. Verify all routes, social previews, sitemap, and configured personal links on production.

To add a custom domain later, use the project’s **Settings → Domains**, enter your domain, and apply the DNS records Vercel provides at your registrar. Once verified, update `NEXT_PUBLIC_SITE_URL` to the preferred HTTPS domain and redeploy. Keep the alternate domain redirected to the preferred one.

Framework references: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Motion for React](https://motion.dev/docs/react-installation).
