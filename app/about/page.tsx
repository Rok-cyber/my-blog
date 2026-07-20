import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: '소개',
  description:
    'AI 시스템, 의료영상 소프트웨어, 배포 자동화와 멀티모달 AI 제품을 구축하는 이성록의 소개입니다.',
  alternates: {
    canonical: '/about',
    languages: { 'ko-KR': '/about', 'en-US': '/en/about' },
  },
})

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
