'use client'

import { Github, Linkedin, Mail, Menu } from 'lucide-react'
import Link from 'next/link'
import { LanguageToggle } from '@/components/language-toggle'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { siteConfig } from '@/lib/constants'
import { useTranslation } from '@/lib/useTranslation'
import { en } from '@/locales/en'
import { es } from '@/locales/es'

export function Navbar() {
  const { locale } = useTranslation({ es, en })

  const navigationLinks = [
    { href: '#about', label: locale.navigation.about },
    { href: '#projects', label: locale.navigation.projects },
    { href: '#skills', label: locale.navigation.skills },
    { href: '#contact', label: locale.navigation.contact },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur supports-backdrop-filter:bg-neutral-950/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="flex items-center gap-2">
              {/* 
              <Image
                className="rounded-lg bg-linear-to-br from-blue-500 to-cyan-500"
                src="./favicon.ico"
                alt="Logo"
                width={32}
                height={32}
              /> */}
              <span className="hidden text-sm font-bold text-neutral-50 sm:inline">
                {siteConfig.name.split(' ')[0]}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden gap-1 md:flex">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className="text-neutral-400 hover:text-neutral-50 hover:cursor-pointer"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>

            {/* Desktop Social Icons */}
            <div className="hidden gap-1 sm:flex">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-neutral-400 hover:text-neutral-50"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-neutral-400 hover:text-neutral-50"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={`mailto:${siteConfig.links.email}`}>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-neutral-400 hover:text-neutral-50"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 border-neutral-800 bg-neutral-900"
              >
                {navigationLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="cursor-pointer text-neutral-300"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <div className="border-t border-neutral-800" />
                <div className="px-2 py-1.5">
                  <LanguageToggle />
                </div>
                <div className="border-t border-neutral-800" />
                <DropdownMenuItem asChild>
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-neutral-300"
                  >
                    GitHub
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-neutral-300"
                  >
                    LinkedIn
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={`mailto:${siteConfig.links.email}`}
                    className="cursor-pointer text-neutral-300"
                  >
                    Email
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
