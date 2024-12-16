import React from "react";

const SearchBar = ({ searchTitle, setSearchTitle }) => {
  return (
    <input
      type="text"
      placeholder="Search for movies..."
      value={searchTitle}
      onChange={(e) => setSearchTitle(e.target.value)}
    />
  );
};

export default SearchBar;
