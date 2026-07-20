import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from '../Main'
import Hero from '../Hero'
import { genPageMetadata } from '../seo'
import { isEnglishPost } from '@/lib/i18n'

export const metadata = genPageMetadata({
  title: 'AI Outlook',
  description:
    'A biweekly outlook on AI markets, technology shifts, agent systems, and future scenarios.',
  locale: 'en',
  alternates: {
    canonical: '/en',
    languages: { 'ko-KR': '/', 'en-US': '/en' },
  },
})

export default async function EnglishHomePage() {
  const posts = allCoreContent(
    sortPosts(allBlogs.filter((post) => isEnglishPost(post) && !post.draft))
  )

  return (
    <>
      <Hero locale="en" />
      <Main posts={posts} locale="en" />
    </>
  )
}
