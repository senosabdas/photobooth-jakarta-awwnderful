import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sewa Photo Booth Jakarta | Awwnderful',
  description:
    'Sewa photo booth Jakarta untuk wedding, corporate, dan berbagai event. Cetak instan, GIF/boomerang, backdrop & props lengkap. Cek jadwal via WhatsApp.',
  alternates: { canonical: 'https://awwnderful.com/sewa-photo-booth-jakarta' },
  openGraph: {
    title: 'Sewa Photo Booth Jakarta | Awwnderful',
    description:
      'Sewa photo booth untuk event di Jakarta. Cetak instan, GIF/boomerang, backdrop & props. Tim profesional, hasil premium.',
    url: 'https://awwnderful.com/sewa-photo-booth-jakarta',
    type: 'website',
    images: [{ url: 'https://awwnderful.com/images/photo-booth-gif-all-jakarta.webp', width: 1200, height: 630, alt: 'Sewa Photo Booth Jakarta' }]
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
