'use client'

import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingForm from '@/components/WhatsAppWidget'
import Link from 'next/link'
import Image from 'next/image'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { servicesData } from '@/data/servicesData'

export default function ArtikelLainnyaPage() {
  const services = servicesData

  const categories = ['All', ...Array.from(new Set(services.map(service => service.category)))]

  return (
    <LanguageProvider>
      <Navigation />
      <main className="pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Artikel Lainnya
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Temukan semua layanan photo booth kami dalam satu tempat.
              Dari acara pernikahan hingga event perusahaan, kami siap melayani kebutuhan Anda.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <article key={service.slug} className="group">
                <Link href={`/${service.slug}`} className="block">
                  <div className="bg-white/5 border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {service.image.includes('.mp4') ? (
                        <video
                          src={service.image}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {service.category}
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {service.title}
                      </h2>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                        <span>Baca Selengkapnya</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-12 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-4">
              Butuh Photo Booth untuk Acara Anda?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik untuk acara Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Konsultasi Gratis
              </Link>
              <a
                href="https://wa.me/6287772566170?text=Halo%20Awwnderful%2C%20saya%20mau%20konsultasi%20photo%20booth"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <BookingForm />
      <Footer />

      <Script id="schema-artikel-lainnya" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Artikel Lainnya - Awwnderful Photo Booth',
          description: 'Temukan semua layanan photo booth Awwnderful dalam satu tempat',
          url: 'https://awwnderful.com/artikel',
          mainEntity: {
            '@type': 'Organization',
            name: 'Awwnderful Photo Booth',
            url: 'https://awwnderful.com'
          }
        })
      }} />
    </LanguageProvider>
  )
}
