import type { LocaleDictionary } from '@/lib/locale-types'

const useLocaleLinks = (locale: LocaleDictionary) => {
  return [
    { href: '#about', label: locale.navigation.about },
    { href: '#projects', label: locale.navigation.projects },
    { href: '#skills', label: locale.navigation.skills },
    { href: '#contact', label: locale.navigation.contact },
  ]
}

export default useLocaleLinks
