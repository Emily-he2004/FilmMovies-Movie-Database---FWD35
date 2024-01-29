import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";
import "../sass/_favourite.scss";

function FavouritesPage() {
  const { favourites } = useContext(GlobalContext);
  return (
    <div className="favPage">
      <h2>This is the Favourites Page.</h2>
      {favourites.length === 0 && (
        <p>No favourited movies yet. Go favourite movies to view them here.</p>
      )}
      {favourites.map((favourite) => (
        <MovieCard key={favourite.id} movieData={favourite} />
      ))}
    </div>
  );
}

export default FavouritesPage;