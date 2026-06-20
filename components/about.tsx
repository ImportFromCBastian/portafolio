'use client'

import { Download, FileText } from 'lucide-react'
import Link from 'next/link'
import { AnimatedText } from '@/components/animated-text'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/lib/constants'
import { useTranslation } from '@/lib/useTranslation'
import { en } from '@/locales/en'
import { es } from '@/locales/es'
import { useLanguageStore } from '@/store/useLanguageStore'

export function About() {
  const { locale } = useTranslation({ es, en })

  const { language } = useLanguageStore()

  const disciplines = [
    'Full-Stack Development',
    'Android Development',
    'Clean Architecture',
    'Agile Methodologies',
  ]
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-50">
                <AnimatedText
                  text={locale.sections.about.title}
                  animateKey={locale.sections.about.title}
                  as="span"
                  className="text-neutral-50"
                  lineClassName="block"
                />
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                {locale.sections.about.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="space-y-3 pt-6 border-t border-neutral-800">
              <h3 className="font-semibold text-neutral-50">
                {locale.sections.about.quickFactsTitle}
              </h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                {locale.sections.about.quickFacts.map((fact) => (
                  <li key={fact} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href={`mailto:${siteConfig.links.email}`}>
                <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                  {locale.sections.about.contact}
                </Button>
              </Link>
              <Link
                href={`/sebastian_hernandez_cv_${language}.pdf`}
                target="_blank"
              >
                <Button
                  variant="outline"
                  className="w-full gap-2 border-neutral-700 hover:bg-neutral-900 text-neutral-50"
                >
                  <Download className="h-4 w-4" />
                  {locale.sections.about.downloadCv}
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Card Section */}
          <div className="space-y-4">
            {/* Main Info Card */}
            <Card className="border-neutral-800 bg-linear-to-br from-neutral-900 to-neutral-950 p-6 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                  {locale.sections.about.disciplines}
                </p>
                <div className="flex flex-wrap gap-2">
                  {disciplines.map((discipline) => (
                    <Badge
                      key={discipline}
                      className="bg-blue-600/20 text-blue-300 border-blue-600/30 border"
                      variant="secondary"
                    >
                      {discipline}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Stats Card */}
            <Card className="border-neutral-800 bg-neutral-900/50 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 text-center">
                  <p className="text-2xl font-bold text-blue-400">5+</p>
                  <p className="text-xs text-neutral-500">
                    {locale.sections.about.stats.projects}
                  </p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-2xl font-bold text-cyan-400">3+</p>
                  <p className="text-xs text-neutral-500">
                    {locale.sections.about.stats.years}
                  </p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-2xl font-bold text-emerald-400">15+</p>
                  <p className="text-xs text-neutral-500">
                    {locale.sections.about.stats.technologies}
                  </p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-2xl font-bold text-violet-400">∞</p>
                  <p className="text-xs text-neutral-500">
                    {locale.sections.about.stats.dedication}
                  </p>
                </div>
              </div>
            </Card>

            {/* Education Card */}
            <Card className="border-neutral-800 bg-neutral-900/50 p-6 space-y-3">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-400 mt-1 shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-semibold text-neutral-50">
                    {locale.sections.about.education}
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Licenciatura en Informática
                  </p>
                  <p className="text-xs text-neutral-500">
                    Universidad Nacional de La Plata (UNLP)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
