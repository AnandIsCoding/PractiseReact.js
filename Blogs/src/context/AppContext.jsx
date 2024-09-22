import { useState, createContext } from "react";


// Step 1
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetching data from API
    async function fetchDataFromApi(page = 1) {
        setLoading(true);
        let url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch {
            console.error("Failed to fetch data");
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

    const handlePageChange = (page) => {
        setPage(page);
        fetchDataFromApi(page);
    };

    const value = {
        page,
        setPage,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
        handlePageChange,
        fetchDataFromApi
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
