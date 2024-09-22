import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from '../components/Spinner'

function Blogs() {

	const {loading, posts} = useContext(AppContext)

  return (
	<div className='w-full h-[80vh] bg-zinc-200 ' >
		<div className='sm:px-2 md:px-8 lg:px-14 xl:px-20 sm:w-[100%]  lg:w-[78%] h-full ml-[12%]   px-1 py-3 overflow-y-scroll hide-scrollbar  ' >
            
			{
				loading ? <Spinner/> : (
					posts.map((item, index) =>{
						return (
							<div key={item.id} className='border-b-2 border-gray-200 px-4 py-2'>
								<div className='mb-3'  >
									<h1 className='text-xl font-bold '>{item.title}</h1>
									<h3>By <span className=' font-bold text-blue-500' >{item.author}</span> on <span className='font-bold text-blue-500' > {item.category} </span> </h3>
									<h3 className='mb-1' >posted on {item.date} </h3>
									<p> {item.content} </p>
									{
										item.tags.map((d,index)=>{
											return <span className='text-blue-600'  key={index}> { `#${d}` } </span>
										})
									}
								</div>
							</div>
							)
					 
					 }) 
				)
			}
			 
		</div>
	</div>
  )
}

export default Blogs;
