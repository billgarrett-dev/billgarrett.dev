import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const education = defineCollection({
  loader: file("src/data/education.yaml"),
  schema: z.object({
    hidden: z.boolean().optional(),
    name: z.string(),
    location: z.string().optional(),
    url: z.string().url().optional(),
    topics: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().optional()
  })
})

const employers = defineCollection({
  loader: glob({pattern: '**/*.md*', base: './src/data/employers'}),
  schema: z.object({
    hidden: z.boolean().optional(),
    name: z.string(),
    location: z.string().optional(),
    url: z.string().url().optional(),
    title: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    duties: z.array(z.string())
  })
})

const skills = defineCollection({
  loader: file("src/data/skills.yaml"),
  schema: z.object({
    hidden: z.boolean().optional(),
    skills: z.array(z.string())
  })
})


// 5. Export a single `collections` object to register your collection(s)
export const collections = { education, employers, skills };