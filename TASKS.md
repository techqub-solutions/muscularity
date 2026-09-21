# Muscularity Fitness — tasks by phase

Tick items as you go and commit this file with the work. The plan is in `PLAN.md`; rules and open
questions are in `CLAUDE.md`. Every phase ends with the user's approval.

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
- [ ] Real social links. The old Instagram and LinkedIn links were wrong
- [ ] Years active, number of clients trained (only if confirmed in writing)
- [ ] Insurance and safety statement
- [ ] Are the 4 job roles still open? Salary range and location?
- [ ] Access: Hostinger DNS, GA4, Search Console, Google Business Profile
- [ ] Hosting decision: Vercel Pro or Cloudflare

## Phase 1: foundation ✅ (22 Sept 2026)

- [x] New project `Muscularity Fitness New` (Astro 7) with local git
- [x] Tailwind CSS 4 with brand tokens (colours, font, motion easing)
- [x] Archivo self-hosted: one font file, preloaded
- [x] Light logo, mark and wordmark + favicons made from the old PNG logo
- [x] Base layout: title format, description, canonical, Open Graph, `LocalBusiness` schema, skip link
- [x] Header: logo, nav, services dropdown, Book CTA, mobile menu (no JavaScript)
- [x] Footer: services, company, contact (from `site.json`), mobile Call · WhatsApp · Book bar
- [x] Page transitions (CSS only) and reduced-motion support
- [x] Sitemap generated
- [ ] GitHub repo + first online preview link (after the hosting decision)

## Phase 2: content

- [ ] Content collections: services ×6, blog ×3, careers ×4. Title and description are required, so the build fails without them
- [ ] Move all text from the old site's view files into the content files
- [ ] Rewrite each service page (structure: PLAN.md §4). Short sentences, benefit first, local
- [ ] Packages ×6 in `site.json`: AED prices + what each includes
- [ ] Testimonials ×5 (only with permission)
- [ ] FAQs: homepage + 3–5 per service
- [ ] Images: choose real photos; AVIF/WebP via `<Image>`; descriptive alt text on every image

## Phase 3: pages

### Homepage `/`
- [ ] Title + meta for *home personal trainer Abu Dhabi*
- [ ] Sections in PLAN.md order: hero, marquee, services, how it works, packages, founder & trainers, testimonials, BMI, FAQ, articles, final CTA
- [ ] Free assessment offer above the fold
- [ ] Packages with AED prices and what each includes
- [ ] Trainer cards: photo, certification, specialism
- [ ] Live Google rating and review count (only if real)
- [ ] BMI calculator with a booking CTA after the result
- [ ] FAQ block + `FAQPage` schema
- [ ] Exactly one H1

### About `/about-us`
- [ ] Unique title + meta (must differ from `/about-founder`)
- [ ] Named certifications with issuing body and year
- [ ] Insurance and safety statement; team size and clients trained (confirmed only)
- [ ] `AboutPage` + `Organization` schema; links to services and booking

### Founder `/about-founder`
- [ ] Correct founder name and role
- [ ] Real certifications (not "numerous certifications"); real photo with alt text
- [ ] Unique title + meta; `Person` schema linked to the business; links to booking and services

### Service pages ×6 `/services/<slug>`
cross-fit · body-building · fitness · flexibility-and-mobility · functional-training · strength-training-sports-conditioning
- [ ] Unique title + meta per service; one H1
- [ ] AED price + what's included
- [ ] Trainer who delivers it, with certification; one real client result
- [ ] 3–5 FAQs + `FAQPage` schema; `Service` schema; `BreadcrumbList`
- [ ] Internal links: booking, two related services (area pages later)
- [ ] CTA at the top and at the bottom

### Book a free trial `/book-a-trial`
- [ ] H1 `Book A Free Trial`, button `Book Your Free Trial`
- [ ] Fewest fields that still allow a callback (PLAN.md §6)
- [ ] "What happens next" in 3 steps
- [ ] Title + meta for *book a personal trainer Abu Dhabi*

### Contact `/contact-us`
- [ ] WhatsApp as the main contact method
- [ ] Map + the address exactly as on the trade licence
- [ ] State a response time; short form
- [ ] Title + meta; `ContactPage` schema; NAP matches Google Business Profile character for character

### Careers `/careers` + 4 roles
- [ ] Unique title + meta on the hub and each role
- [ ] `JobPosting` schema on all 4 roles
- [ ] Application form with CV upload; salary and location if the client shares them

### Blog `/blog` + 3 posts
- [ ] New `/blog` index page
- [ ] Cardio Workouts, Rebooting Your Body's Vital Organs, Strength Training: unique titles + meta
- [ ] Visible author and publish date; `Article` schema
- [ ] Each post links to a service page and to booking; CTA at the end

### Legal + 404
- [ ] Privacy and Terms: no shipping/returns/refund clauses; correct legal business name and address
- [ ] Friendly 404 with links to services and booking

## Phase 4: forms and leads

- [ ] Astro Actions for trial, contact and careers forms
- [ ] Resend: verify the domain; **merge** SPF with Hostinger's, never replace it
- [ ] Turnstile + honeypot on every form
- [ ] Postgres (Neon) leads table
- [ ] Email to the gym (not a developer) + auto-reply to the customer; test the sender name
- [ ] "Chat on WhatsApp now" after submit; WhatsApp links pre-filled with the service name
- [ ] CVs sent as email attachments only, never stored publicly
- [ ] GA4 events: form submit, WhatsApp click, phone click

## Phase 5: motion and polish

- [ ] Scroll reveals (CSS scroll-driven)
- [ ] Hero: GSAP SplitText headline + video loop (homepage only)
- [ ] Services marquee; card hovers; testimonial swipe slider; WhatsApp pulse
- [ ] Number counters (confirmed numbers only)
- [ ] BMI animated gauge
- [ ] Accessibility pass: keyboard, contrast, reduced motion. Mobile pass on real phones

## Phase 6: launch

- [ ] Get the old DB backup: enquiries per month = the baseline
- [ ] PageSpeed of the old site recorded **before** launch
- [ ] 301s: `/services/details/*`, `/book-a-trail`, `/about-ceo`, `/admin/*`
- [ ] robots.txt with the `Sitemap:` line; sitemap has only canonical URLs
- [ ] Validate all schema in the Rich Results Test
- [ ] GA4 + Search Console + Microsoft Clarity installed
- [ ] Client sign-off on the preview link
- [ ] DNS switch: website records only, MX untouched
- [ ] Submit the sitemap, request indexing
- [ ] Re-crawl: zero duplicates, no 404s; watch 404s for 2 weeks
- [ ] PageSpeed after launch, compared with before
- [ ] Keep Hostinger until everything is stable (email + rollback)

## Phase 7: growth (after launch)

- [ ] `/free-assessment`: offer, short form, 2-minute quiz, links from header, home and services, tracking
- [ ] Area pages ×7 `/personal-trainer-<area>` (Khalifa City, Al Reem, Saadiyat, Yas Island, Al Raha, MBZ, Corniche): confirm areas first; each genuinely different; `Service` + `areaServed`
- [ ] `/female-personal-trainer-abu-dhabi`: only if female trainers are confirmed
- [ ] `/corporate-wellness-abu-dhabi`: package defined, written for HR, separate enquiry form
- [ ] `/blog/personal-trainer-cost-abu-dhabi`: competitor ranges, own AED prices, `Article` + `FAQPage`
- [ ] `/faq` hub with `FAQPage` schema
- [ ] `/trainers` + `/results`: profiles, `Person` schema, before/after only with written consent
- [ ] `/blog/home-vs-gym-training`
- [ ] Arabic version `/ar/`: human translation, `hreflang`
- [ ] Google Business Profile: claim, categories, hours, services with AED prices, real photos, NAP match, weekly posts, review requests
- [ ] Facebook, Instagram, LinkedIn: founder name, one description, NAP match, link to the site, WhatsApp Business profile
- [ ] Directories and citations: audit, main UAE directories, identical NAP, spreadsheet of listings
