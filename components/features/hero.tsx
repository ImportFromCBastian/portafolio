'use client'

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { AnimatedText } from '@/components/shared/animated-text'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/hooks/use-translation'
import { siteConfig } from '@/lib/constants'
import { en } from '@/lib/i18n/dictionaries/en'
import { es } from '@/lib/i18n/dictionaries/es'

export function Hero() {
  const { locale } = useTranslation({ es, en })

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-20 sm:pt-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-1/3 h-96 w-96 bg-blue-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-cyan-500/5 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <AnimatedText
                text={locale.hero.title}
                animateKey={locale.hero.title}
                as="span"
                className="bg-linear-to-br from-neutral-50 via-blue-200 to-cyan-200 bg-clip-text"
                lineClassName="block"
              />
            </h1>

            {/* Subtitle */}
            <AnimatedText
              text={locale.hero.description}
              animateKey={locale.hero.description}
              as="p"
              className="mx-auto max-w-2xl text-lg sm:text-xl text-neutral-400 leading-relaxed"
              lineClassName="block"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="#projects">
              <Button
                size="lg"
                className="gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base"
              >
                {locale.hero.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-700 hover:bg-neutral-900 text-neutral-50 px-8 py-6 text-base"
              >
                {locale.hero.secondaryCta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Social Proof / Quick Stats */}
          <div className="pt-12 flex justify-center gap-8 text-sm text-neutral-500 border-t border-neutral-800">
            <div className="space-y-1">
              <p className="text-blue-400 font-semibold">5+</p>
              <p>{locale.hero.stats.projects}</p>
            </div>
            <div className="space-y-1">
              <p className="text-blue-400 font-semibold">3+</p>
              <p>{locale.hero.stats.years}</p>
            </div>
            <div className="space-y-1">
              <p className="text-blue-400 font-semibold">∞</p>
              <p>{locale.hero.stats.learning}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8 flex justify-center gap-4">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-neutral-400" />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-neutral-400" />
            </Link>
            <Link
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-neutral-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
