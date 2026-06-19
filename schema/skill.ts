import { z } from 'zod'

export const skillSchema = z.object({
  name: z.string(),
  level: z.number(),
  icon: z.url(),
})

export type Skill = z.infer<typeof skillSchema>

export type SkillResponse = {
  data: Skill[]
}
