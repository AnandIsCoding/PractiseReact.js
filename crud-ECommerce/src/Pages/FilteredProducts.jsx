import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { NavLink } from 'react-router-dom';

function FilteredProducts() {
  const { products, setProducts, filtered, setFiltered } = useContext(ProductContext);
  const { category } = useParams();
  const navigate = useNavigate()

  // Fetch products by category
  const getProductsByCategory = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      setFiltered(data); // Set filtered products to context
	  console.log(filtered)
    } catch (error) {
      console.error('Error fetching category products:', error);
    }
  };

  useEffect(() => {
   
	if(!filtered) {
		 setFiltered(products)
	}else{
		getProductsByCategory();
	}

  }, [category]); // Re-fetch products when the category changes

  return (
    <div className='w-[80%] ml-[20%] min-h-screen flex bg-[#bcd4d4] px-2 py-6 flex-wrap gap-2'>
		
      
      {/* Display Shimmer if products are not yet loaded */}
      {
        products.length === 0 
        ? Array(10).fill(null).map((_, index) => <Shimmer key={index} />) 
        : filtered.map((item) => (
			<NavLink to={`products/${item.id}`} onClick={()=>setSelectedItem(item.id)} key={item.id} className='card card-side bg-base-100 shadow-xl w-full md:w-[25vw] h-[30vh]'>

              <figure className='rounded-lg px-2 py-4 w-[40%]'>
                <img
                  src={item.image}
                  alt='product_image'
                  className='rounded-lg w-full h-full object-cover'
                />
              </figure>
              <div className='card-body'>
                <h3 className='card-title text-[15px]'>{item.title.substring(0, 20)}</h3>
                <p>Price: 💲{item.price}</p>
                <p>Ratings: {item.rating.rate}</p>
                <div className='card-actions justify-start'>
                  <button className='px-5 py-2 bg-green-300 text-xl font-bold rounded-lg'>
                    Buy now
                  </button>
                </div>
              </div>
            </NavLink>
          ))
      }
	  <button
            onClick={() => navigate('/')}
            className='bg-green-500 w-[10vw] h-[3vw] font-bold text-black rounded-full ml-5 absolute bottom-2 fixed-bottom'
          >
            ⬅️ Go Back
          </button>
    </div>
  );
}

export default FilteredProducts;
