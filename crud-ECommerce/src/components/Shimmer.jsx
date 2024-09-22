function Shimmer() {
	return (
	  <div className='card card-side bg-base-100 shadow-xl w-full animate-pulse md:w-[25vw] h-[30vh]'>
		{/* Shimmer effect for the image */}
		<figure className='rounded-lg px-2 py-4 w-[40%]'>
		  <div className='w-full h-full bg-gray-300 rounded-lg shimmer'></div>
		</figure>
		
		<div className='card-body'>
		  {/* Shimmer effect for title */}
		  <div className='bg-gray-300 h-5 w-3/4 rounded-md shimmer mb-3'></div>
		  
		  {/* Shimmer effect for price */}
		  <div className='bg-gray-300 h-4 w-1/2 rounded-md shimmer mb-2'></div>
		  
		  {/* Shimmer effect for rating */}
		  <div className='bg-gray-300 h-4 w-1/3 rounded-md shimmer mb-4'></div>
		  
		  {/* Shimmer effect for button */}
		  <div className='bg-gray-300 h-8 w-2/3 rounded-lg shimmer'></div>
		</div>
	  </div>
	);
  }
  
  export default Shimmer;
  