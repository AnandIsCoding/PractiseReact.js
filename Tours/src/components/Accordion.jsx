import React, { useState } from 'react';
import accordionData from '../accordiondata';

function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className='flex flex-col w-full h-full justify-center items-center gap-3'>
      {accordionData.map((item) => (
        <div key={item.id} className='w-[35vw]'>
          <div
            className='flex justify-between items-center bg-[black] rounded-lg h-[13vh] cursor-pointer border-2 border-white px-4 py-2'
            onClick={() => handleSelect(item.id)}
          >
            <h1 className='text-center font-bold text-xl text-white'>
              {item.question}
            </h1>
            <h1 className='text-white'>
              {selected === item.id ? '➖' : '➕'}
            </h1>
          </div>
          {selected === item.id && (
            <div className='bg-white text-black font-semibold rounded-b-lg px-3 py-2'>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
