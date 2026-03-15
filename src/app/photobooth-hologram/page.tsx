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

const hologramGallery = [
  {
    id: 1,
    src: '/images/services/custom-photo-print-jakarta/hologram-photobooth-sample-jakarta-3.webp',
    alt: 'Display panel hologram photobooth',
    title: 'Panel Hologram Acrylic',
    category: 'Display'
  },
  {
    id: 2,
    src: '/images/services/custom-photo-print-jakarta/hologram-photobooth-sample-jakarta-1.webp',
    alt: 'Depth capture hologram photobooth',
    title: 'Depth Capture Moment',
    category: 'Capture'
  }
]

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Apa keunggulan hologram photobooth dibanding photobooth biasa?',
      a: 'Hologram photobooth menghadirkan efek 3D yang dapat dilihat dari berbagai sudut.'
    },
    {
      q: 'Berapa kebutuhan area dan daya listrik?',
      a: 'Kami membutuhkan area ±2.5x2.5 meter untuk capture zone + Meja untuk tim aplikasi hologram, serta listrik 1.500W yang stabil. Tim teknisi akan melakukan pre-check 60 menit sebelum acara dimulai.'
    },
    {
      q: 'Bisakah branding tampil di panel hologram?',
      a: 'Bisa. Kami dapat memasukkan logo, CTA, hingga frame tematik ke dalam overlay hologram maupun casing display. Tersedia juga opsi wrapping untuk casing photobooth.'
    },
    {
      q: 'Output apa saja yang didapatkan tamu?',
      a: 'Selain hologram fisik, tamu mendapat versi video/MP4 untuk dibagikan via WhatsApp, QR download, atau email blast. Semua data dapat dipantau via dashboard event.'
    },
    {
      q: 'Berapa estimasi setup & throughput?',
      a: 'Setup sekitar 90 menit. Proses capture tiap tamu ±40 detik dan render hologram 1–2 menit tergantung kompleksitas animasi.'
    },
    {
      q: 'Apakah bisa integrasi data capture atau gamification?',
      a: 'Ya. Kami dapat menambahkan form data capture, leaderboard interaktif, hingga mekanisme point collection berdasarkan jumlah share atau scan.'
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
            <Image src="/images/services/custom-photo-print-jakarta/hologram-photobooth-sample-jakarta-3.webp" alt="Hologram Photobooth Jakarta" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Hologram Photobooth Jakarta untuk style 3D yang unik</h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">Tangkap pose tamu, render jadi hologram hidup, dan tampilkan di panel acrylic premium.</p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Demo Hologram Photobooth</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[3/4]">
                  <video
                    src="/images/services/custom-photo-print-jakarta/hologram-photobooth-sample-jakarta-1.mp4"
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
                    <h3 className="text-white font-semibold text-sm">Depth Capture Session</h3>
                    <p className="text-gray-300 text-xs">Multi-camera rig dengan lighting cinematic</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[3/4]">
                  <video
                    src="/images/services/custom-photo-print-jakarta/hologram-photobooth-sample-jakarta-2.mp4"
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
                    <h3 className="text-white font-semibold text-sm">Live Display Output</h3>
                    <p className="text-gray-300 text-xs">Panel hologram acrylic 90° dengan branding custom</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="prose prose-invert max-w-none mb-12">
            <p>
              ✨ <strong>Hologram photobooth Awwnderful</strong> menghadirkan instalasi interaktif yang langsung menarik perhatian. Setiap pose direkam menggunakan multi-angle camera rig dan diproses menjadi hologram 3D yang tampak melayang di atas panel acrylic.
            </p>
            <p className="mt-6">
              Layanan ini ideal untuk product launch, brand activation, hingga private celebration yang ingin menunjukkan sentuhan futuristik. Kami melayani Jakarta, Bogor, Depok, Tangerang, Bekasi, serta kota besar lain seperti Bandung, Jogja, Surabaya, dan Bali.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/photo-camera-outline.svg" alt="3D capture" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Efek 3D Real-Time</h3>
              <p className="text-gray-300 text-sm">Sensor depth & AR pipeline membuat hologram tampak melayang nyata.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/victory.svg" alt="Brand impact" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Aktivasi Brandable</h3>
              <p className="text-gray-300 text-sm">Overlay, casing, dan pedestal dapat disesuaikan dengan campaign Anda.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/delivery-truck.svg" alt="Operational ready" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Operasional Ringkas</h3>
              <p className="text-gray-300 text-sm">Tim onsite, setup cepat, dan modul display modular.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/megaphone.svg" alt="Digital sharing" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Instant Sharing</h3>
              <p className="text-gray-300 text-sm">Hasil hologram juga tersedia dalam format video untuk dibagikan.</p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Workflow Hologram Photobooth</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[16/9]">
                  <Image src="/images/services/photo-booth-gif-jakarta/photo-booth-classic-setup-jakarta-4.webp" alt="Step 1: Capture" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">Step 1: Pose & Capture</h3>
                  <p className="text-gray-300 leading-relaxed">Tamu diarahkan berpose pada rig depth camera dengan lighting cinematic.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[16/9]">
                  <video
                    src="https://photos.smugmug.com/Events/Bani-17th/Animated/i-J2H9Swc/0/M6p8m253JVbgK8nWZ2MzjFgGsZfbLzDL4tcZRzkMs/1280/20250322_191714_203_1x-1280.mp4"
                    className="w-full h-full object-contain"
                    controls
                    muted
                    loop
                    autoPlay
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">Step 2: Captured photo is turned into animated GIF</h3>
                  <p className="text-gray-300 leading-relaxed">Hasil foto dijadikan 1 menjadi animasi GIF.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[16/9]">
                  <Image src="https://photos.smugmug.com/photos/i-7cd7Mk4/0/K4z2cHSZdXJx8GZrbtnw26nnGPk2PVCsTZKwPHRQ4/XL/i-7cd7Mk4-XL.png" alt="Step 3: Display prep" fill className="object-contain" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">Step 3: Display Prep</h3>
                  <p className="text-gray-300 leading-relaxed">Output dicetak dan tim kami memasang lembar hologram & kalibrasi viewing angle.</p>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[16/9]">
                  <video
                    src="/images/services/custom-photo-print-jakarta/hologram-photobooth-sample-jakarta-3.mp4"
                    className="w-full h-full object-contain"
                    controls
                    muted
                    loop
                    autoPlay
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">Step 4: Display & Share</h3>
                  <p className="text-gray-300 leading-relaxed">Tamu menikmati hologram fisik dan menerima versi digital via QR.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Sample Display & Media</h2>
            <BackdropGallerySlider images={hologramGallery} />
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Use Case Favorit</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Product Launch',
                  desc: 'Tampilkan hero product dalam bentuk hologram interaktif untuk menarik crowd.'
                },
                {
                  title: 'Corporate Gala',
                  desc: 'Sediakan experience futuristik yang dapat dikombinasikan dengan AR invitation.'
                },
                {
                  title: 'Retail & Pop-Up',
                  desc: 'Buat corner experiential untuk mengumpulkan data leads secara fun.'
                }
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section - Hologram Photobooth */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Paket Hologram Photobooth Jakarta</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Layanan hologram photobooth premium dengan teknologi AR dan panel display acrylic. Pilih paket yang sesuai dengan skala event Anda.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: 'Paket Hologram 2R',
                  duration: '50pcs hologram',
                  features: ['Hologram display acrylic', 'Multi-camera depth capture', 'Basic branding overlay', 'Video output MP4', 'Setup & pickup included'],
                  price: 'Mulai Rp 3.000.000',
                  featured: false
                },
                {
                  name: 'Paket Hologram 4R',
                  duration: '50pcs hologram',
                  features: ['Hologram display acrylic', 'Multi-camera depth capture', 'Basic branding overlay', 'Video output MP4', 'Setup & pickup included'],
                  price: 'Mulai Rp 4.500.000',
                  featured: true
                },
                {
                  name: 'Paket Unlimited hologram',
                  duration: 'Unlimited hologram',
                  features: ['Full custom hologram design', 'Data capture & analytics', 'Unlimited hologram', 'Post-event reporting'],
                  price: 'Contact Us',
                  featured: false
                },
              ].map((p) => (
                <div key={p.name} className={`bg-white/5 border rounded-2xl p-6 ${p.featured ? 'border-2 border-purple-600 relative overflow-hidden' : 'border-gray-700'}`}>
                  {p.featured && (
                    <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase z-10">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-white font-semibold text-lg mb-2">{p.name}</h3>
                  <p className="text-purple-400 text-sm mb-3 font-medium">{p.duration}</p>
                  <p className="text-white font-bold text-2xl mb-4">{p.price}</p>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    {p.features.map(feature => <li key={feature} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>)}
                  </ul>
                  <Link href={ctaHref} className="inline-block w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors">
                    Konsultasi Gratis
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-gray-700/50">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-semibold text-xl mb-4">🎯 Teknologi Unggul</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Team Profesional</li>
                    <li>• Kamera Jernih</li>
                    <li>• Lighting Flash Studio Grade</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-4">💫 Fitur Premium</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Custom branding option</li>
                    <li>• Interactive touch controls</li>
                    <li>• QR code digital sharing</li>
                    <li>• Live monitoring dashboard</li>
                    <li>• Post-event analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-white/5 border border-gray-700 rounded-2xl p-6 mb-6">
                <h3 className="text-white font-semibold text-lg mb-2">💡 Harga Estimasi</h3>
                <p className="text-gray-300 text-sm">
                  Harga di atas adalah estimasi untuk area Jakarta. Biaya dapat bervariasi tergantung lokasi, durasi, dan kompleksitas custom requirements.
                  <strong> Hubungi kami untuk konsultasi gratis dan penawaran terbaik.</strong>
                </p>
              </div>
              <Link href={ctaHref} className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                Request Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          <HasilOutput title="Hasil Output Hologram & Photobooth Lainnya" />
          <ChooseBackdrop />

          <ArtikelLainnya serviceType="event" />
          <ServiceGrid />

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Area Layanan</h2>
            <p className="text-gray-300">
              Jakarta Pusat, Jakarta Barat, Jakarta Timur, Jakarta Utara, Jakarta Selatan — juga sekitar: BSD/Tangerang Selatan, Depok, Bekasi, serta kota besar lain sesuai permintaan.
            </p>
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
                  FAQ Hologram Photobooth Jakarta
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Semua yang perlu Anda ketahui sebelum mengaktifkan hologram photobooth.
                </p>
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
                              className={`w-8 h-8 rounded-fullpresa flex items-center justify-center text-sm font-bold transition-all duration-300 ${
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

                          <div
                            className={`relative transition-all duration-300 ${
                              openFaqIndex === index ? 'rotate-180' : 'group-hover:scale-110'
                            }`}
                          >
                            <ChevronDown
                              className={`w-6 h-6 transition-colors duration-300 ${
                                openFaqIndex === index ? 'text-purple-400' : 'text-gray-400 group-hover:text-purple-300'
                              }`}
                            />
                            <div
                              className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md transition-opacity duration-300 ${
                                openFaqIndex === index ? 'opacity-100' : 'opacity-0'
                              }`}
                            ></div>
                          </div>
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
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

      <Script
        id="schema-hologram"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Hologram Photobooth Jakarta',
            areaServed: { '@type': 'City', name: 'Jakarta' },
            provider: {
              '@type': 'LocalBusiness',
              name: 'Awwnderful Photo Booth',
              telephone: '+6287772566170',
              areaServed: ['Jakarta Pusat', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Utara', 'Jakarta Selatan', 'BSD', 'Tangerang Selatan', 'Depok', 'Bekasi'],
              url: 'https://awwnderful.com/photobooth-hologram'
            },
            serviceType: 'Hologram Photobooth',
            description: 'Layanan hologram photobooth dengan efek 3D interaktif untuk event di Jakarta dan sekitarnya.'
          })
        }}
      />
      <Script
        id="schema-faq"
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