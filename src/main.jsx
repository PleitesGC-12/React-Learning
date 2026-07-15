import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ArrowComponent from './ArrowComponent.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArrowComponent/>
  </StrictMode>,
)
