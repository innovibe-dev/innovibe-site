'use client'

import type { ChildrenType } from '@/types/other'
import { usePathname } from 'next/navigation'
import { Fragment, useEffect } from 'react'
// import { useLocation } from "react-router-dom";


const AppProviders = ({ children }: ChildrenType) => {
  const pathname= usePathname()

  useEffect(() => {
    const splashElement =
      document.querySelector<HTMLDivElement>('#__next_splash')
    const splashScreen = document.querySelector('#splash-screen')

    if (!splashElement || !splashScreen) return

    const handleMutations = (mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && splashElement.hasChildNodes()) {
          splashScreen.classList.add('remove')
        }
      }
    }

import('preline/preline').catch(() => {
      // Preline failed to load, ignore silently
    })

    const observer = new MutationObserver(handleMutations)
    observer.observe(splashElement, { childList: true, subtree: true })
    if (splashElement.hasChildNodes()) {
      splashScreen.classList.add('remove')
    }
  

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (window.HSStaticMethods) window.HSStaticMethods.autoInit()
    }, 400)
  }, [pathname])

  return (
    <Fragment>
      {/* <LayoutProvider> */}
        {children}
        {/* </LayoutProvider> */}
    </Fragment>
  )
}

export default AppProviders
