import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import CountryList from './components/CountryList';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SingleCountry from './pages/SingleCountry';
import { CountryContext } from './context/CountryContext';

function App() {
  
  const {isDark, setIsDark} = useContext(CountryContext);

  return (
    <div className={`overflow-x-hidden ${isDark ? 'bg-[#525151]' : ''}`}>
      {/* Routes go here */}
      <Routes>
        <Route path="/" element={
          <div className='flex flex-col flex-wrap md:flex-row'>
            <Search />
            <Dropdown />
            <CountryList />
          

          </div>
        }/>
        <Route path='/singlecountryDetails' element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
