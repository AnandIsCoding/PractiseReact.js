import React from 'react'
import Testimonial from './components/Testimonial'

function App() {
  return (  
      
    <div className='p-4 h-screen bg-zinc-500 flex flex-col justify-center items-center'>
       <h1 className='mb-3 text-3xl font-bold text-white'>Our Testimonials</h1>
       <Testimonial />
    </div>
   
  )
}

export default App
