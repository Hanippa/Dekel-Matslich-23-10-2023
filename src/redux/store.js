import { configureStore } from "@reduxjs/toolkit";
import currentWeatherReducer from "./currentWeatherSlice";
import weatherForecastReducer from "./weatherForecastSlice";
import favoritesReducer from "./favoritesSlice";
import metricReducer from "./metricSlice";

const storedFavorites = JSON.parse(localStorage.getItem("userFavorites")) || [];

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    weatherForecast: weatherForecastReducer,
    favorites: favoritesReducer,
    metric: metricReducer,
  },
  preloadedState: {
    favorites: {
      favorites: storedFavorites,
    },
  },
});
