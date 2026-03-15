'use client'

import Head from 'next/head'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Link from 'next/link'
import { LanguageProvider } from '@/contexts/LanguageContext'
import ChooseBackdrop from '@/components/ChooseBackdrop'
import HasilOutput from '@/components/HasilOutput'
import BackdropGallerySlider from '@/components/BackdropGallerySlider'
import Image from 'next/image'
import ServiceGrid from '@/components/ServiceGrid'
import ArtikelLainnya from '@/components/ArtikelLainnya'
import { ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

const gallery = [

  {
    id: 2,
    src: '/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta-wedding-1.jpeg',
    alt: 'Keychain photobooth untuk acara pernikahan - hasil cetakan acrylic',
    title: 'Wedding Keychain Collection',
    category: 'Wedding'
  },
  {
    id: 3,
    src: '/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta-wedding-2.jpeg',
    alt: 'Souvenir keychain photobooth wedding dengan desain elegan',
    title: 'Elegant Wedding Keychains',
    category: 'Wedding'
  },
  {
    id: 4,
    src: '/images/services/custom-photo-print-jakarta/keychain-photobooth-kodachrome-jakarta-1.png',
    alt: 'Keychain photobooth dengan style retro kodachrome',
    title: 'Retro Kodachrome Keychains',
    category: 'Retro'
  },

]

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Apa itu  Photobooth Keychain?',
      a: 'Ini adalah layanan photobooth unik di mana hasil foto strip (4 pose) langsung dicetak, dipotong, dan dirakit menjadi keychain (gantungan kunci) acrylic berkualitas tinggi di tempat acara.'
    },
    {
      q: 'Berapa lama proses pembuatan satu keychain?',
      a: 'Sangat cepat. Dengan tim assembly khusus, proses dari foto hingga keychain jadi hanya memakan waktu sekitar 1-2 menit, sehingga tidak menumpuk antrian tamu.'
    },
    {
      q: 'Bisakah desain insert dan acrylic di-custom?',
      a: 'Bisa. Layout foto, frame desain, hingga packaging plastik/pouch keychain dapat dibranding sesuai tema wedding atau logo perusahaan Anda.'
    },
    {
      q: 'Apakah tamu juga mendapatkan softcopy foto?',
      a: 'Ya, setiap sesi foto otomatis diunggah ke galeri online. Tamu bisa mengunduh softcopy via scan QR code atau input email setelah sesi foto.'
    },
    {
      q: 'Berapa ukuran area yang dibutuhkan?',
      a: 'Kami menyarankan area minimal 2.5 x 2.5 meter. Ini mencakup space untuk backdrop, peralatan foto, dan meja khusus untuk tim assembly merakit keychain.'
    }
  ]

  const ctaHref = '#contact'

  return (
    <LanguageProvider>
      <Head>
        <title>Photobooth Keychain Acrylic Jakarta — Souvenir Foto Unik | Awwnderful</title>
        <meta
          name="description"
          content="Jasa Photobooth Keychain Acrylic Jakarta. Ubah foto tamu menjadi souvenir gantungan kunci acrylic instan yang unik & premium. Cocok untuk wedding & event korporat."
        />
        <meta property="og:title" content="Photobooth Keychain Acrylic Jakarta — Souvenir Unik & Instan" />
        <meta property="og:description" content="Layanan photobooth dengan output keychain acrylic instan. Foto 4 pose, cetak di tempat, rakit jadi souvenir premium. Pesan sekarang untuk event Anda!" />
        <meta property="og:image" content="https://awwnderful.com/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://awwnderful.com/photobooth-keychain" />
      </Head>

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
          {/* HERO */}
          <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[2/1] rounded-xl overflow-hidden mb-8">
            <Image
              src="/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif"
              alt="Photobooth Keychain Acrylic Jakarta - Souvenir Foto Unik"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Photobooth Keychain Acrylic — Jakarta</h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">
                Souvenir foto instan yang diubah menjadi gantungan kunci acrylic premium. Unik, fungsional, dan *memorable* untuk tamu Anda.
              </p>
            </div>
          </div>

          {/* AI Overview / SEO Summary */}
          <div className="prose prose-invert max-w-none mb-12 bg-white/5 border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-2">Mengapa Memilih Photobooth Keychain?</h2>
            <p className="text-gray-300 leading-relaxed">
              <strong>Photobooth Keychain Acrylic</strong> adalah solusi souvenir event yang menggabungkan keseruan berfoto dengan buah tangan fisik yang bernilai. Berbeda dengan lembaran foto biasa yang sering terlipat di tas, output kami dirakit menjadi <strong>gantungan kunci acrylic (keychain)</strong> yang awet dan langsung bisa dipakai oleh tamu.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              Layanan ini sangat populer untuk <strong>Souvenir Pernikahan (Wedding)</strong>, peluncuran produk, dan aktivasi brand di Jakarta. Tim Awwnderful menangani semuanya: dari *capture* foto, cetak kualitas tinggi, *cutting*, hingga perakitan *onsite* dalam hitungan menit.
            </p>
          </div>

          {/* Demo / Media */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Proses Pembuatan Keychain Onsite</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[3/4]">
                  <img
                    src="/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta-wedding-2.jpeg"
                    className="w-full h-full object-cover"
                    alt="Proses foto photobooth keychain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-semibold text-sm">1. Fun Photo Session</h3>
                    <p className="text-gray-300 text-xs">Pengalaman foto interaktif dengan lighting studio profesional.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[3/4]">
                  <video
                    src="/images/services/custom-photo-print-jakarta/keychain-photobooth-wedding-jakarta-video.mp4"
                    className="w-full h-full object-cover"
                    controls
                    muted
                    loop
                    autoPlay
                    playsInline
                    aria-label="Proses perakitan keychain acrylic onsite"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-semibold text-sm">2. Instant Assembly</h3>
                    <p className="text-gray-300 text-xs">Cetak, potong, dan pasang ke acrylic dalam &lt; 2 menit.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <div className="prose prose-invert max-w-none mb-12">
            <p>
              🗝️ <strong>Souvenir yang Selalu Dibawa.</strong> Tidak seperti souvenir pajangan, keychain acrylic akan tergantung di tas atau kunci kendaraan tamu, menjaga memori acara Anda tetap dekat dengan mereka setiap hari.
            </p>
            <p className="mt-4">
              {/* FIX: Removed nested <a> tags */}
              Untuk pengalaman event yang lebih lengkap, kami juga menawarkan <Link href="id/services/ai-photo-booth/" className="underline text-purple-400 hover:text-purple-300">AI Photo booth</Link>, <Link href="/photobooth-video-booth" className="underline text-purple-400 hover:text-purple-300">video booth 360</Link>, dan dekorasi backdrop custom.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: '/icon/photo-camera-outline.svg',
                title: 'Kualitas Foto Tajam',
                desc: 'Menggunakan kamera DSLR & lighting studio untuk hasil jernih.'
              },
              {
                icon: '/icon/victory.svg',
                title: 'Material Acrylic',
                desc: 'Casing acrylic tebal, bening, dan tahan gores (premium quality).'
              },
              {
                icon: '/icon/delivery-truck.svg',
                title: 'Tim Assembly',
                desc: 'Crew khusus perakitan memastikan flow antrian tetap lancar.'
              },
              {
                icon: '/icon/megaphone.svg',
                title: 'Branding Area',
                desc: 'Custom desain pada layout foto dan packaging keychain.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center min-h-[200px]">
                <div className="mb-4">
                  <Image src={item.icon} alt={`${item.title} - fitur photobooth keychain`} width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Workflow */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Workflow Photobooth Keychain</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  type: 'image',
                  src: '/images/services/photo-booth-gif-jakarta/photo-booth-classic-setup-jakarta-1.webp',
                  title: 'Step 1: Pose & Capture',
                  desc: 'Tamu diarahkan fotografer untuk 4 gaya seru di depan backdrop.'
                },
                {
                  type: 'video',
                  src: 'https://photos.smugmug.com/photos/i-RCJHmcr/0/LfNpZr3QpTH9Tf8PkkFPNrD4xdsg9WkzSVbJWKT3Q/640/i-RCJHmcr-640.mp4',                  title: 'Step 2: High-Speed Print',
                  desc: 'Foto dicetak.'
                },
                {
                  type: 'image',
                  src: 'https://photos.smugmug.com/photos/i-7cd7Mk4/0/K4z2cHSZdXJx8GZrbtnw26nnGPk2PVCsTZKwPHRQ4/XL/i-7cd7Mk4-XL.png',
                  title: 'Step 3: Cutting & Assembly',
                  desc: 'Tim kami memotong strip sesuai ukuran dan memasukkannya ke casing acrylic.'
                },
                {
                  type: 'video',
                  src: '/images/services/custom-photo-print-jakarta/keychain-photobooth-kodachrome-jakarta-video.mp4',
                  title: 'Step 4: Souvenir Ready!',
                  desc: 'Keychain diserahkan ke tamu. File digital juga bisa didownload via QR.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                  <div className="relative aspect-[16/9]">
                    {item.type === 'image' ? (
                      <Image src={item.src} alt={`${item.title} - proses keychain`} fill className="object-cover" />
                    ) : (
                      <video src={item.src} className="w-full h-full object-contain" controls muted loop autoPlay playsInline />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Contoh Hasil Keychain</h2>
            <BackdropGallerySlider images={gallery} />
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Cocok Untuk Berbagai Acara</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Wedding Souvenir', desc: 'Pengganti souvenir konvensional yang lebih personal dan interaktif.' },
                { title: 'Corporate Branding', desc: 'Keychain dengan logo perusahaan untuk branding jangka panjang.' },
                { title: 'Birthday Party', desc: 'Oleh-oleh pesta ulang tahun yang pasti disimpan teman-teman.' }
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing / Packages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Paket Harga Photobooth Keychain</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/5 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">Paket Ala Carte</h3>
                <p className="text-gray-300 text-sm mb-4">Ideal untuk intimate wedding & birthday.</p>
                <p className="text-white font-bold text-2xl mb-2">Mulai Rp 5.000 per pcs</p>
                <p className="text-gray-400 text-sm">(Harga sebagai add on dari paket photobooth)</p>
              </div>


              <div className="bg-white/5 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">Paket Skala Besar</h3>
                <p className="text-gray-300 text-sm mb-4">Untuk activation & event kantor skala besar.</p>
                <p className="text-white font-bold text-2xl mb-2">Hubungi Kami</p>
                <p className="text-gray-400 text-sm">(Full Branding Booth, Data Capture, Custom Keychain Shape)</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-6">
              *Harga dapat berubah tergantung lokasi dan request khusus. <strong>Hubungi kami</strong> untuk penawaran terbaik.
            </p>

            <div className="flex gap-4">
              <a href={ctaHref} className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                Dapatkan Penawaran
                <ArrowRight className="w-4 h-4" />
              </a>
              {/* FIX: Removed nested <a> tag */}
              <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 border border-gray-600 text-white rounded-2xl hover:border-purple-500 transition-colors">
                Hubungi Kami
              </Link>
            </div>
          </section>

          <HasilOutput title="Lihat Opsi Photobooth Unik Lainnya" />
          <ChooseBackdrop />
          <ArtikelLainnya serviceType="event" />
          <ServiceGrid />

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Area Layanan</h2>
            <p className="text-gray-300">Kami melayani area Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi, BSD) dan sekitarnya.</p>
          </div>

          {/* FAQ Section */}
          <section className="relative py-16 mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-purple-900/10 to-gray-800 -z-10 rounded-2xl"></div>
            <div className="relative z-10 px-6 py-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  FAQ Photobooth Keychain
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">Pertanyaan umum seputar layanan souvenir foto acrylic.</p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="group relative">
                    <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
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
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                openFaqIndex === index ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300 group-hover:bg-purple-500/20'
                              }`}
                            >
                              {index + 1}
                            </div>
                            <span className={`font-semibold text-lg transition-all duration-300 ${openFaqIndex === index ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                              {faq.q}
                            </span>
                          </div>

                          <div className={`relative transition-all duration-300 ${openFaqIndex === index ? 'rotate-180' : 'group-hover:scale-110'}`}>
                            <ChevronDown
                              className={`w-6 h-6 transition-colors duration-300 ${openFaqIndex === index ? 'text-purple-400' : 'text-gray-400 group-hover:text-purple-300'}`}
                            />
                          </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="px-8 pb-6 pt-2">
                            <div className="border-t border-gray-600/50 pt-6">
                              <div className="prose prose-gray max-w-none">
                                <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">{faq.a}</p>
                              </div>
                              <div className="mt-6 flex items-center gap-2">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-300 ${
                          openFaqIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                {/* FIX: Removed nested <a> tag */}
                <Link href="/faq" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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

      {/* JSON-LD: Service & Product Schema Optimized for "Keychain" */}
      <Script
        id="schema-keychain-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Jasa Photobooth Keychain Acrylic Jakarta',
            description: 'Layanan photobooth dengan output souvenir gantungan kunci (keychain) acrylic instan. Paket lengkap termasuk fotografer, printer, dan assembly onsite.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Awwnderful Photo Booth',
              telephone: '+6287772566170',
              url: 'https://awwnderful.com/photobooth-keychain',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Jakarta',
                addressCountry: 'ID'
              }
            },
            serviceType: 'Photobooth Souvenir Service',
            areaServed: ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi', 'BSD'],
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                priceCurrency: 'IDR',
                price: '3500000',
                unitText: 'Harga mulai dari untuk paket 3 jam'
              }
            },
            image: 'https://awwnderful.com/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif'
          })
        }}
      />
      <Script
        id="schema-keychain-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Souvenir Photobooth Keychain Acrylic',
            description: 'Souvenir foto instan berbentuk gantungan kunci acrylic bening premium. Tahan lama dan bisa dicustom.',
            image: [
              'https://awwnderful.com/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif'
            ],
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              price: '3500000',
              url: 'https://awwnderful.com/photobooth-keychain'
            }
          })
        }}
      />
      <Script
        id="schema-faq-keychain"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
          })
        }}
      />
    </LanguageProvider>
  )
}