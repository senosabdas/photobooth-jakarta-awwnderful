'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initGA, trackPageView, GA_MEASUREMENT_ID } from '@/lib/analytics'

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize GA on component mount
    if (GA_MEASUREMENT_ID) {
      initGA()
    }
  }, [])

  useEffect(() => {
    // Track page views when route changes
    if (GA_MEASUREMENT_ID) {
      const url = `${pathname}${searchParams ? `?${searchParams}` : ''}`
      trackPageView(url, document.title)
    }
  }, [pathname, searchParams])

  // This component doesn't render anything
  return null
} 