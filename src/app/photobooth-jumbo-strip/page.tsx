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
    id: 1,
    src: '/images/services/custom-photo-print-jakarta/custom-photo-print-jakarta-jumbo-photobooth-strips.webp',
    alt: 'Contoh jumbo strip photobooth - photobooth jumbo strip jakarta',
    title: 'Contoh Jumbo Strip',
    category: 'Souvenir'
  },
  {
    id: 2,
    src: '/images/services/photo-booth-gif-jakarta/sewa-photo-booth-dslr-setup-jakarta-6.webp',
    alt: 'Setup photobooth - jumbo strip example',
    title: 'Setup Booth',
    category: 'Setup'
  },
  {
    id: 3,
    src: '/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-7.webp',
    alt: 'Display photobooth strip panjang - jakarta',
    title: 'Display Jumbo Strips',
    category: 'Showcase'
  }
]

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Apa itu Jumbo Strip Photobooth?',
      a: 'Jumbo Strip Photobooth adalah photobooth dengan output strip foto berukuran lebih besar dari strip biasa, biasanya 3 pose vertikal.'
    },
    {
      q: 'Bisa atur jumlah pose dan layout?',
      a: 'Bisa. Secara default kami sediakan format 3 pose (jumbo), namun <strong>adjustable</strong> sesuai request — 2, 3, atau 4 pose; portrait atau landscape; dan opsi margin / border sesuai branding.'
    },
  
    {
      q: 'Berapa kebutuhan area dan daya?',
      a: 'Minimum area 2×2.5 meter dan daya sekitar 1.000–1.500W tergantung konfigurasi printer & lighting. Tim kami datang 60–90 menit sebelum acara untuk setup.'
    },
    {
      q: 'Apakah ada versi digital?',
      a: 'Setiap sesi tersimpan dalam galeri digital dan dapat diakses via QR/WhatsApp/email. Opsi custom watermark juga tersedia.'
    },
    {
      q: 'Berapa harga paketnya?',
      a: 'Harga mulai dari Rp 3.500.000 untuk Paket Starter (2 jam). Kami juga menyediakan paket premium untuk branding lengkap dan durasi lebih lama.'
    }
  ]

  const ctaHref = '#contact'

  return (
    <LanguageProvider>
      <Head>
        <title>Photobooth Jumbo Strip Jakarta — Jumbo Photo Strip (3 Pose) | Awwnderful</title>
        <meta
          name="description"
          content="Photobooth Jumbo Strip Jakarta — output strip foto panjang (Korean-style) 3 pose yang dapat disesuaikan. Ideal untuk wedding, brand activation, pop-up. Harga mulai Rp 3.500.000 (3 jam)."
        />
        <meta property="og:title" content="Photobooth Jumbo Strip Jakarta — Awwnderful" />
        <meta property="og:description" content="Jumbo Strip photobooth: foto panjang 3 pose, print instan, finishing onsite, dan galeri digital. Custom layout & branding tersedia." />
        <meta property="og:image" content="https://awwnderful.com/images/services/custom-photo-print-jakarta/photobooth-jumbo-strip.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://awwnderful.com/photobooth-jumbo-strip" />
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
              src="/images/services/custom-photo-print-jakarta/photobooth-jumbo-strip.jpg"
              alt="Photobooth Jumbo Strip Jakarta - contoh jumbo strip"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Photobooth Jumbo Strip — Jakarta</h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">
                Strip foto panjang bergaya Korea (3 pose) — hasil besar & dramatic, printable instan, serta dapat disesuaikan sesuai request.
              </p>
            </div>
          </div>

          {/* AI Overview / SEO Summary */}
          <div className="prose prose-invert max-w-none mb-12 bg-white/5 border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-2">Ringkasan Layanan Jumbo Strip</h2>
            <p className="text-gray-300 leading-relaxed">
              <strong>Photobooth Jumbo Strip Jakarta</strong> adalah layanan photobooth yang menghasilkan <strong>strip foto panjang (jumbo)</strong> — biasanya format 3 pose — dengan kualitas cetak tinggi untuk wedding, brand activation, pop-up, dan event. Strip dapat di-<em>custom</em> sesuai permintaan (pose, layout, border, hingga ukuran).
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              Kami menyediakan layanan lengkap: capture dengan lighting profesional, print instan (dye-sub), finishing/laminasi, dan galeri digital dengan QR code. Paket mulai dari <strong>Rp 3.500.000</strong> untuk 3 jam layanan.
            </p>
          </div>

          {/* Demo / Media */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Demo Jumbo Strip</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/services/custom-photo-print-jakarta/custom-photo-print-jakarta-jumbo-photobooth-strips.webp"
                    alt="Demo capture photobooth jumbo strip"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-semibold text-sm">Capture Session</h3>
                    <p className="text-gray-300 text-xs">Direction untuk 3 pose sehingga hasil tampil penuh dan dramatik.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/services/custom-photo-print-jakarta/photobooth-jumbo-strip-2.jpg"
                    alt="Demo printing & finishing jumbo strip"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-semibold text-sm">Print & Finishing</h3>
                    <p className="text-gray-300 text-xs">Print dye-sub berkualitas tinggi, opsi laminasi & custom border.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <div className="prose prose-invert max-w-none mb-12">
            <p>
              🎞️ <strong>Kenapa pilih Jumbo Strip?</strong> Strip foto panjang memberikan ruang lebih untuk pose kreatif, storytelling foto, dan hasil souvenir yang eye-catching — cocok untuk tamu yang ingin membawa pulang kenangan besar.
            </p>
            <p className="mt-4">
            Kami juga melayani 
<Link href="/photobooth-gif" className="underline"> GIF booth </Link> 
dan 
<Link href="/photobooth-video" className="underline"> video booth </Link> 
sehingga event kamu punya multi-format content.

            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: '/icon/photo-camera-outline.svg',
                title: 'Jumbo 3-Pose',
                desc: 'Format 3 pose (default) dengan opsi 2/3/4 pose sesuai request.'
              },
              {
                icon: '/icon/victory.svg',
                title: 'Print High-Res',
                desc: 'Printer dye-sub untuk warna stabil dan detail tajam.'
              },
              {
                icon: '/icon/delivery-truck.svg',
                title: 'Finishing Onsite',
                desc: 'Laminasi / cutting / packaging langsung di venue.'
              },
              {
                icon: '/icon/megaphone.svg',
                title: 'Custom Branding',
                desc: 'Border, logo, dan layout dapat disesuaikan untuk event atau campaign.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center min-h-[200px]">
                <div className="mb-4">
                  <Image src={item.icon} alt={`${item.title} - photobooth jumbo strip jakarta`} width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Hidden Workflow Section
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Workflow — Dari Capture ke Strip</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  type: 'image',
                  src: 'https://photos.smugmug.com/photos/i-H5Kn8ms/0/KmZW8KRs8FHc5wfXQqqVsM2cXLH8cv6D2dZ75Rqbv/X3/i-H5Kn8ms-X3.jpg',
                  title: 'Step 1: Setup & Direction',
                  desc: 'Setup lighting & backdrop jumbo, crew memberi direction agar pose optimal untuk strip panjang.'
                },
                {
                  type: 'video',
                  src: 'https://photos.smugmug.com/Events/Prambors-50th/Video-Booth/i-HS4wRz8/0/KXhD9n8HDXwN58Lk4FbCWVKhmG2xbKCCx4dNxg7Jk/1280/Awwnderful_Prambors_2021-03-18_16-10-55%20%5B7.00-5.08%5D_mp4-1280.mp4',
                  title: 'Step 2: Capture',
                  desc: 'Sesi singkat per tamu / grup — biasanya 2–3 menit per sesi, tergantung pose & custom request.'
                },
                {
                  type: 'image',
                  src: 'https://photos.smugmug.com/photos/i-7cd7Mk4/0/K4z2cHSZdXJx8GZrbtnw26nnGPk2PVCsTZKwPHRQ4/XL/i-7cd7Mk4-XL.png',
                  title: 'Step 3: Print & Trim',
                  desc: 'Print instan menggunakan dye-sub, dipotong rapi sesuai ukuran jumbo strip.'
                },
                {
                  type: 'video',
                  src: 'https://photos.smugmug.com/photos/i-vNZDbRr/0/MM6mJVdPtQzcGkqKfqSx3w6ndLHPJjfxqZzBZFMPb/1920/i-vNZDbRr-1920.mp4',
                  title: 'Step 4: Delivery & Digital',
                  desc: 'Strip diserahkan ke tamu; file digital tersedia via QR/WhatsApp/email.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                  <div className="relative aspect-[16/9]">
                    {item.type === 'image' ? (
                      <Image src={item.src} alt={`${item.title} - jumbo strip`} fill className="object-cover" />
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
          */}

          {/* Hidden Gallery Section
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Gallery & Contoh Jumbo Strip</h2>
            <BackdropGallerySlider images={gallery} />
          </section>
          */}

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Use Case Favorit</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Wedding & Prewedding', desc: 'Souvenir yang elegan dan personal untuk tamu dan pasangan.' },
                { title: 'Brand Activation', desc: 'Format besar cocok untuk storytelling brand & kampanye visual.' },
                { title: 'Pop-Up & Retail', desc: 'Tarik perhatian pengunjung dengan souvenir berukuran besar.' }
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
            <h2 className="text-3xl font-bold text-white mb-6">Harga & Paket Jumbo Strip</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/5 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">Paket Starter</h3>
                <p className="text-gray-300 text-sm mb-4">Ideal untuk intimate wedding & private party.</p>
                <p className="text-white font-bold text-2xl mb-2">Mulai Rp 3.500.000</p>
                <p className="text-gray-400 text-sm">(Termasuk: 2 jam layanan, printer & material standar, finishing onsite)</p>
              </div>

              <div className="bg-white/5 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">Paket Custom</h3>
                <p className="text-gray-300 text-sm mb-4">Jika kalian ingin menggabungkan Photo strip biasa dan photo strip jumbo Kami juga bisa.</p>
                <p className="text-white font-bold text-2xl mb-2">Mulai Rp 4.000.000</p>
                <p className="text-gray-400 text-sm">(Termasuk: 2 jam, custom layout, custom branding)</p>
              </div>

              <div className="bg-white/5 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">Paket Activation</h3>
                <p className="text-gray-300 text-sm mb-4">Untuk brand activation & pop-up, harga sesuai kebutuhan.</p>
                <p className="text-white font-bold text-2xl mb-2">Harga Negosiasi</p>
                <p className="text-gray-400 text-sm">(Termasuk opsi custom packaging, voucher, reporting)</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-6">
              Harga estimasi. <strong>Hubungi kami</strong> untuk proposal final berdasarkan lokasi, durasi, dan kebutuhan custom.
            </p>

            <div className="flex gap-4">
              <a href={ctaHref} className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 border border-gray-600 text-white rounded-2xl">
                Hubungi Kami
              </Link>
            </div>
          </section>

          <HasilOutput title="Hasil Output Lainnya" />
          <ChooseBackdrop />
          <ArtikelLainnya serviceType="event" />
          <ServiceGrid />

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Area Layanan</h2>
            <p className="text-gray-300">Jakarta, Bogor, Depok, Tangerang, Bekasi, BSD, dan kota besar lain sesuai permintaan.</p>
          </div>

          {/* FAQ Section */}
          <section className="relative py-16 mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-purple-900/10 to-gray-800 -z-10 rounded-2xl"></div>
            <div className="relative z-10 px-6 py-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  FAQ Jumbo Strip Photobooth
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">Pertanyaan umum seputar layanan jumbo strip kami.</p>
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
                                <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line" dangerouslySetInnerHTML={{ __html: faq.a }} />
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

      {/* JSON-LD: Service & Product (Jumbo Strip) & FAQ */}
      <Script
        id="schema-jumbo-strip-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Photobooth Jumbo Strip Jakarta',
            description: 'Photobooth Jumbo Strip (3-pose) dengan print instan, finishing onsite, dan opsi custom layout/branding. Cocok untuk wedding, brand activation, dan pop-up.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Awwnderful Photo Booth',
              telephone: '+6287772566170',
              url: 'https://awwnderful.com/photobooth-jumbo-strip',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Jakarta',
                addressCountry: 'ID'
              }
            },
            serviceType: 'Photobooth Jumbo Strip',
            areaServed: ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi', 'BSD'],
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                priceCurrency: 'IDR',
                price: '3500000',
                unitText: 'package starting price for 3 hours'
              }
            },
            image: 'https://awwnderful.com/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif'
          })
        }}
      />

      <Script
        id="schema-jumbo-strip-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Jumbo Photo Strip (Photobooth)',
            description: 'Strip foto panjang (jumbo) hasil photobooth 3-pose; custom layout, border, dan branding tersedia.',
            image: ['https://awwnderful.com/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif'],
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              price: '3500000',
              url: 'https://awwnderful.com/photobooth-jumbo-strip'
            }
          })
        }}
      />

      <Script
        id="schema-faq-jumbo-strip"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]*>?/gm, '') } }))
          })
        }}
      />
    </LanguageProvider>
  )
}