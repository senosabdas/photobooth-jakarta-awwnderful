import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hologram Photobooth Jakarta | Futuristic 3D Experience',
  description:
    'Hologram photobooth Jakarta dengan efek 3D interaktif. Tangkap pose tamu, render hologram, dan tampilkan di panel acrylic premium.',
  alternates: { canonical: 'https://awwnderful.com/photobooth-hologram' },
  openGraph: {
    title: 'Hologram Photobooth Jakarta | Futuristic 3D Experience',
    description:
      'Aktivasi hologram photobooth untuk brand activation, product launch, dan event premium di Jakarta & sekitarnya.',
    url: 'https://awwnderful.com/photobooth-hologram',
    type: 'website'
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}