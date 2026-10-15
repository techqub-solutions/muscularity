# Muscularity Fitness — tasks by phase

Tick items as you go and commit this file with the work. The plan is in `PLAN.md`; rules and open
questions are in `CLAUDE.md`. Every phase ends with the user's approval.

**Launch** = must be done before the DNS switch. Full site + SEO audit: 15 Oct 2026.

---

## Phase 0: client inputs (collect while we build)

- [ ] Photo and video shoot: trainers, sessions at home, outdoors and in the gym, founder portrait, vertical clips
- [ ] Logo as a vector file (SVG/AI). The old site only has the template's red demo logo
- [ ] Founder name, role (founder, trainer or both), certifications with issuer and year
- [ ] Trainers: names, photos, certifications, languages, male/female
- [ ] Areas served in Abu Dhabi
- [ ] Address and business name exactly as on the trade licence. Own gym, or client home / outdoors / partner gyms?
- [ ] Package details: what each of the 6 includes; are the prices still current?
- [ ] Testimonials: written permission, area, measurable result; Google reviews link
- [ ] Social links. The old site's footer has Instagram `muscularityfitnessuae` and LinkedIn `muscularity-fitness-b16342336` (the header ones were template links). Confirm both, then add them to `site.json`
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
- [ ] GitHub repo + first online preview link (after the hosting decision)

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
- [x] Packages ×4 with AED prices + 2 "priced to your goal" in `site.json`
- [x] Testimonials ×5, word for word from the old site
- [ ] **What each package includes** (client)
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
- [ ] Privacy and Terms: legal review; correct legal business name and address
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
- [x] `LocalBusiness`: `logo`, `priceRange` (AED 135–195), `areaServed`, and an `@id` that `Service`, `Article`, `Person` and `WebSite` point to
- [ ] `LocalBusiness` after client confirmation: `hasMap` (the Maps listing), street address, Instagram + LinkedIn in `sameAs`
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
Market check (15 Oct 2026): other Abu Dhabi trainers list about AED 150–400 per session, so AED 135 is a selling point.

- [ ] Keyword map: one main keyword per page, from Search Console data after 4–6 weeks
- [ ] `/home-personal-trainer-abu-dhabi`: home training is the main selling point and has no page of its own
- [ ] Older-adults / senior fitness page, if confirmed as an offer (the home-page section is the starting copy)
- [ ] `/free-assessment`: offer, short form, 2-minute quiz, links from header, home and services, tracking
- [ ] Area pages ×7 `/personal-trainer-<area>` (Khalifa City, Al Reem, Saadiyat, Yas Island, Al Raha, MBZ, Corniche): confirm areas first; each genuinely different; `Service` + `areaServed`
- [ ] `/female-personal-trainer-abu-dhabi`: only if female trainers are confirmed
- [ ] `/corporate-wellness-abu-dhabi`: package defined, written for HR, separate enquiry form
- [ ] `/blog/personal-trainer-cost-abu-dhabi`: competitor ranges, own AED prices, `Article` + `FAQPage`
- [ ] `/faq` hub with `FAQPage` schema
- [ ] `/trainers` + `/results`: profiles, `Person` schema, before/after only with written consent
- [ ] `/blog/home-vs-gym-training`
- [ ] One new blog post a month answering real client questions, each linking to a service and the booking page
- [ ] Arabic version `/ar/`: human translation, `hreflang`
- [ ] Google Business Profile: categories, services with AED prices, real photos, NAP match, weekly posts
- [ ] Reviews: ask every happy client for a Google review; link to the review page from the site (no `AggregateRating` schema)
- [ ] Facebook, Instagram, LinkedIn: founder name, one description, NAP match, link to the site, WhatsApp Business profile
- [ ] Directories and citations: audit, main UAE directories, identical NAP, spreadsheet of listings
- [ ] Monthly SEO check: Search Console coverage and queries, enquiries vs the baseline, PageSpeed
