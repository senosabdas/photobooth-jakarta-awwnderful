import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Watercolor AI Photobooth Jakarta — Ubah Foto Jadi Lukisan Seni | Awwnderful',
  description:
    'Watercolor AI Photobooth Jakarta — Pengalaman photobooth artistik yang mengubah foto tamu menjadi lukisan cat air instan dan dicetak pada kertas fine art bertekstur. Souvenir premium nan elegan.',
  alternates: { canonical: 'https://awwnderful.com/photobooth-watercolor' },
  openGraph: {
    title: 'Watercolor AI Photobooth Jakarta — Awwnderful Art Experience',
    description:
      'Ubah tamu Anda menjadi karya seni. Foto diubah jadi lukisan watercolor via AI dan dicetak di kertas bertekstur khusus. Elegan & Premium.',
    url: 'https://awwnderful.com/photobooth-watercolor',
    type: 'website',
    images: [
      {
        url: 'https://awwnderful.com/images/services/watercolor/hero-watercolor.webp',
        width: 1200,
        height: 630,
        alt: 'Watercolor AI Photobooth Jakarta - Contoh hasil cetak lukisan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watercolor AI Photobooth Jakarta — Awwnderful Art Experience',
    description: 'Ubah tamu Anda menjadi karya seni. Foto diubah jadi lukisan watercolor via AI dan dicetak di kertas bertekstur khusus.',
    images: ['https://awwnderful.com/images/services/watercolor/hero-watercolor.webp']
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}