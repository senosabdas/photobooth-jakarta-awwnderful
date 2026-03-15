import Link from 'next/link'
import Image from 'next/image'
import { servicesData } from '@/data/servicesData'

interface ServiceItem {
  href: string
  media: {
    type: 'image' | 'video'
    src: string
    alt: string
  }
  label: string
}

interface ArtikelLainnyaProps {
  serviceType: 'wedding' | 'harga' | 'event' | '360' | 'high-angle' | 'keliling' | '360-video' | 'ai-photo-booth' | 'virtual-photo-booth' | 'kamera-disposable' | 'sewa' | 'rental-terdekat'
  title?: string
  learnMoreHref?: string
  learnMoreText?: string
}

// Transform servicesData to match ArtikelLainnya component structure with keys
const allServices: (ServiceItem & { key: string })[] = servicesData
  .filter(service => service.key) // Only include services that have keys
  .map(service => ({
    key: service.key!,
    href: service.href || `/${service.slug}`,
    media: {
      type: service.image.includes('.mp4') ? 'video' as const : 'image' as const,
      src: service.image,
      alt: service.title
    },
    label: service.title
  }))

export default function ArtikelLainnya({
  serviceType,
  title = "Artikel lainnya",
  learnMoreHref = "/artikel/",
  learnMoreText = "Pelajari lebih lanjut"
}: ArtikelLainnyaProps) {
  const services = allServices.filter(service => service.key !== serviceType).slice(0, 8)
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <a key={index} href={service.href} className="group block">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-800 border border-gray-700 group-hover:border-purple-500 transition-colors">
                {service.media.type === 'video' ? (
                  <video
                    src={service.media.src}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    muted
                    loop
                    playsInline
                    suppressHydrationWarning
                  />
                ) : (
                  <Image
                    src={service.media.src}
                    alt={service.media.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <p className="text-xs text-gray-300 mt-1 text-center group-hover:text-white transition-colors">
                {service.label}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-4 text-center">
        <Link href={learnMoreHref} className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
          {learnMoreText}
        </Link>
      </div>
    </div>
  )
}
