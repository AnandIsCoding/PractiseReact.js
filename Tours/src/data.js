const data = [
	{
		id: 1,
		name: "Agra",
		info: "Agra is a city in northern India, known for the iconic Taj Mahal, a UNESCO World Heritage Site, and a symbol of love. The city is also recognized for its Mughal-era architecture, including the Agra Fort and Fatehpur Sikri, and cultural heritage.",
		image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhaiUyMG1haGFsfGVufDB8fDB8fHww",
		price: "35,759"
	},
	{
		id: 2,
		name: "Jaipur",
		info: "Jaipur, the capital of Rajasthan, is known as the Pink City due to its distinctively colored buildings. The city is renowned for its historic palaces, such as the Hawa Mahal and the City Palace, as well as the impressive Amer Fort. ",
		image: "https://cdn.thecodehelp.in/Jaipur.jpeg",
		price: "28,499"
	},
	{
		id: 3,
		name: "Goa",
		info: "Goa is a coastal state in western India, known for its stunning beaches, vibrant nightlife, and rich Portuguese heritage. Popular destinations include the beaches of Baga and Anjuna, the historic churches of Old Goa, and the bustling markets of Panaji. Goa is also famous for its seafood cuisine and laid-back lifestyle.",
		image: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww",
		price: "45,999"
	},
	{
		id: 4,
		name: "Delhi",
		info: "Delhi, the capital city of India, is a bustling metropolis that blends history and modernity. The city is home to iconic landmarks such as the Red Fort, Qutub Minar, and India Gate. Delhi is also known for its vibrant markets, street food, and cultural diversity, making it a fascinating destination for visitors.",
		image: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGl8ZW58MHx8MHx8fDA%3D",
		price: "22,349"
	},
	{
		id: 5,
		name: "Mumbai",
		info: "Mumbai, the financial capital of India, is a vibrant city known for its fast-paced life and diverse culture. It is home to the Bollywood film industry, the iconic Gateway of India, and the historic Chhatrapati Shivaji Maharaj Terminus. Mumbai offers a mix of colonial architecture, modern skyscrapers, and bustling local markets.",
		image: "https://images.unsplash.com/photo-1660145416818-b9a2b1a1f193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D",
		price: "50,399"
	},
	{
		id: 6,
		name: "Kerala",
		info: "Kerala, located in southern India, is known as 'God's Own Country' for its lush greenery, serene backwaters, and beautiful beaches. The state is famous for its traditional houseboats, Ayurvedic treatments, and cultural festivals like Onam. Kerala's scenic landscapes, wildlife sanctuaries, and hill stations like Munnar attract nature lovers and travelers from around the world.",
		image: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8fDB8fHww",
		price: "40,599"
	},
	{
		id: 7,
		name: "Varanasi",
		info: "Varanasi, one of the oldest living cities in the world, is a spiritual hub in India. Located on the banks of the Ganges River, the city is famous for its ancient temples, ghats where pilgrims perform rituals, and the evening Ganga Aarti ceremony. Varanasi is a center of Hindu religion and culture, attracting devotees and tourists alike.",
		image: "https://images.unsplash.com/photo-1706186538668-0711a8abdd0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhcmFuYXNpJTIwZ2hhdHxlbnwwfHwwfHx8MA%3D%3D",
		price: "19,879"
	},
	{
		id: 8,
		name: "Udaipur",
		info: "Udaipur, also known as the City of Lakes, is a picturesque city in Rajasthan known for its stunning palaces and lakes. The City Palace, overlooking Lake Pichola, is a highlight, along with the serene Jag Mandir and the historic Sajjangarh Monsoon Palace. Udaipur's rich history, vibrant culture, and romantic ambiance make it a popular destination for tourists.",
		image: "https://plus.unsplash.com/premium_photo-1676487748065-7e4b8c050dab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dWRheXB1cnxlbnwwfHwwfHx8MA%3D%3D",
		price: "37,249"
	},
	{
		id: 9,
		name: "Mysore",
		info: "Mysore, located in Karnataka, is a city with a rich royal heritage, known for the magnificent Mysore Palace. The city is also famous for its silk, sandalwood, and the grand Mysore Dasara festival. Mysore's blend of history, culture, and tradition, along with its pleasant climate, makes it a charming destination for visitors.",
		image: "https://plus.unsplash.com/premium_photo-1697729603226-8c8627dfc12b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXlzb3JlfGVufDB8fDB8fHww",
		price: "27,549"
	},
	{
		id: 10,
		name: "Amritsar",
		info: "Amritsar, in Punjab, is home to the Golden Temple, the holiest shrine in Sikhism and a symbol of spiritual and cultural significance. The city is also known for the historic Jallianwala Bagh and the Wagah Border ceremony. Amritsar's rich history, vibrant food scene, and warm hospitality make it a must-visit destination in India.",
		image: "https://plus.unsplash.com/premium_photo-1697730396642-7a338ffc2852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D",
		price: "23,799"
	}
]

export default data;
