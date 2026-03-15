import { Blog } from '../blogs';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BlogLayoutProps {
  blog: Blog;
  children: React.ReactNode;
}

export default function BlogLayout({ blog, children }: BlogLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Hero Section */}
      <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-8">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
        <p className="text-xl text-gray-300 mb-6">{blog.excerpt}</p>
        
        <div className="flex items-center gap-6 text-gray-400">
          <div className="flex items-center gap-2">
            <Image
              src={blog.author.image}
              alt={blog.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{blog.author.name}</span>
          </div>
          <time dateTime={blog.publishedAt}>
            {new Date(blog.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </header>

      {/* Content */}
      <div className="mb-16">
        {children}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-16">
        {blog.productTags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400"
          >
            {tag.replace(/-/g, ' ')}
          </span>
        ))}
      </div>

      {/* Share Section */}
      <div className="border-t border-white/10 pt-8">
        <h2 className="text-xl font-semibold text-white mb-4">Share this post</h2>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white/5 rounded-lg text-gray-300 hover:bg-white/10 transition-colors">
            Twitter
          </button>
          <button className="px-4 py-2 bg-white/5 rounded-lg text-gray-300 hover:bg-white/10 transition-colors">
            Facebook
          </button>
          <button className="px-4 py-2 bg-white/5 rounded-lg text-gray-300 hover:bg-white/10 transition-colors">
            LinkedIn
          </button>
        </div>
      </div>
    </article>
  );
} 