'use client'

import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Link from 'next/link'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Image from 'next/image'
import HasilOutput from '@/components/HasilOutput'
import ChooseBackdrop from '@/components/ChooseBackdrop'
import {
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Expand,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import ServiceGrid from '@/components/ServiceGrid'
import ArtikelLainnya from '@/components/ArtikelLainnya'

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Apakah cocok untuk resepsi?',
      a: 'Sangat cocok. Antrian terkelola, alur tamu cepat, hasil instan untuk tamu & pengantin. Setup photobooth wedding kami dirancang agar tidak mengganggu flow acara inti.'
    },
    {
      q: 'Apakah effect glam filter atau B&W sudah tersedia?',
      a: 'Ya, kami sediakan effect glam filter dan black & white yang lembut—cocok untuk tampilan elegan ala studio, sudah include di paket photobooth wedding Jakarta.'
    },
    {
      q: 'Bisa custom desain sesuai tema?',
      a: 'Bisa. Frame, overlay, hingga backdrop bisa disesuaikan dengan konsep wedding Anda—mulai dari rustic, garden, ballroom hotel, hingga tema intimate di rumah.'
    },
    {
      q: 'Durasi & harga?',
      a: 'Umumnya 2–4 jam. Paket populer sekitar Rp2–4 juta tergantung durasi, jumlah print, dan opsi custom (seperti photo strip, guestbook, atau upgrade backdrop premium).'
    },
  ]

  const GALLERY_IMAGES = [
    {
      id: 4,
      src: 'https://photos.smugmug.com/photos/i-zDcht67/0/KFQfpMkhsGZtrt7q5DLqbtcVDvxRtP3NVGHwqh9zs/X5/i-zDcht67-X5.jpg',
      category: 'Setup Photobooth di area garden wedding',
      type: 'image',
    },
    {
      id: 2,
      src: 'https://photos.smugmug.com/photos/i-5GQmJHw/0/NCkZBb8tHkW3mZx9sjkRQzv3m8cCPWhBLMGWw4bfT/X3/i-5GQmJHw-X3.jpg',
      category: 'Photobooth setup at Dinar & Radit Wedding',
      type: 'image',
    },
    {
      id: 3,
      src: 'https://photos.smugmug.com/photos/i-qRp2Th7/0/LDRMvhxBZmXFnDKKbHZ4wFrm2fbKvrfqDmMCf4TXd/X5/i-qRp2Th7-X5.jpg',
      category: 'Menempel hasil photobooth ke photo guestbook',
      type: 'image',
    },
    {
      id: 5,
      src: '/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-9.webp',
      category: 'Hasil photobooth tema floral',
      type: 'image',
    },
    {
      id: 1,
      src: '/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-7.webp',
      category: 'Black & white dengan glam filter',
      type: 'image',
    },
    {
      id: 6,
      src: 'https://photos.smugmug.com/Events/Dinar-Radit-Wedding/Prints/i-Ks6w5Sw/0/LCpGNmq3fgzNkp4FKRpwCzQ8KG579mwpVTDXNf7sf/X3/201212_214326-X3.jpg',
      category: 'Hasil tajam dengan studio grade lighting',
      type: 'image',
    },
  ]

  // Gallery slider state
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedImage, setSelectedImage] = useState<any | null>(null)

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
    setCurrentIndex(
      currentIndex === 0 ? GALLERY_IMAGES.length - 1 : currentIndex - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === GALLERY_IMAGES.length - 1 ? 0 : currentIndex + 1,
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  const ctaHref = '#contact'

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
          <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[2/1] rounded-xl overflow-hidden mb-8 bg-white">
            <Image
              src="https://photos.smugmug.com/Events/Dinar-Radit-Wedding/Prints/i-fbgnDHw/0/NXnG8rvx2Gsn2gPxBnFVmvPSXxN4gj2cGvnJqB5Cw/X3/201212_214513-X3.jpg"
              alt="Photo Booth Wedding Jakarta"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                Photo Booth Wedding Jakarta
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">
                Hasil foto premium yang elegan, bikin tamu happy dan jadi
                kenangan indah bagi pengantin.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href={ctaHref}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
            >
              Cek Jadwal &amp; Harga
            </Link>
            <a
              href="https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20mau%20tanya%20photo%20booth%20wedding%20Jakarta."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
            >
              Chat WhatsApp
            </a>
          </div>

          {/* Related Services */}
          <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
            <Link
              href="/sewa-photo-booth-jakarta"
              className="px-3 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20"
            >
              Sewa Photobooth Jakarta
            </Link>
            <Link
              href="/photo-booth-360-jakarta"
              className="px-3 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20"
            >
              Photo Booth 360 Jakarta
            </Link>
            <Link
              href="/sewa-photo-booth-jakarta#services"
              className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
            >
              Lihat layanan lain
            </Link>
          </div>

          {/* Long description */}
          <div className="prose prose-invert max-w-none mb-12 mt-10">
            <p>
              Kami merancang pengalaman photobooth khusus untuk pernikahan: tone
              warna yang lembut, pencahayaan dengan kualitas studio, dan bantuan
              attendant kami untuk mengatur pose serta alur tamu. Setiap paket
              sudah termasuk operator profesional, desain frame sesuai
              undangan/tema, serta arsip digital yang rapi untuk pengantin.
            </p>
            <p>
              Untuk tampilan yang semakin mewah, Anda dapat menambahkan glam
              filter yang natural, backdrop sequin atau kain elegan, serta props
              tematik. Kami juga menyiapkan opsi photo strip sebagai suvenir
              unik yang bisa ditempel di photo guestbook atau dibawa pulang
              tamu.
            </p>
            <p>
              Jika Anda sedang mencari{' '}
              <strong>sewa photobooth wedding Jakarta</strong> yang hasilnya
              elegan tapi tetap fun, Awwnderful bisa menjadi pilihan yang pas.
              Kami terbiasa bekerja sama dengan WO, venue, dan vendor lain
              sehingga setup photobooth menyatu dengan dekor dan flow acara,
              bukan sekadar “pojok foto” biasa.
            </p>
          </div>

          {/* Value props */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
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
              <p className="text-gray-300 text-sm">
                Cetak instan, GIF/boomerang, glam filter, hingga greenscreen
                &amp; intro–outro overlay.
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
              <h3 className="text-white font-semibold mb-2">Bisa di Custom</h3>
              <p className="text-gray-300">
                Frame/overlay ala undangan, backdrop pilihan yang match dengan
                dekor, props tematik, dan galeri digital untuk pengantin.
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
                Tim kami sudah berpengalaman handle berbagai wedding di Jakarta
                dan sekitarnya, dari intimate sampai ballroom besar.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image
                  src="/icon/glasses-and-moustache.svg"
                  alt="Complete Props Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-white font-semibold mb-2">Props Lengkap</h3>
              <p className="text-gray-300">
                Banyak pilihan props lucu &amp; estetik yang sudah include,
                bisa disesuaikan dengan tema wedding kamu.
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
              <h3 className="text-white font-semibold mb-2">Free Transport</h3>
              <p className="text-gray-300">
                Free transport area JABODETABEK / radius 25 km dari posisi kami.
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
                Tersedia opsi unlimited print juga jika Anda ingin semua tamu
                pulang bawa hasil cetak.
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
                Hasil foto bisa langsung dibagikan via Email, WhatsApp, atau
                scan QR code oleh tamu.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image
                  src="/icon/photography-equipment-black-background-(1)-copy.svg"
                  alt="Backdrop Choice Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-white font-semibold mb-2">Pilihan Backdrop</h3>
              <p className="text-gray-300">
                Banyak pilihan backdrop premium—sequin, kain polos elegan,
                floral, hingga greenscreen—yang bisa disesuaikan.
              </p>
            </div>
          </div>

          <HasilOutput title="Hasil Output Photobooth" />
          <ChooseBackdrop />

          {/* Image Gallery Slider */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Galeri Photo Booth Wedding
            </h2>

            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden">
              {/* Main Image Display */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={GALLERY_IMAGES[currentIndex].src}
                  alt="Photo Booth Wedding Gallery Image"
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
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
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
                      <Image
                        src={image.src}
                        alt={`Gallery thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      {index === currentIndex && (
                        <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
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
                    style={{
                      width: `${
                        ((currentIndex + 1) / GALLERY_IMAGES.length) * 100
                      }%`,
                    }}
                  />
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
                    alt="Photo Booth Wedding Gallery Image"
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

          <ArtikelLainnya serviceType="wedding" />

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
                  FAQ Photo Booth Wedding Jakarta
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Pertanyaan umum tentang layanan photobooth untuk pernikahan di
                  Jakarta
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
                          openFaqIndex === index
                            ? 'opacity-100'
                            : 'opacity-0 group-hover:opacity-50'
                        }`}
                      ></div>

                      <div className="relative z-10">
                        <button
                          onClick={() =>
                            setOpenFaqIndex(
                              openFaqIndex === index ? null : index,
                            )
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
                              openFaqIndex === index
                                ? 'rotate-180'
                                : 'group-hover:scale-110'
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
                                openFaqIndex === index
                                  ? 'opacity-100'
                                  : 'opacity-0'
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

          <div id="contact" className="mb-8">
            <BookingForm />
          </div>
        </section>
      </main>

      <WhatsAppWidget />
      <Footer />

      {/* Service schema */}
      <Script
        id="schema-wedding-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Photo Booth Wedding Jakarta',
            areaServed: {
              '@type': 'City',
              name: 'Jakarta',
            },
            provider: {
              '@type': 'LocalBusiness',
              name: 'Awwnderful Photobooth',
              telephone: '+6287772566170',
              url: 'https://awwnderful.com/photo-booth-wedding-jakarta',
            },
          }),
        }}
      />
      {/* FAQ schema */}
      <Script
        id="schema-faq-wedding"
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
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </LanguageProvider>
  )
}
