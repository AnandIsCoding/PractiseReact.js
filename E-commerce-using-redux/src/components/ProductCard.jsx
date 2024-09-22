import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { add, remove } from '../redux/Slices/CartSlice';

function ProductCard({ product }) {
  const cart = useSelector((state) => state.cart.items); // Adjusted to access cart.items if cart is an object
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
    toast.success('Item added to cart');
  };

  const removeFromCart = () => {
    dispatch(remove(product.id)); // Ensure remove expects the id in CartSlice
    toast.warning('Item removed from cart');
  };

  return (
    <div className='w-[85%] h-[50vh] ml-auto mr-auto bg-zinc-100 rounded-lg px-2 py-3 md:w-[20vw] md:ml-0 md:mr-0 overflow-hidden md:h-[50vh] md:py-2 hover:scale-105 transition-all cursor-pointer'>
      <div className='w-full h-[55%] rounded-lg px-3 py-2'>
        <img src={product.image} className='w-full h-full object-cover rounded-lg' alt={product.title} />
      </div>

      <div>
        <h2 className='text-2xl mt-1 text-black font-bold md:text-xl'>{product.title.substring(0, 25)}</h2>
        <div className='w-[75%] bg-blue-100 h-[4px] rounded-full'></div>
        <p className='text-xl mt-1 font-semibold md:text-sm'>{product.description.substring(0, 60)}...</p>
        
        <div className='flex gap-10'>
          <p className='text-xl mt-1 font-bold text-red-500'>${product.price.toFixed(2)}</p>
          <p className='text-xl mt-1 font-bold text-green-400'>🌟{product.rating.rate}</p>
        </div>

        <div className='flex justify-evenly'>
          {cart?.some((p) => p.id === product.id) ? (
            <button
              className='px-3 py-1 mt-2 text-2xl font-bold text-white rounded-lg bg-red-400'
              onClick={removeFromCart} // Correct function call
            >
              Remove 
            </button>
          ) : (
            <button
              className='px-3 py-1 mt-2 text-2xl font-bold text-white rounded-lg bg-blue-500'
              onClick={addToCart} // Correct function call
            >
              Add to cart
            </button>
          )}

          <button className='px-3 py-1 mt-1 text-2xl font-bold text-white rounded-lg bg-blue-500'>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
