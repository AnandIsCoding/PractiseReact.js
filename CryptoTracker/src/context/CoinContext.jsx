import React, { useState, useEffect, createContext } from "react";

export const CoinContext = createContext();

export const CoinContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState('usd');
  const [data, setData] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`;

  // useEffect(() => {
  //   fetchData();
  // }, [currency]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result); // Storing fetched data in state
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const value = {
    currency,
    setCurrency,
    data,
    setData,
    fetchData,
  };

  return (
    <CoinContext.Provider value={value}>
      {children}
    </CoinContext.Provider>
  );
};
