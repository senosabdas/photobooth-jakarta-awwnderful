'use client'

import { Camera, Users, Sparkles, Share2, ChevronDown, ArrowRight, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useLocalizedHref } from '@/lib/navigation'

interface Service {
  title: string
  description: string
  icon: any
  media: {
    type: 'image' | 'video'
    src: string
    thumbnail?: string // Thumbnail for video
  }
  slug: string
}

const getServices = (t: any): Service[] => [
  {
    title: 'Photobooth GIF',
    description: t.services.photoboothGifDesc,
    icon: Camera,
    media: {
      type: 'video',
      src: '/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-35.mp4',
      thumbnail: '/images/services/photo-booth-gif-jakarta/sewa-photo-booth-dslr-setup-jakarta-5.webp'
    },
    slug: 'photobooth-gif'
  },
  {
    title: 'Roaming Photo Booth',
    description: t.services.roamingPhotoBoothDesc,
    icon: Users,
    media: {
      type: 'video',
      src: '/images/lookbook-photo-booth-jakarta/roaming-obooth-3.mp4',
      thumbnail: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-ring-roamer-3.webp'
    },
    slug: 'roaming-photo-booth'
  },
  {
    title: '360 Video Booth',
    description: t.services.video360BoothDesc,
    icon: Sparkles,
    media: {
      type: 'video',
      src: '/images/360-videobooth-servicegrid.mp4',
      thumbnail: '/images/360-video-booth-service-grid-jakarta.webp'
    },
    slug: '360-video-booth'
  },
  {
    title: 'Hashtag Printer',
    description: t.services.hashtagPrinterDesc,
    icon: Share2,
    media: {
      type: 'image',
      src: '/images/services/hashtag-printer-jakarta/hashtag-printer-jakarta-gallery-10.webp'
    },
    slug: 'hashtag-printer'
  },
  {
    title: 'Virtual Photo Booth',
    description: t.services.virtualPhotoBoothDesc,
    icon: Share2,
    media: {
      type: 'image',
      src: '/images/services/virtual-photo-booth-jakarta/virtual-photo-booth-jakarta-virtualbooth-setup-3.png'
      
    },
    slug: 'virtual-photo-booth'
  },
  {
    title: 'Video Booth',
    description: t.services.videoBoothDesc,
    icon: Share2,
    media: {
      type: 'image',
      src: '/images/services/video-booth-jakarta/video-booth-jakarta-videobooth-setup-1.webp'
    },
    slug: 'video-booth'
  },
  {
    title: 'Livestreaming',
    description: t.services.livestreamingDesc,
    icon: Share2,
    media: {
      type: 'image',
      src: '/images/services/livestreaming-photo-booth-jakarta/livestreaming-photo-booth-jakarta-awwnderful-livestreaming-setup-3.webp'
    },
    slug: 'livestreaming'
  },
  {
    title: 'MultiCamera',
    description: t.services.multicameraDesc,
    icon: Share2,
    media: {
      type: 'video',
      src: '/images/lookbook-photo-booth-jakarta/multicamera-photo-greenscreen-2.mp4',
      thumbnail: '/images/services/multicamera-photo-booth-jakarta/multicamera-photo-booth-jakarta-awwnderful-multicamera-setup-4.webp'
    },
    slug: 'multicamera'
  },
  {
    title: 'AI photo booth',
    description: t.services.aiPhotoBoothDesc,
    icon: Share2,
    media: {
      type: 'image',
      src: '/images/lookbook-photo-booth-jakarta/fxbooth-photo-ai-1.webp'
    },
    slug: 'ai-photo-booth'
  },
  {
    title: 'Custom photo print',
    description: t.services.customPhotoPrintDesc,
    icon: Share2,
    media: {
      type: 'video',
      src: '/images/services/custom-photo-print-jakarta/hologram-photobooth-sample-jakarta-1.mp4',
      thumbnail: '/images/services/custom-photo-print-jakarta/hologram-photobooth-sample-jakarta-3.webp'
    },
    slug: 'custom-photo-print'
  },
  {
    title: 'Decoration',
    description: t.services.decorationDesc,
    icon: Share2,
    media: {
      type: 'image',
      src: '/images/services/wedding-decoration-jakarta/wedding-decoration-jakarta-wedding-decoration-1.webp'
    },
    slug: 'decoration'
  },
  {
    title: 'Photo & Video Documentation',
    description: t.services.photoVideoDocumentationDesc,
    icon: Share2,
    media: {
      type: 'video',
      src: '/images/services/photo-video-documentation-jakarta/photo-video-documentation-jakarta-photo-video-1.mp4', 
      thumbnail: '/images/services/photo-video-documentation-jakarta/photo-video-documentation-jakarta-photographer-1.webp'
    },
    slug: 'photo-video-documentation'
  },
  {
    title: 'Light painting',
    description: t.services.lightPaintingDesc,
    icon: Share2,
    media: {
      type: 'video',
      src: '/images/lookbook-photo-booth-jakarta/multicamera-photo-lightpainting-1.mp4',
      thumbnail: '/images/lookbook-photo-booth-jakarta/fxbooth-photo-lightpainting-1.webp'
    },
    slug: 'light-painting'
  },
  {
    title: 'Audio Rental',
    description: t.services.audioRentalDetailDesc,
    icon: Share2,
    media: {
      type: 'image',
      src: '/images/services/sewa-audio-rental-jakarta/sewa-audio-rental-setup-jakarta-1.webp'
    },
    slug: 'audio-rental'
  },
  {
    title: 'Interactive Display',
    description: t.services.interactiveDisplayDesc,
    icon: Share2,
    media: {
      type: 'image',
      src: '/images/services/interactive-display-jakarta/interactive-display-jakarta-photo-slideshow-1.webp'
    },
    slug: 'interactive-display'
  },
  {
    title: 'Invitation & Digital Guestbook',
    description: t.services.invitationDigitalGuestbookDesc,
    icon: Share2,
    media: {
      type: 'image',
      src: '/images/services/invitation-digital-guestbook-jakarta/digitalguestbook-photobooth-jakarta-setup-1.webp'
    },
    slug: 'invitation-digitalguestbook'
  },
  {
    title: 'Virtual Reality',
    description: t.services.virtualRealityDesc,
    icon: Share2,
    media: {
      type: 'image',
      src: '/images/services/virtual-reality-photo-booth-jakarta/virtual-reality-photo-booth-jakarta-vr-setup-1.webp'
    },
    slug: 'virtual-reality'
  },
  {
    title: 'Photobox',
    description: t.services.photoboxDesc,
    icon: Camera,
    media: {
      type: 'image',
      src: '/images/services/boothbox-photo-booth-jakarta/boothbox-photo-booth-jakarta-photobox-setup-1.webp'
    },
    slug: 'photobox'
  }


]

function ServiceCard({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { t } = useLanguage()
  const localizedHref = useLocalizedHref()

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current && service.media.type === 'video') {
      videoRef.current.play().catch(err => console.log('Video play failed:', err))
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current && service.media.type === 'video') {
      videoRef.current.pause()
    }
  }

  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-purple-500/10 transition-all duration-500 bg-gray-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {service.media.type === 'image' ? (
          <div className="relative w-full h-full">
            <Image
              src={service.media.src}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
        ) : (
          <>
            {/* Thumbnail */}
            {service.media.thumbnail && (
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={service.media.thumbnail}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover transition-opacity duration-300 ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                  }`}
                  priority
                />
              </div>
            )}
            {/* Video */}
            <video
              ref={videoRef}
              src={service.media.src}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              loop
              muted
              playsInline
            />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
      </div>
      
      {/* Coming Soon Overlay homepage */}
      {(service.slug === 'virtual-reality') 
      && (
        <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
            <p className="text-sm text-white/80">This service will be available shortly!</p>
          </div>
        </div>
      )}
      
      <div className="absolute bottom-0 p-6 text-white w-full">
        <div className="flex items-center gap-3 mb-2">
          <service.icon className="w-6 h-6 text-purple-400" />
          <h3 className="text-xl font-semibold">{service.title}</h3>
        </div>
        <p className="text-gray-300 mb-4">{service.description}</p>
        <Link
          href={localizedHref(`/services/${service.slug}`)}
          className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
        >
          {t.services.learnMore}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

export default function ServiceGrid() {
  const [showAll, setShowAll] = useState(false)
  const { t } = useLanguage()
  const services = getServices(t)
  const initialDisplayCount = 6
  const displayedServices = showAll ? services : services.slice(0, initialDisplayCount)

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service: Service, index: number) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {services.length > initialDisplayCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors text-lg font-medium"
            >
              {showAll ? t.services.showLess : t.services.seeMoreServices}
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
} 