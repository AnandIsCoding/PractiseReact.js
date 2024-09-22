import React, { useState } from 'react'

function Tour ({ details, onDelete }) {
  const { name, image, price, info, id } = details
  const description = `${info.substring(0, 50)}...`
  const [readmore, setReadmore] = useState(false)
  const handleReadmore = () => {
    setReadmore(!readmore)
  }
  return (
    <div className='w-[20vw]  overflow-hidden bg-white rounded-lg flex flex-col p-2 border-2 border-violet-500'>
      <div className='w-[99.5%] h-[50%] rounded-lg bg-[#f45c5c] overflow-hidden border-2 border-violet-500'>
        <img className='w-full h-full object-cover' src={image} alt={name} />
      </div>
      <h1 className='text-violet-900 mt-1 text-xl font-bold'>💲{price}</h1>
      <h1 className='font-bold text-violet-800 text-2xl ml-1'>{name}</h1>
      <div className='  overflow-y-scroll'>
        <p className='l'>
          {readmore ? info : `${info.substring(0, 60)}...`}
          <span
            className='text-blue-600 cursor-pointer'
            onClick={handleReadmore}
          >
            {' '}
            {readmore ? 'show less' : 'read more'}{' '}
          </span>{' '}
        </p>
      </div>
      <button
        className='w-[10vw] py-1 bg-[#fd4040] ml-14 mt-10 rounded-lg text-white font-bold border-2 border-violet-600 text-xl '
        onClick={() => onDelete(id)}
      >
        Not Interested
      </button>
    </div>
  )
}

export default Tour
