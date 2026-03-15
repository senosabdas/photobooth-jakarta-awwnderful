'use client'

import Image from 'next/image'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { ChevronDown, Play, X } from 'lucide-react'
import { createRoot } from 'react-dom/client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { trackGalleryView } from '@/lib/analytics'

type MediaType = 'image' | 'video' | 'gif'

interface GalleryItem {
  id: number
  src: string
  alt: string
  experience: string[]
  eventType: string
  product: string
  mediaType: MediaType
  thumbnail?: string // Optional thumbnail for videos
  aspectRatio?: string
}

type FilterDropdownProps = {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

function FilterDropdown({ label, options, value, onChange }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (option: string) => {
    onChange(option)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="w-full px-4 py-2 text-left bg-white/5 backdrop-blur-sm border border-gray-700 rounded-lg shadow-sm hover:bg-white/10 focus:outline-none"
      >
        <div className="flex items-center justify-between">
          <span className="block truncate">
            <span className="text-gray-400">{label}:</span>{" "}
            <span className="text-white">{value}</span>
          </span>
          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg">
          <ul className="py-1 max-h-60 overflow-auto">
            {options.map((option) => (
              <li
                key={option}
                className={`px-4 py-2 cursor-pointer hover:bg-purple-500/20 ${
                  value === option ? 'bg-purple-500/30 text-purple-300' : 'text-gray-300'
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const galleryItems: GalleryItem[] = [
  // 360 VIDEO BOOTH ----------------------------------------------------------------- START  
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/videobooth-360-1.mp4",
    alt: "AMD Ryzen launch event",
    experience: ["360 Video"],
    eventType: "Brand Activation",
    product: "360 Video Booth",
    mediaType: "video" as MediaType,
    
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/videobooth-360-2.mp4",
    alt: "Shahnaz Anindya Baby Shower",
    experience: ["360 Video"],
    eventType: "Party",
    product: "360 Video Booth",
    mediaType: "video" as MediaType, 
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/videobooth-360-3.mp4",
    alt: "Allianz Formula E",
    experience: ["360 Video"],
    eventType: "Brand Activation",
    product: "360 Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/videobooth-360-4.mp4",
    alt: "Telkomsel Point Festival",
    experience: ["360 Video"],
    eventType: "Brand Activation",
    product: "360 Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/videobooth-360-5.mp4",
    alt: "Milo Activ Indonesia Race",
    experience: ["360 Video"],
    eventType: "Brand Activation",
    product: "360 Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/videobooth-360-7.mp4",
    alt: "Cita Buana Teacher Day",
    experience: ["360 Video"],
    eventType: "School Event",
    product: "360 Video Booth",
    mediaType: "video" as MediaType,
  },


  // 360 VIDEO BOOTH ----------------------------------------------------------------- END
  // MULTICAMERA BOOTH ----------------------------------------------------------------- START  
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-confetti-1.mp4",
    alt: "Birthday celebration photos",
    experience: ["Props : Confetti"],
    eventType: "Birthday Party",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-boomerang-greenscreen-1.mp4",
    alt: "CityFest 2019",
    experience: ["Greenscreen"],
    eventType: "Brand Activation",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-greenscreen-1.mp4",
    alt: "CityFest 2019",
    experience: ["Greenscreen"],
    eventType: "Brand Activation",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-greenscreen-2.mp4",
    alt: "BWA Charity Event",
    experience: ["Greenscreen"],
    eventType: "Corporate",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-greenscreen-3.mp4",
    alt: "JPCC Presence Day",
    experience: ["Greenscreen"],
    eventType: "Corporate",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-greenscreen-4.mp4",
    alt: "Federal Lubricant Gathering",
    experience: ["Greenscreen"],
    eventType: "Corporate",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-greenscreen-5.mp4",
    alt: "XYZ game festival",
    experience: ["Greenscreen"],
    eventType: "School Event",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-greenscreen-6.mp4",
    alt: "BWE Mall",
    experience: ["Greenscreen"],
    eventType: "Brand Activation",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-greenscreen-7.mp4",
    alt: "Federal Lubricant Gathering",
    experience: ["Greenscreen"],
    eventType: "Corporate",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-greenscreen-8.mp4",
    alt: "PLN Lenteng Agung",
    experience: ["Greenscreen"],
    eventType: "Corporate",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-greenscreen-9.mp4",
    alt: "Wedding Aldhiya & Willy",
    experience: ["Greenscreen"],
    eventType: "Wedding",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-lightpainting-1.mp4",
    alt: "RnD Development",
    experience: ["Light Painting"],
    eventType: "Brand Activation",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-smooth slowmo-1.mp4",
    alt: "RnD Development",
    experience: ["Slow Motion"],
    eventType: "Brand Activation",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-doubleexposure-1.mp4",
    alt: "RnD Development",
    experience: ["Double Exposure"],
    eventType: "Brand Activation",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-photo-doubleexposure-2.mp4",
    alt: "RnD Development",
    experience: ["Double Exposure"],
    eventType: "Brand Activation",
    product: "Multicamera Booth",
    mediaType: "video" as MediaType
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-printout-1.webp",
    alt: "Wedding Aldhiya & Willy",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Multicamera Booth",
    mediaType: "image" as MediaType
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/multicamera-printout-2.webp",
    alt: "xyz game festival",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Multicamera Booth",
    mediaType: "image" as MediaType
  },
  
  // MULTICAMERA BOOTH ----------------------------------------------------------------- END
  // VIRTUAL BOOTH ----------------------------------------------------------------- START  
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/videobooth-glambooth-1.mp4",
    alt: "Prudential Crown of the Champions",
    experience: ["Video", "Slow Motion"],
    eventType: "Corporate",
    product: "Glam Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/videobooth-glambooth-2.mp4",
    alt: "Prudential Take of to triumph",
    experience: ["Video", "Slow Motion"],
    eventType: "Corporate",
    product: "Glam Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/virtualbooth-1.mp4",
    alt: "Suntory Garuda 9th Anniversary",
    experience: ["Boomerang"],
    eventType: "Corporate",
    product: "Virtual Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/virtualbooth-2.mp4",
    alt: "Jotun Paint Launch",
    experience: ["Boomerang"],
    eventType: "Brand Activation",
    product: "Virtual Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/virtualbooth-3.mp4",
    alt: "PNM 22th Anniversary",
    experience: ["GIF"],
    eventType: "Corporate",
    product: "Virtual Booth",
    mediaType: "video" as MediaType,
  },
  // VIRTUAL BOOTH ----------------------------------------------------------------- END
  // VIDEO BOOTH ----------------------------------------------------------------- START 
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-video-virtual runway-1.mp4",
    alt: "Prambors 50th Anniversary",
    experience: ["Virtual Runway","Greenscreen"],
    eventType: "Brand Activation",
    product: "Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-video-scanning card-1.mp4",
    alt: "Marvel Black Widow",
    experience: ["Scanning Card"],
    eventType: "Brand Activation",
    product: "Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-video-animated photo-2.mp4",
    alt: "Misbah Birthday Party",
    experience: ["Animated Photo"],
    eventType: "Birthday Party",
    product: "Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-video-animated photo-1.mp4",
    alt: "BWA Charity Event",
    experience: ["Animated Photo"],
    eventType: "Corporate",
    product: "Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-video-animated photo-3.mp4",
    alt: "Jakarta Dessert Week 2019",
    experience: ["Animated Photo"],
    eventType: "Brand Activation",
    product: "Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-video-animated photo-4.mp4",
    alt: "Nobar Fast & Furious",
    experience: ["Animated Photo"],
    eventType: "Brand Activation",
    product: "Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-video-animated photo-5.mp4",
    alt: "Urflavor Market",
    experience: ["Animated Photo"],
    eventType: "Brand Activation",
    product: "Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-lightpainting-1.webp",
    alt: "Hennesy Illuminate",
    experience: ["Light Painting"],
    eventType: "Brand Activation",
    product: "Video Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-lightpainting-2.webp",
    alt: "Hennesy Illuminate",
    experience: ["Light Painting"],
    eventType: "Brand Activation",
    product: "Video Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-lightpainting-3.webp",
    alt: "Porsche Launch",
    experience: ["Light Painting"],
    eventType: "Brand Activation",
    product: "Video Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-facemorph-1.mp4",
    alt: "Jakarta Dessert Week 2019",
    experience: ["Animated Photo"],
    eventType: "Brand Activation",
    product: "Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-greenscreen-2.mp4",
    alt: "JPCC Vision day",
    experience: ["GIF","Greenscreen"],
    eventType: "Corporate",
    product: "Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-greenscreen-1.mp4",
    alt: "Charm Cooling Fresh",
    experience: ["Animated Overlay"],
    eventType: "Brand Activation",
    product: "Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-greenscreen-3.mp4",
    alt: "Dendang Arsip Nusantara",
    experience: ["Animated Overlay",],
    eventType: "Brand Activation",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-ai-1.webp",
    alt: "HAKORDIA Bpjs Jamsostek",
    experience: ["AI Style : Disney Cartoon"],
    eventType: "Brand Activation",
    product: "AI Photo Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-ai-2.webp",
    alt: "HAKORDIA Bpjs Jamsostek",
    experience: ["AI Style : Disney Cartoon"],
    eventType: "Wedding",
    product: "AI Photo Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-cinemagraph-1.mp4",
    alt: "Summer Soiree",
    experience: ["Cinemagraph"],
    eventType: "Brand Activation",
    product: "Video Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/fxbooth-photo-cinemagraph-2.mp4",
    alt: "RnD Development",
    experience: ["Cinemagraph"],
    eventType: "Brand Activation",
    product: "Video Booth",
    mediaType: "video" as MediaType,
  },
  
  
  // VIDEO BOOTH ----------------------------------------------------------------- END
  // ROAMING O BOOTH ----------------------------------------------------------------- START  
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-obooth-6.mp4",
    alt: "Artco Festival",
    experience: ["Animated Overlay","GIF"],
    eventType: "Corporate",
    product: "Roaming O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-obooth-5.mp4",
    alt: "Brujas Pikar.id Halloween Event",
    experience: ["Boomerang"],
    eventType: "Brand Activation",
    product: "Roaming O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-obooth-4.webp",
    alt: "Brujas Pikar.id Halloween Event",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Roaming O Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-obooth-3.mp4",
    alt: "Pikar.id Halloween Event",
    experience: ["GIF"],
    eventType: "Brand Activation",
    product: "Roaming O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-obooth-2.mp4",
    alt: "Artco Festival",
    experience: ["Animated Overlay","Boomerang"],
    eventType: "Brand Activation",
    product: "Roaming O Booth",
    mediaType: "video" as MediaType,
  },
  // ROAMING O BOOTH ---------------------------------------------------------------- END
  // ROAMING MULTICAMERA ----------------------------------------------------------------- START
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-multicamera-5.mp4",
    alt: "Food Festival Surabaya",
    experience: ["Boomerang"],
    eventType: "Brand Activation",
    product: "Roaming MultiCamera",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-multicamera-4.mp4",
    alt: "Musikologi 2019",
    experience: ["Boomerang","Intro – Outro Overlay"],
    eventType: "Brand Activation",
    product: "Roaming MultiCamera",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-multicamera-3.mp4",
    alt: "Coffee food Festival Surabaya",
    experience: ["Boomerang"],
    eventType: "Brand Activation",
    product: "Roaming MultiCamera",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-multicamera-2.mp4",
    alt: " Jakarta Dessert Week 2019",
    experience: ["Boomerang"],
    eventType: "Brand Activation",
    product: "Roaming MultiCamera",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-multicamera-1.mp4",
    alt: "The Distinguishing Gentlemans Ride",
    experience: ["Boomerang"],
    eventType: "Brand Activation",
    product: "Roaming MultiCamera",
    mediaType: "video" as MediaType,
  },
  // ROAMING MULTICAMERA ----------------------------------------------------------------- END
 
  // ROAMING DSLR ----------------------------------------------------------------- START
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-DSLR-1.webp",
    alt: "The Distinguishing Gentlemans Ride",
    experience: ["Photo"],
    eventType: "Wedding",
    product: "Roaming DSLR",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-DSLR-2.webp",
    alt: "PPAKK Closing Night",
    experience: ["Photo"],
    eventType: "Corporate",
    product: "Roaming DSLR",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/roaming-DSLR-3.webp",
    alt: "Schlumberger bond to excel",
    experience: ["Photo"],
    eventType: "Corporate",
    product: "Roaming DSLR",
    mediaType: "image" as MediaType,
  },
  // PHOTOBOX -----------------------------------------------------------------   START
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobox-gif-1.mp4",
    alt: "Garnier Roadshow ",
    experience: ["GIF"],
    eventType: "Brand Activation",
    product: "Photobox",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobox-gif-2.mp4",
    alt: "JPCC Worship",
    experience: ["GIF"],
    eventType: "Brand Activation",
    product: "Photobox",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobox-highangle-1.mp4",
    alt: "Whatsapp Business Event",
    experience: ["GIF"],
    eventType: "Brand Activation",
    product: "Photobox",
    mediaType: "video" as MediaType,
  },
  // PHOTOBOX ----------------------------------------------------------------- END

  // PHOTOBOOTH GIF - DSLR BOOTH ----------------------------------------------------------------- START
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-10.webp",
    alt: "The Wedding of Dinar & Raditya",
    experience: ["Photo"],
    eventType: "Wedding",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-9.webp",
    alt: "The Wedding of Dania & Gian",
    experience: ["Photo"],
    eventType: "Wedding",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-8.mp4",
    alt: "The Wedding of Ninda & Dedek",
    experience: ["GIF"],
    eventType: "Wedding",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-7.webp",
    alt: "The Wedding of Dinda & Dedek",
    experience: ["Photo","Glam Filter"],
    eventType: "Wedding",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-6.mp4",
    alt: "The Wedding of Dania & Gian",
    experience: ["GIF"],
    eventType: "Wedding",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-5.webp",
    alt: "Kemenkes Cegah DBD",
    experience: ["Photo"],
    eventType: "Corporate",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-4.webp",
    alt: "The Body Shop",
    experience: ["Photo","Backdrop : Large Sequins Peacock"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-3.webp",
    alt: "Property Guru Indonesia Award 2024",
    experience: ["Photo","Backdrop : Caramel Sequins"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-2.webp",
    alt: "Dikala Senja Rollover Reaction",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-1.webp",
    alt: "Associates Summer Social Allen & Overy Ginting & Reksodiputro",
    experience: ["Photo"],
    eventType: "Corporate",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-11.webp",
    alt: "Blu at IONation",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-12.webp",
    alt: "Promnight MISJ Class of 2019 ",
    experience: ["Photo","Backdrop : Caramel Sequins"],
    eventType: "Prom Night",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-13.webp",
    alt: "Promnight Deutsche School Jakarta 2019 ",
    experience: ["Photo","Backdrop : Black Sequins"],
    eventType: "Prom Night",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-14.mp4",
    alt: "Promnight Deutsche School Jakarta 2019 ",
    experience: ["GIF"],
    eventType: "Prom Night",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-15.webp",
    alt: "Wedding of Amira & Aris ",
    experience: ["Photo Strip","Glam Filter"],
    eventType: "Wedding",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-16.mp4",
    alt: "4th Birthday RollOver Reaction",
    experience: ["GIF","Backdrop : Pink Sequins"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-16-2.webp",
    alt: "4th Birthday RollOver Reaction",
    experience: ["Photo","Backdrop : Pink Sequins"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-17.webp",
    alt: "Aice Booth Indonesia vs Argentina",
    experience: ["Photo","Photo With Celebrity"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-18.webp",
    alt: "i-Dac end year party",
    experience: ["Photo","Photo Strip"],
    eventType: "Corporate",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-19.webp",
    alt: "Fanny 19th Birthday",
    experience: ["Photo","Backdrop : Large Sequins Peacock"],
    eventType: "Birthday Party",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-20.webp",
    alt: "May Halfway",
    experience: ["Photo","Filter : Glam","Backdrop : Solid White"],
    eventType: "Party",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-21.mp4",
    alt: "XL 90's Festival",
    experience: ["GIF","Props : Confetti"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-22.webp",
    alt: "Denzel's Farewell Party",
    experience: ["Photo","Backdrop : Solid White"],
    eventType: "Party",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-23.mp4",
    alt: "Vinca Walk",
    experience: ["Photo","Backdrop : Solid Pink"],
    eventType: "School Event",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-21.mp4",
    alt: "Thamy & Ghani Wedding",
    experience: ["Virtual Props","GIF"],
    eventType: "Wedding",
    product: "Photobooth GIF - O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-25.mp4",
    alt: "INDY Fest 2023",
    experience: ["GIF","Greenscreen"],
    eventType: "Corporate",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-26.webp",
    alt: "INDY Fest 2023",
    experience: ["Photo"],
    eventType: "Corporate",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-27.webp",
    alt: "Phillips Lighting Distributor Meeting ",
    experience: ["Photo"],
    eventType: "Corporate",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
  },
  {
  id: Math.floor(Math.random() * 10000),
  src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-28.webp",
  alt: "Bodyshop Ramadhan launch meeting",
  experience: ["Photo"],
  eventType: "Corporate",
  product: "Photobooth GIF - DSLR Booth",
  mediaType: "image" as MediaType,
  },  
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-29.webp",
    alt: "British School Jakarta Promnight 2024",
    experience: ["Photo"],
    eventType: "Prom Night",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "image" as MediaType,
    },  
    {
      id: Math.floor(Math.random() * 10000),
      src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-30.mp4",
      alt: "British School Jakarta Promnight 2024",
      experience: ["GIF"],
      eventType: "Prom Night",
      product: "Photobooth GIF - DSLR Booth",
      mediaType: "video" as MediaType,
      },
    {
        id: Math.floor(Math.random() * 10000),
        src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-31.webp",
        alt: "Salonpas ionation",
        experience: ["Photo"],
        eventType: "Brand Activation",
        product: "Photobooth GIF - DSLR Booth",
        mediaType: "image" as MediaType,
    }, 
    {
      id: Math.floor(Math.random() * 10000),
      src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-32.mp4",
      alt: "Moet 150th Anniversary",
      experience: ["GIF"],
      eventType: "Brand Activation",
      product: "Photobooth GIF - DSLR Booth",
      mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-33.mp4",
    alt: "LFJ Promnight 2022",
    experience: ["GIF"],
    eventType: "Prom Night",
    product: "Photobooth GIF - DSLR Booth",
    mediaType: "video" as MediaType,
},
{
  id: Math.floor(Math.random() * 10000),
  src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-34.webp",
  alt: "Berrybenka Grand Opening",
  experience: ["Photo"],
  eventType: "Brand Activation",
  product: "Photobooth GIF - DSLR Booth",
  mediaType: "image" as MediaType,
},
{
  id: Math.floor(Math.random() * 10000),
  src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-35.mp4",
  alt: "Bal des lycens Promnight 2019",
  experience: ["GIF","Backdrop : Caramel Sequins"],
  eventType: "Prom Night",
  product: "Photobooth GIF - DSLR Booth",
  mediaType: "video" as MediaType,
},
{
  id: Math.floor(Math.random() * 10000),
  src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-36.mp4",
  alt: "Pikar.ID Boca liente series",
  experience: ["GIF"],
  eventType: "Brand Activation",
  product: "Photobooth GIF - DSLR Booth",
  mediaType: "video" as MediaType,
},
{
  id: Math.floor(Math.random() * 10000),
  src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-37.webp",
  alt: "Berrybenka Grand Opening 2018",
  experience: ["Photo"],
  eventType: "Brand Activation",
  product: "Photobooth GIF - DSLR Booth",
  mediaType: "image" as MediaType,
},
{
  id: Math.floor(Math.random() * 10000),
  src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-38.mp4",
  alt: "Tokopedia Ultah",
  experience: ["GIF"],
  eventType: "Brand Activation",
  product: "Photobooth GIF - DSLR Booth",
  mediaType: "video" as MediaType,
},
{
  id: Math.floor(Math.random() * 10000),
  src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-39.mp4",
  alt: "Wedding Jasmine & Ahmad",
  experience: ["GIF","Animated Overlay"],
  eventType: "Wedding",
  product: "Photobooth GIF - DSLR Booth",
  mediaType: "video" as MediaType,
},
{
  id: Math.floor(Math.random() * 10000),
  src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-40.webp",
  alt: "Hakuhodo 20th Anniversary",
  experience: ["Photo"],
  eventType: "Corporate",
  product: "Photobooth GIF - DSLR Booth",
  mediaType: "image" as MediaType,
},
{
  id: Math.floor(Math.random() * 10000),
  src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-41.mp4",
  alt: "Prambors 50th Anniversary",
  experience: ["GIF","Animated Overlay"],
  eventType: "Brand Activation",
  product: "Photobooth GIF - DSLR Booth",
  mediaType: "video" as MediaType,
},
{
  id: Math.floor(Math.random() * 10000),
  src: "/images/lookbook-photo-booth-jakarta/photobooth-dslrbooth-42.webp",
  alt: "pikar.id Boca Liente Series",
  experience: ["Photo"],
  eventType: "Brand Activation",
  product: "Photobooth GIF - DSLR Booth",
  mediaType: "image" as MediaType,
},
         
  // PHOTOBOOTH GIF - DSLR BOOTH -----------------------------------------------------------------   END
  // PHOTOBOOTH GIF - O BOOTH ----------------------------------------------------------------- START
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-1.webp",
    alt: "SKK Migas Hari Kartini",
    experience: ["Photo","Backdrop : Pink Sequins"],
    eventType: "Corporate",
    product: "Photobooth GIF - O Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-2.webp",
    alt: "Randolph & Peggy Wedding",
    experience: ["Photo Strip","Greenscreen"],
    eventType: "Wedding",
    product: "Photobooth GIF - O Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-3.webp",
    alt: "Walanglangi & Partners",
    experience: ["Photo"],
    eventType: "Corporate",
    product: "Photobooth GIF - O Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-4.mp4",
    alt: "Skyavenue 2017",
    experience: ["GIF","Props : Confetti"],
    eventType: "School Event",
    product: "Photobooth GIF - O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-5.mp4",
    alt: "Google Family Day",
    experience: ["GIF"],
    eventType: "Corporate",
    product: "Photobooth GIF - O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-6.webp",
    alt: "Mr & Mrs Ghani",
    experience: ["Photo Strip","Virtual Props"],
    eventType: "Wedding",
    product: "Photobooth GIF - O Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-7.webp",
    alt: "Skyavenue 2017",
    experience: ["Photo","Props : Confetti"],
    eventType: "School Event",
    product: "Photobooth GIF - O Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-8.webp",
    alt: "GBK at Blu Fair",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - O Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-9.mp4",
    alt: "GBK at Blu Fair",
    experience: ["GIF"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-10.mp4",
    alt: "Baccardi Scarnival",
    experience: ["GIF"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-11.webp",
    alt: "Wedding of Tya & Fairuz",
    experience: ["Photo"],
    eventType: "Wedding",
    product: "Photobooth GIF - O Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-12.mp4",
    alt: "Wedding of Tya & Fairuz",
    experience: ["GIF"],
    eventType: "Wedding",
    product: "Photobooth GIF - O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-14.mp4",
    alt: "Wedding of Leo & Jess",
    experience: ["Boomerang"],
    eventType: "Wedding",
    product: "Photobooth GIF - O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-13.webp",
    alt: "Wedding of Sandy & Diandra",
    experience: ["Photo"],
    eventType: "Wedding",
    product: "Photobooth GIF - O Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-15.webp",
    alt: "Elfiera Birthday",
    experience: ["Photo","Photo Strip"],
    eventType: "Birthday Party",
    product: "Photobooth GIF - O Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-16.webp",
    alt: "Criteo Commerce Marketing Forum",
    experience: ["Photo","Backdrop : Hardpanel"],
    eventType: "Corporate",
    product: "Photobooth GIF - O Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-17.mp4",
    alt: "Skyeve 2018",
    experience: ["GIF"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-18.mp4",
    alt: "Philips at Pasar Belanja",
    experience: ["Photo","RGB Light"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-19.webp",
    alt: "Loacker",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - O Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-20.mp4",
    alt: "Criteo Commerce Marketing Forum",
    experience: ["GIF"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - O Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-obooth-21.mp4",
    alt: "Artmarket",
    experience: ["GIF"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - O Booth",
    mediaType: "video" as MediaType,
  },




  // PHOTOBOOTH GIF - O BOOTH ----------------------------------------------------------------- END 
  
  // PHOTOBOOTH GIF - Classic BOOTH ----------------------------------------------------------------- START
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-classicbooth-1.webp",
    alt: "Manulife 37th Anniversary",
    experience: ["Photo"],
    eventType: "Corporate",
    product: "Photobooth GIF - Classic Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-classicbooth-2.webp",
    alt: "Manulife 37th Anniversary",
    experience: ["Photo"],
    eventType: "Corporate",
    product: "Photobooth GIF - Classic Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-classicbooth-3.webp",
    alt: "Raja Sakha Birthday",
    experience: ["Photo"], 
    eventType: "Birthday Party",
    product: "Photobooth GIF - Classic Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-classicbooth-4.mp4",
    alt: "Raja Sakha Birthday",
    experience: ["GIF"],
    eventType: "Birthday Party",
    product: "Photobooth GIF - Classic Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-classicbooth-5.webp",
    alt: "JPCC Engage",
    experience: ["Photo","RGB Light"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - Classic Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-classicbooth-6.mp4",
    alt: "Dcode",
    experience: ["GIF","RGB Light"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - Classic Booth",
    mediaType: "video" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-classicbooth-7.webp",
    alt: "Artmarket",
    experience: ["Photo","Flat Lay"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - Classic Booth",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-classicbooth-8.webp",
    alt: "Artmarket",
    experience: ["Photo","Flat Lay"],
    eventType: "Brand Activation",
    product: "Photobooth GIF - Classic Booth",
    mediaType: "image" as MediaType,
  },

  
  
  // PHOTOBOOTH GIF - Classic BOOTH ----------------------------------------------------------------- END

  // PHOTOBOOTH OTHER EXPERIENCE ----------------------------------------------------------------- START
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-fisheye-1.webp",
    alt: "Mini cooper GIIAS",
    experience: ["Photo Strip","Fisheye"],
    eventType: "Brand Activation",
    product: "Photobooth - Custom",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-selfphoto-1.webp",
    alt: "Open Studio",
    experience: ["Props : Costume","Self Photo Studio"],
    eventType: "Studio",
    product: "Photobooth - Custom",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-selfphoto-2.webp",
    alt: "Open Studio",
    experience: ["Props : Costume","Self Photo Studio"],
    eventType: "Studio",
    product: "Photobooth - Custom",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-selfphoto-3.webp",
    alt: "Open Studio",
    experience: ["Props : Costume","Self Photo Studio"],
    eventType: "Studio",
    product: "Photobooth - Custom",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-studio-1.webp",
    alt: "SD Adik Irma Graduation",
    experience: ["Photo"],
    eventType: "Graduation",
    product: "Photobooth - Custom",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/photobooth-studio-2.webp",
    alt: "Moet 150th Anniversary",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Photobooth - Custom",
    mediaType: "image" as MediaType,
  },
  // PHOTOBOOTH OTHER EXPERIENCE ----------------------------------------------------------------- END
  
  // HASHTAG PRINTER ----------------------------------------------------------------- START
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/hashtagprinter-1.webp",
    alt: "Narasi Fest",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Hashtag Printer",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/hashtagprinter-2.webp",
    alt: "LG Washing Machine Launch",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Hashtag Printer",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/hashtagprinter-3.webp",
    alt: "Voltaren color run",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Hashtag Printer",
    mediaType: "image" as MediaType,
  },
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/hashtagprinter-4.webp",
    alt: "bobobox at berdendan bergoyang festival",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Hashtag Printer",
    mediaType: "image" as MediaType,
  },

  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/hashtagprinter-5.webp",
    alt: "Johnson & Johnson #ChooseGentle",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Hashtag Printer",
    mediaType: "image" as MediaType,
  }
  ,
  {
    id: Math.floor(Math.random() * 10000),
    src: "/images/lookbook-photo-booth-jakarta/hashtagprinter-5.webp",
    alt: "Narasi di wonderfest",
    experience: ["Photo"],
    eventType: "Brand Activation",
    product: "Hashtag Printer",
    mediaType: "image" as MediaType,
  }
  // HASHTAG PRINTER ----------------------------------------------------------------- END

  
].sort(() => Math.random() - 0.5) // Shuffle the array randomly

function LoadingPlaceholder() {
  return (
    <div className="animate-pulse">
      <div className="relative w-full pt-[100%] bg-white/5 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5" />
      </div>
    </div>
  )
}

function LookbookModal({ 
  isOpen, 
  onClose, 
  item,
  galleryItems
}: { 
  isOpen: boolean
  onClose: () => void
  item: GalleryItem | null
  galleryItems: GalleryItem[]
}) {
  if (!isOpen || !item) return null

  // Find related items based on alt text similarity
  const relatedItems = galleryItems
    .filter(galleryItem => 
      galleryItem.id !== item.id && // Don't include the current item
      (galleryItem.alt.includes(item.alt) || item.alt.includes(galleryItem.alt)) // Check for alt text similarity
    )
    .slice(0, 4) // Limit to 4 related items

  const handleRelatedItemClick = (relatedItem: GalleryItem) => {
    onClose();
    setTimeout(() => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      const root = createRoot(container);
      root.render(
        <LookbookModal
          isOpen={true}
          onClose={() => {
            root.unmount();
            document.body.removeChild(container);
          }}
          item={relatedItem}
          galleryItems={galleryItems}
        />
      );
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-[90vw] max-w-7xl h-[85vh] bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Content - Responsive */}
        <div className="flex flex-col lg:flex-row h-full">
          {/* Media Section */}
          <div className="relative flex-grow h-[60%] lg:h-full">
            {item.mediaType === 'video' ? (
              <video
                src={item.src}
                className="absolute inset-0 w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            ) : item.mediaType === 'gif' ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
                unoptimized
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
              />
            )}
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-80 h-[40%] lg:h-full bg-black/20 p-4 lg:p-6 flex flex-col overflow-y-auto">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-white mb-6">{item.alt}</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Event Type</h3>
                  <p className="mt-1 text-white">{item.eventType}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Experience</h3>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {item.experience.map((exp, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 rounded-full text-white">{exp}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Product</h3>
                  <p className="mt-1 text-white">{item.product}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Media Type</h3>
                  <p className="mt-1 text-white capitalize">{item.mediaType}</p>
                </div>
              </div>
            </div>

            {/* Related Items */}
            {relatedItems.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Related Items</h3>
                <div className="grid grid-cols-2 gap-2">
                  {relatedItems.map((relatedItem) => (
                    <div
                      key={relatedItem.id}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRelatedItemClick(relatedItem);
                      }}
                    >
                      {relatedItem.mediaType === 'video' ? (
                        <video
                          src={relatedItem.src}
                          className="absolute inset-0 w-full h-full object-cover"
                          muted
                          playsInline
                        />
                      ) : (
                        <Image
                          src={relatedItem.src}
                          alt={relatedItem.alt}
                          fill
                          className="object-cover"
                          unoptimized={relatedItem.mediaType === 'gif'}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-1 left-1 right-1">
                          <p className="text-white text-xs truncate">{relatedItem.alt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function MediaCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <div 
      className="group relative w-full rounded-xl bg-gray-100 overflow-hidden break-inside-avoid mb-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full">
        {item.mediaType === 'image' && (
          <Image
            src={item.src}
            alt={item.alt}
            width={800}
            height={800}
            className="w-full h-auto object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        
        {item.mediaType === 'video' && (
          <video
            src={item.src}
            className="w-full h-auto"
            loop
            muted
            playsInline
            autoPlay
          />
        )}

        {item.mediaType === 'gif' && (
          <Image
            src={item.src}
            alt={item.alt}
            width={800}
            height={800}
            className="w-full h-auto object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {item.experience.map((exp, index) => (
                <span key={index} className="px-2 py-1 bg-white/20 rounded-full text-white text-sm">{exp}</span>
              ))}
              <span className="px-2 py-1 bg-white/20 rounded-full text-white text-sm">{item.eventType}</span>
              <span className="px-2 py-1 bg-white/20 rounded-full text-white text-sm">{item.product}</span>
            </div>
            <h3 className="text-white font-semibold">{item.alt}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

function LookbookPageContent() {
  const [selectedExperience, setSelectedExperience] = useState('All')
  const [selectedEventType, setSelectedEventType] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState('All')
  const [visibleItems, setVisibleItems] = useState(12)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const loadingRef = useRef(null)

  // Client-side only code
  useEffect(() => {
    setIsMounted(true)
    // Track lookbook page view
    trackGalleryView('lookbook');
  }, [])

  // Generate unique experiences from gallery items and ensure "All" is at the top
  const filterOptions = {
    experiences: ['All', ...[...new Set(galleryItems.flatMap(item => item.experience))].sort()],
    eventTypes: ['All', ...[...new Set(galleryItems.map(item => item.eventType))].sort()],
    products: ['All', ...[...new Set(galleryItems.map(item => item.product))].sort()]
  }

  // Read URL parameters on page load
  useEffect(() => {
    if (!isMounted) return;
    
    const urlParams = new URLSearchParams(window.location.search)
    const productParam = urlParams.get('product')
    if (productParam) {
      const formattedProduct = productParam
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      setSelectedProduct(formattedProduct)
    }
  }, [isMounted])

  // Update URL when product filter changes
  useEffect(() => {
    if (!isMounted) return;
    
    const url = new URL(window.location.href)
    if (selectedProduct === "All") {
      url.searchParams.delete('product')
    } else {
      const urlProduct = selectedProduct.toLowerCase().replace(/ /g, '-')
      url.searchParams.set('product', urlProduct)
    }
    window.history.replaceState({}, '', url.toString())
  }, [selectedProduct, isMounted])

  // Reset visible items when filters change
  useEffect(() => {
    if (isMounted) {
      setVisibleItems(12)
    }
  }, [selectedExperience, selectedEventType, selectedProduct, isMounted])

  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => {
      const experienceMatch = selectedExperience === 'All' || item.experience.includes(selectedExperience)
      const eventTypeMatch = selectedEventType === 'All' || item.eventType === selectedEventType
      const productMatch = selectedProduct === 'All' || item.product === selectedProduct

      return experienceMatch && eventTypeMatch && productMatch
    })
  }, [selectedExperience, selectedEventType, selectedProduct])

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries
    if (target.isIntersecting && !isLoading && filteredItems.length > visibleItems) {
      setIsLoading(true)
      setTimeout(() => {
        setVisibleItems(prev => prev + 12)
        setIsLoading(false)
      }, 800) // Slightly faster loading delay for better UX
    }
  }, [isLoading, filteredItems.length, visibleItems])

  useEffect(() => {
    if (!isMounted) return;
    
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '100px', // Load a bit earlier before reaching the bottom
      threshold: 0.1
    })

    if (loadingRef.current) {
      observer.observe(loadingRef.current)
    }

    return () => observer.disconnect()
  }, [handleObserver, isMounted])

  const resetFilters = () => {
    setSelectedExperience('All')
    setSelectedEventType('All')
    setSelectedProduct('All')
  }

  const hasActiveFilters = selectedExperience !== 'All' || selectedEventType !== 'All' || selectedProduct !== 'All'

  // Prevent hydration errors by only rendering client-side content after mounting
  if (!isMounted) {
    return (
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              Our Lookbook
            </h1>
            <p className="text-xl text-gray-300">
              Explore our collection of memorable moments captured at various events
            </p>
          </div>
          
          {/* Loading state */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <LoadingPlaceholder key={index} />
            ))}
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our Lookbook
          </h1>
          <p className="text-xl text-gray-300">
            Explore our collection of memorable moments captured at various events
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Filters</h2>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-2"
              >
                Reset All Filters
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FilterDropdown
              label="Experience"
              options={filterOptions.experiences}
              value={selectedExperience}
              onChange={setSelectedExperience}
            />
            <FilterDropdown
              label="Event Type"
              options={filterOptions.eventTypes}
              value={selectedEventType}
              onChange={setSelectedEventType}
            />
            <FilterDropdown
              label="Product"
              options={filterOptions.products}
              value={selectedProduct}
              onChange={setSelectedProduct}
            />
          </div>
        </div>

        {/* Updated Gallery Grid with Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {filteredItems.slice(0, visibleItems).map((item) => (
            <MediaCard 
              key={item.id} 
              item={item} 
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <svg className="animate-spin h-5 w-5 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-purple-500">Loading more items...</span>
            </div>
          </div>
        )}

        {/* Infinite Scroll Trigger */}
        {filteredItems.length > visibleItems && (
          <div ref={loadingRef} className="h-20 mt-8" />
        )}

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No items found matching your filters.</p>
          </div>
        )}

        {/* All Items Loaded Message */}
        {filteredItems.length > 0 && filteredItems.length <= visibleItems && (
          <div className="text-center py-8">
            <p className="text-gray-400">All items loaded</p>
          </div>
        )}

        {/* Modal */}
        <LookbookModal 
          isOpen={!!selectedItem} 
          onClose={() => setSelectedItem(null)} 
          item={selectedItem}
          galleryItems={galleryItems}
        />
      </div>
    </main>
  )
}

export default function LookbookPage() {
  return (
    <>
      <Navigation />
      <LookbookPageContent />
      <Footer />
    </>
  )
}