import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    path: z.string().startsWith('/').endsWith('/'),
    section: z.enum(['cpus', 'gpus', 'pc-building', 'benchmarks']),
    status: z.enum(['review', 'published']),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { guides };
