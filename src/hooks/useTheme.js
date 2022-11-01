import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false)

  const setLightTheme = () => {
    document.documentElement.classList.remove('dark')
    setIsDark(false)
    lightThemeStorage()
  }

  const setDarkTheme = () => {
    document.documentElement.classList.add('dark')
    setIsDark(true)
    darkThemeStorage()
  }

  function themeLoadStorage () {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }

  function darkThemeStorage () {
    localStorage.theme = 'dark'
  }

  function lightThemeStorage () {
    localStorage.theme = 'light'
  }

  const toggleTheme = () => {
    isDark
      ? setLightTheme()
      : setDarkTheme()
  }

  useEffect(() => {
    themeLoadStorage()
  })

  return {
    setLightTheme,
    setDarkTheme,
    isDark,
    setIsDark,
    toggleTheme
  }
}
