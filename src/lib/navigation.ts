'use client'

import { usePathname } from 'next/navigation'

export function useLocalizedHref() {
  const pathname = usePathname()
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'id'

  return (href: string) => {
    // If it's already a localized URL, return as is
    if (href.startsWith('/id/') || href.startsWith('/en/')) {
      return href
    }
    
    // If it's a hash anchor or external URL, return as is
    if (href.startsWith('#') || href.startsWith('http')) {
      return href
    }
    
    // Add locale prefix
    return `/${currentLocale}${href === '/' ? '' : href}`
  }
} 