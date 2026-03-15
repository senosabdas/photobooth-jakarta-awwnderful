'use client'

import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Link from 'next/link'
import ProductCarousel from '@/components/ProductCarousel'
import OutputGrid from '@/components/OutputGrid'
import HasilOutput from '@/components/HasilOutput'
import ServiceGrid from '@/components/ServiceGrid'
import ArtikelLainnya from '@/components/ArtikelLainnya'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Image from 'next/image'
import { ChevronDown, ArrowLeft, ChevronLeft, ChevronRight, Play, Pause, Expand } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedImage, setSelectedImage] = useState<any | null>(null)

  const bullets = ['Overlay brand & intro–outro', 'Share instan via QR', 'Data capture opsional', 'Tim Profesional']

  const GALLERY_IMAGES = [
   

    { src: '/images/services/video-booth-jakarta/video-booth-jakarta-gallery-2.webp', category: 'Product Launch', type: 'image' },
    { src: '/images/lookbook-photo-booth-jakarta/fxbooth-photo-lightpainting-2.webp', category: 'Product Launch', type: 'image' },
    { src: '/images/360-video-booth-service-grid-jakarta.webp', category: '360° Booth', type: 'image' },
    { src: '/images/services/video-booth-jakarta/video-booth-jakarta-videobooth-setup-1.webp', category: 'Ring Light Setup', type: 'image' },
    { src: '/images/services/multicamera-photo-booth-jakarta/multicamera-photo-booth-jakarta-awwnderful-multicamera-setup-4.webp', category: 'Multi Camera', type: 'image' },
    { src: '/images/photobooth-event.avif', category: 'Event Booth', type: 'image' },
    { src: '/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-4.webp', category: 'Corporate Setup', type: 'image' }
  ]


  // Gallery functions
  const nextSlide = () => {
    setCurrentIndex(currentIndex === GALLERY_IMAGES.length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? GALLERY_IMAGES.length - 1 : currentIndex - 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentIndex])

  const faqs = [
    {
      q: 'Apa KPI yang bisa dicapai dengan photo booth event?',
      a: 'Traffic ke booth, jumlah share sosial media, engagement rate, database leads (opsional), brand awareness, dan interaksi langsung dengan audience.'
    },
    {
      q: 'Apakah bisa integrasi dengan brand guidelines perusahaan?',
      a: 'Tentu! Kami bisa menyesuaikan desain frame, overlay, intro-outro video, dan semua materi visual sesuai dengan brand guidelines Anda.'
    },
    {
      q: 'Berapa lama setup dan packing untuk event?',
      a: 'Setup memakan waktu 45-60 menit tergantung kompleksitas. Packing 20-30 menit. Kami pastikan tidak mengganggu timeline event Anda.'
    },
    {
      q: 'Apakah termasuk capture data peserta?',
      a: 'Opsional. Bisa include database collection dengan form digital untuk capture email, nomor telepon, atau informasi lainnya dari peserta.'
    },
    {
      q: 'Bagaimana sistem backup jika ada masalah teknis?',
      a: 'Kami siapkan backup equipment dan power bank. Tim teknisi siaga selama event untuk antisipasi masalah teknis.'
    },
    {
      q: 'Apakah bisa customize berdasarkan target audience?',
      a: 'Ya! Kami sesuaikan tema, musik, filter, dan interaksi berdasarkan demografi audience event Anda.'
    }
  ]

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
            <Image src="/images/services/hashtag-printer-jakarta-hero.webp" alt="Photo Booth Event Jakarta" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Photo Booth Event Jakarta</h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">Solusi aktivasi yang engaging untuk corporate event, pameran, hingga festival.</p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">Diskusikan Event</Link>
              <a href="https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20saya%20mau%20photo%20booth%20untuk%20event%20Jakarta." target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">Chat WhatsApp</a>
            </div>
          </div>

          {/* Enhanced Description Section */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong>Photo Booth Event Jakarta</strong> adalah solusi aktivasi brand yang powerful untuk berbagai jenis acara perusahaan.
              Dari corporate gathering hingga product launching, kami hadir dengan teknologi terkini dan kreativitas maksimal.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Dengan kombinasi <strong>GIF/boomerang</strong>, <strong>overlay branding</strong>, dan <strong>share instan</strong>,
              photo booth event kami mampu meningkatkan engagement audience hingga 300% dan menciptakan viral content yang powerful untuk brand Anda.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong>Fully Customizable</strong> sesuai brand guidelines, <strong>Data Capture</strong> untuk lead generation,
              dan <strong>Real-time Analytics</strong> untuk mengukur efektivitas kampanye Anda. Perfect untuk event corporate, pameran, dan brand activation!
            </p>
          </div>

          {/* Enhanced Feature Bullets */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Keunggulan Photo Booth Event</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bullets.map((bullet, index) => (
                <div key={bullet} className="bg-white/5 border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-colors">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl">{['🎨', '📱', '📊', '⚡'][index]}</span>
                    </div>
                  </div>
                  <p className="text-gray-200 font-medium">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

        

          {/* Photobooth Experiences Grid */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Pengalaman Photobooth yang Sesuai untuk Event</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Berbagai style dan teknologi photobooth yang dapat disesuaikan dengan tema dan target audience event Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lightpainting Style */}
              <div className="group relative bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-lg rounded-2xl border border-purple-500/20 overflow-hidden hover:border-purple-400/40 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/services/lightpainting-photo-booth-jakarta/lightpainting-photo-booth-jakarta-lightpainting-result-2.webp"
                    alt="Lightpainting Style Photobooth"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Lightpainting Style</h3>
                    <p className="text-gray-200 text-sm">Efek cahaya kreatif untuk event seni dan kreatif</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Artistic
                  </div>
                </div>
              </div>

              {/* Virtual Photobooth */}
              <div className="group relative bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-lg rounded-2xl border border-blue-500/20 overflow-hidden hover:border-blue-400/40 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/services/virtual-photo-booth-jakarta/virtual-photo-booth-jakarta-virtualbooth-setup-1.png"
                    alt="Virtual Photobooth Experience"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Virtual Photobooth</h3>
                    <p className="text-gray-200 text-sm">Photobooth virtual untuk acara online</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Digital
                  </div>
                </div>
              </div>

              {/* 360 Video Booth */}
              <div className="group relative bg-gradient-to-br from-green-600/10 to-emerald-600/10 backdrop-blur-lg rounded-2xl border border-green-500/20 overflow-hidden hover:border-green-400/40 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/services/photo-booth-360-video-jakarta/photo-booth-360-video-jakarta-1.webp"
                    alt="360 Video Booth Experience"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">360° Video Booth</h3>
                    <p className="text-gray-200 text-sm">Rekaman video 360 derajat untuk pengalaman immersive</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Immersive
                  </div>
                </div>
              </div>

              {/* GIF & Boomerang */}
              <div className="group relative bg-gradient-to-br from-orange-600/10 to-red-600/10 backdrop-blur-lg rounded-2xl border border-orange-500/20 overflow-hidden hover:border-orange-400/40 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/services/hashtag-printer-jakarta/hashtag-printer-jakarta-gallery-10.webp"
                    alt="GIF Boomerang Photobooth"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Hashtag Printer</h3>
                    <p className="text-gray-200 text-sm">Ajak customer untuk upload foto mereka ke social media</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Viral
                  </div>
                </div>
              </div>

              {/* Corporate Branding */}
              <div className="group relative bg-gradient-to-br from-indigo-600/10 to-purple-600/10 backdrop-blur-lg rounded-2xl border border-indigo-500/20 overflow-hidden hover:border-indigo-400/40 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/services/ai-photo-booth-jakarta/ai-photo-booth-jakarta-ai-mini-figure-toy.png"
                    alt="Corporate Branding Photobooth"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">AI Photobooth</h3>
                    <p className="text-gray-200 text-sm">AI Kekinian untuk event mu</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-indigo-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Corporate
                  </div>
                </div>
              </div>

              {/* Video Booth */}
              <div className="group relative bg-gradient-to-br from-red-600/10 to-pink-600/10 backdrop-blur-lg rounded-2xl border border-red-500/20 overflow-hidden hover:border-red-400/40 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <video
                    src="/images/services/video-booth-jakarta/video-booth-jakarta-awwnderful-bwa-arabian-night-2.mp4"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    muted
                    loop
                    autoPlay
                    playsInline
                    poster="/images/services/video-booth-jakarta/video-booth-jakarta-gallery-1.webp"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Video Booth</h3>
                    <p className="text-gray-200 text-sm">Video unik untuk event bisa pakai effect lucu & unik yang berkesan</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Professional
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Setiap style dapat dikustomisasi sesuai tema event, target audience, dan budget Anda.
                Diskusikan kebutuhan spesifik event Anda dengan tim kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                  Konsultasi Style
                </Link>
                <a
                  href="https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20saya%20mau%20konsultasi%20style%20photobooth%20untuk%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </section>

           {/* Hasil Output Section */}
           <HasilOutput title="Hasil Output Photo Booth Event" />

        
          {/* Image Gallery Slider */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Galeri Photo Booth Event</h2>

            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden">
              {/* Main Image Display */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={GALLERY_IMAGES[currentIndex].src}
                  alt={GALLERY_IMAGES[currentIndex].category}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Category Label */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {GALLERY_IMAGES[currentIndex].category}
                </div>

                {/* Controls */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    onClick={toggleAutoPlay}
                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setSelectedImage(GALLERY_IMAGES[currentIndex])}
                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Expand className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="p-6">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {GALLERY_IMAGES.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentIndex
                          ? 'border-purple-500 shadow-lg shadow-purple-500/25'
                          : 'border-gray-600 hover:border-purple-400'
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.category}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-4 bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full transition-all duration-500"
                    style={{ width: `${((currentIndex + 1) / GALLERY_IMAGES.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
              <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.category}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedImage.category}
                </div>
              </div>
            </div>
          )}

          {/* Modern FAQ Section */}
          <section className="relative py-16 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Pertanyaan Umum</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Temukan jawaban lengkap tentang photo booth untuk event perusahaan dan brand activation
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

                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden -z-10 rounded-2xl">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pink-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
                    </div>

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
                              <div className="w-16 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <ArtikelLainnya serviceType="event" />
          {/* Services Section */}
          <ServiceGrid />



          <div id="contact" className="mb-8"><BookingForm /></div>
        </section>
      </main>

      <WhatsAppWidget />
      <Footer />

      <Script id="schema-event" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Photo Booth Event Jakarta', areaServed: 'Jakarta', provider: { '@type': 'LocalBusiness', name: 'Awwnderful Photo Booth', telephone: '+6287772566170', url: 'https://awwnderful.com/photo-booth-event-jakarta' } }) }} />
    </LanguageProvider>
  )
}
