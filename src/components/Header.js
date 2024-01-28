import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div>
      <NavBar />
      <SearchBar
        // searchMovie={searchMovie}
        // setSearchMovie={setSearchMovie}
        // fetchMovieData={fetchMovieData}
      />
    </div>
  );
}

export default Header;
