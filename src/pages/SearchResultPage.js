import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { getMovieRequest } from "../utilities/api";
import MoviesContainer from "../components/MoviesContainer";

function SearchResultPage() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  // const [loading, setLoading] = useState(false);

  // const fetchMovieData = async () => {
  //   try {
  //     setLoading(true);
  //     // const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
  //     const res = await fetch(` https://api.themoviedb.org/3/search/movie`);
  //     const data = await res.json();
  //     setAllMovieData(data.Search);

  //     console.log(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  const getMovieRequest = async () => {
    // return fetch(`${API_ENDPOINT}/search/movie?include_adult=false&language=en-CA&query=${search_input}`, {
    // // return fetch(`${API_ENDPOINT}/search?include_adult=false&language=en-CA&query=${search_input}`, {
    //   // https://www.themoviedb.org/search?language=en-CA&query=test
    //   headers: {
    //     accept: "application/json",
    //     Authorization: `Bearer ${API_TOKEN}`,
    //   },
  
      const searchURL = `https://api.themoviedb.org/3/search?${searchMovie}&language=en-CA`;
      const response = await fetch(searchURL);
      const responseJson = await response.json();

    if(responseJson.Search) {
      setAllMovieData(responseJson.Search);
    }
    }

  useEffect(() => {
    getMovieRequest(searchMovie);
  }, [searchMovie]);

  return (
    <div>
      <h2>This is the Search Results Page.</h2>
      <h3>Search Results for: {`Search result input value onClick?`}</h3>
      <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      <MoviesContainer moviesData={allMovieData} />
      
      {/* {allMovieData.map((item, index) => {
        return <MovieCard />;
      })} */}
    </div>
  );
}

export default SearchResultPage;
