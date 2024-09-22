import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CgSmile } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function Navbar({ isloggedin, setIsloggedin, isdarkmode, setIsDarkmode }) {
  const navigate = useNavigate();

  const logout = () => {
    setIsloggedin(false); 
    navigate('/'); // Navigate to the home route after logout
    toast.success('Logged out successfully');
  };

  return (
    <div className={`flex justify-between rounded-full bg-[#7b7bee] w-[97%] mr-auto ml-auto`}>
      <div className='logo'>
        <CgSmile className='text-[5vw] text-yellow-400' />
      </div>

      <div>
        <ul className='nav-links flex gap-16 text-white text-xl font-bold mt-5 ml-28'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/calculator'>Calculator</NavLink></li>
          <li><NavLink to='/todo'>Todo</NavLink></li>
          <li><NavLink to='/pagination'>Pagination</NavLink></li>
        </ul>
      </div>

      <button
        className={` w-[3vw]  h-[3vw] mt-2 border-4 rounded-full flex justify-center items-center
          ${isdarkmode ? 'bg-black text-white transition-all ' : 'bg-white text-black'}
        `}
        onClick={() => setIsDarkmode(!isdarkmode)}
      >
        {isdarkmode ? <MdDarkMode size={24} />  : <MdOutlineDarkMode size={24} /> }
      </button>

      <div className='flex gap-5 text-white text-xl font-bold mt-5 mr-6'>
        {isloggedin ? (
          <>
            <button 
              className='w-[10vw] h-[5vh] bg-white text-black font-bold rounded-lg' 
              onClick={logout}
            >
              Log out
            </button>
            <NavLink to='/dashboard'>
              <button className='w-[10vw] h-[5vh] bg-white text-black font-bold rounded-lg'>
                Dashboard
              </button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to='/login'>
              <button className='w-[10vw] h-[5vh] bg-white text-black font-bold rounded-lg'>
                Login
              </button>
            </NavLink>
            <NavLink to='/signup'>
              <button className='w-[10vw] h-[5vh] bg-white text-black font-bold rounded-lg'>
                Signup
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
