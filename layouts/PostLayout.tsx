import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { formatDate } from '@/lib/formatDate'

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { path, slug, date, title, summary, tags, readingTime } = content
  const basePath = path.split('/')[0]

  return (
    <>
      <ScrollTopAndComment />
      <article className="py-14 sm:py-20">
        <header className="mx-auto max-w-5xl text-center">
          <p className="eyebrow">Field note</p>
          <h1 className="font-display mt-5 text-[clamp(2.7rem,6vw,5.8rem)] leading-[1.02] tracking-[-0.06em] text-gray-950 dark:text-gray-50">
            {title}
          </h1>
          {summary && (
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-400">
              {summary}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={date}>{formatDate(date)}</time>
            <span aria-hidden="true">·</span>
            <span>{Math.max(1, Math.round(readingTime?.minutes || 1))}분 읽기</span>
            <span aria-hidden="true">·</span>
            <span>{authorDetails.map((author) => author.name).join(', ')}</span>
          </div>
        </header>

        <div className="mt-12 border-t border-gray-200 pt-10 dark:border-gray-800">
          <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[180px_minmax(0,760px)] lg:gap-16">
            <aside className="lg:sticky lg:top-28">
              {authorDetails.map((author) => (
                <div key={author.name} className="flex items-center gap-3 lg:block">
                  {author.avatar && (
                    <Image
                      src={author.avatar}
                      width={56}
                      height={56}
                      alt={`${author.name} 프로필`}
                      className="h-12 w-12 rounded-full object-cover lg:h-14 lg:w-14"
                    />
                  )}
                  <div className="lg:mt-3">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {author.name}
                    </p>
                    <Link
                      href="/about"
                      className="text-primary-700 dark:text-primary-400 mt-1 text-xs font-medium"
                    >
                      프로필 보기
                    </Link>
                  </div>
                </div>
              ))}
              {tags && (
                <div className="mt-6 hidden border-t border-gray-200 pt-5 lg:block dark:border-gray-800">
                  <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase">
                    Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
            </aside>

            <div className="min-w-0">
              <div className="prose dark:prose-invert max-w-none">{children}</div>

              {tags && (
                <div className="mt-10 flex flex-wrap gap-2 border-t border-gray-200 pt-6 lg:hidden dark:border-gray-800">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              )}

              {siteMetadata.comments && (
                <div
                  className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="mx-auto mt-16 max-w-5xl border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev && prev.path ? (
              <Link href={`/${prev.path}`} className="card-surface group p-6">
                <span className="text-xs font-semibold tracking-[0.12em] text-gray-500 uppercase">
                  이전 글
                </span>
                <span className="font-display group-hover:text-primary-700 dark:group-hover:text-primary-400 mt-3 block text-2xl leading-tight tracking-[-0.03em]">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next && next.path && (
              <Link href={`/${next.path}`} className="card-surface group p-6 sm:text-right">
                <span className="text-xs font-semibold tracking-[0.12em] text-gray-500 uppercase">
                  다음 글
                </span>
                <span className="font-display group-hover:text-primary-700 dark:group-hover:text-primary-400 mt-3 block text-2xl leading-tight tracking-[-0.03em]">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
          <Link
            href={`/${basePath}`}
            className="text-link mt-8 inline-flex"
            aria-label="글 목록으로 돌아가기"
          >
            ← 글 목록으로
          </Link>
        </footer>
      </article>
    </>
  )
}
