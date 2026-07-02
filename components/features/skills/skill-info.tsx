import { Card } from '@/components/ui/card'

type Props = {
  icon: string
  name: string
  description: string
}
export default function SkillCardInfo({ icon, name, description }: Props) {
  return (
    <Card className="border-neutral-800 bg-neutral-800/30 p-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-neutral-50 flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          {name}
        </h3>
        <p className="text-neutral-400">{description}</p>
      </div>
    </Card>
  )
}
