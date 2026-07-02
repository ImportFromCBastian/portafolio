import type { LocalizedString } from '@/lib/types/locale'

export interface SkillCategory {
  id: number
  name: LocalizedString | string
  icon: string
  description: LocalizedString
  skills: Skill[]
}

export interface Skill {
  name: string
  proficiency: number
  icon?: string
}
