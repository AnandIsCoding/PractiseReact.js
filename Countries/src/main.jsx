import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import './index.css'
import CountryContextProvider from './context/CountryContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
  
    <BrowserRouter>
      <CountryContextProvider>
        <Navbar />
        <App />
      </CountryContextProvider>
    </BrowserRouter>
  
)
