import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloComponent from './HelloComponent.jsx'
import ArrowComponent from './ArrowComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloComponent/>
    <ArrowComponent/>
  </StrictMode>,
)
