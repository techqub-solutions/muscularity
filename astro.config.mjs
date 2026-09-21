// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.muscularityfitness.com',
  trailingSlash: 'never', // same URL style as the old site
  redirects: {
    // old URLs → new (never drop an old URL without a 301)
    '/book-a-trail': '/book-a-trial',
    '/about-ceo': '/about-founder',
    '/services/details/[slug]': '/services/[slug]',
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Archivo',
      cssVariable: '--font-archivo',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
      options: { experimental: { variableAxis: { wdth: [['62', '100']] } } }, // condensed ↔ normal (all we use)
    },
  ],
});
