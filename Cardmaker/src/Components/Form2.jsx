import React, { useState } from 'react'

function Form2() {

  const [formData, setFormdata] = useState({fname:"", lname:'', password:'', agree:true})
  
  const handleChange = (event)=>{
    const { name, value, type, checked } = event.target;
    setFormdata((prevData)=>{
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }
	  
    })
	console.log(formData)
  }

  return (
    <div className='w-full h-screen p-8'>
      <form action="" className='flex flex-col justify-center items-center gap-6 '>
        <input 
         type="text" 
         className='border-3 border-violet-600 bg-lime-50 px-3 py-1 '
          name="fname" 
          placeholder="First Name"
          onChange={handleChange}
          value={formData.fname} 
          autoComplete="given-name"  // Adding autocomplete
        />

        <input 
         type="text" 
         className='border-3 border-violet-600 bg-lime-50 px-3 py-1'
          name="lname" 
          placeholder="Last Name"
          onChange={handleChange}
          value={formData.lname}  
          autoComplete="family-name"  // Adding autocomplete
        />

        <input 
          type="password" 
          name="password" 
          onChange={handleChange} 
          placeholder='Enter password' 
          className='border-3 border-violet-600 bg-lime-50 px-3 py-1'
          value={formData.password}  
          autoComplete="current-password"  // Adding autocomplete
        />

        <div className='flex gap-1'>
          <input 
            type="checkbox" 
            name="agree" 
            id="agree" 
            onChange={handleChange} 
            checked={formData.agree}  
            className='border-3 border-violet-600 bg-lime-50 px-3 py-1'
          />
          <label htmlFor="agree">I accept all Terms and Conditions</label>
        </div>
      </form>
    </div>
  )
}

export default Form2
