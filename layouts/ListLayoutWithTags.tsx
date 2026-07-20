'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { formatDate } from '@/lib/formatDate'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname
    .replace(/^\//, '')
    .replace(/\/page\/\d+\/?$/, '')
    .replace(/\/$/, '')
  const hasPrev = currentPage > 1
  const hasNext = currentPage < totalPages

  return (
    <nav className="mt-10 flex items-center justify-between border-t border-gray-200 pt-7 text-sm dark:border-gray-800">
      {hasPrev ? (
        <Link
          href={currentPage === 2 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
          rel="prev"
          className="text-link inline-flex"
        >
          ← 이전
        </Link>
      ) : (
        <span className="text-gray-400">← 이전</span>
      )}
      <span className="text-gray-500">
        {currentPage} / {totalPages}
      </span>
      {hasNext ? (
        <Link
          href={`/${basePath}/page/${currentPage + 1}`}
          rel="next"
          className="text-link inline-flex"
        >
          다음 →
        </Link>
      ) : (
        <span className="text-gray-400">다음 →</span>
      )}
    </nav>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])
  const activeTag = decodeURIComponent(pathname.split('/tags/')[1]?.split('/')[0] || '')
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div className="py-14 sm:py-20">
      <header className="max-w-4xl">
        <p className="eyebrow">Writing archive</p>
        <h1 className="font-display mt-4 text-5xl leading-tight tracking-[-0.055em] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          AI 시스템과 거버넌스를 중심으로, 구현을 위한 소프트웨어와 도시·공공 영역의 적용을
          기록합니다.
        </p>
      </header>

      <div className="mt-12 grid gap-10 border-t border-gray-200 pt-8 lg:grid-cols-[220px_1fr] lg:gap-16 dark:border-gray-800">
        <aside>
          <nav
            aria-label="글 주제"
            className="no-scrollbar flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-28 lg:flex-col lg:items-start lg:overflow-visible"
          >
            <Link
              href="/blog"
              className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition-colors lg:rounded-md ${
                pathname.startsWith('/blog')
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900'
              }`}
            >
              전체 글 <span className="ml-1 opacity-60">{posts.length}</span>
            </Link>
            {sortedTags.map((tag) => {
              const isActive = activeTag === slug(tag)
              return (
                <Link
                  key={tag}
                  href={`/tags/${slug(tag)}`}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors lg:rounded-md ${
                    isActive
                      ? 'bg-primary-500 font-medium text-white'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900'
                  }`}
                >
                  {tag} <span className="ml-1 opacity-60">{tagCounts[tag]}</span>
                </Link>
              )
            })}
          </nav>
        </aside>

        <div className="max-w-4xl min-w-0">
          {!displayPosts.length && (
            <p className="rounded-xl bg-gray-100 p-8 text-gray-600 dark:bg-gray-900 dark:text-gray-400">
              이 주제의 글이 아직 없습니다.
            </p>
          )}
          <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {displayPosts.map((post) => {
              const { path, date, title: postTitle, summary, tags, readingTime } = post
              return (
                <article key={path} className="py-9 first:pt-7 sm:py-11">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{Math.max(1, Math.round(readingTime?.minutes || 1))}분 읽기</span>
                  </div>
                  <h2 className="font-display mt-4 text-3xl leading-[1.16] tracking-[-0.04em] sm:text-4xl">
                    <Link
                      href={`/${path}`}
                      className="hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                    >
                      {postTitle}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-3xl leading-7 text-gray-600 dark:text-gray-400">
                    {summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags?.slice(0, 5).map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </div>
    </div>
  )
}
