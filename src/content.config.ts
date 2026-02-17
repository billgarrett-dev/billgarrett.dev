import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const employers = defineCollection({
  loader: glob({pattern: '**/*.md*', base: './src/employers'}),
  schema: z.object({
    employer: z.string(),
    url: z.string().url().optional(),
    title: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    duties: z.array(z.string())
  })
})

// 5. Export a single `collections` object to register your collection(s)
export const collections = { employers };