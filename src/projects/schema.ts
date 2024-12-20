import { z } from 'astro:content'

export const projectSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    status: z.string(),
  }),
)
