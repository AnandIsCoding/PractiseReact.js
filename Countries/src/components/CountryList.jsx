import React, { useContext , useState} from 'react'
import Country from './Country'
import { CountryContext } from '../context/CountryContext';
import CardShimmer from './CardShimmer';

function CountryList() {

  const {countryDetails, setCountryDetails, fetchCountryData,handleChange,  filteredCountries} = useContext(CountryContext)

  if (!Array.isArray(countryDetails) || countryDetails.length === 0) {
    return (
      <div className='min-w-screen min-h-screen py-2 px-5 flex flex-wrap gap-5 md:flex-row md:px-10'>
          <CardShimmer/>
      </div>
    )
  }

  return (
    <div className='min-w-screen min-h-screen py-2 px-5 flex flex-wrap gap-5 md:flex-row md:px-10'>
      {
         filteredCountries === 0 ? <CardShimmer/> : filteredCountries.map((item,index) => {
          // Assuming 'item' has a unique identifier 'id'
          return <Country key={index} country={item} />
        })
      }
    </div>
  );
}

export default CountryList;


// filteredCountries.map((item,index) => {
//   // Assuming 'item' has a unique identifier 'id'
//   return <Country key={index} country={item} />
// })