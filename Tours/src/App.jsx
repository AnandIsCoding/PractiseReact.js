import React, { useState } from 'react';
import data from './data'; // Ensure this path is correct
// import Tours from './components/Tours'; // Ensure this path is correct
import Accordion from './components/Accordion';

function App() {
  const [tours, setTours] = useState(data);

  const handleDelete = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <div className='w-full h-[100vh] bg-zinc-400 px-24 py-5'>
      {/* Uncomment the line below if you want to use the Tours component */}
      {/* <Tours data={tours} onDelete={handleDelete} /> */}
      <Accordion />
    </div>
  );
}

export default App;
