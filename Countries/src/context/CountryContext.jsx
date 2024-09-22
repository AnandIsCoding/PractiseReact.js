import { useState, createContext, useEffect } from "react";
import SingleCountry from '../pages/SingleCountry'
import { Routes, Route, useNavigate } from'react-router-dom';
import App from "../App";

// Step 1
export const CountryContext = createContext();


const CountryContextProvider = ({ children }) => {
    const [countryDetails, setCountryDetails] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isDark, setIsDark] = useState(false)
    const navigate= useNavigate();

    const handleCountryClick = (name) =>{
        setSelectedCountry(name)
        console.log(selectedCountry)
        navigate('/singlecountryDetails')
        
    }
    const handleIsDark = () =>{
		setIsDark(!isDark)
        localStorage.setItem('isDark', isDark);
	}

    const handleChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        
        // Filter based on the `name.common` field of each country
        const searchResult = countryDetails.filter(country => 
            country.name?.common?.toLowerCase().includes(searchTerm)
        );

        setFilteredCountries(searchResult);
        console.log(searchResult);
    };

    const handleRegion = (region) => {
        const filteredRegion = countryDetails.filter(
          (country) => country.region.toLowerCase() === region.toLowerCase()
        );
        setFilteredCountries(filteredRegion);
        console.log(filteredRegion);
      };
      

    const fetchCountryData = async () => {
        let url = `https://restcountries.com/v3.1/all`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setCountryDetails(data);
            setFilteredCountries(data);  // Initialize filtered list with all countries
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCountryData();
    }, []);

    const value = {
        countryDetails,
        filteredCountries,
        handleChange,
        selectedCountry, 
        setSelectedCountry, 
        handleCountryClick,
        isDark, setIsDark, handleIsDark, handleRegion
    };

    return (
        <CountryContext.Provider value={value}>
            {children}
        </CountryContext.Provider>
    );
};

export default CountryContextProvider;
