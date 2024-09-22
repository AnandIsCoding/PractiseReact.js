import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { filterData, apiUrl } from './components/filterdata';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from 'react-toastify';
import Loader from './components/Loader';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCourses(data.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='p-4 h-[280vh] bg-[black]'>
      <Navbar />
      <Filter filterData={filterData} category={category} setCategory={setCategory} />
      {loading ? (
        <Loader />
      ) : (
        <Cards courses={courses} category={category} />
      )}
    </div>
  );
}

export default App;
