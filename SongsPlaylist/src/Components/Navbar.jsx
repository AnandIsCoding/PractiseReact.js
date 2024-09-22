import react from 'react';
function Navbar(){
	return(
		<nav >
            <ul className='w-full mt-8 text-[blue] flex justify-between text-[2vw] font-bold' >
                <img className='ml-8 w-[12%]' src="https://imgs.search.brave.com/xunEUi4rIzXQ3-nO9sG48PMt0bQvVq0rnW2xAJOM69U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXIuc3BvdGlm/eS5jb20vaW1hZ2Vz/L2d1aWRlbGluZXMv/ZGVzaWduL2xvZ29N/aXN1c2UzQDJ4LnBu/Zw" alt="" />
                <button className='mr-8 bg-[#30fd48] text-black px-3  rounded-md '>Favourites</button>
                
            </ul>
        </nav>
	)
}

export default Navbar;