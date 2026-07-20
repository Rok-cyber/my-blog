interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AI Systems & Governance',
    description:
      '에이전트형 AI의 실행 권한, 책임, 감사 가능성, 실제 가치 검증을 기술과 정책의 언어로 연구합니다.',
    imgSrc: '/og.png',
    href: '/blog/ai_governance_may1',
  },
  {
    title: 'UNDERGROUND DAEGU',
    description:
      '대구의 보이지 않는 역사 자산을 발굴하고, 공간·콘텐츠·정책을 하나의 도시 전략으로 엮는 장기 프로젝트입니다.',
    imgSrc: '/static/images/d1_1.png',
    href: '/blog/underground-daegu',
  },
  {
    title: '달성고분군 리서치 아카이브',
    description:
      '도심 속에서 사라진 고분군의 기록을 추적하고, 복원·공원화·거버넌스의 가능성을 단계적으로 검토합니다.',
    imgSrc: '/static/images/d1_11.png',
    href: '/blog/dalseong-part1',
  },
]

export const englishProjectsData: Project[] = [
  {
    title: 'AI Systems & Governance',
    description:
      'Research on agent authority, accountability, auditability, and the evidence required to prove real-world value.',
    imgSrc: '/og.png',
    href: '/en/blog',
  },
  {
    title: 'UNDERGROUND DAEGU',
    description:
      'A long-term strategy connecting hidden urban history with place, narrative, policy, and new public experiences.',
    imgSrc: '/static/images/d1_1.png',
  },
  {
    title: 'Dalseong Tombs Research Archive',
    description:
      'Research into a lost urban heritage site and the possibilities of restoration, public space, and collaborative governance.',
    imgSrc: '/static/images/d1_11.png',
  },
]

export default projectsData
