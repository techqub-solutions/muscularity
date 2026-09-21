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

## Design ✅ (22 Sept 2026)

- [x] Research: Abu Dhabi competitors + "AI-looking website" patterns; critique of the first draft
- [x] 3 directions tested (Poster, Monogram, Session card) → mix chosen: dark gym look, logo-angle "slash" shapes, condensed type, booking card
- [x] Design system in `global.css`: slash button, `display`/`eyebrow` type, prose, scroll reveal, marquee

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

## Phase 3: pages (built 22 Sept 2026)

- [x] Home: hero, marquee, services, how it works + booking card, prices, founder, testimonials, BMI, FAQ, blog
- [x] Services ×6 (one template): hero, who it's for, text, sticky price card, FAQ, related, `Service` + `FAQPage` + `BreadcrumbList` schema
- [x] About, Founder (`Person` schema), Contact (`ContactPage` schema)
- [x] Book a free trial: pre-fills from the home card and service pages; sends a WhatsApp message; "what happens next"
- [x] Careers hub + 4 roles (apply by email), Blog index + 3 posts (`Article` schema)
- [x] Privacy, Terms, friendly 404
- [x] Old URLs redirect: `/book-a-trail`, `/about-ceo`, `/services/details/*`
- [x] Unique title + meta on every page; one H1; canonical; breadcrumbs
- [ ] Confirm founder name, role and certifications (then add certifications)
- [ ] Confirm the 4 job roles (duties are drafts), location, salary; then add `JobPosting` schema
- [ ] Privacy and Terms: legal review; correct legal business name and address
- [ ] Contact: map + trade-licence address; stated response time
- [ ] Blog: real author and publish dates
- [ ] About: `AboutPage` + `Organization` schema; certifications with issuer and year; insurance statement

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
- [ ] WhatsApp button pulse
- [ ] Number counters (confirmed numbers only)
- [x] BMI calculator with animated marker + booking link
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
