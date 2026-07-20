import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { isEnglishPost } from '@/lib/i18n'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({
  title: 'Writing',
  description:
    'Biweekly analysis of AI markets, technology shifts, agent systems, governance, and future scenarios.',
  locale: 'en',
  alternates: {
    canonical: '/en/blog',
    languages: { 'ko-KR': '/blog', 'en-US': '/en/blog' },
  },
})

export default async function EnglishBlogPage() {
  const posts = allCoreContent(
    sortPosts(allBlogs.filter((post) => isEnglishPost(post) && !post.draft))
  )
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const pagination = { currentPage: 1, totalPages }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={posts.slice(0, POSTS_PER_PAGE)}
      pagination={pagination}
      title="AI Outlook"
      locale="en"
    />
  )
}
