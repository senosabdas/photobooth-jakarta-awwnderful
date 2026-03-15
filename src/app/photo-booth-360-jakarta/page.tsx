'use client'

import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import { LanguageProvider } from '@/contexts/LanguageContext'
import LinkedImageGrid from '@/components/LinkedImageGrid'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Play, Pause, Expand } from 'lucide-react'
import { useState, useEffect } from 'react'
import ServiceGrid from '@/components/ServiceGrid'
import ArtikelLainnya from '@/components/ArtikelLainnya'

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedImage, setSelectedImage] = useState<any | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<any | null>(null)
  const faqs = [
    {
      q: 'Apa yang didapat dari paket 360 Video Booth Jakarta?',
      a: 'Paket lengkap meliputi: rig 360 profesional, operator berpengalaman, pencahayaan studio, musik background & intro-outro, template overlay branding, sharing instan via QR code, dan galeri online untuk mengunduh hasil video.'
    },
    {
      q: 'Berapa area yang dibutuhkan untuk setup 360 Video Booth?',
      a: 'Ideal 3–4 meter diameter untuk platform putar + area aman 2 meter di sekitarnya. Kami fleksibel menyesuaikan layout sesuai venue Jakarta yang tersedia, dari ballroom hotel hingga area outdoor.'
    },
    {
      q: 'Untuk event jenis apa 360 Video Booth cocok digunakan?',
      a: 'Sangat cocok untuk brand activation, corporate gathering, prom night, wedding premium, product launching, hingga exhibition. Video 360° memberikan engagement yang tinggi dan hasil yang cinematic.'
    },
    {
      q: 'Apakah bisa custom overlay dan branding sesuai kebutuhan?',
      a: 'Tentu! Kami bisa menyesuaikan semua overlay, intro-outro video, musik background, dan elemen branding sesuai konsep event Anda. Dari logo perusahaan hingga tema spesial.'
    },
    {
      q: 'Berapa kisaran harga sewa 360 Video Booth Jakarta?',
      a: 'Harga mulai dari Rp8 juta – Rp15 juta untuk durasi 4–8 jam. Harga disesuaikan dengan kompleksitas overlay, durasi sewa, dan tingkat kustomisasi. Untuk event full day atau kebutuhan khusus, kami siapkan paket custom.'
    }
  ]

  const GALLERY_IMAGES = [
    {
      id: 1,
      src: '/images/services/photo-booth-360-video-jakarta/photo-booth-360-video-jakarta-7.webp',
      category: '360°',
      type: 'image'
    },
    {
      id: 2,
      src: '/images/360-video-booth-service-grid-jakarta.webp',
      category: 'Design',
      type: 'image'
    },
    {
      id: 3,
      src: '/images/services/photo-booth-360-video-jakarta/photo-booth-360-video-jakarta-8.webp',
      category: 'Event',
      type: 'image'
    },
    {
      id: 4,
      src: '/images/manual-360-booth-jakarta.webp',
      category: 'Setup',
      type: 'image'
    },
    {
      id: 5,
      src: '/images/services/video-booth-jakarta/video-booth-jakarta-gallery-1.webp',
      category: 'Print',
      type: 'image'
    }
  ]

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

  const ctaHref = '#contact'

  // Ensure videos play on component mount
  useEffect(() => {
    const videos = document.querySelectorAll('video[autoPlay]');
    videos.forEach(video => {
      (video as HTMLVideoElement).play().catch(() => {
        // Silently handle autoplay blocking
      });
    });
  }, []);

  return (
    <LanguageProvider>
      <Navigation />
      <main className="pt-24 pb-20">
        {/* Back to Artikel Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Kembali ke Artikel</span>
          </Link>
        </div>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero cover image */}
          <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[2/1] rounded-xl overflow-hidden mb-8">
            <Image src="/images/services/photo-booth-360-video-jakarta/photo-booth-360-video-jakarta-360-video-booth-cover.webp" alt="Photo Booth 360 Jakarta" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Photo Booth 360 Jakarta</h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">Video sinematik 360° yang bikin stand Anda jadi pusat perhatian. Share instan ke sosial media.</p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href={ctaHref} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">Cek Jadwal & Harga</Link>
              <a href="https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20mau%20tanya%20360%20Video%20Booth%20Jakarta." target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">Chat WhatsApp</a>
            </div>
            {/* Related Services */}
            <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
              <Link href="/sewa-photo-booth-jakarta" className="px-3 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20">Sewa Photo Booth Jakarta</Link>
              <Link href="/photo-booth-wedding-jakarta" className="px-3 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20">Photo Booth Wedding Jakarta</Link>
              <Link href="/sewa-photo-booth-jakarta#services" className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20">Learn more services</Link>
            </div>
          </div>

          {/* Long description */}
          <div className="prose prose-invert max-w-none mb-12">
  <p>
    📸 <strong>360 Video Booth </strong> dari <strong>Awwnderful</strong> bikin acara kamu jadi 
    unforgettable! Setiap momen direkam dari semua sudut dengan efek cinematic yang langsung siap 
    upload ke TikTok & Instagram Reels.
  </p>

  <p className="mt-6">
    Layanan <strong>Spin 360 Booth</strong> cocok banget buat berbagai acara: wedding, corporate event, 
    launching brand, sampai pesta ulang tahun. Banyak orang nyebutnya <em>360 Spinner</em>, 
    <em>360 Photo Booth</em>, atau <em>Video Booth 360</em>.
  </p>

  <p className="mt-6">Dengan Awwnderful, kamu akan dapat fasilitas lengkap:</p>
  <p>
    – Platform 360 spinner ukuran 100 cm (muat 3-5 orang)<br/>
    – Kamera iPhone dengan kualitas tinggi<br/>
    – Lighting set (ring light + 4 stick light)<br/>
    – Crew profesional (2 orang)<br/>
    – Free custom branding frame & template overlay<br/>
    – Unlimited video recording (20–30 detik, efek slow motion)<br/>
    – Free soundtrack pilihanmu<br/>
    – Online gallery<br/>
    – TV preview langsung di venue<br/>
    – Sharing station (iPad) via QR Code, AirDrop, WhatsApp, atau email
  </p>

  <p className="mt-6">
    ✨ <strong>Kenapa pilih Awwnderful 360 Booth Jakarta?</strong><br/>
    – Penyedia <strong>sewa 360 photobooth Jakarta</strong> dengan paket kompetitif<br/>
    – Bisa full custom sesuai tema brand maupun wedding<br/>
    – Hasil video siap viral dan bikin event kamu jadi pusat perhatian
  </p>

  <p className="mt-6">
    Yuk, langsung booking sekarang! Biar <strong>Spin 360 Video Booth Awwnderful</strong> bikin 
    event kamu jadi pengalaman tak terlupakan 🚀
  </p>
</div>



          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/branding-icon.svg" alt="Brandable Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Fully Brandable</h3>
              <p className="text-gray-300 text-sm">Custom overlay, intro-outro, musik, dan frame sesuai brand Anda.</p>
            </div>
    
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/megaphone.svg" alt="Share Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Share Instan</h3>
              <p className="text-gray-300 text-sm">Scan QR untuk download dan share langsung ke sosial media.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/victory.svg" alt="Professional Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Tim Profesional</h3>
              <p className="text-gray-300 text-sm">Operator berpengalaman, setup rapi, aman untuk semua peserta.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/delivery-truck.svg" alt="Free Transport Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Free Transport</h3>
              <p className="text-gray-300 text-sm">Gratis pengiriman dalam area Jakarta dan sekitarnya.</p>
            </div>
 
          </div>

          {/* Hasil Output Section */}
          <section className="py-8">
            <h2 className="text-2xl font-bold text-white mb-6">Extra feature 360 Video booth</h2>
            {/* Mobile: horizontal scroll; Desktop: grid */}
            <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory -mx-4 px-4 md:overflow-visible md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-8 md:mx-0 md:px-0">
              {[
          
                {
                  src: '/images/slideshow-illustration.png',
                  alt: 'Photo Slideshow',
                  label: 'Photo Slideshow',
                  href: '/id/services/interactive-display/',
                  title: 'Photo Slideshow',
                  description: 'Transform your captured photos into stunning animated slideshows with smooth transitions.',
                  features: [
                    'Smooth photo transitions',
                    'Professional animations',

                  ]
                },
                {
                  src: '/images/aieffect-illustration.png',
                  alt: 'AI Effect',
                  label: 'AI Effect',
                  href: 'https://awwnderful.smugmug.com/Video-Effect-preview/n-S2P2WX',
                  videoUrl: 'https://photos.smugmug.com/photos/i-2G284Zt/0/LN9sL4SRZCM8cCmqLtX3DHjTkP45MWGfJffHk8b8N/1280/i-2G284Zt-1280.mp4',
                  title: 'AI Effect',
                  description: 'AI Effect for your 360 video.',
                  features: [
                    'Background removal',
                    'Style transfer',
                    'Unique effect',
      
                  ]
                },
                {
                  src: '/images/rgb-light-illustration.png',
                  alt: 'RGB Light',
                  label: 'RGB Light',
                  href: '',
                  title: 'RGB Light',
                  description: 'Give colorful scene in your 360 video setup',
                  features: [
                    'Custom color on request',

                  ]
                },
                {
                  src: '/images/battery-illustration.png',
                  alt: 'Battery operation',
                  label: 'Battery operation',
                  href: '',
                  title: 'Portable Battery Operation',
                  description: 'Complete battery-powered operation for ultimate portability. No need for power outlets - perfect for outdoor events, remote locations, and venues without easy access to electricity.',
                  features: [
                    'Full battery operation',
                    'Extended usage time',
                    'Quick battery swap',
                    'Portable and flexible',
                    'No power outlet required'
                  ]
                },
                {
                  src: '/images/smokebubble-illustration.png',
                  alt: 'Smoke & Bubble machine',
                  label: 'Smoke / Bubble',
                  href: '',
                  title: 'Smoke & Bubbles',
                  description: 'Add more ambient in your 360 video with smoke or bubble machine',
                  features: [
                    'Add more dramatic effect',

                  ]
                },
              ].map((item) => (
                <div key={item.label} className="group flex flex-col items-center text-center shrink-0 snap-center">
                  <div className="focus:outline-none cursor-pointer" onClick={() => setSelectedFeature(item)}>
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-white/5">
                      <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-semibold text-center px-2">Pelajari lebih lanjut</span>
                      </div>
                    </div>
                    <div className="mt-3 text-white font-semibold uppercase text-xs sm:text-sm tracking-wide">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Modal */}
          {selectedFeature && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedFeature(null)}>
              <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{selectedFeature.title}</h3>
                    <button
                      onClick={() => setSelectedFeature(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="aspect-square relative rounded-xl overflow-hidden mb-4">
                        {selectedFeature.videoUrl || selectedFeature.src?.includes('.mp4') || selectedFeature.src?.includes('video') ? (
                          <video
                            src={selectedFeature.videoUrl || selectedFeature.src}
                            controls
                            autoPlay
                            className="w-full h-full object-cover rounded-xl"
                            style={{ maxHeight: '300px' }}
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            src={selectedFeature.src}
                            alt={selectedFeature.alt}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {selectedFeature.description}
                      </p>

                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {selectedFeature.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {selectedFeature.href && (
                        <div className="mt-6">
                          <Link
                            href={selectedFeature.href}
                            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                          >
                            Learn More
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Video Showcase Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Video 360° Showcase</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center px-4 md:px-0">
              {/* Video Block 1 */}
              <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 w-full max-w-xs md:max-w-sm mx-auto">
                <div className="aspect-[3/4] md:aspect-[9/16] relative overflow-hidden">
                  <video
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/images/lookbook-photo-booth-jakarta/videobooth-360-4.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">

                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">Professional 360° Capture</h3>
                    <p className="text-gray-200 text-sm">High-quality video booth experience</p>
                  </div>
                </div>
              </div>

              {/* Video Block 2 */}
              <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 w-full max-w-xs md:max-w-sm mx-auto">
                <div className="aspect-[3/4] md:aspect-[9/16] relative overflow-hidden">
                  <video
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/images/lookbook-photo-booth-jakarta/videobooth-360-2.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">

                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">Interactive Experience</h3>
                    <p className="text-gray-200 text-sm">Engaging booth interactions</p>
                  </div>
                </div>
              </div>

              {/* Video Block 3 */}
              <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 w-full max-w-xs md:max-w-sm mx-auto">
                <div className="aspect-[3/4] md:aspect-[9/16] relative overflow-hidden">
                  <video
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/images/lookbook-photo-booth-jakarta/videobooth-360-5.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">

                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">Event-Ready Setup</h3>
                    <p className="text-gray-200 text-sm">Perfect for any occasion</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Gallery Slider */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Galeri Setup 360 Video Booth</h2>

            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden">
              {/* Main Image Display */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {GALLERY_IMAGES[currentIndex].type === 'video' ? (
                  <video
                    key={currentIndex} // Force re-render when index changes
                    src={GALLERY_IMAGES[currentIndex].src}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={GALLERY_IMAGES[currentIndex].src}
                    alt="360 Video Booth Gallery Image"
                    fill
                    className="object-cover transition-all duration-700 ease-in-out"
                    priority
                  />
                )}

                {/* Video Play Indicator */}
                {GALLERY_IMAGES[currentIndex].type === 'video' && (
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Video
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {GALLERY_IMAGES[currentIndex].category}
                    </span>
                  </div>
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
                      aria-label={`Go to image ${index + 1}`}
                    >
                      {image.type === 'video' ? (
                        <div className="relative w-full h-full">
                          <video
                            src={image.src}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={image.src}
                          alt={`Gallery thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      )}
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
                  {selectedImage.type === 'video' ? (
                    <video
                      src={selectedImage.src}
                      controls
                      autoPlay
                      className="w-full h-auto rounded-lg object-contain"
                      style={{ maxHeight: '80vh' }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={selectedImage.src}
                      alt="360 Video Booth Gallery Image"
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-lg object-contain"
                    />
                  )}

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-purple-500 text-white text-sm font-medium rounded-full">
                        {selectedImage.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Area Layanan</h2>
            <p className="text-gray-300">
              Jakarta Pusat, Jakarta Barat, Jakarta Timur, Jakarta Utara, Jakarta Selatan — juga sekitar: BSD/Tangerang Selatan, Depok, dan Bekasi.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Paket 360 Video Booth</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Paket Basic', points: ['Lighting, Share QR, Operator, Free Transport Jabodetabek'] },
                { name: 'Paket Premium', points: ['Semua paket di basic, + RGB Light, Intro-Outro, AI Effect'] },
                { name: 'Paket Brand Activation', points: ['Semua paket di premium, + Branding Sticker booth, Slideshow'] },
              ].map((p) => (
                <div key={p.name} className="bg-white/5 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">{p.name}</h3>
                  <ul className="text-gray-300 space-y-2">
                    {p.points.map(pt => <li key={pt}>• {pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link href={ctaHref} className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
                Minta Detail & Penawaran
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="relative py-16 mb-16">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-purple-900/10 to-gray-800 -z-10 rounded-2xl"></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10 rounded-2xl">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pink-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 px-6 py-8">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  FAQ 360 Video Booth Jakarta
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Pertanyaan umum tentang layanan 360 Video Booth di Jakarta
                </p>
              </div>

              {/* FAQ Items */}
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="group relative">
                    <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
                      {/* Animated Border Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl transition-opacity duration-300 ${
                        openFaqIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                      }`}></div>

                      <div className="relative z-10">
                        <button
                          onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                          className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            {/* Question Number */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                              openFaqIndex === index
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                : 'bg-gray-700 text-gray-300 group-hover:bg-purple-500/20'
                            }`}>
                              {index + 1}
                            </div>
                            <span className={`font-semibold text-lg transition-all duration-300 ${
                              openFaqIndex === index ? 'text-white' : 'text-gray-200 group-hover:text-white'
                            }`}>
                              {faq.q}
                            </span>
                          </div>

                          {/* Animated Icon */}
                          <div className={`relative transition-all duration-300 ${
                            openFaqIndex === index ? 'rotate-180' : 'group-hover:scale-110'
                          }`}>
                            <ChevronDown
                              className={`w-6 h-6 transition-colors duration-300 ${
                                openFaqIndex === index
                                  ? 'text-purple-400'
                                  : 'text-gray-400 group-hover:text-purple-300'
                              }`}
                            />
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md transition-opacity duration-300 ${
                              openFaqIndex === index ? 'opacity-100' : 'opacity-0'
                            }`}></div>
                          </div>
                        </button>

                        {/* Expandable Content with Animation */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          openFaqIndex === index
                            ? 'max-h-96 opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}>
                          <div className="px-8 pb-6 pt-2">
                            <div className="border-t border-gray-600/50 pt-6">
                              <div className="prose prose-gray max-w-none">
                                <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                                  {faq.a}
                                </p>
                              </div>

                              {/* Decorative Elements */}
                              <div className="mt-6 flex items-center gap-2">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Subtle Shadow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-300 ${
                        openFaqIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* See More FAQ Button */}
              <div className="text-center mt-12">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Lihat FAQ Lainnya
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          <ArtikelLainnya serviceType="360" />

       
          {/* Services Section */}
          <ServiceGrid />

        

          <div id="contact" className="mb-8"><BookingForm /></div>
        </section>
      </main>

      <WhatsAppWidget />
      <Footer />

      <Script id="schema-360-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Photo Booth 360 Jakarta', areaServed: { '@type': 'City', name: 'Jakarta' }, provider: { '@type': 'LocalBusiness', name: 'Awwnderful Photo Booth', telephone: '+6287772566170', url: 'https://awwnderful.com/photo-booth-360-jakarta' } }) }} />
    </LanguageProvider>
  )
}
