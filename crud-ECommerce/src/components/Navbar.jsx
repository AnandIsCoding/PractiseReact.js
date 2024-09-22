import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { NavLink } from 'react-router-dom';

// Function to generate a random RGBA color
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r},${g},${b},0.7)`; // Adjust the alpha value as needed
};

function Navbar() {
  const { products } = useContext(ProductContext);
  
  // Extract unique categories from products
  const categories = [...new Set(products.map(item => item.category))];

  return (
    <div className='w-[20%] min-h-screen fixed bg-slate-200 flex flex-col px-10 py-5'>
      <NavLink to='/create' className='px-2 py-2 border-2 border-violet-400 text-violet-600 bg-[#fff5ff] text-lg font-semibold rounded-[18px] mb-5 mt-2'>
        Add new Product
      </NavLink>

      <h1 className='font-bold text-3xl text-blue-700'>Categories</h1>
      <div className='flex flex-col gap-2 mt-2 ml-5'>
        {categories.length > 0 ? (
          categories.map((category, index) => (
			<NavLink 
			to={`/products/category/${category}`} 
			key={index} 
			className='flex items-center gap-2 cursor-pointer'>
			<span className='w-4 h-4 rounded-full' style={{ backgroundColor: getRandomColor() }}></span>
			<h1 className='font-bold text-xl' style={{ color: getRandomColor() }}>{category}</h1>
		  </NavLink>
		  
          ))
        ) : (
			Array(4).fill(null).map((item,index) => <div className='flex h-[2vw] items-center gap-2 rounded-lg bg-base-100 shadow-xl animate-pulse' key={index}>
			<span className='w-4 h-4 rounded-full' style={{ backgroundColor: getRandomColor() }}></span>
			<h1 className='font-bold text-xl bg-zinc-400 rounded-full ' style={{ color: getRandomColor() }} ></h1>
		  </div> )
        )}
      </div>
    </div>
  );
}

export default Navbar;
