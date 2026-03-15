import React from 'react'
import type { ContentBlock } from '@/app/blogs'
import { getBlogBySlug } from '@/app/blogs'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import GalleryBlock from './GalleryBlock'
import ClientLayout from './ClientLayout'

interface BlogPostProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

interface BlockProps {
  block: ContentBlock
}

// Content Block Components (same as non-localized version)
const TextBlock = ({ block }: BlockProps) => {
  if (block.type !== 'text') return null
  return (
    <div className={`prose prose-lg prose-invert max-w-none ${
      block.style === 'large' ? 'text-xl font-bold mb-8' : 
      block.style === 'small' ? 'text-sm mb-4' :
      block.style === 'medium' ? 'text-base font-bold' :
      'mb-8'
    }`}>
      {block.content.split('\n').map((paragraph, index) => (
        <p key={index} className={
          block.style === 'medium' ? 'mb-0' : 
          block.style === 'large' ? 'mb-6' : 
          'mb-4'
        }>{paragraph}</p>
      ))}
    </div>
  )
}

const ImageBlock = ({ block }: BlockProps) => {
  if (block.type !== 'image') return null
  return (
    <figure className={`my-8 ${
      block.layout === 'full' ? 'w-full' :
      block.layout === 'wide' ? 'w-full md:w-4/5 mx-auto' :
      'w-full md:w-2/3 mx-auto'
    }`}>
      <div className="relative w-full">
        <Image
          src={block.src}
          alt={block.alt}
          width={800}
          height={600}
          className="w-full h-auto rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 66vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
      {block.caption && (
        <figcaption className="text-sm text-gray-400 text-center mt-2">
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}

const QuoteBlock = ({ block }: BlockProps) => {
  if (block.type !== 'quote') return null
  return (
    <blockquote className={`my-8 p-6 border-l-4 ${
      block.style === 'featured' ? 'bg-purple-900/20 border-purple-500' : 'border-gray-600'
    }`}>
      <p className="text-xl italic text-gray-300">{block.quote}</p>
      {block.author && (
        <footer className="mt-2 text-gray-400">— {block.author}</footer>
      )}
    </blockquote>
  )
}

const VideoBlock = ({ block }: BlockProps) => {
  if (block.type !== 'video') return null

  const src = (block as any).src as string
  const isYouTube = /youtube\.com|youtu\.be/.test(src)
  const isVimeo = /vimeo\.com/.test(src)
  const defaultPoster = src && src.match(/\.(mp4|mov|webm)$/)
    ? src.replace(/\.(mp4|mov|webm)$/i, '.jpg')
    : undefined

  return (
    <figure className="my-8">
      <div className="relative aspect-video">
        {isYouTube ? (
          <iframe
            className="w-full h-full rounded-lg"
            src={src.replace('watch?v=', 'embed/').replace('youtu.be/', 'www.youtube.com/embed/') + (src.includes('?') ? '&' : '?') + 'autoplay=1&mute=1&rel=0&playsinline=1'}
            title={(block as any).caption || 'YouTube video'}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : isVimeo ? (
          <iframe
            className="w-full h-full rounded-lg"
            src={src.replace('vimeo.com/', 'player.vimeo.com/video/') + (src.includes('?') ? '&' : '?') + 'autoplay=1&muted=1&playsinline=1'}
            title={(block as any).caption || 'Vimeo video'}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={src}
            poster={(block as any).poster || defaultPoster}
            className="w-full h-full object-cover rounded-lg"
            controls
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            crossOrigin="anonymous"
          >
            <source src={src} />
          </video>
        )}
      </div>
      {(block as any).caption && (
        <figcaption className="text-sm text-gray-400 text-center mt-2">
          {(block as any).caption}
        </figcaption>
      )}
    </figure>
  )
}

const ComparisonBlock = ({ block }: BlockProps) => {
  if (block.type !== 'comparison') return null
  return (
    <div className="my-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {block.items.map((item, index) => (
        <div key={index} className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-300 mb-4">{item.description}</p>
          {item.pros && item.pros.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-green-400 mb-2">Pros</h4>
              <ul className="space-y-1">
                {item.pros.map((pro, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.cons && item.cons.length > 0 && (
            <div>
              <h4 className="font-medium text-red-400 mb-2">Cons</h4>
              <ul className="space-y-1">
                {item.cons.map((con, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-red-400 mr-2">×</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const CalloutBlock = ({ block }: BlockProps) => {
  if (block.type !== 'callout') return null
  const styles = {
    info: 'bg-blue-500/10 border-blue-500 text-blue-300',
    warning: 'bg-yellow-500/10 border-yellow-500 text-yellow-300',
    tip: 'bg-green-500/10 border-green-500 text-green-300',
    note: 'bg-purple-500/10 border-purple-500 text-purple-300'
  }

  const renderContent = (content: string) => {
    const parts = content.split(/(\[.*?\])\s*(https?:\/\/[^\s]+)/)
    return parts.map((part, index) => {
      if (part.startsWith('[')) {
        return null
      } else if (part.startsWith('http')) {
        const linkText = parts[index - 1].slice(1, -1)
        return (
          <a 
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            {linkText}
          </a>
        )
      } else if (!part.startsWith('[') && !part.startsWith('http')) {
        return part
      }
      return null
    })
  }

  return (
    <div className={`my-8 p-6 border-l-4 rounded-r-lg ${styles[block.style]}`}>
      {renderContent(block.content)}
    </div>
  )
}

const ListBlock = ({ block }: BlockProps) => {
  if (block.type !== 'list') return null
  if (block.style === 'checklist') {
    return (
      <ul className="my-8 space-y-2">
        {block.items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="text-green-400 mr-2">✓</span>
            {item}
          </li>
        ))}
      </ul>
    )
  }
  return (
    <ul className={`my-8 space-y-2 ${
      block.style === 'numbered' ? 'list-decimal' : 'list-disc'
    } list-inside text-gray-300`}>
      {block.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

const ContentBlock = ({ block }: BlockProps) => {
  switch (block.type) {
    case 'text':
      return <TextBlock block={block} />
    case 'image':
      return <ImageBlock block={block} />
    case 'gallery':
      return <GalleryBlock block={block} />
    case 'quote':
      return <QuoteBlock block={block} />
    case 'video':
      return <VideoBlock block={block} />
    case 'comparison':
      return <ComparisonBlock block={block} />
    case 'callout':
      return <CalloutBlock block={block} />
    case 'list':
      return <ListBlock block={block} />
    default:
      return null
  }
}

async function BlogPost({ params }: BlogPostProps) {
  const { locale, slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <ClientLayout>
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href={`/${locale}/blog`}
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <article>
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                {blog.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={blog.author.image}
                      alt={blog.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{blog.author.name}</span>
                </div>
                <span>•</span>
                <time dateTime={blog.publishedAt}>
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </time>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {blog.productTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                  >
                    {tag.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            </header>

            <div className="relative aspect-[2/1] md:aspect-[2/1] mb-12">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              {blog.content.map((block, index) => (
                <ContentBlock key={block.id || index} block={block} />
              ))}
            </div>
          </article>
        </div>
      </main>
    </ClientLayout>
  )
}

export default BlogPost 