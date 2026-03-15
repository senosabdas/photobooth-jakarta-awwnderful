'use client'

import { useState } from 'react'
import Image from 'next/image'

export type CarouselItem = { type: 'image' | 'video'; src: string; alt: string }

export default function ProductCarousel({ items }: { items: CarouselItem[] }) {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1))
  const current = items[index]

  return (
    <div className="relative w-full aspect-video bg-white/5 rounded-xl overflow-hidden">
      {current.type === 'video' ? (
        <video className="w-full h-full object-cover" src={current.src} autoPlay loop muted playsInline />
      ) : (
        <Image src={current.src} alt={current.alt} fill className="object-cover" />
      )}
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded">‹</button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded">›</button>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
        {items.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`} />
        ))}
      </div>
    </div>
  )
}
