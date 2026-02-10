'use server'

import data from '@/public/skills.json'

export async function getSkills() {
  return data
}
