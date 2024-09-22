import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductContextProvider from './context/ProductContext'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
      <ProductContextProvider>
            <App /> 
            <ToastContainer/>
      </ProductContextProvider>  
  </BrowserRouter> 
)
