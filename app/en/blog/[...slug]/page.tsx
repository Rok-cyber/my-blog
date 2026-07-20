import 'css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import type { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import { isEnglishPost, isKoreanPost } from '@/lib/i18n'

const defaultLayout = 'PostLayout'
const layouts = { PostSimple, PostLayout, PostBanner }

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const post = allBlogs.find((item) => isEnglishPost(item) && !item.draft && item.slug === slug)
  if (!post) return

  const authorList = post.authors || ['default-en']
  const authorDetails = authorList.map((author) => {
    const authorResult = allAuthors.find((item) => item.slug === author)
    return coreContent(authorResult as Authors)
  })
  const imageList = post.images
    ? typeof post.images === 'string'
      ? [post.images]
      : post.images
    : [siteMetadata.socialBanner]
  const koreanTranslation = post.translationKey
    ? allBlogs.find(
        (item) => isKoreanPost(item) && item.translationKey === post.translationKey && !item.draft
      )
    : undefined

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/en/blog/${post.slug}`,
      languages: {
        'en-US': `/en/blog/${post.slug}`,
        ...(koreanTranslation ? { 'ko-KR': `/${koreanTranslation.path}` } : {}),
      },
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.lastmod || post.date).toISOString(),
      url: `${siteMetadata.siteUrl}/en/blog/${post.slug}`,
      images: imageList.map((image) => ({
        url: image.includes('http') ? image : siteMetadata.siteUrl + image,
      })),
      authors: authorDetails.map((author) => author.name),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () =>
  allBlogs
    .filter((post) => isEnglishPost(post) && !post.draft)
    .map((post) => ({ slug: post.slug.split('/').map((name) => decodeURI(name)) }))

export default async function EnglishPostPage(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const sortedPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => isEnglishPost(post) && !post.draft))
  )
  const postIndex = sortedPosts.findIndex((post) => post.slug === slug)
  if (postIndex === -1) return notFound()

  const post = allBlogs.find(
    (item) => isEnglishPost(item) && !item.draft && item.slug === slug
  ) as Blog
  const authorList = post.authors || ['default-en']
  const authorDetails = authorList.map((author) => {
    const authorResult = allAuthors.find((item) => item.slug === author)
    return coreContent(authorResult as Authors)
  })
  const mainContent = coreContent(post)
  const jsonLd = post.structuredData
  jsonLd.author = authorDetails.map((author) => ({ '@type': 'Person', name: author.name }))
  const Layout = layouts[post.layout || defaultLayout]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout
        content={mainContent}
        authorDetails={authorDetails}
        next={sortedPosts[postIndex - 1]}
        prev={sortedPosts[postIndex + 1]}
      >
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}
