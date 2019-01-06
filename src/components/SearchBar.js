import React from "react";

const SearchBar = ({ value, onChange, inputRef }) => {
  return (
    <input
      className="search-bar"
      type="text"
      value={value}
      onChange={onChange}
      ref={inputRef}
    />
  );
};

export default SearchBar;
