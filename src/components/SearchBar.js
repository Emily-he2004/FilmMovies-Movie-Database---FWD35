import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const userValue = e.target[0].value;
    console.log(userValue)
    setSearchInput(userValue);
    navigate(`/search-results?query=${userValue}`);
  }

  return (
    <div>
      <div className="search-container">
        <form action="/search" method="GET" onSubmit={handleSubmit} >
          <input />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
