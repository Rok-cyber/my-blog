import type { ReactNode } from 'react'

type InfoBoxProps = {
  title: string
  children: ReactNode
}

export function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <aside className="border-primary-200 bg-primary-50 dark:border-primary-700 dark:bg-primary-950/30 my-6 rounded-lg border p-5 text-gray-800 dark:text-gray-100">
      <p className="text-primary-600 dark:text-primary-300 mb-2 text-sm font-semibold tracking-wide uppercase">
        {title}
      </p>
      <div className="prose prose-sm dark:prose-invert max-w-none">{children}</div>
    </aside>
  )
}
