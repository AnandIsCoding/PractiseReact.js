import React, { useState } from 'react'

function Calculator() {
	const [display, setDisplay] = useState('')
	const buttons = [
		'AC', '7', '8', '9', '/', '(', ')',
		'4', '5', '6', '*',
		'1', '2', '3', '-',
		'0', '.', '=', '+',
		'C', 'sin' , 'cos' , 'tan' , 'sqrt'
	  ];

	  const handleClick = (button) =>{
		if(button==='AC'){
			setDisplay('');
		}else if (button === 'C') {
			setDisplay(display.slice(0, -1)); // Clear last entry
		}else if (button === '=') {
			try {
			  setDisplay(eval(display).toString()); // Evaluate expression
			} catch {
			  setDisplay('Error'); // Catch any errors from eval
			}
		  } else {
			setDisplay(display + button); // Append button value to display
		  }
	  }

  return (
	<div className='text-white flex justify-center items-center  '>
	  <div className='w-[32.5vw] h-[60vh] border-2 border-white mt-[5%] rounded-lg overflow-hidden'>
	    
		  <div  className='bg-white w-full h-14  px-7 py-3 text-black font-bold text-xl' > {display} </div>

		  <div className='buttons flex flex-wrap justify-center items-center mt-10 gap-5'>
               {
				buttons.map(button => (
                  <button key={button} onClick={()=>handleClick(button)} className='text-xl w-[4vw] h-[4vw] border-2 border-white rounded-full bg-black hover:bg-gray-300'>{button}</button>
                ))
			   }
		  </div>

	  </div>
	</div>
  )
}

export default Calculator
