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
import getShortenedDay from "../helperFunctions/dateFunctions/getShortenedDay";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchCurrentWeather = (cityKey, cityName) => async (dispatch) => {
  dispatch(fetchCurrentWeatherStart({ city: cityName, key: cityKey }));
  fetch(
    `${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${API_KEY}&metric=${true}&details=true`
  )
    .then((response) => {
      if (!response.ok) {
        dispatch(fetchCurrentWeatherFailure(response.statusText));
      }
      return response.json();
    })
    .then((currentWeatherData) => {
      const FilteredData = {
        Temperature: currentWeatherData[0].Temperature,
        iconNumber: currentWeatherData[0].WeatherIcon,
        UVindex: currentWeatherData[0].UVIndexText,
        ApparentTemperature: currentWeatherData[0].ApparentTemperature,
        Text: currentWeatherData[0].WeatherText,
        Humidity: currentWeatherData[0].RelativeHumidity,
        WindSpeed: currentWeatherData[0].Wind.Speed,
      };
      dispatch(fetchCurrentWeatherSuccess(FilteredData));
    })
    .catch((error) => {
      dispatch(fetchCurrentWeatherFailure(error.message));
    });
};

export const fetchWeatherForecast = (cityKey, metric) => async (dispatch) => {
  dispatch(fetchWeatherForecastStart());
  fetch(
    `${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=${metric}&details=true`
  )
    .then((response) => {
      if (!response.ok) {
        dispatch(fetchWeatherForecastFailure(response.statusText));
      }
      return response.json();
    })
    .then((weatherForecastData) => {
      const FilteredData = weatherForecastData.DailyForecasts.map(
        (forecast) => {
          return {
            Date: forecast.Date,
            Day: getShortenedDay(forecast.Date),
            Temperature: forecast.Temperature.Maximum.Value,
            iconNumber: forecast.Day.Icon,
            Text: forecast.Day.ShortPhrase,
            Sunrise: forecast.Sun.Rise,
            Sunset: forecast.Sun.Set,
          };
        }
      );
      dispatch(fetchWeatherForecastSuccess(FilteredData));
    })
    .catch((error) => {
      dispatch(fetchWeatherForecastFailure(error.message));
    });
};
