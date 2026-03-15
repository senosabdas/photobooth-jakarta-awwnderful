import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Language } from '@/lib/i18n'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: Language }>
}

// SEO metadata for each language
export async function generateMetadata({ params }: { params: Promise<{ locale: Language }> }): Promise<Metadata> {
  const { locale } = await params
  
  if (locale === 'id') {
    return {
      title: 'Awwnderful Photo Booth - Sewa Photobooth dan jasa lainnya. Lokasi Jakarta, Indonesia',
      description: 'Sewa photobooth premium untuk wedding, corporate event, dan perayaan di Jakarta, Indonesia. Layanan profesional dengan kualitas tinggi.',
      keywords: 'sewa photobooth jakarta, sewa photobooth indonesia, photobooth rental jakarta, rental photobooth indonesia, photo booth wedding jakarta, sewa photo booth murah',
      alternates: {
        canonical: 'https://awwnderful.com/id',
        languages: {
          'en': 'https://awwnderful.com/en',
          'id': 'https://awwnderful.com/id'
        }
      },
      openGraph: {
        title: 'Awwnderful Photo Booth - Sewa Photobooth Jakarta, Bogor, Depok, Bekasi & Tangerang',
        description: 'Sewa photobooth dan jasa multimedia di Jakarta.',
        url: 'https://awwnderful.com/id',
        siteName: 'Awwnderful Photo Booth',
        locale: 'id_ID',
        type: 'website',
      }
    }
  }
  
  // English metadata
  return {
    title: 'Awwnderful Photobooth - Rental & Many profesional service in Jakarta, Indonesia',
    description: 'Premium photo booth services for weddings, corporate events, and celebrations in Jakarta. High-quality instant photos and memories.',
    keywords: 'photo booth rental jakarta, premium photobooth, wedding photo booth, corporate event photography, instant photo printing',
    alternates: {
      canonical: 'https://awwnderful.com/en',
      languages: {
        'en': 'https://awwnderful.com/en',
        'id': 'https://awwnderful.com/id'
      }
    },
    openGraph: {
      title: 'Awwnderful Photo Booth - Premium Event Photography Services',
      description: 'Premium photo booth services for weddings, corporate events, and celebrations in Jakarta.',
      url: 'https://awwnderful.com/en',
      siteName: 'Awwnderful Photo Booth',
      locale: 'en_US',
      type: 'website',
    }
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  return (
    <html lang={locale === 'id' ? 'id' : 'en'}>
      <head>
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="en" href="https://awwnderful.com/en" />
        <link rel="alternate" hrefLang="id" href="https://awwnderful.com/id" />
        <link rel="alternate" hrefLang="x-default" href="https://awwnderful.com/id" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

// Generate static params for both locales
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'id' }
  ]
} 