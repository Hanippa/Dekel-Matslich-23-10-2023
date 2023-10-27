import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/favoritesSlice";
import { Favorite } from "../components/Favorite";
function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <div
      id="favorites-container"
      className="w-screen  max-w-full h-screenNav bg-background dark:bg-darkBackgroud p-8 font-rubik"
    >
      <div className="h-full w-full bg-white dark:bg-darkSecondary overflow-y-auto rounded-lg flex justify-center flex-wrap items-center gap-8 max-w-full">
        {favorites.length > 0 &&
          favorites.map((favorite, index) => {
            return (
              <Favorite
                name={favorite.name}
                Citykey={favorite.key}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Favorites;
