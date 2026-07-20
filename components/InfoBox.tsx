import type { ReactNode } from 'react'

type InfoBoxProps = {
  title: string
  children: ReactNode
}

export function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <aside className="border-primary-200 bg-primary-50 dark:border-primary-900 dark:bg-primary-950/25 my-8 rounded-xl border p-6 text-gray-800 dark:text-gray-100">
      <p className="text-primary-700 dark:text-primary-300 mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
        {title}
      </p>
      <div className="prose prose-sm dark:prose-invert max-w-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </aside>
  )
}
