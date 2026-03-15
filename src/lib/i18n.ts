export type Language = 'en' | 'id'

export interface Translations {
  // Navigation
  nav: {
    home: string
    services: string
    features: string
    seeMore: string
    lookbook: string
    blog: string
    faq: string
    seeYourPhotos: string
    bookNow: string
    onlineGallery: string
  }
  // Hero Section
  hero: {
    title: string
    subtitle: string
    professionalSetup: string
    easyBooking: string
    multipleLocations: string
    bookYourEvent: string
  }
  // Services
  services: {
    title: string
    subtitle: string
    photobooth: string
    photoboothDesc: string
    videobooth: string
    videoboothDesc: string
    audioRental: string
    audioRentalDesc: string
    eventOrganizer: string
    eventOrganizerDesc: string
    learnMore: string
    showLess: string
    seeMoreServices: string
    // Individual service descriptions
    photoboothGifDesc: string
    roamingPhotoBoothDesc: string
    video360BoothDesc: string
    hashtagPrinterDesc: string
    virtualPhotoBoothDesc: string
    videoBoothDesc: string
    livestreamingDesc: string
    multicameraDesc: string
    aiPhotoBoothDesc: string
    customPhotoPrintDesc: string
    decorationDesc: string
    photoVideoDocumentationDesc: string
    lightPaintingDesc: string
    audioRentalDetailDesc: string
    interactiveDisplayDesc: string
    invitationDigitalGuestbookDesc: string
    virtualRealityDesc: string
    photoboxDesc: string
  }
  // Service Pages
  servicePage: {
    aboutService: string
    features: string
    chooseYourService: string
    relatedBlogsCaseStudies: string
    gallery: string
    specifications: string
    bestFor: string
    models: string
    backdrops: string
    outputSamples: string
    electricConsumption: string
    setupArea: string
    powerOutlets: string
    closeModal: string
    prevImage: string
    nextImage: string
    viewLarger: string
    readMore: string
    corporateEvents: string
    wedding: string
    productLaunches: string
    schoolEvents: string
    birthdayParties: string
    familyGatherings: string
    relatedBlogs: string
    noBlogsAvailable: string
    viewAllServices: string
  }
  // Features
  features: {
    title: string
    subtitle: string
    professional: string
    professionalDesc: string
    modern: string
    modernDesc: string
    reliable: string
    reliableDesc: string
    highQuality: string
    highQualityDesc: string
    instantDigital: string
    instantDigitalDesc: string
    unlimitedPrints: string
    unlimitedPrintsDesc: string
    funProps: string
    funPropsDesc: string
    customBranding: string
    customBrandingDesc: string
    quickSetup: string
    quickSetupDesc: string
  }
  // Lookbook
  lookbook: {
    title: string
    subtitle: string
    viewFullLookbook: string
  }
  // Clients
  clients: {
    title: string
    brands: string
    activations: string
    inIndonesia: string
  }
  // Footer
  footer: {
    description: string
    quickLinks: string
    services: string
    contact: string
    followUs: string
    copyright: string
  }
  // Contact/Booking
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    phone: string
    eventType: string
    eventDate: string
    location: string
    message: string
    submit: string
    sending: string
    flexibleScheduling: string
    flexibleSchedulingDesc: string
    durationOptions: string
    durationOptionsDesc: string
    serviceAreas: string
    serviceAreasDesc: string
    eventDetails: string
    eventDetailsPlaceholder: string
    successMessage: string
    errorMessage: string
    sendInquiry: string
  }
  // SEO
  seo: {
    title: string
    description: string
    keywords: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      features: 'Features',
      seeMore: 'See More',
      lookbook: 'Lookbook',
      blog: 'Blog',
      faq: 'FAQ',
      seeYourPhotos: 'See your photos',
      bookNow: 'Book Now',
      onlineGallery: 'Online Gallery'
    },
    hero: {
      title: 'Capture Your Special Moments',
      subtitle: 'Premium photo booth experiences for your celebrations in Jakarta',
      professionalSetup: 'Professional Setup',
      easyBooking: 'Easy Booking',
      multipleLocations: 'Multiple Locations',
      bookYourEvent: 'Book Your Event'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Professional event solutions tailored to your needs',
      photobooth: 'Photo Booth',
      photoboothDesc: 'Professional photo booth services with instant prints and digital sharing',
      videobooth: 'Video Booth',
      videoboothDesc: '360° video experiences and interactive video content creation',
      audioRental: 'Audio Rental',
      audioRentalDesc: 'High-quality sound systems and audio equipment for your events',
      eventOrganizer: 'Event Organizer',
      eventOrganizerDesc: 'Complete event planning and coordination services',
      learnMore: 'Learn More',
      showLess: 'Show Less',
      seeMoreServices: 'See More Services',
      // Individual service descriptions
      photoboothGifDesc: 'Create animated GIFs with our professional photo booth service for memorable moments',
      roamingPhotoBoothDesc: 'Mobile photo booth service that moves around your venue for maximum engagement',
      video360BoothDesc: 'Capture stunning 360-degree videos with our professional rotating camera setup',
      hashtagPrinterDesc: 'Instantly print social media posts with custom hashtags to boost engagement',
      virtualPhotoBoothDesc: 'Remote photo booth experience that allows guests to participate from anywhere',
      videoBoothDesc: 'Professional video recording booth for creative and unique event memories',
      livestreamingDesc: 'Broadcast your event live to a wider audience with professional streaming setup',
      multicameraDesc: 'Create stunning bullet-time effects with our multi-camera array system',
      aiPhotoBoothDesc: 'Next-generation photo booth experience powered by artificial intelligence',
      customPhotoPrintDesc: 'Create unique holographic and custom prints of your special moments',
      decorationDesc: 'Complete decoration service to transform your venue into something magical',
      photoVideoDocumentationDesc: 'Professional photography and videography to document your entire event',
      lightPaintingDesc: 'Artistic light painting photography that creates unique visual effects',
      audioRentalDetailDesc: 'Professional sound systems with multiple power options for any event size',
      interactiveDisplayDesc: 'Engaging digital displays and interactive screens for enhanced guest experience',
      invitationDigitalGuestbookDesc: 'Digital invitations and interactive guestbook solutions for modern events',
      virtualRealityDesc: 'Immersive virtual reality experiences to transport your guests to new worlds',
      photoboxDesc: 'All-in-one photo booth solution with everything you need for perfect event photos'
    },
    features: {
      title: 'What You Get',
      subtitle: 'Everything you need for an amazing photo booth experience',
      professional: 'Professional Quality',
      professionalDesc: 'High-end equipment and experienced operators',
      modern: 'Modern Technology',
      modernDesc: 'Latest photo booth technology and social media integration',
      reliable: 'Reliable Service',
      reliableDesc: 'On-time delivery and professional support throughout your event',
      highQuality: 'High-Quality Photos',
      highQualityDesc: 'Professional DSLR cameras and lighting setup for stunning photos',
      instantDigital: 'Instant Digital Copies',
      instantDigitalDesc: 'Get your photos instantly via email or QR code',
      unlimitedPrints: 'Unlimited Prints',
      unlimitedPrintsDesc: 'Take home as many prints as you want during your event',
      funProps: 'Fun Props',
      funPropsDesc: 'Wide selection of props and accessories for creative shots',
      customBranding: 'Custom Branding',
      customBrandingDesc: 'Personalized templates with your event theme or branding',
      quickSetup: 'Quick Setup',
      quickSetupDesc: 'Professional setup and teardown included'
    },
    lookbook: {
      title: 'Our Lookbook',
      subtitle: 'Explore our collection of memorable moments captured at various events',
      viewFullLookbook: 'View Full Lookbook'
    },
    clients: {
      title: 'For over 7 years, we\'ve made magic for',
      brands: 'brands',
      activations: 'activations',
      inIndonesia: 'In Indonesia'
    },
    footer: {
      description: 'Premium photo booth and event services in Jakarta, Indonesia',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      followUs: 'Follow Us',
      copyright: 'Awwnderful Photo Booth. All rights reserved.'
    },
    contact: {
      title: 'Book Your Event',
      subtitle: 'Let\'s make your event special with our premium photo booth services',
      name: 'Your Name',
      email: 'Email Address',
      phone: 'Phone',
      eventType: 'Event Type',
      eventDate: 'Event Date',
      location: 'Location',
      message: 'Message',
      submit: 'Send Message',
      sending: 'Sending...',
      flexibleScheduling: 'Flexible Scheduling',
      flexibleSchedulingDesc: 'Available for events any day of the week',
      durationOptions: 'Duration Options',
      durationOptionsDesc: '2-hour minimum to full-day coverage',
      serviceAreas: 'Service Areas',
      serviceAreasDesc: 'Jakarta, Indonesia',
      eventDetails: 'Event Details',
      eventDetailsPlaceholder: 'Tell us about your event...',
      successMessage: 'Thank you! Your inquiry has been sent successfully. We\'ll get back to you soon.',
      errorMessage: 'Sorry, there was an error sending your inquiry. Please try again or contact us directly.',
      sendInquiry: 'Send Inquiry'
    },
    servicePage: {
      aboutService: 'About this Service',
      features: 'Features',
      chooseYourService: 'Choose Your Service',
      relatedBlogsCaseStudies: 'Related Blogs & Case Studies',
      gallery: 'Gallery',
      specifications: 'Specifications',
      bestFor: 'Best For',
      models: 'Models',
      backdrops: 'Backdrops',
      outputSamples: 'Output Samples',
      electricConsumption: 'Electric Consumption',
      setupArea: 'Recommended Setup Area',
      powerOutlets: 'Power Outlets Needed',
      closeModal: 'Close',
      prevImage: 'Previous',
      nextImage: 'Next',
      viewLarger: 'View Larger',
      readMore: 'Read More',
      corporateEvents: 'Corporate Events',
      wedding: 'Wedding',
      productLaunches: 'Product Launches',
      schoolEvents: 'School Events',
      birthdayParties: 'Birthday Parties',
      familyGatherings: 'Family Gatherings',
      relatedBlogs: 'Related Blogs',
      noBlogsAvailable: 'No blogs available for this service',
      viewAllServices: 'View All Services'
    },
    seo: {
      title: 'Awwnderful Photo Booth - Premium Photobooth Rental Jakarta & Indonesia',
      description: 'Premium photobooth rental services for weddings, corporate events, and celebrations in Jakarta & Indonesia. Professional photo booth experiences with instant sharing.',
      keywords: 'photo booth rental jakarta, photobooth rental indonesia, sewa photobooth jakarta, event photography, wedding photo booth, corporate events, party photography'
    }
  },
  id: {
    nav: {
      home: 'Beranda',
      services: 'Layanan',
      features: 'Keunggulan',
      seeMore: 'Lihat Lainnya',
      lookbook: 'Lookbook',
      blog: 'Blog',
      faq: 'FAQ',
      seeYourPhotos: 'Lihat foto Anda',
      bookNow: 'Pesan Sekarang',
      onlineGallery: 'Galeri Online'
    },
    hero: {
      title: 'Abadikan Momen Spesial Anda',
      subtitle: 'Sewa photobooth profesional di area indonesia',
      professionalSetup: 'Setup Profesional',
      easyBooking: 'Pemesanan Mudah',
      multipleLocations: 'Berbagai Lokasi',
      bookYourEvent: 'Pesan Event Anda'
    },
    services: {
      title: 'Layanan Kami',
      subtitle: 'Solusi event profesional yang disesuaikan dengan kebutuhan Anda',
      photobooth: 'Photo Booth',
      photoboothDesc: 'Layanan photobooth profesional dengan cetak instan dan berbagi digital',
      videobooth: 'Video Booth',
      videoboothDesc: 'Pengalaman video 360° dan pembuatan konten video interaktif',
      audioRental: 'Sewa Audio',
      audioRentalDesc: 'Sistem suara berkualitas tinggi dan peralatan audio untuk event Anda',
      eventOrganizer: 'Event Organizer',
      eventOrganizerDesc: 'Layanan perencanaan dan koordinasi event lengkap',
      learnMore: 'Pelajari Lebih Lanjut',
      showLess: 'Tampilkan Lebih Sedikit',
      seeMoreServices: 'Lihat Layanan Lainnya',
      // Individual service descriptions
      photoboothGifDesc: 'Buat GIF animasi dengan layanan photobooth profesional untuk momen berkesan',
      roamingPhotoBoothDesc: 'Layanan photobooth mobile yang berkeliling venue untuk engagement maksimal',
      video360BoothDesc: 'Videobooth dengan setup kamera 360 derajat',
      hashtagPrinterDesc: 'Cetak postingan media sosial secara instan dengan hashtag custom untuk boost engagement',
      virtualPhotoBoothDesc: 'Pengalaman photobooth remote yang memungkinkan tamu berpartisipasi dari mana saja',
      videoBoothDesc: 'Booth perekaman video profesional untuk kenangan event yang kreatif dan unik',
      livestreamingDesc: 'Siarkan event Anda secara langsung kepada audiens yang lebih luas dengan setup streaming profesional',
      multicameraDesc: 'Ciptakan efek bullet-time menakjubkan dengan sistem array multi-kamera kami',
      aiPhotoBoothDesc: 'Pengalaman photobooth generasi terbaru yang didukung artificial intelligence',
      customPhotoPrintDesc: 'Buat cetakan hologram dan custom yang unik dari momen spesial Anda',
      decorationDesc: 'Layanan dekorasi lengkap untuk mengubah venue Anda menjadi sesuatu yang magis',
      photoVideoDocumentationDesc: 'Fotografi dan videografi profesional untuk mendokumentasikan seluruh event Anda',
      lightPaintingDesc: 'Fotografi light painting artistik yang menciptakan efek visual unik',
      audioRentalDetailDesc: 'Sistem suara profesional dengan berbagai pilihan daya untuk event berukuran apa pun',
      interactiveDisplayDesc: 'Display digital yang menarik dan layar interaktif untuk pengalaman tamu yang lebih baik',
      invitationDigitalGuestbookDesc: 'Solusi undangan digital dan buku tamu interaktif untuk event modern',
      virtualRealityDesc: 'Pengalaman virtual reality yang imersif untuk membawa tamu ke dunia baru',
      photoboxDesc: 'Solusi photobooth all-in-one dengan semua yang Anda butuhkan untuk foto event yang sempurna'
    },
    features: {
      title: 'Apa Yang Anda Dapatkan',
      subtitle: 'Semua yang Anda butuhkan untuk pengalaman photobooth yang menakjubkan',
      professional: 'Kualitas Profesional',
      professionalDesc: 'Peralatan berkualitas tinggi dan operator berpengalaman',
      modern: 'Teknologi Modern',
      modernDesc: 'Teknologi photobooth terbaru dan selalu update dengan trend',
      reliable: 'Layanan Terpercaya',
      reliableDesc: 'Instalasi tepat waktu dan servis profesional selama event Anda',
      highQuality: 'Foto Berkualitas Tinggi',
      highQualityDesc: 'Kamera DSLR profesional dan setup pencahayaan untuk kualitas studio',
      instantDigital: 'Share to email',
      instantDigitalDesc: 'Dapatkan foto Anda secara instan melalui email atau Scan QR code',
      unlimitedPrints: 'Cetak Tanpa Batas',
      unlimitedPrintsDesc: 'Cetak bebas selama durasi event',
      funProps: 'Properti Seru',
      funPropsDesc: 'Pilihan properti dan aksesori yang beragam untuk foto',
      customBranding: 'Branding Kustom',
      customBrandingDesc: 'Template yang dipersonalisasi dengan tema atau branding event Anda',
      quickSetup: 'Setup Cepat',
      quickSetupDesc: 'Setup dan Breakdown alat sudah termasuk'
    },
    lookbook: {
      title: 'Galeri Kami',
      subtitle: 'Jelajahi koleksi momen berkesan yang diabadikan di berbagai event',
      viewFullLookbook: 'Lihat Galeri Lengkap'
    },
    clients: {
      title: 'Selama lebih dari 7 tahun, kami telah menciptakan keajaiban untuk',
      brands: 'brand',
      activations: 'acara',
      inIndonesia: 'Di Indonesia'
    },
    footer: {
      description: 'Layanan photobooth, jasa, rental alat dan servis lainnya di Jakarta, Indonesia',
      quickLinks: 'Tautan Cepat',
      services: 'Layanan',
      contact: 'Kontak',
      followUs: 'Ikuti Kami',
      copyright: 'Awwnderful Photo Booth. Hak cipta dilindungi.'
    },
    contact: {
      title: 'Pesan Event Anda',
      subtitle: 'Langsung booking photobooth sebelum kehabisan slot',
      name: 'Nama Anda',
      email: 'Alamat Email',
      phone: 'Telepon',
      eventType: 'Jenis Event',
      eventDate: 'Tanggal Event',
      location: 'Lokasi',
      message: 'Pesan',
      submit: 'Kirim Pesan',
      sending: 'Mengirim...',
      flexibleScheduling: 'Jadwal Fleksibel',
      flexibleSchedulingDesc: 'Tersedia untuk event di hari apa saja',
      durationOptions: 'Pilihan Durasi',
      durationOptionsDesc: 'Minimal 2 jam hingga seharian penuh',
      serviceAreas: 'Area Layanan',
      serviceAreasDesc: 'Jakarta, Bogor, Depok, Tangerang dan sekitarnya',
      eventDetails: 'Detail Event',
      eventDetailsPlaceholder: 'Ceritakan tentang event Anda...',
      successMessage: 'Terima kasih! Pertanyaan Anda berhasil dikirim. Kami akan segera menghubungi Anda.',
      errorMessage: 'Maaf, terjadi kesalahan saat mengirim pertanyaan. Silakan coba lagi atau hubungi kami langsung.',
      sendInquiry: 'Kirim Pertanyaan'
    },
    servicePage: {
      aboutService: 'Tentang Layanan Ini',
      features: 'Fitur-Fitur',
      chooseYourService: 'Pilih Layanan Anda',
      relatedBlogsCaseStudies: 'Blog & Studi Kasus Terkait',
      gallery: 'Galeri',
      specifications: 'Spesifikasi',
      bestFor: 'Cocok Untuk',
      models: 'Model',
      backdrops: 'Backdrop',
      outputSamples: 'Contoh Hasil',
      electricConsumption: 'Konsumsi Listrik',
      setupArea: 'Area Setup yang Direkomendasikan',
      powerOutlets: 'Stop Kontak yang Dibutuhkan',
      closeModal: 'Tutup',
      prevImage: 'Sebelumnya',
      nextImage: 'Selanjutnya',
      viewLarger: 'Lihat Lebih Besar',
      readMore: 'Baca Selengkapnya',
      corporateEvents: 'Acara Perusahaan',
      wedding: 'Pernikahan',
      productLaunches: 'Peluncuran Produk',
      schoolEvents: 'Acara Sekolah',
      birthdayParties: 'Pesta Ulang Tahun',
      familyGatherings: 'Acara Keluarga',
      relatedBlogs: 'Blog Terkait',
      noBlogsAvailable: 'Tidak ada blog yang tersedia untuk layanan ini',
      viewAllServices: 'Lihat Semua Layanan'
    },
    seo: {
      title: 'Awwnderful Photo Booth - Sewa dan rental Photobooth Jakarta, Bogor, Depok, Tangerang dan sekitarnya',
      description: 'Sewa photobooth untuk wedding, ulang tahun, acara kantor dan event activation di Jakarta, Bogor, Depok, Tangerang dan sekitarnya. Pengalaman photobooth profesional dengan sharing instant.',
      keywords: 'photobooth gif jakarta, sewa photobooth jakarta, photobooth rental jakarta, photobooth wedding jakarta, sewa photobooth acara kantor'
    }
  }
}

export const getTranslation = (language: Language): Translations => {
  return translations[language] || translations.en
} 