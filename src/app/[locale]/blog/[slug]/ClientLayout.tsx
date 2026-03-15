'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
} 