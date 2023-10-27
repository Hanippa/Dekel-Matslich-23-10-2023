import { useDispatch, useSelector } from "react-redux";
import { useEffect , useState } from "react";
import Star from "../assets/utility-icons/star.svg";
import { addFavorite, removeFavorite, selectFavorites } from "../redux/favoritesSlice";

export default function AddToFavorites({ item }) {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);
  const currentWeather = useSelector((state) => state.currentWeather.data);
  const [isFavorite , setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.map(favorite => favorite.key).includes(item.key));
    localStorage.setItem('userFavorites', JSON.stringify(favorites));
  }, [favorites , currentWeather , item]);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <div className="flex justify-center items-center absolute right-4" onClick={handleFavorite}>
      {!isFavorite ? (
        <>
          <p className="text-lg font-light">Add to Favorites</p>
          <img className="w-4" src={Star} alt="star icon"/>
        </>
      ) : (
        <>
          <p className="text-lg font-light">Remove from Favorites</p>
          <img className="w-4" src={Star} alt="star icon"/>
        </>
      )}
    </div>
  );
}
