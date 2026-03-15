'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, Expand } from 'lucide-react'
import Image from 'next/image'

interface GalleryImage {
  id: number
  src: string
  alt: string
  title: string
  category: string
}

// Default gallery images (used when no images prop is provided)
const DEFAULT_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: '/images/services/photo-booth-gif-jakarta/photo-booth-classic-setup-jakarta-4.webp',
    alt: 'Caramel Sequin Backdrop Setup',
    title: 'Classic Booth Setup',
    category: 'Sequin'
  },
  {
    id: 2,
    src: '/images/services/photo-booth-gif-jakarta/photo-booth-o-setup-jakarta-5.webp',
    alt: 'Peacock Sequin Backdrop Setup',
    title: 'Peacock Sequin Setup',
    category: 'Sequin'
  },
  {
    id: 3,
    src: '/images/services/photo-booth-gif-jakarta/photo-booth-o-setup-jakarta-6.webp',
    alt: 'Pink Sequin Backdrop Setup',
    title: 'Pink Sequin Setup',
    category: 'Sequin'
  },
  {
    id: 10,
    src: '/images/services/backdrop-photo-booth-jakarta/backdrop-black-gold-sequin-small-jakarta.webp',
    alt: 'Black Gold Sequin Small Setup',
    title: 'Black Gold Small Setup',
    category: 'Small'
  },
  {
    id: 11,
    src: '/images/services/photo-booth-gif-jakarta/sewa-photo-booth-dslr-setup-jakarta-6.webp',
    alt: 'White Sequin Small Setup',
    title: 'White Small Setup',
    category: 'Small'
  }
]

interface BackdropGallerySliderProps {
  images?: GalleryImage[]
}

export default function BackdropGallerySlider({ images = DEFAULT_GALLERY_IMAGES }: BackdropGallerySliderProps) {
  // Use provided images or default
  const GALLERY_IMAGES = images
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === GALLERY_IMAGES.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? GALLERY_IMAGES.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === GALLERY_IMAGES.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden">
        {/* Main Image Display */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={GALLERY_IMAGES[currentIndex].src}
            alt={GALLERY_IMAGES[currentIndex].alt}
            fill
            className="object-contain transition-all duration-700 ease-in-out"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                {GALLERY_IMAGES[currentIndex].category}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {GALLERY_IMAGES[currentIndex].title}
            </h3>
            <p className="text-gray-200 text-lg max-w-2xl">
              Professional backdrop setup for your event
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Expand Button */}
          <button
            onClick={() => setSelectedImage(GALLERY_IMAGES[currentIndex])}
            className="absolute top-4 right-4 bg-white/10 backdrop-blur-lg text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Expand image"
          >
            <Expand className="w-5 h-5" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={toggleAutoPlay}
            className="absolute top-4 left-4 bg-white/10 backdrop-blur-lg text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-lg text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="p-6 bg-gray-900/50">
          <div className="flex justify-center gap-2 overflow-x-auto scrollbar-hide">
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`flex-none relative aspect-square w-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-gray-900'
                    : 'opacity-60 hover:opacity-100'
                }`}
                aria-label={`Go to ${image.title}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pb-6">
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-purple-400 to-pink-400 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / GALLERY_IMAGES.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white p-3 hover:text-purple-400 transition-colors bg-black/50 rounded-full"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-w-5xl max-h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-purple-500 text-white text-sm font-medium rounded-full">
                  {selectedImage.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

