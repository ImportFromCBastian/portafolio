import { z } from 'zod'

export const projectSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  link: z.string(),
})

export type Project = z.infer<typeof projectSchema>

export type ProjectResponse = {
  data: Project[]
}
