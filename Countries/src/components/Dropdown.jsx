import React, { useContext } from 'react'
import { CountryContext } from '../context/CountryContext'

function Dropdown() {
  const { handleRegion } = useContext(CountryContext)

  return (
    <div className="dropdown mr-[-20%] md:ml-[69vw]">
      <div tabIndex={0} role="button" className="btn text-xl m-1 border-2 border-violet-500">
        <h1>Region</h1>
        <span>⬇️</span>
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li onClick={() => handleRegion('Africa')}>Africa</li>
        <li onClick={() => handleRegion('Europe')}>Europe</li>
        <li onClick={() => handleRegion('Asia')}>Asia</li>
        <li onClick={() => handleRegion('Americas')}>Americas</li>
      </ul>
    </div>
  )
}

export default Dropdown
