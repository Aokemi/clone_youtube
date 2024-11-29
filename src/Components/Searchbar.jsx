import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {

  const [search, setSearch] = useState("")

  const handleInputChange = (e) => {

    setSearch(e.target.value) // Updates search text

  }

  const handleSearch = () => {

    if (onSearch) {
      onSearch(search) // Research transmitted to parent
    }

  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Searching..."
        value={search}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;