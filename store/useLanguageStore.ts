import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type Language = 'es' | 'en'

type LanguageState = {
  language: Language
  toggleLanguage: () => void
  setLanguage: (language: Language) => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'es',
      toggleLanguage: () =>
        set({ language: get().language === 'es' ? 'en' : 'es' }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'portfolio-language',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ language: state.language }),
    }
  )
)
