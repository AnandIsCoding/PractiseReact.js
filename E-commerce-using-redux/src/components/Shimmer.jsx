import React from 'react'

function Shimmer() {
  return (
	<div className='w-[85%] h-[50vh] ml-auto mr-auto bg-zinc-100 rounded-lg px-2 py-3 md:w-[20vw] md:ml-0 md:mr-0 overflow-hidden md:h-[50vh] md:py-2 animate-pulse'>

  <div className='w-full h-[55%] bg-gray-300 rounded-lg px-3 py-2'>
    {/* Shimmer effect for the image */}
    <div className='w-full h-full bg-gray-300 rounded-lg'></div>
  </div>

  <div>
    {/* Shimmer effect for the title */}
    <div className='w-[70%] h-6 mt-1 bg-gray-300 rounded-md'></div>

    {/* Shimmer effect for the description */}
    <div className='w-[90%] h-4 mt-1 bg-gray-300 rounded-md'></div>

    <div className='flex gap-10'>
      {/* Shimmer effect for the price */}
      <div className='w-[30%] h-5 bg-gray-300 rounded-md'></div>

      {/* Shimmer effect for the rating */}
      <div className='w-[30%] h-5 bg-gray-300 rounded-md'></div>
    </div>

    {/* Shimmer effect for the button */}
    <div className='w-[60%] h-8 mt-2 bg-gray-300 rounded-lg'></div>
  </div>

</div>

  )
}

export default Shimmer
