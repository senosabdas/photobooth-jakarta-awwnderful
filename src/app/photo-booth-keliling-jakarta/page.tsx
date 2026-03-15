'use client'

import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Link from 'next/link'
import ProductCarousel from '@/components/ProductCarousel'
import OutputGrid from '@/components/OutputGrid'
import ServiceGrid from '@/components/ServiceGrid'
import ArtikelLainnya from '@/components/ArtikelLainnya'
import HasilOutput from '@/components/HasilOutput'
import Image from 'next/image'
import { ChevronDown, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Play, Pause, Expand } from 'lucide-react'
import { useState, useEffect } from 'react'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function Page() {
  const carousel = [
    { type: 'video', src: '/images/lookbook-photo-booth-jakarta/roaming-obooth-5.mp4', alt: 'Roaming sample 1' },
    { type: 'video', src: '/images/lookbook-photo-booth-jakarta/roaming-obooth-3.mp4', alt: 'Roaming sample 2' },
  ] as const

  const faqs = [
    {
      q: 'Berapa harga sewa photobooth keliling Jakarta?',
      a: 'Harga mulai dari Rp5 juta untuk durasi 4–6 jam. Sudah termasuk fotografer mobile, editing, dan pengiriman hasil digital. Untuk kebutuhan spesial atau event besar, kami bisa siapkan paket custom.'
    },
    {
      q: 'Berapa banyak fotografer yang datang?',
      a: 'Untuk event medium (50–200 orang), kami siapkan 2 fotografer. Untuk event besar atau venue yang sangat luas, kami bisa menambah hingga 3–4 fotografer keliling agar coverage lebih maksimal.'
    },
    {
      q: 'Apakah hasil foto langsung bisa dicetak?',
      a: 'Ya, bisa! Kami bisa membawa printer portable untuk cetak langsung di venue, atau opsi full-digital dengan pengiriman file dalam 5–10 menit via email, WhatsApp, atau scan QR code.'
    },
    {
      q: 'Area mana saja yang bisa dilayani?',
      a: 'Kami melayani seluruh Jakarta dan sekitarnya hingga radius 50 km: Jakarta Pusat, Jakarta Barat, Jakarta Timur, Jakarta Utara, Jakarta Selatan, BSD/Tangerang Selatan, Depok, dan Bekasi.'
    },
  ]

  const GALLERY_IMAGES = [
    // DSLR Roamer Results
    {
      id: 1,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-dslr-roamer-result-1.webp',
      category: 'DSLR Roamer',
      type: 'image',
      alt: 'DSLR Roamer Professional Photography Results'
    },
    {
      id: 2,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-dslr-roamer-result-2.webp',
      category: 'DSLR Roamer',
      type: 'image',
      alt: 'High Quality DSLR Photography Results'
    },
    {
      id: 3,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-dslr-roamer-result-3.webp',
      category: 'DSLR Roamer',
      type: 'image',
      alt: 'Professional Event Photography Results'
    },
    {
      id: 4,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-dslr-roamer-result-4.webp',
      category: 'DSLR Roamer',
      type: 'image',
      alt: 'DSLR Roamer Event Photography'
    },

    // DSLR Roamer Setups
    {
      id: 5,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-dslr-roamer-1.webp',
      category: 'Setup',
      type: 'image',
      alt: 'DSLR Roamer Setup with Professional Equipment'
    },
    {
      id: 6,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-dslr-roamer-2.webp',
      category: 'Setup',
      type: 'image',
      alt: 'Mobile DSLR Photography Setup'
    },
    {
      id: 7,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-dslr-roamer-3.webp',
      category: 'Setup',
      type: 'image',
      alt: 'Professional DSLR Roamer Equipment'
    },
    {
      id: 8,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-dslroamer.webp',
      category: 'Setup',
      type: 'image',
      alt: 'DSLR Roamer Complete Setup'
    },

    // Multi-Camera Setups
    {
      id: 9,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-roaming-multicamera-1.webp',
      category: 'Multi Camera',
      type: 'image',
      alt: 'Multi-Camera Roaming Photography Setup'
    },
    {
      id: 10,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-roaming-multicamera-2.webp',
      category: 'Multi Camera',
      type: 'image',
      alt: 'Advanced Multi-Camera System'
    },
    {
      id: 11,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-roaming-multicamera-3.webp',
      category: 'Multi Camera',
      type: 'image',
      alt: 'Multi-Angle Photography Setup'
    },
    {
      id: 12,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-roaming-multicamera-4.webp',
      category: 'Multi Camera',
      type: 'image',
      alt: 'Professional Multi-Camera Coverage'
    },

    // Ring Roamer
    {
      id: 13,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-ring-roamer-1.webp',
      category: 'Ring Roamer',
      type: 'image',
      alt: 'Ring Light Roamer Setup'
    },
    {
      id: 14,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-ring-roamer-2.webp',
      category: 'Ring Roamer',
      type: 'image',
      alt: 'Professional Ring Light Photography'
    },
    {
      id: 15,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-ring-roamer-3.webp',
      category: 'Ring Roamer',
      type: 'image',
      alt: 'Ring Roamer Mobile Setup'
    },
    {
      id: 16,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-ring-roamer-4.webp',
      category: 'Ring Roamer',
      type: 'image',
      alt: 'Ring Light Professional Photography'
    },
    {
      id: 17,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-ringroamer.webp',
      category: 'Ring Roamer',
      type: 'image',
      alt: 'Ring Roamer Complete System'
    },

    // Print and Sharing Solutions
    {
      id: 18,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-photo-roamer-sharing-kiosk-printer-1.webp',
      category: 'Print Solutions',
      type: 'image',
      alt: 'Photo Roamer with Sharing Kiosk and Printer'
    },
    {
      id: 19,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-photo-roamer-sharing-kiosk-printer-2.webp',
      category: 'Print Solutions',
      type: 'image',
      alt: 'Complete Print and Sharing Solution'
    },
    {
      id: 20,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-print-out-booth.webp',
      category: 'Print Solutions',
      type: 'image',
      alt: 'Mobile Print Booth Setup'
    },
    {
      id: 21,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-printout-result.webp',
      category: 'Print Solutions',
      type: 'image',
      alt: 'High Quality Print Results'
    },

    // Additional Professional Setups
    {
      id: 22,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-multiroam.webp',
      category: 'Professional',
      type: 'image',
      alt: 'Multiple Roamer Setup'
    },
    {
      id: 23,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-photo-with-desc.png',
      category: 'Professional',
      type: 'image',
      alt: 'Professional Photography with Description'
    },
    {
      id: 24,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-img-20200310-190723.webp',
      category: 'Professional',
      type: 'image',
      alt: 'Professional Event Photography'
    },
    {
      id: 25,
      src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-img-20200310-190744.webp',
      category: 'Professional',
      type: 'image',
      alt: 'High Quality Event Coverage'
    }
  ]

  // Gallery slider state
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedImage, setSelectedImage] = useState<any | null>(null)

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const ctaHref = '#contact'

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
              src="/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-ring-roamer-2.webp"
              alt="Photobooth Keliling Jakarta"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                Photobooth Keliling Jakarta (Roaming Photo Booth)
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">
                Tim kami berkeliling mendatangi tamu—hasil langsung dikirim atau dicetak, cocok untuk event besar di seluruh Jakarta.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-4 mb-10 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href={ctaHref}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
            >
              Cek Jadwal & Harga
            </Link>
            <a
              href="https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20mau%20tanya%20photobooth%20keliling%20Jakarta."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
            >
              Chat WhatsApp
            </a>
          </div>

          {/* Description Section */}
          <div className="prose prose-invert max-w-none mb-12">
            <h2>Photobooth Keliling Jakarta untuk Event Besar & Venue Luas</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong>Photobooth keliling Jakarta</strong> adalah solusi sempurna untuk event dengan crowd besar dan venue luas.
              Tim fotografer profesional kami akan berkeliling mendatangi setiap tamu, memastikan tidak ada yang terlewat dalam
              momen spesial Anda.
            </p>

            <h2>Roaming Photobooth untuk Berbagai Jenis Acara</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Cocok untuk berbagai jenis acara: ulang tahun, gathering perusahaan, wedding reception, product launching,
              sampai event outdoor dan festival. Dengan setup yang fleksibel dan mobile, kami bisa menjangkau seluruh area
              Jakarta dan sekitarnya tanpa mengganggu alur acara.
            </p>

            <h2>Brandable & Siap Share ke Sosial Media</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong>Fully brandable</strong> dengan custom frame, overlay, dan backdrop sesuai tema acara Anda.
              <strong> Share instan</strong> via email, WhatsApp, atau scan QR code langsung dari venue.
              Hasil foto bisa langsung dikirim dalam 5–10 menit setelah pengambilan, sehingga tamu bisa langsung share
              ke sosial media.
            </p>

            <h2>Pilihan Paket Roaming Photobooth Jakarta</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Kami menyediakan berbagai pilihan <strong>roaming photobooth</strong> sesuai kebutuhan Anda:
              <strong> Roaming DSLR</strong> untuk hasil foto profesional berkualitas tinggi dengan setup minimal,
              <strong> Ring Roaming</strong> menggunakan iPad dan ringlight untuk hasil foto yang natural dan Instagram-worthy,
              serta <strong>Multicamera Roaming</strong> untuk coverage area yang lebih luas dengan multiple angle capture.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white/5 border border-gray-700 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 text-lg">
                  🎯 Keunggulan Photobooth Keliling
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Fotografer mobile mendatangi tamu</li>
                  <li>• Coverage area lebih luas</li>
                  <li>• Hasil langsung dikirim/dicetak</li>
                  <li>• Tidak terbatas jumlah tamu</li>
                  <li>• Lebih interaktif dan personal</li>
                  <li>• Fully brandable sesuai tema</li>
                  <li>• Share instan ke sosial media</li>
                  <li>• Pilihan Roaming DSLR berkualitas tinggi</li>
                  <li>• Ring Roaming dengan iPad &amp; ringlight</li>
                  <li>• Multicamera Roaming untuk coverage maksimal</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-gray-700 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 text-lg">📍 Area Layanan</h3>
                <p className="text-gray-300 mb-3">
                  Melayani seluruh wilayah Jakarta dan sekitarnya dengan radius maksimal 50 km dari pusat Jakarta.
                </p>
                <p className="text-sm text-gray-400">
                  Jakarta Pusat, Jakarta Barat, Jakarta Timur, Jakarta Utara, Jakarta Selatan, BSD/Tangerang Selatan, Depok, Bekasi.
                </p>
              </div>
            </div>
          </div>

          {/* Internal links to related services */}
          <div className="mb-12 text-gray-300 text-center">
            <p className="mb-3">
              Butuh jenis photobooth lain selain photobooth keliling Jakarta?
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Link
                href="/photo-booth-360-jakarta"
                className="px-3 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20"
              >
                Photo Booth 360 Jakarta
              </Link>
              <Link
                href="/sewa-photo-booth-jakarta"
                className="px-3 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20"
              >
                Sewa Photo Booth Jakarta
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image
                  src="/icon/photo-camera-outline.svg"
                  alt="Output Lengkap Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-white font-semibold mb-2">Output Lengkap</h3>
              <p className="text-gray-300">
                Cetak instan, GIF/boomerang, glam filter, hingga greenscreen &amp; intro–outro overlay.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image
                  src="/icon/branding-icon.svg"
                  alt="Custom Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-white font-semibold mb-2">Bisa di-custom</h3>
              <p className="text-gray-300">
                Frame/overlay sesuai brand, backdrop pilihan, props tematik, dan galeri digital.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image
                  src="/icon/victory.svg"
                  alt="Professional Team Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-white font-semibold mb-2">Tim Profesional</h3>
              <p className="text-gray-300">
                Tim kami sudah berpengalaman dalam melayani berbagai acara di Jakarta dan sekitarnya.
              </p>
            </div>

            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image
                  src="/icon/delivery-truck.svg"
                  alt="Free Transport Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-white font-semibold mb-2">Free transport</h3>
              <p className="text-gray-300">
                Free transport area JABODETABEK / radius ±25 km dari posisi kami. Di luar itu tetap bisa, tinggal disesuaikan.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image
                  src="/icon/print-copy.svg"
                  alt="Unlimited Print Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-white font-semibold mb-2">Unlimited Print</h3>
              <p className="text-gray-300">
                Tersedia opsi unlimited print jika Anda ingin tamu membawa pulang hasil cetak fisik.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image
                  src="/icon/megaphone.svg"
                  alt="Share to Email Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Share ke Email, WhatsApp atau Scan QR
              </h3>
              <p className="text-gray-300">
                Hasil foto bisa langsung di-share ke email, WhatsApp, atau scan QR code dari sharing station.
              </p>
            </div>
          </div>

          <HasilOutput title="Hasil Output Photobooth Keliling" />

          {/* Image Gallery Slider */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Galeri Photobooth Keliling</h2>

            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden">
              {/* Main Image Display */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={GALLERY_IMAGES[currentIndex].src}
                  alt="Photobooth Keliling Gallery Image"
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
                      isPlaying ? 'bg-purple-500/80 text-white' : 'bg-white/10 text-white hover:bg-white/20'
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
                    style={{ width: `${((currentIndex + 1) / GALLERY_IMAGES.length) * 100}%` }}
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
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="relative max-w-5xl max-h-full">
                  <Image
                    src={selectedImage.src}
                    alt="Photobooth Keliling Gallery Image"
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

          {/* Related articles & services */}
          <ArtikelLainnya serviceType="keliling" />
          <ServiceGrid />

          {/* FAQ Section */}
          <section className="relative py-16 mb-16">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-purple-900/10 to-gray-800 -z-10 rounded-2xl"></div>

            <div className="relative z-10 px-6 py-8">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  FAQ Photobooth Keliling Jakarta
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Pertanyaan umum tentang layanan photobooth keliling mobile di Jakarta
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
                          onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
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
                                openFaqIndex === index ? 'text-white' : 'text-gray-200 group-hover:text-white'
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
                            openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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

          <div id="contact" className="mb-8">
            <BookingForm />
          </div>
        </section>
      </main>

      <WhatsAppWidget />
      <Footer />

      {/* Service Schema */}
      <Script
        id="schema-keliling"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Photobooth Keliling Jakarta',
            areaServed: 'Jakarta',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Awwnderful Photo Booth',
              telephone: '+6287772566170',
              url: 'https://awwnderful.com/photo-booth-keliling-jakarta'
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="schema-keliling-faq"
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
