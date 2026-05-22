import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { WatchProvider } from './context/WatchContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WatchProvider>
      <App />
    </WatchProvider>
  </StrictMode>
)