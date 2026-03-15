'use client'

import { Camera, Calendar, MapPin, Menu as MenuIcon, X, ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import ServiceGrid from '@/components/ServiceGrid'
import FeaturesCard from '@/components/FeaturesCard'
import TestimonialSlider from '@/components/TestimonialSlider'
import BookingForm from '@/components/BookingForm'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { useLocalizedHref } from '@/lib/navigation'
import { useMetadata } from '@/hooks/useMetadata'
import { trackBookingInterest, trackGalleryView } from '@/lib/analytics'

interface LookbookItem {
  id: number
  src: string
  alt: string
  eventType: string
  size?: 'large' | 'medium' | 'small'
  aspectRatio?: string
  mediaType?: 'image' | 'video' | 'gif'
}

const lookbookPreviewItems: LookbookItem[] = [
  {
    id: 1,
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-video-virtual runway-1.mp4",
    alt: "Video Booth Virtual Runway",
    eventType: "Brand Activation",
    size: 'large',
    aspectRatio: 'aspect-[1/1]',
    mediaType: 'video'
    
  },
  {
    id: 2,
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-ai-1.webp",
    alt: "AI photo booth",
    eventType: "Corporate",
    size: 'small',
    aspectRatio: 'aspect-[1/1.5]',
    mediaType: 'image'
  },
  {
    id: 3,
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-ai-2.webp",
    alt: "AI photo booth",
    eventType: "Wedding",
    size: 'small',
    mediaType: 'image'
  },
  {
    id: 4,
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-lightpainting-1.webp",
    alt: "Lightpainting Photo Booth",
    eventType: "Brand Activation",
    size: 'large',
    aspectRatio: 'aspect-[4/3]',
    mediaType: 'image'
  },
  {
    id: 5,
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-13.webp",
    alt: "Photo Booth GIF",
    eventType: "Promnight",
    size: 'small',
    aspectRatio: 'aspect-[16/9]',
    mediaType: 'image'
  },
  {
    id: 6,
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-greenscreen-2.mp4",
    alt: "Multicamera",
    eventType: "Brand Activation",
    size: 'large',
    aspectRatio: 'aspect-[1/1]',
    mediaType: 'video'
  },
  {
    id: 7,
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-7.webp",
    alt: "Photo Booth GIF",
    eventType: "Wedding",
    size: 'small',
    aspectRatio: 'aspect-[1/1]',
    mediaType: 'image'
  },
  {
    id: 8,
    src: "/images/lookbook-photo-booth-jakarta/photobooth-fisheye-1.webp",
    alt: "Fish Eye Photo Booth",
    size: 'large',
    eventType: "Brand Activation",
    mediaType: 'image'
  },
  {
    id: 9,
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-17.mp4",
    alt: "Photo Booth GIF",
    eventType: "Brand Activation",
    size: 'large',
    aspectRatio: 'aspect-[3/4]',
    mediaType: 'video'
  },
  {
    id: 10,
    src: "/images/lookbook-photo-booth-jakarta/videobooth-360-3.mp4",
    alt: "360 Video Booth",
    size: 'small',
    eventType: "Brand Activation",
    mediaType: 'video'
  },
  {
    id: 11,
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-19.webp",
    alt: "Photo Booth GIF",
    size: 'small',
    eventType: "Brand Activation",
    mediaType: 'image'
  },
  {
    id: 12,
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-greenscreen-5.mp4",
    alt: "Multicamera",
    size: 'large',
    eventType: "School Events",
    mediaType: 'video'
  }
]

const clientLogos = [
  { src: '/images/clients/Intercontinental.png', alt: 'InterContinental Jakarta Pondok Indah' },
  { src: '/images/clients/pln.png', alt: 'PLN' },
  { src: '/images/clients/bwa.png', alt: 'BWA' },
  { src: '/images/clients/LISTERINE.png', alt: 'Listerine' },
  { src: '/images/clients/NOROID.png', alt: 'Noroid' },
  { src: '/images/clients/Google.png', alt: 'Google' },
  { src: '/images/clients/Skkmigas.png', alt: 'SKK Migas' },
  { src: '/images/clients/LOACKER.png', alt: 'Loacker' },
  { src: '/images/clients/WINGSFOOD.png', alt: 'Wingsfood' },
  { src: '/images/clients/Hers-Protex.png', alt: 'Hers Protex' },
  { src: '/images/clients/Schlumberger.png', alt: 'Schlumberger' },
  { src: '/images/clients/Djabesmen.png', alt: 'Djabesmen' },
  { src: '/images/clients/Federal-oil.png', alt: 'Federal Oil' },
  { src: '/images/clients/rollover-reaction.png', alt: 'Rollover Reaction' },
  { src: '/images/clients/citibank.png', alt: 'Citibank' },
  { src: '/images/clients/mis.png', alt: 'Mentari Intercultural School' },
  { src: '/images/clients/Lycee-Francais-De-Jakarta.png', alt: 'Lycée Français de Jakarta' },
  { src: '/images/clients/MOET-CHANDON.png', alt: 'Moët & Chandon' },
  { src: '/images/clients/Bobobox.png', alt: 'Bobobox' },
  { src: '/images/clients/marlboro.png', alt: 'Marlboro' },
  { src: '/images/clients/BerryBenka.png', alt: 'Berrybenka' },
  { src: '/images/clients/HIJABENKA.png', alt: 'Hijabenka' },
  { src: '/images/clients/Hennessy.png', alt: 'Hennessy' },
  { src: '/images/clients/Honda.png', alt: 'Honda' },
  { src: '/images/clients/XL.png', alt: 'XL' },
  { src: '/images/clients/narasi.png', alt: 'Narasi' },
  { src: '/images/clients/BWEMALL.png', alt: 'BWE Mall' },
  { src: '/images/clients/teh-kotak.png', alt: 'Teh Botol' },
  { src: '/images/clients/DCODE.png', alt: 'Dcode' },
  { src: '/images/clients/Voltaren.png', alt: 'Voltaren' },
  { src: '/images/clients/Unicharm.png', alt: 'Unicharm' },
  { src: '/images/clients/Teh-Pucuk-Harum.png', alt: 'Teh Pucuk Harum' },
  { src: '/images/clients/Modanisa.png', alt: 'Modanisa' },
  { src: '/images/clients/Yayasan-Pesantren-islam-AL-AZHAR.png', alt: 'Yayasan Pesantren Islam Al-Azhar' },
  { src: '/images/clients/dwiwarna.png', alt: 'Dwi Warna' },
  { src: '/images/clients/Aice.png', alt: 'Aice' },
  { src: '/images/clients/BAIC.png', alt: 'Baic' },
  { src: '/images/clients/Jakarta-Praise.png', alt: 'Jakarta Praise Community Church' },
  { src: '/images/clients/Colony-Group.png', alt: 'Colony Group' },
  { src: '/images/clients/Yayasan-Pesantren-islam-AL-AZHAR.png', alt: 'Yayasan Pesantren Islam Al-Azhar' },
  { src: '/images/clients/dwiwarna.png', alt: 'Dwi Warna' },
  { src: '/images/clients/Aice.png', alt: 'Aice' },
  { src: '/images/clients/BAIC.png', alt: 'Baic' },
  { src: '/images/clients/Mini-Cooper.png', alt: 'Mini Cooper' },
  { src: '/images/clients/velo.png', alt: 'velo' },
  { src: '/images/clients/Telkomsel.png', alt: 'telkomsel' },
  { src: '/images/clients/PORSCHE.png', alt: 'porsche' },
  { src: '/images/clients/Prambors.svg', alt: 'prambors' },
  { src: '/images/clients/body-shop.png', alt: 'The Body Shop' },
  { src: '/images/clients/garnier.png', alt: 'Garnier' },
  { src: '/images/clients/Modanisa.png', alt: 'Modanisa' },
  { src: '/images/clients/PRUDENTIAL.png', alt: 'Prudential' },
  { src: '/images/clients/WhatsApp.webp', alt: 'WhatsApp' },
  { src: '/images/clients/Nestle-Milo.png', alt: 'Nestlé Milo' },

  // updated
]

function SlidingTextSection() {
  const capabilities = [
    "Face & Body Tracking",
    "Cinematography",
    "2D+3D Animation",
    "Product Design",
    "Event Coordination",
    "Augmented Reality",
    "Lead Generation",
    "Kinect Technology",
    "Social Media & Tracking",
    "Lighting Design",
    "GIF Creation",
    "Content Editing",
    "Projections & Mapping",
    "Fabrication & Set Design",
    "Virtual Reality",
    "Motion Capture",
    "Interactive Installations",
    "Live Streaming",
    "Real-time Effects",
    "Greenscreen Treadmill",
    "AI Virtual Try-On",
    "AI photo booth with Celebrities"
  ]

  // Split into 4 rows
  const row1 = capabilities.slice(0, 5)
  const row2 = capabilities.slice(5, 10)
  const row3 = capabilities.slice(10, 15)
  const row4 = capabilities.slice(15, 20)

  return (
    <section className="py-20 overflow-hidden bg-gray-900 relative">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
      
      {/* First Row - Sliding Left */}
      <div className="mb-8 whitespace-nowrap">
        <div className="inline-block animate-slide-left">
          {[...row1, ...row1].map((text, index) => (
            <span key={index} className="inline-block text-4xl md:text-3xl font-light text-purple-400/80 mx-8 uppercase italic opacity-100">
              {text}
              <span className="mx-8 text-gray-700">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Second Row - Sliding Right */}
      <div className="mb-8 whitespace-nowrap">
        <div className="inline-block animate-slide-right">
          {[...row2, ...row2].map((text, index) => (
            <span key={index} className="inline-block text-4xl md:text-3xl font-light text-blue-400/80 mx-8 uppercase italic opacity-100">
              {text}
              <span className="mx-8 text-gray-700">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Third Row - Sliding Left */}
      <div className="mb-8 whitespace-nowrap">
        <div className="inline-block animate-slide-left">
          {[...row3, ...row3].map((text, index) => (
            <span key={index} className="inline-block text-4xl md:text-3xl font-light text-purple-400/80 mx-8 uppercase italic opacity-100">
              {text}
              <span className="mx-8 text-gray-700">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Fourth Row - Sliding Right */}
      <div className="whitespace-nowrap">
        <div className="inline-block animate-slide-right">
          {[...row4, ...row4].map((text, index) => (
            <span key={index} className="inline-block text-4xl md:text-3xl font-light text-blue-400/80 mx-8 uppercase italic opacity-100">
              {text}
              <span className="mx-8 text-gray-700">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function LookbookModal({ 
  isOpen, 
  onClose, 
  item 
}: { 
  isOpen: boolean
  onClose: () => void
  item: LookbookItem | null 
}) {
  if (!isOpen || !item) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-[90vw] max-w-7xl h-[80vh] bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden flex">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Media Section - Left */}
          <div className="relative w-full md:w-2/3 h-full">
            {item.mediaType === 'video' ? (
              <video
                src={item.src}
                className="absolute inset-0 w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>

          {/* Info Section - Right */}
          <div className="w-full md:w-1/3 p-8 overflow-y-auto">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">{item.alt}</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Event Type</h3>
                  <p className="mt-1 text-white">{item.eventType}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Media Type</h3>
                  <p className="mt-1 text-white capitalize">{item.mediaType}</p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/lookbook"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Full Lookbook
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<LookbookItem | null>(null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const { t, language } = useLanguage()
  const localizedHref = useLocalizedHref()
  
  // Update metadata when language changes
  useMetadata()

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-gray-100 overflow-x-hidden">
      <Navigation />
      <main className="min-h-screen overflow-x-hidden">
      

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" aria-hidden="true" />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <Camera className="w-6 h-6" aria-hidden="true" />
              <span>{t.hero.professionalSetup}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6" aria-hidden="true" />
              <span>{t.hero.easyBooking}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6" aria-hidden="true" />
              <span>{t.hero.multipleLocations}</span>
            </div>
          </div>
          
          <a
            href="#contact"
            className="inline-block mt-8 bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105 duration-200"
            aria-label="Book your photo booth event now"
            onClick={() => trackBookingInterest('hero-cta')}
          >
            {t.hero.bookYourEvent}
          </a>
        </div>
      </section>

      {/* Services Section */}
      <ServiceGrid />

      {/* Sliding Text Section */}
      <SlidingTextSection />

      {/* Lookbook Preview Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.lookbook.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.lookbook.subtitle}
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {lookbookPreviewItems.map((item) => (
              <div
                key={item.id}
                className={`relative mb-4 group overflow-hidden rounded-lg cursor-pointer ${
                  item.size === 'large' ? 'h-[600px]' :
                  item.size === 'medium' ? 'h-[400px]' :
                  'h-[300px]'
                }`}
                onClick={() => setSelectedItem(item)}
              >
                {item.mediaType === 'video' ? (
                  <video
                    src={item.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
          <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">{item.eventType}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/lookbook"
              className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              {t.lookbook.viewFullLookbook}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Modal */}
        <LookbookModal
          isOpen={selectedItem !== null}
          onClose={() => setSelectedItem(null)}
          item={selectedItem}
        />
      </section>

      {/* Features Section */}
      <FeaturesCard />

      {/* Client Logos Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Logos Column */}
            <div className="relative h-[600px] overflow-hidden">
              {/* Masking Gradients */}
              <div className="absolute inset-0 pointer-events-none">
                <div 
                  className="absolute top-0 left-0 right-0 h-32  z-10"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
                  }}
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 h-32  z-10"
                  style={{
                    maskImage: 'linear-gradient(to top, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to top, black, transparent)'
                  }}
                />
              </div>
              
              {/* Logos Grid */}
              <div className="absolute inset-0">
                <div className="animate-marquee">
                  <div className="grid grid-cols-4 gap-8">
                    {[...clientLogos, ...clientLogos].map((logo, index) => (
                      <div 
                        key={index} 
                        className="relative w-full aspect-[3/2] filter grayscale hover:grayscale-0 transition-all duration-300 group"
                      >
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain relative z-10"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t.clients.title} <span className="text-purple-400"></span>
              </h2>
              <div className="space-y-4">
                <p className="text-5xl font-bold">
                  <span className="text-purple-400">100+</span>
                  <span className="text-white"> {t.clients.brands}</span>
                </p>
                <p className="text-5xl font-bold">
                  <span className="text-purple-400">1000+</span>
                  <span className="text-white"> {t.clients.activations}</span>
                </p>
                <p className="text-5xl font-bold">
                  <span className="text-white"> {t.clients.inIndonesia}</span>
                </p>
              </div>
            </div>
          </div>
    </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-purple-900/10 to-gray-800 -z-10"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-3xl rounded-full -z-10"></div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-6">
              {language === 'en' ? 'Frequently Asked Questions' : 'Pertanyaan yang Sering Ditanyakan'}
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'en'
                ? 'Find answers to the most common questions about our photobooth services'
                : 'Temukan jawaban atas pertanyaan paling umum tentang layanan photobooth kami'
              }
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-pink-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl transition-opacity duration-300 ${
                  openFaqIndex === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}></div>

                <div className="relative z-10">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        openFaqIndex === 0
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'bg-gray-700 text-gray-300 group-hover:bg-purple-500/20'
                      }`}>
                        1
                      </div>
                      <span className={`font-semibold text-lg transition-all duration-300 ${
                        openFaqIndex === 0 ? 'text-white' : 'text-gray-200 group-hover:text-white'
                      }`}>
                        {language === 'en'
                          ? 'What is the price range for renting a photobooth in Jakarta?'
                          : 'Berapa kisaran harga sewa photobooth di Jakarta?'
                        }
                      </span>
                    </div>

                    <div className={`relative transition-all duration-300 ${
                      openFaqIndex === 0 ? 'rotate-180' : 'group-hover:scale-110'
                    }`}>
                      <ChevronDown
                        className={`w-6 h-6 transition-colors duration-300 ${
                          openFaqIndex === 0
                            ? 'text-purple-400'
                            : 'text-gray-400 group-hover:text-purple-300'
                        }`}
                      />
                      <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md transition-opacity duration-300 ${
                        openFaqIndex === 0 ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaqIndex === 0
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-6 pt-2">
                      <div className="border-t border-gray-600/50 pt-6">
                        <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                          {language === 'en'
                            ? 'Awwnderful photobooth rental starts from Rp2 million – Rp5 million for 2–4 hours duration. Prices are adjusted based on package selection, rental duration, output (print, GIF, video), and customization level. For full-day events or special needs, we can also prepare custom packages.'
                            : 'Harga sewa photobooth di Awwnderful mulai dari Rp2 juta – Rp5 juta untuk durasi 2–4 jam. Harga menyesuaikan dengan paket pilihan, durasi sewa, output (print, GIF, video), serta tingkat kustomisasi desain. Untuk acara full day atau kebutuhan spesial, kami juga bisa menyiapkan paket custom.'
                          }
                        </p>
                        <div className="mt-6 flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-300 ${
                  openFaqIndex === 0 ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl transition-opacity duration-300 ${
                  openFaqIndex === 1 ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}></div>

                <div className="relative z-10">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        openFaqIndex === 1
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'bg-gray-700 text-gray-300 group-hover:bg-purple-500/20'
                      }`}>
                        2
                      </div>
                      <span className={`font-semibold text-lg transition-all duration-300 ${
                        openFaqIndex === 1 ? 'text-white' : 'text-gray-200 group-hover:text-white'
                      }`}>
                        {language === 'en'
                          ? 'What facilities are included in the photobooth package?'
                          : 'Apa saja fasilitas yang sudah termasuk dalam paket photobooth?'
                        }
                      </span>
                    </div>

                    <div className={`relative transition-all duration-300 ${
                      openFaqIndex === 1 ? 'rotate-180' : 'group-hover:scale-110'
                    }`}>
                      <ChevronDown
                        className={`w-6 h-6 transition-colors duration-300 ${
                          openFaqIndex === 1
                            ? 'text-purple-400'
                            : 'text-gray-400 group-hover:text-purple-300'
                        }`}
                      />
                      <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md transition-opacity duration-300 ${
                        openFaqIndex === 1 ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaqIndex === 1
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-6 pt-2">
                      <div className="border-t border-gray-600/50 pt-6">
                        <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                          {language === 'en'
                            ? 'Our package is all-inclusive, including: professional camera & studio lighting, friendly operator standby throughout the event, unlimited photo prints, custom frame design, fun props & accessories, and online gallery.'
                            : 'Paket kami bersifat all-in, mencakup: kamera profesional & lighting studio, operator ramah yang standby selama acara, cetak foto unlimited, desain frame custom, props & aksesoris lucu, dan galeri online.'
                          }
                        </p>
                        <div className="mt-6 flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-300 ${
                  openFaqIndex === 1 ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl transition-opacity duration-300 ${
                  openFaqIndex === 2 ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}></div>

                <div className="relative z-10">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        openFaqIndex === 2
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'bg-gray-700 text-gray-300 group-hover:bg-purple-500/20'
                      }`}>
                        3
                      </div>
                      <span className={`font-semibold text-lg transition-all duration-300 ${
                        openFaqIndex === 2 ? 'text-white' : 'text-gray-200 group-hover:text-white'
                      }`}>
                        {language === 'en'
                          ? 'How far in advance should I book a photobooth?'
                          : 'Berapa lama sebelumnya sebaiknya booking photobooth?'
                        }
                      </span>
                    </div>

                    <div className={`relative transition-all duration-300 ${
                      openFaqIndex === 2 ? 'rotate-180' : 'group-hover:scale-110'
                    }`}>
                      <ChevronDown
                        className={`w-6 h-6 transition-colors duration-300 ${
                          openFaqIndex === 2
                            ? 'text-purple-400'
                            : 'text-gray-400 group-hover:text-purple-300'
                        }`}
                      />
                      <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md transition-opacity duration-300 ${
                        openFaqIndex === 2 ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaqIndex === 2
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-6 pt-2">
                      <div className="border-t border-gray-600/50 pt-6">
                        <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                          {language === 'en'
                            ? 'It\'s recommended to book 1–2 months in advance, especially for weekends or wedding season. The earlier you book, the safer your slot will be.'
                            : 'Sebaiknya booking 1–2 bulan sebelum acara, terutama untuk weekend atau musim pernikahan. Semakin cepat booking, semakin aman slot Anda.'
                          }
                        </p>
                        <div className="mt-6 flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-300 ${
                  openFaqIndex === 2 ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl transition-opacity duration-300 ${
                  openFaqIndex === 3 ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}></div>

                <div className="relative z-10">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        openFaqIndex === 3
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'bg-gray-700 text-gray-300 group-hover:bg-purple-500/20'
                      }`}>
                        4
                      </div>
                      <span className={`font-semibold text-lg transition-all duration-300 ${
                        openFaqIndex === 3 ? 'text-white' : 'text-gray-200 group-hover:text-white'
                      }`}>
                        {language === 'en'
                          ? 'Do I need to pay a deposit (DP)?'
                          : 'Apakah perlu membayar uang muka (DP)?'
                        }
                      </span>
                    </div>

                    <div className={`relative transition-all duration-300 ${
                      openFaqIndex === 3 ? 'rotate-180' : 'group-hover:scale-110'
                    }`}>
                      <ChevronDown
                        className={`w-6 h-6 transition-colors duration-300 ${
                          openFaqIndex === 3
                            ? 'text-purple-400'
                            : 'text-gray-400 group-hover:text-purple-300'
                        }`}
                      />
                      <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md transition-opacity duration-300 ${
                        openFaqIndex === 3 ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaqIndex === 3
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-6 pt-2">
                      <div className="border-t border-gray-600/50 pt-6">
                        <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                          {language === 'en'
                            ? 'Yes, a 50% deposit is required to reserve the date. The remaining payment can be made at the latest H-3 before the event or according to agreement.'
                            : 'Ya, untuk reservasi tanggal diperlukan DP sebesar 50% dari total harga. Sisa pembayaran dapat dilakukan paling lambat H-3 acara atau sesuai kesepakatan.'
                          }
                        </p>
                        <div className="mt-6 flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-300 ${
                  openFaqIndex === 3 ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl transition-opacity duration-300 ${
                  openFaqIndex === 4 ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}></div>

                <div className="relative z-10">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 4 ? null : 4)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        openFaqIndex === 4
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'bg-gray-700 text-gray-300 group-hover:bg-purple-500/20'
                      }`}>
                        5
                      </div>
                      <span className={`font-semibold text-lg transition-all duration-300 ${
                        openFaqIndex === 4 ? 'text-white' : 'text-gray-200 group-hover:text-white'
                      }`}>
                        {language === 'en'
                          ? 'Can I customize the photo layout and design?'
                          : 'Apakah bisa custom desain frame dan backdrop?'
                        }
                      </span>
                    </div>

                    <div className={`relative transition-all duration-300 ${
                      openFaqIndex === 4 ? 'rotate-180' : 'group-hover:scale-110'
                    }`}>
                      <ChevronDown
                        className={`w-6 h-6 transition-colors duration-300 ${
                          openFaqIndex === 4
                            ? 'text-purple-400'
                            : 'text-gray-400 group-hover:text-purple-300'
                        }`}
                      />
                      <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md transition-opacity duration-300 ${
                        openFaqIndex === 4 ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaqIndex === 4
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-6 pt-2">
                      <div className="border-t border-gray-600/50 pt-6">
                        <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                          {language === 'en'
                            ? 'Absolutely! All photo frames, GIF overlays, and backdrop designs can be adjusted to match your event theme. We can customize with your company logo, special colors, or wedding invitation-style design.'
                            : 'Bisa banget! Semua frame foto, overlay GIF, dan desain backdrop bisa disesuaikan dengan tema acara. Mau pakai logo perusahaan, warna khusus, atau desain ala undangan pernikahan? Tim desain Awwnderful siap mewujudkan.'
                          }
                        </p>
                        <div className="mt-6 flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-300 ${
                  openFaqIndex === 4 ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </div>
          </div>

          {/* See More Button */}
          <div className="text-center mt-12">
            <Link
              href={localizedHref('/faq')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {language === 'en' ? 'See More FAQs' : 'Lihat FAQ Lainnya'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />

     
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
