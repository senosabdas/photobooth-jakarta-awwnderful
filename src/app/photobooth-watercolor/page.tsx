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
import { ChevronDown, ArrowRight, ArrowLeft, Palette, Scroll, Printer, Brush } from 'lucide-react'
import { useState } from 'react'

// GANTI DENGAN GAMBAR WATERCOLOR ANDA YANG SEBENARNYA
const gallery = [
 
  {
    id: 3,
    src: '/images/services/watercolor/watercolor-photobooth-prints.webp',
    alt: 'Display hasil cetak lukisan cat air di meja gallery',
    title: 'Gallery Display',
    category: 'Showcase'
  },
  {
    id: 2,
    src: '/images/services/watercolor/watercolor-photobooth-style-1.png',
    alt: 'Style lukisan watercolor pertama yang tersedia',
    title: 'Watercolor Style 1',
    category: 'Style'
  },
  {
    id: 1,
    src: '/images/services/watercolor/watercolor-photobooth-style-2.png',
    alt: 'Style lukisan watercolor kedua yang tersedia',
    title: 'Watercolor Style 2',
    category: 'Style'
  },
  {
    id: 4,
    src: '/images/services/watercolor/hero-watercolor.webp',
    alt: 'Hero image layanan watercolor AI photobooth Jakarta',
    title: 'Watercolor Hero',
    category: 'Hero'
  },
  {
    id: 5,
    src: '/images/services/watercolor/watercolor-photobooth-after.jpg',
    alt: 'Hasil transformasi foto menjadi lukisan cat air',
    title: 'After Transformation',
    category: 'Process'
  },
  {
    id: 6,
    src: '/images/services/watercolor/watercolor-photobooth-before.jpg',
    alt: 'Foto asli sebelum diubah menjadi lukisan cat air',
    title: 'Before Transformation',
    category: 'Process'
  },
  {
    id: 7,
    src: '/images/services/watercolor/watercolor-photobooth-result-2.webp',
    alt: 'Contoh hasil watercolor photobooth portrait kedua',
    title: 'Fine Art Portrait 2',
    category: 'Output'
  },
  {
    id: 8,
    src: '/images/services/watercolor/watercolor-photobooth-result-3.png',
    alt: 'Contoh hasil watercolor photobooth portrait ketiga',
    title: 'Fine Art Portrait 3',
    category: 'Output'
  },

]

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Apa itu Watercolor AI Photobooth?',
      a: 'Watercolor AI Photobooth adalah layanan photobooth yang mengubah hasil foto kamu menjadi style watercolor. Dengan teknologi AI kami membuat style watercolor semirip mungkin photobooth ini di print di atas kertas khusus yang menyerupai lukisan'
    },
    {
      q: 'Apakah prosesnya lama?',
      a: 'Proses AI hanya memakan waktu sekitar 10-15 detik setelah foto diambil. Total waktu dari capture hingga cetakan selesai keluar sekitar 45-60 detik per sesi.'
    },
    {
      q: 'Jenis kertas apa yang digunakan?',
      a: 'Kami menggunakan kertas *fine art* atau *textured matte paper* yang tebal dan memiliki tekstur seperti kertas lukis asli. Ini kunci agar hasil cetak terasa seperti karya seni, bukan sekadar foto.'
    },
    {
      q: 'Bisakah style lukisannya di-custom?',
      a: 'Ya, style lukisan bisa kami ubah sesuai request kalian..'
    },
    {
      q: 'Apakah tamu mendapatkan file digitalnya?',
      a: 'Tentu. Tamu akan mendapatkan dua versi digital via QR Code/Email: foto asli (sebelum efek) dan hasil karya seni watercolor digital.'
    },
    {
      q: 'Cocok untuk acara jenis apa?',
      a: 'Sangat cocok untuk acara yang mengutamakan estetika tinggi, seperti luxury wedding, gala dinner, peluncuran produk premium, atau pameran seni.'
    }
  ]

  const ctaHref = '#contact'

  return (
    <LanguageProvider>
      <Head>
        <title>Watercolor AI Photobooth Jakarta — Ubah Foto Jadi Lukisan Seni | Awwnderful</title>
        <meta
          name="description"
          content="Watercolor AI Photobooth Jakarta — Pengalaman photobooth artistik yang mengubah foto tamu menjadi lukisan cat air instan dan dicetak pada kertas fine art bertekstur. Souvenir premium nan elegan."
        />
        <meta property="og:title" content="Watercolor AI Photobooth Jakarta — Awwnderful Art Experience" />
        <meta property="og:description" content="Ubah tamu Anda menjadi karya seni. Foto diubah jadi lukisan watercolor via AI dan dicetak di kertas bertekstur khusus. Elegan & Premium." />
        {/* GANTI IMAGE INI DENGAN HERO IMAGE WATERCOLOR */}
        <meta property="og:image" content="https://awwnderful.com/images/services/watercolor/hero-watercolor.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://awwnderful.com/watercolor-photobooth" />
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
          {/* HERO SECTION */}
          <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[2/1] rounded-xl overflow-hidden mb-8">
            {/* GANTI SRC INI DENGAN FOTO HERO WATERCOLOR YANG BAGUS */}
            <Image
              src="/images/services/watercolor/hero-watercolor.webp" 
              alt="Watercolor AI Photobooth Jakarta - Contoh hasil cetak lukisan"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Watercolor AI Photobooth — Jakarta</h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">
                Ubah momen menjadi mahakarya. Teknologi AI mengubah foto Anda menjadi lukisan cat air yang elegan, dicetak instan pada kertas seni bertekstur.
              </p>
            </div>
          </div>

          {/* AI Overview — SEO-Friendly Summary */}
          <div className="prose prose-invert max-w-none mb-12 bg-white/5 border border-purple-900/30 rounded-xl p-6 relative overflow-hidden">
            <h2 className="text-xl font-semibold text-white mb-2 relative z-10">Ringkasan Layanan: The Art Experience</h2>
            <p className="text-gray-300 leading-relaxed relative z-10">
              <strong>Watercolor AI Photobooth Jakarta</strong> oleh Awwnderful bukanlah sekadar foto instan. Ini adalah pengalaman seni interaktif. Kami menggabungkan fotografi studio dengan <strong>Artificial Intelligence (AI)</strong> canggih yang secara instan melukis ulang foto tamu menjadi gaya <strong>cat air (watercolor)</strong> yang autentik.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3 relative z-10">
              Perbedaan utama layanan ini terletak pada hasil akhir: setiap karya dicetak pada <strong>kertas *fine art* bertekstur khusus</strong> (bukan kertas foto glossy biasa), memberikan tampilan dan sentuhan layaknya lukisan tangan asli yang siap dibingkai. Souvenir paling elegan untuk acara Anda.
            </p>
          </div>

          {/* Demo / Media */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Proses Transformasi & Hasil Cetak</h2>
            <div className="flex justify-center">
              {/* Video 1: Proses AI di Layar */}
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg">
                <div className="relative aspect-[3/4]">
                  {/* GANTI VIDEO INI DENGAN SCREEN RECORDING PROSES AI WATERCOLOR */}
                  <video
                    src="https://photos.smugmug.com/photos/i-n35sTBt/0/KNwdr3TcbBk9Sm78ZShL3NRHpdj8LswhmBW35Ns86/1280/i-n35sTBt-1280.mp4" 
                    className="w-full h-full object-cover"
                    controls
                    loop
                    autoPlay
                    playsInline
                    aria-label="Video demo proses transformasi AI watercolor di layar"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                 
                </div>
              </div>

         
            </div>
          </section>

          {/* Short Value Proposition */}
          <div className="prose prose-invert max-w-none mb-12">
            <p>
              🎨 <strong>Lebih dari sekadar souvenir.</strong> Watercolor booth memberikan tamu Anda sebuah karya seni pribadi. Tingkatkan prestise acara Anda dengan pengalaman yang artistik dan tak terlupakan ini.
            </p>
            <p className="mt-4">
              Mencari opsi premium lainnya? Lihat juga layanan <Link href="/photobooth-glam" className="underline hover:text-purple-300">Glam Booth</Link> atau <Link href="/photobooth-video" className="underline hover:text-purple-300">Video Booth</Link> kami.
            </p>
          </div>

          {/* Feature Grid - UPDATED FOR WATERCOLOR */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Brush, 
                title: 'AI Style Engine',
                desc: 'Teknologi pemrosesan gambar menggunakan AI. Style watercolor juga bisa kamu ubah sesuai request'
              },
              {
                icon: Scroll, 
                title: 'Textured Paper',
                desc: 'Dicetak pada kertas fine art matte bertekstur tebal, bukan kertas foto glossy biasa. Hasilnya mirip sama karya seni lukisan asli !'
              },
              {
                icon: Printer, 
                title: 'Quality Print',
                desc: 'Printer resolusi tinggi menghasilkan warna yang autentik.'
              },
              {
                icon: Palette, 
                title: 'Branding',
                desc: 'Logo dan style bisa di branding sesuai brand acara kamu !.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-purple-900/20 rounded-xl p-6 flex flex-col items-center text-center min-h-[200px]">
                <div className="mb-4 text-purple-300">
                  <item.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Workflow - UPDATED FOR WATERCOLOR */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Workflow — Dari Foto Menjadi Karya Seni</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  type: 'image',
                  // GANTI DENGAN FOTO ORANG SEDANG BERPOSE DI BOOTH
                  src: '/images/services/watercolor/watercolor-photobooth-setup.jpg', 
                  title: 'Step 1: Step into the Booth',
                  desc: 'Tamu berpose di depan backdrop. Lighting profesional kami memastikan detail wajah tertangkap sempurna.'
                },
                {
                  type: 'image',
                  // GANTI DENGAN VIDEO TRANSISI LAYAR DARI FOTO KE LUKISAN
                  src: '/images/services/watercolor/watercolor-photobooth-before.jpg', 
                  title: 'Step 2: Original Photo',
                  desc: 'Hasil foto dengan kualitas DSLR dan lighting akan di proses oleh AI untuk menjadi style lukisan cat air.'
                },
                {
                  type: 'image',
                  // GANTI DENGAN VIDEO PRINTER MENCETAK DI KERTAS TEBAL
                  src: '/images/services/watercolor/watercolor-photobooth-after.jpg',
                  title: 'Step 3: Applying AI Watercolor Effect',
                  desc: 'Setelah ambil foto,Proses AI kami mengubah foto menjadi style lukisan cat air'
                },
                {
                  type: 'image',
                  // GANTI DENGAN FOTO TAMU MEMEGANG HASIL CETAK
                  src: '/images/services/watercolor/watercolor-photobooth-prints.webp',
                  title: 'Step 4: The Result',
                  desc: 'Crew kami menyerahkan hasil cetak yang sudah kering dan siap dibawa pulang. Versi digital dikirim via QR code.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50">
                  <div className="relative aspect-[16/9]">
                    {item.type === 'image' ? (
                      <Image src={item.src} alt={`${item.title} - watercolor process`} fill className="object-cover" />
                    ) : (
                      <video src={item.src} className="w-full h-full object-cover" controls muted loop autoPlay playsInline />
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Galeri Hasil & Setup</h2>
            {/* Pastikan komponen ini bisa menangani gambar-gambar baru */}
            <BackdropGallerySlider images={gallery} />
          </section>

          {/* Use Cases - UPDATED FOR PREMIUM EVENTS */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Ideal Untuk Acara Premium</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Luxury Weddings', desc: 'Berikan tamu undangan souvenir yang elegan, unik, dan layak dipajang di rumah.' },
                { title: 'High-End Corporate Galas', desc: 'Tingkatkan citra perusahaan dengan aktivasi yang canggih dan berkelas.' },
                { title: 'Art & Fashion Launches', desc: 'Sangat selaras dengan acara yang bertema kreativitas, seni, dan desain.' }
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-purple-900/20 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing / Packages - UPDATED PRICING & DESCRIPTIONS */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Paket Watercolor Art Booth</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {/* Paket 1 */}
              <div className="bg-white/5 border border-purple-900/30 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">Paket per 100pcs</h3>
                <p className="text-gray-300 text-sm mb-4">Paket print yang sudah dibatasi dan bisa diubah sesuai kebutuhan kalian.</p>
                <p className="text-white font-bold text-2xl mb-2">Mulai Rp 4.000.000</p>
                <p className="text-gray-400 text-sm mb-4">(2 Jam, 100pcs Print, Custom Design)</p>
              </div>

              {/* Paket 2 - Featured */}
              <div className="bg-white/5 border-2 border-purple-600 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">Popular</div>
                <h3 className="text-white font-semibold text-lg mb-2">Paket unlimited print.</h3>
                <p className="text-gray-300 text-sm mb-4">Paket print unlimited sesuai durasi jam.</p>
                <p className="text-white font-bold text-2xl mb-2">Mulai Rp 5.000.000</p>
                <p className="text-gray-400 text-sm mb-4">(2 Jam, Unlimited Print, Custom Design)</p>
              </div>

              {/* Paket 3 */}
              <div className="bg-white/5 border border-purple-900/30 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">Bespoke Activation</h3>
                <p className="text-gray-300 text-sm mb-4">Solusi kustom untuk brand activation dan event besar.</p>
                <p className="text-white font-bold text-2xl mb-2">Hubungi Kami</p>
                <p className="text-gray-400 text-sm mb-4">(Custom AI Style, Booth Branding, Reporting, Multi-day)</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-6">
              ℹ️ Harga estimasi. Penggunaan kertas *fine art* dan teknologi AI memerlukan biaya operasional lebih tinggi dibanding photobooth standar.
            </p>

            <div className="flex gap-4">
              <a href={ctaHref} className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                Dapatkan Penawaran
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 border border-gray-600 text-white rounded-2xl hover:border-purple-500">
                Hubungi Kami
              </Link>
            </div>
          </section>

          <HasilOutput title="Pilihan Output Photobooth Unik Lainnya" />
          <ChooseBackdrop />
          <ArtikelLainnya serviceType="event" />
          <ServiceGrid />

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Area Layanan Premium</h2>
            <p className="text-gray-300">Jakarta, Bogor, Depok, Tangerang, Bekasi, BSD. Luar kota tersedia dengan biaya akomodasi.</p>
          </div>

          {/* FAQ Section - UPDATED CONTENT */}
          <section className="relative py-16 mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-purple-900/10 to-gray-800 -z-10 rounded-2xl"></div>
            <div className="relative z-10 px-6 py-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  FAQ: Watercolor Art Booth
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">Pertanyaan seputar teknologi AI dan hasil cetak fine art kami.</p>
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
                            </div>
                          </div>
                        </div>
                      </div>
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

      {/* JSON-LD Schemas - UPDATED FOR WATERCOLOR SERVICE */}
      <Script
        id="schema-watercolor-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Watercolor AI Photobooth Jakarta',
            description: 'Layanan photobooth premium yang menggunakan AI untuk mengubah foto tamu menjadi lukisan cat air (watercolor) instan, dicetak pada kertas fine art bertekstur.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Awwnderful Photo Booth',
              telephone: '+6287772566170',
              url: 'https://awwnderful.com/watercolor-photobooth',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Jakarta',
                addressCountry: 'ID'
              }
            },
            serviceType: 'AI Art Photobooth Service',
            areaServed: ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi'],
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                priceCurrency: 'IDR',
                price: '4500000',
                unitText: 'harga mulai dari untuk paket essential'
              }
            },
            // GANTI DENGAN URL GAMBAR HERO WATERCOLOR ANDA
            image: 'https://awwnderful.com/images/services/watercolor/hero-watercolor.jpg'
          })
        }}
      />
      <Script
        id="schema-watercolor-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Watercolor Fine Art Print (AI Photobooth Output)',
            description: 'Cetakan lukisan cat air yang dihasilkan oleh AI dari foto photobooth, dicetak pada kertas textured fine art matte premium.',
            image: [
              // GANTI DENGAN URL GAMBAR CONTOH HASIL CETAK WATERCOLOR
              'https://awwnderful.com/images/services/watercolor/watercolor-sample-portrait.jpg'
            ],
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              price: '4500000',
              url: 'https://awwnderful.com/watercolor-photobooth'
            }
          })
        }}
      />
      <Script
        id="schema-faq-watercolor"
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