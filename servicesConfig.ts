// Services configuration - single source of truth
export const servicesConfig = {
  'photobox': {
    title: 'Photobox',
    description: 'Your all in one photobox solutions beeaa',
    slug: 'photobox',
    icon: 'Camera', // Icon name as string since we can't import here
    media: {
      type: 'image' as const,
      src: '/images/services/boothbox/photobox-setup-1.jpg'
    }
  },
  'photobooth-gif': {
    title: 'Photobooth GIF',
    description: 'Photobooth GIF is a photo booth service that allows you to create a GIF of your photos.',
    slug: 'photobooth-gif',
    icon: 'Camera',
    media: {
      type: 'image' as const,
      src: '/images/services/photobooth-gif/setup-dslrbooth-gallery-1.jpg'
    }
  },
  'roaming-photo-booth': {
    title: 'Roaming Photo Booth',
    description: 'Mobile photobooth experience that goes where the fun is!',
    slug: 'roaming-photo-booth',
    icon: 'Camera',
    media: {
      type: 'image' as const,
      src: '/images/services/roaming-photo-booth/Printout-result.jpg'
    }
  },
  '360-video-booth': {
    title: '360 Video Booth',
    description: '-',
    slug: '360-video-booth',
    icon: 'Video',
    media: {
      type: 'video' as const,
      src: '/images/lookbook/360booth-video-1.mp4',
      thumbnail: '/images/services/360-video-booth/gallery-1.jpg'
    }
  },
  'hashtag-printer': {
    title: 'Hashtag Printer',
    description: 'Turn your event\'s social media presence into instant physical memories with our Hashtag Printer service.',
    slug: 'hashtag-printer',
    icon: 'Hash',
    media: {
      type: 'image' as const,
      src: '/images/services/hashtag-printer-hero.jpg'
    }
  },
  'virtual-photo-booth': {
    title: 'Virtual Photo Booth',
    description: 'Digital photo booth experience for online events',
    slug: 'virtual-photo-booth',
    icon: 'Monitor',
    media: {
      type: 'video' as const,
      src: '/images/services/virtual-photo-booth/virtual-photo-booth-hero.mp4'
    }
  },
  'video-booth': {
    title: 'Video Booth',
    description: 'Capture video messages and reactions',
    slug: 'video-booth',
    icon: 'Video',
    media: {
      type: 'image' as const,
      src: '/images/services/video-booth/videobooth-setup-1.jpg'
    }
  },
  'livestreaming': {
    title: 'Livestreaming',
    description: 'Broadcast your event to a wider audience',
    slug: 'livestreaming',
    icon: 'Radio',
    media: {
      type: 'image' as const,
      src: '/images/services/livestreaming/awwnderful-livestreaming-setup-3.jpg'
    }
  },
  'multicamera': {
    title: 'MultiCamera',
    description: 'Capture every angle of your special moments',
    slug: 'multicamera',
    icon: 'Camera',
    media: {
      type: 'video' as const,
      src: '/images/lookbook/multicamera-photo-greenscreen-1.mp4',
      thumbnail: '/images/services/multicamera/awwnderful-multicamera-setup-4.jpg'
    }
  },
  'ai-photo-booth': {
    title: 'AI photo booth',
    description: 'Next-generation photo experiences with AI',
    slug: 'ai-photo-booth',
    icon: 'Zap',
    media: {
      type: 'video' as const,
      src: '/images/lookbook/fxbooth-photo-ai-1.mp4',
      thumbnail: '/images/services/ai-photo-booth/ai-mini_figure_toy.png'
    }
  },
  'custom-photo-print': {
    title: 'Custom photo print',
    description: "Give your guests a one-of-a-kind souvenir they'll actually want to keep!",
    slug: 'custom-photo-print',
    icon: 'Printer',
    media: {
      type: 'image' as const,
      src: '/images/services/custom-photo-print/hologram-print-sample-3.jpg'
    }
  },
  'decoration': {
    title: 'Decoration',
    description: 'A Decoration service that allows you to create a beautiful and unique decoration for your event.',
    slug: 'decoration',
    icon: 'Palette',
    media: {
      type: 'image' as const,
      src: '/images/services/wedding-decoration/wedding-decoration-1.jpg'
    }
  },
  'photo-video-documentation': {
    title: 'Photo & Video Documentation',
    description: 'Professional photo and video documentation services for your special moments.',
    slug: 'photo-video-documentation',
    icon: 'Camera',
    media: {
      type: 'image' as const,
      src: '/images/services/photo-video-documentation/photographer-1.jpg'
    }
  },
  'light-painting': {
    title: 'Light painting',
    description: 'Lightpainting style create unique effects on your photos.',
    slug: 'light-painting',
    icon: 'Share2',
    media: {
      type: 'video' as const,
      src: '/images/lookbook/multicamera-photo-lightpainting-1.mp4',
      thumbnail: '/images/lookbook/fxbooth-photo-lightpainting-1.jpg'
    }
  },
  'audio-rental': {
    title: 'Audio Rental',
    description: 'Professional sound systems for your events with multiple power options.',
    slug: 'audio-rental',
    icon: 'Share2',
    media: {
      type: 'image' as const,
      src: '/images/services/audio-rental/sewaaudio-setup-1.jpg'
    }
  },
  'interactive-display': {
    title: 'Interactive Display',
    description: 'Engaging digital displays for your events',
    slug: 'interactive-display',
    icon: 'Share2',
    media: {
      type: 'image' as const,
      src: '/images/services/Interactive-display/photo-slideshow-1.jpg'
    }
  },
  'invitation-digitalguestbook': {
    title: 'Invitation & Digital Guestbook',
    description: 'Digital invitations and interactive guestbook for your events',
    slug: 'invitation-digitalguestbook',
    icon: 'Share2',
    media: {
      type: 'image' as const,
      src: '/images/services/invitation-digitalguestbook/digitalguestbook-setup-1.jpg'
    }
  },
  'virtual-reality': {
    title: 'Virtual Reality',
    description: 'Immersive VR experiences for your events',
    slug: 'virtual-reality',
    icon: 'Share2',
    media: {
      type: 'image' as const,
      src: '/images/services/virtual-reality/vr-setup-1.webp'
    }
  }
} as const;

// Export individual service configs for easy access
export const getServiceConfig = (slug: string) => servicesConfig[slug as keyof typeof servicesConfig];
export const getAllServiceConfigs = () => Object.values(servicesConfig); 