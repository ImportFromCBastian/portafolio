import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getGitHubRepoLink(url: string): {
  owner: string
  repo: string
} | null {
  try {
    const pathParts = new URL(url).pathname.split('/').filter(Boolean)
    if (pathParts.length >= 2) {
      return {
        owner: pathParts[0],
        repo: pathParts[1],
      }
    }
  } catch {
    return null
  }
  return null
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function getProficiencyColor(proficiency: number): string {
  if (proficiency >= 85) return 'from-emerald-500 to-emerald-600'
  if (proficiency >= 70) return 'from-blue-500 to-blue-600'
  if (proficiency >= 50) return 'from-amber-500 to-amber-600'
  return 'from-slate-500 to-slate-600'
}
