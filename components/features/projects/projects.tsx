'use client'

import { AnimatedText } from '@/components/shared/animated-text'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { useTranslation } from '@/hooks/use-translation'
import { projects } from '@/lib/data/projects'
import { en } from '@/lib/i18n/dictionaries/en'
import { es } from '@/lib/i18n/dictionaries/es'
import { useLanguageStore } from '@/store/useLanguageStore'
import ProjectActions from './project-actions'
import ProjectsHeader from './project-header'

export function Projects() {
  const { locale } = useTranslation({ es, en })

  const { language } = useLanguageStore()

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <AnimatedText
              text={locale.sections.projects.title}
              animateKey={locale.sections.projects.title}
              as="span"
              className="text-neutral-50"
              lineClassName="block"
            />
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-400">
            {locale.sections.projects.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {/* Header with emoji and title */}
                <ProjectsHeader
                  emoji={project.emoji}
                  star={project.star}
                  title={project.title}
                  description={project.description[language]}
                />
                {/* Technical Description */}
                <div className="bg-neutral-800/30 rounded-lg p-4">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {project.technicalDescription[language]}
                  </p>
                </div>

                {/* Challenges */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-neutral-300">
                    {locale.sections.projects.challenges}
                  </p>
                  <ul className="text-sm text-neutral-400 space-y-1 list-disc list-inside">
                    {project.challenges.slice(0, 2).map((challenge, idx) => (
                      <li key={`${idx}-${challenge}`}>{challenge[language]}</li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-3">
                  <p className="text-sm text-blue-300">
                    <span className="font-semibold">Impacto:</span>{' '}
                    {project.impact[language]}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    {locale.sections.projects.stack}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <ProjectActions
                  key={project.id}
                  repository={project.repository}
                  label={locale.sections.projects.code}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
