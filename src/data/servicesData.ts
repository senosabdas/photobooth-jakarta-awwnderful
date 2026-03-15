export interface ServiceData {
  title: string
  slug: string
  description: string
  image: string
  category: string
  features: string[]
  key?: string // For ArtikelLainnya component mapping
  href?: string // For ArtikelLainnya component mapping
}

export const servicesData: ServiceData[] = [
  {
    title: 'Sewa Photo Booth Jakarta',
    slug: 'sewa-photo-booth-jakarta',
    description: 'Layanan lengkap sewa photo booth untuk berbagai acara di Jakarta dengan harga transparan dan operator profesional.',
    image: '/images/services/photo-booth-gif-jakarta/sewa-photo-booth-dslr-setup-jakarta-1.webp',
    category: 'General Services',
    features: ['Harga Transparan', 'Operator Profesional', 'Setup Cepat'],
    key: 'sewa',
    href: '/sewa-photo-booth-jakarta'
  },
  {
    title: 'Photo Booth Wedding Jakarta',
    slug: 'photo-booth-wedding-jakarta',
    description: 'Photo booth khusus untuk acara pernikahan dengan desain romantis dan hasil foto berkualitas tinggi.',
    image: '/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-7.webp',
    category: 'Special Events',
    features: ['Tema Romantis', 'High Quality', 'Instant Print'],
    key: 'wedding',
    href: '/photo-booth-wedding-jakarta'
  },
  {
    title: 'Photo Booth 360 Jakarta',
    slug: 'photo-booth-360-jakarta',
    description: 'Pengalaman photo booth 360 derajat yang imersif dengan teknologi terkini untuk acara modern.',
    image: '/images/360-video-booth-service-grid-jakarta.webp',
    category: 'Technology',
    features: ['360° Experience', 'Modern Tech', 'Interactive'],
    key: '360',
    href: '/photo-booth-360-jakarta'
  },
  {
    title: 'Rental Photo Booth Terdekat',
    slug: 'rental-photo-booth-terdekat',
    description: 'Temukan rental photo booth terdekat dari lokasi Anda dengan layanan cepat dan harga kompetitif.',
    image: '/images/services/photo-booth-gif-jakarta/photo-booth-o-setup-jakarta-5.webp',
    category: 'Location Based',
    features: ['Lokasi Terdekat', 'Quick Service', 'Flexible'],
    key: 'rental-terdekat',
    href: '/rental-photo-booth-terdekat'
  },
  {
    title: 'Photo Booth Keliling Jakarta',
    slug: 'photo-booth-keliling-jakarta',
    description: 'Layanan photo booth keliling yang mendatangi tamu untuk acara besar dengan coverage area luas.',
    image: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-ring-roamer-2.webp',
    category: 'Mobile Services',
    features: ['Mobile Service', 'Wide Coverage', 'Personal Touch'],
    key: 'keliling',
    href: '/photo-booth-keliling-jakarta'
  },
  {
    title: 'Photo Booth Event Jakarta',
    slug: 'photo-booth-event-jakarta',
    description: 'Solusi photo booth untuk event perusahaan dan brand activation dengan integrasi branding lengkap.',
    image: '/images/photobooth-event.avif',
    category: 'Corporate',
    features: ['Brand Integration', 'Corporate Ready', 'Professional'],
    key: 'event',
    href: '/photo-booth-event-jakarta'
  },
  {
    title: 'Harga Sewa Photo Booth Jakarta',
    slug: 'harga-sewa-photo-booth-jakarta',
    description: 'Informasi lengkap harga sewa photo booth Jakarta dengan paket transparan dan estimasi yang jelas.',
    image: 'https://photos.smugmug.com/photos/i-5NxxZZd/0/LRTFCTBVhmMcMWgz6LDtCH4km97cWnJKjDQCx5Lzr/L/i-5NxxZZd-L.png',
    category: 'Pricing',
    features: ['Transparent Pricing', 'Clear Packages', 'Budget Friendly'],
    key: 'harga',
    href: '/harga-sewa-photo-booth-jakarta'
  },
  {
    title: 'Photo Booth High Angle Jakarta',
    slug: 'photo-booth-high-angle-jakarta',
    description: 'Photo booth dengan angle tinggi untuk hasil foto yang unik dan berbeda dari perspektif atas.',
    image: '/images/lookbook-photo-booth-jakarta/photobox-highangle-1.mp4',
    category: 'Specialty',
    features: ['Unique Angle', 'Creative Shots', 'Different Perspective'],
    key: 'high-angle',
    href: '/photo-booth-high-angle-jakarta'
  },
  {
    title: 'Kamera Disposable Digital Jakarta',
    slug: 'kamera-disposable-digital-jakarta',
    description: 'Kamera disposable digital untuk acara dengan konsep klasik namun hasil modern dan langsung terkirim.',
    image: 'https://photos.smugmug.com/photos/i-v58h9Vv/0/LgB8Qwmjxs57rpSqw2pTJDZ5SzFDGgvGMsLVsj8Ls/X2/i-v58h9Vv-X2.png',
    category: 'Classic Modern',
    features: ['Classic Feel', 'Digital Results', 'Instant Delivery'],
    key: 'kamera-disposable',
    href: '/kamera-disposable-digital-jakarta'
  },
  {
    title: '360 Video Booth Jakarta',
    slug: 'id/services/360-video-booth',
    description: 'Video booth 360 derajat untuk pengalaman interaktif dan hasil video yang menakjubkan.',
    image: '/images/services/photo-booth-360-video-jakarta/photo-booth-360-video-jakarta-1.webp',
    category: 'Technology',
    features: ['360° Video', 'Interactive', 'Modern Experience'],
    key: '360-video',
    href: '/id/services/360-video-booth/'
  },
  {
    title: 'AI Photo Booth Jakarta',
    slug: 'id/services/ai-photo-booth',
    description: 'Photo booth dengan kecerdasan buatan untuk efek kreatif dan pengalaman yang unik.',
    image: '/images/services/ai-photo-booth-jakarta/ai-photo-booth-faceswap-jakarta-1.webp',
    category: 'Technology',
    features: ['AI Effects', 'Creative Filters', 'Unique Experience'],
    key: 'ai-photo-booth',
    href: '/id/services/ai-photo-booth'
  },
  {
    title: 'Virtual Photo Booth Jakarta',
    slug: 'id/services/virtual-photo-booth',
    description: 'Photo booth virtual untuk acara online dengan teknologi augmented reality.',
    image: '/images/services/virtual-photo-booth-jakarta/virtual-photo-booth-jakarta-virtualbooth-setup-1.png',
    category: 'Technology',
    features: ['Virtual Reality', 'Online Events', 'AR Technology'],
    key: 'virtual-photo-booth',
    href: '/id/services/virtual-photo-booth'
  },
  {
    title: 'Flipbook Photobooth Jakarta',
    slug: 'flipbook-photobooth',
    description: 'Pengalaman flipbook photobooth yang menghibur dengan animasi foto digital untuk berbagai acara di Jakarta.',
    image: '/images/services/custom-photo-print-jakarta/flipbook-photobooth-jakarta.webp',
    category: 'Animation',
    features: ['Flipbook Animation', 'Digital Experience', 'Instant Results'],
    key: 'flipbook',
    href: '/flipbook-photobooth'
  },
  {
    title: 'Hologram Photobooth Jakarta',
    slug: 'photobooth-hologram',
    description: 'Aktivasi hologram photobooth dengan efek 3D interaktif untuk brand activation, product launch, dan event futuristik.',
    image: '/images/services/custom-photo-print-jakarta/hologram-photobooth-sample-jakarta-3.webp',
    category: 'Technology',
    features: ['3D Depth Capture', 'Custom Branding', 'Instant Share'],
    key: 'hologram',
    href: '/photobooth-hologram'
  },
  {
    title: 'Photobooth Keychain',
    slug: 'photobooth-keychain',
    description: 'Photobooth dengan souvenir keychain acrylic premium dan opsi branding penuh.',
    image: '/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif',
    category: 'Souvenir',
    features: ['4 Pose Strip', 'Keychain Acrylic', 'Full Branding'],
    key: 'filmstrip-keychain',
    href: '/photobooth-filmstrip-keychain'
  },
  {
    title: 'Photobooth Film Strip Keychain ',
    slug: 'photobooth-filmstrip-keychain',
    description: 'Layanan Photobooth Keychain film strip 4 pose dengan acrylic premium, desain clean, serta opsi full branding untuk event, wedding, dan activation.',
    image: '/images/services/custom-photo-print-jakarta/filmstrip-photo-booth-jakarta/filmstrip.webp',
    category: 'Souvenir',
    features: [
      '4 Pose Film Strip',
      'Acrylic Premium',
      'Free Layout Custom',
      'Opsi Full Branding',
      'Cocok untuk Wedding & Event'
    ],
    key: 'photobooth-keychain',
    href: '/photobooth-keychain-jakarta'
  },
  {
    title: 'Photobooth Jumbo Strip  ',
    slug: 'photobooth-jumbo-strip',
    description: 'Layanan Photobooth Keychain film strip 4 pose dengan acrylic premium, desain clean, serta opsi full branding untuk event, wedding, dan activation.',
    image: '/images/services/custom-photo-print-jakarta/photobooth-jumbo-strip.jpg',
    category: 'Souvenir',
    features: [
      'Jumbo Strip 3 Pose',
      'Print Instan',
      'Finishing Onsite',
      'Opsi Custom Layout',
      'Opsi Custom Branding',
      'Cocok untuk Wedding & Event'
    ],
    key: 'photobooth-jumbo-strip',
    href: '/photobooth-jumbo-strip'
  },
  {
    title: 'Photobooth Watercolor ',
    slug: 'photobooth-watercolor',
    description: 'Layanan Photobooth Watercolor style dengan efek AI & Kertas Khusus menyerupai lukisan watercolor.',
    image: '/images/services/watercolor/hero-watercolor.webp',
    category: 'Souvenir',
    features: [
      'Watercolor Style',
      'Efek AI',
      'Kertas Khusus',
      'Opsi Custom Branding',
      'Cocok untuk Wedding & Event'
    ],
    key: 'photobooth-watercolor',
    href: '/photobooth-watercolor'
  }
  
]
