import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { isEnglishPost } from '@/lib/i18n'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(
    allBlogs.filter((post) => isEnglishPost(post) && !post.draft).length / POSTS_PER_PAGE
  )
  return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
}

export default async function EnglishBlogPage(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const posts = allCoreContent(
    sortPosts(allBlogs.filter((post) => isEnglishPost(post) && !post.draft))
  )
  const pageNumber = parseInt(params.page)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) return notFound()

  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={{ currentPage: pageNumber, totalPages }}
      title="AI Outlook"
      locale="en"
    />
  )
}
