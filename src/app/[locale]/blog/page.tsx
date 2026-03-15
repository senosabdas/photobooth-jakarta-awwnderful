'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, X } from 'lucide-react'
import { useState } from 'react'
import { getAllBlogs, searchBlogs } from '@/app/blogs'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { usePathname } from 'next/navigation'

// Define tag categories and types
type ExperienceTag = typeof TAG_CATEGORIES.experience[number];

const TAG_CATEGORIES = {
  services: [
    'photobooth-gif',
    'roaming-photo-booth',
    '360-video-booth',
    'hashtag-printer',
    'virtual-photo-booth',
    'video-booth',
    'livestreaming',
    'multicamera',
    'ai-photo-booth',
    'custom-photo-print',
    'light-painting',
    'audio-rental',
    'interactive-display',
    'invitation-digitalguestbook',
    'guest-management',
    'virtual-reality',
    'decoration',
    'photo-video-documentation',
    'photo-documentation',
    'video-documentation',
    'photobox',
  ],
  experience: ['corporate event', 'wedding', 'birthday party', 'brand activation', 'school event', 'graduation','custom user interface'] as const,
  contentType: ['case-studies', 'blog']
} as const;

export const dynamic = 'force-dynamic'

export default function BlogPage() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'id'
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedExperience, setSelectedExperience] = useState<ExperienceTag | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedContentType, setSelectedContentType] = useState<string>('all')
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest')

  const resetFilters = () => {
    setSelectedTags([])
    setSelectedExperience(null)
    setSearchQuery('')
    setSelectedContentType('all')
    setSortOrder('latest')
  }

  const allBlogs = getAllBlogs()
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesQuery = searchQuery === '' || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTags = selectedTags.length === 0 ||
      selectedTags.every(tag => blog.productTags.includes(tag))

    const matchesContentType = selectedContentType === 'all' ||
      (selectedContentType === 'case-studies' && blog.id.startsWith('case-studies')) ||
      (selectedContentType === 'blog' && !blog.id.startsWith('case-studies'))

    return matchesQuery && matchesTags && matchesContentType
  }).sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime()
    const dateB = new Date(b.publishedAt).getTime()
    return sortOrder === 'latest' ? dateB - dateA : dateA - dateB
  })
  
  // Get all unique tags from blogs
  const allTags = Array.from(new Set(allBlogs.flatMap(blog => blog.productTags)))
  
  // Organize tags by category
  const categorizedTags = {
    services: allTags.filter(tag => TAG_CATEGORIES.services.some(pt => tag.toLowerCase().includes(pt))),
    experience: allTags.filter(tag => TAG_CATEGORIES.experience.some(et => tag.toLowerCase().includes(et))),
    other: allTags.filter(tag => 
      !TAG_CATEGORIES.services.some(pt => tag.toLowerCase().includes(pt)) &&
      !TAG_CATEGORIES.experience.some(et => tag.toLowerCase().includes(et))
    )
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our Blog & Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tips, tricks, and stories about photo booth experiences and event photography
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center gap-4">
              <input
                type="text"
                placeholder="Search blog posts..."
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'latest' | 'oldest')}
                className="px-4 py-2 rounded-lg bg-purple-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
            
            {/* Content Type */}
            <div className="space-y-2">
              <h3 className="text-white font-semibold">Content Type</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-4 py-2 rounded ${
                    selectedContentType === 'all' 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedContentType('all')}
                >
                  All
                </button>
                {TAG_CATEGORIES.contentType.map(type => (
                  <button
                    key={type}
                    className={`px-4 py-2 rounded ${
                      selectedContentType === type
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                    onClick={() => setSelectedContentType(type)}
                  >
                    {type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Tags */}
            <div className="space-y-2">
              <h3 className="text-white font-semibold">Services</h3>
              <div className="flex flex-wrap gap-2">
                {categorizedTags.services.map(tag => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTags(prev => 
                        prev.includes(tag)
                          ? prev.filter(t => t !== tag)
                          : [...prev, tag]
                      )
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {tag.replace(/-/g, ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Tags */}
            <div className="space-y-2">
              <h3 className="text-white font-semibold">Experience</h3>
              <div className="flex flex-wrap gap-2">
                {TAG_CATEGORIES.experience.map(tag => (
                  <button
                    key={tag}
                    onClick={() => {
                      if (selectedExperience === tag) {
                        setSelectedExperience(null);
                        setSelectedTags(prev => prev.filter(t => !TAG_CATEGORIES.experience.includes(t as ExperienceTag)));
                      } else {
                        setSelectedExperience(tag);
                        setSelectedTags(prev => {
                          // Remove any existing experience tags
                          const filteredTags = prev.filter(t => !TAG_CATEGORIES.experience.includes(t as ExperienceTag));
                          // Add the new experience tag
                          return [...filteredTags, tag];
                        });
                      }
                    }}
                    className={`px-4 py-2 rounded ${
                      selectedExperience === tag
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {tag.replace(/-/g, ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Show selected tags */}
            {selectedTags.length > 0 && (
              <div className="text-sm text-gray-400">
                Showing posts related to: {selectedTags.map(tag => tag.replace(/-/g, ' ')).join(', ')}
              </div>
            )}

            {/* Reset button */}
            {(selectedTags.length > 0 || searchQuery || selectedContentType !== 'all' || sortOrder !== 'latest') && (
              <button
                onClick={resetFilters}
                className="text-red-500 hover:underline mt-2 flex items-center"
              >
                <X className="w-4 h-4 mr-1" />
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article 
              key={blog.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-purple-500/10 transition-all duration-300"
            >
              <Link href={`/${locale}/blog/${blog.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2 hover:text-purple-400 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-400 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={blog.publishedAt}>
                        {new Date(blog.publishedAt).toLocaleDateString()}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blog.author.name}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {blog.productTags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400"
                      >
                        {tag.replace(/-/g, ' ')}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
} 