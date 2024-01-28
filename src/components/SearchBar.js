import React from 'react';

function SearchBar( searchMovie, setSearchMovie, fetchMovieData) {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          className="search-bar"
        />
      </div>
      <button 
      onClick={fetchMovieData}
      className="search-button">Search</button>
    </div>
  );
}

// const SearchBar = (props) => {
//   return (
//     <div>
//       <h1>{props.heading}</h1>
//     </div>
//   );
// };

export default SearchBar;
