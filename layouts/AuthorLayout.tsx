import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, linkedin, github } = content

  return (
    <>
      <div className="py-14 sm:py-20">
        <div className="max-w-4xl">
          <p className="eyebrow">About</p>
          <h1 className="font-display mt-4 text-5xl leading-[1.05] tracking-[-0.055em] sm:text-7xl">
            AI를 중심으로,
            <span className="text-primary-600 dark:text-primary-400 block">
              실제 세계에 작동할 구조를 찾습니다.
            </span>
          </h1>
        </div>
        <div className="mt-14 grid items-start gap-10 border-t border-gray-200 pt-10 lg:grid-cols-[320px_1fr] lg:gap-16 dark:border-gray-800">
          <aside className="rounded-2xl bg-gray-100 p-7 dark:bg-gray-900">
            {avatar && (
              <Image
                src={avatar}
                alt={`${name} 프로필 사진`}
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
