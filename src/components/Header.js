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
          <img className="header-mini-logo" src={movieMiniLogo} alt="Mini Movie Logo" />
          <img className="header-full-logo" src={movieFullLogo} alt="Full Movie Logo" />
        </Link>
        <button onClick={() => { setShowNav(!showNav) }} className="hamburger">☰</button>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
