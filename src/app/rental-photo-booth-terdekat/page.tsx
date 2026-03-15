'use client'

import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Link from 'next/link'
import { LanguageProvider } from '@/contexts/LanguageContext'
import ServiceGrid from '@/components/ServiceGrid'
import Image from 'next/image'
import { ChevronDown, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Play, Pause, Expand } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Page() {
  const areas = [
    'Jakarta Pusat',
    'Jakarta Barat',
    'Jakarta Timur',
    'Jakarta Utara',
    'Jakarta Selatan',
    'BSD / Tangerang Selatan',
    'Depok',
    'Bekasi'
  ]

  const faqs = [
    {
      q: 'Apakah bisa ke semua area Jakarta?',
      a: 'Ya. Kami mobile ke semua wilayah Jakarta dan sekitar (BSD, Depok, Bekasi). Tinggal kirim lokasi venue kamu, tim kami akan cek ketersediaan jadwal dan estimasi biaya transport jika diperlukan.'
    },
    {
      q: 'Apakah ada biaya transport?',
      a: 'Untuk area Jakarta biasanya sudah termasuk dalam paket, sedangkan untuk BSD/Tangerang Selatan, Depok, dan Bekasi bisa ada penyesuaian tergantung jarak dan durasi acara. Semua biaya dijelaskan di awal secara transparan.'
    },
    {
      q: 'Butuh persiapan apa di venue?',
      a: 'Area sekitar ±3x3 m dan daya listrik sekitar 1000–1500W. Kalau kamu ragu, kirim foto atau video area ke kami—tim Awwnderful akan bantu cek kelayakan spot terbaik untuk setup photobooth di venue kamu.'
    }
  ]

  const GALLERY_IMAGES = [
    {
      id: 1,
      src: '/images/services/photo-booth-gif-jakarta/sewa-photo-booth-dslr-setup-jakarta-6.webp',
      category: 'Booth Setup',
      type: 'image'
    },
    {
      id: 2,
      src: '/images/services/boothbox-photo-booth-jakarta/boothbox-photo-booth-jakarta-custom-photobox-setup-1.webp',
      category: 'Custom Booth',
      type: 'image'
    },
    {
      id: 3,
      src: '/images/services/photo-booth-gif-jakarta/sewa-photo-booth-dslr-setup-jakarta-4.webp',
      category: 'Event Setup',
      type: 'image'
    },
    {
      id: 4,
      src: '/images/services/multicamera-photo-booth-jakarta/multicamera-photo-booth-jakarta-awwnderful-multicamera-setup-4.webp',
      category: 'Mobile Setup',
      type: 'image'
    },
    {
      id: 5,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-roaming-multicamera-3.webp',
      category: 'Roaming Booth',
      type: 'image'
    },
    {
      id: 8,
      src: '/images/services/hashtag-printer-jakarta/hashtag-printer-setup-jakarta-2.webp',
      category: 'Hashtag Printer',
      type: 'image'
    },
    {
      id: 9,
      src: '/images/services/hashtag-printer-jakarta/hashtag-printer-setup-jakarta-1.webp',
      category: 'Branded Setup',
      type: 'image'
    },
    {
      id: 12,
      src: '/images/services/video-booth-jakarta/video-booth-jakarta-gallery-1.webp',
      category: 'Video Booth',
      type: 'image'
    },
    {
      id: 13,
      src: '/images/services/photo-booth-360-video-jakarta/photo-booth-360-video-jakarta-1.webp',
      category: '360 Video',
      type: 'image'
    },
    {
      id: 14,
      src: '/images/services/backdrop-photo-booth-jakarta/backdrop-photo-booth-jakarta-greenscreen-backdrop.webp',
      category: 'Green Screen',
      type: 'image'
    },
    {
      id: 15,
      src: '/images/services/backdrop-photo-booth-jakarta/backdrop-pink-sequin-large-jakarta.webp',
      category: 'Sequin Backdrop',
      type: 'image'
    }
  ]

  // Gallery slider state
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedImage, setSelectedImage] = useState<any | null>(null)

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

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
            <Image
              src="/images/services/boothbox-photo-booth-jakarta/boothbox-photo-booth-jakarta-photobox-setup-1.webp"
              alt="Rental Photo Booth Terdekat"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                Rental Photo Booth Terdekat
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">
                Segala jenis photobooth kami siap datang ke area kamu di Jakarta dan sekitarnya.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
            >
              Cek Ketersediaan
            </Link>
            <a
              href="https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20mau%20sewa%20photo%20booth%20terdekat."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
            >
              Chat WhatsApp
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
            <Link
              href="/sewa-photo-booth-jakarta"
              className="px-3 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20"
            >
              Sewa Photo Booth Jakarta
            </Link>
            <Link
              href="/photo-booth-wedding-jakarta"
              className="px-3 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20"
            >
              Wedding
            </Link>
            <Link
              href="/photo-booth-360-jakarta"
              className="px-3 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20"
            >
              360 Booth
            </Link>
            <Link
              href="/photo-booth-keliling-jakarta"
              className="px-3 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20"
            >
              Roaming / Keliling
            </Link>
          </div>

          {/* Description Section */}
          <div className="prose prose-invert max-w-none mb-12 mt-10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Layanan <strong>rental photobooth terdekat di Jakarta</strong> dari Awwnderful hadir
              untuk kamu yang butuh photobooth berkualitas tanpa ribet. Tim profesional kami datang
              langsung ke rumah, kantor, mall, atau venue event kamu—jadi kamu tinggal fokus ke acaranya.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Dengan pengalaman lebih dari 5 tahun, kami telah melayani berbagai acara mulai dari ulang
              tahun, gathering perusahaan, wedding, hingga event komersial dan brand activation. Setiap
              paket sudah termasuk operator berpengalaman, setup profesional, dan dukungan teknis selama
              acara berlangsung.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Kami punya beragam jasa & servis untuk kebutuhan acara kamu. Mulai dari photobooth klasik,
              <strong> sewa photobooth keliling (roaming booth)</strong>, 360 Video Booth, hingga hashtag
              printer dan video booth kreatif lainnya yang bisa kamu pilih untuk meramaikan acara.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Kalau kamu sedang Googling <strong>“rental photobooth terdekat”</strong> atau
              <strong> “sewa photobooth dekat sini”</strong>, Awwnderful bisa jadi partner yang pas:
              fleksibel, mudah diajak diskusi konsep, dan siap bantu kamu bikin experience yang berkesan
              untuk tamu.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white/5 border border-gray-700 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 text-lg">
                  ✅ Keunggulan Layanan Kami
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Setup cepat dalam 30–45 menit</li>
                  <li>• Operator profesional dan ramah</li>
                  <li>• Backup peralatan lengkap</li>
                  <li>• Format output bisa dicetak dan/atau digital</li>
                  <li>• Hasil foto bisa langsung diunduh tamu</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-gray-700 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 text-lg">🎯 Area Pelayanan</h3>
                <p className="text-gray-300 mb-3">
                  Kami melayani seluruh wilayah Jakarta dan sekitarnya dengan radius maksimal ±50 km
                  dari pusat Jakarta.
                </p>
                <p className="text-sm text-gray-400">
                  Biaya transport umumnya sudah termasuk untuk area Jakarta. Untuk BSD/Tangerang Selatan,
                  Depok, dan Bekasi, silakan konsultasikan untuk estimasi biaya tambahan yang paling efisien.
                </p>
              </div>
            </div>
          </div>

          {/* Area chips */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {areas.map((a) => (
              <div
                key={a}
                className="bg-white/5 border border-gray-700 rounded-xl p-4 text-center text-gray-200"
              >
                {a}
              </div>
            ))}
          </div>

          {/* Image Gallery Slider */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Galeri Photo Booth Mobile</h2>

            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden">
              {/* Main Image Display */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={GALLERY_IMAGES[currentIndex].src}
                  alt="Photo Booth Mobile Gallery Image"
                  fill
                  className="object-cover transition-all duration-700 ease-in-out"
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
                  <Expand className="w-6 h-6" />
                </button>

                {/* Auto-play Controls */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <button
                    onClick={toggleAutoPlay}
                    className={`p-3 rounded-full backdrop-blur-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                      isPlaying
                        ? 'bg-purple-500/80 text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="p-6 bg-gray-900/50">
                <div className="flex justify-center gap-1 overflow-x-auto scrollbar-hide pb-2">
                  {GALLERY_IMAGES.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => goToSlide(index)}
                      className={`flex-none relative aspect-square w-12 sm:w-14 rounded-md overflow-hidden transition-all duration-300 ${
                        index === currentIndex
                          ? 'ring-2 ring-purple-400 ring-offset-1 ring-offset-gray-900 scale-110'
                          : 'opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                      aria-label={`Go to ${image.category}`}
                    >
                      <Image
                        src={image.src}
                        alt={`${image.category} thumbnail`}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                      {index === currentIndex && (
                        <div className="absolute inset-0 bg-purple-500/30 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Thumbnail Counter */}
                <div className="text-center mt-3">
                  <span className="text-xs text-gray-400">
                    {currentIndex + 1} / {GALLERY_IMAGES.length}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="px-6 pb-6">
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-1 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentIndex + 1) / GALLERY_IMAGES.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Full Screen Modal */}
            {selectedImage && (
              <div
                className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white p-3 hover:text-purple-400 transition-colors bg-black/50 rounded-full"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="relative max-w-5xl max-h-full">
                  <Image
                    src={selectedImage.src}
                    alt="Photo Booth Mobile Gallery Image"
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
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Services Section */}
          <ServiceGrid />

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
                  FAQ Rental Photo Booth Terdekat
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Pertanyaan umum tentang layanan rental photobooth mobile di Jakarta
                </p>
              </div>

              {/* FAQ Items */}
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="group relative">
                    <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
                      {/* Animated Border Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl transition-opacity duration-300 ${
                          openFaqIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                        }`}
                      ></div>

                      <div className="relative z-10">
                        <button
                          onClick={() =>
                            setOpenFaqIndex(openFaqIndex === index ? null : index)
                          }
                          className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            {/* Question Number */}
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                openFaqIndex === index
                                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                  : 'bg-gray-700 text-gray-300 group-hover:bg-purple-500/20'
                              }`}
                            >
                              {index + 1}
                            </div>
                            <span
                              className={`font-semibold text-lg transition-all duration-300 ${
                                openFaqIndex === index
                                  ? 'text-white'
                                  : 'text-gray-200 group-hover:text-white'
                              }`}
                            >
                              {faq.q}
                            </span>
                          </div>

                          {/* Animated Icon */}
                          <div
                            className={`relative transition-all duration-300 ${
                              openFaqIndex === index ? 'rotate-180' : 'group-hover:scale-110'
                            }`}
                          >
                            <ChevronDown
                              className={`w-6 h-6 transition-colors duration-300 ${
                                openFaqIndex === index
                                  ? 'text-purple-400'
                                  : 'text-gray-400 group-hover:text-purple-300'
                              }`}
                            />
                            {/* Glow Effect */}
                            <div
                              className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md transition-opacity duration-300 ${
                                openFaqIndex === index ? 'opacity-100' : 'opacity-0'
                              }`}
                            ></div>
                          </div>
                        </button>

                        {/* Expandable Content with Animation */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            openFaqIndex === index
                              ? 'max-h-96 opacity-100'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
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
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-300 ${
                          openFaqIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      ></div>
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

          {/* Contact / Booking */}
          <div id="contact" className="mb-8">
            <BookingForm />
          </div>
        </section>
      </main>

      <WhatsAppWidget />
      <Footer />

      {/* Schema Service */}
      <Script
        id="schema-terdekat"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Rental Photo Booth Terdekat',
            areaServed: areas,
            provider: {
              '@type': 'LocalBusiness',
              name: 'Awwnderful Photobooth',
              telephone: '+6287772566170',
              url: 'https://awwnderful.com/rental-photo-booth-terdekat'
            }
          })
        }}
      />
      {/* Schema FAQ */}
      <Script
        id="schema-faq-rental-terdekat"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
              }
            }))
          })
        }}
      />
    </LanguageProvider>
  )
}
