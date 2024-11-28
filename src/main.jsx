import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ServiceWorker } from './Service/ServiceWorker'
import { App } from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ServiceWorker />
  </StrictMode>,
)
