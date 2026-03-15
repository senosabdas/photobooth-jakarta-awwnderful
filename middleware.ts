import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip middleware for static assets and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/videos') ||
    pathname.startsWith('/sounds') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next()
  }

  // Allow clean city URLs without locale
  const cleanAllowed = [
    '/sewa-photo-booth-jakarta',
    '/photo-booth-wedding-jakarta',
    '/photo-booth-360-jakarta',
    '/rental-photo-booth-terdekat',
    '/harga-sewa-photo-booth-jakarta',
    '/photo-booth-event-jakarta',
    '/photo-booth-high-angle-jakarta',
    '/photo-booth-keliling-jakarta',
    '/camera-disposable-digital-jakarta',
    '/internal/sitemap'
  ]
  if (cleanAllowed.includes(pathname)) {
    return NextResponse.next()
  }

  // Redirect locale-prefixed versions to the clean canonical
  const localeRedirects: Record<string, string> = {
    '/id/sewa-photo-booth-jakarta': '/sewa-photo-booth-jakarta',
    '/en/sewa-photo-booth-jakarta': '/sewa-photo-booth-jakarta',
    '/id/photo-booth-wedding-jakarta': '/photo-booth-wedding-jakarta',
    '/en/photo-booth-wedding-jakarta': '/photo-booth-wedding-jakarta',
    '/id/photo-booth-360-jakarta': '/photo-booth-360-jakarta',
    '/en/photo-booth-360-jakarta': '/photo-booth-360-jakarta',
    '/id/rental-photo-booth-terdekat': '/rental-photo-booth-terdekat',
    '/en/rental-photo-booth-terdekat': '/rental-photo-booth-terdekat',
    '/id/harga-sewa-photo-booth-jakarta': '/harga-sewa-photo-booth-jakarta',
    '/en/harga-sewa-photo-booth-jakarta': '/harga-sewa-photo-booth-jakarta',
    '/id/photo-booth-event-jakarta': '/photo-booth-event-jakarta',
    '/en/photo-booth-event-jakarta': '/photo-booth-event-jakarta',
    '/id/photo-booth-high-angle-jakarta': '/photo-booth-high-angle-jakarta',
    '/en/photo-booth-high-angle-jakarta': '/photo-booth-high-angle-jakarta',
    '/id/photo-booth-keliling-jakarta': '/photo-booth-keliling-jakarta',
    '/en/photo-booth-keliling-jakarta': '/photo-booth-keliling-jakarta',
    '/id/kamera-disposable-digital-jakarta': '/kamera-disposable-digital-jakarta',
    '/en/kamera-disposable-digital-jakarta': '/kamera-disposable-digital-jakarta'
  }
  if (localeRedirects[pathname]) {
    const url = new URL(localeRedirects[pathname], request.url)
    return NextResponse.redirect(url)
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = ['id', 'en'].some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If no locale, redirect to Indonesian (default)
  if (!pathnameHasLocale) {
    const newUrl = new URL(`/id${pathname === '/' ? '' : pathname}`, request.url)
    return NextResponse.redirect(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Apply middleware to all routes except static files
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 