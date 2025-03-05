import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme') as Theme)
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(isDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  return {
    theme,
    setTheme,
  }
}

export default useTheme
