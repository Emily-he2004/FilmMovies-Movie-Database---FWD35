import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import movieMiniLogo from "../media/movie_mini_logo.svg";
import movieFullLogo from "../media/movie_full_logo.svg";
import { useState } from "react";

function Header() {

  const [showNav, setShowNav] = useState(false);

  return (
    <header id="navigation-wrapper" className={`${showNav ? "show" : ""}`}>
      <div className="header-container">
        <Link className="movie-logo" to="/">
          <img src={movieMiniLogo} alt="Movie Logo" />
        </Link>
        <button onClick={() => { setShowNav(!showNav) }} className="hamburger">☰</button>
      </div>
      <NavBar />
      {/* <SearchBar
      // searchMovie={searchMovie}
      // setSearchMovie={setSearchMovie}
      // fetchMovieData={fetchMovieData}
      /> */}

      {/* Commented out SearchBar for the time being */}
    </header>
  );
}

export default Header;
