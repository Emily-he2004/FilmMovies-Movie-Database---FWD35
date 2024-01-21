// import { useContext } from "react";
// import { GlobalContext } from "../context/GlobalContext";


// function FavouriteButton({movieData}){

//     const {favourites, addToFavourites, removeFavourites} = useContext(GlobalContext);

//     const isFavourited = favourites.find((fav) => {
//         return fav.id === movieData.id;
//     });


//     function handleFavourite(event) {
//         event.stopPropagation;
//         if (isFavourited){
//             removeFavourites(movieData);
//         } else {
//             addToFavourites(movieData);
//         }
//     }

//     return(
//         <button onClick={handleFavourite} className={`favourite ${isFavourited ? "favourited" : ""}`}>&#9829;</button>
//     )
// }

// export default FavouriteButton;