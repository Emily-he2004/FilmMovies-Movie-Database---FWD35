import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { getMovieRequest } from "../utilities/api";
import MoviesContainer from "../components/MoviesContainer";
import { useLocation } from "react-router-dom";

function SearchResultPage() {
  const [allMovieData, setAllMovieData] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [searchMovie, setSearchMovie] = useState([]);

  useEffect(() => {
    getMovieRequest(query)
      .then((data) => {
        console.log("yughuygyu", data);
        setSearchMovie(data.results);
      })
      .catch((error) => {
        alert(error);
      });
  }, [query]);

  return (
    <div>
      <h2>This is the Search Results Page.</h2>
      <div className="search-value">
        <h3>Search Results for:</h3>
        <p>{query}</p>
      </div>
      <MoviesContainer moviesData={searchMovie} />

      {allMovieData.map((item, index) => {
        return <MovieCard key={index} movieData={item} />;
      })}
    </div>
  );
}

export default SearchResultPage;
