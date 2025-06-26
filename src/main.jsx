import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FormHooks } from './Components/FormHooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormHooks/>
  </StrictMode>,
)
