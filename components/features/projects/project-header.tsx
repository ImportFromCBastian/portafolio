import { Star } from 'lucide-react'

type Props = {
  emoji: string
  star?: boolean
  title: string
  description: string
}

export default function ProjectsHeader({
  emoji,
  star,
  title,
  description,
}: Props) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="space-y-2 flex-1">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{emoji}</span>
          <h3 className="text-xl font-semibold text-neutral-50 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <Star
            className={`ml-auto ${star ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`}
          />
        </div>
        <p className="text-neutral-400">{description}</p>
      </div>
    </div>
  )
}
