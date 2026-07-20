import ResumePage from '@/components/ResumePage'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: '레쥬메',
  description: '이성록의 AI·소프트웨어 엔지니어링 경력, 프로젝트, 학력과 기술 역량을 소개합니다.',
  alternates: {
    canonical: '/resume',
    languages: { 'ko-KR': '/resume', 'en-US': '/en/resume' },
  },
})

export default function KoreanResumePage() {
  return <ResumePage locale="ko" />
}
