# Abdo Elbeherey — Portfolio

Personal portfolio for Abdo Elbeherey, Senior Full-Stack Engineer (.NET & Angular).

The visual design comes from a Google Stitch export ("Engineered Precision" design system). It was ported from a
single Tailwind-CDN HTML file to a proper **Vite + React + TypeScript + Tailwind CSS v3** build, keeping the
layout, colours, typography, spacing, copy and imagery pixel-identical to the export.

## Quick start

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:4317
```

| Script                                                   | What it does                                                   |
| -------------------------------------------------------- | -------------------------------------------------------------- |
| `npm run dev`                                            | Vite dev server on port **4317**                               |
| `npm run build`                                          | Type-check and produce a static build in `dist/`               |
| `npm run preview`                                        | Serve the production build on port 4318                        |
| `npm run check`                                          | Type-check + lint (oxlint) + Prettier check                    |
| `npm run format`                                         | Format everything with Prettier                                |
| `npm run icons`                                          | Regenerate the self-hosted Material Symbols subset (see below) |
| `npm run parity -- <original-url> <build-url> [out-dir]` | Screenshot-diff two URLs at desktop & mobile                   |

The output in `dist/` is a fully static site and can be deployed to any static host (Vercel, Netlify,
Cloudflare Pages, GitHub Pages, S3…).

## Configuration

Edit `.env` (or set the variables in your host):

- `VITE_SITE_URL` — absolute origin used for the canonical URL, Open Graph and JSON-LD tags.
- `VITE_CONTACT_ENDPOINT` — optional JSON form endpoint (e.g. Formspree). When empty, submitting the contact form
  opens a pre-filled email to the address in `src/content/site.ts`. There is no backend.

Contact details and social links live in `src/content/site.ts`.

## Project structure

```
index.html                 SEO / Open Graph / JSON-LD meta, body classes from the design
tailwind.config.ts         Stitch design tokens (colours, radii, spacing, type scale)
src/
  index.css                Self-hosted fonts, Material Symbols subset, base a11y styles
  App.tsx                  Page composition
  content/site.ts          Name, contact details, nav items
  components/
    SiteHeader.tsx         Fixed header with scroll-spy nav
    SiteFooter.tsx
    SectionHeading.tsx     Eyebrow + H2 + lead block shared by sections
    Tag.tsx, Icon.tsx, Container.tsx
    sections/              Hero, CapabilityStrip, SelectedWork, CaseStudy, About,
                           Expertise, Experience, Process, Services, Contact
  assets/                  Localised logo, profile photo and icon font subset
scripts/
  fetch-icons.mjs          Builds the Material Symbols subset from icon names used in src/
  parity.mjs               Visual regression check against the original Stitch HTML
```

## Design system notes

- Tokens are copied verbatim from the Stitch export. Note the **radius scale is shifted**: `rounded` = 2px,
  `rounded-lg` = 4px, `rounded-xl` = 8px and `rounded-full` = 12px (Tailwind's `rounded-2xl`/`3xl` are unchanged).
- Fonts (Inter, Plus Jakarta Sans, JetBrains Mono) are self-hosted via `@fontsource`, limited to the latin subset
  and the weights the design uses.
- Icons use a ~5 KB subset of Material Symbols Outlined (Apache-2.0). After using a new icon name in
  `<Icon name="…" />` or an `icon: '…'` content field, run `npm run icons`.

## Accessibility

Semantic landmarks and heading order, a skip link, visible `:focus-visible` rings, labelled form fields,
`aria-pressed` on the project-type toggles, a live status region for form feedback, decorative icons hidden from
assistive tech, and `prefers-reduced-motion` support.

## Visual parity

`scripts/parity.mjs` renders the original Stitch HTML and this build at 1440px and 390px, full page, and diffs
them. At the time of the port, page heights matched exactly and the mismatch was 0.003% (desktop) and 0.001%
(mobile) of pixels, limited to sub-pixel glyph anti-aliasing.

```bash
# serve the original export somewhere, e.g. python3 -m http.server 4319 in its folder
npm run parity -- http://127.0.0.1:4319/ http://127.0.0.1:4317/ parity-output
```
