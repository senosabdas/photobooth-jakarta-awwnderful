'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useRef, useState } from 'react'

export type BackdropItem = { title: string; image: string; description?: string }

const DEFAULT_BACKDROPS: BackdropItem[] = [
  { title: 'Caramel Sequin Large', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-caramel-sequin-large-jakarta.webp', description: '1.8m x 1.8m fixed size backdrop' },
  { title: 'Peacock Sequin Large', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-peacock-sequin-large-jakarta.webp', description: '1.8m x 1.8m fixed size backdrop' },
  { title: 'Pink Sequin Large', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-pink-sequin-large-jakarta.webp', description: '1.8m x 1.8m fixed size backdrop' },
  { title: 'Black Sequin Large', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-black-sequin-large-jakarta.webp', description: '1.8m x 1.8m fixed size backdrop' },
  { title: 'Shiny Silver Sequin Large', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-silver-sequin-large-jakarta.webp', description: '1.8m x 1.8m fixed size backdrop' },
  { title: 'Pink Solid Large', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-solid-pink-large-jakarta.webp', description: '1.8m x 1.8m fixed size backdrop' },
  { title: 'White Solid Large', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-photo-booth-jakarta-white-solid-large.webp', description: '1.8m x 1.8m fixed size backdrop' },
  { title: 'Green Solid Large', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-photo-booth-jakarta-green-solid-large.webp', description: '1.8m x 1.8m fixed size backdrop' },
  { title: 'Yellow Solid Large', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-photo-booth-jakarta-yellow-solid-large.webp', description: '1.8m x 1.8m fixed size backdrop' },
  { title: 'Black & Gold Sequin Small', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-black-gold-sequin-small-jakarta.webp', description: 'up to 1.5m x 1.5m Adjustable backdrop' },
  { title: 'White Sequin Small', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-white-sequin-small-jakarta.webp', description: 'up to 1.5m x 1.5m Adjustable backdrop' },
  { title: 'Black Solid Small', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-black-solid-small-jakarta.webp', description: 'up to 1.5m x 1.5m Adjustable backdrop' },
  { title: 'Greenscreen', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-photo-booth-jakarta-greenscreen-backdrop.webp', description: 'Greenscreen for creative backgrounds' },
  { title: 'Custom Hard Panelling', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-photo-booth-jakarta-custom-hard-panelling.webp', description: 'Custom size and finish' },
  { title: 'Custom 3D Pop Up', image: '/images/services/backdrop-photo-booth-jakarta/backdrop-photo-booth-jakarta-custom-3d-pop-up.webp', description: 'Custom pop-up structure' },
]

export default function ChooseBackdrop({ title = 'Pilih Backdrop Photobooth', backdrops = DEFAULT_BACKDROPS }: { title?: string; backdrops?: BackdropItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [preview, setPreview] = useState<BackdropItem | null>(null)

  const scrollBy = (delta: number) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section className="mb-16" id="choose-backdrop">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="relative">
        <button onClick={() => scrollBy(-300)} className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300" aria-label="Scroll left">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={() => scrollBy(300)} className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300" aria-label="Scroll right">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div ref={scrollerRef} className="flex overflow-x-auto scrollbar-hide gap-4 scroll-smooth pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {backdrops.map((b) => (
            <button key={b.title} type="button" onClick={() => setPreview(b)} className="flex-none w-48 cursor-pointer group text-left">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image src={b.image} alt={b.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-3">
                  <h3 className="text-white font-medium">{b.title}</h3>
                  {b.description && <p className="text-white/80 text-sm">{b.description}</p>}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {preview && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={(e) => { if (e.currentTarget === e.target) setPreview(null) }}>
          <button onClick={() => setPreview(null)} className="absolute top-4 right-4 text-white p-2 hover:text-purple-400 transition-colors" aria-label="Close preview">
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl mx-4">
            <Image src={preview.image} alt={preview.title} width={1600} height={1200} className="w-full h-auto rounded-lg object-contain" />
          </div>
        </div>
      )}
    </section>
  )
}
