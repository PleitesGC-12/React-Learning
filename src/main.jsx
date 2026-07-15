import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ArrowComponent from './ArrowComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArrowComponent/>
  </StrictMode>,
)
