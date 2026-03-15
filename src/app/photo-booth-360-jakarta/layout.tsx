import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Booth 360 Jakarta | 360 Video Booth',
  description:
    'Sewa 360 Video Booth di Jakarta. Video sinematik 360°, overlay branding, share instan. Cocok untuk brand activation & event.',
  alternates: { canonical: 'https://awwnderful.com/photo-booth-360-jakarta' },
  openGraph: {
    title: 'Photo Booth 360 Jakarta | 360 Video Booth',
    description:
      '360 Video Booth dengan overlay branding, musik, dan share instan. Tim profesional untuk event di Jakarta.',
    url: 'https://awwnderful.com/photo-booth-360-jakarta',
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
