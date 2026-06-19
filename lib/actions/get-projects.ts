'use server'

import data from '@/public/projects.json'

// comment to trigger pre-commit hook and test formatting
export async function getProjects() {
  return data
}
