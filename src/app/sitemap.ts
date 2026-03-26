import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://awwnderful.com'
  
  // Main localized pages
  const localizedPages = [
    // English pages
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/lookbook`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    // Indonesian pages (default)
    {
      url: `${baseUrl}/id`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0, // Higher priority for default locale
    },
    {
      url: `${baseUrl}/id/lookbook`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/id/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/id/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    // Clean city URLs (no locale)
    {
      url: `${baseUrl}/sewa-photo-booth-jakarta`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/photo-booth-wedding-jakarta`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/photo-booth-360-jakarta`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rental-photo-booth-terdekat`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/harga-sewa-photo-booth-jakarta`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/photo-booth-event-jakarta`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/photo-booth-high-angle-jakarta`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/photo-booth-keliling-jakarta`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kamera-disposable-digital-jakarta`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Service pages (only localized)
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

  const servicePages = services.flatMap(service => [
    {
      url: `${baseUrl}/en/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/id/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Higher priority for default locale
    }
  ])

  return [
    ...localizedPages,
    ...servicePages,
  ]
} 