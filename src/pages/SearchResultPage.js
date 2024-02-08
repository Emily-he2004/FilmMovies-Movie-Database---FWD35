import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getMovieRequest } from "../utilities/api";
import MoviesContainer from "../components/MoviesContainer";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function SearchResultPage() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    setIsLoading(true);
    getMovieRequest(query)
      .then((data) => {
        console.log("yughuygyu", data);
        setSearchMovie(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
  }, [query]);

  return (
    <div className="search-result">
      <SearchBar />
      <h2>This is the Search Results Page.</h2>
      <div className="search-value">
        <p>Search Results for: <span>{query}</span></p>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : searchMovie.length === 0 ? (
        <p className="no-movies">No movies found.</p>
      ) : (
        <MoviesContainer moviesData={searchMovie} />
      )}

      {allMovieData.map((item, index) => {
        return <MovieCard key={index} movieData={item} />;
      })}
    </div>
  );
}

export default SearchResultPage;
