'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing...')

  const loadingMessages = [
    'Initializing...',
    'Loading assets...',
    'Preparing gallery...',
    'Setting up services...',
    'Almost ready...',
    'Finalizing...'
  ]

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('awwnderful-visited')
    
    // Simulate loading progress with dynamic messages
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 8 + 2
        
        // Update loading message based on progress
        const messageIndex = Math.floor((newProgress / 100) * loadingMessages.length)
        if (messageIndex < loadingMessages.length) {
          setLoadingText(loadingMessages[messageIndex])
        }
        
        if (newProgress >= 100) {
          clearInterval(interval)
          setProgress(100)
          setLoadingText('Complete!')
          
          // Mark user as visited
          localStorage.setItem('awwnderful-visited', 'true')
          
          // Notify parent but don't auto-hide
          onLoadingComplete()
          
          return 100
        }
        return newProgress
      })
    }, hasVisited ? 50 : 120) // Faster for returning visitors

    return () => {
      clearInterval(interval)
    }
  }, [onLoadingComplete])

  const handleSkip = () => {
    setProgress(100)
    setLoadingText('Complete!')
    onLoadingComplete()
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center">
      <div className="text-center relative z-10">
        {/* Logo with glow effect */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150"></div>
          <Image
            src="/logo.png"
            alt="Awwnderful"
            width={120}
            height={120}
            className="mx-auto relative z-10 animate-pulse"
            priority
          />
        </div>

        {/* Company name */}
        <h1 className="text-2xl font-bold text-white mb-8 tracking-wide">
          Loading...
        </h1>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="flex justify-between text-white text-sm mb-3">
            <span className="animate-pulse">{loadingText}</span>
            <span className="font-mono">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
            <div 
              className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Skip button (appears after 2 seconds) */}
        {progress < 100 && (
          <button
            onClick={handleSkip}
            className="text-white/60 hover:text-white text-sm transition-colors duration-200 underline animate-fadeIn"
            style={{
              animationDelay: '2s',
              animationFillMode: 'both'
            }}
          >
            Skip Loading
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  )
} 