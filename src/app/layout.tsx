import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://awwnderful.com'),
  title: "Awwnderful Photo Booth - Sewa Photobooth Jakarta, Bogor, Depok, Tangerang dan sekitarnya",
  description: "Sewa photobooth untuk wedding, ulang tahun, acara kantor dan event activation di Jakarta, Bogor, Depok, Tangerang dan sekitarnya.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Awwnderful Photo Booth - Sewa Photobooth Jakarta, Bogor, Depok, Tangerang dan sekitarnya",
    description: "Sewa photobooth untuk wedding, ulang tahun, acara kantor dan event activation di Jakarta, Bogor, Depok, Tangerang dan sekitarnya.",
    url: "https://awwnderful.com",
    siteName: "Awwnderful Photo Booth",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awwnderful Photo Booth - Sewa Photobooth Jakarta, Bogor, Depok, Tangerang dan sekitarnya",
    description: "Sewa photobooth untuk wedding, ulang tahun, acara kantor dan event activation di Jakarta, Bogor, Depok, Tangerang dan sekitarnya.",
  },
  alternates: {
    canonical: "https://awwnderful.com",
    languages: {
      'id': '/id',
      'en': '/',
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
        
        {/* Structured Data for Business */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Awwnderful Photo Booth",
              "description": "Photo booth rental services in Jakarta, Bogor, Depok, Tangerang and surrounding areas",
              "url": "https://awwnderful.com",
              "telephone": "+6287772566170",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.200000,
                "longitude": 106.816666
              },
              "sameAs": [
                "https://instagram.com/awwnderful",
                "https://facebook.com/awwnderful",
                "https://tiktok.com/@awwnderful"
              ],
              "priceRange": "Rp 2.000.000 – Rp 7.000.000",
              "openingHours": "Mo-Su 08:00-22:00",
              "image": "https://awwnderful.com/images/photo-booth-gif-all-jakarta.webp",
              "serviceType": "Photo Booth Rental",
              "areaServed": [
                { "@type": "City", "name": "Jakarta" },
                { "@type": "City", "name": "Bogor" },
                { "@type": "City", "name": "Depok" },
                { "@type": "City", "name": "Tangerang" },
                { "@type": "City", "name": "Bekasi" }
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
