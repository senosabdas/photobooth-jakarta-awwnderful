import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Kamera Disposable Digital Jakarta | Awwnderful',
  description: 'Kamera disposable digital untuk event di Jakarta: pengalaman nostalgic dengan hasil digital instan dan galeri online.',
  alternates: { canonical: 'https://awwnderful.com/kamera-disposable-digital-jakarta' },
  openGraph: {
    title: 'Kamera Disposable Digital Jakarta | Awwnderful',
    description: 'Konsep kamera sekali pakai versi digital—seru, interaktif, dan hasilnya langsung bisa dibagikan.',
    url: 'https://awwnderful.com/kamera-disposable-digital-jakarta',
    type: 'website'
  }
}

export default function Page() {
  const faqs = [
    { q: 'Bagaimana alurnya?', a: 'Tamu memotret menggunakan kamera kecil kami; hasilnya otomatis masuk ke galeri digital untuk dipilih/cetak.' },
    { q: 'Apa yang didapat?', a: 'Unit kamera, lanyard, instruksi singkat, pengumpulan file otomatis, dan galeri online.' },
    { q: 'Cocok untuk apa?', a: 'Wedding, corporate gathering, prom night, dan activation bertema retro/nostalgia.' },
  ]

  return (
    <LanguageProvider>
      <Navigation />
      <main className="pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[2/1] rounded-xl overflow-hidden mb-8">
            <Image src="/images/services/photobooth-gif-all.jpg" alt="Kamera Disposable Digital Jakarta" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Kamera Disposable Digital Jakarta</h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90">Nostalgia kamera sekali pakai—versi digital yang langsung terkumpul rapi.</p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">Cek Jadwal & Harga</Link>
              <a href="https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20mau%20tanya%20kamera%20disposable%20digital%20Jakarta." target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">Chat WhatsApp</a>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="prose prose-invert max-w-none mb-12">
            <p>
              Konsep ini menghadirkan pengalaman berbagi kamera ke tamu—mereka berkeliling memotret momen candid. Semua foto otomatis
              terkumpul dalam galeri digital, dapat dipilih untuk ditampilkan, dibagikan, atau dicetak setelah acara.
            </p>
            <p>
              Kami menyediakan jumlah unit sesuai ukuran event, strap/lanyard, dan signage sederhana agar tamu paham cara pakainya dalam hitungan detik.
            </p>
          </div>

          {/* Terkait */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Layanan Terkait</h2>
            <LinkedImageGrid
              items={[
                { href: '/photo-booth-keliling-jakarta', src: '/images/lookbook/roaming-obooth-4.jpg', alt: 'Photobooth Keliling' },
                { href: '/sewa-photo-booth-jakarta', src: '/images/services/Boothbox/photobox-setup-1.jpg', alt: 'Sewa Photo Booth Jakarta' },
                { href: '/photo-booth-event-jakarta', src: '/images/services/photobooth-gif-all.jpg', alt: 'Photo Booth Event Jakarta' },
              ]}
            />
          </div>

          {/* Hasil Output */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Hasil Output</h2>
            <OutputGrid images={[{ src: '/images/lookbook/photobooth-dslrbooth-12.jpg', alt: 'Output 1' }, { src: '/images/lookbook/photobooth-dslrbooth-7.jpg', alt: 'Output 2' }]} />
          </div>

          <div id="contact" className="mb-8"><BookingForm /></div>
        </section>
      </main>

      <WhatsAppWidget />
      <Footer />

      <Script id="schema-ddc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Kamera Disposable Digital Jakarta', areaServed: 'Jakarta', provider: { '@type': 'LocalBusiness', name: 'Awwnderful Photo Booth', telephone: '+6287772566170', url: 'https://awwnderful.com/kamera-disposable-digital-jakarta' } }) }} />
    </LanguageProvider>
  )
}
