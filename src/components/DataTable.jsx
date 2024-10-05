import React from "react";

const DataTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Current Price</th>
                    <th>Total Volume</th>
                    <th>Market Cap</th>
                    <th>% Change (24h)</th>
                </tr>
            </thead>
            <tbody>
                {data.map((coin) => (
                    <tr key={coin.id}>
                        <td>
                            <img src={coin.image} alt={coin.name} width="30" height="30" />
                        </td>
                        <td>{coin.name}</td>
                        <td>{coin.symbol.toUpperCase()}</td>
                        <td>${coin.current_price.toLocaleString()}</td>
                        <td>${coin.total_volume.toLocaleString()}</td>
                        <td>${coin.market_cap.toLocaleString()}</td>
                        <td
                            style={{
                                color: coin.price_change_percentage_24h > 0 ? "green" : "red",
                            }}
                        >
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
