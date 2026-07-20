import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/en/tag-data.json'
import { notFound } from 'next/navigation'
import { isEnglishPost } from '@/lib/i18n'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () =>
  Object.keys(tagData as Record<string, number>).flatMap((tag) => {
    const totalPages = Math.max(
      1,
      Math.ceil((tagData as Record<string, number>)[tag] / POSTS_PER_PAGE)
    )
    return Array.from({ length: totalPages }, (_, index) => ({
      tag: slug(tag),
      page: (index + 1).toString(),
    }))
  })

export default async function EnglishTagPage(props: {
  params: Promise<{ tag: string; page: string }>
}) {
  const params = await props.params
  const tag = decodeURIComponent(params.tag)
  const tagLabel = Object.keys(tagData).find((key) => slug(key) === tag) || tag
  const pageNumber = parseInt(params.page)
  const posts = allCoreContent(
    sortPosts(
      allBlogs.filter(
        (post) =>
          isEnglishPost(post) && !post.draft && post.tags?.map((item) => slug(item)).includes(tag)
      )
    )
  )
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) return notFound()

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={posts.slice(
        POSTS_PER_PAGE * (pageNumber - 1),
        POSTS_PER_PAGE * pageNumber
      )}
      pagination={{ currentPage: pageNumber, totalPages }}
      title={tagLabel}
      locale="en"
    />
  )
}
