import { Link } from "react-router-dom";

function NavBar() {
  return (
    // <div>
    //   <div>
    //     <Link to="/">
    //       <img
    //         className="full-logo"
    //         src="./media/movie_full_logo.svg"
    //         // movie app LOGOS - both full and mini versions go HERE.
    //         // Links to "HomePage" <Route />
    //         // Need to only show ONE of 2 logos depending on screen size.
    //       />
    //       <img className="mini-logo" src="./media/movie_mini_logo.svg" />
    //     </Link>
    //   </div>
    //   {/* Does the button need it's own <div> or
    //             Can it go inside menu list's <div>? */}
    //   <div>
    //     <button>
    //       <img button image goes here />
    //     </button>
    //     <ul>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/favourites">Favourites</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   {/* Search bar must go inside <Header /> */}
    // </div>
    <nav className="header-nav">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
