'use client'

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { trackWhatsAppClick } from '@/lib/analytics'

export default function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const phoneNumber = "6287772566170"
  const message = "Halo, saya tertarik dengan layanan photo booth Awwnderful. Boleh info paket dan harganya?"

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Show popup message after 3 seconds of page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
      // Play sound effect
      const audio = new Audio('/sounds/notification.mp3')
      audio.play().catch(error => console.log('Audio playback failed:', error))

      // Hide popup after 5 seconds
      setTimeout(() => {
        setShowPopup(false)
      }, 5000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
      {/* Popup Message */}
      <div
        className={`absolute bottom-full right-0 mb-4 transition-all duration-300 ease-in-out ${
          showPopup ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-xl shadow-lg p-4 max-w-xs animate-bounce">
          <p className="text-gray-800 font-medium">👋 Ada yang bisa kami bantu? Chat via WhatsApp!</p>
        </div>
      </div>

      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center group"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => trackWhatsAppClick()}
      >
        {/* Hover Tooltip - Only show on desktop */}
        {!isMobile && (
          <span
            className={`absolute right-full mr-4 bg-white text-gray-800 px-6 py-3 rounded-xl shadow-lg whitespace-nowrap transition-all duration-200 text-lg font-medium ${
              isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            Chat via WhatsApp
          </span>
        )}

        {/* WhatsApp Button - Responsive sizing */}
        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </a>
    </div>
  )
} 