import { type Language, useLanguageStore } from '@/store/useLanguageStore'

export type TranslationObject = Record<string, unknown>

type DictionarySet<T extends TranslationObject> = {
  es: T
  en: T
}

function resolvePath(source: TranslationObject, path: string): unknown {
  return path.split('.').reduce<unknown>((current, segment) => {
    if (
      current === null ||
      current === undefined ||
      Array.isArray(current) ||
      typeof current !== 'object'
    ) {
      return undefined
    }

    return (current as TranslationObject)[segment]
  }, source)
}

export function useTranslation<T extends TranslationObject>(
  dictionaries: DictionarySet<T>
) {
  const language = useLanguageStore((state) => state.language)
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage)
  const setLanguage = useLanguageStore((state) => state.setLanguage)

  const locale = dictionaries[language]

  const t = (key: string, fallback = key) => {
    const value = resolvePath(locale, key)

    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    ) {
      return String(value)
    }

    return fallback
  }

  return {
    language: language as Language,
    locale,
    t,
    toggleLanguage,
    setLanguage,
  }
}
