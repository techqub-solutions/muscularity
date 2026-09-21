# Muscularity Fitness — Rebuild Plan

**Status:** Approved 22 Sept 2026. Progress: `TASKS.md`

**Goal:** rebuild muscularityfitness.com as a fast, modern, animated site that turns visitors into
trial bookings. Keep the same URLs, write better content, and drop all the old PHP code.

**Success =** more trial bookings and WhatsApp chats per month than the old site (baseline from the
old database), Core Web Vitals "good" on mobile, and every page indexed by Google.

---

## 1. Tech stack (decided)

| Part | Choice | Why |
|---|---|---|
| Framework | **Astro** (latest) | Pages ship as plain HTML with zero JavaScript unless a part needs it, so they load fastest on phones |
| Styling | **Tailwind CSS v4** | Short code; only the CSS a page uses ships |
| Animation | **CSS first** (View Transitions, scroll-driven animations) + **GSAP** on the home hero only | Smooth, runs on the graphics chip, stays light |
| Content | **Markdown + JSON files** in the repo (Astro content collections) | No database, no admin panel to hack. The build fails if a page is missing its title or description |
| Forms | **Astro Actions** + **Resend** (email) + **Cloudflare Turnstile** (spam) | Resend is the same email service as Ironcore |
| Leads | **Postgres** (Neon, free tier), one table | No enquiry is ever lost, and we can count leads to prove SEO results |
| Images | Astro `<Image>`: AVIF/WebP, sized for each screen | Big speed win (old `assets/` folder = 48 MB) |
| Font | **Archivo** variable, self-hosted | Current brand font; no Google Fonts request |
| Hosting | **Vercel**: GitHub push → auto deploy, preview link for every change | Same flow as Ironcore. A client site is commercial use, which needs the paid Vercel Pro plan. If you don't want that, Cloudflare (free) runs the same code |
| Analytics | GA4 + Search Console + Microsoft Clarity + Vercel Speed Insights | Measure traffic, leads, and real speed |
| Language | English first; **Arabic later** (`/ar/`) | Layout is right-to-left-ready from day one, so Arabic needs no rework |

**Not used, on purpose:** React/Next.js (too much JavaScript for a content site), jQuery,
Bootstrap, WordPress, a CMS. If the client wants to edit content themselves later, add Keystatic.

---

## 2. Design direction: a 2027 look

- **Feel:** dark, cinematic, bold. Real trainers and real sessions, no stock photos.
- **Colours** (from the logo: green + black):

  | Token | Hex | Use |
  |---|---|---|
  | ink | `#0B0D0C` | page background |
  | surface | `#151917` | cards, sections |
  | text | `#F4F6F5` | main text |
  | muted | `#9AA39F` | small text |
  | green | `#39B54A` | brand, buttons, highlights |
  | paper | `#F5F6F4` | light sections (long reading) |

  Rule: **green buttons use black text.** White text on this green fails contrast.
- **Type:** Archivo variable. Headlines are wide, extra bold, uppercase and large. Body text is
  17–18 px with relaxed line height.
- **Layout ideas:** full-screen video hero, bento grid for services, big numbers, swipe slider for
  testimonials, and a sticky mobile bar (Call · WhatsApp · Book).
- **Accessibility:** WCAG 2.2 AA, keyboard friendly. All motion turns off when the phone asks for
  "reduce motion".

---

## 3. Animations: what makes the site feel alive

| Where | What you see | How (weight) |
|---|---|---|
| Every page change | Pages cross-fade and slide; header stays put | Native View Transitions, CSS only, 0 KB JS |
| Every section | Content fades and rises as you scroll; images reveal | CSS scroll-driven animations, 0 KB JS |
| Home hero | Headline reveals line by line over a video loop | GSAP SplitText, homepage only |
| Services strip | Endless marquee of service names | CSS |
| Numbers | Years and sessions count up when seen (confirmed numbers only) | CSS `@property` |
| Service cards | Image zoom + green edge glow on hover | CSS |
| BMI calculator | Animated gauge, then "Book a free trial" | Small vanilla script |
| Testimonials | Swipe slider with snap | CSS scroll-snap |
| WhatsApp button | Soft pulse | CSS |

Rules:
- Animate only movement and fade.
- No layout jumps.
- Reduced motion turns everything off.
- No JS library except GSAP on the homepage.

---

## 4. Pages and URLs

Every old URL is kept, so Google rankings carry over.

| URL | Page |
|---|---|
| `/` | Home |
| `/about-us` | About |
| `/about-founder` | Founder (name to confirm) |
| `/services/<slug>` ×6 | cross-fit, body-building, fitness, flexibility-and-mobility, functional-training, strength-training-sports-conditioning |
| `/book-a-trial` | Book a free trial (correct spelling) |
| `/contact-us` | Contact |
| `/careers` + 4 roles | trainer, personal-trainer, senior-gym-trainer, fitness-manager |
| `/blog` (new index) + 3 posts | same post URLs as now |
| `/privacy-policy`, `/terms-and-condition` | Legal |
| 404 | Friendly page with links to services and booking |

**301 redirects:**
- `/services/details/*` → `/services/*`
- `/book-a-trail` → `/book-a-trial`
- `/about-ceo` → `/about-founder`
- `/admin/*` → `/` (the old admin panel is gone)

**After launch** (already in `TASKS.md`): `/free-assessment`, 7 area pages, female trainer,
corporate wellness, pricing guide, `/faq`, `/trainers`, `/results`, Arabic.

### Homepage, top to bottom
1. **Hero:** video, headline, [Book free trial] [WhatsApp]
2. **Marquee:** the 6 services
3. **Services:** bento grid (6)
4. **How it works:** Free assessment → Your plan → Train at home, outdoors or in the gym
5. **Packages:** 6 plans with AED prices and what's included
6. **Founder & trainers**
7. **Testimonials**
8. **BMI calculator** → booking CTA
9. **FAQ**
10. **Latest articles** (3)
11. **Final CTA** + hours, area, phone, WhatsApp

### Every service page
Hero with one-line promise + CTA → who it's for → what a session looks like → what's included +
AED price → your trainer → real results → FAQ (3–5) → related services → CTA

---

## 5. Content: what we have and what we need

**We have** (from the old site's files):

| Content | Notes |
|---|---|
| 6 service pages, full text | Rewrite shorter and clearer, benefit first |
| 3 blog posts, full text | Keep URLs; add new titles, author, date |
| 4 job posts | Confirm they are still open |
| 6 packages + prices | Body Reboot AED 135, Elite AED 155, Pro AED 175, VIP AED 195 per session; Total Transformation and Lifestyle Coach "as per goal". **Missing: what each includes** |
| 5 testimonials | Basheer Ali, Sultan Almansoori, Mohammed Ehtesham, Sofia Ahmed, Moon Dasuqi. **Missing: permission, area, result** |
| About, philosophy, why choose us | Reuse the ideas, rewrite |
| Founder bio | Mohammed Akram, "22+ years". **Missing: confirmation, certifications** |
| Hours, phone, email | Mon–Sun 06:00–23:00 · +971 56 585 2769 · info@muscularityfitness.com |
| Training locations | Home, outdoor, gym (from the booking form) |

**We need from the client** (the full question list goes in `TASKS.md`):
1. **Real photos + short video clips.** Most current photos are stock template images. One half-day
   shoot: trainers, sessions at home, outdoors and in the gym, founder portrait, vertical clips.
2. **Logo as a vector file** (SVG/AI). The SVG files in the old site are the template's red demo
   logo. If there's none, we redraw it.
3. **Trainers:** names, photos, certifications, languages, male/female.
4. **Areas served** in Abu Dhabi.
5. **Address and business name** exactly as on the trade licence. Do they have their own gym, or
   train at the client's home, outdoors, or at partner gyms?
6. **Package details:** what each includes; are prices still current?
7. **Testimonials:** written permission, area, measurable result; Google reviews link.
8. **Real social links.** The Instagram and LinkedIn links on the current site are wrong.
9. **Access:** Hostinger DNS, GA4, Search Console, Google Business Profile.

**From the old database backup** (given at launch time, Phase 6): enquiries per month (the baseline
to prove results), and a check that the database versions of services and blog posts aren't newer
than the files. Don't cancel Hostinger before it's exported.

**Writing rules:** short sentences, benefit first, local to Abu Dhabi, one clear action per section.
The `CLAUDE.md` rules apply everywhere: no invented numbers, reviews or certificates; prices always
as `AED 135 / session`; it's always "trial".

---

## 6. Forms and leads

| Form | Fields |
|---|---|
| Book a free trial | Name, phone (WhatsApp), service, where (home / outdoor / gym), preferred time. The old form had 8 fields |
| Contact | Name, phone, email, service, message |
| Careers | Name, email, phone, role, CV (PDF/DOC, max 5 MB) |

Every form:
- is protected by Turnstile + a hidden honeypot field
- is validated, saved to the database, and emailed to the gym (not a developer)
- sends an auto-reply to the customer
- then shows a "Chat on WhatsApp now" button

CVs are sent only as email attachments and are never stored in a public folder. GA4 records a
conversion for each form submit, WhatsApp click and phone click.

**Later, only if the client wants:** live calendar (Cal.com), card and Apple Pay (Stripe).

---

## 7. SEO, built in

- Every page has a unique title `Keyword | Muscularity Fitness` and a description. The build fails
  if either is missing.
- One H1, a canonical tag, alt text, and a link to booking on every page.
- Schema: LocalBusiness (site-wide), Service, Article, FAQPage, BreadcrumbList, JobPosting, Person.
- Sitemap is generated automatically; robots.txt includes the Sitemap line.
- Every old URL either works or 301-redirects. None return 404.

---

## 8. Hosting, domain, email

- **Code:** folder `Desktop\Muscularity Fitness New` → private GitHub repo → Vercel (or Cloudflare).
- **Workflow:** change → preview link → you (and the client) check → merge → live. Locally,
  `npm run dev` runs in the preview pane.
- **Domain:** DNS stays at Hostinger. At launch we change **only** the website records (`@`, `www`)
  to point at Vercel.
- **Email:** `MX` records point to Hostinger, so email keeps working. Resend needs 2–3 DNS records;
  **merge** its SPF value into the existing SPF record, never replace it.
- **Keep the Hostinger plan** until launch is stable. It hosts the gym's email and is the rollback
  (point DNS back).
- **Secrets** (Resend key, database URL) live in Vercel environment variables, never in code.

---

## 9. Phases (each one ends with your approval)

| # | Phase | What |
|---|---|---|
| 0 | **Before we build** | No fixes on the old site: the new site replaces it at launch. Send the client questions; book the photo shoot; get access |
| 1 | **Foundation** | Repo, Astro + Tailwind, brand colours and fonts, base layout (header, footer, SEO, schema), Vercel preview live |
| 2 | **Content** | All text into content files, rewritten; images optimised |
| 3 | **Pages** | Home, About, Founder, 6 services, Book a trial, Contact, Careers, Blog, legal, 404 |
| 4 | **Forms & leads** | Actions, Resend, Turnstile, database, WhatsApp, GA4 events |
| 5 | **Motion & polish** | Transitions, reveals, hero, counters; mobile and accessibility pass |
| 6 | **Launch** | Get the old DB backup (enquiry numbers), redirects, schema tests, PageSpeed before vs after, client sign-off on the preview, DNS switch, sitemap to Search Console, watch 404s for 2 weeks |
| 7 | **Growth** | New pages, Arabic, Google Business Profile, citations (from `TASKS.md`) |

**Targets** (measured before and after; targets, not promises): PageSpeed mobile 90+,
LCP < 2.5 s, CLS < 0.1, INP < 200 ms.

---

## 10. Project files (kept light)

```
Muscularity Fitness New/
├─ src/
│  ├─ content/            services/ blog/ careers/ (Markdown) + site.json (NAP, hours, packages, testimonials, FAQs)
│  ├─ content.config.ts   rules every page must follow (title, description, ...)
│  ├─ layouts/Base.astro  <head>, SEO, schema, header, footer, page transitions
│  ├─ components/         ~12 small components (Hero, ServiceCard, PackageCard, FAQ, CTA, BMI, ...)
│  ├─ pages/              one file per route
│  ├─ actions/index.ts    forms → check → save → email
│  └─ styles/global.css   Tailwind + brand tokens + motion
├─ public/                favicon, hero video
├─ astro.config.mjs       site URL, sitemap, redirects, languages
└─ CLAUDE.md · TASKS.md · PLAN.md
```

`site.json` is the single source for name, address and phone, so they match character for character
everywhere (footer, contact, schema, Google Business Profile).

---

## 11. Risks

| Risk | What we do |
|---|---|
| No real photos: the new design still looks generic | The shoot is the #1 dependency. If needed, launch with the best real photos we have |
| Scope: `CLAUDE.md` says "repair, not rebuild" | Agree the new scope and price with the client first |
| Rankings dip after launch | Same URLs + 301s + resubmit the sitemap + watch Search Console |
| Email breaks at launch | Touch only the website DNS records, never `MX` |
| Old site stays insecure while we build | Your decision: accepted until launch, when the new site replaces it |
