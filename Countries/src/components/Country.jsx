import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { CountryContext } from '../context/CountryContext';
function Country({country}) {
  
  const {selectedCountry, setSelectedCountry , handleCountryClick} = useContext(CountryContext)
  return (
	 

<div onClick={()=>handleCountryClick(country.name.common)} className="card bg-base-100 w-80 max-h-96 shadow-xl hover:scale-105 transition-transform ml-auto mr-auto">
  <figure >
    <img
	    loading='lazy'
      src={country.flags.png}
      alt="Country image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title name mr-4"> Country <span className='text-pink-500'>{country.name.common} </span>   
    </h2>
	<h2 className="card-title name mr-4">  Region : <span className='text-pink-500'>{country.region}</span>
    </h2>
	<h2 className="card-title name mr-4">  Population : <span className='text-pink-500'>{country.population}</span>
    </h2>
	<h2 className="card-title name mr-4">
      Capital : <span className='text-pink-500'>{country.capital}</span>      
    </h2>

    
  </div>
</div>

   
  )
}

export default Country
