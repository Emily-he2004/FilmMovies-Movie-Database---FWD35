import { useEffect, useState } from "react";
import { getPopularMovies } from "../utilities/api";
import MoviesContainer from "../components/MoviesContainer";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcoingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  console.log(popularMovies);

  return (
    <main className="home-page" id="home-page">
      <h2>Home test</h2>
      <MoviesContainer title="Popular Movies" moviesData={popularMovies} />
      {/* <MoviesContainer title="Top-Rated Movies" moviesData={} /> */}
      {/* <MoviesContainer title="Now Playing Movies" moviesData={} /> */}
      {/* <MoviesContainer title="Upcoming Movies" moviesData={} /> */}
    </main>
  );
}

export default PageHome;
