import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Booth Event Jakarta | Corporate & Brand Activation',
  description:
    'Photo booth untuk event perusahaan dan brand activation di Jakarta. GIF/boomerang, overlay branding, share instan, dan operator profesional.',
  alternates: { canonical: 'https://awwnderful.com/photo-booth-event-jakarta' },
  openGraph: {
    title: 'Photo Booth Event Jakarta | Corporate & Brand Activation',
    description:
      'Aktivitasi stand yang ramai: GIF/boomerang, overlay brand, share instan. Cocok untuk corporate & festival.',
    url: 'https://awwnderful.com/photo-booth-event-jakarta',
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
