import { Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

type Props = {
  repository: string
  label: string
}

export default function ProjectActions({ repository, label }: Props) {
  return (
    <div className="flex gap-2 pt-2">
      <Link
        href={repository}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1"
      >
        <Button
          size="sm"
          variant="outline"
          className="w-full border-neutral-700 hover:bg-neutral-800 text-neutral-300"
        >
          <Github className="h-4 w-4 mr-2" />
          {label}
        </Button>
      </Link>
    </div>
  )
}
