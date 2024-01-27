import { useEffect, useState } from "react";
import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
} from "../utilities/api";
import MovieFilter from "../components/MovieFilter";
import MoviesContainer from "../components/MoviesContainer";

function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [filter, setFilter] = useState("popular");

  useEffect(() => {

  }, []);

  useEffect(() => {
    if (filter === "popular") {
      getPopularMovies()
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((error) => {
        alert(error);
      });
    } else if (filter === "top-rated") {
      getTopRatedMovies()
        .then((data) => {
          setTopRatedMovies(data.results);
        })
        .catch((error) => {
          alert(error);
        });
      // setPopularMovies([]);
      // setNowPlayingMovies([]);
      // setUpcomingMovies([]);
    } else if (filter === "now_playing") {
      getNowPlayingMovies()
        .then((data) => {
          setNowPlayingMovies(data.results);
        })
        .catch((error) => {
          alert(error);
        });
      // setPopularMovies([]);
      // setTopRatedMovies([]);
      // setUpcomingMovies([]);
    } else if (filter === "upcoming") {
      getUpcomingMovies()
        .then((data) => {
          setUpcomingMovies(data.results);
        })
        .catch((error) => {
          alert(error);
        });
      // setPopularMovies([]);
      // setTopRatedMovies([]);
      // setNowPlayingMovies([]);
    }

  }, [filter]);

  // useEffect(() => {
  //   let filteredMovies = [];

  //   switch (filter) {
  //     case "popular":
  //       filteredMovies = popularMovies;
  //       break;
  //     case "top_rated":
  //       filteredMovies = topRatedMovies;
  //       break;
  //     case "now_playing":
  //       filteredMovies = nowPlayingMovies;
  //       break;
  //     case "upcoming":
  //       filteredMovies = upcomingMovies;
  //       break;
  //     default:
  //       filteredMovies = popularMovies;
  //   }

  //   setFilteredMovies(filteredMovies);
  // }, [filter]);

  // console.log(popularMovies);

  return (
    <main className="home-page" id="home-page">
      <h2>This is the Home Page.</h2>
      <MovieFilter filter={filter} setFilter={setFilter}/>
      {filter === "popular" && (
        <MoviesContainer title="Popular Movies" moviesData={popularMovies} />
      )}
      {filter === "top_rated" && (
        <MoviesContainer title="Top-Rated Movies" moviesData={topRatedMovies} />
      )}      
      {filter === "now_playing" && (
        <MoviesContainer title="Now Playing Movies" moviesData={nowPlayingMovies} />
      )}      
      {filter === "upcoming" && (
        <MoviesContainer title="Upcoming Movies" moviesData={upcomingMovies} />
      )}
    </main>
  );
}

export default HomePage;
