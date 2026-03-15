import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kamera Disposable Digital Jakarta | Instant Photo Sharing',
  description:
    'Kamera disposable digital untuk acara di Jakarta. Mudah digunakan, hasil instan via QR code. Cocok untuk wedding, gathering, dan event corporate.',
  alternates: { canonical: 'https://awwnderful.com/kamera-disposable-digital-jakarta' },
  openGraph: {
    title: 'Kamera Disposable Digital Jakarta | Instant Photo Sharing',
    description:
      'Kamera sederhana untuk semua usia dengan galeri digital pribadi. Setup cepat, baterai tahan lama.',
    url: 'https://awwnderful.com/kamera-disposable-digital-jakarta',
    type: 'website'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
