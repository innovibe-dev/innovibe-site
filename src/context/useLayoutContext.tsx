'use client'
import { LayoutState, LayoutTheme, LayoutType } from '@/types/layouts'
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from 'react'

const LayoutContext = createContext<LayoutType | undefined>(undefined)

function useLayoutContext() {
  const context = useContext(LayoutContext)
  if (context === undefined) {
    throw new Error('useLayoutContext must be used within an LayoutProvider')
  }
  return context
}

function LayoutProvider({ children }: Readonly<{ children: ReactNode }>) {
  const INIT_STATE = useMemo<LayoutState>(() => ({
    theme: 'light',
  }), []);
  const [settings, setSettings] = useState<LayoutState>(INIT_STATE)
  const themeMode = settings.theme

  // update settings
  const updateSettings = useCallback(
    (_newSettings: Partial<LayoutState>) => {
      setSettings((prev) => ({ ...prev, ..._newSettings }))
    },
    [],
  )

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]
    if (themeMode === 'dark') html.classList.add('dark')
    else html.classList.remove('dark')
  }, [themeMode])

  const updateTheme = useCallback(
    (newTheme: LayoutTheme) => {
      updateSettings({ theme: newTheme })
    },
    [updateSettings],
  )

  const resetSettings = useCallback(() => {
    setSettings(INIT_STATE)
  }, [INIT_STATE])

  const value = useMemo(
    () => ({
      settings,
      themeMode,
      updateTheme,
      resetSettings,
    }),
    [settings, themeMode, updateTheme, resetSettings],
  )

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}

export { useLayoutContext, LayoutProvider }
