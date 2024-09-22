import React, { useState } from 'react'
import reviews from '../reviews'
import Card from './Card'
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";

function Testimonial() {
	let [index, setIndex] = useState(0);
	const shiftLeft = () =>{
		if(index < 0 ){
			setIndex(reviews.length - 1)
		}else{
			setIndex(index--)
		}
	}

	const shiftRight = () =>{
		index > (reviews.length - 1) ? setIndex(0) : setIndex(index++);
	}

	const randomReview = () =>{
		
		setInterval(()=>{
			let random = Math.floor(Math.random() * reviews.length)
			setIndex(random)
		},3000)

		// cleanup
		useEffect(() => {
			return () => clearInterval(intervalId);
		}, []);
	}

  return (
	<div className='w-[55vw]  bg-white rounded-lg flex flex-col' >
		<Card data={reviews[index]} />
		<div className='bg-red flex ml-auto mr-auto mt-2 gap-4 '>
			<button onClick={shiftLeft} > < FaHandPointLeft className='size-14 text-red-700'/> </button>
			<button onClick={shiftRight} > <FaHandPointRight className='size-14 text-red-700' /> </button>
		</div>
		<button onClick={randomReview} className='random px-3 py-2 bg-blue-400 rounded-lg w-[15vw] ml-auto mr-auto mb-4 mt-3 text-white text-xl font-bold border-2 border-blue-600' > Surprise me </button>
	</div>
  )
}

export default Testimonial
