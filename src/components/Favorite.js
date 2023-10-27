import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCurrentWeather , fetchWeatherForecast } from "../redux/actions";

export const Favorite = ({ name, Citykey }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [currentWeather, setCurrentWeather] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFavoriteSelected = () => {
    navigate("/");
    dispatch(
      fetchCurrentWeather(
        Citykey,name
      )
    );
    dispatch(fetchWeatherForecast(Citykey));
  };

  useEffect(() => {
    const fetchCurrentWeather = async (cityKey, cityName) => {
      fetch(
        `${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${API_KEY}&metric=${true}&details=true`
      )
        .then((response) => {
          if (!response.ok) {
            toast.error(`failed to fetch current weather for ${cityName}`);
          }
          return response.json();
        })
        .then((currentWeatherData) => {
          const FilteredData = {
            Temperature: currentWeatherData[0].Temperature,
            iconNumber: currentWeatherData[0].WeatherIcon,
            Text: currentWeatherData[0].WeatherText,
          };
          setCurrentWeather(FilteredData);
        })
        .catch((error) => {
          toast.error(`failed to fetch current weather ${error.message}`);
        });
    };

    fetchCurrentWeather(Citykey, name);
  }, [Citykey, name, API_KEY, BASE_URL]);

  return (
    <div
      onClick={handleFavoriteSelected}
      className="h-72 w-52 flex flex-col gap-4 justify-center items-center bg-primary dark:bg-darkPrimary rounded-lg cursor-pointer"
    >
      <p className="font-light text-lg dark:text-white">{name}</p>
      <img
        className="w-24"
        src={require(`../assets/weather-icons/${
          currentWeather ? currentWeather.iconNumber : 1
        }.png`)}
        alt="weather icon"
      />
      <p className="font-light text-lg dark:text-white">
        {currentWeather && currentWeather.Text}
      </p>
      <p className="font-light text-lg dark:text-white">
        {currentWeather && currentWeather.Temperature.Metric.Value}
      </p>
    </div>
  );
};
