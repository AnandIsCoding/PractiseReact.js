import { useState, createContext, useEffect } from 'react';
import axios from 'axios'; 

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
	const baseUrl = `https://fakestoreapi.com/products`;
	const [products, setProducts] = useState(() => {
		// Initialize products from localStorage or empty array
		const storedProducts = localStorage.getItem('products');
		return storedProducts ? JSON.parse(storedProducts) : [];
	}); 
	const [filtered, setFiltered] = useState(products); 
	const [selectedItem, setSelectedItem] = useState(null); 

    // Fetch products from API
	const getProducts = async () => {
		try {
			const { data } = await axios.get(baseUrl); 
			setProducts(data); // Update products state with fetched data
			setFiltered(data); // Also set initial filtered state if needed
		} catch (error) {
			console.error('Error fetching products:', error); // Handle any errors
		}
	};

	// Update localStorage whenever the products state changes
	useEffect(() => {
		if (products.length > 0) {
			localStorage.setItem('products', JSON.stringify(products));
		}
	}, [products]);

	// Fetch products from API on component mount
	useEffect(() => {
		if (products.length === 0) {
			getProducts();
		}
	}, []);

    // Context value that will be available to all components
	const value = {
		products, 
		setProducts, 
		getProducts, 
		selectedItem, 
		setSelectedItem, 
		filtered, 
		setFiltered
	};

	return (
		<ProductContext.Provider value={value}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
