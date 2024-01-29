import { Link } from "react-router-dom";
import "../sass/_footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div>
        <Link to="/">
          <img
            className="full-logo"
            src="./media/movie_full_logo.svg"
            // movie app LOGOS - both full and mini versions go HERE.
            // Links to "HomePage" <Route />
            // Need to only show ONE of 2 logos depending on screen size.
          />
          <img className="mini-logo" src="./media/movie_mini_logo.svg" />
        </Link>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
