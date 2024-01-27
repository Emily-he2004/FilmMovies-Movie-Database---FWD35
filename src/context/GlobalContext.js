import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
   
   function loadFromLocalStorage() {
      const localData = localStorage.getItem("favourites");
      return localData ? JSON.parse(localData) : [];
   }
   
   const [favourites, setFavourites] = useState(loadFromLocalStorage());
   
   function addToFavourites(favourite) {
    const newFavourites = [...favourites, favourite];
    setFavourites(newFavourites);
   }
   
   function removeFromFavourites(favourite) {
      const newFavourites = favourites.filter((fav) => {
         return fav.id !== favourite.id;
    });
    setFavourites(newFavourites);
   }
   
   useEffect(() => {
     localStorage.setItem("favourites", JSON.stringify(favourites));
   }, [favourites]);
   
  return (
    <GlobalContext.Provider
      value={{
        favorites: favourites,
        addToFavorites: addToFavourites,
        removeFromFavorites: removeFromFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
