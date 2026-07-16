import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ArrowComponent from './ArrowComponent.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* We pass the data for the props here in main.jsx*/}
    <ArrowComponent title="This section is for props" subtitle = {4}/>
  </StrictMode>,
)
