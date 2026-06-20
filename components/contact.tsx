'use client'

import { Calendar, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { AnimatedText } from '@/components/animated-text'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/lib/constants'
import { useTranslation } from '@/lib/useTranslation'
import { en } from '@/locales/en'
import { es } from '@/locales/es'

export function Contact() {
  const { locale } = useTranslation({ es, en })

  const contactOptions = [
    {
      icon: Mail,
      label: locale.sections.contact.channels.emailLabel,
      value: siteConfig.links.email,
      href: `mailto:${siteConfig.links.email}`,
      description: locale.sections.contact.channels.email,
    },
    {
      icon: Linkedin,
      label: locale.sections.contact.channels.linkedinLabel,
      value: 'sebastian-hernandez-fs',
      href: siteConfig.links.linkedin,
      description: locale.sections.contact.channels.linkedin,
      external: true,
    },
    {
      icon: Github,
      label: locale.sections.contact.channels.githubLabel,
      value: '@ImportFromCBastian',
      href: siteConfig.links.github,
      description: locale.sections.contact.channels.github,
      external: true,
    },
    {
      icon: Phone,
      label: locale.sections.contact.channels.phoneLabel,
      value: siteConfig.links.phone,
      href: `tel:${siteConfig.links.phone}`,
      description: locale.sections.contact.channels.phone,
    },
  ]

  return (
    <section id="contact" className="py-20 sm:py-32 bg-neutral-900/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <AnimatedText
              text={locale.sections.contact.title}
              animateKey={locale.sections.contact.title}
              as="span"
              className="text-neutral-50"
              lineClassName="block"
            />
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-400">
            {locale.sections.contact.description}
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid gap-4 md:grid-cols-2 mb-12">
          {contactOptions.map((option) => {
            const Icon = option.icon
            return (
              <Link
                key={option.label}
                href={option.href}
                target={option.external ? '_blank' : undefined}
                rel={option.external ? 'noopener noreferrer' : undefined}
              >
                <Card className="border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all cursor-pointer h-full p-6 group">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-neutral-50 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                          <Icon className="h-4 w-4" />
                          {option.label}
                        </h3>
                        <p className="text-blue-400 text-sm font-mono">
                          {option.value}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-500">
                      {option.description}
                    </p>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
        {/* Alternative CTA */}
        <div className="text-center space-y-4">
          <p className="text-neutral-400">
            {locale.sections.contact.videoCall}
          </p>
          <Link
            href={`mailto:${siteConfig.links.email}?subject=Agendar%20una%20llamada`}
          >
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
              <Calendar className="h-4 w-4" />
              {locale.sections.contact.scheduleMeeting}
            </Button>
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
          <p>{locale.sections.contact.footerNote}</p>
        </div>
      </div>
    </section>
  )
}
