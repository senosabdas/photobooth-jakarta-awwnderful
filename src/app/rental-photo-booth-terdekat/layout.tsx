import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rental Photo Booth Terdekat | Awwnderful Jakarta',
  description:
    'Cari rental photo booth terdekat di Jakarta? Tim kami mobile ke venue Anda di Jakarta Pusat/Barat/Timur/Utara/Selatan serta BSD, Depok, Bekasi.',
  alternates: { canonical: 'https://awwnderful.com/rental-photo-booth-terdekat' },
  openGraph: {
    title: 'Rental Photo Booth Terdekat | Awwnderful Jakarta',
    description:
      'Layanan photo booth datang ke lokasi Anda. Cetak instan, GIF/boomerang, galeri digital. Area Jakarta & sekitar.',
    url: 'https://awwnderful.com/rental-photo-booth-terdekat',
    type: 'website'
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
