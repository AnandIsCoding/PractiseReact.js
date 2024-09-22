import react, { useState } from 'react';
function Song({details}){
	const {name, artist,image, added} = details;
	const [data, setData]= useState(details);

	const handleAddtofavourites = ()=>{
		setData({...data,added:!data.added})


	}
	
	return(
		
		<div className='w-[27vw] h-[11vw] bg-[violet] rounded-md flex'>
			<div className='w-[35%] h-[90%] bg-[#2b25dc] rounded-md ml-3 mt-2 overflow-hidden'>
				<img className='w-full h-full object-cover' src={image} alt="" />

			</div>
			
			<div >
				<h1 className='mt-5 ml-5 text-white font-bold text-xl'>{name}</h1>
				<h1 className='mt-1 ml-5 text-white font-bold text-xl'>{artist}</h1>
				<button onClick={handleAddtofavourites} className='w-[120%] py-2 rounded-full bg-[#2323f8] text-xl font-bold text-white ml-[40%] mt-14'> {data.added ? "Favourites 💕" : "Add to favourites ❤️"} </button>
			</div>
			

			

			

		</div>
	)
}

export default Song;