'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Language, getTranslation, Translations } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  
  // Extract language from pathname
  const language: Language = pathname.startsWith('/en') ? 'en' : 'id'
  const t = getTranslation(language)

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 