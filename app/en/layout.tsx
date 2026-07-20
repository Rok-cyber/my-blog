import type { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

export const metadata: Metadata = {
  title: {
    default: 'AI Outlook | Seongrok Lee',
    template: `%s | ${siteMetadata.title}`,
  },
  description:
    'A biweekly outlook on AI markets, emerging technology, agent systems, governance, and future scenarios.',
  alternates: {
    canonical: '/en',
    languages: {
      'ko-KR': '/',
      'en-US': '/en',
    },
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/en/feed.xml`,
    },
  },
  openGraph: {
    locale: 'en_US',
    alternateLocale: ['ko_KR'],
  },
}

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en">{children}</div>
}
