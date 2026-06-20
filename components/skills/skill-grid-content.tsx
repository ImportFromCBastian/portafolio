import { Card } from '@/components/ui/card'

type Props = {
  skillName: string
  skillProficiency: number
  colorClass: string
  skillProficiencyLabel: string
}

export default function SkillsGridContent({
  skillName,
  skillProficiency,
  colorClass,
  skillProficiencyLabel,
}: Props) {
  return (
    <Card className="border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-neutral-50">{skillName}</h4>
        <span className="text-sm font-bold text-blue-400">
          {skillProficiency}%
        </span>
      </div>

      {/* Proficiency Bar */}
      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-linear-to-r ${colorClass} transition-all duration-500 ease-out`}
          style={{ width: `${skillProficiency}%` }}
        />
      </div>

      {/* Proficiency Label */}
      <div className="text-xs text-neutral-500">{skillProficiencyLabel}</div>
    </Card>
  )
}
