import { getCollection, getEntry } from 'astro:content'
import type { Project } from '@/projects/types'

export const fetchProjects = async (): Promise<Project[]> => {
  const projects = await getCollection('projectList')
  return projects[0].data
}

export const getProjectById = async (
  id: number,
): Promise<Project | undefined> => {
  const project = await fetchProjects().then((projects) =>
    projects.find((project) => project.id === id),
  )
  return project
}
