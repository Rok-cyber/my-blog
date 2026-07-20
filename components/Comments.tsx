'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug, locale = 'ko' }: { slug: string; locale?: 'ko' | 'en' }) {
  const [loadComments, setLoadComments] = useState(false)

  if (!siteMetadata.comments?.provider) {
    return null
  }
  const commentsConfig =
    locale === 'en' && siteMetadata.comments.provider === 'giscus'
      ? {
          ...siteMetadata.comments,
          giscusConfig: { ...siteMetadata.comments.giscusConfig, lang: 'en' },
        }
      : siteMetadata.comments

  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={commentsConfig} slug={slug} />
      ) : (
        <button onClick={() => setLoadComments(true)}>
          {locale === 'en' ? 'Load comments' : '댓글 불러오기'}
        </button>
      )}
    </>
  )
}
