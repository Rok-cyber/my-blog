import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/en/tag-data.json'
import { genPageMetadata } from 'app/seo'
import { isEnglishPost } from '@/lib/i18n'

const POSTS_PER_PAGE = 5

export async function generateMetadata(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params
  const tag = decodeURIComponent(params.tag)
  return genPageMetadata({
    title: tag,
    description: `English AI outlooks about ${tag}.`,
    locale: 'en',
    alternates: { canonical: `/en/tags/${tag}` },
  })
}

export const generateStaticParams = async () =>
  Object.keys(tagData as Record<string, number>).map((tag) => ({ tag: slug(tag) }))

export default async function EnglishTagPage(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params
  const tag = decodeURIComponent(params.tag)
  const tagLabel = Object.keys(tagData).find((key) => slug(key) === tag) || tag
  const posts = allCoreContent(
    sortPosts(
      allBlogs.filter(
        (post) =>
          isEnglishPost(post) && !post.draft && post.tags?.map((item) => slug(item)).includes(tag)
      )
    )
  )
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={posts.slice(0, POSTS_PER_PAGE)}
      pagination={{ currentPage: 1, totalPages }}
      title={tagLabel}
      locale="en"
    />
  )
}
