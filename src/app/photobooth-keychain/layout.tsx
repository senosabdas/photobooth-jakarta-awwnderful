import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photobooth Keychain Acrylic Jakarta — Souvenir Foto Unik | Awwnderful',
  description:
    'Jasa Photobooth Keychain Acrylic Jakarta. Ubah foto tamu menjadi souvenir gantungan kunci acrylic instan yang unik & premium. Cocok untuk wedding & event korporat.',
  alternates: { canonical: 'https://awwnderful.com/photobooth-keychain' },
  openGraph: {
    title: 'Photobooth Keychain Acrylic Jakarta — Souvenir Unik & Instan',
    description:
      'Layanan photobooth dengan output keychain acrylic instan. Foto 4 pose, cetak di tempat, rakit jadi souvenir premium. Pesan sekarang untuk event Anda!',
    url: 'https://awwnderful.com/photobooth-keychain',
    type: 'website',
    images: [
      {
        url: 'https://awwnderful.com/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif',
        width: 1200,
        height: 630,
        alt: 'Photobooth Keychain Acrylic Jakarta — Souvenir Foto Unik'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photobooth Keychain Acrylic Jakarta — Souvenir Unik & Instan',
    description: 'Layanan photobooth dengan output keychain acrylic instan. Foto 4 pose, cetak di tempat, rakit jadi souvenir premium.',
    images: ['https://awwnderful.com/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif']
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}