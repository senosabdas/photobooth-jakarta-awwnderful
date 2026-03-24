// Content block types
export type ContentBlockType = 
  | 'text'
  | 'image'
  | 'gallery'
  | 'quote'
  | 'video'
  | 'comparison'
  | 'callout'
  | 'list';

export interface BaseContentBlock {
  type: ContentBlockType;
  id: string;
}

export interface TextBlock extends BaseContentBlock {
  type: 'text';
  content: string;
  style?: 'normal' | 'large' | 'small' | 'medium';
}

export interface ImageBlock extends BaseContentBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  layout?: 'full' | 'wide' | 'normal';
}

export interface GalleryBlock extends BaseContentBlock {
  type: 'gallery';
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  layout?: 'grid' | 'carousel' | 'masonry';
    gridAlignment?: 'start' | 'center' | 'end';
}

export interface QuoteBlock extends BaseContentBlock {
  type: 'quote';
  quote: string;
  author?: string;
  style?: 'simple' | 'featured';
}

export interface VideoBlock extends BaseContentBlock {
  type: 'video';
  src: string;
  poster?: string;
  caption?: string;
}

export interface ComparisonBlock extends BaseContentBlock {
  type: 'comparison';
  items: {
    title: string;
    description: string;
    pros?: string[];
    cons?: string[];
  }[];
}

export interface CalloutBlock extends BaseContentBlock {
  type: 'callout';
  content: string;
  style: 'info' | 'warning' | 'tip' | 'note';
}

export interface ListBlock extends BaseContentBlock {
  type: 'list';
  items: string[];
  style: 'bullet' | 'numbered' | 'checklist';
}

export type ContentBlock = 
  | TextBlock 
  | ImageBlock 
  | GalleryBlock 
  | QuoteBlock 
  | VideoBlock
  | ComparisonBlock
  | CalloutBlock
  | ListBlock;

export interface Blog {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  slug: string;
  productTags: string[];
  content: ContentBlock[];
  publishedAt: string;
  draft?: boolean;
  author: {
    name: string;
    image: string;
  };
}

export const blogs: Blog[] = [

  {
    id: 'case-studies-keychain-photobooth-trends',
    title: 'Keychain Photobooth: Tren Souvenir Event yang Semakin Populer di Jakarta',
    image: '/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta.avif',
    excerpt: 'Keychain photobooth menjadi salah satu souvenir event paling diminati. Simak tren dan inspirasi desain keychain photobooth terbaru dari awwnderful.',
    slug: 'case-studies-keychain-photobooth-trends',
    productTags: ['custom-photo-print', 'corporate event', 'wedding', 'birthday party'],
    publishedAt: '2025-03-19',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Keychain photobooth bukan sekadar souvenir biasa — ini adalah kenangan yang bisa dibawa pulang, digantung di tas, dan dilihat setiap hari. Di 2024–2025, tren ini meledak di berbagai jenis event mulai dari wedding, corporate gathering, hingga birthday party di Jakarta.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'why-keychain',
        content: 'Kenapa Keychain Photobooth Jadi Tren?',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'reasons-list',
        items: [
          'Souvenir fungsional — bisa langsung dipakai sebagai gantungan kunci tas atau kunci rumah',
          'Personalisasi tinggi — foto langsung dicetak saat event, jadi setiap tamu dapat souvenir unik dengan fotonya sendiri',
          'Compact & affordable — tidak memakan ruang, harga lebih terjangkau dibanding souvenir custom lainnya',
          'Viral-worthy — banyak tamu foto dan share di Instagram/TikTok karena unik',
          'Berbagai pilihan desain — dari acrylic bening, kodachrome vintage, hingga filmstrip style'
        ],
        style: 'bullet'
      },
      {
        type: 'image',
        id: 'keychain-wedding',
        src: '/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta-wedding-1.jpeg',
        alt: 'Keychain photobooth untuk wedding di Jakarta',
        caption: 'Keychain photobooth wedding — souvenir elegan yang disukai tamu',
        layout: 'wide'
      },
      {
        type: 'text',
        id: 'types-heading',
        content: 'Jenis Keychain Photobooth dari Awwnderful',
        style: 'medium'
      },
      {
        type: 'comparison',
        id: 'keychain-types',
        items: [
          {
            title: 'Classic Acrylic Keychain',
            description: 'Keychain acrylic bening dengan foto dicetak langsung. Tampilan bersih, modern, dan premium.',
            pros: ['Transparan & elegan', 'Tahan lama', 'Cocok untuk semua jenis event'],
            cons: ['Desain lebih minimalis dibanding style lain']
          },
          {
            title: 'Kodachrome Keychain',
            description: 'Terinspirasi dari film Kodak klasik. Tampilan vintage dengan border khas film analog.',
            pros: ['Aesthetic vintage yang trending', 'Cocok untuk wedding & birthday', 'Instagrammable'],
            cons: ['Tema spesifik, kurang cocok untuk corporate formal']
          },
          {
            title: 'Filmstrip Keychain',
            description: 'Desain filmstrip dengan beberapa frame foto sekaligus dalam satu keychain panjang.',
            pros: ['Bisa muat 3–4 frame foto', 'Sangat unik & berbeda', 'Terbaik untuk kenangan grup'],
            cons: ['Ukuran lebih panjang', 'Harga sedikit lebih tinggi']
          }
        ]
      },
      {
        type: 'image',
        id: 'keychain-kodachrome',
        src: '/images/services/custom-photo-print-jakarta/keychain-photobooth-kodachrome-jakarta-1.png',
        alt: 'Keychain photobooth kodachrome Jakarta',
        caption: 'Kodachrome keychain — vibes vintage yang estetik',
        layout: 'wide'
      },
      {
        type: 'text',
        id: 'events-heading',
        content: 'Cocok untuk Event Apa Saja?',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'events-list',
        items: [
          'Wedding & engagement — souvenir sekaligus kenangan pernikahan yang berkesan',
          'Corporate event & gathering — branded keychain dengan logo perusahaan',
          'Birthday party — foto tamu bersama birthday person jadi kenangan spesial',
          'Brand activation & launching — souvenir promosi yang dibawa pulang tamu',
          'Graduation & school event — momen wisuda yang bisa dikenang selamanya'
        ],
        style: 'checklist'
      },
      {
        type: 'gallery',
        id: 'keychain-gallery',
        images: [
          {
            src: '/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta-wedding-1.jpeg',
            alt: 'Keychain photobooth wedding Jakarta 1',
            caption: 'Wedding setup'
          },
          {
            src: '/images/services/custom-photo-print-jakarta/keychain-photobooth-jakarta-wedding-2.jpeg',
            alt: 'Keychain photobooth wedding Jakarta 2',
            caption: 'Kodachrome wedding'
          },
          {
            src: '/images/services/custom-photo-print-jakarta/keychain-photobooth-kodachrome-jakarta-1.png',
            alt: 'Kodachrome keychain Jakarta',
            caption: 'Filmstrip option'
          }
        ],
        layout: 'grid'
      },
      {
        type: 'quote',
        id: 'client-quote',
        quote: 'Tamunya suka banget sama keychain-nya, banyak yang langsung pasang di tas mereka sebelum pulang. Jadi kenangan yang beneran kepake!',
        author: 'Client Wedding — Jakarta, 2024',
        style: 'featured'
      },
      {
        type: 'callout',
        id: 'cta',
        content: '🔑 Tertarik tambahkan keychain photobooth di event kamu? Hubungi kami untuk info harga dan paket — tersedia untuk area Jakarta & sekitarnya.',
        style: 'tip'
      }
    ]
  },
  {
    id: 'case-studies-hollister-grand-opening-keychain-photobooth',
    title: 'Hollister Grand Opening: Keychain Photobooth Experience',
    image: '/images/case-studies/hollister-jakarta/hollister-keychain-photobooth.jpg',
    excerpt: 'Awwnderful hadir di grand opening Hollister dengan layanan keychain photobooth premium — gantungan kunci akrilik dengan desain filmstrip custom yang mengabadikan 4 pose tamu dalam satu souvenir eksklusif retail launch.',
    slug: 'case-studies-hollister-grand-opening-keychain-photobooth',
    productTags: ['custom-photo-print', 'corporate event', 'keychain photobooth'],
    publishedAt: '2025-03-07',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Grand opening Hollister menjadi salah satu event retail terbesar yang kami tangani — dan keychain photobooth dari Awwnderful hadir untuk memastikan setiap tamu pulang dengan kenangan nyata di tangan mereka.',
        style: 'large'
      },
      {
        type: 'gallery',
        id: 'hollister-poster-featured',
        images: [
          {
            src: '/images/case-studies/hollister-jakarta/hollister-poster.jpg',
            alt: 'Poster resmi Hollister Grand Opening Jakarta — keychain photobooth Awwnderful'
          }
        ]
      },
      {
        type: 'text',
        id: 'event-overview',
        content: 'Tentang Event',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'event-detail',
        content: 'Hollister memilih keychain photobooth sebagai bagian dari pengalaman grand opening mereka. Setiap tamu bisa langsung foto dan memilih hasil cetaknya — mulai dari photo strip ukuran penuh hingga versi compact gantungan kunci akrilik. Dua pilihan format memberi tamu kebebasan untuk menikmati kenangan sesuai selera mereka.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'result-heading',
        content: 'Hasil & Highlight',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'highlights',
        items: [
          'Ratusan keychain tercetak selama event berlangsung',
          'Antrian tamu yang konsisten — menunjukkan tingginya minat terhadap souvenir foto langsung',
          'Desain keychain disesuaikan dengan branding Hollister',
          'Operator terlatih memastikan proses cetak berjalan cepat dan lancar — mendukung output tinggi di event retail berskala besar'
        ],
        style: 'bullet'
      },
      {
        type: 'image',
        id: 'hollister-assembly-grid',
        src: '/images/case-studies/hollister-jakarta/hollister-assembly-grid.jpg',
        alt: 'Pilihan ukuran Strip & Keychain, serta proses Fast Assembly memasukkan foto ke dalam gantungan kunci akrilik di tempat',
        caption: 'Strip & Keychain Size — tamu bebas pilih format hasil cetak. Fast Assembly: tim kami langsung memasukkan foto ke dalam akrilik keychain di tempat.',
        layout: 'wide'
      },
      {
        type: 'image',
        id: 'hollister-keychain-result',
        src: '/images/case-studies/hollister-jakarta/hollister-keychain-photobooth.jpg',
        alt: 'Gantungan kunci akrilik filmstrip dengan 4 pose, dipegang di depan backdrop biru Hollister berdekorasi awan',
        caption: 'Hasil keychain akrilik filmstrip Hollister — 4 pose dalam satu souvenir premium yang langsung bisa dibawa pulang',
        layout: 'wide'
      },
      {
        type: 'text',
        id: 'video-intro',
        content: 'Video di bawah memperlihatkan alur kerja yang seamless — mulai dari sesi foto hingga gantungan kunci akrilik siap di tangan tamu. Proses yang terstruktur ini memungkinkan kapasitas output tinggi, ideal untuk event retail berskala besar seperti grand opening Hollister.',
        style: 'normal'
      },
      {
        type: 'video',
        id: 'hollister-keychain-process',
        src: '/videos/case-studies/hollister-jakarta/hollister-keychain-process.mp4',
        caption: 'Behind the scenes: The process of creating custom keychain souvenirs on the spot.'
      },
      {
        type: 'video',
        id: 'hollister-keychain-showcase',
        src: '/videos/case-studies/hollister-jakarta/hollister-keychain-showcase.mp4',
        caption: 'The final result: High-quality acrylic keychain in an elegant filmstrip layout.'
      },
      {
        type: 'gallery',
        id: 'hollister-final-result-gallery',
        images: [
          {
            src: '/images/case-studies/hollister-jakarta/hollister-keychain-photobooth.jpg',
            alt: 'Gantungan kunci akrilik filmstrip dengan 4 pose, dipegang di depan backdrop biru Hollister berdekorasi awan'
          }
        ]
      },
      {
        type: 'callout',
        id: 'cta',
        content: 'Ingin layanan keychain photobooth untuk grand opening atau event retail kamu? Hubungi Awwnderful dan kami siap bantu dari konsep hingga eksekusi.',
        style: 'tip'
      }
    ]
  },

  {
    id: 'dslr-vs-o-vs-classic',
    title: 'DSLR Booth vs O Booth vs Classic Booth: Which One is Right for Your Event?',
    image: '/images/photo-booth-gif-all-jakarta.webp',
    excerpt: 'A comprehensive comparison of our three photobooth models to help you choose the perfect one for your event.',
    slug: 'dslr-vs-o-vs-classic',
      productTags: ['photobooth-gif'],
    publishedAt: '2024-03-14',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Choosing the right photobooth for your event can be a daunting task. Each model offers unique features and benefits that cater to different needs and preferences.',
        style: 'large'
      },
      {
        type: 'comparison',
        id: 'booth-comparison',
        items: [
          {
            title: 'O Booth',
            description: 'Photobooth in smallest space available',
            pros: ['Only require 0.5x0.5m setup','easy operation for self operated photobooth'],
            cons: ['No backdrop inlcuded', 'No studio flash lighting']
          },
          
          {
            title: 'Classic Booth',
            description: 'The basic photobooth',
            pros: ['Budget-Friendly', 'Adjustable setup'],
            cons: ['No backdrop inlcuded', 'No studio flash lighting','No option for branded box']
          },

          {
            title: 'DSLR Booth',
            description: 'Our premium offering, The best high quality photobooth with professional DSLR camera and studio-quality lighting',
            pros: ['Backdrop included','Photo props included','Studio flash lighting','Option for branded box'],
            cons: ['Higher investment', 'Requires more setup space']
          },

        ]
      },
      {
        type: 'callout',
        id: 'recommendation',
        content: '🎯 Need help choosing? Contact us for a personalized recommendation based on your event needs!',
        style: 'info'
      }
    ]
  },
  {
    id: 'case-studies-roaming-photo-booth-for-sasa-x-pemuda-sinarmas',
    title: 'Case studies : Roaming Photo Booth for Sasa x Pemuda sinarmas ',
    image: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-ring-roamer-2.webp',
      excerpt: 'take a look at our ring roaming capturing the moments ',
    slug: 'case-studies-roaming-photo-booth-for-sasa-x-pemuda-sinarmas',
    productTags: ['roaming-photo-booth', 'brand activation'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
          id: 'intro',
          content: "Our Ring Roamer was part of the newest collection launch collaboration between Tokopedia and GOOD, featuring Pemuda Sinarmas as the cassette jockey and main DJ. The Ring Roamer helped capture every special moment throughout the event",
        style: 'large'
      },
      {
        type: 'text',
          id: 'photobooth-heading',
          content: 'Moments captured with Ring Roamer',
          style: 'medium'
        },
        {
          type: 'gallery',
          id: 'photobooth-gallery',
          images: [
            {
              src: 'https://photos.smugmug.com/Events/Goods-Dept-x-Sasa-merch-launch/MP4/i-dPRfTTz/0/Mrnd7Wj2jmfxz3SSLx8qDK2FQCvkLmXJm9CmnLH4d/1280/video_2-1280.mp4',
              alt: 'ring roamer result',
            },
            {
              src: 'https://photos.smugmug.com/Events/Goods-Dept-x-Sasa-merch-launch/MP4/i-jKbTTk6/0/MkmbPLHfNmLhd4XRs9DxZzhzhFWrNKr98MWr87Knm/1280/video_28-1280.mp4',
              alt: 'ring roamer result',
            },
            {
              src: 'https://photos.smugmug.com/Events/Goods-Dept-x-Sasa-merch-launch/MP4/i-jtppHd3/0/LBvCGgBfbRrZ5xzn8Dtp6PGdHjHm5Sp7rHBGZGBnG/1280/video_3-1280.mp4',
              alt: 'ring roamer result',
            }
          ],
          layout: 'grid'
        },
        {
          type: 'callout',
          id: 'photobooth-link',
          content: "✨ Check out all the fun photobooth moments! [View Photobooth result]  https://awwnderful.smugmug.com/Events/Goods-Dept-x-Sasa-merch-launch",
          style: 'tip'
      },
      {
        type: 'text',
          id: 'documentation-desc',
          content: "Our Roaming Photo Booth stole the spotlight with its built-in ring lighting that made every corner of the venue photo ready. No need for guests to line up at a traditional booth. Our mobile setup moved through the crowd, capturing spontaneous smiles, fun interactions, and memorable moments wherever they happened. With stunning, flattering lighting in every shot, everyone looked their best anytime, anywhere.",
          style: 'normal'
        },
        {
          type: 'gallery',
          id: 'documentation-gallery',
          images: [
            {
              src: 'https://photos.smugmug.com/photos/i-Jqm4mJ9/0/MQBd7qMXRQnPVJmm6CZPcJDBcm4rtxDTZtn4WnQqM/X4/i-Jqm4mJ9-X4.jpg',
              alt: 'Guest are taking photos and get the bright from the ring light.',
              caption: 'Guest are taking photos and get the bright from the ring light.'
            },
            {
              src: 'https://photos.smugmug.com/photos/i-Lz2DR3w/0/L62CgK67Xf4WqjbfKXXbZWnVmCXvHhs9jfB5zTpH3/1920/i-Lz2DR3w-1920.mp4',
              alt: 'Ring roamer interface',
              caption: 'Ring roamer interface'
            },
            {
              src: 'https://photos.smugmug.com/photos/i-cFbQdH7/0/Mm7gwG2jZLLWFTk9QwVvpgxVVGJF5cHK4HFc7FPPq/X4/i-cFbQdH7-X4.jpg',
              alt: 'Overall ambiance in the club',
              caption: 'Overall ambiance in the club'
            }
          ],
          layout: 'masonry'
      }
    ]
  },
  {
      id: '360-video-booth-for-allianz-at-formula-e',
      title: 'Case Studies : 360 Video Booth for Allianz at Formula E',
      image: '/images/case-study-formula-e-jakarta.webp',
      excerpt: 'Our 360 Video Booth was a hit at the Allianz Formula E event.',
      slug: '360-video-booth-for-allianz-at-formula-e',
      productTags: ['360-video-booth', 'brand activation'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro-360',
          content: "Take a look at behind the scenes of our 360 video booth at Ancol at Formula E Prix festival"
      },

      {
        type: 'text',
        id: 'why-choose-360-heading',
        content: 'Why Choose a 360 Video Booth for Your Event?',
        style: 'large'
      },
      {
        type: 'gallery',
        id: '360-gallery',
        images: [
          {
              src: '/images/case-study-formula-e-jakarta-2.webp',
            alt: '360 Video Booth in action',
            caption: 'Our 360 Video Booth in action.'
            }
          ],
          layout: 'carousel'
        },
        
        {
          type: 'gallery',
          id: '360-gallery',
          images: [
            {
              src: '/images/case-study-formula-e-jakarta-3.webp',
              alt: '360 Video Booth in action',
              caption: 'Our 360 Video Booth in action.'
            },
            {
              src: '/images/lookbook-photo-booth-jakarta/videobooth-360-3.mp4',
            alt: 'Sample 360 video from an event',
              caption: 'Compilation of all 360 Videbooth from day to night scene.'
            },
            
            {
              src: 'https://photos.smugmug.com/photos/i-6bW7bKF/0/MgXr4FkHtq9BzgXDsMTcFXcChZtzFhPW9WdZz8BP9/1280/i-6bW7bKF-1280.mp4',
              alt: 'Sample 360 video from an event',
              caption: 'The light making the night scene was more vibrant.'
            }
          ],
          layout: 'grid'
        },
        {
          type: 'callout',
          id: 'photobooth-link',
          content: "✨ Check out all the fun 360 videobooth moments! [View 360 Videobooth result]  https://fotoshare.co/e/So1pEMxiRtONkuo2pQmMQ",
          style: 'tip'
      },
      {
        type: 'text',
        id: 'why-choose-360-text',
        content: "A 360 Video Booth isn\'t just an add-on; it\'s a centerpiece attraction. It offers a unique way for guests to express themselves and create truly memorable content. The resulting videos are perfect for social media, allowing your event to gain viral traction. Plus, it\'s incredibly fun and engaging for guests of all ages!"
      },
      {
        type: 'text',
        id: 'technical-details-360-heading',
        content: 'Technical Setup & Requirements',
        style: 'large'
      },
      {
        type: 'list',
        id: 'technical-details-360-list',
        items: [
            'Camera: Ultra Wide Iphone camera',
            'Lighting: RGB LED and Ringlight.',
            'Internet: Reliable internet connection.',
          'Space: Minimum 2m x 2m setup area.',
          'Capacity: Comfortably accommodates up to 4 people at a time.'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'conclusion-360',
        content: "Ready to make your event unforgettable? Our 360 Video Booth is the perfect way to add excitement and create lasting, shareable memories. Contact Awwnderful today to book this incredible experience for your next celebration!"
        },
        
    ]
  },
  {
      id: 'hashtag-printer-bobobox-berdendang-bergoyang',
    title: 'Case Studies: Hashtag for Bobobox at Berdendang Bergoyang',
    image: '/images/services/hashtag-printer-jakarta-hero.webp',
      excerpt: 'Take a look at the hashtag printer setup at Berdendang Bergoyang',
      slug: 'hashtag-printer-bobobox-berdendang-bergoyang',
    productTags: ['hashtag-printer','interactive-display', 'brand activation'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
       
      {
        type: 'text',
          id: 'why-hashtag-printer-heading',
          content: 'Gain Awareness during Berdendang Bergoyang',
          style: 'large'
      },
      {
        type: 'text',
          id: 'why-hashtag-printer-text',
          content: "Our hashtag printer was hired by Bobobox.id at Berdendang Bergoyang event. It was a great way to showcase the bobobox cabin and get guests to take photos and share them on social media."
        },
        {
          type: 'gallery',
          id: '360-gallery',
          images: [
            {
              src: 'https://photos.smugmug.com/Events/Boboboxid-x-Berdendang-Bergoyang/Prints/i-gCfSGDj/0/KWDDpCnDr6SGk22Rzf2XbPdBzspSMcsQwZdrt3MnC/L/HFP_20200202_141544-L.jpg',
              alt: '360 Video Booth in action',

            },
            {
              src: 'https://photos.smugmug.com/Events/Boboboxid-x-Berdendang-Bergoyang/Prints/i-NLk5hPr/0/MsZ9ZFQmckTCxzqfBS3q6fxzvwnMCGjTjkZ9rgCvq/L/HFP_20200202_152244-L.jpg',
              alt: 'Sample 360 video from an event',
             },
            
            {
              src: 'https://photos.smugmug.com/Events/Boboboxid-x-Berdendang-Bergoyang/Prints/i-cdKG395/0/MKbr2Pb5W8H3tVQ8DWdL5dxV62SXRgmnDGZHG5cJ8/L/HFP_20200202_211107-L.jpg',
              alt: 'Sample 360 video from an event',

            }
          ],
          layout: 'grid'
      },
      {
        type: 'text',
        id: 'why-hashtag-printer-text',
          content: "To increase brand awareness, our Hashtag Printer encourages guests to take a photo and share it on social media in exchange for a free print. Not only does it create a memorable keepsake for them, but it also ensures that Bobobox's branding stays visible—often right on their desk.",
          style: 'normal'
      },



      {
        type: 'text',
        id: 'how-it-works-heading',
        content: 'Simple Steps to Instant Prints',
        style: 'large'
      },
      {
        type: 'list',
        id: 'how-it-works-list',
        items: [
          'Snap & Tag: Guests take photos on their smartphones and upload them to Instagram using your unique event hashtag.',
          'Automatic Printing: Our system monitors the hashtag in real-time and automatically sends tagged photos to the print station.',
          'Collect & Cherish: Guests visit the Hashtag Print station to pick up their beautifully printed 4x6 photo, complete with your custom branding.'
        ],
        style: 'bullet'
      },

        {
      
          type: 'gallery',
          id: '360-gallery',
          images: [
            {
              src: 'https://photos.smugmug.com/photos/i-xsfhb3F/0/NV5d4bhcVxCLV2WkQbdSf4qwB6MhkTX4vMCvs7X9B/XL/i-xsfhb3F-XL.jpg',
              alt: '360 Video Booth in action',
              caption: 'Our team wrapping the box with custom branding.'
            },
            {
              src: 'https://photos.smugmug.com/photos/i-cBVT9SF/0/KNKXZvSDMDbDjprr4TV68GCpRccRSP7DNf4hQBqMV/XL/i-cBVT9SF-XL.jpg',
              alt: 'Additional photo from the event',
              caption: 'The setup is ready.'
            },
            {
              src: 'https://photos.smugmug.com/photos/i-58S3pgt/0/LCsdCP8pvCLHdnPDzPcrvqbWvR7xB8GkSrBwdRmj8/XL/i-58S3pgt-XL.jpg',
              alt: 'Sample 360 video from an event',
              caption: 'Interface of hashtag printer'
            },
            {
              src: 'https://photos.smugmug.com/photos/i-L4WBNZZ/0/NQHGT2NDFn3MLdFRBJxQjZNHQdDSkPDBbZhvPnPTV/XL/i-L4WBNZZ-XL.jpg',
              alt: 'Sample 360 video from an event',
              caption: 'The bobobox cabin as a photo spot'
            },
            {
              src: 'https://photos.smugmug.com/photos/i-ktRsN7v/0/KZ5rJGP7rH85gbQrHzq6nn2Lmfc8NHqK3WjHKrQWp/XL/i-ktRsN7v-XL.jpg',
              alt: 'Sample 360 video from an event',
              caption: 'Guest are taking picture inside the bobobox cabin'
            }
          ],
          layout: 'masonry'
        },

      
      {
        type: 'text',
        id: 'features-hashtag-heading',
        content: 'Key Features of Our Hashtag Printer Service',
        style: 'large'
      },
      {
        type: 'list',
        id: 'features-hashtag-list',
        items: [
          'Real-Time Printing: Photos are printed moments after being posted.',
          'Custom Branding: Add logos, event themes, and messages to every print.',
          'Seamless Social Media Integration: Works directly with Instagram.',
          'Standard 4x6 Print Size: Perfect for display and sharing.',
          'Live Moderation Option: Ensure only appropriate photos are printed.',
          'Event Analytics: Track hashtag usage and engagement (optional add-on).'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'technical-details-hashtag-heading',
        content: 'Technical Setup & Requirements',
        style: 'large'
      },
      {
        type: 'list',
        id: 'technical-details-hashtag-list',
        items: [
          'Equipment: Includes a touchscreen monitor, professional photo printer, and a dedicated PC/Laptop.',
          'Setup Area: Compact footprint, requiring only about 50cm x 50cm.',
          'Internet: A stable internet connection is necessary for monitoring Instagram.'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'conclusion-hashtag',
        content: "Transform your event\'s social media activity into delightful, branded keepsakes with Awwnderful\'s Hashtag Printer. It\'s an innovative way to engage guests and extend your event\'s reach. Contact us today to add this exciting feature to your celebration!"
      }
    ]
  },
  
    {
      id: 'case-studies-whatsapp-business-summit',
      title: 'Case studies : Whatsapp Business Summit',
      image: '/images/wab-summit-jakarta.webp',
      excerpt: 'High Angle Photobox at Whatsapp Business Summit.',
      slug: 'case-studies-whatsapp-business-summit',
      productTags: ['photobox','brand activation'],
      publishedAt: '2024-07-27',
      author: {
        name: 'Seno Sabdastandyo',
        image: '/images/blog-profile-seno-jakarta.webp'
      },
      content: [
        {
          type: 'text',
          id: 'intro',
          content: "Whatsapp Business Summit is a yearly event organized by Whatsapp to bring together business owners and entrepreneurs to share insights, network, and explore new opportunities. Awwnderful was thrilled to be a part of this special occasion, providing our High angle photobox with the concept of Whatsapp vault box",
          style: 'large'
        },
        {
          type: 'text',
          id: 'photobooth-heading',
          content: 'Photobox inside the vault',
          style: 'medium'
        },
        {
          type: 'text',
          id: 'photobooth-desc',
          content: "With the concept of Whatsapp vault box, we placed the photobox inside the vault. Because of the high angle concept, guests can take a photo with the remote control by scanning the qr code on the screen. Or with the help of our team .",
          style: 'normal'
        },
        {
          type: 'gallery',
          id: 'photobooth-gallery',
          images: [
        
            {
              src: 'https://photos.smugmug.com/photos/i-Bdfj4Mm/0/LQnx9dCNjF2j8d4NxvsDKW6CLLfbrK3WT6SCVbN36/1920/i-Bdfj4Mm-1920.mp4',
              alt: 'DSLR Photobooth GIF setup at French School Prom',
              caption: 'Guest are taking videos with the photo strip'
            },
            {
              src: 'https://photos.smugmug.com/photos/i-4wsWdTF/0/LvGvr7P6RwfW9NW2LdbG6xbj7PrPx74QFgnHVkgjX/1920/i-4wsWdTF-1920.mp4',
              alt: 'Sample GIF from French School Prom Photobooth',
              caption: 'Take a photo inside the vault.'
            },
            {
              src: 'https://photos.smugmug.com/photos/i-wFZnkBB/0/LCthtmXcqM8KTfKsSdkrxnZhcBQ9fdNKWbBzV5NwP/1920/i-wFZnkBB-1920.mp4',
              alt: 'Sample photo print from French School Prom Photobooth',
              caption: 'Scan qr to control the photobooth. From Capture, Choosing frame & Share the result.'
            },
          ],
          layout: 'grid'
        },
        {
          type: 'callout',
          id: 'photobooth-link',
          content: "✨ Check out all the fun photobooth moments! [View Photobooth result]  https://fotoshare.co/e/4CFiQRlLGRwlOH6l5ui4V",
          style: 'tip'
        },
        {
          type: 'text',
          id: 'documentation-heading',
          content: 'Print out with instant sharing GIF',
          style: 'large'
        },
        {
          type: 'text',
          id: 'documentation-desc',
          content: "Beyond the photobooth, our professional photo documentation team was on hand to capture the entirety of the prom night. From the grand entrances and elegant attire to the heartfelt speeches, energetic dance floor, and crowning of the prom King and Queen, every significant moment was preserved. Our photographers blended into the background, ensuring natural, candid shots that truly reflected the atmosphere of the event.",
          style: 'normal'
        },
        {
          type: 'gallery',
          id: 'documentation-gallery',
          images: [
            
            {
              src: 'https://photos.smugmug.com/photos/i-fmjS7m3/0/KcDnk23xHJ7qqNWj9VS3DrrNgCQQGnsPv3Fx8PMmC/X2/i-fmjS7m3-X2.jpg',
              alt: 'Photo strip inside Whatsapp vault box',
              caption: 'Photo strip inside Whatsapp vault box'
            },
            {
              src: 'https://photos.smugmug.com/photos/i-RX9j3Vv/0/M6pWqD6bdM48Cqf8GfLLrRJMGGxDvBgM4cP2PdDF9/1280/i-RX9j3Vv-1280.mp4',
              alt: 'GIF result inside Whatsapp vault box',
              caption: 'GIF result inside Whatsapp vault box'
            }

          ],
          layout: 'grid'
        },
        {
          type: 'text',
          id: 'conclusion',
          content: "High Angle Photobox is a perfect for grabbing attention and creating stylish, scroll stopping content. Whether it's a wedding, brand activation, or corporate event, this latest trend adds a unique perspective that guests will love and remember.",
          style: 'large'
        }
      ]
    },
  {
    id: 'case-studies-pt-pear-family-gathering',
    title: 'Case studies : PT Pear family gathering',
    image: 'https://photos.smugmug.com/Events/PT-Pear-Family-Gathering/Photos/i-tpWwwVk/0/NGZHL2bWmGnjsdgBh72tVZCtzwBMxNC5P2dZNTt4k/X3/IMG_1700-X3.jpg',
    excerpt: 'Photo & Video documentation trip to Taman Safari.',
    slug: 'case-studies-pt-pear-family-gathering',
      productTags: ['photo-video-documentation','corporate event'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
          content: "Take a look at our Photo & Video documentation trip to Taman Safari",
        style: 'large'
      },
      {
        type: 'text',
        id: 'photobooth-heading',
          content: 'A trip to increase the bonding',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'photobooth-desc',
          content: "Documentation is more than just taking pictures — it's about preserving the essence of a moment. In a corporate setting, capturing candid photos during events like family gatherings or team-building sessions allows authentic emotions to shine through. These unscripted moments of laughter, interaction, and togetherness reflect the human side of the workplace. Candid documentation plays a crucial role in strengthening bonds between team members, reminding everyone that behind every role and responsibility, there are genuine connections being built. It’s this emotional layer that fosters a more engaged, collaborative, and positive work culture..",
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'photobooth-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/PT-Pear-Family-Gathering/Photos/i-dBDbDg6/0/MhJ7DqwqwzFdCVWL4LLrdd5gvDLttsxVqgVqNmr9J/X3/IMG_1725-X3.jpg',
            alt: 'DSLR Photobooth GIF setup at French School Prom',

          },
          {
            src: 'https://photos.smugmug.com/Events/PT-Pear-Family-Gathering/Photos/i-dWt4CcP/0/KbXJpwQLFB86sfPvSMx4g6cQBDxjjhVmsssfF5Q7b/X3/IMG_1675-X3.jpg',
            alt: 'Sample GIF from French School Prom Photobooth',

          },
          {
            src: 'https://photos.smugmug.com/Events/PT-Pear-Family-Gathering/Photos/i-Tbc4bsj/0/KsC8tTf9z2n9v7LdQCGqTdzf3MGRMcvjZJDMJvsvv/X3/IMG_1510-X3.jpg',
            alt: 'Sample photo print from French School Prom Photobooth',

          },
          {
            src: 'https://photos.smugmug.com/Events/PT-Pear-Family-Gathering/Photos/i-t3jLH94/0/NJ4hgpdGCTzcHfFKFHWWwcgmKWRmrzxm5MNsCBZDj/X3/IMG_1633-X3.jpg',
            alt: 'DSLR Photobooth GIF setup at French School Prom',

          },
          {
            src: 'https://photos.smugmug.com/Events/PT-Pear-Family-Gathering/Photos/i-bkRcBrc/0/NGLDGm3wRQ8THkS7gdjfF4KLcc28tXRH4HHTD33QX/X3/IMG_1614-X3.jpg',
            alt: 'Sample GIF from French School Prom Photobooth',

          },
          {
            src: 'https://photos.smugmug.com/Events/PT-Pear-Family-Gathering/Photos/i-hBcdgm6/0/MPqZ4rK4G6x7QCkP3DLzhnQznLXSVW7cQp76Nrjfn/X3/IMG_1429-X3.jpg',
            alt: 'Sample photo print from French School Prom Photobooth',
  
          },
          {
            src: 'https://photos.smugmug.com/Events/PT-Pear-Family-Gathering/Photos/i-tTfVcNS/0/L789XWsQjxhDJcsZMNFt2k2fJMkhZnQrWGc4xHf8J/X3/IMG_2045-X3.jpg',
            alt: 'Students dancing at French School Prom',

          },
          {
            src: 'https://photos.smugmug.com/Events/PT-Pear-Family-Gathering/Photos/i-3x6nNBm/0/K7PnRKxRBBCZnnmMfw3P6MTPkvJDBXNXRn5kCjBdq/X3/IMG_2305-X3.jpg',
            alt: 'Preparing the decoration for the prom night.',

          },
          {
            src: 'https://photos.smugmug.com/Events/PT-Pear-Family-Gathering/Photos/i-wHXJ9DH/0/KWs2rPV5qHW2WDnfQmbXvhD3WtWc35w9CCz2XJjBw/X3/IMG_2316-X3.jpg',
            alt: 'New image alt text',
          },
        ],
        layout: 'grid'
      },
      {
        type: 'callout',
        id: 'photobooth-link',
          content: "✨ Check out all the fun photo moments! [View Photo result]  https://awwnderful.smugmug.com/Events/LFJ-Promnight-2019/Event-Images",
        style: 'tip'
      },
      {
        type: 'text',
        id: 'documentation-heading',
          content: 'The cinematic video documentation',
        style: 'large'
      },
      {
        type: 'text',
        id: 'documentation-desc',
          content: "Cinematic video brings a storytelling touch to your event, turning ordinary moments into visually stunning memories. With smooth transitions, dramatic angles, and curated sound design, it captures the atmosphere and emotion of the day in a way that feels like a movie — timeless and impactful.",
      },
      {
        type: 'gallery',
        id: 'documentation-gallery',
        images: [

          {
            src: 'https://photos.smugmug.com/Events/PT-Pear-Family-Gathering/Edited-Video/i-xmpXpNr/0/K2Q3mxVKTZS4JhzZFqzZ5LqH7P8NNkH8hxTbjzjgM/1920/PT%20Pear%20family%20gathering-1920.mp4',
            alt: 'Overall ambiance of the French School Prom',
              caption: 'Checkout this video documentation result'
          }
        ],
        layout: 'carousel'
      },
        {
          type: 'text',
          id: 'conclusion',
          content: "From fun, candid shots to cinematic moments, every emotion and celebration was captured with care. With Awwnderful, your event isn’t just a moment — it’s a memory. Let’s create something unforgettable together!",
          style: 'large'
        }
      ]
    },
    {
      id: 'case-studies-miniatgiias',
      title: 'Case studies : Mini at GIIAS',
      image: 'https://photos.smugmug.com/photos/i-GhZd2Xg/0/Mp4QWDwVGn64zxmGdnHnNMPZ8bQtwkPP3f4VtLqSG/X3/i-GhZd2Xg-X3.jpg',
      excerpt: 'Fish eye lens case study for Mini at GIIAS.',
      slug: 'case-studies-miniatgiias',
      productTags: ['photobooth-gif','custom photo','custom-photo-print','brand activation'],
      publishedAt: '2024-07-27',
      author: {
        name: 'Seno Sabdastandyo',
        image: '/images/blog-profile-seno-jakarta.webp'
      },
      content: [
        {
          type: 'text',
          id: 'intro',
          content: "We help MINI to create Fish Eye photobooth with customized frame with the name written instantly on the frame.",
          style: 'large'
        },
        {
          type: 'text',
          id: 'photobooth-heading',
          content: 'Adding personal touch in every photo',
          style: 'medium'
        },
        {
          type: 'text',
          id: 'photobooth-desc',
          content: "We collaborated with MINI to create a unique Fish Eye Photobooth experience featuring a fully customized frame, where each guest's name was instantly printed on the photo, adding a personal touch to every snapshot. We designed multiple frame variations to match the different MINI car models purchased by clients, ensuring each photo felt tailor-made. This personalized approach not only elevated the event experience but also reinforced the brand’s attention to detail and connection with its audience.",
          style: 'normal'
        },
        {
          type: 'gallery',
          id: 'photobooth-gallery',
          images: [
            {
              src: 'https://photos.smugmug.com/photos/i-kNk3V5C/0/KQz4t6p79HSGNnLD5cx6WKV7JXDFD6VpRvZRSHvzb/L/i-kNk3V5C-L.jpg',
              alt: 'Fish eye lens for Mini at GIIAS',

            },
            {
              src: 'https://photos.smugmug.com/photos/i-Tk3c8Tr/0/Lg9CMthjMH4mLM9xZQJfkZD6vGQK5nVzmVd7z9jx2/L/i-Tk3c8Tr-L.jpg',
              alt: 'Acrylic frame for the photo booth',

            },
            {
              src: 'https://photos.smugmug.com/photos/i-LXTSDxb/0/NjcSFPvTtttZzCc7WpTGhWMcrgxJRHxLxmMrF2d76/L/i-LXTSDxb-L.jpg',
              alt: 'Sample photo print from French School Prom Photobooth',

            },
 

          ],
          layout: 'grid'
        },
      {
        type: 'callout',
          id: 'photobooth-link',
          content: "✨ Check out all the fun photobooth moments! [View Photobooth result]  https://fotoshare.co/e/zl-gvTlc1OYFgZ4w1uJXt",
          style: 'tip'
        },
        {
          type: 'text',
          id: 'documentation-heading',
          content: 'Fish eye lens to match branding of the Mini world',
          style: 'large'
        },
        
        {
          type: 'text',
          id: 'documentation-desc',
          content: "To align with MINI’s “Miniature Me” concept, we utilized a fish eye lens in our photobooth setup. Capturing images with a rounded effect that perfectly echoes the brand’s playful and compact identity. This circular visual style also aligns seamlessly with MINI’s social media design. The result is a cohesive visual experience that reflects MINI’s branding .",
          style: 'normal'
        },
        {
          type: 'gallery',
          id: 'photobooth-gallery',
          images: [
            {
              src: 'https://photos.smugmug.com/photos/i-VPCfW86/0/KPZHKDHKmkqnvQtttr9Nc7tLxrt8J5SkjvsmvvDnt/X2/i-VPCfW86-X2.jpg',
              alt: 'Fish eye lens for Mini at GIIAS',
              caption: 'Our team standby for the event'
            },
            {
              src: 'https://photos.smugmug.com/photos/i-NTJ25WQ/0/Kx7D9F43zgc4Gr3FQhm8d7X4LjWk5zdnxZs64k5jt/X2/i-NTJ25WQ-X2.jpg',
              alt: 'Acrylic frame for the photo booth',
              caption: 'Acrylic frame for the photo booth'
            },
            {
              src: 'https://photos.smugmug.com/photos/i-fr7rTMQ/0/KbmZ6jPLxMrCVbz86zhjjZ7rZ6JH552t7NJfhTqWC/X2/i-fr7rTMQ-X2.jpg',
              alt: 'Sample photo print from French School Prom Photobooth',
              caption: 'High-quality prints for lasting memories.'
            },
 

          ],
          layout: 'grid'
      },
      {
        type: 'text',
        id: 'conclusion',
          content: "With custom frames and instant name printing, each guest took home a unique keepsake. The fish eye lens added a fun twist that perfectly matched MINI’s branding and social media vibe. Want to create an experience like this? Let Awwnderful bring your brand to life. ",
        style: 'large'
      }
    ]
  },
  {
    id: 'case-studies-french-school-jakarta-prom',
    title: 'Case studies : French School Jakarta Prom',
    image: '/images/services/photo-video-documentation-jakarta/photo-video-documentation-jakarta-dly07907.webp',
    excerpt: 'Photo & Video documentation of French School Jakarta Prom.',
    slug: 'case-studies-french-school-jakarta-prom',
    productTags: ['photo-video-documentation','photobooth-gif','prom night'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: "The French School Jakarta's Prom Night was a night to remember, filled with glamour, excitement, and unforgettable moments. Awwnderful was thrilled to be a part of this special occasion, providing our top-tier Photobooth GIF (DSLR model) and comprehensive Photo Documentation services to capture the magic of the evening.",
        style: 'large'
      },
      {
        type: 'text',
        id: 'photobooth-heading',
        content: 'Instant Fun with the DSLR Photobooth GIF',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'photobooth-desc',
        content: "Our DSLR Photobooth GIF was an instant hit! Students and faculty alike queued up to create fun, animated GIFs and high-quality photos. The DSLR setup ensured crystal-clear images, while the GIF feature added a dynamic and shareable element to their prom memories. With a variety of props and a sleek backdrop, the photobooth became a hub of laughter and creativity throughout the night.",
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'photobooth-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/LFJ-Promnight-2019/MP4/i-2KqHpQw/0/M8NvDqLpLhbHCT8Msp6jpfNpWfFzSX8sfJw5jX3mk/640/190510_202715-640.mp4',
            alt: 'DSLR Photobooth GIF setup at French School Prom',
            caption: 'Our DSLR Photobooth GIF in action.'
          },
          {
            src: 'https://photos.smugmug.com/Events/LFJ-Promnight-2019/Prints/i-bWr6jbG/0/M7m2Jzt2rp6RFMHSWmhsZ7hh3WnVQJjbcm3T3PWDh/X2/190510_204143-X2.jpg',
            alt: 'Sample GIF from French School Prom Photobooth',
            caption: 'Students enjoying the GIF booth.'
          },
          {
            src: 'https://photos.smugmug.com/Events/LFJ-Promnight-2019/Prints/i-Tjqg8kg/0/LK5v92WNvmSSJWT5bgvmws2LsskDXrbwZdN8XQj2g/X2/190510_211712-X2.jpg',
            alt: 'Sample photo print from French School Prom Photobooth',
            caption: 'High-quality prints for lasting memories.'
          }
        ],
        layout: 'grid'
      },
      {
        type: 'callout',
        id: 'photobooth-link',
        content: "✨ Check out all the fun photobooth moments! [View Photobooth result]  https://awwnderful.smugmug.com/Events/LFJ-Promnight-2019/Event-Images",
        style: 'tip'
      },
      {
        type: 'text',
        id: 'documentation-heading',
        content: 'Capturing Every Precious Moment: Photo Documentation',
        style: 'large'
      },
      {
        type: 'text',
        id: 'documentation-desc',
        content: "Beyond the photobooth, our professional photo documentation team was on hand to capture the entirety of the prom night. From the grand entrances and elegant attire to the heartfelt speeches, energetic dance floor, and crowning of the prom King and Queen, every significant moment was preserved. Our photographers blended into the background, ensuring natural, candid shots that truly reflected the atmosphere of the event.",
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'documentation-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/LFJ-Promnight-2019/Event-Images/i-n9F777r/0/LHz37hwQvCnw9FbX6kmLtfzdmmHVp7pgNhVTQh4MB/X2/IMG_3715-X2.jpg',
            alt: 'Students dancing at French School Prom',
            caption: 'Capturing the energy on the dance floor.'
          },
          {
            src: 'https://photos.smugmug.com/Events/LFJ-Promnight-2019/Event-Images/i-fJn7VbM/0/LMzJzG2T59cGhVdXHzVXdQD9h7TZRx236ntBDBxT7/X2/DLY07801-X2.jpg',
            alt: 'Preparing the decoration for the prom night.',
            caption: 'Preparing the decoration for the prom night.'
          },
          {
            src: 'https://photos.smugmug.com/Events/LFJ-Promnight-2019/Event-Images/i-WdXtcPF/0/L8grCPN84wns3tb6TdqQJnMNz4qwPwBjTkqr2LnbG/X2/DLY07967-X2.jpg',
            alt: 'Overall ambiance of the French School Prom',
            caption: 'Overall ambiance of the French School Prom'
          }
        ],
        layout: 'masonry'
      },
      {
        type: 'callout',
        id: 'documentation-link',
        content: "📸 Relive the whole night! [View Full Photo Documentation](/gallery/french-prom/photo-documentation) (Note: Replace with actual link)",
        style: 'info'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: "The combination of our interactive Photobooth GIF service and thorough Photo Documentation ensured that the French School Jakarta Prom Night was not only a fantastic experience but also an event with memories beautifully preserved for years to come. We're proud to have contributed to such a special night!",
        style: 'large'
      }
    ]
  },
  {
    id: 'case-studies-adik-irma-graduation',
    title: 'Case studies : Adik Irma Graduation',
    image: 'https://photos.smugmug.com/Events/Adik-Irma-Graduation/Original/i-bfMNsDP/0/LsXwRz264gg6M6GzT5MmqT6rCbQ2vWvZhCvJFwkvm/X3/IMG_6266-X3.jpg',
    excerpt: 'Photo & Video documentation of Adik Irma Graduation.',
    slug: 'case-studies-adik-irma-graduation',
    productTags: ['photo-video-documentation','photobooth-gif','graduation'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
          content: "Documentation is essential in graduation, it captures the once in a lifetime moment when years of hard work finally pay off. From proud smiles to hugs with classmates, every candid shot becomes a lasting memory that students and families will treasure forever.",
        style: 'large'
      },
      {
        type: 'text',
        id: 'photobooth-heading',
          content: 'Complete package to capture the moment',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'photobooth-desc',
          content: "In this case study, we’ll highlight our work on graduation documentation projects from 2022 to 2024. From capturing cinematic video highlights to producing high-quality photo prints, we provided a complete experience for students and schools alike. One of the standout elements was our 8R large photo prints, taken in front of a custom backdrop and stage setup with the school principal, creating a timeless memory for every graduate.",
        style: 'normal'
      },

        {
          type: 'text',
          id: 'documentation-heading',
          content: 'Printed Photos',
          style: 'large'
        },
      {
        type: 'gallery',
        id: 'photobooth-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/Graduation-Adik-Irma-2023/Print/i-TdSf4LJ/0/Nb3NbtZTWxFtnQKgWKfKCnqCbBc5tSs7Kmv8KcmH9/X2/Untitled-1Artboard%201%20copy%2023-X2.jpg',
            alt: 'DSLR Photobooth GIF setup at French School Prom',

          },
          {
            src: 'https://photos.smugmug.com/Events/Graduation-Adik-Irma-2023/PRINT-2/i-xVhLrDS/0/NDchjMKpGTG8HJ9QG9zkWsMFjCcr89KMt4fwXWpTT/X2/Untitled-1%28kalung%29Artboard%201%20copy%202-X2.jpg',
            alt: 'Sample GIF from French School Prom Photobooth',

          },
          {
            src: 'https://photos.smugmug.com/Events/Graduation-Adik-Irma-2023/Print/i-P7Lrxp5/0/KQDhwgb7Vpfdqh95JLK4ZFNFs8prGHLTMcPQhWXfm/X2/Untitled-1Artboard%201%20copy%2022-X2.jpg',
            alt: 'Sample photo print from French School Prom Photobooth',

          }
        ],
        layout: 'grid'
      },
      {
        type: 'callout',
        id: 'photobooth-link',
          content: "✨ Check out the printed photos! [View Photobooth result]  https://awwnderful.smugmug.com/Events/Graduation-Adik-Irma-2023/Edited-backdrop",
        style: 'tip'
      },
 
      {
        type: 'gallery',
        id: 'documentation-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/Adik-Irma-Graduation/Original-2/i-S5f9zVX/0/NX367Sg5D7cWq3843PBFNXkhzQ9cc7bbLjdLgZV7Q/X2/DSCF9221-X2.jpg',
            alt: 'Students dancing at French School Prom',
          },
          {
            src: 'https://photos.smugmug.com/Events/Adik-Irma-Graduation/Photo-Wisuda/i-JG4BLBL/0/LTq3jBcQcf3fXpqFcJjJzgHGvpQSZHCgs4VwLTq84/X3/DLY08526-X3.jpg',
            alt: 'Preparing the decoration for the prom night.',
          },
          {
            src: 'https://photos.smugmug.com/Events/Adik-Irma-Graduation/Original-Main-Camera/i-d64DgMK/0/MPJzhdB2vd5hMn5wQ3c7nhPwgVbz9vdFnhvg7hFtq/X3/DLY08243-X3.jpg',
            alt: 'Preparing the decoration for the prom night.',
          },
          {
            src: 'https://photos.smugmug.com/photos/i-4rbZgQW/0/LqShSKf9rsjSPHV5MxQ2x6LgMhnzQR5tTtxrgKQh2/1280/i-4rbZgQW-1280.mp4',
            alt: 'Overall ambiance of the French School Prom',
          }
        ],
        layout: 'masonry'
      },
      {
        type: 'callout',
          id: 'photobooth-link',
          content: "✨ Check out all the documentation moments! [View Documentation result]  https://awwnderful.smugmug.com/Events/Adik-Irma-Graduation",
          style: 'tip'
      },
      {
        type: 'text',
        id: 'conclusion',
          content: "Let every milestone be remembered the right way. Whether it's through powerful photos or cinematic videos, we're here to help you preserve the emotion and pride of graduation day. Ready to document your next unforgettable moment? Let’s create it together! Contact Awwnderful today! ",
        style: 'large'
      }
    ]
  },
  {
    id: 'case-studies-prambors-50th-anniversary',
    title: 'Case studies : Prambors 50th anniversary',
    image: 'https://photos.smugmug.com/photos/i-7nDfFp2/0/Lz9CLQKxLf9XrSd3tJtFgLrCBcxRdLQwxzsqWs7wB/X2/i-7nDfFp2-X2.jpg',
    excerpt: 'Photo & Video documentation of Prambors 50th anniversary.',
    slug: 'case-studies-prambors-50th-anniversary',
    productTags: ['video-booth','photobooth-gif','brand activation'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
          content: "For the iconic 50th anniversary of Prambors, Awwnderful brought two standout experiences to life. We set up a sleek photo booth with classic strip prints, giving guests tangible memories they could take home. Alongside that, our Video Booth with a virtual runway let attendees strike a pose and feel like stars.",
        style: 'large'
      },

      {
        type: 'gallery',
        id: 'photobooth-gallery',
        images: [
          {
              src: 'https://photos.smugmug.com/Events/Prambors-50th/Photos/i-tbLN6KR/0/MhQVLrS8rZvjDzzFvQQ5PP3g3GX3g65JzD7CZFHCL/L/210319_080747-L.jpg',
              alt: 'printed photo.',
              caption: 'printed photo.'
          },
          {
            src: 'https://photos.smugmug.com/Events/Prambors-50th/MP4/i-JFdGxcv/0/LHD4SBkbLPj2LRxt6SPqM9hCWcQ7v7kjZfTgKrjmD/1280/210318_212105_MP4-1280.mp4',
             alt: 'GIF with animated overlay.',
              caption: 'GIF with animated overlay.'
          },
          {
            src: 'https://photos.smugmug.com/Events/Prambors-50th/Video-Booth/i-dxCGrFQ/0/K4wQW4LZF6NzqnBPnqM3FwGLTCVSzhhKvfntgbsGz/1280/Awwnderful_Prambors_2021-03-19_16-23-26%20%5B7.00-5.08%5D_mp4-1280.mp4',
              alt: 'Video Booth with virtual runway.',
              caption: 'Video Booth with virtual runway.'
          }
        ],
        layout: 'grid'
      },
      {
        type: 'callout',
        id: 'photobooth-link',
          content: "✨ Check out all the fun photobooth moments! [View Photobooth result]  https://awwnderful.smugmug.com/Events/Prambors-50th",
        style: 'tip'
      },

      {
        type: 'text',
        id: 'documentation-desc',
          content: "Awwnderful brought in a bold Video Booth with a Virtual Runway, turning guests into stars with dynamic music, animated backdrops, and cinematic edits. The result? A one of a kind video activation that blended fun and flair, made to be shared and remembered.",
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'documentation-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/photos/i-H9ZPkQ4/0/L8rmPP7cTksrtDNWG4vn6cT73T39Mzw4HStCzQmmk/1280/i-H9ZPkQ4-1280.mp4',
              alt: 'Behind the scenes of the action.',
              caption: 'Behind the scenes of the action.'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-dxTG2t7/0/KVNz9RqtHHnWLsgdknnRQPXQHsBMLrHDgJ3mdkw28/X2/i-dxTG2t7-X2.jpg',
              alt: 'Photobooth setup with Videbooth setup',
              caption: 'Photobooth setup with Videbooth setup facing each other'
            },
            {
              src: 'https://photos.smugmug.com/photos/i-vcX22Pw/0/K3Kj8TgqDxgtQNRXGZ65F5qwgjW6jdsWSc9HJTFdf/X2/i-vcX22Pw-X2.jpg',
              alt: 'Printed photo',
              caption: 'Printed photo'
          }
        ],
        layout: 'masonry'
      },

      {
        type: 'text',
        id: 'conclusion',
          content: "Ready to level up your event experience? Let Awwnderful turn your moments into lasting memories with custom photo and video activations that captivate and engage. Contact us today to bring creative magic to your next celebration!",
        style: 'large'
      }
    ]
  },
  {
    id: 'case-studies-efg-end-year-party',
    title: 'Case studies : EFG End year party',
    image: 'https://photos.smugmug.com/Events/EFG-Grand-Hyatt-Jakarta/Edit/i-4ZsKRGX/0/KjTgLkxztTvxPJ7p3NJbNncnC8d4Mt6cfBDdXz8QZ/X2/DSC02433-X2.jpg',
      excerpt: 'Photo documentation of EFG End year party.',
    slug: 'case-studies-efg-end-year-party',
      productTags: ['photo-video-documentation','roaming-photo-booth','photo print','corporate event'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
          content: "EFG Event Organizer approached us with a clear vision — to ensure their End Year Party was not only well-documented but also left guests with tangible memories. To bring this to life, Awwnderful provided a seamless Photo Documentation service paired with a Photo Print Station, allowing guests to receive beautifully printed snapshots of their favorite moments instantly.",
        style: 'large'
      },

      {
        type: 'gallery',
        id: 'photobooth-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/EFG-Grand-Hyatt-Jakarta/GIF/i-LKC5fgh/0/MPqWh3DVLdQgKStVCF9S9pZRnW9qwHzRNMCLTb29B/S/savedgif2dc7d14a-28b1-4ddd-b70e-7e311a30cf47-S.gif',
              alt: 'GIF results.',
              caption: 'GIF results.'
          },
          {
            src: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-print-out-booth.webp',
            alt: 'Printing the photo in print station.',
            caption: 'Printing the photo in print station.'
          },
          {
            src: 'https://photos.smugmug.com/Events/EFG-Grand-Hyatt-Jakarta/Photos/i-kZ7jHjn/0/NJjjzgqZKSt8Xk423bKDQfnvX4xkQsfNjRwtBDqMc/X2/IMG_7256-X2.jpg',
              alt: 'High-quality photo documentation',
              caption: 'High-quality photo documentation'
          }
        ],
        layout: 'grid'
      },
      {
        type: 'callout',
        id: 'photobooth-link',
        content: "✨ Check out all the captured moments! [View All photos result]  https://awwnderful.smugmug.com/Events/EFG-Grand-Hyatt-Jakarta/Photos",
        style: 'tip'
      },
      {
        type: 'text',
          id: 'photobooth-heading',
          content: 'Photo documentation with Instant Print',
          style: 'medium'
      },
      {
        type: 'text',
          id: 'photobooth-desc',
          content: "For EFG’s End Year Party, Awwnderful provided Photo Documentation with Instant Photo Prints to capture every joyful moment as it happened. Guests didn’t just take photos — they took home memories, printed on the spot. This seamless blend of event coverage and on-site printing added a personal, lasting touch to a night full of celebration.",
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'documentation-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/EFG-Grand-Hyatt-Jakarta/Edit/i-gvW8zCL/0/MJg4bskknRRdHB6MS3dnC9KtgSH3JLC3w5LV4JCTV/X2/DSC02417-X2.jpg',
            alt: 'Students dancing at French School Prom',

          },
          {
            src: 'https://photos.smugmug.com/Events/EFG-Grand-Hyatt-Jakarta/Edit/i-wfZrV32/0/MphQZ6HtMVL6qsZZqc8RMWVrkzD7KM6LJF3CSghh6/X2/DSC02432-X2.jpg',
            alt: 'Preparing the decoration for the prom night.',

          },
          {
            src: 'https://photos.smugmug.com/Events/EFG-Grand-Hyatt-Jakarta/Edit/i-3rPXMQn/0/MzQ8DtRc6r8xcFdqcJfPbsgnBV3DVvdxSnDVVkKBf/X2/DSC02335-X2.jpg',
            alt: 'Overall ambiance of the French School Prom',

          }
        ],
        layout: 'masonry'
      },

      {
        type: 'text',
        id: 'conclusion',
          content: "The result was a lively and memorable celebration where every candid smile and group photo was captured and printed on the spot. Our instant print station added an extra layer of excitement, giving guests a personal keepsake to take home. For events that deserve to be remembered, Awwnderful delivers more than just documentation we deliver lasting impressions. Let’s make your next event unforgettable.",
        style: 'large'
      }
    ]
  },
  {
    id: 'case-studies-hashtag-printer-at-johnson-baby-universe',
      title: 'Case studies : Hashtag Printer at Johnson Baby Universe',
    image: 'https://photos.smugmug.com/Events/Johnsonn-ChooseGentle/Hashtag-Upload/i-T43zb5g/0/NDJvwMfxNxcBx9SMrhBsd3r2VrDXsxqC5kTcT7VWr/X2/DSCF5545-X2.jpg',
      excerpt: 'Hashtag Printer at Johnson Baby Universe, Mall Kota Kasablanka.',
    slug: 'case-studies-hashtag-printer-at-johnson-baby-universe',
    productTags: ['hashtag-printer','brand activation'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
          content: "Seamless Printing Experience at Johnson’s Baby Universe Event.",
        style: 'large'
      },
 
      {
        type: 'text',
        id: 'photobooth-desc',
          content: "At the Johnson’s Baby Universe event, Awwnderful was trusted to provide a smooth and engaging photo activation using our Hashtag Printer service. Understanding the high volume of attendees, we deployed two hashtag printer stations to ensure that guests could receive their prints quickly and efficiently. By simply uploading their event photos to social media with the official hashtag, guests were able to instantly receive printed keepsakes minimizing wait times and maximizing fun.",
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'photobooth-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/Johnsonn-ChooseGentle/Hashtag-Upload/i-98DP8Bj/0/LJhVh2W5csbGBM6BRWCqZTHHgmGdf4VdZZfC96LJb/X2/DSCF5558-X2.jpg',
            alt: '2 Hashtag machine in action.',
            caption: '2 Hashtag machine in action.'
          },  
          {
            src: 'https://photos.smugmug.com/Events/Johnsonn-ChooseGentle/Hashtag-Upload/i-5wrFLkT/0/LpjfMCpwb3bNfjrV8LHgk5cjT3qcBHVK3wkStZ9SR/X2/DSCF5544-X2.jpg',
            alt: 'Hashtag display instruction.',
            caption: 'Hashtag display instruction.'
          },
          {
            src: 'https://photos.smugmug.com/Events/Johnsonn-ChooseGentle/Hashtag-Upload/i-gqBMgd2/0/MQnjB2c2zqGqcZQ5D5PkjmWzrJwtPXpb5Vgp349SW/X2/DSCF5560-X2.jpg',
            alt: 'Displayed photo print sticked in booth.',
            caption: 'Displayed photo print sticked to every corner to gain awareness about the hashtag printer.'
          }
        ],
        layout: 'grid'
      },
      {
        type: 'callout',
        id: 'photobooth-link',
          content: "✨ Check out all the fun photobooth moments! [View Photobooth result]  https://awwnderful.smugmug.com/Events/Johnsonn-ChooseGentle",
        style: 'tip'
      },


      {
        type: 'gallery',
        id: 'documentation-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/Johnsonn-ChooseGentle/Event-images/i-9hsgQWP/0/KPgfNnB4tCJC24bPwQCgGHHXxkZzCBxwTZ75HW67f/X2/HFP_20190801_134246-X2.jpg',
            alt: 'Hashtag Printed photo with frame.',
            caption: 'Hashtag Printed photo with frame.'
          },
          {
            src: 'https://photos.smugmug.com/Events/Johnsonn-ChooseGentle/Hashtag-Upload/i-Zqqd8bP/0/MFxWhGG9MRbFKw2TxMJfQzNr8rj7hNFM7bkVLbtkQ/X2/DSCF5546-X2.jpg',
            alt: 'Preparing the decoration for the prom night.',
            caption: 'Guest selecting the photo in Hashtag print booth.'
          },
          {
            src: 'https://photos.smugmug.com/Events/Johnsonn-ChooseGentle/Hashtag-Upload/i-VHRcM4h/0/Mpj8LFn33vvvp284RKN6LjP3Fm3Xr3CTmvg7DXm7b/X2/DSCF5570-X2.jpg',
            alt: 'Many photo spot corners for guests to take photos with the hashtag printer.',
            caption: 'Many photo spot corners for guests to take photos with the hashtag printer.'
          }
        ],
        layout: 'masonry'
      },
   
      {
        type: 'text',
        id: 'conclusion',
          content: "With thoughtful planning and smart solutions, Awwnderful helped bring the Johnson’s Baby Universe experience to life. Want a hassle-free, high-impact photobooth activation for your next big crowd? Let’s talk!",
        style: 'large'
      }
    ]
  },
  {
    id: 'case-studies-multicamera-with-print-out-at-aldhiya-willy-wedding',
      title: 'Case Studies : Multicamera at Aldhiya & Willy Wedding',
    image: 'https://photos.smugmug.com/photos/i-djpmmdk/0/MwrjgQjZnrgthww8hncFpSDnC5PPDNDLcr87BTKP5/X2/i-djpmmdk-X2.jpg',
      excerpt: 'See our Multicamera with print out at Aldhiya & Willy Wedding',
    slug: 'case-studies-multicamera-with-print-out-at-aldhiya-willy-wedding',
    productTags: ['multicamera ','photo print','wedding'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [

      {
        type: 'text',
        id: 'photobooth-heading',
          content: 'Bullet Time Photobooth with Instant Prints: A Wedding Highlight Like No Other',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'photobooth-desc',
          content: "At this wedding celebration, we brought the wow factor with our Bullet Time Photobooth — a stunning multi-camera setup that captures dynamic 180° shots in a split second. Guests experienced the thrill of cinematic-style captures, perfect for creating share-worthy moments. To make the experience even more memorable, we added an instant print-out station, allowing each guest to take home a frame-worthy memento of their one-of-a-kind shot..",
        style: 'normal'
      },
        {
          type: 'callout',
          id: 'photobooth-link',
          content: "✨ Check out all the fun photobooth moments! [View Photobooth result]  https://awwnderful.smugmug.com/Events/AldhiyaWilly-Wedding",
          style: 'tip'
        },
      {
        type: 'gallery',
        id: 'photobooth-gallery',
        images: [
  
          {
            src: 'https://photos.smugmug.com/photos/i-PTmvBKw/0/LCNTRn2TfQLZb7k3K6pGXVnWPSNfD72zrC6V8m8Br/1280/i-PTmvBKw-1280.mp4',
            alt: 'Multicamera with print out.',
            caption: 'Preview Monitor in Multicamera.'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-vVPzpXf/0/Mv8Xz3gZPjCt9PNwthHkzz5gPSCv2Hmzs5HVFB47j/1280/i-vVPzpXf-1280.mp4',
            alt: 'Displayed photo print sticked in booth.',
          }
        ],
        layout: 'masonry'
      },


      {
        type: 'gallery',
        id: 'documentation-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/photos/i-MjN3ghw/0/KHb3HRHt58wFHxdQDNxrfWcTB2pJXnCVrPqstDL3n/X2/i-MjN3ghw-X2.jpg',
              alt: 'Guest selecting the photo in Hashtag print booth.',
              caption: 'Guest selecting the photo in print booth.'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-p3hwzdg/0/LmxbcRBX7nKtFg98GtwgNLBkTQ9rCsg8c3sTvwwwm/X2/i-p3hwzdg-X2.jpg',
              alt: 'Guest taking photo in multicamera booth',
              caption: 'Guest taking photo in multicamera booth'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-Wx3MckQ/0/NS8DkPkWX7MBpFcttCfvHnPDNnqF9KrVP8Nf9bzrx/L/i-Wx3MckQ-L.gif',
              alt: 'Video output with intro video title',
              caption: 'Video output with intro video title'
          },
          {
            src: 'https://photos.smugmug.com/Events/AldhiyaWilly-Wedding/Prints/i-TFnX3zr/0/Lg3JbtQsznSnRnZ3TR9GxQgbXTp2MzWvRCCVK4PB8/X2/20190706_013_Prints-X2.jpg',
            alt: '2 Hashtag machine in action.',
              caption: 'Printed result from the middle camera'
          },  
        ],
        layout: 'masonry'
      },

      {
        type: 'text',
        id: 'conclusion',
          content: "Want a photobooth that truly stands out? Awwnderful’s Multicamera with Bullet time style setup with instant prints is the perfect addition to any wedding looking for fun, flair, and unforgettable keepsakes. Let’s bring this epic experience to your big day!",
        style: 'large'
      }
    ]
  },
  {
    id: 'case-studies-dunhill-booth',
    title: 'Case studies : Dunhill booth',
    image: 'https://photos.smugmug.com/photos/i-sdf3NMS/0/LnmFFpFSQ8L4qtsWpvXhFM36CNnk2hLcSnrbscGGp/X3/i-sdf3NMS-X3.jpg',
      excerpt: 'Behind the scenes of our photobooth gif at Dunhill booth.',
    slug: 'case-studies-dunhill-booth',
    productTags: ['case-studies','photobooth-gif','custom user interface','brand activation'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
          content: "This case study highlights our collaboration with Makna Creative to create a custom photo experience at the DCode booth, using RGB lighting and a tailored interface to capture guests with the light installation.",
        style: 'large'
      },

      {
        type: 'text',
        id: 'photobooth-desc',
          content: "We were approached by Makna Creative to enhance the guest experience at the DCode booth through immersive photo capturing. To complement the stunning light installation, we built a custom photo interface that seamlessly blended with the artistic setup. Using RGB lighting, we added dynamic color tones to every shot — making each guest stand out and feel part of the installation itself.",
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'photobooth-gallery',
        images: [
          
          {
            src: 'https://photos.smugmug.com/Events/DCODE-at-Future-Republic-2019/MP4/i-wwKDPTw/0/LRW5bnBdjSJ4XVjLm2VKT9TQXnDnNmKQKGBzTv5GC/640/190223_193536-640.mp4',
              alt: 'GIF Result',

          },
          {
            src: 'https://photos.smugmug.com/Events/DCODE-at-Future-Republic-2019/MP4/i-9LMZtv7/0/MnLtswG5chwmqsq7G6PzshxFWKJms7Sq2Vs5zvMk8/1280/190223_194944-1280.mp4',
              alt: 'GIF Result',
 
          },
          {
            src: 'https://photos.smugmug.com/Events/DCODE-at-Future-Republic-2019/MP4/i-sTnjWxd/0/NjMRPR2fCGPccrgDpMDgK54dB3HhfLKZHLK3L4qvN/1280/190224_014224-1280.mp4',
              alt: 'GIF Result',
          }
        ],
        layout: 'grid'
      },
      {
        type: 'callout',
        id: 'photobooth-link',
          content: "✨ Check out all the fun photobooth moments! [View Photobooth result]  https://awwnderful.smugmug.com/Events/DCODE-at-Future-Republic-2019",
        style: 'tip'
      },

      {
        type: 'gallery',
        id: 'documentation-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/photos/i-ZvHBC7P/0/Ngvdz9NbWsffkGdnqVhJPL2H4zg7CMqQ72xLLMPjC/X3/i-ZvHBC7P-X3.jpg',
            alt: 'Students dancing at French School Prom',
            caption: 'Our photobooth setup before the event.'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-Z7MfHMX/0/KQfMKWDw9QQkNWPdHCL6bnTPCZDfhHdBKDtT8z8cK/X3/i-Z7MfHMX-X3.jpg',
            alt: 'Students dancing at French School Prom',
            caption: 'Sharing photo stations with custom branding.'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-2bDs75v/0/KZTF2LmGQ9qgx5zvLB9RCQ2bWnRrRkFRkCN68vMfv/X3/i-2bDs75v-X3.jpg',
            alt: 'Preparing the decoration for the prom night.',
            caption: 'The booth taking the picture'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-CQGTD4p/0/MzT4PWV4fZtkmmKjHrgkkDQgbcchBzPfHZL8PZJK5/X2/i-CQGTD4p-X2.jpg',
            alt: 'Preparing the decoration for the prom night.',
            caption: 'Customized user interface with Dcode color tone.'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-fjCVj2S/0/K9jmckqbQQ7CNHbP4LgTw4PRHjz6gVnGhdDvLV4zX/X3/i-fjCVj2S-X3.jpg',
            alt: 'Overall ambiance of the French School Prom',
            caption: 'Booth vibes from the outside.'
          }
        ],
        layout: 'masonry'
      },

      {
        type: 'text',
        id: 'conclusion',
          content: "When creativity meets technology, unforgettable moments are made. Awwnderful is proud to collaborate with Makna Creative in delivering interactive, design-forward photo experiences. Let’s craft your next visual story together.",
        style: 'large'
      }
    ]
  },
 
  {
    id: 'case-studies-skyavenue-2017',
    title: 'Case studies : Skyavenue 2017',
    image: 'https://photos.smugmug.com/photos/i-WS722sR/0/KZJkknJ6xDMKjdGzLvv73CVws8chP6R2ndLfvk3Bk/XL/i-WS722sR-XL.jpg',
    excerpt: 'Take a look of our photobooth setup at Skyavenue 2017.',
    slug: 'case-studies-skyavenue-2017',
    productTags: ['case-studies','photobooth-gif','school event'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: "The French School Jakarta's Prom Night was a night to remember, filled with glamour, excitement, and unforgettable moments. Awwnderful was thrilled to be a part of this special occasion, providing our top-tier Photobooth GIF (DSLR model) and comprehensive Photo Documentation services to capture the magic of the evening.",
        style: 'large'
      },
      {
        type: 'text',
        id: 'photobooth-heading',
        content: 'Instant Fun with the DSLR Photobooth GIF',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'photobooth-desc',
        content: "Our DSLR Photobooth GIF was an instant hit! Students and faculty alike queued up to create fun, animated GIFs and high-quality photos. The DSLR setup ensured crystal-clear images, while the GIF feature added a dynamic and shareable element to their prom memories. With a variety of props and a sleek backdrop, the photobooth became a hub of laughter and creativity throughout the night.",
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'photobooth-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/Skyavenue2017/MP4-1/i-Jp495Ck/0/KdVPVMt3GWrXjQLNdLTBzzLzcHr3mKS7Jsv4BFbb6/1280/video_145-1280.mp4',
            alt: 'Photobooth result',
          },
          {
            src: 'https://photos.smugmug.com/Events/Skyavenue2017/MP4-1/i-M3xPQj7/0/MJTZ9cWVtdk9S9qBwcF2G5KS4c7bJ5pJdzBX4p7Gj/1280/video_36-1280.mp4',
            alt: 'Photobooth result',
          },
          {
            src: 'https://photos.smugmug.com/Events/Skyavenue2017/MP4-1/i-WzL3sZw/0/LQVtDLjKG2gbdkkv8Rzs3mFgkd4qLv86bQ822bnH9/1280/video_76-1280.mp4',
            alt: 'Photobooth result',
          }
        ],
        layout: 'grid'
      },
      {
        type: 'callout',
        id: 'photobooth-link',
        content: "✨ Check out all the fun photobooth moments! [View Photobooth result] https://awwnderful.smugmug.com/Events/Skyavenue2017",
        // ",
        style: 'tip'
      },
      {
        type: 'text',
        id: 'documentation-heading',
        content: 'Capturing Every Precious Moment: Photo Documentation',
        style: 'large'
      },
      {
        type: 'text',
        id: 'documentation-desc',
        content: "Beyond the photobooth, our professional photo documentation team was on hand to capture the entirety of the prom night. From the grand entrances and elegant attire to the heartfelt speeches, energetic dance floor, and crowning of the prom King and Queen, every significant moment was preserved. Our photographers blended into the background, ensuring natural, candid shots that truly reflected the atmosphere of the event.",
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'documentation-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/photos/i-mqqH9S7/0/KR2NqLG8RQMCtSjXKq57sb6R9rWJzX62GSqdCJN9X/XL/i-mqqH9S7-XL.jpg',
            alt: 'Students dancing at French School Prom',
            caption: 'Confetti & Photo strip'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-Kg3hrtm/0/MhfnvMcd3pMBZLtmMBVGQ8WgNtc7tF5NgfNK5X2XB/XL/i-Kg3hrtm-XL.jpg',
            alt: 'Preparing the decoration for the prom night.',
            caption: 'O Booth interface'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-dnwQZjg/0/MDbTDtRtGCcFrJ9fDQ4M2669Wrqr8wxNxQm27tSM8/XL/i-dnwQZjg-XL.jpg',
            alt: 'Overall ambiance of the French School Prom',
            caption: 'Overall ambiance of the French School Prom'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-V2V6xvF/0/LrRPxDQLPbbDgVgqgc8pSb3hsDBm6rTGrw3PJtg69/XL/i-V2V6xvF-XL.jpg',
            alt: 'Overall ambiance of the French School Prom',
            caption: 'Overall ambiance of the French School Prom'
          }
        ],
        layout: 'masonry'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: "The combination of our interactive Photobooth GIF service and thorough Photo Documentation ensured that the French School Jakarta Prom Night was not only a fantastic experience but also an event with memories beautifully preserved for years to come. We're proud to have contributed to such a special night!",
        style: 'large'
      }
    ]
  },
  {
    id: 'case-studies-sweet-17-evellin',
    title: 'Case studies : Sweet 17 Evellin Birthday party',
    image: 'https://photos.smugmug.com/Events/Evelin-Sweet-17/Edit/i-xtt7nb9/0/KjmdMxDCGXLNpscSLx3fTjpxmsTDWmwXG7xjp4cFv/XL/DON02470-XL.jpg',
    excerpt: 'Take a look of our photobooth setup at Skyavenue 2017.',
    slug: 'case-studies-sweet-17-evellin',
    productTags: ['case-studies','photobooth-gif','photo documentation','birthday'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: "Evelin’s Sweet 17 celebration brought the glamour of the Great Gatsby era to life. Awwnderful was trusted to capture every moment through full photo documentation and a lively GIF photobooth. With a caramel sequin backdrop perfectly matching the Gatsby theme, guests enjoyed striking poses while choosing from multiple custom frame designs",
        style: 'large'
      },
      {
        type: 'gallery',
        id: 'photobooth-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/Evelin-Sweet-17/MP4/i-TsDm238/0/MV9WKQLkBhn4VpSxBhDfkPbwVBwZgJmmPDZsX2QdG/1280/200823_224657-1280.mp4',
            alt: 'Photobooth result',
          },
          {
            src: 'https://photos.smugmug.com/Events/Evelin-Sweet-17/MP4/i-wjRm6mN/0/LsW7qBV6HBgmhbRjQVxh8rKF6DCmb48prx8GGV9sk/1280/200823_182341-1280.mp4',
            alt: 'Photobooth result',
          },
          {
            src: 'https://photos.smugmug.com/Events/Evelin-Sweet-17/MP4/i-tV6J6FG/0/L8BXWLXR9HHLWgRKB2XpHp7VZLkZXfqCfGzwtbqXH/1280/200823_214355-1280.mp4',
            alt: 'Photobooth result',
          }
        ],
        layout: 'grid'
      },
      {
        type: 'callout',
        id: 'photobooth-link',
        content: "✨ Check out all the fun photobooth moments! [View Photobooth result] https://awwnderful.smugmug.com/Events/Evelin-Sweet-17",
        // ",
        style: 'tip'
      },
      {
        type: 'text',
        id: 'documentation-heading',
        content: '3 Print out options',
        style: 'large'
      },
      {
        type: 'gallery',
        id: 'photobooth-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/Evelin-Sweet-17/Prints/i-tZCS8NL/0/NdWSqJ5cNsxVdjBZ88dgpTrb3tGCJVmngJv5H6gGJ/X2/200823_214943-X2.jpg',
            alt: 'Photobooth result',
          },
          {
            src: 'https://photos.smugmug.com/Events/Evelin-Sweet-17/Prints/i-HZhM8zg/0/Ls8J2G4ZJHMgsWhPWLb5trjNBxdVthvkMTgRfBGdP/XL/200823_180456-XL.jpg',
            alt: 'Photobooth result',
          },
          {
            src: 'https://photos.smugmug.com/Events/Evelin-Sweet-17/Prints/i-NnnQGdJ/0/LsQqt9582xv3QQ28khDKk2BXGDNLK9RnhW7CqpCRk/X2/200823_214312-X2.jpg',
            alt: 'Photobooth result',
          }
        ],
        layout: 'grid'
      },

      {
        type: 'text',
        id: 'documentation-desc',
        content: "Guests can choose the layout they love most, whether it’s a classic portrait, wide landscape, or fun photo strip.",
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'documentation-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/Events/Evelin-Sweet-17/Edit/i-C7gSMGS/0/KVHCk8dFtWS7R8cDzdS6WcmcCm89JP7Dv5Jsv3njs/XL/DON02344-XL.jpg',
            alt: 'Students dancing at French School Prom',

          },
          {
            src: 'https://photos.smugmug.com/Events/Evelin-Sweet-17/Edit/i-cpSTRRP/0/L23hrgxL5Q6dxwh9DT5zzFTctTtc8jp5FxxmSHsgR/4K/DON02621-4K.jpg',
            alt: 'Preparing the decoration for the prom night.',

          },
          {
            src: 'https://photos.smugmug.com/Events/Evelin-Sweet-17/Edit/i-bwTJJmP/0/MFmj27SrWGCZLSqSS7Pps226bvnRJ9H96xvbS5Rn8/5K/IMG_0095-5K.jpg',
            alt: 'Overall ambiance of the French School Prom',

          },
          {
            src: 'https://photos.smugmug.com/Events/Evelin-Sweet-17/Edit/i-KfHnGrz/0/NDGWtTHMJCr9XHNzfqh7WRV7sTjrBqQ65Cj68v25n/XL/DON02534-XL.jpg',
            alt: 'Overall ambiance of the French School Prom',

          }
        ],
        layout: 'masonry'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: "velin’s Sweet 17th was a night to remember, and we’re proud to have helped capture the magic. From stylish Gatsby themed photos to GIFs full of personality, every guest left with memories they could hold on to. Here’s to more unforgettable celebrations crafted with Awwnderful.",
        style: 'large'
      }
    ]
  },
  {
    id: 'case-studies-moet-150th',
    title: 'Case studies : Moet 150th',
    image: '/images/services/interactive-display-jakarta/interactive-display-jakarta-photo-slideshow-1.webp',
    excerpt: 'Take a look of our interactive display setup at Moet 150th.',
    slug: 'case-studies-moet-150th',
    productTags: ['photobooth-gif','interactive-display','brand activation'],
      publishedAt: '2024-07-27',
      author: {
        name: 'Seno Sabdastandyo',
        image: '/images/blog-profile-seno-jakarta.webp'
      },
      content: [
        {
          type: 'text',
          id: 'intro',
          content: "To celebrate Moët’s milestone 150th anniversary at Grand Indonesia, Awwnderful crafted an immersive photo experience designed to captivate.",
          style: 'large'
        },
        {
          type: 'text',
          id: 'photobooth-heading',
          content: 'Taking the Boomerang and get displayed on the screen',
          style: 'medium'
        },
        {
          type: 'text',
          id: 'photobooth-desc',
          content: "Guests enjoyed our signature Boomerang photo system, with results instantly showcased on a giant LED screen—making everyone eager to get their moment in the spotlight. A photographer was also on standby to capture portraits in front of a stunning Gatsby-style backdrop, ensuring every memory was as glamorous as the event itself.",
          style: 'normal'
        },
        {
          type: 'gallery',
          id: 'photobooth-gallery',
          images: [
            {
              src: 'https://photos.smugmug.com/Events/Moet150th/MP4/i-bdXH3Xc/0/LBZKQdPPbWRPB4Fn8rXs2KHWrhVzhJqCGZ82LVBzS/1280/Moet150th_0092-1280.mp4',
              alt: 'Photobooth result',
            },
            {
              src: 'https://photos.smugmug.com/Events/Moet150th/MP4/i-4JdzD6g/0/KzHGBpCJXrKqgFKF8gRktCcPHbPznV8qWxjcWJm3k/1280/Moet150th_0098-1280.mp4',
              alt: 'Photobooth result',
            },
            {
              src: 'https://photos.smugmug.com/Events/Moet150th/MP4/i-XV53dgL/0/MLg9ZvZtsX9ZLFqmnKMBGjsD5GpmrKqCdBBvP6wKL/1280/Moet150th_0076-1280.mp4',
              alt: 'Photobooth result',
            }
          ],
          layout: 'grid'
        },
        {
          type: 'callout',
          id: 'photobooth-link',
          content: "✨ Check out all the fun photobooth moments! [View Photobooth result] https://awwnderful.smugmug.com/Events/Moet150th/MP4",
          // ",
          style: 'tip'
        },
        {
          type: 'text',
          id: 'documentation-heading',
          content: 'Capturing Every Precious Moment: Photo Documentation',
          style: 'large'
        },
        {
          type: 'text',
          id: 'documentation-desc',
          content: "Beyond the photobooth, our professional photo documentation team was on hand to capture the entirety of the prom night. From the grand entrances and elegant attire to the heartfelt speeches, energetic dance floor, and crowning of the prom King and Queen, every significant moment was preserved. Our photographers blended into the background, ensuring natural, candid shots that truly reflected the atmosphere of the event.",
          style: 'normal'
        },
        {
          type: 'gallery',
          id: 'documentation-gallery',
          images: [
            {
              src: 'https://photos.smugmug.com/photos/i-ZxXp72t/0/MKqTjVLVCkZ8PZxCCDcpDTFgjvRhrVL52Pbk3S6xd/X3/i-ZxXp72t-X3.jpg',
              alt: 'Students dancing at French School Prom',

            },
            {
              src: 'https://photos.smugmug.com/photos/i-bXqKsJx/0/NQqdfSvhDvhSqcnJTJV72rcbZW2gjBKq4crN77pCL/1920/i-bXqKsJx-1920.mp4',
              alt: 'Preparing the decoration for the prom night.',

            },
            {
              src: 'https://photos.smugmug.com/photos/i-5bRBgrQ/0/LT2XZNsPxSWzxG58Nq8bRc2qjFJjGmTXV9KKQjPVV/1920/i-5bRBgrQ-1920.mp4',
              alt: 'Overall ambiance of the French School Prom',

            },
            {
              src: 'https://photos.smugmug.com/photos/i-mBHfMXs/0/NGNg9nXb6PNTwrrT3mvnvg2rjRSD8tfGhCWzB78fw/X3/i-mBHfMXs-X3.jpg',
              alt: 'Guest sharing their photo on sharing stations',

            }
          ],
          layout: 'masonry'
        },
        {
          type: 'text',
          id: 'conclusion',
          content: "From personalized content to large-screen spotlights, we helped Moët turn memories into moments worth celebrating. Let Awwnderful bring the same sparkle to your next event—reach out and let's make it unforgettable!",
          style: 'large'
        }   
      ]
    },
    {
      id: 'case-studies-wedding-alifya-syuhada',
      title: 'Case studies : Wedding of Alifya & Syuhada',
      image: 'https://photos.smugmug.com/photos/i-WLLg5bP/0/K6JQq4tHMVp7P7cw4MwThrw9BKMMXB9vMN4PXDs97/4K/i-WLLg5bP-4K.jpg',
      excerpt: 'Take a look of our decoration setup at Wedding of Alifya & Syuhada.',
      slug: 'case-studies-wedding-alifya-syuhada',
      productTags: ['decoration','wedding'],
    publishedAt: '2024-07-27',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [

      {
        type: 'text',
        id: 'documentation-heading',
        content: 'For the wedding of Alifya & Syuhada, we had the honor of transforming the venue into a beautifully curated space that reflected their personal style and love story. Our team handled the full wedding decoration',
        style: 'large'
      },

      {
        type: 'gallery',
        id: 'documentation-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/photos/i-GZ8GrrH/0/NMLwfGgJ56ccJ6hPVHGxzFr9q4w8MCv5bwP3Qvcnx/X3/i-GZ8GrrH-X3.jpg',
            alt: 'Photo Wedding Decoration',

          },
          {
            src: 'https://photos.smugmug.com/photos/i-nVhpjJN/0/NMhM6mH3Zc6Vn2ckN92M2N6mtbtTZxXVbcg759z4H/XL/i-nVhpjJN-XL.jpg',
            alt: 'Photo Wedding Decoration',

          },
          {
            src: '/images/services/wedding-decoration-jakarta/wedding-decoration-jakarta-wedding-decoration-1.webp',
            alt: 'Photo Wedding Decoration',

          }
        ],
        layout: 'grid'
      },
      {
        type: 'text',
        id: 'documentation-desc',
        content: "From the enchanting floral gate that welcomed guests, to the grand stage setup where the couple shared their most memorable moments. We also designed a soft and elegant backdrop for the ushers, a personalized photo stand for guests to enjoy, and a refined akad table arrangement that set the perfect tone for the solemn ceremony.",
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'documentation-gallery',
        images: [
          {
            src: 'https://photos.smugmug.com/photos/i-WLLg5bP/0/MbjwJzSTRxdXvScmrSPLK5QQ26CRzn6KMCXsXzqsV/X4/i-WLLg5bP-X4.jpg',
            alt: 'Photo Wedding Decoration',

          },
          {
            src: 'https://photos.smugmug.com/photos/i-5hjbdrj/0/MBNFHh7DCk5rBL48GD2CN3rfPS6nk4zLRxf2s549d/X3/i-5hjbdrj-X3.jpg',
            alt: 'Photo Wedding Decoration',

          },
          {
            src: 'https://photos.smugmug.com/photos/i-dWH3jJV/0/KGWgn3ZZ5kBJZGc3BmhT3kfx6JBcVWX5bCQkfDkCX/4K/i-dWH3jJV-4K.jpg',
            alt: 'Photo Wedding Decoration',

          }
        ],
        layout: 'masonry'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: "Every wedding deserves a setting as meaningful as the vows exchanged. At Awwnderful, we take pride in crafting beautiful, personalized decorations that elevate your special day. Whether it’s an intimate akad or a grand celebration, let us help bring your dream wedding to life. Ready to plan your unforgettable moment? Contact us today and let’s create something beautiful together.",
        style: 'large'
      }
    ]
  },
  {
    id: 'disposable-camera-trend-2024',
    title: 'The Rise of Disposable Cameras: Nostalgic Photography in the Digital Age',
    image: 'https://photos.smugmug.com/photos/i-v58h9Vv/0/LgB8Qwmjxs57rpSqw2pTJDZ5SzFDGgvGMsLVsj8Ls/X2/i-v58h9Vv-X2.png',
    excerpt: 'Discover why disposable cameras are making a comeback and how they can add a unique touch to your events.',
    slug: 'disposable-camera-trend-2024',
    productTags: ['camera-disposable-digital-jakarta', 'photobooth-gif', 'brand activation'],
    publishedAt: '2024-12-15',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'In an era dominated by smartphones and instant digital photos, the humble disposable camera is experiencing a remarkable renaissance. This nostalgic photography trend is capturing hearts and creating unforgettable memories at events worldwide.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'trend-heading',
        content: 'Why Disposable Cameras Are Making a Comeback',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'trend-content',
        content: 'Disposable cameras offer a unique photographic experience that digital alternatives can\'t replicate. With no screens to review photos, no editing apps, and limited shots (typically 24-36 exposures), they encourage mindful photography and create genuine, unfiltered moments.',
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'disposable-gallery',
        images: [

          {
            src: 'https://photos.smugmug.com/photos/i-XjvZcjz/0/LDbDtn8dbTsbrT2GQ7cqBqmzwwcxhbGx3G9QpfbHk/M/i-XjvZcjz-M.png',
            alt: 'Guests using disposable cameras',
            caption: 'Guests capturing candid moments'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-SnvwSpF/0/NhtBQQWFWJjmrnHcZmWGd2nMbZJMpQWGHqX35TL37/M/i-SnvwSpF-M.png',
            alt: 'Disposable camera results',
            caption: 'Authentic, film-processed photos'
          }
        ],
        layout: 'grid'
      },
      {
        type: 'text',
        id: 'benefits-heading',
        content: 'Perfect for Your Event',
        style: 'large'
      },
      {
        type: 'list',
        id: 'benefits-list',
        items: [
          'Creates authentic, unfiltered memories',
          'Encourages guest interaction and conversation',
          'Adds a fun, retro element to modern events',
          'Produces unique keepsakes with character',
          'No technical barriers - anyone can use them',
          'Film processing adds anticipation and surprise'
        ],
        style: 'bullet'
      },
      {
        type: 'callout',
        id: 'cta',
        content: '🎥 Ready to add some nostalgic charm to your next event? Contact Awwnderful to learn about our disposable camera rental service!',
        style: 'info'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: 'As we navigate the digital photography landscape, disposable cameras remind us of the joy found in simplicity and surprise. They transform ordinary moments into extraordinary memories, proving that sometimes the best photos come from embracing limitations rather than endless possibilities.',
        style: 'large'
      }
    ]
  },

  {
    id: 'sewa-photobooth-jakarta-guide',
    title: 'Sewa Photobooth Jakarta: Harga, Paket, dan Cara Memilih Vendor',
    image: '/images/services/photo-booth-gif-jakarta/photo-booth-dslr-setup-jakarta-4.webp',
    excerpt:
      'Panduan lengkap sewa photobooth di Jakarta: kisaran harga, jenis layanan, dan tips memilih vendor yang tepat untuk wedding, event kantor, dan brand activation.',
    slug: 'sewa-photobooth-jakarta',
    productTags: [
      'sewa-photo-booth-jakarta',
      'photo-booth-360-jakarta',
      'photo-booth-keliling-jakarta',
      'photo-booth-high-angle-jakarta'
    ],
    publishedAt: '2025-01-01', // silakan ganti tanggal publish yang kamu mau (YYYY-MM-DD)
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content:
          'Layanan sewa photobooth Jakarta sekarang jadi salah satu jasa yang hampir selalu ada di wedding, ulang tahun, prom night, hingga corporate event dan brand activation. Selain bikin acara lebih seru, photobooth juga memberikan tamu kenang-kenangan yang bisa langsung dibawa pulang.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'context',
        content:
          'Di sisi lain, banyaknya pilihan vendor bisa bikin bingung. Harga paketnya berbeda-beda, jenis layanannya pun bermacam-macam — dari photobooth klasik, 360 booth, sampai photobooth keliling. Di artikel ini kita bahas gambaran harga, jenis layanan, dan tips memilih vendor yang tepat untuk acara Anda.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'section-what-heading',
        content: 'Apa Itu Layanan Sewa Photobooth?',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'section-what-content',
        content:
          'Secara sederhana, sewa photobooth adalah paket jasa yang menyediakan kamera, lighting, printer foto instan, desain frame, backdrop, dan operator. Tamu datang ke area booth, berfoto, lalu mendapatkan cetakan dan biasanya juga versi digital lewat QR, email, atau WhatsApp.',
        style: 'normal'
      },
      {
        type: 'list',
        id: 'what-included-list',
        items: [
          'Kamera DSLR atau mirrorless dan lighting profesional',
          'Komputer dan software untuk memproses foto',
          'Printer foto instan dengan kertas khusus',
          'Desain frame atau template yang bisa dikustom',
          'Backdrop dan props sesuai tema acara',
          'Operator / attendant yang mengarahkan tamu'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'pricing-heading',
        content: 'Kisaran Harga Sewa Photobooth di Jakarta',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'pricing-content',
        content:
          'Setiap vendor tentu punya paket dan harga sendiri, namun sebagai gambaran umum, kisaran harga sewa photobooth di Jakarta biasanya berada di rentang berikut:',
        style: 'normal'
      },
      {
        type: 'list',
        id: 'pricing-list',
        items: [
          'Photobooth standar 2–3 jam: sekitar Rp 3–6 juta',
          'Photobooth 360: umumnya Rp 5–12 juta tergantung durasi dan konsep',
          'Photobooth keliling / roaming: mulai dari Rp 4–10 juta',
          'High angle photobooth: sekitar Rp 3,5–7 juta'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'pricing-factors',
        content:
          'Harga dipengaruhi oleh durasi acara, jumlah cetakan (unlimited atau dibatasi), jenis output (foto saja, GIF, atau video), tingkat custom desain dan branding, jumlah kru, serta lokasi venue.',
        style: 'normal'
      },
      {
        type: 'callout',
        id: 'pricing-cta',
        content:
          '💡 Untuk gambaran lebih detail, Anda bisa membandingkan dengan halaman harga khusus seperti “Harga Sewa Photo Booth Jakarta” yang berisi tabel paket dan durasi.',
        style: 'info'
      },
      {
        type: 'text',
        id: 'types-heading',
        content: 'Jenis-Jenis Photobooth Populer di Jakarta',
        style: 'large'
      },
      {
        type: 'text',
        id: 'types-classic',
        content:
          '1. Classic Photo Booth — format paling familiar, tamu datang ke satu spot, berfoto, lalu langsung cetak. Cocok untuk wedding, ulang tahun, dan acara keluarga.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'types-360',
        content:
          '2. Photo Booth 360 — menghasilkan video pendek sinematik dengan efek slow motion dan overlay brand. Sangat cocok untuk konten Instagram Reels, TikTok, dan brand activation.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'types-roaming',
        content:
          '3. Photobooth Keliling / Roaming — bukan booth statis, tapi tim yang berkeliling venue mendatangi tamu. Ideal untuk mall event, festival, atau venue besar di mana tamu menyebar.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'types-high-angle',
        content:
          '4. High Angle Photobooth — kamera dipasang di atas dengan sudut top-down yang clean dan modern. Jejak area kecil, tapi hasil foto estetik dan kekinian, cocok untuk brand fashion dan beauty.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'choose-heading',
        content: 'Tips Memilih Vendor Sewa Photobooth Jakarta',
        style: 'large'
      },
      {
        type: 'list',
        id: 'choose-list',
        items: [
          'Lihat portofolio dan contoh hasil cetak untuk menilai kualitas foto dan kertas.',
          'Tanyakan workflow di hari H: berapa kru yang datang, bagaimana alur antrean, dan jam kedatangan setup.',
          'Pastikan bisa custom desain frame dan backdrop sesuai tema acara atau brand.',
          'Cek apakah vendor punya backup peralatan (kamera, printer, laptop).',
          'Baca ulasan dari klien sebelumnya di Google Review atau media sosial.',
          'Diskusikan dengan jelas kebutuhan khusus seperti integrasi QR, online gallery, atau data collection.'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'booking-heading',
        content: 'Kapan Waktu Terbaik untuk Booking?',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'booking-content',
        content:
          'Untuk tanggal-tanggal favorit seperti akhir pekan di musim wedding atau periode akhir tahun, sebaiknya booking vendor photobooth minimal 1–2 bulan sebelumnya. Jika konsepnya custom dan melibatkan brand activation, idealnya diskusi dimulai 4–8 minggu sebelum acara agar ada waktu cukup untuk desain dan uji coba teknis.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'combo-heading',
        content: 'Perlukah Sekaligus Sewa Fotografer Event?',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'combo-content',
        content:
          'Banyak klien menggabungkan sewa photobooth dengan jasa fotografer event. Photobooth fokus ke foto fun dan suvenir tamu, sementara fotografer event menangkap momen acara secara menyeluruh. Paket bundling seperti ini biasanya lebih efisien dari segi biaya dan koordinasi.',
        style: 'normal'
      },
      {
        type: 'callout',
        id: 'cta-main',
        content:
          '📸 Ingin diskusi konsep photobooth untuk acara Anda di Jakarta? Awwnderful bisa membantu merekomendasikan format terbaik — dari classic booth, 360, hingga photobooth keliling.',
        style: 'info'
      },
      {
        type: 'text',
        id: 'conclusion',
        content:
          'Sewa photobooth bukan hanya soal menyediakan spot foto, tetapi tentang menciptakan pengalaman dan kenangan untuk tamu. Dengan memahami kisaran harga, jenis layanan, dan cara memilih vendor, Anda bisa mendapatkan paket photobooth yang paling pas untuk wedding, event kantor, maupun brand activation di Jakarta.',
        style: 'large'
      }
    ]
  },

  {
    id: 'usaha-photobooth-panduan-lengkap',
    title: 'Usaha Photobooth: Peluang Bisnis, Modal, dan Strategi Memulainya',
    image: '/images/services/photobox-jakarta/photobox-jakarta-permanent-setup-photobox.png',
    excerpt:
      'Usaha photobooth menjadi peluang bisnis yang menjanjikan di kota besar seperti Jakarta. Pelajari modal awal, jenis layanan, dan strategi marketing agar cepat balik modal.',
    slug: 'usaha-photobooth-panduan',
    productTags: ['usaha photobooth', 'jasa sewa', 'brand activation', 'event jakarta'],
    publishedAt: '2025-01-15',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content:
          'Usaha photobooth merupakan salah satu peluang bisnis jasa sewa yang selalu dicari di berbagai acara seperti wedding, gathering kantor, sekolah, hingga brand activation. Dengan modal fleksibel dan permintaan yang stabil, usaha photobooth menjadi pilihan menarik bagi pemula maupun pelaku event.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'pros-heading',
        content: 'Kenapa Usaha Photobooth Menjanjikan?',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'pros-list',
        items: [
          'Market luas: wedding, corporate event, ulang tahun, brand activation',
          'Modal bisa bertahap—mulai dari kamera basic hingga full setup',
          'Harga sewa per event cukup tinggi (Rp 3–12 juta)',
          'Bisa dijalankan oleh tim kecil (2–3 orang)',
          'Repeat order tinggi dari event organizer'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'modal-heading',
        content: 'Modal Awal Usaha Photobooth',
        style: 'large'
      },
      {
        type: 'list',
        id: 'modal-list',
        items: [
          'Kamera DSLR/mirrorless',
          'Laptop untuk editing & printing',
          'Printer dye-sub (DNP / HiTi)',
          'Lighting + backdrop',
          'Meja, props, dan dekorasi',
          'Software photobooth'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'modal-range',
        content:
          'Modal awal usaha photobooth biasanya berkisar antara Rp 15 juta hingga Rp 70 juta tergantung kualitas gear.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'strategi-heading',
        content: 'Strategi Agar Usaha Photobooth Cepat Balik Modal',
        style: 'large'
      },
      {
        type: 'list',
        id: 'strategi-list',
        items: [
          'Fokus pada satu niche dulu (wedding / corporate)',
          'Tingkatkan kualitas desain frame',
          'Bangun koneksi dengan WO/EO',
          'Gunakan Instagram Reels & TikTok sebagai portofolio',
          'Tambahkan layanan unik seperti keychain booth, film strip, atau GIF booth'
        ],
        style: 'bullet'
      },
      {
        type: 'callout',
        id: 'cta',
        content:
          '💡 Ingin memulai usaha photobooth? Mulai dari konsep kecil dulu namun fokus pada kualitas hasil foto dan layanan pelanggan.',
        style: 'info'
      },
      {
        type: 'text',
        id: 'conclusion',
        content:
          'Usaha photobooth masih sangat potensial di Jakarta dan kota besar lainnya. Dengan modal yang fleksibel serta permintaan tinggi dari berbagai event, bisnis ini bisa memberikan keuntungan menarik jika dijalankan dengan strategi yang tepat.',
        style: 'large'
      }
    ]
  },
  {
    id: 'photobooth-keliling-jakarta',
    title: 'Photobooth Keliling Jakarta: Cocok untuk Mall Event & Brand Activation',
    image: '/images/services/roaming-photo-booth-jakarta/roaming-photo-booth-jakarta-dslroamer.webp',
    excerpt:
      'Photobooth keliling atau roaming booth cocok untuk event besar, mall activation, konser, dan festival. Pelajari cara kerjanya dan kapan harus menggunakannya.',
    slug: 'photobooth-keliling-jakarta',
    productTags: ['photo-booth-keliling-jakarta', 'brand activation', 'event besar'],
    publishedAt: '2025-01-21',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content:
          'Photobooth keliling atau roaming booth adalah solusi dokumentasi modern untuk event yang memiliki area besar atau tamu yang tersebar. Bukan booth statis, melainkan tim yang mendatangi tamu secara langsung.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'how-heading',
        content: 'Bagaimana Cara Kerja Photobooth Keliling?',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'how-list',
        items: [
          'Tim membawa kamera portable / tablet',
          'Foto diambil di area mana pun tamu berada',
          'Foto dikirim otomatis ke server',
          'Tamu scan QR untuk download',
          'Hasil bisa diprint di station utama'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'benefit-heading',
        content: 'Kelebihan Photobooth Keliling',
        style: 'large'
      },
      {
        type: 'list',
        id: 'benefit-list',
        items: [
          'Menjangkau lebih banyak tamu',
          'Cocok untuk mall, festival, konser',
          'Interaksi lebih natural & spontan',
          'Hasil tetap bisa di-branding',
          'Tingkat engagement tinggi'
        ],
        style: 'bullet'
      },
      {
        type: 'callout',
        id: 'cta',
        content:
          '🚶‍♂️ Photobooth keliling adalah pilihan terbaik untuk venue luas atau acara dengan crowd yang mobile.',
        style: 'info'
      },
      {
        type: 'text',
        id: 'conclusion',
        content:
          'Jika event Anda memiliki area luas atau ingin menciptakan engagement yang lebih personal, photobooth keliling adalah pilihan tepat dibandingkan booth statis.',
        style: 'large'
      }
    ]
  },
  {
    id: 'high-angle-photobooth-jakarta',
    title: 'High Angle Photobooth Jakarta: Konsep Modern untuk Event Kekinian',
    image: '/images/photobooth-high-angle.png',
    excerpt:
      'High angle photobooth menawarkan foto estetik dari sudut atas. Cocok untuk event brand, fashion, beauty, dan wedding modern.',
    slug: 'high-angle-photobooth-jakarta',
    productTags: ['photo-booth-high-angle-jakarta', 'event jakarta', 'fashion event'],
    publishedAt: '2025-01-24',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content:
          'High angle photobooth adalah konsep foto modern dengan kamera yang ditempatkan di posisi atas, menghasilkan gambar clean dan estetik. Format ini populer di event fashion, beauty, hingga wedding.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'why-heading',
        content: 'Kenapa High Angle Photobooth Disukai?',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'why-list',
        items: [
          'Sudut foto lebih flattering',
          'Tampilan modern & minimalis',
          'Butuh area kecil (1,5x1,5m)',
          'Cocok untuk brand lifestyle & beauty',
          'Output terlihat seperti editorial'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'events-heading',
        content: 'Cocok Digunakan untuk Event Apa?',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'events-list',
        items: [
          'Event fashion',
          'Peluncuran brand beauty',
          'Wedding modern',
          'Private party',
          'Corporate lifestyle & showroom event'
        ],
        style: 'bullet'
      },
      {
        type: 'gallery',
        id: 'setup-sketches',
        images: [
          {
            src: 'https://photos.smugmug.com/photos/i-65QsCZw/0/KgQtcFwfHznJMPXCwBp54CphcnQ9MwhQ7JMFbq9Pc/X2/i-65QsCZw-X2.jpg',
            alt: 'Sketsa top view high angle photobooth',
            caption: 'Photobooth high angle di acara Indonesia Comic Con'
          },
          {
            src: '/images/services/photobox-jakarta/photobox-jakarta-high-angle.webp',
            alt: 'Sketsa front view high angle photobooth',
            caption: 'Photobooth high angle di acara Whatsapp Business Summit'
          },
          {
            src: 'https://photos.smugmug.com/photos/i-t7jM9rm/0/MmQw29mJP4KxGzW7bK3KkfhxJRpshfvj8bDn7W4Wz/X2/i-t7jM9rm-X2.jpg',
            alt: 'Sketsa front view high angle photobooth',
            caption: 'Photobooth high angle di acara Tiktok Creator'
          }
        ],
        layout: 'grid',
        gridAlignment: 'center'
      },
      {
        type: 'callout',
        id: 'cta',
        content:
          '📸 High angle photobooth memberikan kesan premium dan editorial—sempurna untuk event dengan audiens visual.',
        style: 'info'
      },
      {
        type: 'text',
        id: 'conclusion',
        content:
          'Jika Anda menginginkan konsep photobooth yang minimalis, modern, dan sangat estetik, high angle photobooth adalah pilihan terbaik.',
        style: 'large'
      }
    ]
  },
  {
    id: 'sewa-photobooth-360-jakarta',
    title: 'Sewa Photobooth 360 Jakarta: Harga, Kelebihan, dan Kapan Harus Dipakai',
    image: '/images/manual-360-booth-jakarta.webp', // ganti sesuai asetmu
    excerpt:
      'Panduan lengkap photobooth 360 di Jakarta: kisaran harga, konsep, kapan cocok digunakan, dan bagaimana memilih vendor yang tepat untuk event Anda.',
    slug: 'sewa-photobooth-360-jakarta',
    productTags: [
      'photo-booth-360-jakarta',
      'sewa-photo-booth-jakarta',
      'brand activation',
      'event jakarta'
    ],
    publishedAt: '2025-01-10',
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content:
          'Photobooth 360 adalah salah satu tren paling populer di Jakarta untuk event modern. Dengan format video sinematik dan efek slow motion, booth ini banyak digunakan untuk brand activation, konser, corporate event, hingga wedding. Video berdurasi 5–12 detik yang dihasilkan sangat cocok untuk Instagram Reels dan TikTok.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'what-heading',
        content: 'Apa Itu Photobooth 360?',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'what-content',
        content:
          'Tidak seperti photobooth biasa yang menghasilkan foto cetak, photobooth 360 menghasilkan konten video. Tamu berdiri di platform dan kamera berputar mengelilingi mereka. Hasil akhirnya berupa video pendek dengan tambahan efek sinematik, overlay brand, dan musik.',
        style: 'normal'
      },
      {
        type: 'gallery',
        id: 'gallery-360',
        images: [
          {
            src: '/images/services/photo-booth-360-jakarta/360-1.webp',
            alt: '360 photobooth platform at Jakarta event',
            caption: 'Setup 360 photobooth untuk brand activation'
          },
          {
            src: '/images/services/photo-booth-360-jakarta/360-2.webp',
            alt: 'Guest using 360 booth',
            caption: 'Tamu menikmati pengalaman video 360'
          },
          {
            src: '/images/services/photo-booth-360-jakarta/360-3.webp',
            alt: '360 video output',
            caption: 'Contoh video sinematik dari 360 booth'
          }
        ],
        layout: 'grid'
      },
      {
        type: 'text',
        id: 'harga-heading',
        content: 'Kisaran Harga Sewa Photobooth 360 di Jakarta',
        style: 'large'
      },
      {
        type: 'text',
        id: 'harga-body',
        content:
          'Harga sewa photobooth 360 di Jakarta bervariasi tergantung durasi, konsep, lokasi, serta tingkat custom overlay video. Berikut kisaran harga yang umum:',
        style: 'normal'
      },
      {
        type: 'list',
        id: 'harga-list',
        items: [
          '2 jam: Rp 2 juta',
          '3 jam: Rp 3 juta',
          '4 jam: Rp 4 juta',
          'Full day brand activation: mulai Rp 6 juta'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'harga-factors',
        content:
          'Faktor yang memengaruhi harga antara lain ukuran platform, jumlah kru, kebutuhan lighting tambahan, editing real-time, serta integrasi dengan microsite atau online gallery.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'why-heading',
        content: 'Kenapa Pilih Photobooth 360?',
        style: 'large'
      },
      {
        type: 'list',
        id: 'why-list',
        items: [
          'Hasil video terlihat premium dan cinematic',
          'Sangat cocok untuk konten viral di media sosial',
          'Bisa branding penuh: overlay, musik, intro–outro video',
          'Tingkat “wow factor” tinggi dibanding photobooth biasa',
          'Tamu merasa seperti berada dalam video profesional',
          'Ideal untuk acara dengan ambience visual kuat'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'usecase-heading',
        content: 'Kapan Photobooth 360 Cocok Digunakan?',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'usecase-list',
        items: [
          'Brand activation di mall atau venue besar',
          'Corporate event dan gala dinner',
          'Konser, festival, dan fashion show',
          'Wedding modern dengan tamu muda',
          'Prom night / graduation',
          'Peluncuran produk kosmetik, otomotif, atau lifestyle'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'share-heading',
        content: 'Bagaimana Cara Tamu Menerima Video?',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'share-content',
        content:
          'Setelah video selesai diproses, tamu bisa mengambil hasilnya dengan beberapa cara:',
        style: 'normal'
      },
      {
        type: 'list',
        id: 'share-list',
        items: [
          'Scan QR code langsung di sharing station',
          'Link WhatsApp otomatis',
          'Email delivery',
          'Gallery online dengan branding khusus'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'vendor-heading',
        content: 'Tips Memilih Vendor Photobooth 360 di Jakarta',
        style: 'large'
      },
      {
        type: 'list',
        id: 'vendor-list',
        items: [
          'Pastikan platform 360 stabil & aman digunakan',
          'Lihat contoh output video lengkap (bukan hanya teaser)',
          'Tanyakan berapa kru yang turun di hari H',
          'Cek kualitas lighting — sangat berpengaruh ke hasil video',
          'Pastikan vendor punya backup equipment',
          'Tanyakan apakah bisa custom overlay untuk brand activation'
        ],
        style: 'bullet'
      },
      {
        type: 'callout',
        id: 'cta-contact',
        content:
          '🎥 Ingin menambahkan pengalaman 360 yang cinematic di acara Anda? Tim Awwnderful dapat membantu menyiapkan konsep terbaik untuk event Anda.',
        style: 'info'
      },
      {
        type: 'text',
        id: 'conclusion',
        content:
          'Photobooth 360 adalah pilihan ideal bagi Anda yang ingin memberikan pengalaman visual yang modern, premium, dan interaktif. Dengan video sinematik yang mudah dibagikan di media sosial, 360 booth bisa menjadi spotlight di acara apa pun — mulai dari wedding, konser, hingga brand activation.',
        style: 'large'
      }
    ]
  },

  // ============================================================
  // DRAFT ARTICLES — bisnis photobooth (preview only)
  // ============================================================

  {
    id: 'equipment-photobooth-lengkap-2025',
    title: 'Equipment Photobooth Lengkap: List & Estimasi Harga 2025',
    image: '/images/services/photobox-jakarta/photobox-jakarta-permanent-setup-photobox.png',
    excerpt: 'Mau mulai usaha photobooth tapi bingung beli apa dulu? Ini daftar equipment lengkap dari kamera, printer, hingga software — lengkap dengan estimasi harga 2025.',
    slug: 'equipment-photobooth-lengkap-2025',
    productTags: ['usaha photobooth', 'equipment', 'tips bisnis'],
    publishedAt: '2026-03-24',
    draft: true,
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Salah satu pertanyaan paling sering dari calon pengusaha photobooth adalah: "Harus beli apa dulu?" Jawabannya tergantung skala bisnis yang mau kamu jalankan. Artikel ini merangkum semua equipment yang dibutuhkan — dari yang paling esensial hingga upgrade yang bisa dilakukan bertahap.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'kamera-heading',
        content: 'Kamera',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'kamera-body',
        content: 'Kamera adalah jantung setup photobooth. Pilihan utama ada dua: DSLR dan mirrorless. Untuk pemula, DSLR seperti Canon EOS 90D atau Nikon D7500 masih sangat mumpuni dan harga second-nya terjangkau. Mirrorless seperti Sony A7III atau Fujifilm X-T4 memberikan kualitas lebih premium tapi dengan harga yang lebih tinggi.',
        style: 'normal'
      },
      {
        type: 'comparison',
        id: 'kamera-comparison',
        items: [
          {
            title: 'DSLR (Canon 90D / Nikon D7500)',
            description: 'Pilihan ekonomis untuk pemula, ekosistem lensa luas, baterai tahan lama.',
            pros: ['Harga terjangkau (Rp 8–15 juta baru, Rp 5–10 juta second)', 'Baterai lebih awet', 'Lensa murah & banyak pilihan'],
            cons: ['Lebih berat', 'Autofokus video lebih lambat']
          },
          {
            title: 'Mirrorless (Sony A7III / Fujifilm X-T4)',
            description: 'Kualitas gambar lebih tinggi, compact, cocok untuk booth modern.',
            pros: ['Image quality premium', 'Ringkas & ringan', 'Video quality sangat baik'],
            cons: ['Harga lebih mahal (Rp 18–35 juta)', 'Baterai lebih boros']
          }
        ]
      },
      {
        type: 'text',
        id: 'printer-heading',
        content: 'Printer Foto',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'printer-body',
        content: 'Printer adalah komponen paling krusial setelah kamera. Untuk photobooth profesional, gunakan printer dye-sublimation — hasil cetaknya tajam, tahan air, dan cepat. Merk yang paling populer di Indonesia: DNP DS-RX1HS, HiTi P525L, dan Mitsubishi CP-D90DW.',
        style: 'normal'
      },
      {
        type: 'list',
        id: 'printer-list',
        items: [
          'DNP DS-RX1HS — kecepatan tinggi, cocok untuk event besar. Harga: Rp 18–25 juta',
          'HiTi P525L — pilihan terpopuler di Indonesia, balance antara harga & kualitas. Harga: Rp 12–17 juta',
          'Mitsubishi CP-D90DW — kualitas warna premium, awet untuk penggunaan intensif. Harga: Rp 20–28 juta'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'lighting-heading',
        content: 'Lighting',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'lighting-body',
        content: 'Pencahayaan menentukan kualitas foto secara keseluruhan. Setup dasar: 2 softbox continuous light atau 1 ring light besar sudah cukup untuk pemula. Untuk setup profesional, tambahkan backlight dan hair light.',
        style: 'normal'
      },
      {
        type: 'list',
        id: 'lighting-list',
        items: [
          'Ring light 18-24 inch — cocok untuk setup sederhana & portrait. Harga: Rp 300–800 ribu',
          'Softbox 60x90cm (sepasang) — pencahayaan lebih merata & profesional. Harga: Rp 500 ribu–1,5 juta',
          'Strobe flash + trigger — untuk event formal & kualitas studio. Harga: Rp 2–5 juta'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'software-heading',
        content: 'Software Photobooth',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'software-body',
        content: 'Software menghubungkan kamera ke printer dan mengelola template. Beberapa pilihan populer: DSLR Remote Pro (Windows), Sparkbooth, dan Breeze Kiosk. Untuk setup iOS/iPad, ada Pic-Me dan Simple Booth.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'perangkat-heading',
        content: 'Perangkat Pendukung Lainnya',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'perangkat-list',
        items: [
          'Laptop Windows — spek minimal i5, RAM 8GB, SSD. Harga: Rp 6–15 juta',
          'Tripod & stand kamera — untuk setup stabil. Harga: Rp 300–800 ribu',
          'Backdrop + stand backdrop — backdrop vinyl atau kain. Harga: Rp 300 ribu–2 juta',
          'Props & dekorasi — kacamata, topi, balon, dll. Harga: Rp 200–500 ribu',
          'Extension cord & power strip — kebutuhan wajib di setiap event. Harga: Rp 150–300 ribu'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'total-modal',
        content: 'Total estimasi modal awal (setup standar): Rp 25–45 juta. Setup premium dengan printer DNP dan kamera mirrorless: Rp 60–90 juta.',
        style: 'normal'
      },
      {
        type: 'callout',
        id: 'tip-beli',
        content: 'Tips: Beli kamera & printer second berkualitas dulu untuk menekan modal awal. Upgrade satu per satu setelah cash flow stabil dari event pertama.',
        style: 'tip'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: 'Memulai usaha photobooth tidak harus langsung full setup mahal. Yang penting: kamera handal, printer dye-sub, dan lighting memadai. Sisanya bisa diupgrade seiring pendapatan yang masuk.',
        style: 'large'
      }
    ]
  },

  {
    id: 'cara-hitung-harga-sewa-photobooth',
    title: 'Cara Hitung Harga Sewa Photobooth Biar Tidak Rugi',
    image: '/images/services/photobox-jakarta/photobox-jakarta-permanent-setup-photobox.png',
    excerpt: 'Menentukan harga sewa photobooth yang tepat bukan soal nebak — ada formula hitungannya. Ini cara menghitung biaya operasional, keuntungan wajar, dan harga yang kompetitif.',
    slug: 'cara-hitung-harga-sewa-photobooth',
    productTags: ['usaha photobooth', 'tips bisnis', 'harga sewa'],
    publishedAt: '2026-03-24',
    draft: true,
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Banyak pemilik usaha photobooth yang baru mulai menetapkan harga berdasarkan "kira-kira" atau sekadar mengikuti kompetitor. Padahal, harga yang salah bisa membuat kamu kerja keras tapi tidak untung. Ini cara menghitungnya dengan benar.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'komponen-biaya-heading',
        content: '1. Identifikasi Komponen Biaya Per Event',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'biaya-list',
        items: [
          'Biaya transportasi (PP ke venue): Rp 100–300 ribu',
          'Biaya kertas & tinta printer per lembar: Rp 3–6 ribu (dye-sub)',
          'Estimasi cetak per event: 100–200 lembar → Rp 300 ribu–1,2 juta',
          'Tenaga operator (1–2 orang): Rp 200–400 ribu/orang',
          'Penyusutan equipment: hitung per jam dari total nilai alat',
          'Biaya tak terduga (buffer 10%)'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'depresiasi-heading',
        content: '2. Hitung Biaya Penyusutan Equipment',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'depresiasi-body',
        content: 'Misalnya total nilai equipment Rp 40 juta, umur pakai estimasi 3 tahun (1.095 hari). Kalau kamu rata-rata 4 event per bulan (48 event/tahun), berarti per event menanggung: Rp 40 juta ÷ (3 tahun × 48 event) = Rp 278 ribu per event untuk penyusutan alat.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'formula-heading',
        content: '3. Formula Harga Minimum',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'formula-body',
        content: 'Harga Minimum = Biaya Operasional Per Event + Penyusutan Equipment + Target Profit. Contoh: Rp 700 ribu (ops) + Rp 278 ribu (depresiasi) + Rp 1 juta (profit 50%) = Rp 1,978 juta. Artinya harga minimum aman di kisaran Rp 2 juta.',
        style: 'normal'
      },
      {
        type: 'callout',
        id: 'catatan-harga',
        content: 'Harga pasar photobooth Jakarta saat ini berkisar Rp 2,5–8 juta tergantung durasi, jenis booth, dan layanan tambahan. Jangan hanya melihat kompetitor — pastikan hitunganmu sendiri sudah aman dulu.',
        style: 'info'
      },
      {
        type: 'text',
        id: 'faktor-naik-heading',
        content: 'Faktor yang Bisa Menaikkan Harga',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'faktor-list',
        items: [
          'Durasi lebih panjang (>6 jam)',
          'Lokasi jauh atau butuh akses khusus',
          'Permintaan custom template atau branding klien',
          'Penambahan layanan: keychain print, GIF, video booth',
          'Event premium: wedding, peluncuran produk korporat',
          'Weekend atau hari libur nasional'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'paket-heading',
        content: 'Strategi Paket Harga',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'paket-body',
        content: 'Buat minimal 3 tier paket: Basic (durasi pendek, cetak terbatas), Standard (durasi standar, cetak unlimited), dan Premium (semua fitur + keychain/GIF). Ini memudahkan klien memilih dan kamu tetap bisa kontrol margin per paket.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: 'Harga yang tepat bukan yang paling murah, tapi yang memberikan kamu keuntungan wajar setelah semua biaya dihitung. Dengan formula ini, kamu bisa negosiasi dengan klien dengan kepala dingin karena sudah tahu batas minimum yang aman.',
        style: 'large'
      }
    ]
  },

  {
    id: 'roi-usaha-photobooth-kapan-balik-modal',
    title: 'ROI Usaha Photobooth: Kapan Bisa Balik Modal?',
    image: '/images/services/photobox-jakarta/photobox-jakarta-permanent-setup-photobox.png',
    excerpt: 'Usaha photobooth bisa balik modal dalam 6–18 bulan tergantung frekuensi event dan strategi harga. Ini simulasi ROI nyata untuk bantu kamu perencanaan.',
    slug: 'roi-usaha-photobooth-kapan-balik-modal',
    productTags: ['usaha photobooth', 'tips bisnis', 'ROI'],
    publishedAt: '2026-03-24',
    draft: true,
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Salah satu pertanyaan paling realistis sebelum mulai usaha photobooth adalah: kapan balik modal? Jawabannya bukan "tergantung" yang abstrak — ada angka konkretnya. Mari kita simulasikan.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'asumsi-heading',
        content: 'Skenario: Setup Standar',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'asumsi-list',
        items: [
          'Total modal awal: Rp 35 juta (kamera DSLR, printer HiTi, lighting, laptop, aksesoris)',
          'Harga sewa per event: Rp 3 juta (standard package, 4 jam)',
          'Biaya operasional per event: Rp 900 ribu (transport, kertas, operator)',
          'Profit bersih per event: Rp 2,1 juta',
          'Target event: 4x per bulan'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'simulasi-heading',
        content: 'Simulasi Balik Modal',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'simulasi-body',
        content: 'Dengan 4 event per bulan × Rp 2,1 juta profit = Rp 8,4 juta/bulan. Modal Rp 35 juta ÷ Rp 8,4 juta = sekitar 4,2 bulan. Artinya dengan konsistensi 4 event/bulan, modal bisa kembali dalam waktu 4–5 bulan.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'skenario-konservatif',
        content: 'Skenario Konservatif (2 event/bulan)',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'konservatif-body',
        content: '2 event × Rp 2,1 juta = Rp 4,2 juta/bulan. Balik modal: Rp 35 juta ÷ Rp 4,2 juta = sekitar 8–9 bulan. Ini skenario yang lebih realistis untuk pemula yang masih membangun network.',
        style: 'normal'
      },
      {
        type: 'callout',
        id: 'realita',
        content: 'Realita: Bulan pertama biasanya 1–2 event (membangun portofolio). Bulan 3–6 mulai stabil di 3–4 event/bulan. Setelah network kuat, bisa 6–8 event/bulan — terutama di musim ramai (September–Desember).',
        style: 'info'
      },
      {
        type: 'text',
        id: 'tips-percepat-heading',
        content: 'Tips Mempercepat Balik Modal',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'tips-list',
        items: [
          'Tawarkan paket add-on: keychain, GIF booth, atau video pendek untuk naikkan nilai per event',
          'Bangun relasi dengan WO/EO — mereka bisa kasih referral regular',
          'Foto dokumentasi event dan posting rutin di Instagram/TikTok untuk personal branding',
          'Pertimbangkan sewa equipment di event besar sebagai tambahan pendapatan',
          'Buka slot weekend di peak season (Oktober–Desember) dengan harga premium'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: 'Usaha photobooth bisa balik modal dalam 4–9 bulan dengan manajemen yang baik. Kuncinya: konsistensi mendapat event dan menjaga kualitas layanan agar klien repeat order dan memberi referral.',
        style: 'large'
      }
    ]
  },

  {
    id: 'software-photobooth-terbaik-2025',
    title: 'Software Photobooth Terbaik 2025: Review Jujur dari Praktisi',
    image: '/images/services/photobox-jakarta/photobox-jakarta-permanent-setup-photobox.png',
    excerpt: 'Bingung pilih software photobooth? Ini review jujur DSLR Remote Pro, Sparkbooth, Breeze Kiosk, dan Simple Booth — kelebihan, kekurangan, dan untuk siapa masing-masing cocok.',
    slug: 'software-photobooth-terbaik-2025',
    productTags: ['usaha photobooth', 'equipment', 'software'],
    publishedAt: '2026-03-24',
    draft: true,
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Software photobooth adalah otak dari semua operasi — dia yang mengontrol kamera, menerapkan template, mengelola antrian cetak, dan kadang mengirim foto langsung ke tamu. Pilihan yang salah bisa bikin event jadi kacau. Ini review dari pengalaman langsung di lapangan.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'kriteria-heading',
        content: 'Kriteria Memilih Software Photobooth',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'kriteria-list',
        items: [
          'Kompatibilitas kamera (Canon, Nikon, Sony, dll)',
          'Kemudahan desain template',
          'Kecepatan proses & cetak',
          'Fitur digital sharing (email, QR code, social media)',
          'Stabilitas — tidak crash di tengah event',
          'Harga lisensi & model subscription'
        ],
        style: 'bullet'
      },
      {
        type: 'comparison',
        id: 'software-comparison',
        items: [
          {
            title: 'DSLR Remote Pro (Windows)',
            description: 'Software populer di Indonesia, kompatibel luas dengan Canon & Nikon. Banyak digunakan vendor lokal.',
            pros: ['Kompatibilitas Canon luas', 'Komunitas besar di Indonesia', 'Harga lisensi terjangkau'],
            cons: ['UI agak ketinggalan zaman', 'Setup awal agak kompleks', 'Fitur digital sharing terbatas']
          },
          {
            title: 'Sparkbooth (Windows/Mac)',
            description: 'Software modern dengan UI yang bersih. Cocok untuk pemula yang ingin setup cepat.',
            pros: ['UI modern & mudah digunakan', 'Setup cepat', 'Tampilan template menarik'],
            cons: ['Kompatibilitas kamera lebih terbatas', 'Harga subscription lebih tinggi']
          },
          {
            title: 'Breeze Kiosk (Windows)',
            description: 'Pilihan profesional dengan fitur paling lengkap. Banyak digunakan untuk setup corporate premium.',
            pros: ['Fitur paling lengkap', 'Digital sharing canggih', 'Kustomisasi tinggi'],
            cons: ['Kurva belajar lebih curam', 'Harga paling mahal', 'Butuh spek laptop lebih tinggi']
          },
          {
            title: 'Simple Booth (iPad/iOS)',
            description: 'Pilihan jika pakai iPad sebagai controller. Setup paling ringkas secara hardware.',
            pros: ['Sangat ringkas — cukup iPad', 'Mudah dibawa ke mana saja', 'UI tamu sangat intuitif'],
            cons: ['Tergantung ekosistem Apple', 'Biaya subscription bulanan', 'Kualitas cetak bergantung printer yang kompatibel']
          }
        ]
      },
      {
        type: 'text',
        id: 'rekomendasi-heading',
        content: 'Rekomendasi',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'rekomendasi-list',
        items: [
          'Pemula dengan budget terbatas → DSLR Remote Pro',
          'Ingin setup modern & cepat → Sparkbooth',
          'Event korporat premium & butuh fitur lengkap → Breeze Kiosk',
          'Prioritas mobilitas & pakai Canon/iPad → Simple Booth'
        ],
        style: 'bullet'
      },
      {
        type: 'callout',
        id: 'tip-trial',
        content: 'Tips: Hampir semua software ini punya versi trial gratis 30 hari. Coba dulu sebelum beli lisensi — terutama cek kompatibilitas dengan kamera dan printer yang kamu punya.',
        style: 'tip'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: 'Tidak ada software yang perfect untuk semua orang. Yang paling penting: pilih yang kompatibel dengan kamera dan printer kamu, dan yang bisa kamu kuasai dengan percaya diri sebelum event pertama.',
        style: 'large'
      }
    ]
  },

  {
    id: 'kamera-photobooth-dslr-vs-mirrorless',
    title: 'Kamera untuk Photobooth: DSLR vs Mirrorless, Mana yang Lebih Cocok?',
    image: '/images/services/photobox-jakarta/photobox-jakarta-permanent-setup-photobox.png',
    excerpt: 'Pilih DSLR atau mirrorless untuk usaha photobooth? Ini perbandingan jujur dari sisi kualitas foto, daya tahan, kompatibilitas software, dan nilai investasi.',
    slug: 'kamera-photobooth-dslr-vs-mirrorless',
    productTags: ['usaha photobooth', 'equipment', 'kamera'],
    publishedAt: '2026-03-24',
    draft: true,
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Pertanyaan klasik di komunitas vendor photobooth: "Bagusan DSLR atau mirrorless?" Jawabannya tidak sesimpel satu lebih baik dari yang lain. Tergantung kebutuhan, budget, dan workflow kamu. Mari kita bahas secara jujur.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'dslr-heading',
        content: 'Kelebihan DSLR untuk Photobooth',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'dslr-pros',
        items: [
          'Kompatibilitas software lebih luas — DSLR Remote Pro & Breeze sudah support Canon/Nikon lama',
          'Baterai lebih tahan lama — penting untuk event 6–8 jam',
          'Harga second terjangkau — Canon 90D second bisa Rp 6–9 juta',
          'Ekosistem lensa murah & banyak pilihan',
          'Terbukti handal untuk photobooth selama bertahun-tahun'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'mirrorless-heading',
        content: 'Kelebihan Mirrorless untuk Photobooth',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'mirrorless-pros',
        items: [
          'Image quality lebih tinggi, terutama di ISO rendah dan medium',
          'Bobot lebih ringan — lebih nyaman dibawa ke event',
          'Autofokus lebih cepat dan akurat',
          'Video quality jauh lebih baik jika butuh video booth',
          'Pilihan kamera terbaru semuanya mirrorless — arah pasar ke sini'
        ],
        style: 'bullet'
      },
      {
        type: 'callout',
        id: 'catatan-software',
        content: 'Catatan penting: Pastikan kamera yang kamu pilih kompatibel dengan software photobooth yang akan digunakan. Beberapa mirrorless Sony terbaru butuh firmware tertentu untuk tethering. Selalu cek compatibility list software sebelum beli.',
        style: 'warning'
      },
      {
        type: 'text',
        id: 'rekomendasi-heading',
        content: 'Rekomendasi Berdasarkan Kebutuhan',
        style: 'medium'
      },
      {
        type: 'comparison',
        id: 'rekomendasi-comparison',
        items: [
          {
            title: 'Pilih DSLR jika...',
            description: 'Budget terbatas, baru mulai, prioritas kompatibilitas software, dan event biasanya indoor dengan lighting memadai.',
            pros: ['Canon EOS 90D: all-rounder terbaik', 'Nikon D7500: warna natural', 'Canon 6D Mark II: full-frame terjangkau']
          },
          {
            title: 'Pilih Mirrorless jika...',
            description: 'Budget lebih fleksibel, butuh kualitas premium, atau menjalankan video booth juga.',
            pros: ['Fujifilm X-T4: warna film khas Fuji', 'Sony A7III: low-light terbaik', 'Canon R6: AF terbaik di kelasnya']
          }
        ]
      },
      {
        type: 'text',
        id: 'lensa-heading',
        content: 'Soal Lensa',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'lensa-body',
        content: 'Untuk photobooth, lensa terbaik adalah prime 35mm atau 50mm (full-frame) / 23mm atau 35mm (crop sensor). Aperture f/1.8 sudah lebih dari cukup. Hindari zoom lensa jika mau menghemat budget — prime lensa lebih tajam dengan harga lebih murah.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: 'Untuk pemula: DSLR adalah pilihan paling pragmatis — terjangkau, handal, dan kompatibilitas software terluas. Untuk yang sudah established dan ingin upgrade: mirrorless memberikan kualitas lebih premium dan lebih siap ke depan.',
        style: 'large'
      }
    ]
  },

  {
    id: 'cara-bikin-template-photobooth-yang-disukai-klien',
    title: 'Cara Bikin Template Photobooth yang Disukai Klien',
    image: '/images/services/photobox-jakarta/photobox-jakarta-permanent-setup-photobox.png',
    excerpt: 'Template yang bagus bukan cuma soal desain keren — tapi yang cocok dengan tema event dan mau di-share tamu. Ini panduan desain template photobooth dari nol.',
    slug: 'cara-bikin-template-photobooth-yang-disukai-klien',
    productTags: ['usaha photobooth', 'tips bisnis', 'desain'],
    publishedAt: '2026-03-24',
    draft: true,
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Template photobooth adalah elemen yang paling pertama dilihat klien saat mempertimbangkan vendor. Template yang menarik bisa jadi alasan mereka booking — dan template yang jelek bisa jadi alasan mereka komplain.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'tools-heading',
        content: 'Tool yang Dipakai',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'tools-list',
        items: [
          'Adobe Photoshop — standar industri, paling fleksibel',
          'Canva Pro — untuk yang tidak familiar dengan Photoshop, cocok untuk template sederhana',
          'Adobe Illustrator — untuk elemen vector yang scalable',
          'Figma — alternatif modern, cocok jika sering kolaborasi dengan desainer'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'ukuran-heading',
        content: 'Ukuran Template yang Benar',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'ukuran-list',
        items: [
          'Print 4R (10x15cm): 1200x1800px @ 300dpi — paling umum untuk photobooth standar',
          'Print 2R strip (5x15cm): 600x1800px @ 300dpi — cocok untuk 3-4 frame horizontal',
          'Keychain (4x6cm): 472x708px @ 300dpi — untuk keychain photobooth',
          'Digital only (landscape 16:9): 1920x1080px — untuk GIF atau video sharing'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'prinsip-desain-heading',
        content: 'Prinsip Desain Template yang Efektif',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'prinsip-list',
        items: [
          'Zona foto harus jelas dan proporsional — tamu harus terlihat, bukan terpotong frame berlebihan',
          'Teks event/nama klien di area yang tidak menutupi wajah',
          'Warna konsisten dengan tema event — minta brief dari klien atau EO',
          'Logo sponsor di sudut yang tidak mengganggu estetika',
          'Hindari terlalu banyak elemen dekoratif — simple selalu lebih baik'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'tipe-template-heading',
        content: 'Tipe Template Berdasarkan Event',
        style: 'medium'
      },
      {
        type: 'comparison',
        id: 'tipe-template',
        items: [
          {
            title: 'Wedding',
            description: 'Elegan, minimalis, warna soft (gold, ivory, blush pink). Tonjolkan nama pasangan dan tanggal pernikahan.',
            pros: ['Font serif atau script untuk kesan mewah', 'Border tipis atau watercolor floral', 'Warna netral agar foto jadi focal point']
          },
          {
            title: 'Corporate Event',
            description: 'Clean, profesional, warna sesuai brand guideline klien. Logo perusahaan wajib ada.',
            pros: ['Font sans-serif yang clean', 'Layout simetris', 'Warna sesuai brand corporate']
          },
          {
            title: 'Birthday Party',
            description: 'Fun, colorful, bisa lebih playful. Cocok untuk balloons, confetti, atau ilustrasi karakter.',
            pros: ['Warna cerah dan kontras', 'Font playful', 'Elemen dekoratif lebih bebas']
          }
        ]
      },
      {
        type: 'callout',
        id: 'tip-viral',
        content: 'Tips agar tamu mau share: buat template yang Instagram-worthy. Artinya: komposisi menarik bahkan jika dipotret dengan kamera HP dari layar. Seringkali tamu foto di depan print-out fisik lalu upload ke story — pastikan template-nya tetap keren.',
        style: 'tip'
      },
      {
        type: 'text',
        id: 'workflow-heading',
        content: 'Workflow Revisi dengan Klien',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'workflow-list',
        items: [
          'Minta brief awal: tema warna, logo, teks yang mau ditampilkan',
          'Buat 2–3 variasi konsep awal',
          'Kirim mockup preview ke klien (screenshot dengan foto placeholder)',
          'Maksimal 2 round revisi — cantumkan ini di kontrak/quotation',
          'Final approval H-3 event untuk ada waktu print test'
        ],
        style: 'numbered'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: 'Template yang bagus adalah yang membuat klien senang, tamu mau foto berulang, dan foto-nya layak di-share. Bangun library template per kategori event — ini aset bisnis yang nilainya terus bertambah.',
        style: 'large'
      }
    ]
  },

  {
    id: 'tips-lighting-photobooth-indoor-outdoor',
    title: 'Tips Setup Lighting Photobooth di Indoor & Outdoor',
    image: '/images/services/photobox-jakarta/photobox-jakarta-permanent-setup-photobox.png',
    excerpt: 'Lighting yang salah adalah penyebab utama foto photobooth terlihat buruk. Ini panduan setup lighting untuk berbagai kondisi event — dari ballroom hingga outdoor daytime.',
    slug: 'tips-lighting-photobooth-indoor-outdoor',
    productTags: ['usaha photobooth', 'equipment', 'tips teknis'],
    publishedAt: '2026-03-24',
    draft: true,
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Foto yang tajam dari kamera mahal bisa tetap terlihat jelek kalau lighting-nya salah. Sebaliknya, kamera mid-range dengan lighting yang tepat bisa menghasilkan foto yang konsisten dan memuaskan. Ini yang membedakan vendor pemula dan vendor berpengalaman.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'dasar-heading',
        content: 'Dasar Lighting Photobooth',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'dasar-body',
        content: 'Setup lighting photobooth yang paling efisien mengikuti prinsip three-point lighting: Key Light (utama dari depan-samping), Fill Light (mengisi bayangan dari sisi berlawanan), dan backlight (opsional, memisahkan subjek dari backdrop). Untuk photobooth, key dan fill sudah cukup dalam kebanyakan kondisi.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'indoor-heading',
        content: 'Indoor Setup',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'indoor-list',
        items: [
          'Gunakan continuous light (LED panel atau softbox) untuk kontrol lebih mudah',
          'Posisi key light di sudut 45° dari subjek, setinggi mata atau sedikit di atasnya',
          'Fill light di sisi berlawanan dengan intensitas 50–70% dari key light',
          'Hindari ambient light dari venue yang terlalu dominan — bisa ganggu white balance',
          'Setting kamera: ISO 100–400, Aperture f/5.6–f/8, Shutter Speed 1/100–1/200'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'ballroom-heading',
        content: 'Tantangan Ballroom & Venue Gelap',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'ballroom-body',
        content: 'Ballroom sering punya ambient light oranye atau biru dari dekorasi. Ini bisa membuat white balance kacau. Solusi: naikkan intensitas lighting photobooth hingga dominant, set white balance manual di kamera sesuai suhu warna light yang kamu pakai (biasanya 5000–5600K untuk LED daylight).',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'outdoor-heading',
        content: 'Outdoor Setup',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'outdoor-list',
        items: [
          'Siang hari: cari shade (area teduh) atau setup tent — hindari direct sunlight langsung ke subjek',
          'Gunakan strobe flash dengan guide number tinggi untuk fill-in di kondisi terang',
          'Sore menjelang golden hour: manfaatkan cahaya alami sebagai key light, tambahkan reflector',
          'Malam outdoor: perlu lighting yang lebih powerful — LED panel 100W+ atau strobe',
          'Selalu bawa ND filter jika shooting di kondisi sangat terang'
        ],
        style: 'bullet'
      },
      {
        type: 'callout',
        id: 'tip-konsisten',
        content: 'Tips konsistensi: Setelah menemukan setting yang bagus di sebuah venue, catat semua parameter (aperture, ISO, jarak lighting, power setting). Ini akan sangat membantu ketika event berikutnya di venue yang sama.',
        style: 'tip'
      },
      {
        type: 'text',
        id: 'equipment-rec-heading',
        content: 'Rekomendasi Equipment Lighting per Budget',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'equipment-rec-list',
        items: [
          'Budget entry (Rp 500 ribu–1,5 juta): Ring light 24 inch LED + reflector putih',
          'Budget menengah (Rp 2–5 juta): 2x softbox LED 60x90cm dengan stand',
          'Budget profesional (Rp 8–20 juta): 2x Godox strobe AD200 Pro + modifier softbox'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: 'Lighting yang konsisten adalah tanda profesionalisme. Tamu mungkin tidak bisa menjelaskan kenapa foto mereka bagus — tapi mereka akan merasakan perbedaannya. Investasi di lighting selalu terbayar.',
        style: 'large'
      }
    ]
  },

  {
    id: 'cara-dapat-klien-pertama-usaha-photobooth',
    title: 'Cara Dapat Klien Pertama untuk Usaha Photobooth',
    image: '/images/services/photobox-jakarta/photobox-jakarta-permanent-setup-photobox.png',
    excerpt: 'Susah dapat event pertama saat belum punya portofolio? Ini strategi yang terbukti untuk membangun book pertama usaha photobooth dari nol — tanpa harus jual murah.',
    slug: 'cara-dapat-klien-pertama-usaha-photobooth',
    productTags: ['usaha photobooth', 'tips bisnis', 'marketing'],
    publishedAt: '2026-03-24',
    draft: true,
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Chicken-and-egg problem usaha photobooth: klien minta portofolio, tapi portofolio tidak bisa dibuat tanpa klien. Ini masalah klasik yang bisa dipecahkan — tanpa harus kerja gratis atau jual murah.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'langkah1-heading',
        content: '1. Mulai dari Lingkaran Terdekat',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'langkah1-body',
        content: 'Event keluarga, arisan, reuni sekolah, acara komunitas, nikahan teman — ini target pertama yang paling realistis. Tawarkan dengan harga teman (bukan gratis), pastikan kualitas kerja tetap profesional. Foto dari event ini jadi portofolio pertama yang legitimate.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'langkah2-heading',
        content: '2. Bangun Instagram yang Meyakinkan Dulu',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'langkah2-body',
        content: 'Sebelum ada event nyata, buat mock shoot di rumah atau studio sewaan. Invite teman, pakai lighting, setup booth — foto hasilnya. Ini cukup untuk mengisi feed awal. Yang penting: kualitas foto konsisten dan grid Instagram terlihat profesional.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'langkah3-heading',
        content: '3. Daftarkan ke Marketplace & Platform EO',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'marketplace-list',
        items: [
          'Tokopedia & Shopee — buka toko jasa sewa photobooth, listing dengan foto menarik',
          'Bridestory & Wedseen — untuk target segmen wedding',
          'GoWork / Sewa Vendor — platform agregator vendor event',
          'Google Bisnisku — wajib aktifkan, bantu ditemukan via Google Maps'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'langkah4-heading',
        content: '4. Hubungi WO/EO Lokal Secara Langsung',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'langkah4-body',
        content: 'Cari WO/EO di kotamu via Instagram. DM mereka dengan pesan singkat, profesional, dan langsung ke poin: siapa kamu, jasa apa yang ditawarkan, dan ajukan kolaborasi referral. Satu hubungan WO yang baik bisa kasih 2–5 klien per bulan secara konsisten.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'langkah5-heading',
        content: '5. Ikut Pameran Wedding & Event',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'langkah5-body',
        content: 'Pameran wedding adalah goldmine untuk vendor baru. Beberapa bisa kamu masuki gratis sebagai supporting vendor (ikut stand WO yang butuh photobooth). Kamu dapat exposure, WO dapat nilai tambah — win-win.',
        style: 'normal'
      },
      {
        type: 'callout',
        id: 'tip-jangan-gratis',
        content: 'Jangan kerja gratis — tapi tawarkan "harga perkenalan" yang masih menguntungkan. Perbedaannya: kerja gratis membuat kamu tidak dianggap serius, sementara diskon wajar tetap menempatkan kamu sebagai vendor profesional.',
        style: 'warning'
      },
      {
        type: 'text',
        id: 'kesalahan-heading',
        content: 'Kesalahan yang Sering Dilakukan Pemula',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'kesalahan-list',
        items: [
          'Menunggu portofolio sempurna sebelum mulai marketing — mulai dari sekarang dengan yang ada',
          'Harga terlalu murah di awal hingga sulit dinaikkan nanti',
          'Tidak follow up setelah event — minta testimoni dan izin posting foto',
          'Feed Instagram tidak konsisten atau tidak update berminggu-minggu'
        ],
        style: 'bullet'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: 'Event pertama selalu yang paling sulit. Tapi setelah itu, momentum akan terbangun sendiri — asal kualitas terjaga dan kamu aktif membangun relasi. Satu klien yang puas bisa menghasilkan 3–5 referral baru.',
        style: 'large'
      }
    ]
  },

  {
    id: 'checklist-photobooth-untuk-wedding',
    title: 'Checklist Photobooth untuk Wedding: Panduan Vendor & Pengantin',
    image: '/images/services/photobox-jakarta/photobox-jakarta-permanent-setup-photobox.png',
    excerpt: 'Checklist lengkap untuk vendor photobooth yang handle wedding — dari briefing klien, setup hari H, hingga handling darurat. Plus panduan untuk pengantin yang mau sewa photobooth.',
    slug: 'checklist-photobooth-untuk-wedding',
    productTags: ['usaha photobooth', 'wedding', 'tips bisnis'],
    publishedAt: '2026-03-24',
    draft: true,
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Wedding adalah event dengan stakes tertinggi untuk vendor photobooth. Tidak bisa diulang, tamu banyak, dan ekspektasi tinggi. Checklist ini disusun dari pengalaman ratusan event wedding agar tidak ada yang terlewat.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'prebriefing-heading',
        content: 'H-14: Briefing dengan Klien',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'prebriefing-list',
        items: [
          'Konfirmasi tema & warna resepsi (minta mood board jika ada)',
          'Dapatkan logo/teks yang mau ditampilkan di template',
          'Tanyakan lokasi spesifik booth di venue (koordinasi dengan WO)',
          'Estimasi jumlah tamu — untuk kalkulasi kertas & tinta',
          'Konfirmasi durasi booth (biasanya 4–6 jam untuk wedding)',
          'Tanyakan ketersediaan listrik dan jarak dari area booth'
        ],
        style: 'checklist'
      },
      {
        type: 'text',
        id: 'h3-heading',
        content: 'H-3: Persiapan Template & Materi',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'h3-list',
        items: [
          'Final approval template dari klien (sudah tidak ada revisi)',
          'Print test template di printer yang akan dipakai',
          'Cek stok kertas & ribbon printer — siapkan lebih 20% dari estimasi',
          'Backup template tersimpan di 2 lokasi (laptop + flash drive)',
          'Charge semua baterai kamera dan flash'
        ],
        style: 'checklist'
      },
      {
        type: 'text',
        id: 'hariH-heading',
        content: 'Hari H: Setup',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'hariH-list',
        items: [
          'Tiba di venue minimal 2 jam sebelum tamu datang',
          'Setup booth: kamera, lighting, printer, laptop, backdrop',
          'Test shot: ambil foto, print, cek hasil warna dan ketajaman',
          'Kalibrasi white balance sesuai kondisi cahaya venue',
          'Koordinasi dengan WO soal jadwal pelaminan & placement',
          'Pastikan kabel power rapi dan tidak jadi hazard',
          'Siapkan props yang sudah disepakati'
        ],
        style: 'checklist'
      },
      {
        type: 'text',
        id: 'selama-event-heading',
        content: 'Selama Event',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'selama-list',
        items: [
          'Monitor antrian — jangan biarkan antrian terlalu panjang',
          'Cek secara berkala kondisi printer (ribbon, kertas)',
          'Arahkan tamu dengan ramah & efisien',
          'Ambil backup foto (RAW jika perlu) untuk antisipasi',
          'Catat jika ada permintaan khusus tamu'
        ],
        style: 'checklist'
      },
      {
        type: 'callout',
        id: 'emergency-kit',
        content: 'Emergency kit yang wajib dibawa: kabel power spare, baterai kamera cadangan (minimal 3), ribbon printer spare, tisu microfiber untuk lensa, dan kontak WO yang bisa dihubungi langsung.',
        style: 'warning'
      },
      {
        type: 'text',
        id: 'pasca-heading',
        content: 'Pasca Event',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'pasca-list',
        items: [
          'Kemas equipment dengan teliti — cek jangan ada yang tertinggal',
          'Kirim galeri digital ke klien dalam 24–48 jam (jika termasuk paket)',
          'Minta testimoni dari klien/mempelai',
          'Post highlight foto ke Instagram (minta izin dulu)',
          'Follow up WO untuk potensi referral ke depan'
        ],
        style: 'checklist'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: 'Vendor photobooth yang handal di wedding akan selalu dapat referral. Tamu wedding adalah calon klien masa depan — impresi yang kamu tinggalkan jauh lebih berharga dari payment hari itu.',
        style: 'large'
      }
    ]
  },

  {
    id: 'printer-photobooth-terbaik-dnp-hiti-mitsubishi',
    title: 'Printer Photobooth Terbaik: DNP vs HiTi vs Mitsubishi — Mana yang Worth It?',
    image: '/images/services/photobox-jakarta/photobox-jakarta-permanent-setup-photobox.png',
    excerpt: 'Printer dye-sublimation adalah investasi terbesar di usaha photobooth. Ini perbandingan DNP DS-RX1HS, HiTi P525L, dan Mitsubishi CP-D90DW dari sisi kualitas, kecepatan, dan total cost of ownership.',
    slug: 'printer-photobooth-terbaik-dnp-hiti-mitsubishi',
    productTags: ['usaha photobooth', 'equipment', 'printer'],
    publishedAt: '2026-03-24',
    draft: true,
    author: {
      name: 'Seno Sabdastandyo',
      image: '/images/blog-profile-seno-jakarta.webp'
    },
    content: [
      {
        type: 'text',
        id: 'intro',
        content: 'Printer dye-sublimation adalah satu-satunya pilihan untuk photobooth profesional — hasil cetaknya tajam, tahan air, dan tidak pudar. Tapi harganya bukan main. Sebelum beli, pastikan kamu pilih yang tepat karena ini investasi jangka panjang.',
        style: 'large'
      },
      {
        type: 'text',
        id: 'kenapa-dye-sub',
        content: 'Kenapa Harus Dye-Sublimation?',
        style: 'medium'
      },
      {
        type: 'list',
        id: 'kenapa-list',
        items: [
          'Kecepatan cetak 8–12 detik per lembar — cocok untuk event dengan banyak tamu',
          'Kualitas warna photographic grade — tidak ada dot atau grain seperti inkjet',
          'Tahan air & goresan — foto tidak rusak saat ditangani tamu',
          'Tidak perlu waktu kering — foto langsung bisa dipegang begitu keluar',
          'Biaya per lembar lebih predictable (ribbon + kertas per set)'
        ],
        style: 'bullet'
      },
      {
        type: 'comparison',
        id: 'printer-comparison',
        items: [
          {
            title: 'HiTi P525L',
            description: 'Pilihan paling populer di Indonesia. Balance sempurna antara harga, kualitas, dan ketersediaan suku cadang lokal.',
            pros: ['Harga terjangkau: Rp 12–17 juta', 'Service & ribbon mudah ditemukan di Indonesia', 'Kecepatan baik: ~10 detik per 4R', 'Support 2R, 4R, dan strip'],
            cons: ['Tidak sekencang DNP', 'Ukuran agak lebih besar']
          },
          {
            title: 'DNP DS-RX1HS',
            description: 'Pilihan untuk event volume tinggi. Kecepatan tertinggi di kelasnya, cocok untuk event 500+ tamu.',
            pros: ['Kecepatan cetak tertinggi: ~8 detik per 4R', 'Build quality premium', 'Ribbon per lembar paling efisien'],
            cons: ['Harga lebih tinggi: Rp 20–28 juta', 'Service center lebih terbatas di kota kecil', 'Ribbon agak lebih mahal']
          },
          {
            title: 'Mitsubishi CP-D90DW',
            description: 'Dikenal dengan kualitas warna terbaik. Pilihan vendor yang mengutamakan output print premium.',
            pros: ['Kualitas warna paling akurat', 'Bisa cetak borderless & border', 'Dual tray — bisa 2 ukuran sekaligus'],
            cons: ['Harga premium: Rp 22–30 juta', 'Ribbon termasuk yang paling mahal', 'Lebih berat dari kompetitor']
          }
        ]
      },
      {
        type: 'text',
        id: 'biaya-per-lembar-heading',
        content: 'Biaya Per Lembar (Total Cost of Ownership)',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'biaya-per-lembar-body',
        content: 'Harga beli printer bukan satu-satunya yang perlu dihitung. Biaya ribbon + kertas per lembar sangat menentukan profitabilitas jangka panjang: HiTi sekitar Rp 3.500–4.500/lembar, DNP sekitar Rp 4.000–5.000/lembar, Mitsubishi sekitar Rp 4.500–6.000/lembar. Dengan 200 cetak per event × 48 event/tahun = 9.600 lembar/tahun — selisih Rp 1.000/lembar berarti Rp 9,6 juta per tahun.',
        style: 'normal'
      },
      {
        type: 'callout',
        id: 'rekomendasi-final',
        content: 'Rekomendasi: Untuk pemula → HiTi P525L (support lokal baik, harga terjangkau). Untuk skala menengah ke atas dengan event frekuensi tinggi → DNP DS-RX1HS. Untuk yang prioritaskan kualitas cetak premium → Mitsubishi CP-D90DW.',
        style: 'tip'
      },
      {
        type: 'text',
        id: 'beli-baru-vs-second',
        content: 'Baru vs Second?',
        style: 'medium'
      },
      {
        type: 'text',
        id: 'second-body',
        content: 'Printer dye-sub second bisa jadi pilihan untuk menekan modal awal, tapi hati-hati dengan kondisi ribbon path dan print head. Minta seller untuk demo print langsung sebelum transaksi. Tanyakan berapa lembar sudah dicetak — life span print head biasanya 500.000–1.000.000 lembar.',
        style: 'normal'
      },
      {
        type: 'text',
        id: 'conclusion',
        content: 'Printer adalah investasi yang menentukan kualitas output bisnis kamu. Pilih berdasarkan volume event yang kamu targetkan dan pertimbangkan total cost of ownership, bukan hanya harga beli awal.',
        style: 'large'
      }
    ]
  },

];

export function getBlogById(id: string): Blog | undefined {
  return blogs.find(blog => blog.id === id);
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find(blog => blog.slug === slug);
}

export function getRelatedBlogs(id: string, limit: number = 3): Blog[] {
  const currentBlog = blogs.find(blog => blog.id === id);
  if (!currentBlog) return [];

  return blogs
    .filter(blog => 
      blog.id !== id && 
      blog.productTags.some(tag => currentBlog.productTags.includes(tag))
    )
    .slice(0, limit);
}

export function getAllBlogs(): Blog[] {
  return blogs.filter(blog => !blog.draft);
}

export function searchBlogs(query: string, tags: string[] = []): Blog[] {
  return blogs.filter(blog => {
    const matchesQuery = query === '' || 
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(query.toLowerCase());

    const matchesTags = tags.length === 0 ||
      tags.some(tag => blog.productTags.includes(tag));

    return matchesQuery && matchesTags;
  });
} 