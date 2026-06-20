'use client'

import { Card } from '@/components/ui/card'
import type { Skill } from '@/lib/data/skills'

type Props = {
  summary: string
  skills: Array<Skill>
  category: string
}
export default function SkillFooterResume({
  summary,
  skills,
  category,
}: Props) {
  return (
    <Card className="border-neutral-800 bg-blue-950/20 p-6">
      <p className="text-sm text-blue-300">
        <span className="font-semibold">{summary}</span> {skills.length}{' '}
        habilidades en {category.toLowerCase()}, con un promedio de{' '}
        <span className="font-semibold">
          {Math.round(
            skills.reduce((sum, s) => sum + s.proficiency, 0) / skills.length
          )}
          %
        </span>{' '}
        de profundidad.
      </p>
    </Card>
  )
}
