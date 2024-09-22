import React, { useState } from 'react'

function Ratings ({ starCount = 10 }) {
  const [currentRating, setCurrentRating] = useState()
  const [overed, setOvered] = useState(0)
  
  const clickHandler = index => {
    setCurrentRating(index + 1)
    console.log(`Clicked on star ${currentRating}`)
  }
  const Mouseover = index => {
    setOvered(index + 1)
  }
  return (
    <div className='flex justify-center items-center py-[20%]'>
      {new Array(starCount).fill(0).map((irem, index) => {
        return (
          <span
            key={index}
            onClick={() => clickHandler(index)}
            className={`font-[25px] ${
              index < currentRating ? 'text-yellow-300' : ' text-black'
            } border-2 ${index < overed ? 'text-yellow-300' : 'text-black'} `}
            onMouseOver={() => Mouseover(index)}
          >
            &#9733;
          </span>
        )
      })}
    </div>
  )
}

export default Ratings
