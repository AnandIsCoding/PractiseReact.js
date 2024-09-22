import React, { useContext, useEffect } from 'react'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'
function App() {
 
  const {fetchDataFromApi} = useContext(AppContext);
  useEffect(()=>{
    fetchDataFromApi();
  }, [])

  return (
    <div>
      <Navbar/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
