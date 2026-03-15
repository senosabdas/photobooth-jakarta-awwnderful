import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Harga Sewa Photo Booth Jakarta | Paket & Estimasi',
  description:
    'Lihat kisaran harga sewa photo booth di Jakarta untuk 2–4 jam. Termasuk cetak instan, operator, dan desain frame. Minta penawaran sekarang.',
  alternates: { canonical: 'https://awwnderful.com/harga-sewa-photo-booth-jakarta' },
  openGraph: {
    title: 'Harga Sewa Photo Booth Jakarta | Paket & Estimasi',
    description:
      'Paket harga transparan untuk event di Jakarta. Pilih durasi & opsi custom sesuai kebutuhan Anda.',
    url: 'https://awwnderful.com/harga-sewa-photo-booth-jakarta',
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
