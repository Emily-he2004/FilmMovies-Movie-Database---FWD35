import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../sass/_searchBar.scss";


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
          <input placeholder="Search..." />
          <button type="submit" className="search-button">
            <svg role="image" aria-label="Magnifying Glass Icon" width="30" height="30" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero" /></svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;


