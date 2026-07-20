import Link from '@/components/Link'
import { slug } from 'github-slugger'
import tagData from 'app/en/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Topics',
  description: 'Topics covered in the English AI outlook.',
  locale: 'en',
  alternates: {
    canonical: '/en/tags',
    languages: { 'ko-KR': '/tags', 'en-US': '/en/tags' },
  },
})

export default async function EnglishTagsPage() {
  const tagCounts = tagData as Record<string, number>
  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <div lang="en" className="py-14 sm:py-20">
      <header className="max-w-3xl">
        <p className="eyebrow">Topics</p>
        <h1 className="font-display mt-4 text-5xl tracking-[-0.055em] sm:text-7xl">
          Follow the signals
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Browse the ideas connecting AI markets, technology, systems, governance, and future
          scenarios.
        </p>
      </header>
      <div className="mt-12 grid gap-3 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:grid-cols-3 dark:border-gray-800">
        {sortedTags.length === 0 && (
          <p className="text-gray-600 dark:text-gray-300">
            Topics will appear with the first English outlook.
          </p>
        )}
        {sortedTags.map((tag) => (
          <Link
            key={tag}
            href={`/en/tags/${slug(tag)}`}
            className="group hover:border-primary-300 dark:hover:border-primary-800 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-100 p-5 transition-colors dark:border-gray-800 dark:bg-gray-900"
            aria-label={`View writing about ${tag}`}
          >
            <span className="font-display group-hover:text-primary-700 dark:group-hover:text-primary-400 text-2xl tracking-[-0.03em]">
              {tag}
            </span>
            <span className="text-sm text-gray-500">{tagCounts[tag]}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
