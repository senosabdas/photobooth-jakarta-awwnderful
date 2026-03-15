import type { Metadata } from 'next'
import { getAllBlogs } from '@/app/blogs'

export const metadata: Metadata = {
  title: 'Internal Sitemap',
  robots: { index: false, follow: false },
}

const cleanPages: { label: string; href: string }[] = [
  { label: 'Artikel Lainnya', href: '/artikel' },
  { label: 'Sewa Photo Booth Jakarta', href: '/sewa-photo-booth-jakarta' },
  { label: 'Photo Booth Wedding Jakarta', href: '/photo-booth-wedding-jakarta' },
  { label: 'Photo Booth 360 Jakarta', href: '/photo-booth-360-jakarta' },
  { label: 'Rental Photo Booth Terdekat', href: '/rental-photo-booth-terdekat' },
  { label: 'Harga Sewa Photo Booth Jakarta', href: '/harga-sewa-photo-booth-jakarta' },
  { label: 'Photo Booth Event Jakarta', href: '/photo-booth-event-jakarta' },
  { label: 'Photo Booth High Angle Jakarta', href: '/photo-booth-high-angle-jakarta' },
  { label: 'Photo Booth Keliling Jakarta', href: '/photo-booth-keliling-jakarta' },
  { label: 'Kamera Disposable Digital Jakarta', href: '/kamera-disposable-digital-jakarta' },
]

const localizedMain = {
  id: [
    { label: 'Home (ID)', href: '/id' },
    { label: 'Lookbook (ID)', href: '/id/lookbook' },
    { label: 'Blog (ID)', href: '/id/blog' },
    { label: 'FAQ (ID)', href: '/id/faq' },
  ],
  en: [
    { label: 'Home (EN)', href: '/en' },
    { label: 'Lookbook (EN)', href: '/en/lookbook' },
    { label: 'Blog (EN)', href: '/en/blog' },
    { label: 'FAQ (EN)', href: '/en/faq' },
  ]
}

const services = [
  'photobox',
  'photobooth-gif',
  'roaming-photo-booth',
  '360-video-booth',
  'hashtag-printer',
  'virtual-photo-booth',
  'video-booth',
  'livestreaming',
  'multicamera',
  'ai-photo-booth',
  'custom-photo-print',
  'decoration',
  'photo-video-documentation',
  'light-painting',
  'audio-rental',
  'interactive-display',
  'invitation-digitalguestbook',
  'virtual-reality'
]

export default function Page() {
  const blogs = getAllBlogs()
  const idBlogLinks = blogs.map(b => ({ label: `ID: ${b.title}`, href: `/id/blog/${b.slug}` }))
  const enBlogLinks = blogs.map(b => ({ label: `EN: ${b.title}`, href: `/en/blog/${b.slug}` }))
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Internal Sitemap</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Clean Pages</h2>
            <ul className="space-y-2">
              {cleanPages.map(u => (
                <li key={u.href}><a className="text-purple-300 hover:text-purple-200" href={u.href}>{u.label}</a></li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Localized Main (ID)</h2>
            <ul className="space-y-2">
              {localizedMain.id.map(u => (
                <li key={u.href}><a className="text-purple-300 hover:text-purple-200" href={u.href}>{u.label}</a></li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Localized Main (EN)</h2>
            <ul className="space-y-2">
              {localizedMain.en.map(u => (
                <li key={u.href}><a className="text-purple-300 hover:text-purple-200" href={u.href}>{u.label}</a></li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Services (ID)</h2>
            <ul className="columns-2 md:columns-3 gap-4 [&_li]:break-inside-avoid space-y-2">
              {services.map(s => (
                <li key={`id-${s}`}><a className="text-purple-300 hover:text-purple-200" href={`/id/services/${s}`}>{`/id/services/${s}`}</a></li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Services (EN)</h2>
            <ul className="columns-2 md:columns-3 gap-4 [&_li]:break-inside-avoid space-y-2">
              {services.map(s => (
                <li key={`en-${s}`}><a className="text-purple-300 hover:text-purple-200" href={`/en/services/${s}`}>{`/en/services/${s}`}</a></li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Blogs (ID)</h2>
            <ul className="space-y-2">
              {idBlogLinks.map(u => (
                <li key={u.href}><a className="text-purple-300 hover:text-purple-200" href={u.href}>{u.label}</a></li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Blogs (EN)</h2>
            <ul className="space-y-2">
              {enBlogLinks.map(u => (
                <li key={u.href}><a className="text-purple-300 hover:text-purple-200" href={u.href}>{u.label}</a></li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
