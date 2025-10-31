import { z, defineCollection } from 'astro:content';

import { glob } from 'astro/loaders';

const projects = defineCollection({ 
    loader: glob({ pattern: '*.md', base: './src/content/projects'}),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
    }),
 });
 
const fieldNotes = defineCollection({ 
    loader: glob({ pattern: '*.md', base: './src/content/field-notes'}),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
    })
 });

export const collections = { projects, fieldNotes };