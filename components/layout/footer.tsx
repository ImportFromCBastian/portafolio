'use client'

import { Github, Heart, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import useLocaleLinks from '@/hooks/use-locale-links'
import { useTranslation } from '@/hooks/use-translation'
import { siteConfig } from '@/lib/constants'
import { en } from '@/lib/i18n/dictionaries/en'
import { es } from '@/lib/i18n/dictionaries/es'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const { locale } = useTranslation({ es, en })
  const navigationLinks = useLocaleLinks(locale)
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500" />
              <span className="font-bold text-neutral-50">
                {siteConfig.name.split(' ')[0]}
              </span>
            </div>
            <p className="text-sm text-neutral-500">{locale.footer.resume}</p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-50">Navegación</h3>
            <nav className="space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-neutral-400 hover:text-neutral-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-50">Recursos</h3>
            <nav className="space-y-2">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-neutral-400 hover:text-neutral-50 transition-colors"
              >
                GitHub
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-neutral-400 hover:text-neutral-50 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href={`mailto:${siteConfig.links.email}`}
                className="block text-sm text-neutral-400 hover:text-neutral-50 transition-colors"
              >
                Email
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-50">
              {locale.footer.followMeLabel}
            </h3>
            <div className="flex gap-2">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
              >
                <Github className="h-4 w-4 text-neutral-400" />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-neutral-400" />
              </Link>
              <Link
                href={`mailto:${siteConfig.links.email}`}
                aria-label="Email"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
              >
                <Mail className="h-4 w-4 text-neutral-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>
            &copy;
            {` ${currentYear} ${siteConfig.name}. ${locale.footer.copyright}`}
          </p>
          <p className="flex items-center gap-1">
            Built with
            <Heart className="h-3 w-3 text-red-500" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
