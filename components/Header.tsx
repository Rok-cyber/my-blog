'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks, { englishHeaderNavLinks } from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getLanguageSwitchHref, localeFromPathname } from '@/lib/i18n'
import translationData from '../app/translation-data.json'

const Header = () => {
  const pathname = usePathname()
  const locale = localeFromPathname(pathname)
  const isEnglish = locale === 'en'
  const navLinks = isEnglish ? englishHeaderNavLinks : headerNavLinks
  const languageHref = getLanguageSwitchHref(pathname, translationData as Record<string, string>)

  useEffect(() => {
    document.documentElement.lang = isEnglish ? 'en' : 'ko'
  }, [isEnglish])

  let headerClass =
    'w-full border-b border-gray-200/80 bg-gray-50/95 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/92'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={`${headerClass} site-header`}>
      <SectionContainer>
        <div className="flex h-16 items-center justify-between sm:h-[72px]">
          <Link
            href={isEnglish ? '/en' : '/'}
            aria-label={siteMetadata.headerTitle}
            className="group flex items-center gap-3"
          >
            <span className="bg-primary-500 group-hover:bg-primary-600 flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold text-white transition-colors">
              SR
            </span>
            <span className="font-display text-xl tracking-[-0.03em] text-gray-950 dark:text-gray-50">
              Seongrok Lee
            </span>
          </Link>
          <div className="flex items-center gap-2 leading-5 sm:gap-3">
            <nav
              className="no-scrollbar hidden items-center gap-6 overflow-x-auto md:flex"
              aria-label={isEnglish ? 'Primary navigation' : '주요 메뉴'}
            >
              {navLinks
                .filter((link) => link.href !== (isEnglish ? '/en' : '/'))
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium text-gray-700 transition-colors dark:text-gray-300"
                  >
                    {link.title}
                  </Link>
                ))}
            </nav>
            <span className="mx-1 hidden h-5 w-px bg-gray-200 md:block dark:bg-gray-800" />
            <Link
              href={languageHref}
              hrefLang={isEnglish ? 'ko' : 'en'}
              className="hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hidden min-h-9 items-center rounded-full border border-gray-300 px-3 text-xs font-semibold transition-colors sm:inline-flex dark:border-gray-700"
              aria-label={isEnglish ? '한국어로 보기' : 'View in English'}
            >
              {isEnglish ? '한국어' : 'EN'}
            </Link>
            <SearchButton />
            <ThemeSwitch />
            <MobileNav links={navLinks} languageHref={languageHref} isEnglish={isEnglish} />
          </div>
        </div>
      </SectionContainer>
    </header>
  )
}

export default Header
