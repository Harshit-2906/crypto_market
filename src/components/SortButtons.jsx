import React from "react";

const SortButtons = ({ handleSort }) => {
    return (
        <div>
            <button onClick={() => handleSort("market_cap")}>
                Sort by Market Cap
            </button>
            <button onClick={() => handleSort("percentage_change")}>
                Sort by Percentage Change
            </button>
        </div>
    );
};

export default SortButtons;
