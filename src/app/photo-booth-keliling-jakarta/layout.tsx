import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photobooth Keliling Jakarta | Roaming Photo Booth',
  description:
    'Photobooth keliling (roaming) untuk event di Jakarta: fotografer mobile yang mendatangi tamu, hasil langsung dikirim/dicetak.',
  alternates: { canonical: 'https://awwnderful.com/photo-booth-keliling-jakarta' },
  openGraph: {
    title: 'Photobooth Keliling Jakarta | Roaming Photo Booth',
    description:
      'Tim mobile mendatangi tamu, cocok untuk crowd besar & venue luas. Share instan / cetak on‑the‑spot.',
    url: 'https://awwnderful.com/photo-booth-keliling-jakarta',
    type: 'website'
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
