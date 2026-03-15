'use client'

import Image from 'next/image'

export default function OutputGrid({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((img) => (
        <div key={img.src} className="relative aspect-square rounded-lg overflow-hidden bg-white/5">
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
