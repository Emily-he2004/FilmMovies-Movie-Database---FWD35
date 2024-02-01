import { Link } from "react-router-dom";
import "../sass/_footer.scss";
import facebook from "../media/facebook.svg";
import twitter from "../media/twitter.svg";
import instagram from "../media/instagram.svg";
import movieMiniLogo from "../media/movie_mini_logo.svg";

function Footer() {
  return (
    <div className="footer">
      
      <div className="footer-links">
        <ul>
          <li>
            {/*<Link to="/about">About</Link>*/}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} 
                   alt="Facebook icon"/>
            </a>
          </li>

          <li>
            {/*<Link to="/favourites">Favourites</Link>*/}
            <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
              <img src={twitter} 
                   alt="Twitter icon"/>
            </a>
          </li>

          <li>
            {/*<Link to="/favourites">Favourites</Link>*/}
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} 
                   alt="Instagram icon"/>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <Link to="/">
          {/*<img
            className="full-logo"
            src={movieMiniLogo} alt="Movie Logo"
            // movie app LOGOS - both full and mini versions go HERE.
            // Links to "HomePage" <Route />
            // Need to only show ONE of 2 logos depending on screen size.
          /> */}
          <img className="mini-logo" src={movieMiniLogo} alt="Movie Logo" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
