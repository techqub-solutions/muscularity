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
- Scroll-driven CSS (`animation-timeline`): put the timeline and range in a separate `&:where(*)` rule (see `global.css`); in one rule the minifier folds them into the `animation` shorthand and browsers drop it. Never `overflow-hidden` on a section that contains scroll animations (it becomes a scroll container and freezes them): use `overflow-clip`. Nothing may slide sideways outside a clipping row, or phones zoom out.
- Design system (use it, don't invent new styles): `btn` = green slash button, `link` = underlined action, `display` = condensed headline, `eyebrow` = small label, `prose` = Markdown text, `reveal` = rise on scroll, `swipe` = swipe row on phones / grid from md, `stagger` = items come in one by one (put it on a row or grid), `rise-lines` = heading lines rise out of a mask, `slash` / `slash-load` = green slab uncovers a photo (on scroll / on load), `drift` = parallax (`[--drift:10%]`), `nudge` = swipe arrow nudge, `count` = number counts up (`style="--n: 22"`), `short:` = phones held sideways. Shapes are cut at the logo's angle (clip-path / skew).
- Components: `SectionHead` (label + heading + intro for every home section), `PageHero` (inner-page top + breadcrumbs; `band={false}` on form pages), `ServiceGrid`, `ClientVideos` (the `site.json` videos), `Faq` (+ schema), `WaForm` (form → WhatsApp message), `SwipeHint` ("6 programmes · Swipe →" above a `swipe` row, phones only), `Icon`.
- Phones: no offer bar (tablet and up only). The Call · WhatsApp · Free trial bar (`#quick-actions` in `Footer.astro`) slides up on the home page once `#hero-cta` has scrolled away, hides while a text field has focus and clears the iPhone home indicator (`viewport-fit=cover` + safe-area padding). Tap targets at least 44 px; cards press in on tap (`active:`).
- Client videos: `public/videos/clients/`, listed in `site.json` `videos`. 720 px wide, H.264, faststart, with a `.webp` poster and a phone file `small` (`NAME-sm.mp4`, 480 px; commands in `README.md`).
- Photos in `src/assets/photos/` are **placeholders** (old theme stock, licence unknown). Replace them all before launch.
- Home hero = "out of bounds": the photo in a slanted frame + the same people cut out (`hero-cutout.png`, same size as the photo) on top, so they step out of the frame. Never put a cut-out on a different photo (light won't match). Cut-outs are made locally with `rembg` (Python, model `isnet-general-use`).
- `#menu` is a native popover. Never give it a display class, or it shows when closed.

## Local run

- Start the preview `muscularity-new` (`.claude/launch.json`) → http://localhost:4321. Don't also run `astro dev` in the background: two servers fight over port 4321.
- Mobile/visual checks: preview `muscularity-dist` serves the production build on :4322 (run `npm run build` first; no dev toolbar in the way).
- `npm run build` must pass before every commit.
- Docs: https://docs.astro.build (routing, components, content collections, styling, i18n).

## OPEN — confirm before building anything that depends on these

- [ ] **Founder name.** Old metadata says `Ramiz Girach`, which is the old developer (the old template says
      "Developed By Ramiz Girach"). `/about-founder` and the testimonials say (Mohammed) Akram.
      Blocks: About pages, schema, Google Business Profile, citations.
- [ ] **Areas actually served.** Needed before writing any area pages.
- [ ] **GA4** `G-4D1XENMZCR` is in the old template. Who owns it?
- [ ] **Site uptime.** The old site was unreachable on 21 and 22 Sept.
- [ ] **Baseline enquiry volume.** Comes from the old DB backup, which the user gives at launch.

## CONFIRMED

<!-- Move items here as they are settled. Format: fact — date confirmed. -->

- Old site: custom PHP (CodeIgniter 3.1.6) on Hostinger; replaced by this rebuild — 22 Sept 2026
- Old "shop" (cart, 5 products) was template demo markup with no shop code; not rebuilt — 22 Sept 2026
- Email (MX) and DNS are at Hostinger. At launch, change only the website records — 22 Sept 2026
- Hosting: Vercel (a client site is commercial use, so the Pro plan), connected to the GitHub repo: every push deploys — 15 Oct 2026
- Price: one price, AED 165 / session, may vary by location; the old packages (AED 135–195) are dropped — 16 Oct 2026
- Social media: Instagram only (`muscularityfitnessuae`). No Facebook or LinkedIn on the site — 16 Oct 2026
- Old sitemap last modified: January 2025
- Old robots.txt: auto-generated placeholder, no Sitemap directive
- No structured data anywhere on the old site
- No Arabic version, no hreflang
- Blog: 3 posts, all titled "Muscularity Fitness", no author, no date

## Conventions — apply without being asked

**Prices:** always `AED 165 / session`. Never `165/-`, never a bare number. One price for every service, from `site.json` `price`; wherever it appears, say it may vary by location.

**URLs:** keep every old URL. One canonical page per service:
```
/services/<slug>                 ← keep
/services/details/<slug>         ← 301 to the above, not in the sitemap
/book-a-trail                    ← 301 to /book-a-trial
```
Real 301s live in `vercel.json` (Astro's `redirects` only make meta-refresh pages on a static build). Add every new redirect to both.

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
