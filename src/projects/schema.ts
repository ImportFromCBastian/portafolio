import { z } from 'astro:content'

export const projectSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    link: z.string(),
  }),
)
