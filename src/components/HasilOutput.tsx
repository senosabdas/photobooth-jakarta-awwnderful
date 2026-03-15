import Image from 'next/image'
import Link from 'next/link'

type OutputItem = {
  src: string
  alt: string
  label: string
  href?: string
  url?: string
}

export default function HasilOutput({
  title = 'Hasil Output Photobooth',
  items = [
    { src: '/images/services/custom-photo-print-jakarta/photo-strip-photobooth-jakarta.webp', alt: 'Photo Strip', label: 'PHOTO STRIP', href: '/id/services/custom-photo-print' },
    { src: '/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-7.webp', alt: '4R Print', label: '4R PRINT', href: '/id/services/custom-photo-print' },
    { src: '/images/services/custom-photo-print-jakarta/magnetic-print-photobooth-jakarta.webp', alt: 'Magnetic', label: 'MAGNETIC', href: '/id/services/custom-photo-print' },
    { src: '/images/services/custom-photo-print-jakarta/hologram-photobooth-sample-jakarta-3.webp', alt: 'Hologram', label: 'HOLOGRAM', href: '/id/services/custom-photo-print' },
    { src: '/images/services/custom-photo-print-jakarta/custom-photo-print-jakarta-polaroid.webp', alt: 'Polaroid', label: 'POLAROID', href: '/id/services/custom-photo-print' },
    { src: '/images/services/interactive-display-jakarta/interactive-display-jakarta-slideshow-1.webp', alt: 'Photo Slideshow', label: 'Photo Slideshow', href: '/id/services/video-booth' },
    { src: '/images/services/custom-photo-print-jakarta/flipbook-photobooth-jakarta.webp', alt: 'Flipbook print', label: 'Flipbook print', href: '/id/services/custom-photo-print' },
    { src: '/images/services/custom-photo-print-jakarta/sticker-photobooth-jakarta.webp', alt: 'GIF Booth', label: 'Sticker photo', href: '/id/services/custom-photo-print' },
    { src: '/images/services/custom-photo-print-jakarta/frame-acrylic-photobooth-jakarta.webp', alt: 'GIF Booth', label: 'Custom Frame', href: '/id/services/custom-photo-print' },
    { src: '/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif', alt: 'Guest book', label: 'Keychain', href: '/id/services/custom-photo-print' },
    { src: '/images/lookbook-photo-booth-jakarta/fxbooth-photo-lightpainting-1.webp', alt: 'GIF Booth', label: 'Light Painting', href: '/id/services/light-painting' },
    { src: '/images/services/custom-photo-print-jakarta/guestbook-photobooth-jakarta.webp', alt: 'GIF Booth', label: 'Guest Book', href: '/id/services/custom-photo-print' },
    
  ] as OutputItem[],
}: {
  title?: string
  items?: OutputItem[]
}) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      {/* Mobile: horizontal scroll; Desktop: grid */}
      <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory -mx-4 px-4 md:overflow-visible md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-8 md:mx-0 md:px-0">
        {items.map((item) => {
          const link = item.href || item.url
          const content = (
            <>
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-white/5">
                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px" />
                <div className="absolute inset-0 hidden md:flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-semibold">Pelajari lebih lanjut</span>
                </div>
              </div>
              <div className="mt-3 text-white font-semibold uppercase text-xs sm:text-sm tracking-wide">
                {item.label}
              </div>
            </>
          )
          return (
            <div key={item.label} className="group flex flex-col items-center text-center shrink-0 snap-center">
              {link ? (
                <Link href={link} className="focus:outline-none cursor-pointer">
                  {content}
                </Link>
              ) : (
                content
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
