import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeFill } from "react-icons/ri";

function Navbar() {
	const [menu, showMenu] = useState(false);
	const handleshowMenu = () => {
        showMenu(!menu);
    };
  return (
    <div>
      {/* Main Navbar */}
      <div className='md:w-full h-[10vh] flex justify-between bg-zinc-400 text-center border-zinc-600'>
        <div className="flex justify-between">
          <span className='w-[20vw] h-[20vw] ml-1 mt-[0.5] md:w-[5vw] md:h-[5vw]'>
            <img src="src/assets/Rocket-Right.png" alt="logo" />
          </span>
          <h1 className='text-2xl text-[yellow] mt-[7vw] ml-[-10px] font-bold md:mt-[1.2vw]'>Blogs</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex justify-around mt-5 gap-12 font-bold text-2xl text-[yellow] md:mr-10">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Services</h1>
          <h1>Contacts</h1>
        </div>

        {/* Mobile Hamburger Menu */}
        <button className="hamburger mr-4 mt-2 cursor-pointer md:mt-[5px] text-[yellow] md:hidden">
          <GiHamburgerMenu size={45} onClick={handleshowMenu} />
        </button>
      </div>

      {/* Mobile Dropdown */}


      {
		menu && (
			<div className='fixed inset-0 bg-zinc-400 w-full h-[45vh] mt-0 rounded-b-[30px] md:hidden transition-all duration-'>
        <div className="flex justify-between object-cover">
          <span className='w-[20vw] h-[20vw] ml-1 mt-[0.5] md:w-[5vw] md:h-[5vw] flex'>
            <img src="src/assets/Rocket-Right.png" alt="logo" />
			<h1 className='text-2xl text-[yellow] mt-[7vw] ml-[-10px] font-bold md:mt-[1.2vw]'>Blogs</h1>
          </span>

          <button className="hamburger mr-4 mt-2 cursor-pointer md:mt-[5px] text-[yellow] md:hidden">
          <RiCloseLargeFill size={45} onClick={handleshowMenu} />
        </button>
		

        </div>
		<div className=" md:flex justify-around mt-8 gap-12 font-bold text-2xl text-[black] md:mr-10 px-10 py-2 animate-bounce ">
          <h1 className='border-b-2 border-b-black mb-1 cursor-pointer mt-2' >Home</h1>
          <h1  className='border-b-2 border-b-black mb-1 cursor-pointer '>About</h1>
          <h1  className='border-b-2 border-b-black mb-1 cursor-pointer '>Services</h1>
          <h1  className='border-b-4 border-b-black mb-1 cursor-pointer '>Contacts</h1>
		  <h1  className='border-b-4 border-b-black mb-1 cursor-pointer '>Addmission</h1>

        </div>
      </div>
		)
	  }
	  

    </div>
  );
}

export default Navbar;
