import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import { formatDate } from '@/lib/formatDate'

const TOPICS = [
  {
    number: '01',
    role: 'Primary field',
    title: 'AI Systems & Governance',
    description: '에이전트형 AI의 권한, 책임, 감사 가능성과 실제 가치를 연구합니다.',
    href: '/tags/ai',
    primary: true,
  },
  {
    number: '02',
    role: 'Implementation layer',
    title: 'Software Engineering',
    description: 'AI 아이디어를 검증 가능한 제품과 안정적인 운영 시스템으로 구현합니다.',
    href: '/tags/개발-회고',
    primary: false,
  },
  {
    number: '03',
    role: 'Application domain',
    title: 'Public & Urban Futures',
    description: 'AI와 기술을 도시·공공 문제에 적용하며 새로운 가능성을 탐색합니다.',
    href: '/tags/대구',
    primary: false,
  },
]

export default function Home({ posts }) {
  const featured =
    posts.find((post) => post.tags?.some((tag) => tag.toLowerCase() === 'ai')) || posts[0]
  const rest = posts.filter((post) => post.slug !== featured?.slug)

  return (
    <div className="space-y-24 pb-8 sm:space-y-32">
      {featured && (
        <section className="border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Featured AI note</p>
              <h2 className="section-title mt-3">AI에서 시작하는 글</h2>
            </div>
            <Link href="/blog" className="text-link hidden sm:inline-flex">
              모든 글 <span aria-hidden="true">→</span>
            </Link>
          </div>
          <article className="grid overflow-hidden rounded-2xl bg-gray-100 lg:grid-cols-[1.05fr_0.95fr] dark:bg-gray-900">
            {featured.images?.[0] ? (
              <Link
                href={`/blog/${featured.slug}`}
                className="relative min-h-72 overflow-hidden lg:min-h-[460px]"
              >
                <Image
                  src={featured.images[0]}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </Link>
            ) : (
              <Link
                href={`/blog/${featured.slug}`}
                className="relative min-h-72 overflow-hidden lg:min-h-[460px]"
              >
                <Image
                  src="/og.png"
                  alt="Seongrok Lee AI systems and governance"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </Link>
            )}
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{Math.max(1, Math.round(featured.readingTime?.minutes || 1))}분 읽기</span>
                </div>
                <h3 className="font-display text-4xl leading-[1.12] tracking-[-0.045em] text-gray-950 sm:text-5xl dark:text-gray-50">
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h3>
                <p className="mt-6 leading-7 text-gray-600 dark:text-gray-400">
                  {featured.summary}
                </p>
              </div>
              <div className="mt-10">
                <div className="mb-6 flex flex-wrap gap-2">
                  {featured.tags?.slice(0, 4).map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <Link href={`/blog/${featured.slug}`} className="text-link">
                  계속 읽기 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        </section>
      )}

      <section>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">More notes</p>
            <h2 className="section-title mt-3">최근 기록</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {rest.slice(0, 3).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <article
                key={slug}
                className="card-surface flex min-h-80 flex-col justify-between p-7"
              >
                <div>
                  <time dateTime={date} className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(date)}
                  </time>
                  <h3 className="font-display mt-7 text-3xl leading-[1.15] tracking-[-0.04em]">
                    <Link href={`/blog/${slug}`}>{title}</Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 leading-7 text-gray-600 dark:text-gray-400">
                    {summary}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {tags?.slice(0, 2).map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </article>
            )
          })}
        </div>
        <Link href="/blog" className="text-link mt-8 inline-flex sm:hidden">
          모든 글 <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section>
        <p className="eyebrow">AI-first framework</p>
        <h2 className="section-title mt-3">AI를 중심으로 확장하는 세 개의 층</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-[1.2fr_1fr_1fr]">
          {TOPICS.map((topic) => (
            <Link
              key={topic.number}
              href={topic.href}
              className={`group rounded-xl p-8 transition-colors ${
                topic.primary
                  ? 'bg-gray-950 text-gray-50 dark:border dark:border-gray-800'
                  : 'card-surface'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-primary-500 text-xs font-semibold">{topic.number}</span>
                <span className="text-xs tracking-[0.12em] text-gray-500 uppercase">
                  {topic.role}
                </span>
              </div>
              <h3 className="font-display group-hover:text-primary-500 mt-12 text-3xl tracking-[-0.04em] transition-colors">
                {topic.title}
              </h3>
              <p
                className={`mt-4 leading-7 ${
                  topic.primary ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {topic.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
