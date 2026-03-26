import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Booth Wedding Jakarta | Awwnderful',
  description:
    'Photo booth wedding elegan di Jakarta. Glam filter, cetak instan, backdrop cantik, dan desain frame sesuai tema. Cek jadwal & harga.',
  alternates: { canonical: 'https://awwnderful.com/photo-booth-wedding-jakarta' },
  openGraph: {
    title: 'Photo Booth Wedding Jakarta | Awwnderful',
    description:
      'Photo booth wedding elegan dengan hasil premium. Glam filter, cetak instan, dan desain sesuai tema.',
    url: 'https://awwnderful.com/photo-booth-wedding-jakarta',
    type: 'website',
    images: [{ url: 'https://awwnderful.com/images/photo-booth-gif-all-jakarta.webp', width: 1200, height: 630, alt: 'Photo Booth Wedding Jakarta' }]
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
