import React from 'react';
import "../components/spinner.css"

const Loader = () => {
  return (
    <div className='flex justify-center items-center mt-[-7%] h-screen'>
      <div className="spinner "></div>
    </div>
  );
};

export default Loader;
