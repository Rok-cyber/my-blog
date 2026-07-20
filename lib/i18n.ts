export type SiteLocale = 'ko' | 'en'

export function localeFromPathname(pathname: string): SiteLocale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ko'
}

export function getLanguageSwitchHref(
  pathname: string,
  translationMap: Record<string, string> = {}
): string {
  if (translationMap[pathname]) return translationMap[pathname]

  if (localeFromPathname(pathname) === 'en') {
    if (pathname === '/en') return '/'
    if (pathname === '/en/blog') return '/blog'
    if (pathname.startsWith('/en/blog/')) return '/blog'
    if (pathname === '/en/tags') return '/tags'
    if (pathname.startsWith('/en/tags/')) return '/tags'
    if (pathname === '/en/projects') return '/projects'
    if (pathname === '/en/resume') return '/resume'
    if (pathname === '/en/about') return '/about'
    return '/'
  }

  if (pathname === '/') return '/en'
  if (pathname === '/blog') return '/en/blog'
  if (pathname.startsWith('/blog/')) return '/en/blog'
  if (pathname === '/tags') return '/en/tags'
  if (pathname.startsWith('/tags/')) return '/en/tags'
  if (pathname === '/projects') return '/en/projects'
  if (pathname === '/resume') return '/en/resume'
  if (pathname === '/about') return '/en/about'
  return '/en'
}

export function isEnglishPost(post: { language?: string }): boolean {
  return post.language === 'en'
}

export function isKoreanPost(post: { language?: string }): boolean {
  return !isEnglishPost(post)
}

export function getPostHref(post: { path: string }): string {
  return `/${post.path}`
}
