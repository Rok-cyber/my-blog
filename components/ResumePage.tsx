import Link from '@/components/Link'
import PrintResumeButton from '@/components/PrintResumeButton'
import { resumeContact, resumeData } from '@/data/resumeData'
import type { ResumeLocale } from '@/data/resumeData'

export default function ResumePage({ locale }: { locale: ResumeLocale }) {
  const content = resumeData[locale]
  const isEnglish = locale === 'en'

  return (
    <article lang={isEnglish ? 'en' : 'ko'} className="resume-page py-14 sm:py-20">
      <header className="border-b border-gray-200 pb-12 dark:border-gray-800">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 className="font-display mt-5 max-w-5xl text-[clamp(3rem,7vw,6.6rem)] leading-[0.98] tracking-[-0.06em] text-gray-950 dark:text-gray-50">
          {content.headline}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-300">
          {content.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-300">
          {[content.location, content.currentRole, content.educationSummary].map((item) => (
            <span
              key={item}
              className="rounded-full border border-gray-300 px-3 py-1.5 dark:border-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="resume-actions mt-9 flex flex-wrap gap-3">
          <Link href={`mailto:${resumeContact.email}`} className="button-primary">
            {content.actions.email}
          </Link>
          <Link href={resumeContact.linkedin} className="button-secondary">
            {content.actions.linkedin}
          </Link>
          <Link href={resumeContact.github} className="button-secondary">
            {content.actions.github}
          </Link>
          <PrintResumeButton label={content.actions.print} />
        </div>
      </header>

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <div className="space-y-16">
          <ResumeSection number="01" title={content.sectionLabels.experience}>
            {content.experience.map((item) => (
              <ResumeEntry key={`${item.organization}-${item.period}`} item={item} />
            ))}
          </ResumeSection>

          <ResumeSection number="02" title={content.sectionLabels.projects}>
            {content.projects.map((item) => (
              <ResumeEntry key={`${item.organization}-${item.period}`} item={item} />
            ))}
          </ResumeSection>
        </div>

        <aside className="space-y-10 lg:sticky lg:top-28">
          <section className="card-surface p-7 print:border-gray-300 print:bg-white">
            <p className="eyebrow">{content.sectionLabels.education}</p>
            <div className="mt-6 space-y-7">
              {content.education.map((item) => (
                <div key={item.organization}>
                  <h2 className="font-display text-2xl leading-tight tracking-[-0.035em]">
                    {item.organization}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    {item.location} · {item.period}
                  </p>
                  {item.details.map((detail) => (
                    <p
                      key={detail}
                      className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-gray-950 p-7 text-gray-50 print:border print:border-gray-300 print:bg-white print:text-gray-950">
            <p className="text-primary-400 print:text-primary-700 text-xs font-semibold tracking-[0.18em] uppercase">
              {content.sectionLabels.skills}
            </p>
            <div className="mt-6 space-y-6">
              {content.skills.map((group) => (
                <div key={group.label}>
                  <h2 className="text-sm font-semibold">{group.label}</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-gray-700 px-2.5 py-1 text-xs text-gray-300 print:border-gray-300 print:text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <p className="text-xs text-gray-500">{content.updated}</p>
        </aside>
      </div>
    </article>
  )
}

function ResumeSection({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="mb-8 flex items-center gap-4 border-b border-gray-200 pb-4 dark:border-gray-800">
        <span className="text-primary-600 dark:text-primary-400 text-xs font-semibold">
          {number}
        </span>
        <h2 className="font-display text-4xl tracking-[-0.045em]">{title}</h2>
      </div>
      <div className="space-y-10">{children}</div>
    </section>
  )
}

function ResumeEntry({ item }: { item: (typeof resumeData.ko.experience)[number] }) {
  return (
    <section className="grid gap-4 sm:grid-cols-[1fr_auto] sm:gap-x-8">
      <div>
        <h3 className="font-display text-3xl leading-tight tracking-[-0.04em]">
          {item.organization}
        </h3>
        <p className="mt-2 font-medium text-gray-800 dark:text-gray-100">{item.title}</p>
      </div>
      <div className="text-sm text-gray-500 sm:text-right">
        <p>{item.period}</p>
        {item.location && <p className="mt-1">{item.location}</p>}
      </div>
      <ul className="space-y-3 text-[1.02rem] leading-7 text-gray-700 sm:col-span-2 dark:text-gray-300">
        {item.details.map((detail) => (
          <li key={detail} className="grid grid-cols-[0.75rem_1fr] gap-2">
            <span className="text-primary-500" aria-hidden="true">
              •
            </span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
