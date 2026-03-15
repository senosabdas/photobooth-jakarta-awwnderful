import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artikel Lainnya | Semua Layanan Photo Booth Awwnderful',
  description:
    'Temukan semua layanan photo booth Awwnderful dalam satu tempat. Dari sewa hingga rental, event hingga wedding - semua tersedia dengan harga transparan.',
  alternates: { canonical: 'https://awwnderful.com/artikel' },
  openGraph: {
    title: 'Artikel Lainnya | Semua Layanan Photo Booth Awwnderful',
    description:
      'Koleksi lengkap layanan photo booth untuk berbagai acara dan kebutuhan Anda.',
    url: 'https://awwnderful.com/artikel',
    type: 'website'
  },
  keywords: 'photo booth, sewa photo booth, rental photo booth, jakarta, event, wedding, corporate'
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
