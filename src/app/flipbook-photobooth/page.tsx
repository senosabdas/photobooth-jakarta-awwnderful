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

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Apa keunggulan flipbook photobooth?',
      a: 'Flipbook photobooth memberikan pengalaman unik foto animasi anda menjadi versi manual yang bisa anda mainkan secara fisik '
    },
    {
      q: 'Berapa harga sewa flipbook photobooth Jakarta?',
      a: 'Harga mulai dari Rp 4.500.000 untuk 50pcs Flipbook Biasa, dan Rp 6.500.000 untuk 75pcs Flipbook Toy. Paket custom juga tersedia sesuai kebutuhan acara Anda.'
    },
    {
      q: 'Apa saja tipe flipbook yang tersedia?',
      a: 'Kami menyediakan dua style flipbook: <strong>Flipbook Biasa (Paper)</strong> dengan kertas premium untuk hasil elegan, dan <strong>Flipbook Toy (3D)</strong> versi mainan interaktif yang bisa diputar-putar. Cocok untuk berbagai jenis acara.'
    },
    {
      q: 'Berapa lama proses setup flipbook photobooth?',
      a: 'Proses pembuatan flipbook memakan waktu 15-25 menit tergantung kompleksitas. Kami membutuhkan area minimal 2x2 meter dan listrik 1000W. Tim teknisi kami akan memastikan semua berfungsi sebelum acara dimulai.'
    },
    {
      q: 'Apakah hasil flipbook bisa di share digital juga?',
      a: 'Ya, Hasil animasi dari flipbook dapat di share digital via email, WhatsApp, atau link khusus galeri online.'
    },
    {
      q: 'Apakah bisa custom branding untuk flipbook?',
      a: 'Tentu! Kami bisa custom logo perusahaan, tema warna, dan overlay branding pada hasil flipbook. Perfect untuk event corporate atau brand activation.'
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
          <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[2/1] rounded-xl overflow-hidden mb-8">
            <Image src="https://photos.smugmug.com/photos/i-3MhHHQQ/0/L2nmFrNjnBK3TjmNhw9kRcqzpTmBSVwwCjkRkxPpH/X3/i-3MhHHQQ-X3.jpg" alt="Flipbook Photobooth Jakarta" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Flipbook Photobooth Jakarta untuk pengalaman foto animasi yang unik!</h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">Hasil flipbook digital instan dengan berbagai efek animasi menghibur.</p>
            </div>

          </div>

          {/* Video Showcase Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Demo Flipbook Photobooth</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Video 1 */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[3/4]">
                  <video
                    src="https://photos.smugmug.com/photos/i-D8bzNDD/0/MgVnzHqHwnKJscWXgBd9d3HCqnrSXQHPSRQx8zPrx/1280/i-D8bzNDD-1280.mp4"
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
                    <h3 className="text-white font-semibold text-sm">Flipbook Paper</h3>
                    <p className="text-gray-300 text-xs">Flipbook dengan kertas photo</p>
                  </div>
                </div>
              </div>
              {/* Video 2 */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[3/4]">
                  <video
                    src="https://photos.smugmug.com/photos/i-5Rf8N6d/0/L6x7nkmWHg7qwB7xLQcFfMnvS9JvZdjtMmfz8PpmP/1920/i-5Rf8N6d-1920.mp4"
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
                    <h3 className="text-white font-semibold text-sm">Flipbook Toye</h3>
                    <p className="text-gray-300 text-xs">Mesin Flipbook dengan gadget penggerak manual</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Long description */}
          <div className="prose prose-invert max-w-none mb-12">
  <p>
    🎭 <strong>Flipbook photobooth Jakarta</strong> membawa pengalaman foto animasi yang revolusioner untuk acara Anda!
    Tamu akan mendapatkan hasil flipbook digital yang bisa langsung dimainkan dan dibagikan,
    menciptakan kenangan yang jauh lebih interaktif dan menghibur.
  </p>

  <p className="mt-6">
    Bersama <strong>Awwnderful</strong>, Anda akan mendapatkan teknologi flipbook terkini dengan berbagai efek animasi menarik.
    Dari wedding hingga corporate event di Jakarta, Bogor, Depok, Tangerang bahkan kami juga bisa melayani area Bandung, Jogja, Surabaya,
    dan Bali. Flipbook photobooth kami siap membuat acara Anda menjadi lebih memorable dengan sentuhan teknologi modern!
  </p>
</div>


          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/photo-camera-outline.svg" alt="Instant Animation Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Animasi Instant</h3>
              <p className="text-gray-300 text-sm">Hasil flipbook langsung terlihat dan bisa dimainkan dalam hitungan detik.</p>
            </div>
    
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/victory.svg" alt="Interactive Experience Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Proses Cepat</h3>
              <p className="text-gray-300">Tim kami dapat membuat proses flipbook secepat mungkin.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/delivery-truck.svg" alt="Free Transport Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Free transport</h3>
              <p className="text-gray-300">Free transport area JABODETABEK / Radius 25km dari posisi kami.</p>
            </div>

            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/megaphone.svg" alt="Custom Branding Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Custom Branding</h3>
              <p className="text-gray-300">Logo perusahaan, tema warna, dan overlay branding sesuai keinginan.</p>
            </div>
  

          </div>

          {/* Workflow Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Workflow</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image 1 */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="https://photos.smugmug.com/photos/i-H5Kn8ms/0/KmZW8KRs8FHc5wfXQqqVsM2cXLH8cv6D2dZ75Rqbv/X3/i-H5Kn8ms-X3.jpg"
                    alt="Step 1: Pose & Capture"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">Step 1: Pose & Capture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dalam contoh ini. Kami memakai Video Greenscreen dengan Treadmil untuk menambah effect berjalan.
                  </p>
                </div>
              </div>
              {/* Video 2 */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[16/9]">
                  <video
                    src="https://photos.smugmug.com/Events/Prambors-50th/Video-Booth/i-HS4wRz8/0/KXhD9n8HDXwN58Lk4FbCWVKhmG2xbKCCx4dNxg7Jk/1280/Awwnderful_Prambors_2021-03-18_16-10-55%20%5B7.00-5.08%5D_mp4-1280.mp4"
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
                  <h3 className="text-white font-semibold text-lg mb-3">Step 2: Hasil video sudah jadi dan siap di share ke email atau scan qr</h3>
                  <p className="text-gray-300 leading-relaxed">
                  </p>
                </div>
              </div>

{/* Image 3 */}
<div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="https://photos.smugmug.com/photos/i-7cd7Mk4/0/K4z2cHSZdXJx8GZrbtnw26nnGPk2PVCsTZKwPHRQ4/XL/i-7cd7Mk4-XL.png"
                    alt="Step 3: Tim kami akan memproses dan merakit flipbook untuk tamu anda"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">Step 3: Tim kami akan memproses dan merakit flipbook untuk tamu anda</h3>
                  <p className="text-gray-300 leading-relaxed">

                  </p>
                </div>
              </div>

{/* Video 4*/}
<div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                <div className="relative aspect-[16/9]">
                  <video
                    src="https://photos.smugmug.com/photos/i-vNZDbRr/0/MM6mJVdPtQzcGkqKfqSx3w6ndLHPJjfxqZzBZFMPb/1920/i-vNZDbRr-1920.mp4"
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
                  <h3 className="text-white font-semibold text-lg mb-3">Step 4: Flipbook sudah jadi dan siap dibagikan untuk tamu</h3>
                  <p className="text-gray-300 leading-relaxed">
                  </p>
                </div>
              </div>


            </div>
          </section>




          {/* Pricing Section - Flipbook Photobooth */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Paket Flipbook Photobooth</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Kami menyediakan <strong>dua style flipbook</strong>: Flipbook Toy (versi mainan 3D) dan Flipbook Biasa (versi paper klasik).
              Pilih paket yang sesuai dengan kebutuhan acara Anda.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: 'Paket Basic',
                  style: 'Flipbook Biasa',
                  image: '/images/services/custom-photo-print-jakarta/custom-flipbook-photo-print-jakarta.webp',
                  points: ['50pcs flipbook paper', 'Custom branding', 'Tim dedicated'],
                  price: 'Mulai Rp 2.500.000',
                  featured: false
                },
                {
                  name: 'Paket Premium',
                  style: 'Flipbook Toy',
                  image: '/images/services/custom-photo-print-jakarta/flipbook-photobooth-jakarta.webp',
                  points: ['50pcs flipbook toy', 'Custom branding', 'Tim dedicated'],
                  price: 'Mulai Rp 4.000.000',
                  featured: true
                },
                {
                  name: 'Paket Custom',
                  style: 'Custom Flipbook',
                  image: '/images/services/custom-photo-print-jakarta/flipbook-photobooth-jakarta.webp',
                  points: [ 'add AI effect style', 'add custom design', 'Cetak fisik foto tambahan'],
                  price: 'Call Us',
                  featured: false
                },
              ].map((p) => (
                <div key={p.name} className={`bg-white/5 border rounded-2xl p-6 ${p.featured ? 'border-2 border-purple-600 relative overflow-hidden' : 'border-gray-700'}`}>
                  {p.featured && (
                    <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase z-10">
                      Popular
                    </div>
                  )}
                  {/* Package Image */}
                  <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`${p.name} - ${p.style}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-1">{p.name}</h3>
                  <p className="text-purple-400 text-sm mb-3 font-medium">{p.style}</p>
                  <p className="text-white font-bold text-2xl mb-4">{p.price}</p>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    {p.points.map(pt => <li key={pt} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{pt}</span>
                    </li>)}
                  </ul>
                  <Link href={ctaHref} className="inline-block w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors">
                    Pilih Paket
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-gray-700/50">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-semibold text-xl mb-4">🎭 Flipbook Toy (3D)</h3>
                  <p className="text-gray-300 mb-4">
                    Flipbook versi mainan 3D yang bisa diputar-putar. Lebih interaktif dan menarik untuk anak-anak atau acara yang ingin lebih playful.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Material karton premium</li>
                    <li>• Efek 3D yang smooth</li>
                    <li>• Cocok untuk event anak & family</li>
                    <li>• Harga mulai Rp 6.500.000 (75pcs)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-4">📖 Flipbook Biasa (Paper)</h3>
                  <p className="text-gray-300 mb-4">
                    Flipbook klasik dengan kertas berkualitas tinggi. Lebih elegan dan sesuai untuk acara formal atau branding.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Kertas art paper 120gsm</li>
                    <li>• Finishing laminasi glossy</li>
                    <li>• Cocok untuk corporate & wedding</li>
                    <li>• Harga mulai Rp 4.500.000 (50pcs)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href={ctaHref} className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                Konsultasi & Penawaran Custom
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          <HasilOutput title="Hasil Output Photobooth lainnya" />
          <ChooseBackdrop />

          <ArtikelLainnya serviceType="event" />

          {/* Services Section */}
          <ServiceGrid />



          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Area Layanan</h2>
            <p className="text-gray-300">
              Jakarta Pusat, Jakarta Barat, Jakarta Timur, Jakarta Utara, Jakarta Selatan — juga sekitar: BSD/Tangerang Selatan, Depok, dan Bekasi.
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
                  FAQ Flipbook Photobooth Jakarta
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Pertanyaan umum tentang layanan flipbook photobooth di Jakarta
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
                                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Subtle Shadow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-300 ${
                        openFaqIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}></div>
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

      <Script id="schema-flipbook" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Flipbook Photobooth Jakarta',
            areaServed: { '@type': 'City', name: 'Jakarta' },
            provider: {
              '@type': 'LocalBusiness',
              name: 'Awwnderful Photo Booth',
              telephone: '+6287772566170',
              areaServed: ['Jakarta Pusat','Jakarta Barat','Jakarta Timur','Jakarta Utara','Jakarta Selatan','BSD','Tangerang Selatan','Depok','Bekasi'],
              url: 'https://awwnderful.com/flipbook-photobooth'
            }
          })
        }}
      />
      <Script id="schema-faq" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
          })
        }}
      />
    </LanguageProvider>
  )
}