'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { Fragment, useState, useEffect, useRef } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef(null)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current)
      } else {
        // Prevent scrolling
        disableBodyScroll(navRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <>
      <button
        aria-label="메뉴 열기"
        onClick={onToggleNav}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
      >
        <span className="h-px w-5 bg-current" />
        <span className="h-px w-5 bg-current" />
      </button>
      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog as="div" onClose={onToggleNav} unmount={false}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <div className="fixed inset-0 z-60 bg-gray-950/30 backdrop-blur-sm" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
            unmount={false}
          >
            <DialogPanel className="fixed inset-0 z-70 h-full w-full bg-gray-50 duration-300 dark:bg-gray-950">
              <nav
                ref={navRef}
                className="mx-auto flex h-full max-w-7xl basis-0 flex-col items-start overflow-y-auto px-6 pt-28 text-left"
              >
                <p className="text-primary-600 mb-8 text-xs font-semibold tracking-[0.18em] uppercase">
                  Explore
                </p>
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="font-display hover:text-primary-600 dark:hover:text-primary-400 mb-2 py-2 pr-4 text-4xl tracking-[-0.04em] text-gray-950 outline-0 dark:text-gray-50"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>

              <button
                className="hover:text-primary-600 dark:hover:text-primary-400 fixed top-4 right-4 z-80 flex h-12 w-12 items-center justify-center rounded-lg text-gray-900 dark:text-gray-100"
                aria-label="메뉴 닫기"
                onClick={onToggleNav}
              >
                <span className="absolute h-px w-6 rotate-45 bg-current" />
                <span className="absolute h-px w-6 -rotate-45 bg-current" />
              </button>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileNav
