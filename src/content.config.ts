import { defineCollection } from 'astro:content'
import { projectSchema } from './projects/schema.ts'
import { skillSchema } from './skills/schema.ts'

import { file } from 'astro/loaders'

const projectList = defineCollection({
  loader: file('src/projects/projects.json'),
  schema: projectSchema,
})

const skillList = defineCollection({
  loader: file('src/skills/skills.json'),
  schema: skillSchema,
})

export const collections = { projectList, skillList }
