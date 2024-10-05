import React, { useState, useEffect } from "react";
import DataTable from "./components/DataTable";
import './index.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchDataAsync = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);

  const filteredData = data.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSortByMarketCap = () => {
    const sortedData = [...filteredData].sort((a, b) => b.market_cap - a.market_cap);
    setData(sortedData);
  };

  const handleSortByPercentageChange = () => {
    const sortedData = [...filteredData].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    setData(sortedData);
  };

  return (
    <div className="App">
      <h1>Crypto Market</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search By Name or Symbol"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSortByMarketCap}>
          Sort By Mkt Cap
        </button>
        <button onClick={handleSortByPercentageChange}>
          Sort by % Change
        </button>
      </div>
      <DataTable data={filteredData} />
    </div>
  );
};

export default App;
