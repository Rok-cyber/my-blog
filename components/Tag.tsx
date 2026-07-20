import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  locale?: 'ko' | 'en'
}

const Tag = ({ text, locale = 'ko' }: Props) => {
  return (
    <Link
      href={`${locale === 'en' ? '/en' : ''}/tags/${slug(text)}`}
      className="hover:border-primary-300 hover:text-primary-700 dark:hover:border-primary-700 dark:hover:text-primary-300 inline-flex rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 transition-colors dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
    >
      {text}
    </Link>
  )
}

export default Tag
