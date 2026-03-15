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
import { ChevronDown, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  // Legacy packages for backward compatibility
  const packages = [
    { name: 'Starter', duration: '2 jam', includes: ['Cetak instan', 'Desain frame', 'Operator'], approx: '± Rp3 juta' },
    { name: 'Popular', duration: '3 jam', includes: ['+ GIF/boomerang', 'Backdrop & props', 'Galeri online'], approx: '± Rp4–5 juta' },
    { name: 'Premium', duration: '4 jam', includes: ['Custom overlay/branding', 'Opsi glam filter', 'Semua benefit Popular'], approx: '± Rp5–6+ juta' },
  ]

  // Single comprehensive pricing table data
  const pricingData = [
    {
      service: 'Spin 360',
      subtitle: 'Unlimited Photos & Videos',
      durations: {
        '2 Jam': '2.000.000',
        '3 Jam': '3.000.000',
        '4 Jam': '3.500.000',
        '5 Jam': '4.500.000',
        '8 Jam': '5.000.000'
      }
    },
    {
      service: 'High Angle',
      subtitle: 'Top-Down Professional Photography',
      durations: {
        '2 Jam': '4.000.000',
        '3 Jam': '5.000.000',
        '4 Jam': '5.500.000',
        '5 Jam': '6.500.000',
        '8 Jam': '7.000.000'
      }
    },
    {
      service: 'Roaming Photo',
      subtitle: 'Mobile DSLR Photography Service',
      durations: {
        '2 Jam': '2.000.000',
        '3 Jam': '3.000.000',
        '4 Jam': '3.500.000',
        '5 Jam': '4.500.000',
        '8 Jam': '5.000.000'
      }
    },
    {
      service: 'Multi Camera',
      subtitle: 'Advanced Multi-Angle Photography',
      durations: {
        '2 Jam': '4.000.000',
        '3 Jam': '6.000.000',
        '4 Jam': '7.500.000',
        '5 Jam': '8.500.000',
        '8 Jam': '12.000.000'
      }
    },
    {
      service: 'Video Booth',
      subtitle: 'Professional Video Recording Service',
      durations: {
        '2 Jam': '3.000.000',
        '3 Jam': '4.000.000',
        '4 Jam': '5.500.000',
        '5 Jam': '6.500.000',
        '8 Jam': '7.000.000'
      }
    },
    {
      service: 'Photo Booth',
      subtitle: 'Complete Photobooth Solutions',
      durations: {
        '2 Jam': '2.000.000',
        '3 Jam': '3.000.000',
        '4 Jam': '3.500.000',
        '5 Jam': '4.500.000',
        '8 Jam': '5.000.000'
      }
    }
  ]

  const faqs = [
    {
      q: 'Apa yang memengaruhi harga sewa photo booth?',
      a: 'Durasi penyewaan, jenis output (cetak/GIF/360), jumlah cetakan, custom desain/branding, kebutuhan backdrop dan props, serta lokasi dan logistik pengiriman.'
    },
    {
      q: 'Apakah bisa custom paket sesuai kebutuhan?',
      a: 'Tentu! Kirimkan detail acara Anda melalui WhatsApp atau form kontak. Kami akan susun paket yang sesuai dengan kebutuhan dan budget Anda.'
    },
    {
      q: 'Berapa lama proses setup dan packing?',
      a: 'Setup memakan waktu 30-45 menit, dan packing 15-20 menit. Kami pastikan tidak mengganggu timeline acara Anda.'
    },
    {
      q: 'Apakah termasuk operator dan teknisi?',
      a: 'Ya, semua paket sudah termasuk operator berpengalaman dan teknisi yang akan memastikan kelancaran acara Anda.'
    },
    {
      q: 'Bagaimana cara pemesanan dan pembayaran?',
      a: 'Booking via WhatsApp atau form website. DP 50% untuk konfirmasi, pelunasan H-1 acara. Pembayaran via transfer atau cash.'
    },
    {
      q: 'Apakah bisa sewa untuk acara di luar Jakarta?',
      a: 'Bisa! Kami melayani area Jabodetabek dengan radius 50km dari Jakarta. Biaya transportasi akan disesuaikan dengan lokasi.'
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
            <Image src="https://photos.smugmug.com/photos/i-5NxxZZd/0/KsTVnZSq7MNNwpwNRRzVGHJxCnRqRwFn38c4xnPFF/XL/i-5NxxZZd-XL.png" alt="Harga Sewa Photo Booth Jakarta" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Harga Sewa Photo Booth Jakarta</h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">Estimasi transparan untuk memudahkan perencanaan budget Anda.</p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">Minta Penawaran</Link>
              <a href="https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20minta%20daftar%20harga%20photo%20booth%20Jakarta." target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">Chat WhatsApp</a>
            </div>
          </div>

          {/* Enhanced Description Section */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong>Informasi lengkap harga sewa photo booth Jakarta</strong> untuk membantu Anda merencanakan budget acara dengan transparan.
              Kami menyediakan berbagai paket yang fleksibel sesuai kebutuhan dan skala acara Anda.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Dari ulang tahun hingga corporate event, kami siap melayani dengan <strong>kualitas terbaik</strong> dan
              <strong>harga kompetitif</strong>. Semua paket sudah termasuk operator profesional, setup lengkap,
              dan dukungan teknis selama acara berlangsung.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Lihat produk dan pilih sesuai budget dan kebutuhan Anda!
            </p>
          </div>

          {/* Single Comprehensive Pricing Table */}
          <div className="bg-white/5 border border-gray-700 rounded-2xl p-6 backdrop-blur-lg overflow-x-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Harga Sewa Photo Booth Jakarta 2024</h2>
              <p className="text-xs text-gray-400 italic mt-2 px-4">*Harga di bawah ini merupakan harga kisaran dan dapat berubah sewaktu waktu. Harap konfirmasi kembali harga sebelum melakukan pemesanan.</p>
            </div>

            <div className="min-w-full">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-4 px-4 text-white font-bold text-lg">Service</th>
                    <th className="text-center py-4 px-3 text-purple-300 font-semibold text-sm min-w-[80px]">2 Jam</th>
                    <th className="text-center py-4 px-3 text-purple-300 font-semibold text-sm min-w-[80px]">3 Jam</th>
                    <th className="text-center py-4 px-3 text-purple-300 font-semibold text-sm min-w-[80px]">4 Jam</th>
                    <th className="text-center py-4 px-3 text-purple-300 font-semibold text-sm min-w-[80px]">5 Jam</th>
                    <th className="text-center py-4 px-3 text-purple-300 font-semibold text-sm min-w-[80px]">8 Jam</th>
                    <th className="text-center py-4 px-4 text-white font-semibold text-sm">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((service, index) => (
                    <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-4">
                        <div>
                          <div className="text-white font-semibold text-lg">{service.service}</div>
                          <div className="text-gray-400 text-sm">{service.subtitle}</div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-3 text-white font-bold text-base">
                        Rp{service.durations['2 Jam']}
                      </td>
                      <td className="text-center py-4 px-3 text-white font-bold text-base">
                        Rp{service.durations['3 Jam']}
                      </td>
                      <td className="text-center py-4 px-3 text-white font-bold text-base">
                        Rp{service.durations['4 Jam']}
                      </td>
                      <td className="text-center py-4 px-3 text-white font-bold text-base">
                        Rp{service.durations['5 Jam']}
                      </td>
                      <td className="text-center py-4 px-3 text-white font-bold text-base">
                        Rp{service.durations['8 Jam']}
                      </td>
                      <td className="text-center py-4 px-4">
                        <a
                          href={`https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20saya%20mau%20pesan%20${service.service}%20Paket%201%20Day`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Pesan
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-3">Butuh Konsultasi?</h3>
                <p className="text-gray-300 mb-4 max-w-2xl mx-auto text-sm">
                  Tim kami siap membantu Anda menemukan paket yang sesuai dengan kebutuhan acara dan budget Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="#contact"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Minta Penawaran
                  </Link>
                  <a
                    href="https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20saya%20mau%20konsultasi%20harga%20sewa%20photo%20booth."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Chat WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

        

          {/* Modern FAQ Section */}
          <section className="relative py-16 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Pertanyaan Umum</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Temukan jawaban atas pertanyaan yang sering ditanyakan tentang harga sewa photo booth Jakarta
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

          {/* Hasil Output Section */}
          <HasilOutput title="Hasil Output Photobooth" />

          {/* Services Section */}
          <ServiceGrid />

          <ArtikelLainnya serviceType="harga" />

          <div id="contact" className="mb-8"><BookingForm /></div>
        </section>
      </main>

      <WhatsAppWidget />
      <Footer />

      <Script id="schema-harga" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Harga Sewa Photo Booth Jakarta', areaServed: 'Jakarta', provider: { '@type': 'LocalBusiness', name: 'Awwnderful Photo Booth', telephone: '+6287772566170', url: 'https://awwnderful.com/harga-sewa-photo-booth-jakarta' } }) }} />
    </LanguageProvider>
  )
}
