import { englishProjectsData } from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Projects',
  description: 'Projects connecting AI systems, software, governance, and public futures.',
  locale: 'en',
  alternates: {
    canonical: '/en/projects',
    languages: { 'ko-KR': '/projects', 'en-US': '/en/projects' },
  },
})

export default function EnglishProjectsPage() {
  return (
    <div lang="en" className="py-14 sm:py-20">
      <div className="max-w-3xl">
        <p className="eyebrow">Selected projects</p>
        <h1 className="font-display mt-4 text-5xl leading-tight tracking-[-0.055em] sm:text-7xl">
          Making AI work in the real world
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          Work at the intersection of AI systems, implementation, governance, and public futures.
        </p>
      </div>
      <div className="mt-14 border-t border-gray-200 pt-8 dark:border-gray-800">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {englishProjectsData.map((project) => (
            <Card key={project.title} {...project} locale="en" />
          ))}
        </div>
      </div>
    </div>
  )
}
