import type { LocalizedString } from '@/lib/types/locale'

export interface Project {
  id: string
  title: string
  description: LocalizedString
  technicalDescription: LocalizedString
  technologies: string[]
  challenges: LocalizedString[]
  impact: LocalizedString
  repository: string
  emoji: string
  star?: boolean
}
