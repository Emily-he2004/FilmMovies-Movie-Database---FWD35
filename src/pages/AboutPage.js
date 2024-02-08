import "../sass/_aboutPage.scss";
import popcorn from "../media/popcorn.jpg";

function AboutPage() {
  return (
    <div className="about">
      <img
        className="popcorn-cinema"
        src={popcorn}
        alt="eat popcorn at cinema"
      />
      <div className="about-content">
        <p>
          Welcome to{" "}
          <strong>
            F<mark>Movies</mark>
          </strong>
          ! While exploring the world of cinema, we strive to become the largest
          movie database so that you won't ever need to search elsewhere.
        </p>

        <p>
          While we use the TMDB API,{" "}
          <strong>
            F<mark>Movies</mark>
          </strong>{" "}
          is an independent platform, created with passion and dedication.
        </p>

        <p>
          Enjoy features like favoriting movies, a powerful search function, and
          convenient filters for popular, top-rated, upcoming, and now playing
          films.{" "}
        </p>

        <p>
          <strong>
            F<mark>Movies</mark>
          </strong>{" "}
          is for educational purposes only. This website uses TMDB API but is
          not endorsed nor certified by TMDB
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
