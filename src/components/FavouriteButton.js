import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function FavouriteButton({ movieData }) {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(GlobalContext);

  const isFavourited = favourites.find((fav) => {
    return fav.id === movieData.id;
  });

  function handleFavourite(event) {
    event.stopPropagation();
    if (isFavourited) {
      removeFromFavourites(movieData);
    } else {
      addToFavourites(movieData);
    }
  }

  return (
    <button
      onClick={handleFavourite}
      className={`favourite ${isFavourited ? "favourited" : ""}`}
    >
      &#10084; red
    </button>
  );
}

export default FavouriteButton;
