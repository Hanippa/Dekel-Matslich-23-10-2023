import React, { useEffect, useState } from "react";
import getCurrentTime from "../helperFunctions/dateFunctions/getCurrentTime";
import { useSelector } from "react-redux";
import getTimeFormat from "../helperFunctions/dateFunctions/getTimeFormat";
import Wind from "../assets/utility-icons/wind.svg";
import Sun from "../assets/utility-icons/sun.svg";
import Drops from "../assets/utility-icons/drops.svg";
import Sunrise from "../assets/utility-icons/sunrise.svg";
import Sunset from "../assets/utility-icons/sunset.svg";
import AddToFavorites from "./AddToFavorites";
import { UnitToggle } from "./UnitToggle";
import { selectMetric } from "../redux/metricSlice";

export const CurrentWeatherDetails = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  const cityName = useSelector((state) => state.currentWeather.city);
  const cityKey = useSelector((state) => state.currentWeather.key);

  const currentWeather = useSelector((state) => state.currentWeather.data);
  const weatherForecast = useSelector((state) => state.weatherForecast.data);

  const metric = useSelector(selectMetric);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div id="details-container" className="w-full h-96 lg:h-full rounded-lg bg-white dark:bg-darkSecondary relative pt-8 ">
      <UnitToggle cityKey={cityKey}/>
      <AddToFavorites item={{key : cityKey, name : cityName}}/>
      <div className="h-3/5 w-full flex flex-col justify-around">
        <h2 className="text-2xl 2xl:text-4xl dark:text-white">{cityName}</h2>
        <p className="text-md 2xl:text-2xl font-light dark:text-white">{currentTime}</p>
        <div className="flex w-full justify-center items-center">
          <img
            className="w-24 2xl:w-44 drop-shadow-md"
            src={require(`../assets/weather-icons/${
              currentWeather ? currentWeather.iconNumber : 1
            }.png`)}
            alt="weather icon"
          />
          <p className="text-6xl 2xl:text-8xl dark:text-white">
            {currentWeather &&
              Math.floor(currentWeather.Temperature[metric ? 'Metric' : 'Imperial'].Value)}
            °
          </p>
        </div>
        <p className="text-2xl 2xl:text-3xl font-light dark:text-white">
          feels like{" "}
          {currentWeather &&
            Math.floor(currentWeather.ApparentTemperature[metric ? 'Metric' : 'Imperial'].Value)}
          °
        </p>
        <p className=" text-2xl 2xl:text-4xl font-light dark:text-white">
          {currentWeather && currentWeather.Text}
        </p>
      </div>
      <div className="h-2/5 w-full flex flex-col justify-around items-center border-t border-abraBlue dark:border-gray-700 border-opacity-5">
        <div className="flex w-full h-1/2 justify-around items-center">
          <div
            id="weather-data-point"
            className="w-2/5 h-4/5 bg-primary dark:bg-darkPrimary rounded-lg flex flex-col items-center justify-center gap-2"
          >
            <div className="flex items-center w-full justify-center gap-2">
              <p className="text-md 2xl:text-xl font-light dark:text-white ">Humidity</p>
              <img className="w-4 2xl:w-6 dark:invert" src={Drops} alt="humidity icon" />
            </div>
            <p className="font-light text-md 2xl:text-xl dark:text-white">
              {currentWeather && currentWeather.Humidity}%
            </p>
          </div>
          <div
            id="weather-data-point"
            className="w-2/5 h-4/5 bg-primary dark:bg-darkPrimary rounded-lg flex items-center justify-center gap-2"
          >
            <div className="flex flex-col justify-center items-center">
              <img className="w-4 2xl:w-6 dark:invert" src={Sunrise} alt="sunrise icon"/>
              <p className="text-md 2xl:text-xl font-light dark:text-white">sunrise</p>
              <p className="font-light text-md 2xl:text-lg dark:text-white">
                {weatherForecast && getTimeFormat(weatherForecast[0].Sunrise)}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-4 2xl:w-6 dark:invert" src={Sunset} alt="sunset icon"/>
              <p className="text-md 2xl:text-xl font-light dark:text-white">sunset</p>
              <p className="text-md 2xl:text-lg font-light dark:text-white">
                {weatherForecast && getTimeFormat(weatherForecast[0].Sunset)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full h-1/2 justify-around items-center">
          <div
            id="weather-data-point"
            className="w-2/5 h-4/5 bg-primary dark:bg-darkPrimary rounded-lg flex flex-col items-center justify-center gap-2"
          >
            <div className="flex items-center w-full justify-center gap-2">
              <p className="text-md 2xl:text-xl font-light dark:text-white">UV index</p>
              <img className="w-4 2xl:w-6   dark:invert" src={Sun} alt="uv index icon" />
            </div>
            <p className="font-light text-md 2xl:text-xl dark:text-white">
              {currentWeather && currentWeather.UVindex}
            </p>
          </div>
          <div
            id="weather-data-point"
            className="w-2/5 h-4/5 bg-primary dark:bg-darkPrimary rounded-lg flex flex-col items-center justify-center gap-2"
          >
            <div className="flex items-center w-full justify-center gap-2">
              <p className="text-md 2xl:text-xl font-light dark:text-white">Wind Speed</p>
              <img className="w-4 2xl:w-6  dark:invert" src={Wind} alt="wind speed icon" />
            </div>
            <p className="font-light text-md 2xl:text-xl dark:text-white">
              {currentWeather && currentWeather.WindSpeed[metric ? 'Metric' : 'Imperial'].Value}{metric ? 'km/h' : 'mph'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
