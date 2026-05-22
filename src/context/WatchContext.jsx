import { createContext, useContext, useState } from 'react'

const WatchContext = createContext(null)

export function WatchProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const [timeFormat, setTimeFormat] = useState('12')

  return (
    <WatchContext.Provider value={{ theme, setTheme, timeFormat, setTimeFormat }}>
      {children}
    </WatchContext.Provider>
  )
}

export function useWatch() {
  const context = useContext(WatchContext)
  if (!context) {
    throw new Error('useWatch must be used inside a WatchProvider')
  }
  return context
}