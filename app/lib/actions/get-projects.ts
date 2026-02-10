'use server'

import data from '@/public/projects.json'

export async function getProjects() {
  return data
}
