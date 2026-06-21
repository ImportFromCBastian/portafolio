'use client'

import { Card } from '@/components/ui/card'
import type { Skill } from '@/lib/data/skills'

type Props = {
  label: string
  skills: Array<Skill>
  category: string
  firstText: string
  secondText: string
  lastText: string
}
export default function SkillFooterResume({
  label,
  skills,
  category,
  firstText,
  secondText,
  lastText,
}: Props) {
  return (
    <Card className="border-neutral-800 bg-blue-950/20 p-6">
      <p className="text-sm text-blue-300">
        <span className="font-semibold">{label}</span>{' '}
        {` ${skills.length} ${firstText} ${category.toLowerCase()}, ${secondText} `}
        <span className="font-semibold">
          {Math.round(
            skills.reduce((sum, s) => sum + s.proficiency, 0) / skills.length
          )}
          %
        </span>
        {` ${lastText}`}
      </p>
    </Card>
  )
}
