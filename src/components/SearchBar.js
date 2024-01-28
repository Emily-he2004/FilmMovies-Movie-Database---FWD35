function SearchBar() {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-bar"
        />
      </div>
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
