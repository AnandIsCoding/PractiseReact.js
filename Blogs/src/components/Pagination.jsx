import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Pagination() {
  const { page, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <div className="w-full h-[10vh] bg-zinc-400 border-t-2 border-zinc-600  flex justify-between items-center px-[5%]">
      <div className="flex justify-start px-3 gap-4">
        {/* Previous Button */}
        <button
          className={`bg-white px-3 py-2 font-bold text-xl rounded-lg  ${page === 1 ? ' cursor-not-allowed hidden' : ''}`}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        {/* Next Button */}
        <button
          className={`bg-white px-3 py-2 font-bold text-xl rounded-lg  ${page === totalPages ? ' cursor-not-allowed hidden ' : ''}`}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

	  <div className="flex justify-end px-3 gap-4 text-xl font-bold ">
				<span>Page {page} of {totalPages}</span>
	  </div>
    </div>
  );
}

export default Pagination;
