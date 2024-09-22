import { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';
import { useNavigate } from 'react-router-dom';

const SingleCountry = () => {
  const { selectedCountry, countryDetails } = useContext(CountryContext);
  const navigate = useNavigate();

  const countryData = countryDetails.find(country => country.name.common === selectedCountry);

  if (!countryData) {
    return <div>Country details not found</div>;
  }

  // Construct Google Maps embed link using the country's latlng data
  const googleMapsUrl = `https://www.google.com/maps?q=${countryData.latlng[0]},${countryData.latlng[1]}&z=5&output=embed`;

  return (

    <div className='flex justify-center mt-3 flex-col px-2'>
		<button onClick={()=>navigate('/')} className='btn btn-secondary px-3 border-2 border-violet-400 w-[10vw] '> ⬅️ Back</button>
      <h1 className='text-3xl text-pink-600 font-bold mb-2'>{countryData.name.common}</h1>
      <img src={countryData.flags.png} alt={countryData.name.common} className='rounded-lg md:w-[50%]' />
      <p className='text-xl text-pink-600 font-bold mb-2'>Capital: {countryData.capital}</p>
      <p  className='text-xl text-pink-600 font-bold mb-2'>Population: {countryData.population}</p>
      <p  className='text-xl text-pink-600 font-bold mb-2'>Area: {countryData.area} km²</p>
      <p  className='text-xl text-pink-600 font-bold mb-2'>Continent: {countryData.continents}</p>
      <p>{countryData}</p>
      
      <h1 className='text-2xl font-bold mt-4'>My Google Map</h1>

      <iframe
	  className='ml-2 mr-[5%] py-1 rounded-lg'
        src={googleMapsUrl}
        width="600"
        height="450"
        style={{border:0}}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

    </div>
  );
};

export default SingleCountry;
