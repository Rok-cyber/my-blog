import Link from '@/components/Link'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: '주제',
  description: '블로그에서 다루는 주제 모음',
})

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <div className="py-14 sm:py-20">
      <header className="max-w-3xl">
        <p className="eyebrow">Topics</p>
        <h1 className="font-display mt-4 text-5xl tracking-[-0.055em] sm:text-7xl">
          주제별로 읽기
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          흩어진 글 사이의 연결점을 주제별로 살펴보세요.
        </p>
      </header>
      <div className="mt-12 grid gap-3 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:grid-cols-3 dark:border-gray-800">
        {tagKeys.length === 0 && '아직 등록된 주제가 없습니다.'}
        {sortedTags.map((t) => {
          return (
            <Link
              key={t}
              href={`/tags/${slug(t)}`}
              className="group hover:border-primary-300 dark:hover:border-primary-800 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-100 p-5 transition-colors dark:border-gray-800 dark:bg-gray-900"
              aria-label={`${t} 주제 글 보기`}
            >
              <span className="font-display group-hover:text-primary-700 dark:group-hover:text-primary-400 text-2xl tracking-[-0.03em]">
                {t}
              </span>
              <span className="text-sm text-gray-500">{tagCounts[t]}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
