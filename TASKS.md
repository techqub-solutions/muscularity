# Muscularity Fitness — tasks by phase

Tick items as you go and commit this file with the work. The plan is in `PLAN.md`; rules and open
questions are in `CLAUDE.md`. Every phase ends with the user's approval.

**Launch** = must be done before the DNS switch. Full site + SEO audit: 15 Oct 2026.

**Status, 16 Oct 2026:** 73 done, 97 open. Live: https://muscularity-theta.vercel.app/ (production on Vercel). Biggest blockers: real photos, founder name, written consent for the videos and testimonials.

---

## Phase 0: client inputs (collect while we build)

- [ ] Photo and video shoot: trainers, sessions at home, outdoors and in the gym, founder portrait, vertical clips
- [ ] Logo as a vector file (SVG/AI). The old site only has the template's red demo logo
- [ ] Founder name, role (founder, trainer or both), certifications with issuer and year
- [ ] Trainers: names, photos, certifications, languages, male/female
- [ ] Areas served in Abu Dhabi
- [ ] Address and business name exactly as on the trade licence. Own gym, or client home / outdoors / partner gyms?
- [x] Pricing: one price for everything, AED 165 / session, which may vary by location (16 Oct 2026). The old 4 packages + 2 custom plans are gone
- [ ] Testimonials: written permission, area, measurable result; Google reviews link
- [x] Social: Instagram `muscularityfitnessuae` is the only account (16 Oct 2026). Added to `site.json` (footer + `sameAs`); the old Facebook link removed, no LinkedIn
- [ ] **Google Business Profile.** The old site links to a Google Maps listing called "Muscularity Fitness". Who owns it? Get manager access. **Launch**
- [ ] **Written consent** from everyone shown in the 3 client videos (older-adults section). **Launch**
- [ ] Older-adults training: is it a real, separate offer (trainers, price)? If yes, it gets its own page
- [ ] "Cross Fit" naming: CrossFit is a registered trademark. Is the business an affiliate? If not, choose another name (the URL `/services/cross-fit` stays)
- [ ] Years active, number of clients trained (only if confirmed in writing)
- [ ] Insurance and safety statement
- [ ] Are the 4 job roles still open? Salary range and location?
- [ ] Access: Hostinger DNS, GA4, Search Console, Google Business Profile
- [x] Hosting decision: Vercel (15 Oct 2026)

## Phase 1: foundation ✅ (22 Sept 2026)

- [x] New project `Muscularity Fitness New` (Astro 7) with local git
- [x] Tailwind CSS 4 with brand tokens (colours, font, motion easing)
- [x] Archivo self-hosted: one font file, preloaded
- [x] Light logo, mark and wordmark + favicons made from the old PNG logo
- [x] Base layout: title format, description, canonical, Open Graph, `LocalBusiness` schema, skip link
- [x] Header: logo, nav, services dropdown, Book CTA, mobile menu (native popover; a few lines of JS close it on same-page links)
- [x] Footer: services, company, contact (from `site.json`), mobile Call · WhatsApp · Book bar
- [x] Page transitions (CSS only) and reduced-motion support
- [x] Sitemap generated
- [x] GitHub repo connected to Vercel; first deploy 15 Oct 2026 (PR #1). Deployments sit behind Vercel login, so the production address and the 301 test are still to do

## Design ✅ (22 Sept 2026)

- [x] Research: Abu Dhabi competitors + "AI-looking website" patterns; critique of the first draft
- [x] 3 directions tested (Poster, Monogram, Session card) → mix chosen: dark gym look, logo-angle "slash" shapes, condensed type, booking card
- [x] Design system in `global.css`: slash button, `display`/`eyebrow` type, prose, scroll reveal, marquee
- [x] Round 2 (research: Ultimate Performance, UAE home-PT market, conversion studies): "Built for your life" audience banners, numbers banner, client quotes beside every booking button, programme finder in the booking card, offer bar, service "try it free" banner, photo headers, desktop WhatsApp button, reading times, brand slash-reveal motion
- [x] Older-adults section + 3 client videos on the home page; restyled to the design system, largest video 58 MB → 5.3 MB, posters added (15 Oct 2026)

## Phase 2: content (draft done 22 Sept 2026, needs client review)

- [x] Content collections: services ×6, blog ×3, careers ×4 (title + description required, so the build fails without them)
- [x] All old text moved in and rewritten: shorter, benefit first, facts only from the old site
- [x] Cross Fit page written new (the old page was empty)
- [x] Home FAQs (7) + 3 FAQs per service
- [x] Packages ×4 with AED prices + 2 "priced to your goal" in `site.json` (replaced 16 Oct by one price: `site.json` `price`)
- [x] Testimonials ×5, word for word from the old site
- [x] ~~What each package includes~~: not needed any more, there is one price (16 Oct 2026)
- [ ] **Testimonial permission** + area + result (client)
- [ ] **Replace every placeholder photo** with the shoot. The current ones are the old theme's stock images and their licence is unknown. **Launch blocker**
- [ ] Logo as a vector file (currently made from the old PNG)
- [ ] Blog: rewrite the 3 posts (360–450 words, generic). Abu Dhabi angle, links to the matching services, real author and date. Fact-check the health claims in "Rebooting your body's vital organs" (detox, organ claims): Google holds health content to a higher standard
- [ ] Careers: roles are ~100 words each. Add duties, location, salary, start date (also needed for `JobPosting`)
- [ ] Older-adults copy: confirm "our experienced trainers" and the "Results" labels on the videos with the client

## Phase 3: pages (built 22 Sept 2026)

- [x] Home: hero, marquee, services, how it works + booking card, prices, founder, testimonials, BMI, FAQ, blog
- [x] Services ×6 (one template): hero, who it's for, text, sticky price card, FAQ, related, `Service` + `FAQPage` + `BreadcrumbList` schema
- [x] About, Founder (`Person` schema), Contact (`ContactPage` schema)
- [x] Book a free trial: pre-fills from the home card and service pages; sends a WhatsApp message; "what happens next"
- [x] Careers hub + 4 roles (apply by email), Blog index + 3 posts (`Article` schema)
- [x] Privacy, Terms, friendly 404
- [x] Old URLs redirect: `/book-a-trail`, `/about-ceo`, `/services/details/*` (real 301s are in `vercel.json`)
- [x] Unique title + meta on every page; one H1; canonical; breadcrumbs
- [ ] Confirm founder name, role and certifications (then add certifications)
- [ ] Confirm the 4 job roles (duties are drafts), location, salary; then add `JobPosting` schema
- [ ] Privacy and Terms: legal review; correct legal business name and address. Terms still mention "packages" (paid in full, pausing a package): check with the client now that there is one price per session
- [ ] Contact: map + trade-licence address; stated response time (the page has only 63 words)
- [ ] Blog: real author and publish dates
- [ ] About: `AboutPage` + `Organization` schema; certifications with issuer and year; insurance statement
- [x] Hours, phone and email in page text and descriptions now come from `site.json` (15 Oct). Still typed by hand: the legal Markdown pages and two hour-specific lines (marked "keep in step with site.json hours")
- [x] Removed the unconfirmed "We reply to every application" promise from the job pages

## Phase 4: forms and leads

- [x] Interim (works now, no backend): booking and contact forms open WhatsApp with the answers filled in
- [ ] Astro Actions for trial, contact and careers forms
- [ ] Resend: verify the domain; **merge** SPF with Hostinger's, never replace it
- [ ] Turnstile + honeypot on every form
- [ ] Postgres (Neon) leads table
- [ ] Email to the gym (not a developer) + auto-reply to the customer; test the sender name
- [ ] "Chat on WhatsApp now" after submit; WhatsApp links pre-filled with the service name
- [ ] CVs sent as email attachments only, never stored publicly
- [ ] GA4 events: form submit, WhatsApp click, phone click

## Phase 5: motion and polish

- [x] Scroll reveals (CSS scroll-driven)
- [ ] Hero: GSAP SplitText headline + video loop (homepage only)
- [x] Services marquee; card hovers; testimonial swipe slider
- [x] WhatsApp button pulse (desktop button; off with reduced motion)
- [x] Number counters (confirmed numbers only: 22+ years, 6 disciplines, 3 places, 7 days)
- [x] BMI calculator with animated marker + booking link
- [ ] Accessibility pass: keyboard, reduced motion. Real-phone check still to do (iPhone Safari + Android Chrome, incl. the bottom bar near the home indicator)
- [x] Mobile audit (15 Oct): all 23 pages checked at 320 / 360 / 375 / 390 px + landscape. Fixed: words split mid-word in big headings, 14–20 px tap targets (footer, breadcrumbs, small links), WhatsApp form silently failing in Instagram/Facebook in-app browsers (now falls back + "tap here" link), contact number wrapping, weak photo overlays on phones, testimonial cards off the page edge, WhatsApp button covering footer links, very tall service cards, menu scroll leaking to the page, no tap feedback on buttons
- [x] Contrast check of 12 pages (15 Oct): all text passes except the faded step numbers, which are decorative and now hidden from screen readers
- [x] Mobile menu stayed open after tapping a same-page link (Pricing on the homepage); now closes
- [x] Phones scrolled 4 px sideways (green slab behind the founder photo); fixed on home and founder pages
- [x] Home H1 read "Abu DhabiYour trainer.Your place." to search engines and screen readers; spaces added
- [x] Offer bar text 10 px → 12 px on phones; wraps cleanly at 320 px
- [ ] Captions for the client videos if they contain speech (two have sound)

## SEO: fix before launch (audit 15 Oct 2026)

Already passing: one H1 per page, unique titles (all ≤ 61 characters), descriptions on every page, canonical
tags, no broken internal links, no skipped heading levels, sitemap with only canonical URLs, robots.txt
with the `Sitemap:` line, every old sitemap URL (27) covered, booking link on every page, no external JS.

**Crawling and redirects**
- [x] **Real 301s.** On a static build Astro's `redirects` only make meta-refresh pages, so the 301s for `/book-a-trail`, `/about-ceo`, `/services/details/:slug`, `/admin/:path*` are in `vercel.json` (15 Oct). Check them with `curl -I` after the first deploy. **Launch**
- [x] 301 the old template pages the old site still links to: `/cart.html`, `/checkout.html` → `/`; `/blog.html`, `/blog-details.html` → `/blog`. **Launch**
- [x] One URL per page: `"trailingSlash": false` in `vercel.json`, so `/about-us/` redirects to `/about-us`. **Launch**
- [x] Sitemap `lastmod`: left out on purpose. Google ignores it unless it is accurate, and a build date on every page would not be
- [x] Video notes moved from `public/videos/README.md` (it was published on the site) into `README.md`

**Titles, descriptions, sharing**
- [x] About title repeated the brand; now "About Us: Abu Dhabi Personal Training"
- [x] X/Twitter card tag in `Base.astro`: large card on blog posts (they have a photo), small card elsewhere until the share image exists
- [x] `og:type` = `article` on blog posts
- [ ] A 1200×630 share image (the default is the 512 px square logo)
- [x] Short descriptions lengthened: 4 job pages and contact are now 144–160 characters

**Structured data**
- [x] `LocalBusiness`: `logo`, `priceRange` (AED 165 per session), `areaServed`, and an `@id` that `Service`, `Article`, `Person` and `WebSite` point to
- [ ] `LocalBusiness` after client confirmation: `hasMap` (the Maps listing), street address (Instagram is in `sameAs` since 16 Oct)
- [x] `WebSite` schema on the homepage (helps Google show the site name)
- [x] `BreadcrumbList` on `/about-founder` (the only inner page without it)
- [ ] `Article`: `datePublished`, `dateModified`, author as a `Person` once known
- [ ] Note: Google only shows FAQ rich results for government and health sites, so `FAQPage` here won't give FAQ snippets. Keep it, but don't promise them

**On-page and internal links**
- [x] Service H1s now end with a smaller green "in Abu Dhabi" line (e.g. "Cross Fit in Abu Dhabi")
- [x] "Pair it with" now shows the next 3 services in order, so every service page gets 4 in-content links (was 6, 6, 6, 4, 1, 1)
- [x] Blog posts now link in the text to related services (and the cardio guide), 2 links each
- [ ] When the real photos arrive: descriptive alt text on content photos (cards can stay decorative)

**Measurement**
- [ ] Verify the domain in Search Console (DNS TXT at Hostinger) before the switch, so data starts on day one. **Launch**
- [ ] If the old site has a Search Console property: export its queries and pages (12 months) as the SEO baseline. **Launch**
- [ ] Update the privacy policy when analytics goes live (it currently says no tracking cookies). **Launch**
- [ ] Measure LCP on a real phone on the preview link: the hero loads two images (photo + cut-out, ~290 KB at desktop size)

**Live site checks (muscularity-theta.vercel.app, 15 Oct 2026)**
- [x] Passed: all 27 old URLs end on a page; old-URL redirects are 301; trailing slash 308; unknown pages 404; Schema.org validator 0 errors / 0 warnings on every page type; Lighthouse mobile: home 97 / 96 / 100 / 100, service page 100 across, booking 99 / 100 / 100 / 92, blog post 100 across
- [ ] `X-Robots-Tag: noindex` on the `*.vercel.app` host (`vercel.json` header with a host condition), so the temporary address never gets indexed. **Launch**
- [ ] Security headers in `vercel.json`: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` / `frame-ancestors`, `Permissions-Policy`; HSTS on the real domain
- [ ] Cache `/videos/*` (served with `max-age=0` now)
- [ ] WhatsApp "tap here" link: give it `site.whatsappUrl` by default (Lighthouse SEO 92 on /book-a-trial: "links are not crawlable")
- [ ] Images: add smaller `widths` (PageHero jumps 640 → 1280; the home page could save ~155 KB on phones); try AVIF
- [ ] The brand-font swap is the only layout shift on home (CLS 0.089 mobile / 0.096 desktop, limit 0.1): tune the Archivo fallback or `font-display`
- [ ] Faded step numbers (`text-ink/25`) still fail Lighthouse contrast (a11y 96): `text-ink/50` passes 3:1 at that size

## Mobile and design plan (16 Oct 2026, from studying competitor sites)

References: Ultimate Performance (ultimateperformance.com, the benchmark for personal-training sites), DubaiPT (dubaipt.com), WeTrain (wetrainae.com, UAE home training, 100+ trainers), ServiceMarket (marketplace).
Today on a 390 px phone the home page is 21.5 screens long, the first screen is text only (the photo starts at its bottom edge), the price is at screen 8 and client reviews at screen 11. Competitors show proof right under the hero.

**Shorter, clearer home page on phones (goal: ~14 screens)**
Done 16 Oct 2026: on a 390 px phone the home page went from 21.5 to 15.8 screens; the booking card is at screen 2 (was 6.7), the price at 5 (was 8.3), client reviews at 8 (was 11.5). All 24 pages pass the mobile checks at 320 and 375 px.
- [x] Proof strip right after the hero: 3 short client quotes + "All reviews" link (U.P. and DubaiPT put reviews straight under the hero)
- [ ] Add the Google rating + review count to the proof strip once the Google Business Profile has real reviews
- [x] Quick booking card ("Where? Your goal?") moved up to screen 2 on phones, before the three steps (DubaiPT's hero is a matching form)
- [x] Hero on phones: the photo is inside the first screen; the Where / When / Price facts sit under it
- [x] "Built for your life" cards as a swipe row on phones (new `swipe` style in `global.css`)
- [x] The six services as a swipe row on phones (`ServiceGrid`, so the related services on service pages too)
- [x] Older-adults section: short teaser + videos on the home page; the full text is on the new `/older-adults` page (linked from the footer)
- [x] Blog cards (and the client videos) as swipe rows on phones
- [x] New order: hero → client quotes → quick booking + how it works → services → who we train → price → numbers → founder → reviews → older adults → BMI → FAQ → blog

**Trust: what makes competitors look established**
- [ ] `/trainers`: a card per trainer with photo, certifications, years, languages (Arabic / English), male / female, and "Book a free session with …" (DubaiPT, WeTrain), with `Person` schema (client: trainer details)
- [ ] `/results`: real client stories with numbers, only with written consent (U.P.'s strongest section). Start with the 3 videos once consent is in writing (client)
- [ ] "Read on Google" link under the client quotes; never invent a rating or a review count
- [ ] Certification / registration badges (e.g. REPs UAE) only if the client confirms them in writing (client)
- [ ] Trade-licence name, number and address in the footer, as UAE businesses usually show (client)
- [ ] Partner or corporate-client logos, only if real and approved (client)
- [ ] Female trainers / ladies-only sessions, which WeTrain highlights: strong demand in the UAE, only if confirmed (client)

**Guiding visitors by goal and area**
- [ ] Goal cards on the home page (Lose weight / Build muscle / Move better / Older adults) linking to the right service, like U.P.'s goal section
- [ ] "Areas we cover" list once the client confirms it, then the area pages (DubaiPT lists every area) (client)
- [x] Keep the one clear price (AED 165 / session, varies by location): none of the competitors show a price, so it is a strength

**Professional finish**
- [ ] Real photos and short vertical clips: the biggest single upgrade (client). **Launch**
- [ ] Vector logo, 1200×630 share image, web app manifest (name and icon when the site is saved to a phone's home screen)
- [ ] Hero video loop (home page only) once real footage exists
- [ ] Dates and a named author on blog posts; one new post a month

## Mobile pass 2 (audit 18 Oct 2026)

Production build, all 24 pages at 320 / 375 / 390 px, a small phone (375 × 667, iPhone SE size) and landscape (812 × 375).
Already fine: no sideways scrolling anywhere, every form field is 16 px or more (no iPhone zoom), headings wrap cleanly.
What's wrong: on a 375 × 667 phone the home page is 19.8 screens long (16.3 at 375 × 812), the hero photo starts below the
first screen, and on a service page the price is 3.4 screens down. Work order: sections 1–4 first (small, high impact), then 5–7. Section 8 needs real phones.

**Done 18 Oct 2026 (sections 1–4):** home page 16.3 → 14.9 screens at 375 × 812 and 19.8 → 18.2 at 375 × 667 (goal not reached: the longest
parts left are older adults, how it works, price and founder, about 1,100–1,300 px each, so getting shorter means cutting or merging content: client's call).
Hero photo now starts at 502 px on a 667 px phone (was 583). Still no sideways scrolling at 320 / 375 px; every tap target is 44 px or more except the offer bar.
Checked in the browser preview only, not yet on real phones (section 8).

**1. Quick fixes**
- [x] iPhone home indicator: `viewport-fit=cover` in `Base.astro` + `env(safe-area-inset-bottom)` padding on the Call · WhatsApp · Free trial bar (and on the body padding under it). Body also gets the left/right safe areas, so text stays out of the notch in landscape
- [x] Client videos: `playsinline` (3 on home, 3 on `/older-adults`), otherwise iPhones jump to full screen on play
- [x] Hide the bottom bar while a text field, select or textarea has focus (CSS `:has()` in `global.css`), so it never covers the field above the keyboard
- [x] `/book-a-trial`: the bar shows Call · WhatsApp only (its "Free trial" button linked to the page you were on)
- [x] Service pages: the bar's "Free trial" (and the green footer band's button) pre-fills that service (`/book-a-trial?Service=…`)
- [x] Mobile menu: its logo loads eagerly (it popped in after the menu opened)
- [x] Tap targets to 44 px or more: footer links, `link` actions (an invisible `::after` makes the tap area bigger without moving anything), booking chips, header logo, breadcrumbs, `/contact-us` cards. **Kept:** the offer bar stays 32 px: it is full width, and a taller bar pushes the hero photo down
- [x] Pressed state on the bottom bar buttons

**2. Header and menu**
- [x] The wordmark shows next to the "MF" mark from 360 px, so the name is on the first screen
- [x] Menu: "Book a free trial", Call and WhatsApp pinned to the bottom (with the hours); the links scroll above them
- [x] Menu: the current page is green; "Our founder" and "Training for older adults" added
- [x] Menu fades and slides in and out (CSS `@starting-style` + `transition-behavior: allow-discrete`; off with reduced motion)
- [ ] Optional: header slides away on scroll down and back on scroll up (small script). Header + bottom bar take 126 px of a 667 px screen. Not done: needs a script; decide after the real-phone check

**3. Home page: shorter (goal ≤ 14 screens at 375 × 812, ≤ 16 at 375 × 667)**
- [x] Hero facts: "Where" on one line, "When" and "Price" side by side (245 px → 165 px); "Varies by location" under the price (`CLAUDE.md` price rule). Times never break inside "6 AM – 11 PM"
- [x] Hero: tighter spacing on phones; the "WhatsApp us" link is hidden there (the bottom bar has WhatsApp). Photo starts at 502 px on a 667 px phone (was 583)
- [x] Reviews: long reviews (over 200 characters) show 4 lines + "Read more" (a button with `aria-expanded` and a few lines of JS: `<details>` can't show a 4-line preview). Card 535 → 379 px
- [x] Older-adults videos: narrower cards on phones, 533 → 413 px tall, the next video peeks in
- [x] Numbers banner: less padding and smaller numbers on phones (383 → 298 px); "6 AM – 11 PM" on one line
- [x] Swipe rows: new `SwipeHint` component on phones ("6 programmes · Swipe →", "3 client videos", "4 profiles", "3 articles", "3 reviews"); the main reviews row says "5 reviews · Swipe" on every screen size
- [x] Footer: Services and Company side by side on phones (still about 1,130 px, because the links are now 44 px tall)
- [x] Section padding 80 → 64 px on phones; founder photo a little smaller on phones
- [x] BMI: scale labels 12 → 14 px; after "Calculate" the keyboard closes and the result scrolls into view. `enterkeyhint` skipped: browsers already show the right key

**4. Booking and contact (where the leads come from)**
- [x] `/book-a-trial`: less space above the form on phones (all inner-page heroes are shorter on phones); the name field is fully in the first screen on a 667 px phone (515–569 px)
- [x] Field labels: 12 px grey capitals → 16 px (booking + contact)
- [x] `autocapitalize="words"` on name. `enterkeyhint` "next" skipped: pressing it would submit the form early (it opens WhatsApp)
- [x] "What happens next": the 3 steps as one compact row above the form on phones; the full list stays beside the form from 1024 px
- [x] After sending: the "Didn't open? Tap here" line scrolls into view
- [x] `/contact-us`: the whole Call and Email cards are tappable

Sections 5–8 (service price, video sizes, landscape, real phones) moved into "Mobile redesign" below.

## Mobile redesign (fresh audit 18 Oct 2026)

Looked at the site as a first-time visitor on a 390 × 844 phone (iPhone 14/15 size), production build, with the browser pane visible so the
animations really ran: every home section and 8 inner pages. The old plan was not used as a starting point.
Home today: 14.4 screens (12,117 px). Goal: about 10–11 screens, nothing out of line, and something moving in every section.

What a visitor notices:
- **Out of line:** every full-width slanted green button sticks out 8 px past the text on both sides; the booking card's green shadow runs to 6 px from the screen edge
- **Too big:** price (1,110 px for one number), founder (1,040), "How it works" (1,268), older adults (1,323), footer (1,082)
- **Repeats:** the same client quotes appear in the strip under the hero, in "In their words" and in the founder section; two photo carousels back to back ("Six ways to train", "Built for your life"); three "free trial" calls to action on the first screen (offer bar, hero button, bottom bar)
- **Flat:** on a phone only the hero headline, the marquee and some card rows move. Photo zoom and arrow nudges are hover-only, so touch screens never see them; inner pages have no animation at all; the menu fades as a whole, so page text shows through it halfway
- **Unfinished touches:** raw browser controls on the client videos (tiny play icon); inner-page photos hidden under an 85 % black layer; `/about-founder` opens on the photo alone (name and breadcrumbs below it)

**Done 18 Oct 2026 (A–D, browser preview only):** home 14.4 → 11.0 screens at 390 × 844 (18.2 → 13.9 on a 667 px phone); no page wider than
the screen at 320 / 375 / 390 px, even while things animate; every tap target 44 px or more. Big find: on the live site **no scroll animation ever
ran** (scroll reveals, number count-ups): the build's CSS minifier folds `animation-timeline` into the `animation` shorthand, browsers reject it and
drop the rule. Fixed for all of them (rule in `CLAUDE.md`). Not yet checked on real phones (E).

**A. Alignment and polish (no content change)**
- [x] Slanted buttons stay inside the text column on phones (the slab is pulled in by its slant, `global.css`)
- [x] Booking card: green shadow 6 px on phones, card pulled in so the shadow ends on the column edge
- [x] Green footer band: "Every day, 6 AM – 11 PM" never breaks
- [x] One heading size, one label and one spacing rule for every home section: new `SectionHead` component
- [x] Menu shows mark + name like the header, at the same spot (X where the menu icon was)
- [x] Scrollbars hidden under swipe rows on phones
- [x] `/about-founder`: breadcrumbs and name first, then the photo
- [x] Inner-page heroes on phones: the photo is a slanted band under the text (form pages keep the dark background, `band={false}`)
- [x] Blog posts: the breadcrumb stays on one line; a long title ends in "…"
- [x] Client videos: green "Play" button over the poster; browser controls only once playing; one video plays at a time

**B. Motion on phones (CSS first, transform and opacity only, everything off with reduced motion)**
- [x] Section headings: each line rises out of a mask as it scrolls in (`rise-lines`)
- [x] Swipe rows: cards slide in from the right one after another on phones; grids rise in one after another (`stagger`)
- [x] Photos: a green slab at the logo angle slides off to reveal them (`slash` on scroll, `slash-load` at the top of inner pages)
- [x] Tap feedback: cards, chips, tiles, FAQ rows, footer links press in (`active:`), plus a touch listener so iPhones show it
- [x] Menu: solid panel slides in from the right, links follow one by one
- [x] Bottom bar slides up once the hero "Book a free trial" button has scrolled away (home page)
- [x] Hero parallax: the green slab slides sideways and the photo + cut-out rise a little (together: moving the cut-out alone would show the people twice)
- [x] FAQ answers, "Read more" text and the BMI result fade in
- [x] Inner pages: breadcrumbs, title and intro fade in on load
- [x] "Swipe →" arrow nudges twice as its row scrolls in
- [x] Price (165) and founder years (22) count up
- Scroll-linked effects run in Chrome / Android and Safari 26+; older iPhones show everything, without that motion

**C. Home page: tighter, nothing said twice (14.4 → 11.0 screens at 390 × 844)**
- [x] Offer bar hidden on phones (and on phones held sideways); still shown from tablets up
- [x] Reviews: one carousel right after the hero ("Client reviews", 5 cards, 4 lines + "Read more"); the old quote strip, the later "In their words" section and the founder-section quote are gone
- [x] How it works: booking card + the 3 steps as one compact row
- [x] "Built for your life": 2 × 2 compact photo tiles on phones (title only), 4 cards with text from lg
- [x] Price: one card (price, "may vary by location", 4 ticks, button, WhatsApp line)
- [x] Numbers banner removed; "22+ years" is in the founder card
- [x] Founder: compact card on phones (small photo beside the name)
- [x] Older adults: heading on 2 lines ("Stay strong. Stay independent."), shorter intro
- [x] BMI: compact card
- [x] FAQ: tighter rows
- [x] Green footer band 451 → 361 px; footer 1,082 → 861 px (logo beside the tagline, Call / WhatsApp / Email as 3 buttons)
- [ ] Try: hero photo first with the headline overlapping it. Not tried: the current hero now fits the first screen with one button

**D. Inner pages and other screens**
- [x] Service pages: "AED 165 / session · may vary by location · first session free" in the hero below 1024 px
- [x] `/about-us`: the six steps in two columns on phones; tighter sections (now 6.5 screens at 390 × 844)
- [x] Landscape phones: bottom bar instead of the floating WhatsApp button on short screens (`short:` variant), headline capped at 60 px, no offer bar
- [x] Phone-size client videos (`site.json` `small`): 2.7, 2.3 and 1.5 MB (were 4.1, 7.9 and 5.3 MB)
- [x] Hero sections use `overflow-clip`: with `overflow-hidden` the scroll animations inside froze
- [ ] Already listed under "Live site checks": smaller image widths + AVIF, the font-swap layout shift

**E. Check**
- [x] Phone audit after the changes: 24 pages at 320 / 375 / 390 px and 667 px tall, landscape 844 × 390, desktop 1280 × 800
- [ ] Real phones: iPhone Safari (a small one and a 6.1"), Android Chrome, Samsung Internet, the Instagram in-app browser; Android "large text" at 130 %
- [ ] Lighthouse mobile on the Vercel preview, compared with the 15 Oct scores

## Phase 6: launch

- [ ] Get the old DB backup: enquiries per month = the baseline
- [ ] PageSpeed of the old site recorded **before** launch
- [ ] 301s live: test every old URL with `curl -I` on the preview link (rules in `vercel.json`)
- [ ] robots.txt with the `Sitemap:` line; sitemap has only canonical URLs
- [ ] Validate all schema in the Rich Results Test
- [ ] GA4 + Search Console + Microsoft Clarity installed
- [ ] Google Business Profile: website link, hours and phone match `site.json`
- [ ] Client sign-off on the preview link
- [ ] DNS switch: website records only, MX untouched
- [ ] Submit the sitemap, request indexing
- [ ] Re-crawl: zero duplicates, no 404s; watch 404s for 2 weeks
- [ ] PageSpeed after launch, compared with before
- [ ] Keep Hostinger until everything is stable (email + rollback)

## Phase 7: growth (after launch)

Keyword volumes are not measured yet. Confirm each page against Search Console (or Ahrefs) data before writing it.
Market check (15 Oct 2026): other Abu Dhabi trainers list about AED 150–400 per session, so AED 165 / session is at the low end of the market.

- [ ] Keyword map: one main keyword per page, from Search Console data after 4–6 weeks
- [ ] `/home-personal-trainer-abu-dhabi`: home training is the main selling point and has no page of its own
- [x] `/older-adults` page built 16 Oct 2026 from the home-page copy (`Service` schema, title "Senior Fitness Training Abu Dhabi"). Still confirm the offer and the "experienced trainers" claim with the client
- [ ] `/free-assessment`: offer, short form, 2-minute quiz, links from header, home and services, tracking
- [ ] Area pages ×7 `/personal-trainer-<area>` (Khalifa City, Al Reem, Saadiyat, Yas Island, Al Raha, MBZ, Corniche): confirm areas first; each genuinely different; `Service` + `areaServed`
- [ ] `/female-personal-trainer-abu-dhabi`: only if female trainers are confirmed
- [ ] `/corporate-wellness-abu-dhabi`: package defined, written for HR, separate enquiry form
- [ ] `/blog/personal-trainer-cost-abu-dhabi`: competitor ranges, own AED prices, `Article` + `FAQPage`
- [ ] `/faq` hub with `FAQPage` schema
- [ ] `/blog/home-vs-gym-training`
- [ ] One new blog post a month answering real client questions, each linking to a service and the booking page
- [ ] Arabic version `/ar/`: human translation, `hreflang`
- [ ] Google Business Profile: categories, services with AED prices, real photos, NAP match, weekly posts
- [ ] Reviews: ask every happy client for a Google review; link to the review page from the site (no `AggregateRating` schema)
- [ ] Instagram profile: founder name, one description, NAP match, link to the site, WhatsApp Business profile
- [ ] Directories and citations: audit, main UAE directories, identical NAP, spreadsheet of listings
- [ ] Monthly SEO check: Search Console coverage and queries, enquiries vs the baseline, PageSpeed
