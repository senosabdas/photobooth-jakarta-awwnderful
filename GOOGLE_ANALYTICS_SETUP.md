# Google Analytics Setup Guide

This project has been configured with Google Analytics 4 (GA4) tracking. Follow these steps to complete the setup:

## 1. Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property (or use an existing one)
3. In your GA4 property, go to **Admin** → **Data Streams**
4. Select your web data stream (or create one if you haven't)
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

## 2. Set Up Environment Variable

Create a `.env.local` file in the `awwnderful-photobooth` directory and add:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-G3665MS2CF
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

## 3. What's Already Configured

✅ **Google Analytics Component**: Automatically loads GA4 scripts and tracks page views
✅ **Custom Event Tracking**: Pre-built functions for tracking business-specific events
✅ **Next.js Integration**: Properly integrated with your internationalized Next.js app
✅ **Route Tracking**: Automatically tracks navigation between pages

## 4. Available Tracking Functions

The following tracking functions are available throughout your app:

```typescript
import { 
  trackBookingInterest, 
  trackFormSubmission, 
  trackWhatsAppClick, 
  trackServiceView, 
  trackGalleryView 
} from '@/lib/analytics'

// Track when someone shows interest in a service
trackBookingInterest('photobooth-premium')

// Track form submissions
trackFormSubmission('contact-form')

// Track WhatsApp clicks
trackWhatsAppClick()

// Track service page views
trackServiceView('wedding-photobooth')

// Track gallery interactions
trackGalleryView('lookbook')
```

## 5. Testing Your Setup

1. Add your Measurement ID to `.env.local`
2. Run your development server: `npm run dev`
3. Open your website in a browser
4. Check the browser's developer console - you should see Google Analytics loading
5. In Google Analytics, go to **Reports** → **Realtime** to see live traffic

## 6. Production Deployment

Make sure to add the `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable to your hosting platform (Vercel, Netlify, etc.).

## 7. Privacy Considerations

- The current setup respects user privacy by only tracking essential analytics
- Consider adding a cookie consent banner if required by your jurisdiction
- GA4 is designed to be more privacy-focused than previous versions

## 8. Adding More Tracking

To add custom event tracking to your components, import the tracking functions:

```typescript
import { trackEvent } from '@/lib/analytics'

// Custom event tracking
const handleButtonClick = () => {
  trackEvent('button_click', 'engagement', 'hero-cta')
}
```

Your Google Analytics is now ready to track website performance and user engagement! 