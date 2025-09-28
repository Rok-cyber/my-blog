import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import Hero from './Hero'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <Hero /> {/* 상단 소개 */}
      <Main posts={posts} /> {/* 블로그 글 목록 */}
    </>
  )
}
