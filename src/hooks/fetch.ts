import { getCollection } from 'astro:content'
import type { Project } from '@/projects/types'
import type { Skill } from '@/skills/types'

export const fetchProjects = async (): Promise<Project[]> => {
  const projects = await getCollection('projectList')
  return projects[0].data
}

export const fetchSkills = async (): Promise<Skill[]> => {
  const skills = await getCollection('skillList')
  return skills[0].data.sort((a, b) => b.level - a.level)
}
