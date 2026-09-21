import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Title + description are required on every page, so the build fails if SEO basics are missing.
const seo = { seoTitle: z.string(), description: z.string().max(170) };
const faq = z.array(z.object({ q: z.string(), a: z.string() }));

export const collections = {
  services: defineCollection({
    loader: glob({ pattern: '*.md', base: 'src/content/services' }),
    schema: ({ image }) => z.object({ ...seo, name: z.string(), tagline: z.string(), order: z.number(), image: image(), forWho: z.array(z.string()), faqs: faq }),
  }),
  blog: defineCollection({
    loader: glob({ pattern: '*.md', base: 'src/content/blog' }),
    schema: ({ image }) => z.object({ ...seo, title: z.string(), image: image(), date: z.coerce.date().optional() }),
  }),
  careers: defineCollection({
    loader: glob({ pattern: '*.md', base: 'src/content/careers' }),
    schema: z.object({ ...seo, title: z.string(), type: z.string(), location: z.string(), experience: z.string() }),
  }),
};
