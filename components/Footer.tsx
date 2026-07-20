import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-24 bg-gray-950 text-gray-100">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr] lg:px-10 lg:py-16">
        <div>
          <p className="text-primary-400 mb-4 text-xs font-semibold tracking-[0.18em] uppercase">
            AI Systems · Agents · Governance
          </p>
          <p className="font-display max-w-xl text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
            AI 시스템을 연구하고, 실제 운영과 공공의 미래에 적용합니다.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-8 md:items-end">
          <div className="flex gap-5 text-gray-300">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
            <SocialIcon kind="github" href={siteMetadata.github} size={5} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={5} />
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400">
            <Link href="/blog">글</Link>
            <Link href="/projects">프로젝트</Link>
            <Link href="/about">소개</Link>
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {siteMetadata.author}. Built with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
