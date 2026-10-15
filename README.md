# Muscularity Fitness

Website for Muscularity Fitness, built with Astro and Tailwind CSS.

## Requirements

- Node.js 22.12 or newer
- npm

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

## Build

Create a production build in `dist/`:

```bash
npm run build
```

## Deploy to Vercel

Import this repository into Vercel and use these project settings:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The site is configured for static output and does not require a Vercel adapter.
Redirects (301) and the no-trailing-slash rule are in `vercel.json`.

## Client videos

Reels for the homepage client section go in `public/videos/clients/`, listed in `src/content/site.json`
(`videos`: title, src, poster, description).

Phone clips are far too big as they come (one was 58 MB). Before adding a clip:

```bash
# 720 px wide, H.264, starts playing before it has fully downloaded. Drop -an if the clip has real sound.
ffmpeg -i IN.MP4 -vf "scale=720:-2" -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -an -movflags +faststart public/videos/clients/NAME.MP4
# Poster: one good frame (here at 3 s), shown until the visitor presses play
ffmpeg -ss 3 -i public/videos/clients/NAME.MP4 -frames:v 1 -c:v libwebp -quality 72 public/videos/clients/NAME.webp
```

Aim for under 8 MB per clip. Only publish clips of clients who agreed in writing.
