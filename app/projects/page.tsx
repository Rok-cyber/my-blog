import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: '프로젝트',
  description:
    'AI 시스템을 중심으로 소프트웨어 구현과 도시·공공 영역의 적용을 연결하는 프로젝트입니다.',
})

export default function Projects() {
  return (
    <>
      <div className="py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Selected projects</p>
          <h1 className="font-display mt-4 text-5xl leading-tight tracking-[-0.055em] sm:text-7xl">
            AI를 실제로 작동시키는 프로젝트
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            AI 시스템과 거버넌스를 중심에 둡니다. 소프트웨어로 구현하고, 도시와 공공의 문제를 실제
            적용 영역으로 확장하는 작업을 소개합니다.
          </p>
        </div>
        <div className="mt-14 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
