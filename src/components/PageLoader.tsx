'use client'

import { useState, useEffect } from 'react'
import LoadingScreen from './LoadingScreen'
import ImageLoadTracker from './ImageLoadTracker'

interface PageLoaderProps {
  children: React.ReactNode
  minLoadingTime?: number // Minimum time to show loading screen
}

export default function PageLoader({ children, minLoadingTime = 1000 }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [minTimeElapsed, setMinTimeElapsed] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    // Ensure minimum loading time
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true)
    }, minLoadingTime)

    return () => {
      clearTimeout(minTimer)
    }
  }, [minLoadingTime])

  useEffect(() => {
    // Only proceed when both conditions are met
    if (minTimeElapsed && imagesLoaded) {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }
  }, [minTimeElapsed, imagesLoaded])

  const handleImagesLoaded = () => {
    setImagesLoaded(true)
  }

  return (
    <>
      {isLoading && (
        <LoadingScreen 
          onLoadingComplete={() => {
            // This will be called by the loading screen, but we ignore it
            // and rely on our own logic above
          }} 
        />
      )}
      <ImageLoadTracker onAllImagesLoaded={handleImagesLoaded} />
      <div className={`transition-opacity duration-500 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
        {children}
      </div>
    </>
  )
} 