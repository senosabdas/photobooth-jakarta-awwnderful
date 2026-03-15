import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flipbook Photobooth Jakarta | Animated Photo Experience',
  description:
    'Flipbook photobooth Jakarta untuk pengalaman foto animasi yang unik. Buat flipbook digital instan dengan efek menarik untuk acara Anda.',
  alternates: { canonical: 'https://awwnderful.com/flipbook-photobooth' },
  openGraph: {
    title: 'Flipbook Photobooth Jakarta | Animated Photo Experience',
    description:
      'Pengalaman flipbook photobooth yang menghibur dengan animasi foto digital untuk berbagai acara di Jakarta.',
    url: 'https://awwnderful.com/flipbook-photobooth',
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
