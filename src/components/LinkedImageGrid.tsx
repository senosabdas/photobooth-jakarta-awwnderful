'use client'

import Image from 'next/image'
import Link from 'next/link'

export type LinkedItem = { href: string; src: string; alt: string }

export default function LinkedImageGrid({ items }: { items: LinkedItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((it) => (
        <Link key={it.href} href={it.href} className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5">
          <Image src={it.src} alt={it.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute bottom-2 left-2 text-white font-medium text-sm bg-black/40 px-2 py-1 rounded">
            {it.alt}
          </span>
        </Link>
      ))}
    </div>
  )
}
