import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Booth High Angle Jakarta | Top-Down Photobooth',
  description:
    'High angle photobooth di Jakarta: sudut kamera dari atas untuk tampilan flattering & crowd-friendly. Cocok untuk mall/festival.',
  alternates: { canonical: 'https://awwnderful.com/photo-booth-high-angle-jakarta' },
  openGraph: {
    title: 'Photo Booth High Angle Jakarta | Top-Down Photobooth',
    description:
      'Setup high angle/top-down untuk area sempit dan antrian cepat. Cetak instan & share digital.',
    url: 'https://awwnderful.com/photo-booth-high-angle-jakarta',
    type: 'website',
    images: [{ url: 'https://awwnderful.com/images/photobooth-high-angle.png', width: 1200, height: 630, alt: 'Photo Booth High Angle Jakarta' }]
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
