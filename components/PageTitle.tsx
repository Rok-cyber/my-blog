import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="font-display text-4xl leading-[1.08] tracking-[-0.055em] text-gray-950 sm:text-5xl md:text-6xl dark:text-gray-50">
      {children}
    </h1>
  )
}
