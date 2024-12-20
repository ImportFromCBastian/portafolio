import { defineCollection } from 'astro:content'
import { projectSchema } from './projects/schema.ts'

import { file } from 'astro/loaders'

const projectList = defineCollection({
  loader: file('src/projects/projects.json'),
  schema: projectSchema,
})

export const collections = { projectList }
