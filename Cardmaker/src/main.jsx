import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Form2 from '../src/Components/Form2.jsx' 
import Registration from './Components/Registration.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Registration/>
  </StrictMode>,
)
