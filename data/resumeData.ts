export type ResumeLocale = 'ko' | 'en'

type ResumeItem = {
  organization: string
  location?: string
  title: string
  period: string
  details: string[]
}

type ResumeData = {
  eyebrow: string
  headline: string
  summary: string
  location: string
  currentRole: string
  educationSummary: string
  actions: {
    email: string
    linkedin: string
    github: string
    print: string
  }
  sectionLabels: {
    experience: string
    projects: string
    education: string
    skills: string
  }
  experience: ResumeItem[]
  projects: ResumeItem[]
  education: ResumeItem[]
  skills: { label: string; items: string[] }[]
  updated: string
}

export const resumeContact = {
  email: 'rokbnoc@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ethan-lee-16063b257/',
  github: 'https://github.com/Rok-cyber',
}

export const resumeData: Record<ResumeLocale, ResumeData> = {
  ko: {
    eyebrow: 'Resume · AI / Software Engineering',
    headline: 'AI 시스템을 구축하고, 실제 운영에서 검증합니다.',
    summary:
      '의료영상 원격 모니터링부터 멀티모달 AI 리포트까지, 백엔드·데이터·자동화·품질을 연결해 실제 사용되는 시스템을 만듭니다.',
    location: 'Atlanta, Georgia',
    currentRole: 'Junior Software Engineer · Digit Systems',
    educationSummary: 'Columbia University · M.S. in Artificial Intelligence',
    actions: {
      email: '이메일',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      print: '인쇄 · PDF 저장',
    },
    sectionLabels: {
      experience: '경력',
      projects: '주요 프로젝트',
      education: '학력',
      skills: '기술',
    },
    experience: [
      {
        organization: 'Digit Systems',
        location: 'Atlanta, GA',
        title: 'Junior Software Engineer',
        period: '2026.01 — 현재',
        details: [
          'MRI·CT 유지보수를 지원하는 ERP 및 원격 모니터링 플랫폼의 백엔드 서비스, 데이터베이스 연동, 웹 기능을 개발했습니다.',
          'Python으로 Raspberry Pi 설치와 Linux 배포 과정을 자동화해 30대 이상의 의료 장비에 적용했습니다.',
          'Node.js, Python, WebSocket 기반 원격 모니터링 시스템을 100곳 이상의 고객 의료영상 설치 환경에서 배포·검증했습니다.',
          'Playwright E2E 테스트 200건 이상을 구축하고 애플리케이션 결함 5건을 찾아 수정했으며, MySQL 운영 이슈를 해결했습니다.',
        ],
      },
      {
        organization: '대한민국 공군 제11전투비행단',
        location: '대구',
        title: '정보통신 운영병 · 병장',
        period: '2020.01 — 2021.10',
        details: [
          '군 네트워크 인프라, SQL 데이터베이스, 운영 보고 시스템을 관리했습니다.',
          '공군 사이버보안 교육을 이수하고 부대의 최고 보안검열 등급 달성에 기여했습니다.',
        ],
      },
    ],
    projects: [
      {
        organization: 'HTP AI Reflection Platform',
        title: 'AI 기반 멀티모달 성찰 리포트 플랫폼',
        period: '2026.05 — 현재',
        details: [
          'Angular, Node.js, MariaDB, OpenAI API를 활용해 3,000건 이상의 AI 리포트를 생성하는 플랫폼을 구축했습니다.',
          '시각·텍스트 입력을 성찰 리포트로 변환하는 멀티모달 워크플로를 설계해 80% 이상의 긍정적 사용자 피드백을 얻었습니다.',
          '프리미엄 AI 리포트 생성을 지원하는 확장 가능한 백엔드 파이프라인을 개발했습니다.',
        ],
      },
      {
        organization: 'TakeOutNote & E-Commerce Shop',
        title: '풀스택 노트·커머스 플랫폼',
        period: '2025.08',
        details: [
          'PHP, React, MySQL, AWS로 노트 작성과 전자상거래 기능을 통합한 서비스를 구축했습니다.',
          'JWT 인증과 REST API를 구현하고 AWS EC2·RDS에 배포해 클라우드 인프라 전반을 운영했습니다.',
        ],
      },
    ],
    education: [
      {
        organization: 'Columbia University',
        location: 'New York, NY',
        title: 'M.S. in Artificial Intelligence · CVN',
        period: '2028 졸업 예정',
        details: [],
      },
      {
        organization: 'University of Wisconsin–Madison',
        location: 'Madison, WI',
        title: 'B.S. in Computer Science · GPA 3.50 / 4.00',
        period: '2025.12',
        details: [
          'Artificial Intelligence, Data Structures, Advanced Algorithms, Machine Organization and Computer Systems, Big Data Systems, Statistical Modeling',
        ],
      },
    ],
    skills: [
      { label: 'Languages', items: ['Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'PHP'] },
      {
        label: 'Frameworks & Tools',
        items: [
          'Spring Boot',
          'Node.js',
          'React',
          'Angular',
          'REST APIs',
          'Docker',
          'Linux',
          'Playwright',
        ],
      },
      {
        label: 'Cloud, Data & AI',
        items: ['AWS', 'MySQL', 'MariaDB', 'OpenAI API', 'PyTorch', 'Hugging Face'],
      },
    ],
    updated: '2026년 7월 기준',
  },
  en: {
    eyebrow: 'Résumé · AI / Software Engineering',
    headline: 'Building AI systems—and proving them in production.',
    summary:
      'I connect backend engineering, data, automation, and software quality to build systems used in medical imaging operations and multimodal AI products.',
    location: 'Atlanta, Georgia',
    currentRole: 'Junior Software Engineer · Digit Systems',
    educationSummary: 'Columbia University · M.S. in Artificial Intelligence',
    actions: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      print: 'Print · Save PDF',
    },
    sectionLabels: {
      experience: 'Experience',
      projects: 'Selected Projects',
      education: 'Education',
      skills: 'Technical Skills',
    },
    experience: [
      {
        organization: 'Digit Systems',
        location: 'Atlanta, GA',
        title: 'Junior Software Engineer',
        period: 'Jan. 2026 — Present',
        details: [
          'Develop backend services, database integrations, and web features for ERP and remote monitoring platforms supporting MRI and CT maintenance.',
          'Automated Raspberry Pi installation and Linux deployment workflows with Python across 30+ medical devices.',
          'Support Node.js, Python, and WebSocket-based remote monitoring deployments across 100+ customer medical imaging installations.',
          'Built 200+ Playwright end-to-end tests, identified and resolved five application defects, and maintained production MySQL systems.',
        ],
      },
      {
        organization: 'Republic of Korea Air Force, 11th Tactical Fighter Wing',
        location: 'Daegu, South Korea',
        title: 'Telecommunications Operations Specialist · Sergeant',
        period: 'Jan. 2020 — Oct. 2021',
        details: [
          'Managed military network infrastructure, SQL databases, and operational reporting systems.',
          'Completed ROKAF cybersecurity training and contributed to the unit achieving its highest security inspection rating.',
        ],
      },
    ],
    projects: [
      {
        organization: 'HTP AI Reflection Platform',
        title: 'Multimodal AI Reflection Reports',
        period: 'May 2026 — Present',
        details: [
          'Built an AI platform that has generated 3,000+ reports using Angular, Node.js, MariaDB, and OpenAI APIs.',
          'Designed a multimodal workflow that transforms visual and textual inputs into reflection reports, earning 80%+ favorable user feedback.',
          'Developed scalable backend pipelines supporting premium AI report generation.',
        ],
      },
      {
        organization: 'TakeOutNote & E-Commerce Shop',
        title: 'Full-Stack Notes and Commerce Platform',
        period: 'Aug. 2025',
        details: [
          'Built a note-taking and e-commerce platform with PHP, React, MySQL, and AWS.',
          'Implemented JWT authentication and REST APIs, then deployed and managed the application on AWS EC2 and RDS.',
        ],
      },
    ],
    education: [
      {
        organization: 'Columbia University',
        location: 'New York, NY',
        title: 'M.S. in Artificial Intelligence · CVN',
        period: 'Expected 2028',
        details: [],
      },
      {
        organization: 'University of Wisconsin–Madison',
        location: 'Madison, WI',
        title: 'B.S. in Computer Science · GPA 3.50 / 4.00',
        period: 'Dec. 2025',
        details: [
          'Artificial Intelligence, Data Structures, Advanced Algorithms, Machine Organization and Computer Systems, Big Data Systems, Statistical Modeling',
        ],
      },
    ],
    skills: [
      { label: 'Languages', items: ['Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'PHP'] },
      {
        label: 'Frameworks & Tools',
        items: [
          'Spring Boot',
          'Node.js',
          'React',
          'Angular',
          'REST APIs',
          'Docker',
          'Linux',
          'Playwright',
        ],
      },
      {
        label: 'Cloud, Data & AI',
        items: ['AWS', 'MySQL', 'MariaDB', 'OpenAI API', 'PyTorch', 'Hugging Face'],
      },
    ],
    updated: 'Updated July 2026',
  },
}
