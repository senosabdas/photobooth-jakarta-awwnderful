import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState, useRef } from 'react'

const testimonials = [
  {
    name: 'Amanda',
    event: 'Wedding Livestream',
    image: '/images/testimonial-photo-booth-jakarta/amanda.png',
    quote: 'Terimakasih banyak yaa.. happy sekali. kakak aku juga happy, aku jd nonton lg yang akad juga',
    rating: 5
  },
  {
    name: 'Dafi & Siti',
    event: 'Wedding',
    image: '/images/testimonial-photo-booth-jakarta/dafisiti.webp',
    quote: 'Hasil fotonya bagus sekali',
    rating: 5
  },
  {
    name: 'Utha & Prili',
    event: 'Wedding',
    image: '/images/testimonial-photo-booth-jakarta/prili.webp',
    quote: 'Hasil foto-fotonya bagus bangettt. semuanya happy. Thank you kak',
    rating: 5
  },
  {
    name: 'Yusuf',
    event: 'Event ASMIHA',
    image: '/images/testimonial-photo-booth-jakarta/asmiha.png',
    quote: 'Overall kami puas bekerja sama dengan Awwnderful',
    rating: 5
  },
  {
    name: 'Adhanti',
    event: 'Wedding',
    image: '/images/testimonial-photo-booth-jakarta/adhanti.webp',
    quote: 'Makasih banyak buat service dan fotonya bagus2 bgt',
    rating: 5
  }
]

export default function TestimonialSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return

    const scrollAmount = 400 // Adjust this value to control scroll distance
    const currentScroll = sliderRef.current.scrollLeft
    const newScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount

    sliderRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    })

    // Update scroll buttons visibility after scrolling
    setTimeout(() => {
      if (!sliderRef.current) return
      setCanScrollLeft(sliderRef.current.scrollLeft > 0)
      setCanScrollRight(
        sliderRef.current.scrollLeft < 
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth
      )
    }, 300)
  }

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Happy Friends
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            See what our clients say about their photo booth experience
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Testimonials Slider */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 scroll-smooth pb-4 max-w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-gray-300 text-sm">{testimonial.event}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-purple-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 