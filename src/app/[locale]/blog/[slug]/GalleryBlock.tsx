import React from 'react'
import Image from 'next/image'
import type { GalleryBlock as GalleryBlockType } from '@/app/blogs'

interface GalleryBlockProps {
  block: GalleryBlockType
}

export default function GalleryBlock({ block }: GalleryBlockProps) {
  if (block.type !== 'gallery') return null

  const { images, layout = 'grid', gridAlignment = 'center' } = block

  // Handle video content in gallery (if image src is actually a video)
  const renderMediaItem = (item: { src: string; alt: string; caption?: string }, index: number) => {
    const isVideo = item.src.includes('.mp4') || item.src.includes('.mov') || item.src.includes('.webm')
    
    if (isVideo) {
      return (
        <div key={index} className="relative w-full">
          <video
            src={item.src}
            className="w-full h-auto rounded-lg"
            controls
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            poster={item.src.replace(/\.(mp4|mov|webm)$/i, '.jpg')}
          />
          {item.caption && (
            <p className="text-sm text-gray-400 text-center mt-2">{item.caption}</p>
          )}
        </div>
      )
    }

    return (
      <div key={index} className="relative w-full">
        <Image
          src={item.src}
          alt={item.alt}
          width={600}
          height={400}
          className="w-full h-auto rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        {item.caption && (
          <p className="text-sm text-gray-400 text-center mt-2">{item.caption}</p>
        )}
      </div>
    )
  }

  const getGridClasses = () => {
    const baseClasses = 'grid gap-4'
    const alignmentClasses = {
      'start': 'justify-items-start',
      'center': 'justify-items-center', 
      'end': 'justify-items-end'
    }
    
    if (layout === 'grid') {
      return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${alignmentClasses[gridAlignment]}`
    }
    
    if (layout === 'masonry') {
      return `${baseClasses} columns-1 md:columns-2 lg:columns-3 ${alignmentClasses[gridAlignment]}`
    }
    
    // carousel layout
    return `flex gap-4 overflow-x-auto snap-x snap-mandatory ${alignmentClasses[gridAlignment]}`
  }

  return (
    <div className="my-8">
      <div className={getGridClasses()}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className={layout === 'carousel' ? 'flex-none snap-start w-80' : 'w-full'}
          >
            {renderMediaItem(image, index)}
          </div>
        ))}
      </div>
    </div>
  )
} 