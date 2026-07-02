'use client'

import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguageStore } from '@/store/useLanguageStore'

export function LanguageToggle() {
  const language = useLanguageStore((state) => state.language)
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage)

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      className="gap-2 border border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:bg-neutral-900 hover:text-neutral-50"
    >
      <Languages className="h-4 w-4" />
      <span className="text-xs font-semibold tracking-[0.2em] uppercase">
        {language === 'es' ? 'ES' : 'EN'}
      </span>
    </Button>
  )
}
