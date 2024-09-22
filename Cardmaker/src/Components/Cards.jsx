import React from 'react'
import Card from './Card'

function Cards({users, onDelete}) {
  return (
	<div className='w-full h-[80%] min-h-[80%] flex gap-5 justify-center  items-center overflow-y-scroll flex-wrap rounded-lg'>
	  {
		users.map((item,index)=>{
			return <Card key={index} user={item} onDelete={onDelete}/>
		})
	  }
	  
	</div>
  )
}

export default Cards
