'use client'

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

// 🎯 UNIQUE GALLERY FOR HIGH-ANGLE PHOTOBOOTH PAGE
const highAngleGalleryImages = [
  {
    id: 3,
    src: 'https://photos.smugmug.com/photos/i-65QsCZw/0/KgQtcFwfHznJMPXCwBp54CphcnQ9MwhQ7JMFbq9Pc/X2/i-65QsCZw-X2.jpg',
    alt: 'Top-Down Camera Setup',
    title: 'Top-Down Camera',
    category: 'High Angle'
  },
  {
    id: 4,
    src: 'https://photos.smugmug.com/photos/i-t7jM9rm/0/MmQw29mJP4KxGzW7bK3KkfhxJRpshfvj8bDn7W4Wz/X2/i-t7jM9rm-X2.jpg',
    alt: 'High Angle Event Setup',
    title: 'Event Setup',
    category: 'High Angle'
  }
]

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Apa keunggulan photobooth high angle?',
      a: 'High angle photobooth memberikan sudut kamera dari atas yang lebih flattering, footprint setup yang lebih ringkas (hanya 2x2 meter), dan antrian yang lebih cepat karena tidak perlu pose khusus.'
    },
    {
      q: 'Berapa kisaran harga sewa high angle photobooth Jakarta?',
      a: 'Harga sewa high angle photobooth Jakarta mulai dari Rp3 juta – Rp6 juta untuk durasi 2–4 jam. Harga disesuaikan dengan paket pilihan, durasi sewa, dan tingkat kustomisasi desain.'
    },
    {
      q: 'Apa saja fasilitas yang disediakan untuk high angle photobooth?',
      a: 'Paket lengkap meliputi: kamera DSLR high-quality, lighting studio premium, cetak foto unlimited, desain frame custom sesuai tema, dan galeri online untuk mengunduh hasil foto.'
    },
    {
      q: 'Apakah bisa custom desain frame untuk high angle photobooth?',
      a: 'Tentu! Kami bisa menyesuaikan semua frame foto sesuai tema acara Anda. Frame high angle biasanya menggunakan format portrait atau square yang optimal untuk tampilan dari atas.'
    },
    {
      q: 'Berapa kebutuhan listrik dan area untuk setup high angle photobooth?',
      a: 'Kebutuhan listrik ±1000–1500W, area minimal 2x2 meter untuk setup high angle yang lebih ringkas dibanding booth konvensional.'
    }
  ]

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
          <div className=" bg-white relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[2/1] rounded-xl overflow-hidden mb-8 ">
            <Image
              src="/images/services/photobox-jakarta/photobox-jakarta-high-angle.webp"
              alt="Photo Booth High Angle Jakarta"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                Photo Booth High Angle Jakarta
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">
                Top-down look yang flattering, footprint ringkas, dan antrian cepat.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 mb-8 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href={ctaHref}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
            >
              Cek Jadwal & Harga
            </Link>
            <a
              href="https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20mau%20tanya%20photo%20booth%20high%20angle%20Jakarta."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
            >
              Chat WhatsApp
            </a>
          </div>

          {/* Video Showcase Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Video 1 */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[3/4]">
                  <video
                    src="https://photos.smugmug.com/photos/i-Bdfj4Mm/0/LQnx9dCNjF2j8d4NxvsDKW6CLLfbrK3WT6SCVbN36/1920/i-Bdfj4Mm-1920.mp4"
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[3/4]">
                  <video
                    src="https://photos.smugmug.com/photos/i-4wsWdTF/0/LvGvr7P6RwfW9NW2LdbG6xbj7PrPx74QFgnHVkgjX/1920/i-4wsWdTF-1920.mp4"
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Video 3 */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[3/4]">
                  <video
                    src="https://photos.smugmug.com/photos/i-wFZnkBB/0/LCthtmXcqM8KTfKsSdkrxnZhcBQ9fdNKWbBzV5NwP/1920/i-wFZnkBB-1920.mp4"
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </section>

          {/* Long description */}
          <div className="prose prose-invert max-w-none mb-12">
            <h2>High Angle Photo Booth Jakarta untuk Event Kekinian</h2>
            <p>
              📸 High Angle Photo Booth lagi jadi favorit di event-event hits Jakarta & sekitarnya.
              Dengan sudut kamera dari atas, hasil foto jadi lebih flattering, crowd-friendly, dan
              cocok banget dipakai di mall, festival, wedding, hingga corporate event yang butuh
              antrian cepat.
            </p>
            <p>
              Bersama Awwnderful, kamu nggak cuma dapat setup high angle dengan kamera DSLR
              berkualitas dan lighting premium, tapi juga bisa request custom design box sesuai tema
              brand atau acara kamu. Jadi bukan hanya tempat foto, tapi juga spot eye-catching yang
              bikin tamu ngantri pengen coba.
            </p>

            <h2>Kenapa Memilih High Angle Photobooth?</h2>
            <p>
              Dibanding photobooth biasa, <strong>high angle photobooth</strong> punya footprint yang
              lebih ringkas (sekitar 2x2 meter), tidak butuh banyak properti dan tetap terlihat clean
              di foto. Sudut kamera dari atas membantu membuat tamu terlihat lebih proporsional dan
              natural, terutama untuk foto group.
            </p>

            <h2>Cocok untuk Brand Activation & Event di Jakarta</h2>
            <p>
              Dari wedding, corporate event, sampai brand activation di Jakarta, Bogor, Depok,
              Tangerang, dan Bandung, high angle booth kami siap bikin tamu betah berpose dan membawa
              pulang pengalaman seru yang unforgettable. Format output bisa dicetak, dibagikan via
              email/WhatsApp, atau diakses lewat QR code—cocok untuk campaign digital & sosial media.
            </p>
          </div>

          {/* Internal links ke layanan lain */}
          <div className="mb-10 text-gray-300 text-center">
            <p className="mb-3">
              Selain high angle, kami juga menyediakan layanan photobooth lain:
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
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
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image
                  src="/icon/photo-camera-outline.svg"
                  alt="High Angle Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-white font-semibold mb-2">Sudut High Angle</h3>
              <p className="text-gray-300 text-sm">
                Kamera dari atas untuk tampilan lebih flattering dan natural.
              </p>
            </div>

            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image
                  src="/icon/victory.svg"
                  alt="Quick Queue Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-white font-semibold mb-2">Antrian Cepat</h3>
              <p className="text-gray-300">
                Proses foto lebih cepat karena tidak perlu pose khusus.
              </p>
            </div>

            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image
                  src="/icon/glasses-and-moustache.svg"
                  alt="Crowd Friendly Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-white font-semibold mb-2">Crowd Friendly</h3>
              <p className="text-gray-300">
                Cocok untuk acara dengan banyak orang dan antrian panjang.
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
                Free transport area JABODETABEK / Radius 25km dari posisi kami.
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
                Tersedia opsi unlimited print juga jika anda ingin hasilnya di cetak.
              </p>
            </div>
          </div>

          <HasilOutput title="Hasil Output High Angle Photobooth" />

          {/* Image Gallery Slider */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Galeri High Angle Photobooth
            </h2>
            <BackdropGallerySlider images={highAngleGalleryImages} />
          </section>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">
              Paket High Angle Photobooth
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Paket unlimited print',
                  points: ['Cetak instan tanpa batas', 'Cocok untuk segala acara']
                },
                {
                  name: 'Paket print quota',
                  points: [
                    'Hasil cetak yang dilimit',
                    'Jumlah print dibatasi untuk menekan budget'
                  ]
                },
                {
                  name: 'Tanpa print out',
                  points: [
                    'Hanya share ke email / Scan QR',
                    'Cocok untuk acara jangka lama'
                  ]
                }
              ].map((p) => (
                <div key={p.name} className="bg-white/5 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">{p.name}</h3>
                  <ul className="text-gray-300 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt}>• {pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href={ctaHref}
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
              >
                Minta Detail & Penawaran
              </Link>
            </div>
          </div>

          <ArtikelLainnya serviceType="harga" />

          {/* Services Section */}
          <ServiceGrid />

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Area Layanan</h2>
            <p className="text-gray-300">
              Jakarta Pusat, Jakarta Barat, Jakarta Timur, Jakarta Utara, Jakarta
              Selatan — juga sekitar: BSD/Tangerang Selatan, Depok, dan Bekasi.
            </p>
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
                  FAQ High Angle Photobooth Jakarta
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Pertanyaan umum tentang layanan high angle photobooth di Jakarta
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

          <div id="contact" className="mb-8">
            <BookingForm />
          </div>
        </section>
      </main>

      <WhatsAppWidget />
      <Footer />

      {/* Service schema */}
      <Script
        id="schema-city-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Photo Booth High Angle Jakarta',
            areaServed: { '@type': 'City', name: 'Jakarta' },
            provider: {
              '@type': 'LocalBusiness',
              name: 'Awwnderful Photo Booth',
              telephone: '+6287772566170',
              areaServed: [
                'Jakarta Pusat',
                'Jakarta Barat',
                'Jakarta Timur',
                'Jakarta Utara',
                'Jakarta Selatan',
                'BSD',
                'Tangerang Selatan',
                'Depok',
                'Bekasi'
              ],
              url: 'https://awwnderful.com/photo-booth-high-angle-jakarta'
            }
          })
        }}
      />

      {/* FAQ schema */}
      <Script
        id="schema-faq-high-angle"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a }
            }))
          })
        }}
      />
    </LanguageProvider>
  )
}
