import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { WatchProvider } from './context/WatchContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WatchProvider>
      <App />
    </WatchProvider>
  </React.StrictMode>
)
