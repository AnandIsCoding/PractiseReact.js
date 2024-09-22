import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios
import Shimmer from '../components/Shimmer';

function SingleProduct() {
  const { id } = useParams(); // Extract the id from the URL
  const { products, setProducts } = useContext(ProductContext);
  const [selectedItem, setSelectedItem] = useState(null); // Local state for selected item
  const navigate = useNavigate();

  // Fetch the single product based on the id from the URL
  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`); // Use axios to fetch data
        setSelectedItem(data); // Set the selected product
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    getSingleProduct();
  }, [id]);

  return (
    <div className='w-[80%] min-h-screen ml-[20%] flex justify-center items-center p-10 bg-[#bcd4d4]'>
      {selectedItem ? (
        <div className='flex gap-10 justify-center items-center rounded-lg'>
          <div className='mt-[10%] rounded-lg'>
            <img
              src={selectedItem.image}
              alt='product_image'
              className='w-full max-w-md rounded-full'
            />
          </div>
          <div>
            <h2 className='text-3xl mb-3'>{selectedItem.title}</h2>
			<h2 className='text-3xl mb-3 text-violet-600 font-bold'>{selectedItem.category}</h2>
			<h3 className='text-xl mb-3 text-blue-950'> {selectedItem.description} </h3>
            <p className='text-3xl mb-3 text-blue-500'>Price: 💲{selectedItem.price}</p>
            {/* <p>Ratings: {selectedItem.rating.rate}</p> */}
			<button className='bg-green-400 px-5 py-2 text-xl font-bold text-black rounded-full'>
            Place order
          </button>
          <button
            onClick={() => navigate('/')}
            className='bg-red-500 px-5 py-2 text-xl font-bold text-black rounded-full ml-5'
          >
            ⬅️ Go Back
          </button>
          </div>
          
        </div>
      ) : (
        <p> <Shimmer/> </p>
      )}
    </div>
  );
}

export default SingleProduct;
