import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/favoritesSlice";
function Favorites() {
  const favorites = useSelector(selectFavorites);
  return (
    <div
      id="not-found-container"
      className="w-screen h-screenNav bg-background p-8 font-rubik"
    >
      <div className="h-full w-full bg-white rounded-lg flex flex-col justify-center items-center gap-8">
        {favorites.length > 0 && favorites.map((favorite , index) => {
            return (
                <div key={index}>
                    <p>{favorite.name}</p>
                </div>
            )
        })}
      </div>
    </div>
  );
}

export default Favorites;
