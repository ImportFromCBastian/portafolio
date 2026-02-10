'use client'
import Autoplay from 'embla-carousel-autoplay'
import type { Project } from '@/app/schema/project'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ProjectCard from './ProjectCard'

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 4000 })]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full relative"
    >
      <CarouselContent className="-ml-4">
        {projects.map((project) => (
          <CarouselItem
            key={project.id}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <ProjectCard {...project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-4 mt-8">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  )
}
