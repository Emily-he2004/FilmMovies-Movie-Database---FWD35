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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
        />
      </svg>
    </button>
  );
}

export default FavouriteButton;
