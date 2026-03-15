'use client'

import { Instagram, Facebook, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function Footer() {
  const { t, language } = useLanguage()
  const isEnglish = language === 'en'
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold text-purple-400 mb-4">Awwnderful Photo Booth</h2>
            <p className="text-gray-400">{t.footer.description}</p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://instagram.com/awwnderful" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com/awwnderful" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@awwnderful" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <svg 
                  className="w-6 h-6" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/awwnderful/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">{t.footer.contact}</h3>
            <address className="text-gray-400 not-italic">
              <p>Email: hi@awwnderful.com</p>
              <p>Phone: +62877 7256 6170 , +62812 975 59628</p>  
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">{isEnglish ? 'Service Areas' : 'Area Layanan'}</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="/sewa-photo-booth-jakarta" className="hover:text-purple-400">{isEnglish ? 'Photo Booth Jakarta' : 'Photo Booth Jakarta'}</Link></li>
              <li><Link href="/photo-booth-wedding-jakarta" className="hover:text-purple-400">{isEnglish ? 'Wedding Photo Booth Jakarta' : 'Photo Booth Wedding Jakarta'}</Link></li>
              <li><Link href="/photo-booth-360-jakarta" className="hover:text-purple-400">{isEnglish ? '360 Photo Booth Jakarta' : 'Photo Booth 360 Jakarta'}</Link></li>
              <li>BSD/Tangerang Selatan, Depok, Bekasi</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
} 