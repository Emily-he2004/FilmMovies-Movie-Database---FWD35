import "../sass/_about.scss";
import popcorn from "../media/popcorn.jpg";

function AboutPage() {
  return (
    <div className="about">
      <img className="popcorn-cinema" src={popcorn} alt="eat popcorn at cinema" />
      <div className="about-content">
        <p>Here at F<mark>Movies</mark>, we strive to become the largest movie database so that you won't ever need to search elsewhere.</p>

        <p>This website uses TMDB API but is not endorsed nor certified by TMDB</p>
      </div>
    </div>
  );
}

export default AboutPage;
