'use client'

import { useEffect, useState } from 'react'

interface ImageLoadTrackerProps {
  onAllImagesLoaded: () => void
  timeout?: number
}

export default function ImageLoadTracker({ onAllImagesLoaded, timeout = 5000 }: ImageLoadTrackerProps) {
  const [hasChecked, setHasChecked] = useState(false)

  useEffect(() => {
    if (hasChecked) return

    const checkImages = () => {
      const images = Array.from(document.querySelectorAll('img'))
      
      if (images.length === 0) {
        // No images to load, proceed immediately
        onAllImagesLoaded()
        setHasChecked(true)
        return
      }

      const imagePromises = images.map(img => {
        if (img.complete && img.naturalHeight !== 0) {
          return Promise.resolve()
        }
        
        return new Promise<void>((resolve) => {
          const handleLoad = () => {
            img.removeEventListener('load', handleLoad)
            img.removeEventListener('error', handleLoad)
            resolve()
          }
          
          img.addEventListener('load', handleLoad)
          img.addEventListener('error', handleLoad)
          
          // Fallback for images that might already be cached
          if (img.complete) {
            handleLoad()
          }
        })
      })

      Promise.all(imagePromises).then(() => {
        onAllImagesLoaded()
        setHasChecked(true)
      })
    }

    // Check immediately for any existing images
    checkImages()

    // Also set up a mutation observer for dynamically added images
    const observer = new MutationObserver(() => {
      if (!hasChecked) {
        checkImages()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src']
    })

    // Fallback timeout - shorter to prevent long waits
    const timeoutId = setTimeout(() => {
      if (!hasChecked) {
        console.log('Image loading timeout - proceeding anyway')
        onAllImagesLoaded()
        setHasChecked(true)
      }
    }, timeout)

    return () => {
      observer.disconnect()
      clearTimeout(timeoutId)
    }
  }, [onAllImagesLoaded, timeout, hasChecked])

  return null // This component doesn't render anything
} 