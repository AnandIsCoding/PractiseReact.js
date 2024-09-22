import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import { toast } from 'react-toastify';

function CreateProduct() {

	const {products, setProducts} = useContext(ProductContext)
	const navigate = useNavigate()

	const [formData, setFormData] = useState(
		{ title: '', image: '', price: '', description: '', rating:'' }
	);

	const changeHandler = (event) =>{
		setFormData({...formData, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault();
	
		// Manually create the updated list of products
		const updatedProducts = [...products, formData];
	
		// Update state
		setProducts(updatedProducts);
	
		// Save to localStorage
		localStorage.setItem('products', JSON.stringify(updatedProducts));	
		// Show success toast and navigate
		toast.success('New product added successfully');
		navigate('/');
	};
	

  return (
	<>
		 <button
            onClick={() => navigate('/')}
            className='bg-green-500 w-[10vw] h-[3vw] font-bold text-black rounded-full ml-5 absolute top-2 left-[20%]  fixed-bottom'
          >
            ⬅️ Go Back
          </button>
		<div className='w-[80%] ml-[20%] min-h-screen flex flex-col justify-center items-center bg-[#bcd4d4] px-2 py-6  gap-2'>
	 		
              <h1 className='text-3xl font-bold text-[#19307e] mb-2' >Add new Product</h1>
			  <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4'>
				<input type="text" onChange={changeHandler} name="title" id="title" value={formData.title} placeholder='Enter product title'  className='px-5 py-2 bg-zinc-200 rounded-lg text-2xl font-bold w-[40vw] text-[#19307e]' required />

				<input type="url" name="image" onChange={changeHandler} id="image" value={formData.image} placeholder='Enetr product image' className='px-5 py-2 bg-zinc-200 rounded-lg text-2xl font-bold w-[40vw] text-[#19307e]' required />

				<div className='flex gap-7'>
					<input type="number" name="price" onChange={changeHandler} id="price" value={formData.price} placeholder='Enter product price' className='px-5 py-2 bg-zinc-200 rounded-lg text-2xl font-bold w-[19vw] text-[#19307e]' required />

					<input type="number" name="rating" onChange={changeHandler} id="ratings" value={formData.rating} placeholder='Enter product rating' className='px-5 py-2 bg-zinc-200 rounded-lg text-2xl font-bold w-[19vw] text-[#19307e]' required/>
				</div>

				<textarea name="description" onChange={changeHandler} id="description" className='w-[40vw] h-[15vh] text-[#19307e] px-5 py-2 bg-zinc-200 rounded-lg text-xl font-bold ' value={formData.description} ></textarea>

				<input type="submit" value="Create" className='bg-[#3d6779] w-[10vw] h-[3vw] font-bold text-white rounded-lg text-xl ml-[-30vw] cursor-pointer' />
			  </form>



		</div>
	</>
  )
}

export default CreateProduct
