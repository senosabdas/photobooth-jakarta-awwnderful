'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  
  // Extract current language from pathname
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'id'
  
  const languages = [
    { code: 'id', name: 'Bahasa Indonesia', flag: 'fi-id' },
    { code: 'en', name: 'English', flag: 'fi-us' }
  ]
  
  const currentLanguage = languages.find(lang => lang.code === currentLocale)
  
  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname and add new locale
    let newPath = pathname.replace(/^\/(en|id)/, '')
    if (!newPath.startsWith('/')) newPath = '/' + newPath
    if (newPath === '/') newPath = ''
    
    const newUrl = `/${newLocale}${newPath}`
    router.push(newUrl)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-purple-600 transition-colors text-sm"
        aria-label="Switch language"
      >
        <span className={`fi ${currentLanguage?.flag} mr-2`}></span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <span className="sm:hidden">{currentLocale?.toUpperCase()}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                  currentLocale === language.code 
                    ? 'bg-pink-50 text-pink-600' 
                    : 'text-gray-700'
                }`}
              >
                <span className={`fi ${language.flag} mr-3`}></span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 