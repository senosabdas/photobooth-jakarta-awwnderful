'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import type { ContentBlock } from '@/app/blogs'

interface BlockProps {
  block: ContentBlock
}

const GalleryBlock = ({ block }: BlockProps) => {
  if (block.type !== 'gallery') return null

  const isVideo = (src: string) => src.endsWith('.mp4')
  const [selectedMedia, setSelectedMedia] = useState<{src: string; alt: string; type: 'image' | 'video'} | null>(null)

  const openModal = (src: string, alt: string, type: 'image' | 'video') => {
    setSelectedMedia({ src, alt, type })
  }

  const closeModal = () => {
    setSelectedMedia(null)
  }

  return (
    <div className="my-8">
      <div className={`grid ${
        block.layout === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' :
        block.layout === 'masonry' ? 'columns-1 md:columns-2 lg:columns-3 gap-4' :
        'grid-cols-1 gap-4'
      }`}>
        {block.images.map((image, index) => (
          <figure 
            key={index} 
            className="relative group cursor-pointer transition-transform hover:scale-[1.02] w-full"
            onClick={() => openModal(image.src, image.alt, isVideo(image.src) ? 'video' : 'image')}
          >
            <div className="relative w-full">
              {isVideo(image.src) ? (
                <video
                  src={image.src}
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    quality={85}
                    className="w-full h-auto rounded-lg"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'contain' }}
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors rounded-lg" />
                </>
              )}
            </div>
            {image.caption && (
              <figcaption className="text-sm text-gray-400 text-center mt-2">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-7xl w-full h-full flex items-center justify-center" 
            onClick={e => e.stopPropagation()}
          >
            {selectedMedia.type === 'video' ? (
              <div className="w-full h-full flex items-center justify-center">
                <video
                  src={selectedMedia.src}
                  controls
                  playsInline
                  autoPlay
                  className="max-w-full max-h-[90vh] rounded-lg"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  width={1920}
                  height={1080}
                  quality={100}
                  className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                  unoptimized={true}
                  loader={({ src }) => src}
                />
              </div>
            )}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryBlock 