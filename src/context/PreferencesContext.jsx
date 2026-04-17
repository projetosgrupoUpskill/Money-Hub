import { createContext, useState, useEffect } from 'react'

export const PreferencesContext = createContext()

export function PreferencesProvider({ children }) {
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('currency') || 'EUR'
  })

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || ''
  })

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', next)
      return next
    })
  }

  useEffect(() => {
    localStorage.setItem('currency', currency)
  }, [currency])

  useEffect(() => {
    localStorage.setItem('userName', userName)
  }, [userName])

  // ← tema aplicado ao body aqui
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <PreferencesContext.Provider value={{ currency, setCurrency, userName, setUserName, theme, toggleTheme }}>
      {children}
    </PreferencesContext.Provider>
  )
}