// Service translations for Indonesian language
export type Language = 'en' | 'id'

interface ModelTranslations {
  title: string
  description: string
  details: string
  features: string[]
  specs: string[]
  bestFor: string[]
}

interface ServiceTranslations {
  title: string
  description: string
  fullDescription: string
  features: string[]
  models?: ModelTranslations[]
  backdrops?: { title: string; description: string }[]
}

export const serviceTranslations: Record<Language, Record<string, ServiceTranslations>> = {
  en: {
    'photobooth-gif': {
      title: 'Photobooth GIF',
      description: 'Photobooth GIF is a photo booth service that allows you to create a GIF of your photos.',
      fullDescription: `
        Supercharge your event with our range of photo booth selections that suit your needs. Our Photobooth GIF service combines the fun of traditional photo booths and animated GIFs & Boomerangs and the ability to scan QR code to access your photo on the cloud. 
        
        Perfect for capturing moments in motion, this service adds an extra layer of excitement to your event.
      `,
      features: [
        'High-quality camera',
        'Professional lighting',
        'Optional Backdrops',
        'Instant GIF creation',
        'Social media sharing',
        'QR Code sharing',
        'Unlimited prints or Quota Prints',
        'Online Gallery'
      ],
      models: [
        {
          title: 'DSLR Booth',
          description: '-',
          details: 'Most complete photobooth package. Professional DSLR camera setup with high-quality studio flash lighting and backdrop included. The DSLR Booth offers superior image quality.',
          features: [
            'Professional DSLR Camera',
            'Studio-Quality Lighting',
            'Unlimited Prints or Quota Prints',
            'Backdrop Included',
            'Social Media Sharing',
            'Custom Branding Options',
            'Touch Screen Interface',
            'Preview Monitor',
            'Internet Connection'
          ],
          specs: [
            'Electric Consumption : 500 - 750 W',
            'Recomended Setup area : 2 x 2m',
            'Need around 2 Power outlet nearby in radius 5m'
          ],
          bestFor: [
            'Corporate Events',
            'Wedding',
            'Product Launches',
            'School Events',
            'Birthday Parties',
            'Family Gatherings'
          ]
        }
      ],
      backdrops: [
        { title: 'Caramel Sequin Large', description: '1.8m x 1.8m fixed size backdrop' },
        { title: 'Peacock Sequin Large', description: '1.8m x 1.8m fixed size backdrop' },
        { title: 'Pink Sequin Large', description: '1.8m x 1.8m fixed size backdrop' },
        { title: 'Black Sequin Large', description: '1.8m x 1.8m fixed size backdrop' },
        { title: 'Shiny Silver Sequin Large', description: '1.8m x 1.8m fixed size backdrop' },
        { title: 'Pink Solid Large', description: '1.8m x 1.8m fixed size backdrop' },
        { title: 'White Solid Large', description: '1.8m x 1.8m fixed size backdrop' },
        { title: 'Green Solid Large', description: '1.8m x 1.8m fixed size backdrop' },
        { title: 'Yellow Solid Large', description: '1.8m x 1.8m fixed size backdrop' },
        { title: 'Black & Gold Sequin Small', description: 'up to 1.5m x 1.5m Adjustable backdrop' },
        { title: 'White Sequin Small', description: 'up to 1.5m x 1.5m Adjustable backdrop' },
        { title: 'Black Solid Small', description: 'up to 1.5m x 1.5m Adjustable backdrop' },
        { title: 'Greenscreen Backdrop', description: 'Greenscreen effect with choice of your own design' },
        { title: 'Custom Hard Panel', description: 'Strong panel with carpet and lighting' },
        { title: 'Custom 3D Pop up backdrop', description: 'Custom Pop up Backdrop with your choice of design' },
        { title: 'Custom Decoration', description: 'Custom Backdrop with Flower of your choice' }
      ]
    },
    'roaming-photo-booth': {
      title: 'Roaming Photo Booth',
      description: 'Mobile photobooth experience that goes where the fun is!',
      fullDescription: `
        Take your event photography to the next level with our Roaming Photo Booth service. Unlike traditional stationary photo booths, our roaming service brings the fun directly to your guests wherever they are at your venue.
        
        Perfect for large events, outdoor celebrations, and venues where you want maximum guest engagement and coverage throughout the space.
      `,
      features: [
        'Mobile professional photographer',
        'Instant photo printing',
        'Roaming throughout venue',
        'Professional DSLR camera',
        'High-quality lighting equipment',
        'Digital sharing options',
        'Custom photo templates',
        'Online gallery access'
      ]
    },
    'photobox': {
      title: 'Photobox',
      description: 'Your all in one photobox solutions',
      fullDescription: `
        Experience the ultimate all-in-one photo solution with our Photobox service. This comprehensive package combines professional photography equipment with user-friendly operation, making it perfect for any event size.
        
        Everything you need for professional event photography in one convenient package.
      `,
      features: [
        'All-in-one solution',
        'Professional camera setup',
        'Easy operation',
        'Instant printing',
        'Digital gallery',
        'Custom branding',
        'Compact design',
        'Quick setup'
      ]
    }
  },
  id: {
    'photobooth-gif': {
      title: 'Photobooth GIF',
      description: 'Photobooth Rental Jakarta - Kami mempunya 3 Setup sesuai dengan kondisi event anda.',
      fullDescription: `
Cari rental photo booth terdekat di Jakarta dengan kualitas pelayanan terbaik dan alat yang reliable? Layanan Sewa Photo Booth GIF kami solusi nya. Dengan photobooth kualitas tinggi seperti menggunakan kamera terbaik, Printer photobooth terbaik dengan hasil cetak photo cepat, kualitas internet terbaik untuk sharing foto, dan kemudahan akses foto melalui scan QR code atau email. Menjadikan kualitas & pelayanan photobooth kami terbaik di Jakarta dan sekitarnya.

Sempurna untuk acara photo booth wedding, photo booth acara kantor, photo booth ulang tahun, photo booth event dan pesta apapun di seluruh Jakarta dan sekitarnya.

Mengapa layanan rental photo booth kami yang terbaik di Jakarta dan sekitarnya ?

- 3 Pilihan Photo Booth Model : Model DSLR Booth, Model Classic, dan Model O Booth. Pilihan model berbeda ini karena ada kebutuhan acara berbeda beda.
- Backdrop & Props Rental Lengkap : Koleksi backdrop premium grade dan properti foto terlengkap di Jakarta
- Setup Profesional : Tim teknisi berpengalaman untuk instalasi di lokasi Anda
- Coverage Area : Melayani DKI Jakarta, Bogor, Depok, Tangerang, Bekasi dan sekitarnya
- Share ke social media : Kemudahan share ke social media dengan QR code, Email atau AirDrop

Dengan pengalaman melayani ratusan acara di Jakarta, kami memahami pentingnya kualitas alat & pelayanan yang baik.  Pastikan layanan instant photo booth rental terdekat anda bersama kami. 
      `,
      features: [
        'Kamera berkualitas tinggi',
        'Pencahayaan profesional',
        'Pilihan backdrop premium',
        'Dapat hasil GIF, Boomerang, Original photo  ',
        'Social Media Sharing',
        'Share foto dengan QR code, Email atau AirDrop',
        'Unlimited print, Cetak photo strip, atau cetak dengan kuota print',
        'Galeri online yang bisa di akses kapan saja'
      ],
      models: [
        {
          title: 'DSLR Booth',
          description: '-',
          details: 'Paket photobooth paling lengkap. Setup kamera DSLR profesional dengan pencahayaan studio flash berkualitas tinggi dan backdrop sudah termasuk. DSLR Booth menawarkan kualitas gambar yang superior.',
          features: [
            'Hasil foto dengan kualitas tinggi',
            'Pencahayaan Kualitas Studio',
            'Cetak Tak Terbatas atau Kuota Cetak',
            'Pilihan backdrop premium',
            'Berbagi Media Sosial',
            'Opsi Branding Kustom',
            'Interface Layar Sentuh',
            'Monitor Preview',
            'Koneksi Internet'
          ],
          specs: [
            'Konsumsi Listrik: 500 - 750 W',
            'Area Setup yang Direkomendasikan: 2 x 2m',
            'Membutuhkan sekitar 2 stop kontak terdekat dalam radius 5m'
          ],
          bestFor: [
            'Acara Perusahaan',
            'Pernikahan',
            'Peluncuran Produk',
            'Acara Sekolah',
            'Pesta Ulang Tahun',
            'Acara Keluarga'
          ]
        }
      ],
      backdrops: [
        { title: 'Caramel Sequin Besar', description: 'Backdrop ukuran tetap 1.8m x 1.8m' },
        { title: 'Peacock Sequin Besar', description: 'Backdrop ukuran tetap 1.8m x 1.8m' },
        { title: 'Pink Sequin Besar', description: 'Backdrop ukuran tetap 1.8m x 1.8m' },
        { title: 'Black Sequin Besar', description: 'Backdrop ukuran tetap 1.8m x 1.8m' },
        { title: 'Shiny Silver Sequin Besar', description: 'Backdrop ukuran tetap 1.8m x 1.8m' },
        { title: 'Pink Solid Besar', description: 'Backdrop ukuran tetap 1.8m x 1.8m' },
        { title: 'White Solid Besar', description: 'Backdrop ukuran tetap 1.8m x 1.8m' },
        { title: 'Green Solid Besar', description: 'Backdrop ukuran tetap 1.8m x 1.8m' },
        { title: 'Yellow Solid Besar', description: 'Backdrop ukuran tetap 1.8m x 1.8m' },
        { title: 'Black & Gold Sequin Kecil', description: 'Backdrop dapat disesuaikan hingga 1.5m x 1.5m' },
        { title: 'White Sequin Kecil', description: 'Backdrop dapat disesuaikan hingga 1.5m x 1.5m' },
        { title: 'Black Solid Kecil', description: 'Backdrop dapat disesuaikan hingga 1.5m x 1.5m' },
        { title: 'Greenscreen Backdrop', description: 'Efek greenscreen dengan pilihan desain Anda sendiri' },
        { title: 'Custom Hard Panel', description: 'Panel kuat dengan karpet dan pencahayaan' },
        { title: 'Custom 3D Pop up backdrop', description: 'Backdrop Pop up Kustom dengan pilihan desain Anda' },
        { title: 'Custom Decoration', description: 'Backdrop Kustom dengan Bunga pilihan Anda' }
      ]
    },
    'roaming-photo-booth': {
      title: 'Roaming Photo Booth',
      description: 'Photobooth yang bisa bergerak kemana saja di event anda',
      fullDescription: `
Photobooth roaming merupakan solusi sempurna jika Anda membutuhkan photobooth yang bisa mingle atau berpindah-pindah bisa berkeliling dan berinteraksi langsung dengan tamu di acara Anda. Mencari layanan sewa mobile photobooth Jakarta dengan fleksibilitas maksimal dan kualitas pelayanan terbaik? Layanan Roaming Photobooth kami adalah solusinya.
═══════
Kami menawarkan 2 model photobooth roaming yang dapat disesuaikan dengan kebutuhan acara Anda:
📷 DSLR Roaming
Menggunakan kamera DSLR profesional untuk hasil foto berkualitas. Dilengkapi dengan lighting flash. Perfect untuk acara formal yang mengutamakan kualitas gambar terbaik.
📷 Ring Roaming 
Menggunakan iPad kamera depan dengan layar preview yang besar.Dilengkapi dengan lighting ringlight. Cocok untuk segala acara.
═══════
Kedua model dilengkapi dengan:
✅ Sharing instan melalui QR code, email, atau AirDrop ke social media
✅ Operator profesional yang ramah dan berpengalaman mengelola crowd
✅ Props mobile yang mudah dibawa dan disesuaikan tema acara
✅ Battery power untuk operasional tanpa ketergantungan listrik lokasi
═══════
Setup mobile photobooth ini sempurna untuk:
💍 Photobooth Wedding dengan konsep Garden Party atau Outdoor 
👔 Photobooth Corporate Event dengan Networking Session 
🎉 Photobooth Birthday Party untuk area terbatas 
🏢 Photobooth Exhibition & Trade Show untuk menarik perhatian booth kamu dengan mengadakan print station di booth kamu.
🤝 Event Gathering dengan photobooth di berbagai spot dalam satu venue 
═══════
Mengapa Mobile Photobooth rental kami terbaik di Jakarta?
✅ 3 Model Roaming Terbaik: DSLR Model untuk kualitas premium dan O Booth Model untuk fleksibilitas maksimal
✅ Mobility Tinggi: Dapat beroperasi di area outdoor, indoor, atau berpindah-pindah sesuai kebutuhan acara
✅ Operator Berpengalaman: Tim yang terlatih dalam pelayanan tamu dan teknis alat
✅ Coverage Area Luas: Melayani DKI Jakarta, Bogor, Depok, Tangerang, Bekasi dan sekitarnya
✅ All-in-One Package: Termasuk operator, props mobile, dan sistem sharing digital
Dengan pengalaman melayani berbagai jenis acara mobile di Jakarta, kami memahami tantangan unik photobooth roaming dan memberikan solusi terbaik. Jadikan acara Anda lebih interaktif dan memorable dengan mobile photobooth rental terpercaya kami.
      `,
      features: [
        'Fotografer profesional mobile',
        'Cetak foto instan',
        'Berkeliling di seluruh venue',
        'Kamera DSLR profesional',
        'Peralatan pencahayaan berkualitas tinggi',
        'Opsi berbagi digital',
        'Template foto kustom',
        'Akses galeri online'
      ]
    },
    'photobox': {
      title: 'Photobox',
      description: 'Solusi photobox all-in-one Anda',
      fullDescription: `
        Rasakan solusi foto all-in-one terbaik dengan layanan Photobox kami. Paket komprehensif ini menggabungkan peralatan fotografi profesional dengan operasi yang user-friendly, membuatnya sempurna untuk acara berukuran apa pun.
        
        Semua yang Anda butuhkan untuk fotografi acara profesional dalam satu paket yang praktis.
      `,
      features: [
        'Solusi all-in-one',
        'Setup kamera profesional',
        'Operasi mudah',
        'Cetak instan',
        'Galeri digital',
        'Branding kustom',
        'Desain kompak',
        'Setup cepat'
      ]
    },
    '360-video-booth': {
      title: '360 Video Booth',
      description: 'Pengalaman video 360 derajat yang menakjubkan',
      fullDescription: `
🎥 360 Video Booth dari Awwnderful bikin acara kamu makin seru! Rekam momen dengan efek cinematic 360° yang langsung siap dibagikan ke TikTok & Instagram.

Fasilitas lengkap: platform 360 untuk 4–6 orang, kamera iPhone, lighting, crew profesional, custom frame branding, unlimited video, soundtrack, dan sharing instan via QR code atau WhatsApp.

✨ Paket hemat & hasil video siap viral. Booking sekarang dan jadikan eventmu unforgettable!
      `,
      features: [
        'Teknologi kamera 360 derajat',
        'Video berkualitas HD',
        'Efek slow motion',
        'Berbagi media sosial instan',
        'Platform berputar profesional',
        'Pencahayaan LED',
        'Editing otomatis',
        'Galeri online'
      ]
    },
    'hashtag-printer': {
      title: 'Hashtag Printer',
      description: 'Ubah postingan media sosial acara Anda menjadi kenangan fisik instan dengan layanan Hashtag Printer kami.',
      fullDescription: `
        Jembatani dunia digital dan fisik dengan layanan Hashtag Printer yang inovatif. Layanan ini memungkinkan tamu untuk mencetak postingan Instagram mereka secara real-time dengan hashtag acara Anda.
        
        Sempurna untuk meningkatkan engagement media sosial sambil memberikan souvenir fisik yang berkesan.
      `,
      features: [
        'Pencetakan real-time',
        'Integrasi Instagram',
        'Hashtag custom',
        'Kualitas cetak tinggi',
        'Moderasi konten',
        'Branding acara',
        'Setup mudah',
        'Analytics engagement'
      ]
    },
    'virtual-photo-booth': {
      title: 'Virtual Photo Booth',
      description: 'Pengalaman photo booth digital untuk acara online',
      fullDescription: `
        Bawa keseruan photo booth ke acara virtual Anda dengan layanan Virtual Photo Booth kami. Solusi inovatif ini memungkinkan tamu berpartisipasi dalam pengalaman photo booth dari rumah mereka masing-masing.
        
        Sempurna untuk acara hybrid, webinar, dan perayaan virtual yang ingin tetap interaktif dan berkesan.
      `,
      features: [
        'Akses dari mana saja',
        'Filter dan efek virtual',
        'Berbagi instan',
        'Galeri terpusat',
        'Branding kustom',
        'Analytics peserta',
        'Multi-platform support',
        'Moderasi konten'
      ]
    },
    'video-booth': {
      title: 'Video Booth',
      description: 'Abadikan pesan video dan reaksi',
      fullDescription: `
        Berikan platform kepada tamu untuk mengekspresikan diri dengan layanan Video Booth kami. Berbeda dari photo booth tradisional, layanan ini memungkinkan tamu merekam pesan video pribadi dan reaksi spontan.
        
        Sempurna untuk mengabadikan ucapan selamat, testimoni, dan momen emosional yang tidak bisa ditangkap melalui foto.
      `,
      features: [
        'Perekaman video HD',
        'Audio berkualitas tinggi',
        'Interface user-friendly',
        'Berbagi instan',
        'Galeri video terpusat',
        'Custom branding',
        'Durasi fleksibel',
        'Backup otomatis'
      ]
    },
    'livestreaming': {
      title: 'Livestreaming',
      description: 'Siarkan acara Anda kepada audiens yang lebih luas',
      fullDescription: `
        Perluas jangkauan acara Anda dengan layanan Livestreaming profesional kami. Dengan setup broadcasting berkualitas tinggi, kami memastikan acara Anda dapat dinikmati oleh audiens di mana pun mereka berada.
        
        Sempurna untuk conference, product launch, wedding, dan acara penting yang ingin dibagikan dengan audiens global.
      `,
      features: [
        'Streaming kualitas HD',
        'Multi-platform broadcasting',
        'Audio profesional',
        'Grafik dan lower thirds',
        'Real-time monitoring',
        'Backup recording',
        'Technical support',
        'Analytics viewership'
      ]
    },
    'multicamera': {
      title: 'MultiCamera',
      description: 'Abadikan setiap sudut momen spesial Anda',
      fullDescription: `
        Ciptakan efek visual yang spektakuler dengan sistem MultiCamera kami. Teknologi bullet-time dan matrix effect yang menggunakan multiple kamera memberikan perspektif unik yang tidak bisa didapatkan dengan kamera tunggal.
        
        Sempurna untuk acara yang ingin tampil cinematik dan memberikan pengalaman fotografi yang benar-benar unik.
      `,
      features: [
        'Array multiple kamera',
        'Efek bullet-time',
        'Matrix slow motion',
        'Sinkronisasi sempurna',
        'Post-processing otomatis',
        'Video berkualitas 4K',
        'Sharing instan',
        'Setup profesional'
      ]
    },
    'ai-photo-booth': {
      title: 'AI Photo Booth',
      description: 'Pengalaman photo booth generasi terbaru dengan teknologi AI',
      fullDescription: `
        Masuki era baru fotografi acara dengan AI Photo Booth kami. Teknologi artificial intelligence memungkinkan berbagai fitur canggih seperti background removal otomatis, style transfer, dan efek AI yang memukau.
        
        Sempurna untuk acara teknologi, brand modern, dan tamu yang menyukai inovasi terbaru.
      `,
      features: [
        'AI-powered effects',
        'Background removal otomatis',
        'Style transfer',
        'Face enhancement',
        'Real-time processing',
        'Custom AI models',
        'Cloud integration',
        'Future-ready technology'
      ]
    },
    'custom-photo-print': {
      title: 'Custom Photo Print',
      description: 'Berikan tamu Anda souvenir unik yang benar-benar ingin mereka simpan!',
      fullDescription: `
        Ciptakan kesan lasting dengan layanan Custom Photo Print kami. Dari cetakan hologram hingga material khusus, kami menawarkan berbagai opsi pencetakan yang membuat foto acara Anda menjadi souvenir yang benar-benar berkesan.
        
        Sempurna untuk acara eksklusif, corporate branding, dan memberikan value tambah pada pengalaman tamu.
      `,
      features: [
        'Cetakan hologram',
        'Material premium',
        'Custom shapes',
        'Branding integration',
        'Kualitas tahan lama',
        'Packaging menarik',
        'Desain eksklusif',
        'Personalisasi tinggi'
      ]
    },
    'decoration': {
      title: 'Decoration',
      description: 'Layanan dekorasi yang memungkinkan Anda menciptakan dekorasi yang indah dan unik untuk acara Anda.',
      fullDescription: `
        Transformasikan venue Anda menjadi ruang yang magical dengan layanan Decoration komprehensif kami. Tim desainer berpengalaman akan bekerja sama dengan Anda untuk mewujudkan visi acara impian.
        
        Dari konsep hingga eksekusi, kami menangani setiap detail untuk menciptakan atmosfer yang sempurna untuk acara Anda.
      `,
      features: [
        'Konsultasi desain personal',
        'Tema custom',
        'Bunga premium',
        'Lighting design',
        'Setup dan teardown',
        'Material berkualitas',
        'Koordinasi venue',
        'Photography-ready setup'
      ]
    },
    'photo-video-documentation': {
      title: 'Photo & Video Documentation',
      description: 'Layanan dokumentasi foto dan video profesional untuk momen spesial Anda.',
      fullDescription: `
        Abadikan setiap momen berharga dengan layanan Photo & Video Documentation profesional kami. Tim photographer dan videographer berpengalaman akan mendokumentasikan acara Anda dengan pendekatan artistik dan jurnalistik.
        
        Dari candid shots hingga formal portraits, kami memastikan tidak ada momen penting yang terlewat.
      `,
      features: [
        'Photographer profesional',
        'Videographer berpengalaman',
        'Peralatan premium',
        'Editing profesional',
        'Galeri online',
        'Multiple formats',
        'Same-day highlights',
        'Backup redundant'
      ]
    },
    'light-painting': {
      title: 'Light Painting',
      description: 'Fotografi light painting artistik yang menciptakan efek visual unik',
      fullDescription: `
        Ciptakan karya seni visual yang menakjubkan dengan teknik Light Painting kami. Menggabungkan fotografi long exposure dengan gerakan cahaya yang terkoordinasi, menghasilkan efek visual yang tidak bisa didapatkan dengan fotografi konvensional.
        
        Sempurna untuk acara artistik, brand kreatif, dan tamu yang mencari pengalaman fotografi yang benar-benar unik.
      `,
      features: [
        'Teknik long exposure',
        'Light effects kreatif',
        'Artistic composition',
        'Custom light patterns',
        'Professional guidance',
        'Instant results',
        'Social media ready',
        'Unique memorabilia'
      ]
    },
    'audio-rental': {
      title: 'Sewa Audio',
      description: 'Sistem suara profesional untuk acara Anda dengan berbagai pilihan daya.',
      fullDescription: `
        Pastikan suara acara Anda terdengar sempurna dengan layanan Audio Rental kami. Dari sistem sound kecil hingga setup audio besar, kami menyediakan peralatan berkualitas tinggi dengan dukungan teknis profesional.
        
        Dengan berbagai pilihan daya dan konfigurasi, kami dapat mengakomodasi acara berukuran apa pun.
      `,
      features: [
        'Sistem sound profesional',
        'Multiple power options',
        'Wireless microphones',
        'Audio mixing console',
        'Technical support',
        'Setup dan tuning',
        'Backup equipment',
        'Volume compliance'
      ]
    },
    'interactive-display': {
      title: 'Interactive Display',
      description: 'Display digital yang menarik dan layar interaktif untuk pengalaman tamu yang enhanced',
      fullDescription: `
        Tingkatkan engagement tamu dengan Interactive Display kami. Layar sentuh berukuran besar dengan konten interaktif yang dapat dikustomisasi sesuai kebutuhan acara Anda.
        
        Dari product showcase hingga game interaktif, memberikan pengalaman digital yang memorable untuk tamu.
      `,
      features: [
        'Large touchscreen displays',
        'Custom interactive content',
        'Multi-touch capability',
        'Brand integration',
        'Real-time updates',
        'Analytics tracking',
        'Professional installation',
        'Remote management'
      ]
    },
    'invitation-digitalguestbook': {
      title: 'Invitation & Digital Guestbook',
      description: 'Undangan digital dan buku tamu interaktif untuk acara modern',
      fullDescription: `
        Modernisasi pengalaman undangan dan buku tamu dengan solusi digital kami. Dari undangan multimedia yang interaktif hingga digital guestbook yang dapat diakses real-time.
        
        Sempurna untuk acara modern yang mengutamakan efisiensi dan pengalaman digital yang seamless.
      `,
      features: [
        'Digital invitations',
        'RSVP management',
        'Interactive guestbook',
        'Multimedia messages',
        'Real-time updates',
        'Social media integration',
        'Analytics dashboard',
        'Mobile responsive'
      ]
    },
    'virtual-reality': {
      title: 'Virtual Reality',
      description: 'Pengalaman virtual reality yang imersif untuk membawa tamu ke dunia baru',
      fullDescription: `
        Bawa tamu Anda ke dimensi baru dengan pengalaman Virtual Reality yang imersif. Dari game interaktif hingga virtual tours, VR memberikan entertainment value yang tinggi dan memorable.
        
        Sempurna untuk acara teknologi, product launch, dan memberikan wow factor pada acara Anda.
      `,
      features: [
        'VR headsets premium',
        'Immersive experiences',
        'Custom VR content',
        'Multi-user capability',
        'Professional supervision',
        'Sanitization protocols',
        'Technical support',
        'Content variety'
      ]
    }
  }
}

export const getServiceTranslation = (language: Language, serviceSlug: string) => {
  return serviceTranslations[language]?.[serviceSlug] || serviceTranslations['en']?.[serviceSlug]
} 