'use client'

import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import Link from 'next/link'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Image from 'next/image'
import LinkedImageGrid from '@/components/LinkedImageGrid'
import OutputGrid from '@/components/OutputGrid'
import BackdropGallerySlider from '@/components/BackdropGallerySlider'
import { ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Bagaimana alurnya menggunakan kamera disposable digital?',
      a: 'Tamu menerima kamera kecil dengan strap/lanyard, memotret momen candid selama acara, kemudian mengembalikan kamera. Semua foto otomatis terunggah ke galeri digital pribadi yang bisa diakses via QR code atau link khusus.'
    },
    {
      q: 'Berapa unit kamera yang dibutuhkan untuk acara?',
      a: 'Tergantung skala acara: 10-20 unit untuk gathering kecil (50-100 tamu), 20-40 unit untuk acara medium (100-300 tamu), dan 40-80 unit untuk acara besar (300+ tamu). Kami siap konsultasi kebutuhan spesifik.'
    },
    {
      q: 'Apakah kamera mudah digunakan oleh semua usia?',
      a: 'Ya, desainnya sangat sederhana dengan tombol power, shutter, dan zoom otomatis. Instruksi visual dengan emoji dan bahasa sederhana, cocok untuk remaja hingga orang tua.'
    },
    {
      q: 'Berapa lama masa aktif kamera selama acara?',
      a: 'Setiap unit aktif selama 4-6 jam non-stop dengan baterai tahan lama. Kami siapkan unit backup dan tim teknis untuk pergantian baterai jika diperlukan.'
    },
    {
      q: 'Bagaimana cara tamu mendapatkan hasil fotonya?',
      a: 'Setiap kamera memiliki QR code unik yang langsung mengarah ke galeri pribadi tamu. Alternatifnya, kami kirim link download via email/WhatsApp setelah acara selesai.'
    },
    {
      q: 'Apakah ada fitur khusus seperti filter atau efek?',
      a: 'Ya, tersedia filter retro, efek vintage, dan overlay tema acara. Semua hasil tetap natural dan berkualitas tinggi, bukan hasil edit berlebihan.'
    },
    {
      q: 'Berapa biaya sewa kamera disposable digital Jakarta?',
      a: 'Mulai dari Rp150.000 per unit untuk durasi 4 jam, dengan paket hemat mulai 10 unit. Harga sudah termasuk setup, tim operator, dan galeri digital unlimited.'
    },
    {
      q: 'Apakah bisa custom tema dan branding?',
      a: 'Tentu! Kami bisa custom strap dengan logo perusahaan, tema warna acara, atau pesan khusus. Bahkan bisa tambah props pendukung untuk memperkaya pengalaman.'
    },
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
            <Image src="https://photos.smugmug.com/photos/i-R83BQGs/0/M3qgjHw5m7njKWzf3mbMtZsnrSNRSgNNQg7DpSC8k/X3/i-R83BQGs-X3.png" alt="Kamera Disposable Digital Jakarta" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Kamera Disposable Digital Jakarta</h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">Nostalgia kamera sekali pakai—versi digital yang seru dan instan!</p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href={ctaHref} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
                Cek Paket & Harga
              </Link>
              <a
                href="https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20saya%20ingin%20tanya%20kamera%20disposable%20digital%20untuk%20Jakarta."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
              >
                Chat WhatsApp
              </a>
            </div>
            {/* Related Services */}
            <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
              <Link href="/photo-booth-wedding-jakarta" className="px-3 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20">Photo Booth Wedding Jakarta</Link>
              <Link href="/photo-booth-360-jakarta" className="px-3 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-white/20">Photo Booth 360 Jakarta</Link>
              <Link href="/#services" className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20">Learn more services</Link>
            </div>
          </div>


          {/* Long description */}
          <div className="prose prose-invert max-w-none mb-12">
  <p>
    🌟 <strong>Kamera disposable digital Jakarta</strong> membawa konsep nostalgia kamera sekali pakai ke era modern!
    Tamu berkeliling memotret momen candid dengan kamera kecil yang ringan dan mudah digunakan.
    Hasilnya langsung terunggah ke galeri digital pribadi—tanpa ribet print atau antri panjang.
  </p>

  <p className="mt-6">
    Di <strong>Awwnderful</strong>, kami menyediakan unit kamera premium dengan kualitas gambar HD,
    baterai tahan lama, dan fitur canggih seperti filter retro otomatis. Cocok untuk wedding, ulang tahun,
    corporate gathering, hingga festival seru di Jakarta dan sekitarnya.
  </p>
</div>



          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/photography-equipment-black-background-(1)-copy.svg" alt="Mudah Digunakan Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Super Mudah Digunakan</h3>
              <p className="text-gray-300 text-sm">Point and shoot saja—cocok semua usia, dari anak kecil sampai orang tua.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/branding-icon.svg" alt="Galeri Digital Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Galeri Digital Unlimited</h3>
              <p className="text-gray-300">Semua foto langsung tersimpan dan bisa diakses kapan saja via link pribadi.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/victory.svg" alt="Filter Retro Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Filter Retro Otomatis</h3>
              <p className="text-gray-300">Efek vintage dan filter menarik langsung ter-aplikasi tanpa ribet editing.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/glasses-and-moustache.svg" alt="Custom Branding Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Bisa Custom Branding</h3>
              <p className="text-gray-300">Strap dengan logo perusahaan atau tema acara sesuai keinginan Anda.</p>
            </div>

            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/delivery-truck.svg" alt="Free Transport Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Free Transport Jabodetabek</h3>
              <p className="text-gray-300">Gratis antar-jemput dalam area Jakarta, Bogor, Depok, Tangerang, dan Bekasi.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/print-copy.svg" alt="Tim Profesional Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Tim Operator Berpengalaman</h3>
              <p className="text-gray-300">Setup cepat, distribusi kamera efisien, dan support teknis selama acara.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/megaphone.svg" alt="Instant Upload Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Upload Instant</h3>
              <p className="text-gray-300">Foto langsung terkirim ke cloud storage—tidak ada yang hilang atau tertinggal.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="mb-4">
                <Image src="/icon/picture.svg" alt="High Quality Icon" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
              </div>
              <h3 className="text-white font-semibold mb-2">Kualitas HD Premium</h3>
              <p className="text-gray-300">Sensor kamera berkualitas tinggi dengan resolusi 12MP untuk hasil maksimal.</p>
            </div>
          </div>


          {/* Image Gallery Slider */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Galeri Setup & Hasil Foto</h2>
            <BackdropGallerySlider />
          </section>

          {/* Related Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Layanan Terkait</h2>
            <LinkedImageGrid
              items={[
                { href: '/photo-booth-keliling-jakarta', src: '/images/lookbook-photo-booth-jakarta/roaming-obooth-4.webp', alt: 'Photobooth Keliling Jakarta' },
                { href: '/sewa-photo-booth-jakarta', src: '/images/services/boothbox-photo-booth-jakarta/boothbox-photo-booth-jakarta-photobox-setup-1.webp', alt: 'Sewa Photo Booth Jakarta' },
                { href: '/photo-booth-event-jakarta', src: '/images/services/photo-booth-gif-jakarta/sewa-photo-booth-dslr-setup-jakarta-1.webp', alt: 'Photo Booth Event Jakarta' },
              ]}
            />
          </div>

          {/* Hasil Output */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Contoh Hasil Output</h2>
            <OutputGrid images={[
              { src: '/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-12.webp', alt: 'Hasil Foto Disposable Camera 1' },
              { src: '/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-7.webp', alt: 'Hasil Foto Disposable Camera 2' },
              { src: '/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-35.mp4', alt: 'Video Hasil Disposable Camera' }
            ]} />
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
                  FAQ Kamera Disposable Digital Jakarta
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Pertanyaan umum tentang layanan kamera disposable digital di Jakarta
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

      <Script id="schema-disposable-camera" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Kamera Disposable Digital Jakarta',
            areaServed: {
              '@type': 'City',
              name: 'Jakarta'
            },
            provider: {
              '@type': 'LocalBusiness',
              name: 'Awwnderful Photo Booth',
              telephone: '+6287772566170',
              areaServed: ['Jakarta Pusat','Jakarta Barat','Jakarta Timur','Jakarta Utara','Jakarta Selatan','BSD','Tangerang Selatan','Depok','Bekasi'],
              url: 'https://awwnderful.com/camera-disposable-digital-jakarta'
            },
            description: 'Kamera disposable digital untuk event di Jakarta dengan galeri online instan dan filter retro otomatis.',
            offers: {
              '@type': 'Offer',
              priceRange: 'Rp2.500.000 - Rp12.000.000',
              availability: 'https://schema.org/InStock'
            }
          })
        }}
      />
      <Script id="schema-faq-disposable" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.a
              }
            }))
          })
        }}
      />
    </LanguageProvider>
  )
}
