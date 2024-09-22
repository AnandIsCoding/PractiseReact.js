function Filter({ filterData, category, setCategory }) {

	const filterHandler = (title) => {
	  console.log("Selected category:", title);
	  setCategory(title);
	}
  
	return (
	  <div className='mt-4 ml-[33%] flex gap-10'>
		{
		  filterData.map((item) => (
			<button 
			  key={item.id} 
			  className='px-4 py-2 bg-[#4343eb] text-white font-bold rounded-lg hover:bg-[#4a86f7]' 
			  onClick={() => filterHandler(item.title)}>
			  {item.title}
			</button>
		  ))
		}
	  </div>
	);
  }
  
  export default Filter;
  