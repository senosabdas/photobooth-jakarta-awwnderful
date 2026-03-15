import { Metadata } from 'next'
import { Language } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: { locale: Language } }): Promise<Metadata> {
  const { locale } = params
  
  if (locale === 'id') {
    return {
      title: 'Portfolio & Gallery - Lookbook Hasil Photobooth | Awwnderful Photo Booth',
      description: 'Lihat galeri dan portfolio hasil photobooth terbaik kami. Berbagai jenis photobooth untuk wedding, corporate event, brand activation, dan celebration di Jakarta & Indonesia. Inspirasi untuk event Anda!',
      keywords: 'portfolio photobooth, galeri photobooth, hasil photobooth, contoh photobooth, photobooth wedding, photobooth corporate, photobooth brand activation, inspirasi photobooth jakarta',
      openGraph: {
        title: 'Portfolio & Gallery - Lookbook Hasil Photobooth | Awwnderful Photo Booth',
        description: 'Lihat galeri dan portfolio hasil photobooth terbaik kami untuk berbagai jenis event.',
        url: `https://awwnderful.com/id/lookbook`,
        siteName: 'Awwnderful Photo Booth',
        locale: 'id_ID',
        type: 'website',
      }
    }
  }
  
  // English metadata
  return {
    title: 'Portfolio & Gallery - Photo Booth Lookbook | Awwnderful Photo Booth',
    description: 'View our gallery and portfolio of the best photo booth results. Various types of photo booths for weddings, corporate events, brand activations, and celebrations in Jakarta & Indonesia. Get inspired for your event!',
    keywords: 'photo booth portfolio, photo booth gallery, photo booth results, photo booth examples, wedding photo booth, corporate photo booth, brand activation photo booth, jakarta photo booth inspiration',
    openGraph: {
      title: 'Portfolio & Gallery - Photo Booth Lookbook | Awwnderful Photo Booth',
      description: 'View our gallery and portfolio of the best photo booth results for various types of events.',
      url: `https://awwnderful.com/en/lookbook`,
      siteName: 'Awwnderful Photo Booth',
      locale: 'en_US',
      type: 'website',
    }
  }
}

export default function LookbookLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
} 