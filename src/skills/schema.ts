import { z } from 'astro:content'

export const skillSchema = z.array(
  z.object({
    name: z.string(),
    level: z.number(),
  }),
)
