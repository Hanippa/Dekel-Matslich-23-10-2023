import { configureStore } from '@reduxjs/toolkit'
import currentWeatherReducer from "./currentWeatherSlice";
import weatherForecastReducer from "./weatherForecastSlice";

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    weatherForecast: weatherForecastReducer,
  },
})