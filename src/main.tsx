import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/Authorization_page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
