import React from 'react';

function Cards() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1598664977841-9e0f003548c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kindle",
      instock: true,
      description: "Lorem ipsum dolor sit amet,it. Suscipit possimus reprehenderit est modi dolorem culpa."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1676822252274-f81d2d6aab23?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily use",
      instock: false,
      description: "Lorem ipsum dolor sit amet,it. Suscipit possimus reprehenderit  dolorem culpa."
    },
    {
      image: "https://images.unsplash.com/photo-1499096382193-ebb232527fee?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Breakfast",
      instock: true,
      description: "Lorem ipsum dolor sit amet,it. Suscipit possimus reprehenderit  dolorem culpa."
    },
	{
		image: "https://images.unsplash.com/photo-1517635676447-3a480fbfd8f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRhaWx5JTIwdXNlJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
		name: "Crux",
		instock: true,
		description: "Lorem ipsum dolor sit amet,it. Suscipit possimus reprehenderit  dolorem culpa."
	},
	{
		image: "https://images.unsplash.com/photo-1499096382193-ebb232527fee?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		name: "Breakfast",
		instock: true,
		description: "Lorem ipsum dolor sit amet,it. Suscipit possimus reprehenderit  dolorem culpa."
	  },
	
	
  ];

  return (
    <>
      {
			products.map((item, index) => (
        		<div key={index} className='w-[17vw] h-[20vw] bg-white rounded-md overflow-hidden'>
					<div className='image w-full h-[10vw]'>
						<img className='w-full h-full object-cover' src={item.image} alt={item.name} />
					</div>
					<div className='description px-1 py-1'>
						<h1 className='name text-lg text-[#171919] mt-[5px]'>{item.name}</h1>
						<button className={`px-2 py-1 mt-1 ml-1 ${item.instock ? 'bg-[#0be10b] hover:bg-[#049604]' : 'bg-[#df8484]'} rounded text-white`}>
						{item.instock ? 'Available' : 'Out of Stock'}
						</button>
						<h2 className='mt-[4px] text-[#119d8d]'>{item.description}</h2>
					</div>
				</div>
			))
	
	}
    </>
  );
}

export default Cards;
