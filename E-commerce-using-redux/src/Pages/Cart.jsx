import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add, remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-toastify';

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.items); // Adjust this if necessary
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch(remove(item.id)); // Ensure remove expects item id
    toast.success('Item removed from cart');
  };

  return (
    <div className='min-h-screen w-full text-white md:flex-row pt-10 mt-[5%] '>
      <div>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className='flex justify-between items-center  border-b border-gray-300  text-2xl'>
              <div className='flex items-center'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-[15%] h-[10%] object-cover rounded-full'
                />
                <div className='ml-4'>
				
                  <h2 className='mr-4'>{item.name}</h2>
                  <p className=''>{item.price} INR</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item)} // Pass item as a parameter
                className='btn btn-ghost text-gray-600'
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className='flex justify-center items-center mt-[58%] text-4xl  flex-col md:mt-[12%]  '>
            <p>Cart is empty</p>
            <button
              onClick={() => navigate('/')} // Correct navigate usage
              className='px-3 py-1 border-2 border-green-400 text-green-600 mt-5'
            >
              Back to home
            </button>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className='ml-8'>
          <h1 className='text-3xl font-bold'>Your Cart summary</h1>
          <h1 className='text-3xl font-bold mt-4'>Total items: {cart.length}</h1>
          <h1 className='text-3xl font-bold mt-10'>
            Total price: {cart.reduce((total, item) => total + item.price, 0)} INR
          </h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
