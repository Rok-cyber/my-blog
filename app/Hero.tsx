import Link from 'next/link'

export default function Hero({ locale = 'ko' }: { locale?: 'ko' | 'en' }) {
  const isEnglish = locale === 'en'

  return (
    <section
      lang={isEnglish ? 'en' : 'ko'}
      className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.35fr_0.85fr] lg:items-center lg:gap-16 lg:py-28"
    >
      <div>
        <p className="text-primary-600 dark:text-primary-400 mb-6 text-xs font-semibold tracking-[0.18em] uppercase">
          {isEnglish
            ? 'Biweekly AI Outlook · Systems · Governance'
            : 'AI Systems · Agents · Governance'}
        </p>
        <h1 className="font-display max-w-4xl text-[clamp(2.9rem,7vw,6.4rem)] leading-[0.98] tracking-[-0.06em] text-gray-950 dark:text-gray-50">
          {isEnglish ? 'Reading the AI shift,' : 'AI를 실제 시스템으로 만들고,'}
          <span className="text-primary-600 dark:text-primary-400 block">
            {isEnglish ? 'before it becomes obvious.' : '책임 있게 운영합니다.'}
          </span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-400">
          {isEnglish
            ? 'A biweekly field note on AI markets, emerging technology, agent systems, and the futures they may create—grounded in evidence, engineering, and governance.'
            : 'AI 에이전트의 권한, 책임, 가치 검증을 연구하고 구현합니다. 소프트웨어는 이를 현실로 만드는 기반이며, 도시와 공공은 AI를 실제 세계에 적용하는 대표 영역입니다.'}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href={isEnglish ? '/en/blog' : '/blog'} className="button-primary">
            {isEnglish ? 'Read the outlook' : '글 읽기'} <span aria-hidden="true">→</span>
          </Link>
          <Link href={isEnglish ? '/en/about' : '/projects'} className="button-secondary">
            {isEnglish ? 'About this edition' : '프로젝트 보기'}
          </Link>
        </div>
      </div>
      <aside className="relative overflow-hidden rounded-2xl bg-gray-950 p-7 text-gray-50 sm:p-9 dark:border dark:border-gray-800">
        <div className="bg-primary-500 absolute top-0 right-0 h-32 w-32 rounded-bl-full opacity-90" />
        <div className="bg-accent-500 absolute right-10 bottom-0 h-20 w-20 rounded-t-full opacity-80" />
        <div className="relative">
          <p className="text-primary-400 text-xs font-semibold tracking-[0.18em] uppercase">
            {isEnglish ? 'Editorial lens' : 'Working notes'}
          </p>
          <h2 className="font-display mt-12 max-w-xs text-4xl leading-[1.08] tracking-[-0.04em]">
            {isEnglish
              ? 'Signals first. Systems second. Futures with accountability.'
              : 'AI를 중심에 두고, 구현과 적용으로 확장합니다.'}
          </h2>
          <div className="mt-12 divide-y divide-gray-800 border-y border-gray-800">
            {(isEnglish
              ? [
                  ['01', 'Market signals', 'Capital · adoption · competition'],
                  ['02', 'Technology shifts', 'Models · agents · infrastructure'],
                  ['03', 'Future scenarios', 'Work · policy · public life'],
                ]
              : [
                  ['01', 'AI systems', '에이전트 · 거버넌스 · 가치'],
                  ['02', 'Software layer', '설계 · 구현 · 운영'],
                  ['03', 'Applied futures', '도시 · 공공 · 정책'],
                ]
            ).map(([number, title, description]) => (
              <div key={number} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4">
                <span className="text-primary-400 text-xs">{number}</span>
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="mt-1 text-sm text-gray-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  )
}
