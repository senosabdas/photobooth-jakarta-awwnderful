import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photobooth Jumbo Strip Jakarta | Korean-Style 3 Pose Adjustable',
  description:
    'Layanan Photobooth Jumbo Strip Jakarta — strip foto panjang Korean-style (3 pose) dengan layout adjustable, print instan, finishing onsite, dan galeri digital. Cocok untuk wedding & brand activation.',
  alternates: { canonical: 'https://awwnderful.com/photobooth-jumbo-strip' },
  openGraph: {
    title: 'Photobooth Jumbo Strip Jakarta | Korean Style Strip 3 Pose',
    description:
      'Jumbo Strip Photobooth dengan format 3 pose panjang, print instan, finishing onsite, dan opsi custom layout. Ideal untuk wedding, corporate, dan pop-up.',
    url: 'https://awwnderful.com/photobooth-jumbo-strip',
    type: 'website',
    images: [
      {
        url: 'https://awwnderful.com/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif',
        width: 1200,
        height: 630,
        alt: 'Photobooth Jumbo Strip Jakarta — Contoh Strip Korean Style'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photobooth Jumbo Strip Jakarta | Korean Style Strip',
    description: 'Layanan photobooth jumbo strip 3 pose adjustable dengan hasil foto panjang dan kualitas premium.',
    images: ['https://awwnderful.com/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif']
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
