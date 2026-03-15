import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Film Strip Photobooth Keychain Jakarta | Souvenir Instan',
  description:
    'Film strip photobooth keychain dengan 4 pose signature, cetak instan, dan keychain acrylic premium untuk event di Jakarta & sekitarnya.',
  alternates: { canonical: 'https://awwnderful.com/photobooth-filmstrip-keychain' },
  openGraph: {
    title: 'Film Strip Photobooth Keychain Jakarta | Souvenir Instan',
    description:
      'Layanan photobooth film strip lengkap dengan keychain acrylic custom dan distribusi digital.',
    url: 'https://awwnderful.com/photobooth-filmstrip-keychain',
    type: 'website'
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}