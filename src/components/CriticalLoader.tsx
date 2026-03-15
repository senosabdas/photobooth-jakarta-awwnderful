'use client'

import { useEffect } from 'react'

interface CriticalLoaderProps {
  onCriticalLoaded: () => void
}

export default function CriticalLoader({ onCriticalLoaded }: CriticalLoaderProps) {
  useEffect(() => {
    // Preload critical resources that actually exist
    const criticalImages = [
      '/logo.png',
      // Add other critical images that appear above the fold when you know they exist
    ]

    const preloadPromises = criticalImages.map(src => {
      return new Promise<void>((resolve) => {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = () => resolve() // Continue even if image fails
        img.src = src
      })
    })

    Promise.all(preloadPromises).then(() => {
      // Small delay to ensure smooth transition
      setTimeout(onCriticalLoaded, 100)
    })
  }, [onCriticalLoaded])

  return null // This component doesn't render anything
} 