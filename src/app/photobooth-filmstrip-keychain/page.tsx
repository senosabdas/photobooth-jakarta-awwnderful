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

const gallery = [
  {
    id: 1,
    src: '/images/services/custom-photo-print-jakarta/filmstrip-photo-booth-jakarta/filmstrip.webp',
    alt: 'Film strip keychain custom acrylic',
    title: 'Acrylic Film Strip Keychain',
    category: 'Souvenir'
  },
  {
    id: 2,
    src: '/images/services/custom-photo-print-jakarta/filmstrip-photo-booth-jakarta/filmstrip-keychain-photobooth-jakarta-option.jpg',
    alt: 'Film strip keychain custom acrylic',
    title: 'Acrylic Film Strip Keychain',
    category: 'Souvenir'
  }
]

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Apa itu Film Strip Photobooth Keychain?',
      a: 'Ini adalah photobooth dengan output film strip 4 frame + versi keychain acrylic. Foto diambil vertikal, dicetak instan, lalu dimasukkan ke casing keychain dengan branding khusus.'
    },
    {
      q: 'Berapa kebutuhan area dan daya?',
      a: 'Luas minimum 2×2 meter untuk backdrop dan meja finishing, dengan daya listrik 1.000W. Kami tiba 60 menit sebelum acara untuk setup & quality check.'
    },
    {
      q: 'Bisakah desain film strip dan keychain di-custom?',
      a: 'Bisa. Layout film strip, warna frame, logo, hingga packaging keychain dapat disesuaikan dengan campaign atau tema wedding Anda.'
    },
    {
      q: 'Berapa throughput per jam?',
      a: 'Rata-rata 40–60 tamu/jam. Kami membawa operator tambahan untuk membantu cutting & assembly agar antrean tetap cepat.'
    },
    {
      q: 'Output digital tersedia?',
      a: 'Setiap capture otomatis dikirim ke galeri online + QR untuk download. Kami juga bisa menambahkan e-mail blast atau WhatsApp autoresponder.'
    },
    {
      q: 'Apakah bisa bundling dengan layanan lain?',
      a: 'Ya, bisa dipaketkan dengan GIF booth, video booth, atau custom backdrop sehingga tamu mendapat lebih dari satu pengalaman.'
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
          <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[2/1] rounded-xl overflow-hidden mb-8">
            <Image
              src="/images/services/custom-photo-print-jakarta/filmstrip-photo-booth-jakarta/filmstrip.webp"
              alt="Film Strip Photobooth Keychain Jakarta"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Film Strip Photobooth Keychain Jakarta</h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">Foto 4 frame, cetak film strip, langsung jadi keychain acrylic personal.</p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Demo Film Strip & Keychain</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[3/4]">
                  <video
                    src="/images/services/custom-photo-print-jakarta/filmstrip-photo-booth-jakarta/filmstrip-keychain-photobooth-jakarta-video.mp4"
                    className="w-full h-full object-cover"
                    controls
                    muted
                    loop
                    autoPlay
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-semibold text-sm">Hasil filmstrip</h3>
                    <p className="text-gray-300 text-xs">Dengan kertas film transparan mengikuti roll film dan bisa di branding.</p>
                  </div>
                </div>
              </div>

            
            </div>
          </section>

          <div className="prose prose-invert max-w-none mb-12">
            <p>
              🎞️ <strong>Film Strip Photobooth Keychain</strong> menghadirkan gimmick retro yang dikemas modern. Setelah sesi foto, tamu langsung menerima film strip print + versi mini yang dirakit menjadi keychain acrylic premium.
            </p>
            <p className="mt-6">
              Ideal untuk wedding, brand activation, maupun private party yang ingin souvenir personal tapi tetap instagramable. Tim Awwnderful menangani desain strip, produksi frame, hingga packaging agar tinggal pakai di venue Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: '/icon/photo-camera-outline.svg',
                title: '4 Pose Signature',
                desc: 'Guided posing agar tiap frame punya mood berbeda namun tetap cohesive.'
              },
              {
                icon: '/icon/victory.svg',
                title: 'Keychain Premium',
                desc: 'Menggunakan acrylic bening & ring metal sehingga tahan lama.'
              },
              {
                icon: '/icon/delivery-truck.svg',
                title: 'Assembly Onsite',
                desc: 'Meja finishing + crew tambahan agar souvenir selesai < 2 menit.'
              },
              {
                icon: '/icon/megaphone.svg',
                title: 'Full Branding',
                desc: 'Strip template, packaging, hingga charm bisa disesuaikan campaign.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center min-h-[200px]">
                <div className="mb-4">
                  <Image src={item.icon} alt={item.title} width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Workflow</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  type: 'image',
                  src: '/images/services/photo-booth-gif-jakarta/photo-booth-classic-setup-jakarta-1.webp',
                  title: 'Step 1: Capture & Pose',
                  desc: 'Crew memberi direction, memastikan pencahayaan dan pose yang baik.'
                },
                {
                  type: 'video',
                  src: 'https://photos.smugmug.com/photos/i-RCJHmcr/0/LfNpZr3QpTH9Tf8PkkFPNrD4xdsg9WkzSVbJWKT3Q/640/i-RCJHmcr-640.mp4',
                  title: 'Step 2: Print & Laminate',
                  desc: 'Hasil foto di cetak di mesin printer'
                },
                {
                  type: 'image',
                  src: 'https://photos.smugmug.com/photos/i-7cd7Mk4/0/K4z2cHSZdXJx8GZrbtnw26nnGPk2PVCsTZKwPHRQ4/XL/i-7cd7Mk4-XL.png',
                  title: 'Step 3: Cutting & Insert',
                  desc: 'Crew memotong strip sesuai ukuran keychain, memastikan presisi.'
                },
                {
                  type: 'image',
                  src: '/images/services/custom-photo-print-jakarta/filmstrip-photo-booth-jakarta/filmstrip.webp',
                  title: 'Step 4: Ready to Wear',
                  desc: 'Keychain filmstrip siap dibagikan + QR untuk download versi digital.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                  <div className="relative aspect-[16/9]">
                    {item.type === 'image' ? (
                      <Image src={item.src} alt={item.title} fill className="object-cover" />
                    ) : (
                      <video src={item.src} className="w-full h-full object-contain" controls muted loop autoPlay playsInline>
                        Your browser does not support the video tag.
                      </video>
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

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Gallery & Media</h2>
            <BackdropGallerySlider images={gallery} />
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Use Case Favorit</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Wedding & Engagement', desc: 'Souvenir couple + tamu yang bisa dipakai setiap hari.' },
                { title: 'Brand Activation', desc: 'Tambahkan CTA atau voucher mini pada packaging keychain.' },
                { title: 'Retail / Pop-Up', desc: 'Dorong traffic booth dengan gimmick limited keychain.' }
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <HasilOutput title="Hasil Output Film Strip & Photobooth Lainnya" />
          <ChooseBackdrop />
          <ArtikelLainnya serviceType="event" />
          <ServiceGrid />

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Area Layanan</h2>
            <p className="text-gray-300">Jakarta, Bogor, Depok, Tangerang, Bekasi, serta kota besar lainnya sesuai permintaan.</p>
          </div>

          <section className="relative py-16 mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-purple-900/10 to-gray-800 -z-10 rounded-2xl"></div>
            <div className="absolute inset-0 overflow-hidden -z-10 rounded-2xl">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pink-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 px-6 py-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  FAQ Film Strip Photobooth Keychain
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">Jawaban singkat untuk pertanyaan paling sering dari klien kami.</p>
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
                            <div
                              className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md transition-opacity duration-300 ${
                                openFaqIndex === index ? 'opacity-100' : 'opacity-0'
                              }`}
                            ></div>
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

      <Script
        id="schema-filmstrip"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Film Strip Photobooth Keychain Jakarta',
            areaServed: { '@type': 'City', name: 'Jakarta' },
            provider: {
              '@type': 'LocalBusiness',
              name: 'Awwnderful Photo Booth',
              telephone: '+6287772566170',
              areaServed: ['Jakarta Pusat', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Utara', 'Jakarta Selatan', 'BSD', 'Tangerang Selatan', 'Depok', 'Bekasi'],
              url: 'https://awwnderful.com/photobooth-filmstrip-keychain'
            },
            serviceType: 'Film Strip Photobooth Keychain',
            description: 'Layanan photobooth dengan output film strip 4 pose dan keychain acrylic personalized.'
          })
        }}
      />
      <Script
        id="schema-faq-filmstrip"
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