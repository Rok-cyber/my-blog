import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'About',
  description:
    'About Seongrok Lee: software engineer, Columbia AI graduate student, and builder of production AI systems.',
  locale: 'en',
  alternates: {
    canonical: '/en/about',
    languages: { 'ko-KR': '/about', 'en-US': '/en/about' },
  },
})

export default function EnglishAboutPage() {
  const author = allAuthors.find((item) => item.slug === 'default-en') as Authors
  const mainContent = coreContent(author)

  return (
    <AuthorLayout content={mainContent} locale="en">
      <MDXLayoutRenderer code={author.body.code} />
    </AuthorLayout>
  )
}
