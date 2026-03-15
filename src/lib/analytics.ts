// Google Analytics utilities for GA4

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not found');
    return;
  }

  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    (window as any).dataLayer = (window as any).dataLayer || [];
    // eslint-disable-next-line prefer-rest-params
    (window as any).dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: title,
    page_location: url,
  });
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Specific event tracking for your photo booth business
export const trackBookingInterest = (service: string) => {
  trackEvent('booking_interest', 'engagement', service);
};

export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submit', 'conversion', formType);
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', 'engagement', 'contact');
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', 'engagement', serviceName);
};

export const trackGalleryView = (galleryType: string) => {
  trackEvent('gallery_view', 'engagement', galleryType);
}; 