import React, { useState } from 'react'
import Tour from './Tour' // Adjust the import path if needed

function Tours ({ data, onDelete }) {


  if(data.length === 0){
    return (
      <div className='w-full h-screen flex gap-5 flex-wrap flex-col justify-center items-center'>
        <h1 className='font-bold  text-2xl'>No tours left</h1>
        <button
        className='w-[10vw]  py-1 bg-[#fd4040] rounded-lg text-white font-bold border-2 border-violet-600 text-2xl  '
        onClick={() => window.location.reload(false)}
      >
        Refresh
      </button>
      </div>
    )
  }

  return (
    <div className='flex gap-5 flex-wrap'>
      {
        data.map((item, index) => (
          <Tour details={item} key={index} onDelete={onDelete} />
        ))
      }
    </div>
  )
}

export default Tours
