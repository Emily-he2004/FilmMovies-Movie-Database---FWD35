import "../sass/_about.scss";
import popcorn from "../media/movie-watchers.jpg";

function AboutPage() {
  return (
    <div className="about"> 
      <img class="popcorn-cinema" src={popcorn} alt="eat popcorn at cinema" />
      
      <p class="about-text">Here at F<mark>Movies</mark>, we strive to become the largest movie database so that you won't ever need to search elsewhere.</p>

      <p class="tmdb-text">This website uses TMDB API but is not endorsed nor certified by TMDB</p>

    </div>
  );
}

export default AboutPage;
