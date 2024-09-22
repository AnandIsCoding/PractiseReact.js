import React, { useEffect, useState } from 'react'
import {BASEURL} from '../utils/data'
import ProductCard from '../components/ProductCard';
import Shimmer from '../components/Shimmer'

function Allproducts() {

	const [products, setProducts] = useState([]);
	const fetchProductsDetails = async() =>{
		try{
			const response = await fetch(BASEURL);
			const data = await response.json();
			setProducts(data);
			
		}catch(error){
			console.error(error);
		}
	}

	useEffect( ()=>{
		fetchProductsDetails();
		console.log(products)
	},[] )

  return (
	<div className='min-h-screen   w-full  mt-20  overflow-y-scroll  flex flex-col gap-5 md:flex md:flex-row md:gap-8 md:px-16 md:flex-wrap'>
		
		{
			products.length>0 ? products.map(product => (
                <ProductCard key={product.id} product={product} />
            )) :
			    Array(14).fill(null).map((item,index)=>{
					return <Shimmer key={index} />
				})
		}
		

		
	</div>
  )
}

export default Allproducts
