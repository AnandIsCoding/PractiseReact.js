import React, { useContext, useState } from 'react';
import { CoinContext } from '../context/CoinContext';

function CoinDetails() {
  const { data } = useContext(CoinContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className='px-1 py-1 mt-[-10vh] mr-3 md:px-3 md:mt-0 md:mr-0'>
        <div className='w-full bg-[#ee6fce] font-bold text-black flex py-2 px-1 text-xl items-center justify-center rounded-lg'>
          {/* Header of the table */}
          <div className='w-[30%] md:basis-[35%]'>Coin</div>
          <div className='basis-[20%]'>Price</div>
          <div className='basis-[25%]'>24h Change</div>
          <div className='basis-[25%]'>Market Cap</div>
        </div>
      </div>

      {/* Data */}
      <div className='w-full ml-1 mr-1 text-black'>
        {currentItems && currentItems.length > 0 ? (
          currentItems.map((coin) => (
            <div key={coin.id} className='flex'>
              <div className='w-[20%] md:text-center font-bold text-lg flex items-center'>
                <img src={coin.image} alt={coin.id} className='w-[25px] h-[25px] mr-2' />
                <h1 className='h-[10vh]'>{coin.name}</h1>
              </div>
              <div className='w-[20%] text-center font-bold text-lg text-pink-700'>
                <h1 className='h-[10vh]'>{coin.current_price}</h1>
              </div>
              <div className='w-[25%] text-center font-bold text-lg text-blue-500'>
                <h1 className='h-[10vh]'>{coin.price_change_percentage_24h}%</h1>
              </div>
              <div className='w-[25%] text-center font-bold text-lg text-green-500'>
                <h1 className='h-[10vh]'>{coin.market_cap}</h1>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center'>Loading data...</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className='flex gap-5 justify-center items-center border-4 border-pink-400 w-[20vw] ml-auto mr-auto px-2 py-2 rounded-lg mb-[-100%]'>
        <button onClick={handlePreviousPage} className={`${currentPage===1 ? 'hidden': 'flex'}`} >
          ⬅️
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} className={`${currentPage=== totalPages ? 'hidden': 'flex'}`}>
          ➡️
        </button>
      </div>
    </>
  );
}

export default CoinDetails;
