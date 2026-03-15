import { getAllBlogs } from '@/app/blogs'

export async function generateStaticParams() {
  const blogs = getAllBlogs()
  const locales = ['en', 'id']
  
  return locales.flatMap(locale => 
    blogs.map((blog) => ({
      locale,
      slug: blog.slug,
    }))
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
} 