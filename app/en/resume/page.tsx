import ResumePage from '@/components/ResumePage'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Résumé',
  description:
    'Seongrok Lee’s experience, selected AI projects, education, and technical capabilities.',
  locale: 'en',
  alternates: {
    canonical: '/en/resume',
    languages: { 'ko-KR': '/resume', 'en-US': '/en/resume' },
  },
})

export default function EnglishResumePage() {
  return <ResumePage locale="en" />
}
