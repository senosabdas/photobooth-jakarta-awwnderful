"use client";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState, useRef, useCallback, useEffect } from 'react'
import { getBlogById, getAllBlogs } from '@/app/blogs'
import { redirect } from 'next/navigation'

// Add these interfaces at the top of the file after imports
interface Model {
  title: string
  image: string
  description: string
  details: string
  features?: string[]
  specs: string[]
  bestFor?: string[]
  gallery?: string[]
  links?: { title: string; url: string }[]

}

interface Service {
  title: string
  description: string
  fullDescription: string
  image: string
  features: string[]
  gallery?: string[]
  models?: Model[]
  backdrops?: { title: string; image: string; description: string }[]
  slug: string
  outputSamples?: { title: string; image: string; type: string }[]
}

// This would typically come from an API or CMS
const services: Record<string, Service> = {
  'photobooth-gif': {
    title: 'Photobooth GIF',
    description: 'Photobooth GIF is a photo booth service that allows you to create a GIF of your photos.',
    fullDescription: `
      Supercharge your event with our range of photo booth selections that suit your needs. Our Photobooth GIF service combines the fun of traditional photo booths and animated GIFs & Boomerangs and the ability to scan QR code to access your photo on the cloud. 
      
      Perfect for capturing moments in motion, this service adds an extra layer of excitement to your event.

    `,
    image: '/images/services/photobooth-gif/setup-dslrbooth-gallery-1.jpg',
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
   
    backdrops: [
      {
        title: 'Caramel Sequin Large',
        image: '/images/services/backdrop/caramel-large-sequin.jpg',
        description: '1.8m x 1.8m fixed size backdrop'
      },
      {
        title: 'Peacock Sequin Large',
        image: '/images/services/backdrop/peacock-large-sequin.jpg',
        description: '1.8m x 1.8m fixed size backdrop'
      },
      {
        title: 'Pink Sequin Large',
        image: '/images/services/backdrop/pink-large-sequin.jpg',
        description: '1.8m x 1.8m fixed size backdrop'
      },
      {
        title: 'Black Sequin Large',
        image: '/images/services/backdrop/black-large-sequin.jpg',
        description: '1.8m x 1.8m fixed size backdrop'
      },
      {
        title: 'Shiny Silver Sequin Large',
        image: '/images/services/backdrop/silver-large-sequin.jpg',
        description: '1.8m x 1.8m fixed size backdrop'
      },
      {
        title: 'Pink Solid Large',
        image: '/images/services/backdrop/solid-pink-large.jpg',
        description: '1.8m x 1.8m fixed size backdrop'
      },
      {
        title: 'White Solid Large',
        image: '/images/services/backdrop/white-solid-large.jpg',
        description: '1.8m x 1.8m fixed size backdrop'
      },
      {
        title: 'Green Solid Large',
        image: '/images/services/backdrop/green-solid-large.jpg',
        description: '1.8m x 1.8m fixed size backdrop'
      },
      {
        title: 'Yellow Solid Large',
        image: '/images/services/backdrop/yellow-solid-large.jpg',
        description: '1.8m x 1.8m fixed size backdrop'
      },
      {
        title: 'Black & Gold Sequin Small',
        image: '/images/services/backdrop/black-gold-small-sequin.jpg',
        description: 'up to 1.5m x 1.5m Adjustable backdrop '
      },
      {
        title: 'White Sequin Small',
        image: '/images/services/backdrop/white-small-sequin.jpg',
        description: 'up to 1.5m x 1.5m Adjustable backdrop '
      },
      {
        title: 'Black Solid Small',
        image: '/images/services/backdrop/black-solid-small.jpg',
        description: 'up to 1.5m x 1.5m Adjustable backdrop '
      },
      {
        title: 'Greenscreen Backdrop',
        image: '/images/services/backdrop/greenscreen-backdrop.jpg',
        description: 'Greenscreen effect with choice of your own design'
      },
      {
        title: 'Custom Hard Panel',
        image: '/images/services/backdrop/custom-hard-panelling.jpg',
        description: 'Strong panel with carpet and lighting'
      },
      {
        title: 'Custom 3D  Pop up backdrop',
        image: '/images/services/backdrop/custom-3d-pop-up.jpeg',
        description: 'Custom Pop up Backdrop with your choice of design'
      },
      {
        title: 'Custom Decoration',
        image: '/images/services/wedding-decoration/engagement-decoration-1.jpg',
        description: 'Custom Backdrop with Flower of your choice'
      }
    ],
    gallery: [
      '/images/services/photobooth-gif/setup-obooth-gallery-1.jpg',
      '/images/services/photobooth-gif/setup-obooth-gallery-2.jpg',
      '/images/services/photobooth-gif/setup-obooth-gallery-3.jpg',
      '/images/services/photobooth-gif/dslr print out 1.jpg',

      '/images/services/photobooth-gif/dslr print out 3.jpg',
      '/images/services/photobooth-gif/dslr print out 4.jpg',

      '/images/services/photobooth-gif/setup-obooth-gallery-4.jpg',
      '/images/services/photobooth-gif/setup-obooth-gallery-5.jpg',
      '/images/services/photobooth-gif/setup-obooth-gallery-6.jpg',
      '/images/services/photobooth-gif/setup-dslrbooth-gallery-1.jpg',
      '/images/services/photobooth-gif/setup-dslrbooth-gallery-2.jpg',
      '/images/services/photobooth-gif/setup-dslrbooth-gallery-3.jpg',
      '/images/services/photobooth-gif/setup-dslrbooth-gallery-4.jpg',
      '/images/services/photobooth-gif/setup-dslrbooth-gallery-5.jpg',
      '/images/services/photobooth-gif/setup-dslrbooth-gallery-6.jpg',
      '/images/services/photobooth-gif/setup-dslrbooth-gallery-7.jpg',
      '/images/services/photobooth-gif/setup-dslrbooth-gallery-8.jpg',
      '/images/services/photobooth-gif/setup-dslrbooth-gallery-9.jpg',
      '/images/services/photobooth-gif/setup-dslrbooth-gallery-10.jpg',
      '/images/services/photobooth-gif/setup-classicbooth-gallery-1.jpg',
      '/images/services/photobooth-gif/setup-classicbooth-gallery-2.jpg',
      '/images/services/photobooth-gif/setup-classicbooth-gallery-3.jpeg'
     
    ],
    models: [
      {
        title: 'DSLR Booth',
        image: '/images/services/photobooth-gif/photobooth-dslrbooth-icon.png',
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
          'Need around 2 Power outlet nearby in radius 5m ',
        ],
        bestFor: [
          'Corporate Events',
          'Wedding',
          'Product Launches',
          'School Events',
          'Birthday Parties',
          'Family Gatherings'
        ],
      gallery: [
        '/images/services/photobooth-gif/setup-dslrbooth-gallery-5.jpg',
        '/images/services/photobooth-gif/setup-dslrbooth-gallery-8.jpg',
        '/images/services/photobooth-gif/photobooth-dslr-setup-4.jpg',
        
      ]
      },
      {
        title: 'Classic Booth',
        image: '/images/services/photobooth-gif/photobooth-classic-icon.png',
        description: 'Simple and budget-friendly photobooth setup',
        details: 'Our budget friendly photobooth for your event.',
        features: [
          'DSLR Camera',
          'Classic Strip Printing',
          'LED Lighting',
          'Social Media Sharing',
          'Internet connection'
        ],
        specs: [
          'Electric Consumption : 500 - 750 W',
          'Setup Area : Minimum 0.5 x 0.5m',
          'Need around 2 Power outlet nearby in radius 5m ',
 
        ],
        bestFor: [
          'Long duration event',
          'On tight budget',
          'Expo or Trade Show Event'
        ],
        gallery: [
          '/images/services/photobooth-gif/setup-classicbooth-gallery-1.jpg',
          '/images/services/photobooth-gif/setup-classicbooth-gallery-2.jpg',
          '/images/services/photobooth-gif/setup-classicbooth-gallery-3.jpeg',
          '/images/services/photobooth-gif/setup-classicbooth-gallery-4.jpg',

        ]
      },
      {
        title: 'O Booth',
        image: '/images/services/photobooth-gif/photobooth-obooth-icon.png',
        description: '-',
        details: 'Space saving setup with beauty ringlight perfect for potrait selfie machine',
        features: [
          'Ipad camera',
          'LED Ringlight',
          'Easy to operate',
          'Filters & Effects',
          'Photo, GIF & Boomerang Mode',
          'Internet connection'
        ],
        specs: [
          'Electric Consumption : 100W',
          'Setup Area : Minimum 0.5 x 0.5m',
          'Need around 2 Power outlet nearby in radius 5m ',
       
        ],
        bestFor: [
          'Wedding Party',
          'Birthday Party',
          'Club & Cafe',
          'Permanent installation',
          'Brand Activations'
        ],
        gallery: [
          '/images/services/photobooth-gif/setup-obooth-gallery-1.jpg',
          '/images/services/photobooth-gif/setup-obooth-gallery-2.jpg',
          '/images/services/photobooth-gif/setup-obooth-gallery-3.jpg',
          '/images/services/photobooth-gif/setup-obooth-gallery-4.jpg',
          '/images/services/photobooth-gif/setup-obooth-gallery-5.jpg',
          '/images/services/photobooth-gif/setup-obooth-gallery-6.jpg',

        ]
      },
     
    ],
    slug: 'photobooth-gif'
  },
  'roaming-photo-booth': {
    title: 'Roaming Photo Booth',
    description: 'Mobile photobooth experience that goes where the fun is!',
    fullDescription: `
      Our Roaming Photo Booth service brings the photo booth experience directly to your guests. Perfect for large events where you want to capture candid moments throughout the venue. Our professional photographers will roam your event with our mobile setup, ensuring no moment goes uncaptured.

      Technical Setup:
      • Recomended Setup area : -
      • Camera : DSLR Camera ( DSLR Roamer ) & Ipad camera ( Ring roamer )
      • Internet Connection
      • Photographer & Assitant
    `,
    image: '/images/services/roaming-photo-booth/Printout-result.jpg',
    features: [
      'High-quality camera',
      'Professional lighting',
      'Optional Backdrops',
      'Instant GIF creation',
      'Social media sharing',
      'QR Code sharing',
      'Unlimited prints or Quota Prints',
      'Online Gallery',
      'Mobile setup',
      'Venue-wide coverage'
    ],
    gallery: [
      '/images/services/roaming-photo-booth/Roaming-multicamera-1.jpg',
      '/images/services/roaming-photo-booth/Roaming-multicamera-2.jpg',
      '/images/services/roaming-photo-booth/Roaming-multicamera-3.jpg',
      '/images/services/roaming-photo-booth/Roaming-multicamera-4.jpg',
      '/images/services/roaming-photo-booth/Ring roamer-1.jpg',
      '/images/services/roaming-photo-booth/Ring roamer-2.jpg',
      '/images/services/roaming-photo-booth/Ring roamer-3.jpg',
      '/images/services/roaming-photo-booth/Ring roamer-4.jpg',
      '/images/services/roaming-photo-booth/dslr roamer-1.jpg',
      '/images/services/roaming-photo-booth/dslr roamer-2.jpg',
      '/images/services/roaming-photo-booth/dslr roamer-3.jpg',
      '/images/services/roaming-photo-booth/Photo Roamer + Sharing kiosk + Printer 1.jpg',
      '/images/services/roaming-photo-booth/Photo Roamer + Sharing kiosk + Printer 2.jpg'
    ],
    models: [
      {
        title: 'DSLR Roamer',
        image: '/images/services/roaming-photo-booth/dslroamer.jpg',
        description: 'Professional-grade roaming photography with DSLR quality',
        details: 'Our DSLR Roamer combines professional-grade equipment with mobile flexibility, delivering stunning high-quality photos throughout your event.',
        features: [
          'Professional DSLR Camera',
          'High-Quality Lenses',
          'Portable Flash',
          'Instant Photo Preview',
          'QR & Share to email',
          'Custom Branding Options'
        ],
        specs: [
          'Canon EOS',
          '24-70mm Lens',
          'Portable LED Lighting',
          'Internet connection',
          'Profesional Staff & Assistant'
        ],
        bestFor: [
          'Corporate Events',
          'Wedding Receptions',
          'Brand Activation',
          'Concert'
        ]
      },
 
      {
        title: 'MultiCamera Roamer',
        image: '/images/services/roaming-photo-booth/multiroam.jpg',
        description: 'Multiple camera angles for comprehensive event coverage',
        details: 'Our MultiCamera Roamer setup ensures no moment goes uncaptured with multiple synchronized cameras covering different angles.',
        features: [
          'Professional DSLR Camera',
          'High-Quality Lenses',
          'Portable LED lighting',
          'Instant Photo Preview',
          'QR & Share to email',
          'Custom Branding Options'
        ],
        specs: [
          '5 Camera DSLR',
          'Portable LED Lighting',
          'Internet connection',
          'Profesional Staff & Assistant'
        ],
        bestFor: [
          'Corporate Events',
          'Wedding Receptions',
          'Brand Activation',
          'Concert'
        ]
      } ,
      {
        title: 'Ring Roamer',
        image: '/images/services/roaming-photo-booth/ringroamer.jpg',
        description: 'Innovative ring light setup for perfect lighting anywhere',
        details: 'The Ring Roamer features our signature ring light setup, ensuring perfect lighting and stunning photos regardless of venue conditions.',
        features: [
          'Ipad Camera',
          'LED Ringlight',
          'Portable Flash',
          'Instant Photo Preview',
          'QR & Share to email',
          'Custom Branding Options'
        ],
        specs: [
          'Ipad PRO',
          'Portable LED Ringlight',
          'Internet connection',
          'Profesional Staff & Assistant'
        ],
        bestFor: [
          'Corporate Events',
          'Wedding Receptions',
          'Brand Activation',
          'Concert'
        ]
      }
    ],
    slug: 'roaming-photo-booth'
  },
  '360-video-booth': {
    title: '360 Video Booth',
    description: '-',
    fullDescription: `
      Experience the the fun with our 360 Video Booth. This innovative setup captures guests videos from every angle, creating epic & unique  moments that your guests will love to share. Perfect for making your event truly unforgettable.

      Technical Setup:
      • Ultra Wide Camera
      • Lighting : LED Ringlight
      • Internet connection
      • Setup area : Minimum 2x2 m
      • Capacity : Up to 4 people


    `,
    image: '/images/services/360-video-booth/360-video-booth-1.jpg',
    features: [
      '360-degree Spin',
      'Slow-motion & Many effects',
      'Background Music',
      'Custom lighting setup',
      'Social media integration',
      'Instant social sharing',
      'Professional operators',
      'Online Gallery'
      
      
    ],
    gallery: [
      '/images/services/360-video-booth/360-video-booth-1.jpg',
      '/images/services/360-video-booth/360-video-booth-2.jpg',
      '/images/services/360-video-booth/360-video-booth-3.jpg',
      '/images/services/360-video-booth/360-video-booth-4.jpg',
      '/images/services/360-video-booth/360-video-booth-5.jpg',
      '/images/services/360-video-booth/360-video-booth-6.jpg',
      '/images/services/360-video-booth/360-video-booth-7.jpg',
      '/images/services/360-video-booth/360-video-booth-8.jpg'
    ],
    slug: '360-video-booth'
  },
  'hashtag-printer': {
    title: 'Hashtag Printer',
    description: 'Turn your event\'s social media presence into instant physical memories with our Hashtag Printer service.',
    fullDescription: `
       Guests can use your custom event hashtag on Instagram, and our system automatically prints their photos in high quality with your event branding. 
      
      Here's how it works. Your guests snap photos on their phones, upload them to Instagram using the event's hashtags, then head on over to our Hashtag Print station to pick up the real thing. 

      Technical Setup:
      • Equipment: Touchscreen monitor, Photo printer, PC / Laptop
      • Setup area : 50x50cm
      • Internet connection

    `,
    image: '/images/services/hashtag-printer-hero.jpg',
    features: [
      'Real-time printing',
      'Custom branding',
      'Social media integration',
      '4x6 Print Size',
      'Live moderation',
      'Event analytics'
    ],
    gallery: [
      '/images/services/hashtag-printer/gallery-1.jpg',
      '/images/services/hashtag-printer/gallery-2.jpg',
      '/images/services/hashtag-printer/gallery-3.jpg',
      '/images/services/hashtag-printer/gallery-4.jpg',
      '/images/services/hashtag-printer/gallery-5.jpg',
      '/images/services/hashtag-printer/gallery-6.jpg',
      '/images/services/hashtag-printer/gallery-7.jpg',
      '/images/services/hashtag-printer/gallery-8.jpg',
      '/images/services/hashtag-printer/gallery-9.jpg',
      '/images/services/hashtag-printer/gallery-10.jpg'
    ],
    slug: 'hashtag-printer'
  },
  'virtual-photo-booth': {
    title: 'Virtual Photo Booth',
    description: 'Digital photo booth experience for online events',
    fullDescription: `
      Our Virtual Photo Booth brings the photo booth experience to your online events. Perfect for virtual gatherings, hybrid events, or remote team celebrations. Guests can access the booth from any device, add filters and props, and share their photos instantly.

      The virtual booth of ours have 2 side. Guest cam & Web based photobooth. 

      Guestcam is more like we create easy experience for your guest and they just snap the photo and the photo will get the design
     
      Why virtual photobooth:
      • Contactless Photo Booths 
      (Perfect solution for socially distanced events. Guests use their own devices from anywhere in the world)
      •

      How it works:

      • Customize Your Design
      • Take a Photo
      • Download and share
    `,
    image: '/images/services/virtual-photo-booth/virtual-photo-booth-hero.mp4',
    features: [
      'Unlimited photos',
      'Web-based access',
      'Virtual props & filters',
      'Instant sharing',
      'Custom branding',
      'Usage analytics',
      'Multi-device support'
    ],
    gallery: [
      '/images/services/virtual-photo-booth/virtualbooth-setup-1.png',
      '/images/services/virtual-photo-booth/virtualbooth-setup-3.png',
      '/images/services/virtual-photo-booth/virtualbooth-setup-2.png'
    ],
    models: [
      {
        title: 'Guest Cam',
        image: '/images/services/virtual-photo-booth/guest-cam.jpeg',
        description: 'Collect and display guest photos in a single gallery',
        details: 'We convert the virtual photobooth into a Guest cam, Our Guest Cam service allows you to gather photos from all your guests into a single, organized gallery. Perfect for creating a shared memory collection of your event.',
        features: [
          'Centralized Photo Gallery',
          'Guest Photo Collection',
          'Real-time Updates',
          'Custom Branding',
          'Easy Sharing',
          'Download Options'
        ],
        specs: [
          'Cloud Storage',
          'Auto-Organization',
          'Guest Upload System',
          'Moderation Tools',
          'High Resolution Support',
          'Mobile Responsive'
        ],
        bestFor: [
          'Weddings',
          'Looking for candid moment',
          'Corporate Events',
          'Brand activation'
        ]
      },
      {
        title: 'Web-based Photobooth',
        image: '/images/services/virtual-photo-booth/web-based-photobooth.png',
        description: 'Interactive web-based photo booth experience',
        details: 'Our Web-based Photobooth provides a complete virtual photo booth experience accessible through any web browser, featuring filters, props, and instant sharing.',
        features: [
          'Browser-based Access',
          'Virtual Props & Filters',
          'Instant Photo Capture',
          'Social Media Sharing',
          'Custom Branding',
          'Real-time Effects'
        ],
        specs: [
          'HTML5 Technology',
          'Cloud Processing',
          'Multiple Device Support',
          'Custom Filter Library',
          'Instant Preview',
          'Cross-platform Compatible'
        ],
        bestFor: [
          'Hybrid Events',
          'Virtual Celebrations',
          'Team Building',
          'Online Parties',
          'Digital Events'
        ]
      }
    ],
    slug: 'virtual-photo-booth'
  },
  'video-booth': {
    title: 'Video Booth',
    description: 'Capture video messages and reactions',
    fullDescription: `
      Create lasting video memories with our Video Booth service. Perfect for capturing heartfelt messages at weddings, fun reactions at parties, or testimonials at corporate events. Our high-quality setup ensures crystal-clear video and audio quality.

      Technical Setup:
      • Recomended Setup area : 2 x 2m (DSLR & Classic Booth with backdrop) 0,5 x 0,5m ( O Booth)

• Camera : DSLR Camera ( DSLR Booth & Classic Booth ) & Ipad camera ( O Booth )

• Internet Connection

• On site staff
    `,
    image: '/images/services/video-booth/videobooth-setup-1.jpg',
    features: [
      'HD video recording',
      'Professional audio',
      'Custom effects',
      'Instant review',
      'Digital delivery',
      'Easy sharing'
    ],
    gallery: [
      '/images/services/video-booth/gallery-1.jpg',
      '/images/services/video-booth/gallery-2.jpg',
      '/images/services/video-booth/gallery-3.jpg',
      '/images/services/video-booth/videobooth-setup-1.jpg',
      '/images/services/video-booth/videobooth-setup-3.jpg',
      '/images/services/video-booth/videobooth-setup-4.jpg',
      '/images/services/video-booth/virtualrunway-1.jpg',
      '/images/services/video-booth/animatedobject-1.png'
     
      
    ],
    models: [
      {
        title: 'Glam Booth',
        image: '/images/services/video-booth/Gallery-2.jpg',
        description: 'Professional-grade video recording setup for high-quality messages',
        details: 'Our Pro Video Booth features broadcast-quality equipment for crystal-clear video and audio recording, perfect for professional events and testimonials.',
        features: [
          '4K Video Recording',
          'Professional Lighting Setup',
          'Studio-Quality Audio',
          'Custom Backdrop Options',
          'Instant Preview',
          'Social Media Integration'
        ],
        specs: [
          'Sony A7 III Camera System',
          'Professional LED Lighting Kit',
          'Rode Wireless Microphone',
          '27" Preview Monitor',
          'Custom Video Templates',
          'Instant Cloud Backup'
        ],
        bestFor: [
          'Corporate Events',
          'Wedding Testimonials',
          'Product Launches',
          'Brand Activations',
          'Professional Interviews'
        ]
      },
      {
        title: 'Virtual Runway',
        image: '/images/services/video-booth/virtualrunway-2.png',
        description: 'Interactive video booth with fun effects and filters',
        details: 'The Fun Video Booth combines high-quality recording with entertaining effects and filters, creating engaging and shareable video content.',
        features: [
          'Real-time Effects',
          'Fun Video Filters',
          'Voice Changers',
          'Green Screen Effects',
          'Boomerang Mode',
          'GIF Creation'
        ],
        specs: [
          'Digital Effects Processor',
          'Touch Screen Interface',
          'Multiple Recording Modes',
          'Custom Filter Library',
          'Instant Social Sharing',
          'High-Speed Processing'
        ],
        bestFor: [
          'Birthday Parties',
          'Social Events',
          'Youth Gatherings',
          'School Events',
          'Entertainment Venues'
        ]
      },
      {
        title: 'Animated Video Booth',
        image: '/images/services/video-booth/animatedobject-1.png',
        description: 'Compact and portable video recording solution',
        details: 'Our Mobile Video Booth offers professional-quality recording in a compact, portable setup that can be placed anywhere at your event.',
        features: [
          'Compact Setup',
          'Quick Installation',
          'Wireless Operation',
          'Built-in Lighting',
          'Battery Powered',
          'Flexible Placement'
        ],
        specs: [
          'Mirrorless Camera System',
          'Portable LED Lights',
          'Wireless Audio System',
          'Tablet Control Interface',
          'Rechargeable Battery',
          'Compact Backdrop'
        ],
        bestFor: [
          'Outdoor Events',
          'Pop-up Activations',
          'Small Venues',
          'Roaming Coverage',
          'Quick Setup Events'
        ]
      }
    ],

    slug: 'video-booth'
  },
  'livestreaming': {
    title: 'Livestreaming',
    description: 'Broadcast your event to a wider audience',
    fullDescription: `
      Share your special moments with guests who couldn't attend in person with our professional Livestreaming service. We provide high-quality, multi-camera coverage with professional audio to ensure remote guests feel like they're part of the celebration.

 
    `,
    image: '/images/services/livestreaming/awwnderful-livestreaming-setup-3.jpg',
    features: [
      'Multi-camera coverage',
      'Professional audio',
      'Custom graphics',
      'Chat moderation',
      'Event recording',
      '24/7 support'
    ],
    gallery: [
      '/images/services/livestreaming/awwnderful-livestreaming-setup-1.jpg',
      '/images/services/livestreaming/awwnderful-livestreaming-setup-2.jpg',
      '/images/services/livestreaming/awwnderful-livestreaming-setup-3.jpg',
      '/images/services/livestreaming/awwnderful-livestreaming-setup-4.jpg',
      '/images/services/livestreaming/awwnderful-livestreaming-setup-5.jpg',
      '/images/services/livestreaming/awwnderful-livestreaming-setup-6.jpg',
      '/images/services/livestreaming/awwnderful-livestreaming-setup-7.jpg',
      '/images/services/livestreaming/awwnderful-livestreaming-setup-8.jpg',
      '/images/services/livestreaming/awwnderful-livestreaming-setup-9.jpg',
      '/images/services/livestreaming/awwnderful-livestreaming-setup-10.jpg',
      '/images/services/livestreaming/awwnderful-livestreaming-setup-11.jpg'
    ],
    models: [
      {
        title: 'Livestream Pro',
        image: '/images/services/livestreaming/awwnderful-livestreaming-setup-4.jpg',
        description: 'Professional multi-camera livestreaming setup',
        details: 'Our Pro Broadcast setup delivers television-quality livestreaming with multiple camera angles, professional audio, and custom graphics.',
        features: [
          'Multi-Camera Setup',
          'Professional Switching',
          'Custom Graphics',
          'High-Quality Audio',
          'Recording Backup'
        ],
        specs: [
          'BlackMagic ATEM Switcher',
          'Fullframe & Camcorder Cameras',
          'Audio Mixer capture',
          'Custom Lower Thirds',
          '4K Streaming Capability',
          'ORBIT Internet connection'
        ],
        bestFor: [
          'Large Corporate Events',
          'Conferences',
          'Concert Streams',
          'Sports Events',
          'Award Ceremonies'
        ]
      },
      {
        title: 'Livestream Lite',
        image: '/images/services/livestreaming/awwnderful-livestreaming-setup-7.jpg',
        description: 'Optimized for social media platforms',
        details: 'Perfect for social media streaming, this setup is optimized for platforms like Facebook, YouTube, and Instagram Live.',
        features: [
          'Mobile Viewing Optimized',
          'Vertical Video Option',
          'Social Integration',
          'Custom overlay frame',

        ],
        specs: [
          'Portable Setup',
          'Wireless Microphones',
          'Social Media Overlays',
        ],
        bestFor: [
          'Social Media Events',
          'Influencer Streams',
          'Small wedding pax',
          'Community Events'
        ]
       
      },
      {
        title: 'Live Cam Offline',
        image: '/images/services/livestreaming/service-livecam.jpg',
        description: 'Complete solution for hybrid events',
        details: 'Designed for hybrid events, combining in-person and virtual experiences with interactive features.',
        features: [
          'Audience Interaction',
          'Virtual Q&A',
          'Live Polling',
          'Remote Speakers',
          'Virtual Breakouts',
          'Event Analytics'
        ],
        specs: [
          'Virtual Event Platform',
          'Interactive Features',
          'Multiple Breakout Rooms',
          'Engagement Tools',
          'Analytics Dashboard',
          'Technical Support'
        ],
        bestFor: [
          'Corporate Conferences',
          'Educational Events',
          'Virtual Workshops',
          'Global Meetings',
          'Hybrid Seminars'
        ]
      }
    ],

    slug: 'livestreaming'
  },
  'multicamera': {
    title: 'MultiCamera',
    description: 'Capture every angle of your special moments',
    fullDescription: `
      Our MultiCamera setup ensures no moment goes uncaptured at your event. With multiple camera angles and synchronized shooting, we create dynamic photo and video content that tells the complete story of your celebration.

      Features:
      • Multiple camera angles
      • Synchronized shooting
      • Professional editing
      • Mixed media output
      • High-resolution images
      • Comprehensive coverage

      Our MultiCamera service combines multiple professional cameras to capture your event from every angle simultaneously. This creates a dynamic and immersive experience that traditional photography can't match. Perfect for product launches, fashion shows, dance performances, and any event where movement and multiple perspectives are key.
    `,
    image: '/images/services/multicamera/awwnderful-multicamera-setup-1.jpg',
    features: [
      'Multiple angles',
      'Synchronized capture',
      'Professional editing',
      'Mixed media',
      'High resolution',
      'Full coverage'
    ],
    outputSamples: [
      {
        title: "Multi-Angle Photo Capture",
        image: "/images/lookbook/multicamera-photo-greenscreen-5.mp4",
        type: "video"
      },
      {
        title: "Synchronized Boomerang",
        image: "/images/lookbook/multicamera-boomerang-greenscreen-1.mp4",
        type: "video"
      },
      {
        title: "Dynamic Photo Sequence",
        image: "/images/lookbook/multicamera-photo-greenscreen-2.mp4",
        type: "video"
      }
    ],
    gallery: [
      '/images/services/multicamera-hero.jpg ',
      '/images/services/multicamera/awwnderful-multicamera-setup-2.jpg',
      '/images/services/multicamera/awwnderful-multicamera-setup-3.jpg',
      '/images/services/multicamera/awwnderful-multicamera-setup-4.jpg', 
      '/images/services/multicamera/awwnderful-multicamera-setup-5.jpg',
      '/images/services/multicamera/awwnderful-multicamera-setup-6.jpg',
      '/images/services/multicamera/awwnderful-multicamera-setup-7.jpg',
      '/images/services/multicamera/awwnderful-multicamera-setup-8.jpg',
      '/images/services/multicamera/awwnderful-multicamera-setup-9.jpg',
      '/images/services/multicamera/awwnderful-multicamera-setup-10.jpg',
      '/images/services/multicamera/awwnderful-multicamera-setup-11.jpg'
    ],
    slug: 'multicamera'
  },
  'ai-photo-booth': {
    title: 'AI photo booth',
    description: 'Next-generation photo experiences with AI',
    fullDescription: `
      Experience the future of event photography with our AI photo booth. Using advanced artificial intelligence, we create unique, artistic photos that transform your guests into works of art. Perfect for adding a wow factor to your event.

     Technical Setup:

• Recomended Setup area : 2 x 2m (DSLR & Classic Booth with backdrop) 0,5 x 0,5m ( O Booth)

• Camera : DSLR Camera ( DSLR Booth & Classic Booth ) & Ipad camera ( O Booth )

• Internet Connection

• On site staff
    `,
    image: '/images/services/ai-photo-booth/ai-mini_figure_toy.png',
    features: [ 
      'AI effects',
      'Real-time processing',
      'Custom styles',
      'Style training',
      'Instant results',
      'High resolution'
    ],
    outputSamples: [
      {
        title: "Action figure with box",
        image: "/images/services/ai-photo-booth/ai-mini_figure_toy.png",
        type: "image"
      },
      {
        title: "Pixar Character Style",
        image: "/images/lookbook/fxbooth-photo-ai-2.jpg",
        type: "image"
      },
      {
        title: "Cake effect",
        image: "/images/services/ai-photo-booth/ai-cake.mp4",
        type: "video"
      },
      {
        title: "Drawing Style",
        image: "/images/services/ai-photo-booth/ai-drawing-1-result.png",
        type: "image"
      },
      {
        title: "Breathe fire",
        image: "/images/services/ai-photo-booth/aibooth_breathe fire_2.mp4",
        type: "video"
      },
      {
        title: "Zombie effect",
        image: "/images/services/ai-photo-booth/aibooth_zombie effect_1.mp4",
        type: "video"
      },
  
    ],
    gallery: [
        '/images/services/ai-photo-booth/gallery-ai-2.jpg',

    ],
    slug: 'ai-photo-booth'
  },
  'custom-photo-print': {
    title: 'Custom photo print',
    description: "Give your guests a one-of-a-kind souvenir they'll actually want to keep!",
    fullDescription: `
      Transform your event memories into personalized keepsakes with our Custom photo print Service. From eye-catching 3D holographic prints to magnetic prints, sticker prints, and elegant custom-framed photos — we offer a wide range of creative formats to match your style. Give your guests a one-of-a-kind souvenir they'll actually want to keep!
    `,
    image: '/images/services/Custom-Photo-Print/hologram-print-sample-3.jpg',
    features: [
      'On the spot process',
      'Unique photobooth add on',
      'Durable prints',
      'Gift packaging'
    ],
    models: [
      {
        title: 'Hologram Print',
        image: '/images/services/Custom-Photo-Print/hologram-print-sample-1.jpg',
        description: 'Futuristic holographic photo prints with a magical shimmer effect',
        details: 'Add logo overlay • Up to 4 Photo frame',
        specs: [
          'Square size'
        ],
        bestFor: [
          'Add on Photobooth Frame'
        ],
        features: [
          'Add logo overlay',
          'Up to 4 Photo frame'
        ],
        gallery: [
          '/images/services/Custom-Photo-Print/hologram-print-sample-1.jpg',
          '/images/services/Custom-Photo-Print/hologram-print-sample-3.jpg',
          '/images/services/Custom-Photo-Print/hologram_reels.mp4'
        ],
        links: [
          { title: 'View Sample', url: 'https://www.instagram.com/p/DDlOKV3SH9X/' }
        ]
      },
      {
        title: 'Large size print',
        image: '/images/services/Custom-Photo-Print/Jumbo-photobooth-strips.webp',
        description: 'Traditional holographic prints for everyday memories',
        details: 'Create a jumbo size of a unique photo print out',
        features: [
          '6x8 inch size ',
          '3x8 inch size ( Photo strip ) ',
        ],
        specs: [
          '15-30s print per photo',

        ],
        bestFor: [
          'Add on Photobooth Frame'
        ]
      },
      {
        title: 'Sticker Print',
        image: '/images/services/Custom-Photo-Print/sticker photo.jpg',
        description: '',
        details: 'Create peelable photo and stick it anywhere',
        features: [
          '4R size',

        ],
        specs: [
          'Laminated paper sticker',

        ],
        bestFor: [
          'Add on Photobooth Frame'
        ]
      },
      {
        title: 'Acrylic Frame',
        image: '/images/services/Custom-Photo-Print/frame-akrilik.jpg',
        description: '-',
        details: 'Clean look for your photo frame.',
        features: [
          'with magnet'
        ],
        specs: [
          '4x6 inch size',
          '2mm thickness',
   

        ],
        bestFor: [
          'Add on Photobooth Frame'
        ]
      },
      {
        title: 'Wooden Frame',
        image: '/images/services/Custom-Photo-Print/wooden frame.jpg',
        description: '',
        details: 'Wooden frame for your photo.',
        features: [
          'Variety of Color'
        ],
        specs: [
          'Frame for 4x6 Photo size'
        ],
        bestFor: [
          'Add on Photobooth Frame'
        ]
      },
      {
        title: 'Custom Paper Frame',
        image: '/images/services/Custom-Photo-Print/custom paper frame.png',
        description: 'Compact holographic prints perfect for gifts',
        details: 'Custom paper art cartoon can become your photo stand too',
        features: [
          'Standing photo cut out',
          'Custom design'
        ],
        specs: [
          'Art paper 310 gsm'
        ],
        bestFor: [
          'Add on Photobooth Frame'
        ]
      },
      {
        title: 'Cookie Photo',
        image: '/images/services/Custom-Photo-Print/cookies-photo.jpg',
        description: 'Compact holographic prints perfect for gifts',
        details: 'Eat your photos in safe way (no pun intended). Edible cookies with photos printed on it',
        features: [
          'Vanilla flavour',
        ],
        specs: [
          'print size 5x5 inch',
        ],
        bestFor: [
          'Add on Photo print'
        ]
      },
      {
        title: 'Magnetic Print',
        image: '/images/services/Custom-Photo-Print/magnetic-print.jpg',
        description: 'Compact holographic prints perfect for gifts',
        details: 'Prints that stick! Our magnetic prints are perfect keepsakes your guests can pop onto their fridge and relive the memories every day."',
        features: [
          '4R & Strip size',
        ],
        specs: [
          'Estimated process 1 minute per photo'
        ],
        bestFor: [
          'Add on Photo print'
        ]
      },
      {
        title: 'Flipbook',
        image: '/images/services/Custom-Photo-Print/flipbook.webp',
        description: 'Compact holographic prints perfect for gifts',
        details: 'Turns 6 seconds boomerang/video into a photo captured flipbook! Dance around or move however you like and have it captured and turned into a memorable flipbook.',
        features: [
          'Landscape 2x3 Inch size',
        ],
        specs: [
          'Estimated process 1-3 Minute per Flipbook',
        ],
        bestFor: [
          'Add on print out'
        ]
      },
      {
        title: 'Guest Book',
        image: '/images/services/Custom-Photo-Print/guestbook.jpg',
        description: 'Compact holographic prints perfect for gifts',
        details: 'Our guestbook lets your guests stick their photo and leave a heartfelt message.',
        features: [
          'Marker',
          'Glue',
          'Paper craft texture'
        ],
        specs: [
          'Various size (A4 / A5)',
          'Available in 10, 15, or 20 pages — custom page counts available upon request',

        ],
        bestFor: [
          'Add on print out'
        ]
      },
    ],
 

    slug: 'custom-photo-print'
  },
  'decoration': {
    title: 'Decoration',
    description: 'A Decoration service that allows you to create a beautiful and unique decoration for your event.',
    fullDescription: `
      Our decoration service transforms your event space into a stunning and memorable environment. We offer a wide range of decoration options to match your event's theme and style.

    `,
    image: '/images/services/wedding-decoration/wedding-decoration-1.jpg',
    features: [
      'Custom theme-based decorations',
      'Professional setup and installation',
      'Wide range of materials and styles',
      'Indoor and outdoor options',
      'Special occasion packages',
      'Clean-up service included'
    ],
    gallery: [
      '/images/services/wedding-decoration/wedding-decoration-1.jpg',
      '/images/services/wedding-decoration/wedding-decoration-2.jpg',
      '/images/services/wedding-decoration/wedding-decoration-3.jpg',
      '/images/services/wedding-decoration/wedding-decoration-4.jpg',
      '/images/services/wedding-decoration/wedding-decoration-5.jpg',
       '/images/services/wedding-decoration/wedding-decoration-6.jpg'
    ],
    models: [
      {
        title: 'Engagement Decoration',
        image: '/images/services/wedding-decoration/engagement-decoration-1.jpg',
        description: 'Stunning backdrops for your engagement photos',
        details: 'Our Engagement Decoration service creates beautiful, customizable photo backdrops perfect for capturing your engagement moments.',
        features: [
          'Custom Design Options',
          'Premium Materials',
          'LED Lighting Effects',
          'Floral Accents',
          'Branded Elements',
          'Easy Setup'
        ],
        specs: [
          'Multiple Size Options',
          'Weather-Resistant Materials',
          'Built-in Lighting System',
          'Portable Frame',
          'Custom Graphics',
          'Professional Installation'
        ],
        bestFor: [
          'Engagement Parties',
          'Pre-Wedding Shoots',
          'Bridal Showers',
          'Anniversary Celebrations',
          'Couple Portraits'
        ]
      },
      {
        title: 'Birthday Decoration',
        image: '/images/services/wedding-decoration/birthday-decoration-1.jpg',
        description: 'Complete hall transformation for your special day',
        details: 'Our Birthday Decoration service transforms your venue into a magical space with comprehensive decoration solutions.',
        features: [
          'Backdrop Decoration',
          'Custom Theme Design',
          'Floral Arrangements',
          'Lighting Design',
          'Table Settings',
          'Ceiling Decorations'
        ],
        specs: [
          'Professional Design Team',
          'Premium Decor Materials',
          'Custom Lighting Setup',
          'Floral Installation',
          'Table Centerpieces',
          'Complete Setup Service'
        ],
        bestFor: [
          'Birthday Parties',
          'Corporate Events',
          'Gala Dinners',
          'Anniversary Celebrations',
          'Large Gatherings'
        ]
      },
      {
        title: 'Wedding Decoration',
        image: '/images/services/wedding-decoration/wedding-decoration-1.jpg',
        description: 'Stunning stage designs for your ceremony',
        details: 'Create a breathtaking ceremony space with our Wedding Decoration service, featuring elegant designs and premium materials.',
        features: [
          'Custom Stage Design',
          'Floral Archways',
          'Lighting Effects',
          'Seating Arrangements',
          'Aisle Decorations',
          'Ceremony Backdrop'
        ],
        specs: [
          'Multiple Design Options',
          'Premium Floral Arrangements',
          'Professional Lighting',
          'Custom Backdrops',
          'Seating Decorations',
          'Complete Setup'
        ],
        bestFor: [
          'Wedding Ceremonies',
          'Award Ceremonies',
          'Corporate Presentations',
          'Cultural Events',
          'Religious Ceremonies'
        ]
      }
    ],
    slug: 'decoration'
  },
  'photo-video-documentation': {
    title: 'Photo & Video Documentation',
    description: 'Professional photo and video documentation services for your special moments.',
    fullDescription: `
      Our comprehensive photo and video documentation services capture every precious moment of your event with professional quality. From aerial drone shots to cinematic storytelling, we offer a range of services to suit your needs.

    `,
    image: '/images/services/photo-video-documentation/photographer-1.jpg',
    features: [
      'Professional equipment',
      'High-quality output',
      'Multiple service options',
      'Quick delivery',
      'Custom editing',
      'Post-production services'
    ],
    gallery: [
      '/images/services/photo-video-documentation/DLY07905.jpg',
      '/images/services/photo-video-documentation/DLY07907.jpg',
      '/images/services/photo-video-documentation/DLY07993.jpg',
      '/images/services/photo-video-documentation/photo-documentation-1.jpg',
      '/images/services/photo-video-documentation/photo-documentation-2.jpg',
      '/images/services/photo-video-documentation/photo-documentation-3.jpg',
      '/images/services/photo-video-documentation/photo-documentation-4.jpg',
      '/images/services/photo-video-documentation/photo-documentation-5.jpg',
      '/images/services/photo-video-documentation/photo-documentation-6.jpg',
      '/images/services/photo-video-documentation/photo-documentation-7.jpg',
      '/images/services/photo-video-documentation/photo-documentation-8.jpg',
      '/images/services/photo-video-documentation/photo-documentation-9.jpg',
      '/images/services/photo-video-documentation/photo-documentation-10.jpg'
    ],
    models: [
      {
        title: 'Drone Photography & Videography',
        image: '/images/services/photo-video-documentation/service-drone.avif',
        description: 'Aerial views and dynamic shots from above.',
        details: 'Capture stunning aerial perspectives with our professional drone photography and videography services. Perfect for outdoor events and large gatherings.',
        features: [
          '4K Aerial Footage',
          'Stabilized Shots',
          'Dynamic Movements',
          'High-Resolution Photos',
          'Custom Flight Patterns',
          'Live Feed Option'
        ],
        specs: [
          'DJI Professional Drones',
          '4K Camera System',
          '3-Axis Gimbal',
          'Extended Flight Time',
          'Obstacle Avoidance',
          'Professional Pilot'
        ],
        bestFor: [
          'Outdoor Events',
          'Wedding Ceremonies',
          'Corporate Events',
          'Real Estate',
          'Large Gatherings'
        ]
      },
      {
        title: 'Cinematic Video Production',
        image: '/images/services/photo-video-documentation/service-cinematic video.avif',
        description: 'Movie-quality video production for your event.',
        details: 'Professional cinematic video production that transforms your event into a compelling story with high-quality footage and expert editing.',
        features: [
          'Profesional Fullframe Camera',
          'Professional Lighting',
          'Cinematic Editing',
          'Custom Sound Design',
          'Storytelling Focus',
          'High-End Equipment'
        ],
        specs: [
          'Sony FX6 Camera',
          'Professional Audio Kit',
          'LED Lighting System',
          'Stabilization Equipment'
        ],
        bestFor: [
          'Wedding Ceremonies',
          'Corporate Events',
          'Product Launches',
          'Music Videos',
          'Special Occasions'
        ]
      },
      {
        title: 'Event Documentation',
        image: '/images/services/photo-video-documentation/DLY07993.jpg',
        description: 'Complete photo and video coverage of your event.',
        details: 'Comprehensive event documentation that captures every moment with both photo and video, ensuring no special memory is missed.',
        features: [
          'Same day editing',
          'Candid Moments',
          'Group Photos',
          'Event Highlights',
          'Quick Delivery',
          
        ],
        specs: [
          'Professional Cameras',
          'Multiple Photographers',
          'Video Coverage',
          'Photo Editing',
          'Video Editing',
          'Delivery video 1 Week office hour',
          'All photo hosted in Online Gallery'
        ],
        bestFor: [
          'Corporate Events',
          'Conferences',
          'Product Launches',
          'Birthday Parties',
          'Family Gatherings'
        ]
      },
      {
        title: 'Content Creator',
        image: '/images/services/photo-video-documentation/service-wedding content creator.jpg',
        description: 'Complete photo and video coverage of your event.',
        details: 'We will help you capture moment and upload it to your story. making day highlight video',
        features: [
          'Full Event Coverage',
          'Candid Moments',
          'Group Photos',
          'Event Highlights',
          'Quick Delivery',
          'Cloud Online Gallery'
        ],
        specs: [
          'Phone Camera',
          'Stabilizer',
          'LED Lighting portable',
          'Wireless audio mic'
        ],
        bestFor: [
          'Corporate Events',
          'Conferences',
          'Product Launches',
          'Birthday Parties',
          'Family Gatherings'
        ]
      },
      {
        title: 'Pre-wedding Photography',
        image: '/images/services/photo-video-documentation/service-prewedding.jpg',
        description: 'Romantic pre-wedding photo sessions.',
        details: 'Capture your love story with our professional pre-wedding photography service, featuring multiple locations and creative concepts.',
        features: [
          'Multiple Locations',
          'Creative Concepts',
          'Professional Posing',
          'Natural Lighting',
          'Storytelling Focus',
          'Digital Delivery'
        ],
        specs: [
          'Professional Camera',
          'Portrait Lenses',
          'Lighting Equipment',
          'Location Scouting',
          'Photo Editing',
          'Album Design'
        ],
        bestFor: [
          'Engaged Couples',
          'Anniversary Sessions',
          'Portrait Photography',
          'Love Story Sessions',
          'Save the Date Photos'
        ]
      },
      {
        title: '360° Photo & Video',
        image: '/images/services/photo-video-documentation/service-360.jpg',
        description: 'Immersive 360-degree photo and video experiences.',
        details: 'Create immersive virtual experiences with our 360-degree photo and video services, perfect for virtual tours and interactive content.',
        features: [
          '360° Coverage',
          'Virtual Tours',
          'Interactive Viewing',
          'High Resolution',
          'Custom Navigation',
          'Social Media Ready'
        ],
        specs: [
          '360° Camera System',
          'Stabilization Equipment',
          'VR-Compatible Output',
          'Custom Software',
          'Post-Processing',
          'Delivery Platform'
        ],
        bestFor: [
          'Virtual Events',
          'Property Tours',
          'Venue Showcases',
          'Interactive Content',
          'Social Media'
        ]
      }
    ],

    slug: 'photo-video-documentation'
  },
  'light-painting': {
    title: 'Light Painting',
    description: 'Create stunning light art photography with long exposure techniques',
    fullDescription: `
      Experience the magic of light painting photography at your event. Our skilled photographers use long exposure techniques and specialized light tools to create stunning, one-of-a-kind images that blend reality with light art.

    `,
    image: '/images/services/lightpainting/lightpainting-setup-2.mp4',
    features: [
      'Professional light artists',
      'Custom light designs',
      'Long exposure shots',
      'Instant previews',
      'Digital delivery',
      'Print options'
    ],
    gallery: [
      '/images/services/lightpainting/lightpainting-result-1.jpg',
      '/images/services/lightpainting/lightpainting-result-2.jpg',
      '/images/services/lightpainting/lightpainting-result-3.jpg',
      '/images/services/lightpainting/lightpainting-setup-1.jpg'
    ],
    models: [
      {
        title: 'Multicamera LightPainting',
        image: '/images/services/lightpainting/lightpainting-setup-3.jpg',
        description: 'Traditional light painting with custom designs',
        details: 'Our Classic Light Painting setup uses traditional techniques with modern equipment to create stunning light art photographs.',
        features: [
          'Custom Light Designs',
          'Multiple Colors',
          'Various Light Tools',
          'Long Exposure',
          'Digital Preview',
          'High-Resolution Output'
        ],
        specs: [
          'Professional DSLR Camera',
          'Specialized Light Tools',
          'RGB LED Equipment',
          'Tripod Setup',
          'Preview Monitor',
          'Dark Space Required'
        ],
        bestFor: [
          'Corporate Events',
          'Wedding Receptions',
          'Brand Activations',
          'Art Installations',
          'Special Celebrations'
        ]
      },
      {
        title: 'Photobooth LightPainting',
        image: '/images/services/lightpainting/lightpainting-result-1.jpg',
        description: 'Guest-participatory light painting experience',
        details: 'Allow your guests to become light artists with our Interactive Light Painting setup, featuring easy-to-use light tools and instant previews.',
        features: [
          'Guest Participation',
          'Simple Light Tools',
          'Real-time Guidance',
          'Instant Preview',
          'Multiple Attempts',
          'Group Photos'
        ],
        specs: [
          'User-friendly Equipment',
          'Safety-certified Tools',
          'Live View System',
          'Multiple Light Options',
          'Group Setup',
          'Quick Tutorial'
        ],
        bestFor: [
          'Team Building Events',
          'Youth Parties',
          'Educational Workshops',
          'Family Celebrations',
          'Interactive Exhibitions'
        ]
      }
    ],

    slug: 'light-painting'
  },
  'audio-rental': {
    title: 'Audio Rental',
    description: 'Professional sound systems for your events',
    fullDescription: `
      Experience crystal-clear sound at your events with our professional Audio Rental service. We offer a range of high-quality sound systems to suit any venue size and event type, from intimate gatherings to large-scale productions.
    `,
    image: '/images/services/audio-rental/sewaaudio-setup-1.jpg',
    features: [
      'Professional equipment',
      'Multiple power options',
      'Wireless mics',
      'Expert operators',
      'Quick setup',
      'Technical support'
    ],
    models: [
      {
        title: '1000W Package',
        image: '/images/services/audio-rental/paket-1000w.jpg',
        description: 'Perfect for small to medium venues',
        details: 'Our 1000W package provides clear, balanced sound for intimate gatherings and medium-sized venues.',
        features: [
          '1000W Power Output',
          '2 Main Speakers',
          '2 Wireless Microphones',
          'Basic Mixing Console',
          'Subwoofer',
          'Professional Setup'
        ],
        specs: [
          '2x 500W Speakers',
          '12" Subwoofer',
          '4-Channel Mixer',
          '2 Wireless Mics',
          'Speaker Stands',
          'Basic Cables'
        ],
        bestFor: [
          'Small Weddings',
          'Corporate Meetings',
          'Birthday Parties',
          'Small Venues',
          'Indoor Events'
        ]
      },
      {
        title: '1500W Package',
        image: '/images/services/audio-rental/paket-1500w.jpg',
        description: 'Enhanced sound for medium to large venues',
        details: 'The 1500W package delivers powerful, clear sound with enhanced bass response for larger venues.',
        features: [
          '1500W Power Output',
          '4 Main Speakers',
          '4 Wireless Microphones',
          'Professional Mixing Console',
          'Dual Subwoofers',
          'Advanced Setup'
        ],
        specs: [
          '4x 375W Speakers',
          '2x 15" Subwoofers',
          '8-Channel Mixer',
          '4 Wireless Mics',
          'Professional Stands',
          'Premium Cables'
        ],
        bestFor: [
          'Medium Weddings',
          'Corporate Events',
          'Live Performances',
          'Outdoor Events',
          'Medium Venues'
        ]
      },
      {
        title: '2000W Package',
        image: '/images/services/audio-rental/paket-2000w.jpg',
        description: 'Professional-grade sound for large venues',
        details: 'Our 2000W package provides powerful, professional-grade sound with exceptional clarity and coverage.',
        features: [
          '2000W Power Output',
          '6 Main Speakers',
          '6 Wireless Microphones',
          'Professional Sound Engineer',
          'Multiple Subwoofers',
          'Premium Setup'
        ],
        specs: [
          '6x 333W Speakers',
          '3x 18" Subwoofers',
          '16-Channel Mixer',
          '6 Wireless Mics',
          'Professional Racks',
          'Premium Cables'
        ],
        bestFor: [
          'Large Weddings',
          'Concert Events',
          'Festivals',
          'Large Venues',
          'Outdoor Events'
        ]
      },
      {
        title: '2500W Package',
        image: '/images/services/audio-rental/paket-2500w.jpg',
        description: 'Professional-grade sound for large venues',
        details: 'Our 2000W package provides powerful, professional-grade sound with exceptional clarity and coverage.',
        features: [
          '2000W Power Output',
          '6 Main Speakers',
          '6 Wireless Microphones',
          'Professional Sound Engineer',
          'Multiple Subwoofers',
          'Premium Setup'
        ],
        specs: [
          '6x 333W Speakers',
          '3x 18" Subwoofers',
          '16-Channel Mixer',
          '6 Wireless Mics',
          'Professional Racks',
          'Premium Cables'
        ],
        bestFor: [
          'Large Weddings',
          'Concert Events',
          'Festivals',
          'Large Venues',
          'Outdoor Events'
        ]
      },
      {
        title: '4000W Package',
        image: '/images/services/audio-rental/paket-4000w.jpg',
        description: 'Professional-grade sound for large venues',
        details: 'Our 2000W package provides powerful, professional-grade sound with exceptional clarity and coverage.',
        features: [
          '2000W Power Output',
          '6 Main Speakers',
          '6 Wireless Microphones',
          'Professional Sound Engineer',
          'Multiple Subwoofers',
          'Premium Setup'
        ],
        specs: [
          '6x 333W Speakers',
          '3x 18" Subwoofers',
          '16-Channel Mixer',
          '6 Wireless Mics',
          'Professional Racks',
          'Premium Cables'
        ],
        bestFor: [
          'Large Weddings',
          'Concert Events',
          'Festivals',
          'Large Venues',
          'Outdoor Events'
        ]
      },
      {
        title: 'More equipment',
        image: '/images/services/audio-rental/findoutmore.jpg',
        description: 'Professional-grade sound for large venues',
        details: 'Our 2000W package provides powerful, professional-grade sound with exceptional clarity and coverage.',
        features: [
          '2000W Power Output',
          '6 Main Speakers',
          '6 Wireless Microphones',
          'Professional Sound Engineer',
          'Multiple Subwoofers',
          'Premium Setup'
        ],
        specs: [
          '6x 333W Speakers',
          '3x 18" Subwoofers',
          '16-Channel Mixer',
          '6 Wireless Mics',
          'Professional Racks',
          'Premium Cables'
        ],
        bestFor: [
          'Large Weddings',
          'Concert Events',
          'Festivals',
          'Large Venues',
          'Outdoor Events'
        ]
      }
    ],

    gallery: [
      '/images/services/audio-rental/sewaaudio-setup-1.jpg',
      '/images/services/audio-rental/sewaaudio-setup-2.jpg',
      '/images/services/audio-rental/sewaaudio-setup-4.mp4',
      '/images/services/audio-rental/sewaaudio-setup-5.mp4',
      '/images/services/audio-rental/sewaaudio-setup-6.jpg'
    ],
    slug: 'audio-rental'
  },
  'interactive-display': {
    title: 'Interactive Display',
    description: 'Engaging digital displays for your events',
    fullDescription: `
      Enhance your event experience with our Interactive Display services. We provide dynamic, real-time digital displays that engage your guests and create memorable moments. From live photo slideshows to digital wish walls, our solutions bring your event to life.
    `,
    image: '/images/services/Interactive-display/photo-slideshow-1.jpg',
    features: [
      'Real-time updates',
      'Guest interaction',
      'Custom branding',
      'Multiple formats',
      'Professional setup',
      'Technical support'
    ],
    gallery: [
      '/images/services/Interactive-display/digital-wishes_1.jpg',
      '/images/services/Interactive-display/photo-slideshow-1.jpg',
      '/images/services/Interactive-display/photo-slideshow-3.mp4',
      '/images/services/Interactive-display/photo-slideshow-4.mp4',
      '/images/services/Interactive-display/photo-slideshow-5.jpg'
    ],
    models: [ // Models for interactive-display
      {
        title: 'Photobooth Slideshow',
        image: '/images/services/Interactive-display/slideshow-1.jpg',
        description: 'Dynamic real-time slideshow for your event photos',
        details: 'Our Photobooth Slideshow service creates an engaging display of event photos in real-time, with smooth transitions and interactive features.',
        features: [
          'Real-time Photo Display',
          'Custom Transitions',
          'Social Media Integration',
          'Guest Interaction',
          'Branded Templates',
          'Multiple Display Options'
        ],
        specs: [
          'High-Resolution Displays',
          'Custom Animation Effects',
          'Social Media Feed',
          'Touch Screen Interface',
          'Cloud Storage',
          'Professional Software'
        ],
        bestFor: [
          'Wedding Receptions',
          'Corporate Events',
          'Birthday Parties',
          'Product Launches',
          'Social Gatherings'
        ]
      },
      {
        title: 'Digital Wishes Wall',
        image: '/images/services/Interactive-display/digital-wishes_1.jpg',
        description: 'Interactive digital wall for guest messages and wishes',
        details: 'Create an engaging Digital Wishes Wall where guests can send their messages and see them displayed in real-time with beautiful animations.',
        features: [
          'Real-time Message Display',
          'Custom Animations',
          'Social Media Integration',
          'Message Moderation',
          'Multiple Display Styles',
          'Guest Interaction'
        ],
        specs: [
          'Touch Screen Interface',
          'Message Filtering System',
          'Custom Templates',
          'Cloud Storage',
          'Professional Software',
          'Multiple Display Options'
        ],
        bestFor: [
          'Wedding Celebrations',
          'Anniversary Parties',
          'Corporate Events',
          'Birthday Celebrations',
          'Special Occasions'
        ]
      },
      {
        title: 'Mosaic Photos',
        image: '/images/services/Interactive-display/digital-wishes_1.jpg', // Placeholder, assuming similar image
        description: 'Interactive mosaic creation from event photos',
        details: 'Create a stunning digital or physical mosaic from photos taken at your event, building in real-time or as a post-event creation.',
        features: [
          'Real-time Photo Collection',
          'Digital Mosaic Display',
          'Physical Mosaic Option',
          'Customizable Mosaic Image',
          'Guest Interaction',
          'Brandable Output'
        ],
        specs: [
          'Photo Aggregation Software',
          'Large Screen Display for Digital',
          'High-Quality Printing for Physical',
          'Custom Mosaic Algorithm',
          'Moderation Tools',
          'Online Gallery Integration'
        ],
        bestFor: [
          'Brand Activations',
          'Corporate Events',
          'Trade Shows',
          'Community Events',
          'Product Launches'
        ]
      }
    ],

    slug: 'interactive-display'
  }, // End of 'interactive-display'
  'invitation-digitalguestbook': { // This is the first, corrected definition
    title: 'Invitation & Digital Guestbook',
    description: 'Digital invitations,interactive guestbook & Usher for your events',
    fullDescription: `
      Make your event experience smooth and organized with our complete guest management solutions. We handle everything from sending out personalized invitations (digital or printed), setting up a seamless digital guest book for efficient check-ins, to providing friendly and professional usher services who assist guests throughout the event. 
      Designed to enhance hospitality and flow, our services ensure your guests feel welcomed from the first invite to their final farewell.
    `,
    image: '/images/services/invitation-digitalguestbook/digitalguestbook-setup-1.jpg',
    features: [
      'Manajemen meja tamu',
      'Auto WhatsApp Blast / Email Blast',
      'Custom pertanyaan RSVP / Konfirmasi Kehadiran',
      'Import data undangan dari Excel',
      'Print stiker kado/angpao Manajemen tamu undangan',
      'Print pengganti souvenir',
      'Buku tamu digital dengan QR Code',
      'Guest messages',
      'Event countdown',
      'Guest list tracking'
    ],
    gallery: [
      '/images/services/invitation-digitalguestbook/digitalguestbook-web-1.mp4',
      '/images/services/invitation-digitalguestbook/websiteinvitation-setup-1.jpg',
      '/images/services/invitation-digitalguestbook/video-invitation-2.mp4',
      '/images/services/invitation-digitalguestbook/usher-1.jpg',
      '/images/services/invitation-digitalguestbook/usher-2.jpg'
    ],

    models: [ // Models from the second definition are now here
      {
        title: 'Website Invitation',
        image: '/images/services/invitation-digitalguestbook/websiteinvitation-setup-1.jpg',
        description: 'Custom website-based invitations with interactive features',
        details: 'Create a stunning, responsive website invitation that works on all devices. Perfect for formal events and weddings.',
        features: [
          'Custom Website Design',
          'Responsive Layout',
          'RSVP System',
          'Event Details',
          'Map Integration',
          'Photo Gallery'
        ],
        specs: [
          'Mobile-First Design',
          'Custom Domain',
          'SSL Security',
          'Analytics Dashboard',
          'Multiple Languages',
          'Social Sharing'
        ],
        bestFor: [
          'Weddings',
          'Corporate Events',
          'Formal Gatherings',
          'VIP Invitations'
        ]
      },
      {
        title: 'Image & Video Invitation',
        image: '/images/services/invitation-digitalguestbook/video-invitation-1.png',
        description: 'Dynamic video and image-based invitations',
        details: 'Create engaging video invitations with custom animations and interactive elements that capture attention.',
        features: [
          'Custom Video Creation',
          'Animated Elements',
          'Background Music',
          'Interactive Buttons',
          'RSVP Integration',
          'Social Media Ready'
        ],
        specs: [
          'Full HD 1080p Quality',
          'Various Format Support',
          'Quick Turnaround Time'
        ],
        links: [
          { title: 'Invitation Sample', url: 'https://www.instagram.com/looka.invitation' }
        ]
      },
      {
        title: 'Digital Guestbook',
        image: '/images/services/invitation-digitalguestbook/digitalguestbook-setup-1.jpg',
        description: 'Interactive digital guestbook for your event',
        details: 'Capture memories and messages from your guests with our interactive digital guestbook system.',
        features: [
          'Guest Messages',
          'Guest Photo Uploads',
          'Digital Signatures',
          'Integrated with Digital Wishes Wall',
          'Integrated with Guest cam'
        ],
        specs: [
          'Ipad device',
          'Tablet holder',
          'Internet connection',
          'Need around 1 Power outlet nearby in radius 5m',
        ],
        bestFor: [
          'Wedding Receptions',
          'Corporate Events'
        ]
      },
      {
        title: 'Usher Management',
        image: '/images/services/invitation-digitalguestbook/usher.jpg',
        description: '-',
        details: 'Usher bertugas mengarahkan tamu saat registrasi dan memastikan acara berjalan lancar. Dalam wedding, usher juga membimbing tamu masuk serta memberi info soal alur acara dan pengambilan souvenir.',
        features: [
          'Reqest talent',
          // Removed duplicate features from original video invite
          // 'Animated Elements',
          // 'Background Music',
          // 'Interactive Buttons',
          // 'RSVP Integration',
          // 'Social Media Ready'
        ],
        specs: [
          'HD ' // This seems incomplete, but preserving from original
        ],
        bestFor: [ // Copied from Video Invitation, might need adjustment
          'Birthday Parties',
          'Anniversary Events',
          'Product Launches',
          'Social Gatherings',
          'Creative Events'
        ]
      }
    ],
    slug: 'invitation-digitalguestbook'
  }, // End of the corrected 'invitation-digitalguestbook'
  // The second 'invitation-digitalguestbook' definition that started around original line 2031 / current 1998 is GONE.
  'virtual-reality': {
    title: 'Virtual & Augmented Reality',
    description: 'Immersive VR experiences for your events',
    fullDescription: `
      Take your event to the next dimension with our Virtual Reality service. We provide immersive VR experiences that transport your guests to virtual worlds, create interactive experiences, and make your event truly unforgettable.

    `,
    image: '/images/services/virtual-reality/vr-hero.png',
    features: [
      'Premium VR headsets',
      'Interactive experiences',
      'Multiplayer games',
      'Virtual tours',
      'Custom content',
      'Expert operators'
    ],
    gallery: [
      '/images/services/virtual-reality/soccer-games-vr.jpg',
      '/images/services/virtual-reality/driving-simulation-vr.webp',
    ],
    models: [
      {
        title: 'AR Filter & Social media filter',
        image: '/images/services/virtual-reality/Instagram Filter.png',
        description: 'Interactive AR filters and VR activations for your event',
        details: 'Create engaging AR filters and VR activations that bring your event to life with interactive experiences and social media integration.',
        features: [
          'Custom AR Filters',
          'Social Media Integration',
          'Interactive Elements',
          'Branded Experiences',
          'Real-time Effects',
          'Analytics Dashboard'
        ],
        specs: [
          'AR Filter Creation',
          'VR Experience Design',
          'Social Platform Support',
          'Custom Branding',
          'Performance Tracking',
          'User Analytics'
        ],
        bestFor: [
          'Brand Activations',
          'Product Launches',
          'Social Media Events',
          'Marketing Campaigns',
          'Interactive Exhibitions'
        ]
      },
      {
        title: 'VR Games & Entertainment',
        image: '/images/services/virtual-reality/vr game.jpg',
        description: 'Interactive gaming experiences for your guests',
        details: 'Create an exciting gaming zone with multiple VR stations offering various games and experiences for your guests to enjoy.',
        features: [
          'Multiple VR Stations',
          'Popular VR Games',
          'Multiplayer Options',
          'Competitive Tournaments',
          'Custom Game Selection',
          'Professional Setup'
        ],
        specs: [
          'Oculus Quest Pro Headsets',
          'High-Performance PCs',
          'Wireless Controllers',
          'Safety Equipment',
          'Sanitization Kits',
          'Technical Support'
        ],
        bestFor: [
          'Corporate Events',
          'Gaming Parties',
          'Youth Events',
          'Team Building',
          'Entertainment Venues'
        ]
      },
      {
        title: 'VR Tour',
        image: '/images/services/virtual-reality/vr tour.png',
        description: 'Immersive virtual experiences and tours',
        details: 'Offer your guests unique virtual experiences, from virtual tours to interactive educational content and entertainment.',
        features: [
          'Virtual Tours',
          'Educational Content',
          '360° Videos',
          'Interactive Experiences',
          'Custom Content',
          'Guided Sessions'
        ],
        specs: [
          'Premium VR Headsets',
          'High-Resolution Content',
          'Interactive Controllers',
          'Comfortable Seating',
          'Audio Systems',
          'Professional Guides'
        ],
        bestFor: [
          'Educational Events',
          'Product Launches',
          'Museum Exhibitions',
          'Corporate Training',
          'Special Events'
        ]
      },
      {
        title: 'VR Education',
        image: '/images/services/virtual-reality/vr education.avif',
        description: 'Complete VR entertainment solution',
        details: 'A comprehensive VR entertainment package combining gaming, experiences, and interactive content for a full day of virtual fun.',
        features: [
          'Mixed Content Selection',
          'Rotating Experiences',
          'Party Games',
          'Group Activities',
          'Custom Branding',
          'Full-Day Coverage'
        ],
        specs: [
          'Multiple VR Stations',
          'Various Content Types',
          'Party Mode Games',
          'Group Experience Setup',
          'Branded Equipment',
          'Professional Staff'
        ],
        bestFor: [
          'Birthday Parties',
          'Corporate Events',
          'Family Gatherings',
          'Social Events',
          'Entertainment Venues'
        ]
      },
      {
        title: 'Driving Simulator',
        image: '/images/services/virtual-reality/vr car simulation.jpg',
        description: 'Immersive racing and driving simulation experience',
        details: 'Experience the thrill of high-speed racing or realistic driving with our state-of-the-art VR car simulation setup. Perfect for automotive events, team building, or entertainment.',
        features: [
          'Realistic Driving Physics',
          'Multiple Car Models',
          'Various Track Options',
          'Force Feedback Steering',
          'Motion Platform',
          'Multiplayer Racing'
        ],
        specs: [
          'Professional Racing Wheel',
          'Motion Platform',
          '4K VR Headset',
          'Surround Sound System',
          'High-Performance PC',
          'Professional Setup'
        ],
        bestFor: [
          'Automotive Events',
          'Corporate Team Building',
          'Gaming Tournaments',
          'Entertainment Venues',
          'Product Launches'
        ]
      },
      {
        title: 'Corporate Training',
        image: '/images/services/virtual-reality/vr-corp-training.jpg',
        description: 'Help guest to training before the work',
        details: 'A comprehensive VR entertainment package combining gaming, experiences, and interactive content for a full day of virtual fun.',
        features: [
          'Mixed Content Selection',
          'Rotating Experiences',
          'Party Games',
          'Group Activities',
          'Custom Branding',
          'Full-Day Coverage'
        ],
        specs: [
          'Multiple VR Stations',
          'Various Content Types',
          'Party Mode Games',
          'Group Experience Setup',
          'Branded Equipment',
          'Professional Staff'
        ],
        bestFor: [
          'Birthday Parties',
          'Corporate Events',
          'Family Gatherings',
          'Social Events',
          'Entertainment Venues'
        ]
      }
    ],

    slug: 'virtual-reality'
  },
  'photobox': {
    title: 'Photobox',
    description: 'Your all in one photobox solutions bee',
    fullDescription: `
     Whether you're looking for a simple, plug-and-play solution like our BoothBox, or a high-end custom photobox tailored to your brand, we offer flexible options to meet your needs. For long-term or permanent installations, we can handle the entire process. From box fabrication, custom software integration, to built-in payment systems. Whatever your photobox vision is, we're here to bring it to life.
    `,
    image: '/images/services/Boothbox/photobox-setup-1.jpg',
    features: [
      'Custom model based on your event theme',
      'BoothBox model'
    ],
    gallery: [
      '/images/services/Boothbox/photobox-setup-1.jpg',
      '/images/services/Boothbox/photobox-setup-2.jpg',
      '/images/services/Boothbox/photobox-setup-3.jpg',
      '/images/services/Boothbox/photobox-setup-4.jpg',
      '/images/services/Boothbox/photobox-setup-5.jpg',
      '/images/services/Boothbox/photobox-setup-6.jpg',
      '/images/services/Boothbox/custom-photobox-setup-1.jpg',

      
    ],
    models: [
      {
        title: 'The Boothbox',
        image: '/images/services/Boothbox/photobox-setup-3.jpg',
        description: 'Traditional photo booth experience in a compact design',
        details: 'Our Pipe and Drape Photobox. offers the traditional photobox experience with less budget. its easy setup ',
        features: [
          'All photobooth features',
        ],
        specs: [
          'Photo Printer',
          'Professional DSLR Camera',
          'Lighting Setup',
          'Custom Personalized booth & branding'
        ],
        bestFor: [
          'Any Events'
        ]
      },
      {
        title: 'Custom Photobox',
        image: '/images/services/photobox/high-angle.jpg',
        description: 'Customized photobox project tailored to client needs',
        details: 'Our custom photobox project is designed to meet the unique requirements of each client, ensuring a personalized and high quality experience.',
        features: [
          'High angle setup',
          'RGB Style',
        ],
        specs: [
          'Photo Printer',
          'Professional DSLR Camera',
          'Lighting Setup',
          'Custom Personalized booth & branding'
        ],
        bestFor: [
          'High-End Events',
          'Brand activations',
        ],
        gallery: [
          '/images/services/photobox/high-angle.jpg',
          'https://photos.smugmug.com/photos/i-Bdfj4Mm/0/LQnx9dCNjF2j8d4NxvsDKW6CLLfbrK3WT6SCVbN36/1920/i-Bdfj4Mm-1920.mp4'
        ]
      },
      {
        title: 'Permanent setup Photobox',
        image: '/images/services/photobox/Permanent-setup-photobox.png',
        description: 'Permanent installation for a on your location',
        details: 'We will help you to create the photobox project on your location for a permanent installation.',
        features: [
          'All photobooth features',
        ],
        specs: [
          'Photo Prints',
          'Professional DSLR Camera',
          'Studio Lighting Setup',
          'Photobooth software with payment options'
        ],
        bestFor: [
          'Permanent installation',
          'Malls, Restaurant, Cafes, etc'
        ]
      }
    ],
  
    slug: 'photobox'
  },
}

// Export services for use in other components
export { services };

function Gallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Main image starts visible
  const [isPlaying, setIsPlaying] = useState(false); // Slideshow for main gallery
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // True if current main video is playing
  const [isModalPlaying, setIsModalPlaying] = useState(false); // Slideshow for modal

  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const modalAutoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null); // For main gallery video
  const modalVideoRef = useRef<HTMLVideoElement>(null); // For modal video
  const targetIndexRef = useRef<number | null>(null); // For direct selection by thumbnail

  const [showNavButtons, setShowNavButtons] = useState(false); // For main gallery nav buttons

  const isVideo = useCallback((url: string): boolean => {
    if (!url) return false;
    // Check for video file extensions
    if (url.endsWith('.mp4') || url.endsWith('.mov') || url.endsWith('.webm') || url.endsWith('.avi') || url.endsWith('.mkv')) {
      return true;
    }
    // Check for external video service URLs
    if (url.includes('youtube.com') || url.includes('youtu.be') || 
        url.includes('vimeo.com') || url.includes('smugmug.com') ||
        url.includes('wistia.com') || url.includes('jwplayer.com') ||
        url.includes('brightcove.com') || url.includes('dailymotion.com')) {
      return true;
    }
    return false;
  }, []);

  const stopAutoplay = useCallback((): void => {
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
      autoplayTimeoutRef.current = null;
    }
  }, []);

  const stopModalAutoplay = useCallback((): void => {
    if (modalAutoplayTimeoutRef.current) {
      clearTimeout(modalAutoplayTimeoutRef.current);
      modalAutoplayTimeoutRef.current = null;
    }
  }, []);

  const nextSlide = useCallback((): void => {
    if (isAnimating || (isVideoPlaying && !isModalOpen)) return; 
    setIsAnimating(true);
    setIsVisible(false); 
    stopAutoplay(); 
  }, [isAnimating, isVideoPlaying, isModalOpen, stopAutoplay]);

  const prevSlide = useCallback((): void => {
    if (isAnimating || (isVideoPlaying && !isModalOpen)) return;
    setIsAnimating(true);
    setIsVisible(false);
    stopAutoplay();
  }, [isAnimating, isVideoPlaying, isModalOpen, stopAutoplay]);

  const selectImage = useCallback((index: number): void => {
    if (isAnimating || index === currentIndex || (isVideoPlaying && !isModalOpen)) return;
    setIsAnimating(true);
    targetIndexRef.current = index; 
    setIsVisible(false); 
    stopAutoplay();
  }, [isAnimating, currentIndex, isVideoPlaying, isModalOpen, stopAutoplay]);

  const startAutoplay = useCallback((): void => {
    stopAutoplay(); 
    autoplayTimeoutRef.current = setTimeout(() => {
      if (isPlaying && !isAnimating && !isModalOpen && (!isVideo(images[currentIndex]) || !isVideoPlaying)) {
        nextSlide();
      }
    }, 3000);
  }, [stopAutoplay, isPlaying, isAnimating, isVideoPlaying, images, currentIndex, isVideo, nextSlide, isModalOpen]);

  const startModalAutoplay = useCallback((): void => {
    stopModalAutoplay();
    modalAutoplayTimeoutRef.current = setTimeout(() => {
      if (isModalPlaying && isModalOpen && images.length > 0) {
        const modalVideo = modalVideoRef.current;
        if (!modalVideo || modalVideo.paused) { 
          setCurrentIndex((prev) => (prev + 1) % images.length); 
        }
      }
    }, 3000);
  }, [stopModalAutoplay, isModalPlaying, isModalOpen, images, setCurrentIndex]);
  
  const handleVideoPlay = useCallback((): void => {
    setIsVideoPlaying(true);
    if (isModalOpen) {
      stopModalAutoplay();
    } else {
      stopAutoplay();
    }
  }, [isModalOpen, stopAutoplay, stopModalAutoplay]);

  const handleVideoPause = useCallback((): void => {
    setIsVideoPlaying(false);
    if (!isModalOpen && isPlaying) {
      startAutoplay();
    } else if (isModalOpen && isModalPlaying) {
      // Potentially startModalAutoplay() if modal slideshow should resume on pause
    }
  }, [isModalOpen, isPlaying, isModalPlaying, startAutoplay]);

  const handleVideoEnded = useCallback((): void => {
    setIsVideoPlaying(false);
    if (!isModalOpen && isPlaying) {
      startAutoplay();
    } else if (isModalOpen && isModalPlaying) {
      // Advance modal, assuming shared currentIndex for simplicity
      setCurrentIndex((prev) => (prev + 1) % images.length);
      // Potentially startModalAutoplay() if modal slideshow continues
    }
  }, [isModalOpen, isPlaying, isModalPlaying, startAutoplay, images.length, setCurrentIndex]);

  const handleTransitionEnd = useCallback((): void => {
    if (!isVisible) { // Fade-out has just completed
      let newIndex = currentIndex;
      if (targetIndexRef.current !== null) {
        newIndex = targetIndexRef.current;
        targetIndexRef.current = null; 
      }

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex); 
      } else {
        // If index didn't change (e.g. single image gallery), still need to make it visible and reset animation
        setIsAnimating(false); 
      }
      setIsVisible(true); 

    } else { // Fade-in has just completed (isVisible is true)
      setIsAnimating(false); 
      if (isPlaying && !isModalOpen) {
        if (images.length > 0 && (!isVideo(images[currentIndex]) || !isVideoPlaying)) {
            startAutoplay();
        }
      }
    }
  }, [isVisible, currentIndex, images, setCurrentIndex, isPlaying, isModalOpen, isVideo, isVideoPlaying, startAutoplay]);

  useEffect(() => {
    setIsClient(true);
    return () => {
      stopAutoplay();
      stopModalAutoplay();
    };
  }, [stopAutoplay, stopModalAutoplay]);

  // Effect for main gallery slideshow state changes (isPlaying)
  useEffect(() => {
    if (isPlaying && !isAnimating && !isModalOpen) {
      if (images.length > 0 && (!isVideo(images[currentIndex]) || !isVideoPlaying)) {
        startAutoplay();
      }
    } else {
      stopAutoplay();
    }
  }, [isPlaying, isAnimating, isModalOpen, images, currentIndex, isVideo, isVideoPlaying, startAutoplay, stopAutoplay]);

  // Effect for modal slideshow state changes (isModalPlaying)
   useEffect(() => {
    if (isModalPlaying && isModalOpen) {
      if (images.length > 0 && (!isVideo(images[currentIndex]) /* consider modal video playing state */)) {
        startModalAutoplay();
      }
    } else {
      stopModalAutoplay();
    }
  }, [isModalPlaying, isModalOpen, images, currentIndex, isVideo, startModalAutoplay, stopModalAutoplay]);

  // Effect to reset video state when currentIndex changes
  useEffect(() => {
    if (isClient && images.length > 0) {
      const currentItemIsVideo = isVideo(images[currentIndex]);
      if (currentItemIsVideo) {
        if (!isModalOpen && videoRef.current) {
          videoRef.current.currentTime = 0;
        }
        if (isModalOpen && modalVideoRef.current) {
          modalVideoRef.current.currentTime = 0;
        }
      }
      // Always reset isVideoPlaying when slide changes, video events will set it true if it plays.
      setIsVideoPlaying(false); 
    }
  }, [currentIndex, images, isClient, isVideo, isModalOpen]);

  const openModal = useCallback((): void => {
    stopAutoplay(); // Pause main gallery slideshow
    setIsModalOpen(true);
    setIsModalPlaying(false); // Default modal slideshow to off
    stopModalAutoplay();
  }, [stopAutoplay, stopModalAutoplay]);

  const closeModal = useCallback((): void => {
    setIsModalOpen(false);
    setIsModalPlaying(false);
    stopModalAutoplay();
    if (isPlaying) { // Resume main gallery slideshow if it was on
      startAutoplay();
    }
  }, [isPlaying, startAutoplay, stopModalAutoplay]);

  const scrollThumbnails = useCallback((direction: 'left' | 'right'): void => {
    if (!thumbnailsRef.current) return;
    const scrollAmount = 200; // Adjust as needed
    const currentScroll = thumbnailsRef.current.scrollLeft;
    const newScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;
    thumbnailsRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
  }, []);
  if (!images || images.length === 0) {
    return null;
  }

  return (
    // JSX for Gallery remains largely the same, only the logic within the component changes.
    // The following is the existing JSX structure, ensure it uses the updated state and handlers.
    <div className="space-y-4">
      {/* Main Image/Video Container */}
      <div 
        className="relative aspect-[16/9] overflow-hidden rounded-xl group cursor-pointer"
        onClick={openModal}
        onMouseEnter={() => setShowNavButtons(true)} // Keep nav buttons for thumbnails, this might be for main
        onMouseLeave={() => setShowNavButtons(false)} // Keep nav buttons for thumbnails, this might be for main
      >
        <div className="relative w-full h-full">
          {isClient && isVideo(images[currentIndex]) ? (
            <video
              ref={videoRef}
              autoPlay // Video will autoplay if this attribute is present and not overridden by JS
              loop={false}
              muted
              playsInline
              onEnded={handleVideoEnded}
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              className={`w-full h-full object-contain transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              onTransitionEnd={handleTransitionEnd}
              key={images[currentIndex]} // Ensures video reloads if src changes to a different video
              suppressHydrationWarning
              src={images[currentIndex] || undefined} // Ensure src is not empty string
            />
          ) : (
          <Image
            src={images[currentIndex] || '/placeholder-image.jpg'} // Fallback for image
            alt={`Gallery image ${currentIndex + 1}`}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onTransitionEnd={handleTransitionEnd}
            priority
          />
          )}
        </div>

        {/* Autoplay Button for Main Gallery */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(!isPlaying);
          }}
          className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        >
          {isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
        </button>
      </div>

      {/* Thumbnails with Navigation Buttons */}
      <div className="relative mt-4">
        {/* Previous Thumbnail Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollThumbnails('left'); // This scrolls thumbnails, prevSlide handles main gallery
          }}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 sm:-left-6"
          aria-label="Scroll thumbnails left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        {/* Next Thumbnail Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollThumbnails('right'); // This scrolls thumbnails, nextSlide handles main gallery
          }}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 sm:-right-6"
          aria-label="Scroll thumbnails right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="overflow-hidden px-4 sm:px-8 md:px-0"> {/* Adjust padding for button space */}
          <div 
            ref={thumbnailsRef}
            className="overflow-x-auto hide-scrollbar pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-2 w-max">
              {images.map((image, index) => (
                <div
                  key={`thumb-${index}`}
                  onClick={() => selectImage(index)}
                  className={`relative flex-shrink-0 h-20 sm:h-24 aspect-video rounded-md overflow-hidden cursor-pointer transition-all duration-200 ${
                    index === currentIndex ? 'ring-2 ring-purple-500 ring-offset-1 ring-offset-gray-900' : 'hover:opacity-90'
                  }`}
                  style={{ minWidth: '160px', maxWidth: '200px' }} // Fixed width range for thumbnails
                >
                  {isClient && isVideo(image) ? (
                    <video
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      src={image || undefined} // Ensure src is not empty
                      preload="metadata" // Helps with getting video dimensions/first frame quickly
                    />
                  ) : (
                    <Image
                      src={image || '/placeholder-image.jpg'} // Fallback for image
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 160px, 200px"
                      loading="lazy" // Thumbnails can be lazy-loaded
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }} // Close on backdrop click
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white p-2 hover:text-purple-400 transition-colors z-[101]"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Modal Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Logic for prev slide in modal - assuming it uses same currentIndex for now
              // This will use the main gallery's prevSlide logic which includes animation
              prevSlide(); 
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[101] bg-white/10 backdrop-blur-sm text-white p-3 md:p-4 rounded-full hover:bg-white/20 transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Logic for next slide in modal
              nextSlide();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[101] bg-white/10 backdrop-blur-sm text-white p-3 md:p-4 rounded-full hover:bg-white/20 transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          <div className="relative w-full max-w-5xl mx-auto h-[80vh] flex items-center justify-center p-4">
            {isClient && isVideo(images[currentIndex]) ? (
              <video
                ref={modalVideoRef}
                autoPlay
                loop={false}
                // muted // User might want sound in modal
                playsInline
                onEnded={handleVideoEnded} // Re-use handlers, they check isModalOpen
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                className={`w-full h-full object-contain rounded-lg transition-opacity duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0' // Apply fade to modal content too
                }`}
                onTransitionEnd={handleTransitionEnd} // Re-use transition end for modal content visibility
                controls
                suppressHydrationWarning
                key={`modal-${images[currentIndex]}`} // Ensure modal video also re-renders correctly
                src={images[currentIndex] || undefined}
              />
            ) : (
              <div className={`w-full h-full flex items-center justify-center transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0' // Apply fade to modal content too
              }`}>
                <Image
                  src={images[currentIndex] || '/placeholder-image.jpg'}
                  alt={`Gallery image ${currentIndex + 1}`}
                  width={1200} // Max width
                  height={800} // Max height
                  className="max-w-full max-h-full object-contain rounded-lg"
                  style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
                  onTransitionEnd={handleTransitionEnd} // Re-use transition end for modal content visibility
                />
              </div>
            )}
          </div>

          {/* Modal Autoplay Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsModalPlaying(!isModalPlaying);
            }}
            className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70 transition-colors z-[101]"
          >
            {isModalPlaying ? 'Pause Modal Slideshow' : 'Play Modal Slideshow'}
          </button>
        </div>
      )}
    </div>
  );
}

// Add Modal Component
function Modal({ isOpen, onClose, model }: { isOpen: boolean; onClose: () => void; model: any }) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  if (!isOpen) return null;

  // Check if model has gallery, otherwise use single image
  const mediaItems = model.gallery || [model.image];
  const currentMedia = mediaItems[currentMediaIndex];
  
  const isVideo = (url: string): boolean => {
    if (!url) return false;
    // Check for video file extensions
    if (url.endsWith('.mp4') || url.endsWith('.mov') || url.endsWith('.webm')) {
      return true;
    }
    // Check for external video service URLs
    if (url.includes('youtube.com') || url.includes('youtu.be') || 
        url.includes('vimeo.com') || url.includes('smugmug.com') ||
        url.includes('wistia.com') || url.includes('jwplayer.com') ||
        url.includes('brightcove.com') || url.includes('dailymotion.com')) {
      return true;
    }
    return false;
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const selectMedia = (index: number) => {
    setCurrentMediaIndex(index);
  };

  const getEmbedUrl = (url: string): string => {
    // Convert various video URLs to embeddable format
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    // For other services or direct video files, return as is
    return url;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>

        <div className="inline-block w-full max-w-5xl px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-2xl shadow-xl sm:my-8 sm:align-middle sm:p-6 relative">
          {/* Close Button - Enhanced for Mobile */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 sm:top-4 sm:right-4 sm:bg-transparent sm:hover:bg-gray-100 sm:shadow-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Media Carousel Section */}
            <div className="space-y-4">
              {/* Main Media Display */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                {mediaItems.length > 1 && (
                  <>
                    {/* Previous Button */}
                    <button
                      onClick={prevMedia}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                      aria-label="Previous media"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    {/* Next Button */}
                    <button
                      onClick={nextMedia}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                      aria-label="Next media"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {isVideo(currentMedia) ? (
                  // Check if it's an external video service that needs iframe
                  (currentMedia.includes('youtube.com') || currentMedia.includes('youtu.be') || 
                   currentMedia.includes('vimeo.com')) ? (
                    <iframe
                      src={getEmbedUrl(currentMedia)}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      key={currentMedia}
                    />
                  ) : (
                    <video
                      src={currentMedia}
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      key={currentMedia}
                    />
                  )
                ) : (
                  <Image
                    src={currentMedia}
                    alt={model.title}
                    fill
                    className="object-cover"
                  />
                )}

                {/* Media Counter */}
                {mediaItems.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {currentMediaIndex + 1} / {mediaItems.length}
                  </div>
                )}
              </div>

              {/* Thumbnails - Always show for better UX */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {mediaItems.map((media: string, index: number) => (
                  <div
                    key={index}
                    onClick={() => selectMedia(index)}
                    className={`relative flex-shrink-0 w-16 h-12 rounded cursor-pointer overflow-hidden transition-all duration-200 ${
                      index === currentMediaIndex 
                        ? 'ring-2 ring-purple-500 ring-offset-2' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    {isVideo(media) ? (
                      // For video thumbnails, show actual video frame
                      <div className="relative w-full h-full">
                        <video
                          src={media}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          preload="metadata"
                        />
                        {/* Small video indicator */}
                        <div className="absolute top-1 right-1 w-3 h-3 bg-black/70 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[3px] border-l-white border-y-[1.5px] border-y-transparent ml-0.5"></div>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={media}
                        alt={`${model.title} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.title}</h3>
              
              <div className="prose prose-lg">
                {model.features && model.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {model.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {model.specs && model.specs.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Technical Specifications:</h4>
                    <ul className="space-y-2">
                      {model.specs.map((spec: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {model.bestFor && model.bestFor.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Best For:</h4>
                    <ul className="space-y-2">
                      {model.bestFor.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {model.links && model.links.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Learn More:</h4>
                    <div className="space-y-2">
                      {model.links.map((link: any, index: number) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 inline-flex items-center gap-2 transition-colors"
                        >
                          {link.title}
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Book This Model Button */}
              <div className="mt-8">
                <Link
                  href="/#contact"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-200 inline-flex items-center justify-center"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RelatedBlogs({ service }: { service: Service }) {
  // Get service slug as the product tag
  // Get service slug as the product tag and ensure it matches blog tag format
  const serviceTag = service.slug.toLowerCase().replace(/\s+/g, '-');

  const relatedBlogs = getAllBlogs()
    .filter(blog => 
      blog.productTags.some(tag => 
        tag === serviceTag
      )
    );

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (relatedBlogs.length === 0) return null;

  return (
    <div className="mt-16 w-full overflow-hidden">
      <h2 className="text-2xl font-bold text-white mb-8">Related Blog & Case Studies Posts</h2>
      <div className="relative w-full">
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="overflow-hidden px-10">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {relatedBlogs.map((blog) => (
              <article 
                key={blog.id}
                className="flex-none w-[240px] sm:w-[280px] md:w-[320px] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-purple-500/10 transition-all duration-300 relative z-20"
              >
                <Link href={`/blog/${blog.slug}`}>
                  <div className="relative h-32 sm:h-40">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {blog.productTags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 text-purple-400"
                        >
                          {tag.replace(/-/g, ' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicePageContent() {
  const { slug } = useParams();
  const service = services[slug as keyof typeof services];
  const [selectedModel, setSelectedModel] = useState<any>(null);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
          <Link
            href="/#services"
            className="text-orange-600 hover:text-orange-700 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

      return (
    <main className="pt-24 pb-32 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-white-600 hover:text-blue-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[2/1] rounded-xl overflow-hidden mb-12">
          {service.image.endsWith('.mp4') ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={service.image} type="video/mp4" />
            </video>
          ) : (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">{service.title}</h1>
            <p className="text-sm sm:text-lg lg:text-xl text-white/90 line-clamp-3">{service.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">About this Service</h2>
            <div className="prose prose-lg max-w-none prose-p:text-gray-300">
              {service.fullDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Related Blog Section */}
            <RelatedBlogs service={service} />

     
            
          </div>

          <div className="w-full">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 lg:sticky lg:top-24 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Features</h3>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-base leading-relaxed break-words">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 inline-flex items-center justify-center font-semibold text-lg shadow-lg hover:shadow-purple-500/25"
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>

        {/* Model Cards Section */}
        {(slug === 'photobooth-gif' || slug === 'ai-photo-booth' || 
          slug === 'video-booth' || slug === 'livestreaming' || 
          slug === 'custom-photo-print' || slug === 'roaming-photo-booth' ||
          slug === 'decoration' || slug === 'audio-rental' ||
          slug === 'interactive-display' || slug === 'photo-video-documentation' ||
          slug === 'virtual-photo-booth' || slug === 'virtual-reality' || 
          slug === 'photobox' || slug === 'invitation-digitalguestbook' || 
          slug === 'light-painting') && service.models && (
          <div className="mb-16 relative">
            <h2 className="text-2xl font-bold text-white-900 mb-6">Choose Your Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.models.map((model, index) => (
                <div key={index} className="group [perspective:1000px]">
                  <div className="relative aspect-square transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front of Card */}
                    <div className="absolute inset-0">
                      <div className="h-full rounded-xl overflow-hidden shadow-lg relative">
                        <div className="h-full">
                          <Image
                            src={model.image}
                            alt={model.title}
                            fill
                            className="object-cover"
                          />
                                                  </div>
                        {/* Coming Soon overlay service page */}     
                        {((slug === 'virtual-reality' && model.title === 'VR Games & Entertainment') || 
                          (slug === 'invitation-digitalguestbook' && model.title === 'Digital Guestbook') || 
                          (slug === 'invitation-digitalguestbook' && model.title === 'Website Invitation')) && (
                          <div className="absolute inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm">
                            <div className="text-center">
                              <h3 className="text-4xl font-bold text-white mb-4">Coming Soon</h3>
                              <p className="text-xl text-white/80">This experience will be available shortly!</p>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/40 to-transparent">
                          <h3 className="text-xl font-semibold text-white text-center">{model.title}</h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of Card */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-orange-50 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">{model.title}</h3>
                          <p className="text-gray-600">{model.details}</p>
                        </div>
                        <button
                          onClick={() => setSelectedModel(model)}
                          className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal */}
            <Modal
              isOpen={selectedModel !== null}
              onClose={() => setSelectedModel(null)}
              model={selectedModel}
            />
          </div>
        )}

        {/* Output Samples Section */}
        {service.outputSamples && service.outputSamples.length > 0 && (
          <div className="mt-16 mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Output Samples</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.outputSamples.map((sample, index) => (
                <div 
                  key={index} 
                  className="rounded-xl overflow-hidden shadow-lg group relative aspect-square cursor-pointer"
                  onClick={() => {
                    const modal = document.getElementById('output-sample-modal');
                    const modalContent = document.getElementById('output-sample-modal-content');
                    if (modal && modalContent) {
                      if (sample.type === 'video') {
                        modalContent.innerHTML = `
                          <video
                            src="${sample.image}"
                            autoplay
                            loop
                            controls
                            class="max-w-full max-h-[80vh] rounded-lg object-contain"
                          ></video>
                        `;
                      } else {
                        modalContent.innerHTML = `
                          <img
                            src="${sample.image}"
                            alt="${sample.title}"
                            class="max-w-full max-h-[80vh] rounded-lg object-contain"
                          />
                        `;
                      }
                      modal.classList.remove('hidden');
                    }
                  }}
                >
                  <div className="relative w-full h-full">
                    {sample.type === 'video' ? (
                      <video
                        src={sample.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-contain"
                        onLoadedData={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.play().catch(err => console.log('Video play failed:', err));
                        }}
                        onEnded={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.currentTime = 0;
                          video.play().catch(err => console.log('Video play failed:', err));
                        }}
                      />
                    ) : (
                      <Image
                        src={sample.image}
                        alt={sample.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    {/* Overlay with title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white text-lg font-medium">{sample.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link 
                href={`/lookbook`}
                className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2"
              >
                See more in Lookbook
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Output Sample Modal/Lightbox */}
            <div
              id="output-sample-modal"
              className="fixed inset-0 bg-black/90 z-[100] hidden flex items-center justify-center"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  e.currentTarget.classList.add('hidden');
                  const modalContent = document.getElementById('output-sample-modal-content');
                  if (modalContent) {
                    modalContent.innerHTML = '';
                  }
                }
              }}
            >
              <button
                onClick={() => {
                  const modal = document.getElementById('output-sample-modal');
                  const modalContent = document.getElementById('output-sample-modal-content');
                  if (modal) {
                    modal.classList.add('hidden');
                  }
                  if (modalContent) {
                    modalContent.innerHTML = '';
                  }
                }}
                className="absolute top-4 right-4 text-white p-2 hover:text-purple-400 transition-colors z-[101]"
              >
                <X className="w-8 h-8" />
              </button>
              <div id="output-sample-modal-content" className="relative max-w-5xl mx-4 flex items-center justify-center">
                {/* Content will be dynamically inserted here */}
              </div>
            </div>
          </div>
        )}

        {/* Backdrop Selection Section - Only for Photobooth GIF */}
        {slug === 'photobooth-gif' && service.backdrops && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white-900 mb-6">Choose Your Backdrop</h2>
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={() => {
                  const container = document.getElementById('backdrop-thumbnails')
                  if (container) {
                    container.scrollBy({
                      left: -300,
                      behavior: 'smooth'
                    })
                  }
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => {
                  const container = document.getElementById('backdrop-thumbnails')
                  if (container) {
                    container.scrollBy({
                      left: 300,
                      behavior: 'smooth'
                    })
                  }
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Thumbnails Container */}
              <div 
                id="backdrop-thumbnails"
                className="flex overflow-x-auto scrollbar-hide gap-4 scroll-smooth pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {service.backdrops.map((backdrop, index) => (
                  <div
                    key={index}
                    className="flex-none w-48 cursor-pointer group"
                    onClick={() => {
                      const modal = document.getElementById('backdrop-modal')
                      const modalImage = document.getElementById('backdrop-modal-image') as HTMLImageElement
                      if (modal && modalImage) {
                        modalImage.src = backdrop.image
                        modal.classList.remove('hidden')
                      }
                    }}
                  >
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                      <Image
                        src={backdrop.image}
                        alt={backdrop.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 p-3">
                        <h3 className="text-white font-medium">{backdrop.title}</h3>
                        <p className="text-white/80 text-sm">{backdrop.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backdrop Modal */}
            <div
              id="backdrop-modal"
              className="fixed inset-0 bg-black/90 z-50 hidden flex items-center justify-center"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  e.currentTarget.classList.add('hidden')
                }
              }}
            >
              <button
                onClick={() => {
                  const modal = document.getElementById('backdrop-modal')
                  if (modal) {
                    modal.classList.add('hidden')
                  }
                }}
                className="absolute top-4 right-4 text-white p-2 hover:text-purple-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative w-full max-w-4xl mx-4">
                <Image
                  id="backdrop-modal-image"
                  src=""
                  alt="Backdrop Preview"
                  width={1200}
                  height={800}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {service.gallery && service.gallery.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white-900 mb-6">Gallery</h2>
            <Gallery images={service.gallery} />
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white-900 mb-4">Ready to Book This Service?</h3>
          <p className="text-white-200 mb-8 max-w-2xl mx-auto">
            Contact us now to check availability and get a custom quote for your event.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors text-lg font-semibold"
          >
            Book Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function ServicePage() {
  // This page should be redirected by middleware to /id/services/[slug]
  redirect('/id/services')
}
