import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from '@/components/Link'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
  locale?: 'ko' | 'en'
}

export default function AuthorLayout({ children, content, locale = 'ko' }: Props) {
  const { name, avatar, occupation, company, email, linkedin, github } = content
  const isEnglish = locale === 'en'

  return (
    <>
      <div lang={isEnglish ? 'en' : 'ko'} className="py-14 sm:py-20">
        <div className="max-w-4xl">
          <p className="eyebrow">About</p>
          <h1 className="font-display mt-4 text-5xl leading-[1.05] tracking-[-0.055em] sm:text-7xl">
            {isEnglish ? 'Building AI systems,' : 'AI를 시스템으로 만들고,'}
            <span className="text-primary-600 dark:text-primary-400 block">
              {isEnglish ? 'then proving them in the real world.' : '실제 운영에서 검증합니다.'}
            </span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-3 print:hidden">
            <Link href={isEnglish ? '/en/resume' : '/resume'} className="button-primary">
              {isEnglish ? 'View résumé' : '레쥬메 보기'} <span aria-hidden="true">→</span>
            </Link>
            <Link href={`mailto:${email}`} className="button-secondary">
              {isEnglish ? 'Get in touch' : '연락하기'}
            </Link>
          </div>
        </div>
        <div className="mt-14 grid items-start gap-10 border-t border-gray-200 pt-10 lg:grid-cols-[320px_1fr] lg:gap-16 dark:border-gray-800">
          <aside className="rounded-2xl bg-gray-100 p-7 dark:bg-gray-900">
            {avatar && (
              <Image
                src={avatar}
                alt={isEnglish ? `${name} profile` : `${name} 프로필 사진`}
                width={320}
                height={320}
                className="aspect-square w-full rounded-xl object-cover"
              />
            )}
            <h2 className="font-display pt-6 text-3xl tracking-[-0.04em]">{name}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{occupation}</p>
            <p className="mt-1 text-sm leading-6 text-gray-500">{company}</p>
            <div className="mt-6 flex space-x-4 border-t border-gray-200 pt-5 dark:border-gray-800">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
            </div>
          </aside>
          <div className="prose dark:prose-invert max-w-none pb-8 text-[1.06rem] leading-8">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
