# Muscularity Fitness — new website (rebuild)

Claude Code loads this file automatically. Keep it short and factual.
When something is confirmed, move it from OPEN to CONFIRMED.

## Project

- **Client:** Muscularity Fitness: personal training at home, outdoors and in the gym. Abu Dhabi, UAE
- **Site:** muscularityfitness.com, rebuilt from scratch (approved 22 Sept 2026). Plan: `PLAN.md`. Progress: `TASKS.md`
- **Old site:** `../Muscularity- Fitness` (PHP, CodeIgniter 3.1.6, Hostinger). Used as a content source only. No fixes (user's decision); it is replaced at launch
- **Delivered by:** TechQub Solutions, solo

## Stack

- Now: Astro 7 (static, zero JS by default), Tailwind CSS 4, Astro fonts API (Archivo, self-hosted), `@astrojs/sitemap`
- Content: `src/content/` (services, blog, careers as Markdown; `site.json` for NAP, prices, testimonials, FAQs), schemas in `src/content.config.ts`
- Later: Astro Actions + Resend + Turnstile (forms), Postgres/Neon (leads), GSAP (home hero only)

## Code rules

- Light and short (see the global `CLAUDE.md`). No new dependency without a clear need.
- Brand tokens live in `src/styles/global.css` (`@theme`). Use them (`bg-ink`, `text-fg`, `text-muted`, `bg-green`, …), never raw hex.
- Green buttons use black text. White on this green fails contrast.
- Name, phone, hours and links come only from `src/content/site.json`, so NAP matches everywhere.
- Every page uses `layouts/Base.astro` with `title` (the keyword only; ` | Muscularity Fitness` is added for you) and `description`.
- Motion: CSS first, only transform/opacity, reduced motion always respected. GSAP only on the homepage.
- Design system (use it, don't invent new styles): `btn` = green slash button, `link` = underlined action, `display` = condensed headline, `eyebrow` = small label, `prose` = Markdown text, `reveal` = rise on scroll, `count` = number counts up (`style="--n: 22"`). Shapes are cut at the logo's angle (clip-path / skew).
- Components: `PageHero` (inner-page top + breadcrumbs), `ServiceGrid`, `Faq` (+ schema), `WaForm` (form → WhatsApp message), `Icon`.
- Photos in `src/assets/photos/` are **placeholders** (old theme stock, licence unknown). Replace them all before launch.
- Home hero = "out of bounds": the photo in a slanted frame + the same people cut out (`hero-cutout.png`, same size as the photo) on top, so they step out of the frame. Never put a cut-out on a different photo (light won't match). Cut-outs are made locally with `rembg` (Python, model `isnet-general-use`).
- `#menu` is a native popover. Never give it a display class, or it shows when closed.

## Local run

- Start the preview `muscularity-new` (`.claude/launch.json`) → http://localhost:4321. Don't also run `astro dev` in the background: two servers fight over port 4321.
- `npm run build` must pass before every commit.
- Docs: https://docs.astro.build (routing, components, content collections, styling, i18n).

## OPEN — confirm before building anything that depends on these

- [ ] **Founder name.** Old metadata says `Ramiz Girach`, which is the old developer (the old template says
      "Developed By Ramiz Girach"). `/about-founder` and the testimonials say (Mohammed) Akram.
      Blocks: About pages, schema, Google Business Profile, citations.
- [ ] **Hosting.** Vercel Pro (commercial use needs Pro) or Cloudflare (free).
- [ ] **Areas actually served.** Needed before writing any area pages.
- [ ] **GA4** `G-4D1XENMZCR` is in the old template. Who owns it?
- [ ] **Site uptime.** The old site was unreachable on 21 and 22 Sept.
- [ ] **Baseline enquiry volume.** Comes from the old DB backup, which the user gives at launch.

## CONFIRMED

<!-- Move items here as they are settled. Format: fact — date confirmed. -->

- Old site: custom PHP (CodeIgniter 3.1.6) on Hostinger; replaced by this rebuild — 22 Sept 2026
- Old "shop" (cart, 5 products) was template demo markup with no shop code; not rebuilt — 22 Sept 2026
- Email (MX) and DNS are at Hostinger. At launch, change only the website records — 22 Sept 2026
- Old sitemap last modified: January 2025
- Old robots.txt: auto-generated placeholder, no Sitemap directive
- No structured data anywhere on the old site
- No Arabic version, no hreflang
- Blog: 3 posts, all titled "Muscularity Fitness", no author, no date

## Conventions — apply without being asked

**Prices:** always `AED 135 / session`. Never `135/-`, never a bare number.

**URLs:** keep every old URL. One canonical page per service:
```
/services/<slug>                 ← keep
/services/details/<slug>         ← 301 to the above, not in the sitemap
/book-a-trail                    ← 301 to /book-a-trial
```

**Spelling:** it is **trial**, never "trail". Check every button, heading, URL and alt attribute before committing.

**Titles:** unique per page, `Primary Keyword | Muscularity Fitness`. `Base.astro` adds the suffix.

**Every page needs:** one H1, a unique meta description, a canonical tag (`Base.astro`), alt text on
every image, and an internal link to the booking page.

**Schema:** `LocalBusiness` site-wide (`Base.astro`), `Service` on service pages, `Article` on posts,
`FAQPage` where FAQs exist, `BreadcrumbList` throughout. Validate in the Rich Results Test before committing.

## Never

- Never invent a certification, a review count, a client number or a result.
  If it is not confirmed in writing, it does not go on the site.
- Never add `AggregateRating` schema without genuine, verifiable reviews.
- Never publish a before/after photo without written consent on file.
- Never machine-translate the Arabic version.
- Never drop an old URL without a 301 in place.
- Never state a speed or ranking figure that was not measured.

## Related files

- `PLAN.md`: the approved rebuild plan (stack, design, animations, pages, phases)
- `TASKS.md`: the task list by phase. Tick items as you go
