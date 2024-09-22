import React, { useState } from 'react'

function Toast () {
	const [showToast, setShowToast] = useState(false)
	const handleToastAppearance = () =>{
		setShowToast(true);
		setTimeout(()=>setShowToast(false),5000)
	}
  return (
    <div className='py-5 px-10 relative'>
      <div className='buttons'>
        <button className='btn btn-success text-xl px-3 text-white font-bold'
		   onClick={handleToastAppearance}
		>
          Confirm purchase
        </button>

		
      </div>

     {
		showToast &&  <div className='toast toast-top toast-end mt-14 '>
        <div className='alert alert-info px-4 text-white text-xl accent-primary-content'>
          <span>New mail arrived.</span>
		  <span className='ml-5 cursor-pointer' onClick={()=>setShowToast(false)}>X</span>
        </div>        
      </div>
	 }

    </div>
  )
}

export default Toast
