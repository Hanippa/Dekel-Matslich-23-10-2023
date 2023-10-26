import {
  fetchCurrentWeatherFailure,
  fetchCurrentWeatherStart,
  fetchCurrentWeatherSuccess,
} from "./currentWeatherSlice";

import {
  fetchWeatherForecastFailure,
  fetchWeatherForecastStart,
  fetchWeatherForecastSuccess,
} from "./weatherForecastSlice";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchCurrentWeather = (cityKey , cityName) => async (dispatch) => {
  dispatch(fetchCurrentWeatherStart(cityName));
  fetch(
    `${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${API_KEY}&metric=${true}&details=true`
  )
    .then((response) => {
      if (!response.ok) {
        console.log("error 🐱‍🐉" , response);
      }
      return response.json();
    })
    .then((currentWeatherData) => {
      console.log(currentWeatherData);
      const FilteredData = {Temperature : currentWeatherData[0].Temperature , iconNumber : currentWeatherData[0].WeatherIcon , UVindex: currentWeatherData[0].UVIndexText , }
      dispatch(fetchCurrentWeatherSuccess(currentWeatherData));
    })
    .catch((error) => {
      dispatch(fetchCurrentWeatherFailure(error.message));
    });
};

export const fetchWeatherForecast = (cityKey) => async (dispatch) => {
  dispatch(fetchWeatherForecastStart());

  fetch(
    `${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=${true}`
  )
    .then((response) => {
      if (!response.ok) {
        console.log("error 🐱‍🐉", response);
      }
      return response.json();
    })
    .then((weatherForecast) => {
      dispatch(fetchWeatherForecastSuccess(weatherForecast));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchWeatherForecastFailure(error.message));
    });
};
