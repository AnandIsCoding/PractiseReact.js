import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CoinDetails from './components/CoinDetails';
import Ratings from './components/Ratings';
import Toast from './components/Toast';
import TicTacToe from './components/TicTacToe';

function App() {
 

  return (
    <div className='w-full min-h-screen '>
      <Navbar />
      {/* <div className='w-full h-[35vh] overflow-hidden px-1 py-1 md:px-3 '>
          <img src="https://img.freepik.com/premium-vector/ethnic-simple-colorful-background-with-mandala_1159-30047.jpg?w=1380" alt="" className=' w-[94%] h-[70%] z-0 md:w-full md:h-full object-cover rounded-lg relative' />
          <h1 className='text-3xl text-[#fcfcfc] font-extrabold top-[20vh]  md:top-[25vh] md:left-[40vw] absolute z-1'>Track rate in your Origin <br /> <span className='ml-[50%]'>🐻‍❄️</span> </h1>
      </div> */}
      {/* <CoinDetails /> */}
      {/* <Ratings/> */}
      <Toast/>
      <TicTacToe />

    </div>
  );
}

export default App;
