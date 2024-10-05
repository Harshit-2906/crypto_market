import React from "react";

const SearchBar = ({ setSearchTerm }) => {
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by coin name..."
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
