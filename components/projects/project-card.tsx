import type { Project } from '@/app/schema/project'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const ProjectCard = ({
  name,
  description,
  technologies,
  link,
}: Omit<Project, 'id'>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {link.includes('disable') ? (
          <p className="text-zinc-500 text-sm">No disponible</p>
        ) : (
          <a href={link} className="text-blue-500" target="_blank">
            View project
          </a>
        )}
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
