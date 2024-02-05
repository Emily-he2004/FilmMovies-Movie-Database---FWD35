import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";
import "../sass/_favouritesPage.scss";

function FavouritesPage() {
  const { favourites } = useContext(GlobalContext);
  return (
    <div className="favPage">
      <h2>This is the Favourites Page.</h2>
      <div className="movie-cards">
      {favourites.length === 0 && (
        <p>No favourited movies yet. Go favourite movies to view them here.</p>
      )}
      {favourites.map((favourite) => (
        <MovieCard key={favourite.id} movieData={favourite} />
      ))}
      </div>
    </div>
  );
}

export default FavouritesPage;