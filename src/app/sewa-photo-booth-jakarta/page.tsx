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
import { ChevronDown, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Berapa kisaran harga sewa photo booth Jakarta?',
      a: 'Harga sewa photo booth Jakarta mulai dari Rp2 juta – Rp5 juta untuk durasi 2–4 jam. Harga disesuaikan dengan paket pilihan, durasi sewa, output (print, GIF, video), dan tingkat kustomisasi desain. Untuk acara full day atau kebutuhan khusus, kami siapkan paket custom.'
    },
    {
      q: 'Apa saja fasilitas yang disediakan untuk sewa photo booth Jakarta?',
      a: 'Paket lengkap meliputi: operator profesional, kamera & lighting studio, cetak foto unlimited (ukuran 2R/4R), desain frame custom sesuai tema acara, props & aksesoris lucu, backdrop standar, dan galeri online untuk mengunduh hasil foto.'
    },
    {
      q: 'Apakah bisa custom desain frame dan backdrop di Jakarta?',
      a: 'Tentu! Kami bisa menyesuaikan semua frame foto, overlay GIF/boomerang, dan desain backdrop sesuai tema acara Anda. Mau pakai logo perusahaan, warna khusus, atau desain ala undangan pernikahan? Tim desain kami siap mewujudkan.'
    },
    {
      q: 'Berapa kebutuhan listrik dan area untuk setup di Jakarta?',
      a: 'Kebutuhan listrik sekitar 1000–1500W, area minimal 3×3 meter untuk setup standar. Kami fleksibel menyesuaikan layout di berbagai venue Jakarta seperti hotel ballroom, kantor, atau rumah.'
    },
    {
      q: 'Apakah melayani area Jakarta dan sekitarnya?',
      a: 'Ya, kami melayani seluruh Jabodetabek tanpa biaya transport tambahan, termasuk Jakarta Pusat, Barat, Timur, Utara, Selatan, BSD/Tangerang Selatan, Depok, dan Bekasi.'
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
            <Image
              src="https://photos.smugmug.com/Events/LFJ-Promnight-2019/Event-Images/i-d9Wd5Cf/0/NSFRhM3hjKnPdhMPv2RKbPvvhXw2zsfmhz92RGJFd/5K/DLY07907-5K.jpg"
              alt="Sewa Photo Booth Jakarta"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                Sewa Photo Booth Jakarta buat bikin acara kamu makin seru!
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">
                Photobooth estetik, cetak cepat, dan bisa custom konsep untuk wedding, kantor,
                sampai brand activation.
              </p>
            </div>
          </div>

          {/* Long description */}
          <div className="prose prose-invert max-w-none mb-12">
            <p>
              📸 <strong>Sewa photobooth di Jakarta</strong> untuk ulang tahun, gathering kantor,
              launching brand, hingga festival seru. Kami menawarkan paket fleksibel yang bisa
              disesuaikan dengan kebutuhan dan budget, sehingga setiap momen penting bisa terekam
              sempurna dan jadi kenangan berharga.
            </p>

            <p className="mt-6">
              Bersama <strong>Awwnderful</strong>, kamu akan mendapatkan setup modern, lighting
              premium, dan tim berpengalaman. Dari wedding hingga corporate event di seluruh
              Jakarta dan area sekitarnya seperti Depok, Tangerang, BSD, dan Bekasi. Photobooth
              kami siap bikin tamu betah berpose dan membawa pulang pengalaman seru yang
              unforgettable!
            </p>

            <p className="mt-6">
              Sebagai penyedia <strong>sewa photobooth Jakarta</strong> sejak 2015, Awwnderful sudah
              mendukung berbagai acara mulai dari wedding intim, brand activation, hingga event
              kampus dan komunitas. Fokus kami adalah bikin experience photobooth yang estetik,
              cepat, dan gampang diakses tamu—baik lewat cetak foto maupun galeri digital.
            </p>
          </div>

          {/* Value props grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: '/icon/photo-camera-outline.svg',
                title: 'Output Lengkap',
                desc: 'Cetak instan, GIF/boomerang, glam filter, hingga greenscreen & intro–outro overlay.'
              },
              {
                icon: '/icon/branding-icon.svg',
                title: 'Bisa di Custom',
                desc: 'Frame/overlay sesuai brand, backdrop pilihan, props tematik, dan galeri digital.'
              },
              {
                icon: '/icon/victory.svg',
                title: 'Tim Profesional',
                desc: 'Tim berpengalaman yang terbiasa handle wedding, corporate event, dan brand activation.'
              },
              {
                icon: '/icon/glasses-and-moustache.svg',
                title: 'Props Lengkap',
                desc: 'Banyak pilihan props lucu dan estetik yang sudah include di paket photobooth.'
              },
              {
                icon: '/icon/delivery-truck.svg',
                title: 'Free Transport',
                desc: 'Free transport area JABODETABEK / radius 25 km dari posisi kami.'
              },
              {
                icon: '/icon/print-copy.svg',
                title: 'Unlimited Print',
                desc: 'Tersedia opsi unlimited print jika ingin semua tamu bisa bawa pulang hasil cetak.'
              },
              {
                icon: '/icon/megaphone.svg',
                title: 'Share ke Email & WhatsApp',
                desc: 'Hasil foto bisa langsung dibagikan via Email, WhatsApp, atau scan QR code.'
              },
              {
                icon: '/icon/photography-equipment-black-background-(1)-copy.svg',
                title: 'Pilihan Backdrop',
                desc: 'Banyak pilihan backdrop premium untuk photobooth yang sudah include.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]"
              >
                <div className="mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <HasilOutput title="Hasil Output Photobooth" />
          <ChooseBackdrop />

          {/* Image Gallery Slider */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Galeri Backdrop & Setup</h2>
            <BackdropGallerySlider />
          </section>

          {/* Paket section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Paket Photobooth</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Paket Unlimited Print',
                  points: [
                    'Cetak instan tanpa batas selama jam operasional',
                    'Cocok untuk acara ramai dengan banyak tamu'
                  ]
                },
                {
                  name: 'Paket Print Quota',
                  points: [
                    'Jumlah print dibatasi sesuai kebutuhan & budget',
                    'Ideal untuk event perusahaan atau paket hemat'
                  ]
                },
                {
                  name: 'Tanpa Print Out',
                  points: [
                    'Hanya share ke Email / WhatsApp / QR code',
                    'Cocok untuk acara jangka lama atau venue outdoor'
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

          {/* Internal links to other photobooth services */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Jenis Layanan Photobooth Awwnderful</h2>
            <p className="text-gray-300 mb-3">
              Selain paket sewa photobooth Jakarta ini, kamu juga bisa pilih format lain yang lebih
              spesifik sesuai kebutuhan acara:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>
                <Link
                  href="/photo-booth-wedding-jakarta"
                  className="text-purple-300 hover:text-purple-200 underline decoration-purple-500/60"
                >
                  Photobooth Wedding Jakarta
                </Link>
              </li>
              <li>
                <Link
                  href="/photo-booth-event-jakarta"
                  className="text-purple-300 hover:text-purple-200 underline decoration-purple-500/60"
                >
                  Photobooth Event & Corporate Jakarta
                </Link>
              </li>
              <li>
                <Link
                  href="/photo-booth-360-jakarta"
                  className="text-purple-300 hover:text-purple-200 underline decoration-purple-500/60"
                >
                  360 Photobooth Jakarta
                </Link>
              </li>
              <li>
                <Link
                  href="/photo-booth-high-angle-jakarta"
                  className="text-purple-300 hover:text-purple-200 underline decoration-purple-500/60"
                >
                  High Angle Photobooth
                </Link>
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Pertanyaan yang Sering Diajukan</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx
                return (
                  <div
                    key={faq.q}
                    className="border border-gray-700 rounded-xl bg-white/5 overflow-hidden"
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-3 text-left"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    >
                      <span className="text-white font-medium">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-300 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-gray-300 text-sm border-t border-gray-700">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>

          {/* Contact / Booking section */}
          <section id="contact" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Cek Jadwal & Booking</h2>
            <p className="text-gray-300 mb-4">
              Kirim detail acara kamu—tanggal, lokasi, jenis event—dan kami akan kirimkan penawaran
              paket sewa photobooth Jakarta yang paling pas buat kebutuhanmu.
            </p>
            <BookingForm source="sewa-photo-booth-jakarta" />
          </section>
        </section>
      </main>

      <WhatsAppWidget />
      <Footer />

      {/* Schema.org markup */}
      <Script
        id="schema-sewa-photobooth-jakarta"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Sewa Photobooth Jakarta',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Awwnderful Photobooth',
              areaServed: ['Jakarta', 'Depok', 'Bekasi', 'Tangerang', 'BSD'],
              url: 'https://www.awwnderful.com/sewa-photo-booth-jakarta/'
            },
            serviceType: 'Sewa photobooth untuk wedding, corporate event, ulang tahun, dan brand activation di Jakarta dan sekitarnya.',
            url: 'https://www.awwnderful.com/sewa-photo-booth-jakarta/'
          })
        }}
      />
      <Script
        id="schema-faq-sewa-photobooth-jakarta"
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
                text: faq.a
              }
            }))
          })
        }}
      />
    </LanguageProvider>
  )
}
