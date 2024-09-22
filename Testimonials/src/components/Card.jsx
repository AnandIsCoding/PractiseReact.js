import React from 'react'
import { FaNodeJs } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

function Card({data}) {
  return (
	<div>
	    <div className='w-[10vw] h-[10vw] aspect-square rounded-full bg-[aqua] mt-[-4.7vw] ml-4 '>
			<img className='w-[98%] h-[98%] rounded-full object-cover' src={data.image} alt="" />
		</div>

		<h1 className='text-center text-xl font-semibold text-blue-900 mb-[-5vw] '> {data.job} </h1>
		<h2 className='text-center text-3xl font-bold text-blue-900  mb-[-2vw]'> {data.name} </h2>
		
		<div className='texts mt-[6.2vw] w-[80%] h-[10vw]  ml-auto mr-auto '>
		    <FaNode className='size-8 ml-auto mr-auto text-green-600 '  />
			
			<p className='text-center  font-medium text-[18px]  mt-3'> {data.text}... </p>
			<FaNode className='size-8 ml-auto mr-auto text-green-600 mt-3'  />
		</div>


	</div>
  )
}

export default Card
