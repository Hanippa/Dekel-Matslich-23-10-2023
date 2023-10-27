import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/favoritesSlice";
import { Favorite } from "../components/Favorite";
function Favorites() {


  const favorites = useSelector(selectFavorites);

  return (
    <div
      id="not-found-container"
      className="w-screen h-screenNav bg-background p-8 font-rubik"
    >
      <div className="h-full w-full bg-white rounded-lg flex justify-center flex-wrap items-center gap-8">
        {favorites.length > 0 && favorites.map((favorite , index) => {
            return (
                <Favorite name={favorite.name} Citykey={favorite.key} key={index}/>
            )
        })}
      </div>
    </div>
  );
}

export default Favorites;
