import React from 'react'
import Navbar from './components/Navbar'
import Allproducts from './Pages/Allproducts'
import Cart from './Pages/Cart'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='py-2 min-h-screen bg-black'>
      <Navbar/>

      <Routes>
          <Route path='/' element={<Allproducts/>} />
          <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
