import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { translations } from './translations'
import type { Locale, Translations } from './translations'

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: Translations
  format: (template: string, vars?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

function getInitialLocale(): Locale {
  const fromStorage = localStorage.getItem('locale')
  if (fromStorage === 'pt' || fromStorage === 'en') return fromStorage

  const navLang = (navigator.language || '').toLowerCase()
  if (navLang.startsWith('pt')) return 'pt'
  if (navLang.startsWith('en')) return 'en'
  return 'pt'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getInitialLocale())

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem('locale', next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'pt' ? 'en' : 'pt')
  }, [locale, setLocale])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const format = useCallback(
    (template: string, vars?: Record<string, string | number>) => {
      if (!vars) return template
      return Object.keys(vars).reduce((acc, k) => {
        return acc.replaceAll(`{${k}}`, String(vars[k]))
      }, template)
    },
    [],
  )

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      setLocale,
      toggleLocale,
      t: translations[locale],
      format,
    }
  }, [locale, setLocale, toggleLocale, format])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
