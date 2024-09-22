import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import SingleProduct from './Pages/SingleProduct';
import FilteredProducts from './Pages/FilteredProducts';
import CreateProduct from './Pages/CreateProduct';

function App() {
  return (
    <div>
      <div className='flex'>
        <Navbar />
      </div>

      {/* Define Routes */}
      <Routes>
        {/* Route for Products page */}
        <Route path="/" element={<Products />} />
        
        {/* Route for Single Product page */}
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path='/products/category/:category' element={<FilteredProducts />} />
        <Route path='/create' element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
