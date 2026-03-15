'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { useLocalizedHref } from '@/lib/navigation'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()
  const localizedHref = useLocalizedHref()

  const isActivePage = (path: string) => {
    if (path === '/') return pathname === path
    return pathname.startsWith(path)
  }

  const isHomePage = pathname === '/' || pathname === '/en/' || pathname === '/id/' || pathname === '/en' || pathname === '/id'

  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16" aria-label="Main navigation">
          {/* Logo */}
          <Link href={localizedHref('/')} aria-label="Awwnderful Photo Booth">
            <Image src="/logo.png" alt="Awwnderful Photo Booth" width={100} height={50} />
          </Link>

          {/* Mobile Header Right Side - Language Switcher + Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Switcher for Mobile */}
            <LanguageSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="p-2 rounded-md text-gray-300 hover:text-purple-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href={localizedHref('/')}
              className={`${
                isActivePage('/')
                  ? 'text-purple-400 font-semibold'
                  : 'text-gray-300 hover:text-purple-400'
              } transition-colors text-sm`}
            >
              {t.nav.home}
            </Link>
            <Link
              href={isHomePage ? '#services' : localizedHref('/#services')}
              className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
            >
              {t.nav.services}
            </Link>
            <Link
              href={isHomePage ? '#features' : localizedHref('/#features')}
              className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
            >
              {t.nav.features}
            </Link>

            {/* See More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                className="flex items-center gap-1 text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                {t.nav.seeMore}
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
 
                  <Link
                    href={localizedHref('/lookbook')}
                    className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-purple-400 ${
                      isActivePage('/lookbook') ? 'text-purple-400 bg-gray-700' : ''
                    }`}
                  >
                    {t.nav.lookbook}
                  </Link>
                  <Link
                    href={localizedHref('/blog')}
                    className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-purple-400 ${
                      isActivePage('/blog') ? 'text-purple-400 bg-gray-700' : ''
                    }`}
                  >
                    {t.nav.blog}
                  </Link>
                  <Link
                    href="/artikel"
                    className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-purple-400 ${
                      isActivePage('/artikel') ? 'text-purple-400 bg-gray-700' : ''
                    }`}
                  >
                    Artikel
                  </Link>
                  <Link
                    href={localizedHref('/faq')}
                    className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-purple-400 ${
                      isActivePage('/faq') ? 'text-purple-400 bg-gray-700' : ''
                    }`}
                  >
                    {t.nav.faq}
                  </Link>
                  <a
                    href="https://awwnderful.smugmug.com/events"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-purple-400"
                  >
                    {t.nav.seeYourPhotos}
                  </a>
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Book Now Button */}
            <Link
              href={isHomePage ? '#contact' : localizedHref('/#contact')}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors text-sm font-medium"
            >
              {t.nav.bookNow}
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="py-2 space-y-1">
            <Link
              href={localizedHref('/')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActivePage('/') ? 'text-purple-400 bg-gray-800' : 'text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href={isHomePage ? '#services' : localizedHref('/#services')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.services}
            </Link>
            <Link
              href={isHomePage ? '#features' : localizedHref('/#features')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.features}
            </Link>
            <Link
              href="/artikel"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActivePage('/artikel') ? 'text-purple-400 bg-gray-800' : 'text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Lihat Lainnya
            </Link>
            <Link
              href={localizedHref('/lookbook')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActivePage('/lookbook') ? 'text-purple-400 bg-gray-800' : 'text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.lookbook}
            </Link>
            <Link
              href={localizedHref('/blog')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActivePage('/blog') ? 'text-purple-400 bg-gray-800' : 'text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.blog}
            </Link>
            <Link
              href={localizedHref('/faq')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActivePage('/faq') ? 'text-purple-400 bg-gray-800' : 'text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.faq}
            </Link>
            <a
              href="https://awwnderful.smugmug.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.onlineGallery}
            </a>
            
            <Link
              href={isHomePage ? '#contact' : localizedHref('/#contact')}
              className="block px-3 py-2 rounded-md text-base font-medium bg-purple-600 text-white hover:bg-purple-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.bookNow}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 