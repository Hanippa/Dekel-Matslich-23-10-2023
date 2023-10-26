import React, { useEffect, useState } from "react";
import getCurrentTime from "../helperFunctions/getCurrentTime";
import { useSelector } from "react-redux";
import { Search } from "../components/Search";
import Wind from "../assets/utility-icons/wind.svg";
import Sun from "../assets/utility-icons/sun.svg";
import Drops from "../assets/utility-icons/drops.svg";
import { Chart } from "../components/Chart";
const Home = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  const cityName = useSelector((state) => state.currentWeather.city);
  const currentWeather = useSelector((state) => state.currentWeather.data);
  const currentWeatherLoading = useSelector(
    (state) => state.currentWeather.loading
  );
  const currentWeatherError = useSelector(
    (state) => state.currentWeather.error
  );

  const weatherForecast = useSelector((state) => state.weatherForecast.data);
  const weatherForecastLoading = useSelector(
    (state) => state.weatherForecast.loading
  );
  const weatherForecastError = useSelector(
    (state) => state.weatherForecast.error
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="font-rubik font-normal text-center bg-background w-screen h-screenNav flex flex-col md:flex-row p-8 gap-4 md:gap-0">
      <section
        id="left-section"
        className="w-full md:w-1/4 h-full flex flex-col gap-4"
      >
        <Search />
        <div
          id="details-container"
          className="w-full h-full rounded-lg bg-white"
        >
          <div className="h-3/5 w-full flex flex-col justify-around">
            <h2 className="text-4xl">{cityName}</h2>
            <p className="text-2xl font-light">{currentTime}</p>
            <div className="flex w-full justify-center items-center">
              <img
                className="w-44 drop-shadow-md"
                src={require(`../assets/weather-icons/${
                  currentWeather ? currentWeather.iconNumber : 1
                }.png`)}
                alt="weather icon"
              />
              <p className="text-8xl">
                {currentWeather &&
                  Math.floor(currentWeather.Temperature.Metric.Value)}
                °
              </p>
            </div>
            <p className="text-3xl font-light">
              feels like{" "}
              {currentWeather &&
                Math.floor(currentWeather.ApparentTemperature.Metric.Value)}
              °
            </p>
            <p className="text-4xl font-light">{currentWeather && currentWeather.Text}</p>
          </div>
          <div className="h-2/5 w-full flex flex-col justify-around items-center border-t border-abraBlue border-opacity-5">
            <div className="flex w-full h-1/2 justify-around items-center">
              <div
                id="weather-data-point"
                className="w-2/5 h-4/5 bg-primary rounded-lg flex flex-col items-center justify-around"
              >
                <div className="flex items-center w-full justify-center gap-2">
                <p className="text-xl font-light">Humidity</p>
                <img className="w-6" src={Drops} alt="humidity icon" />
                </div>
                <p className="font-light text-xl">{currentWeather && currentWeather.Humidity}%</p>
              </div>
              <div
                id="weather-data-point"
                className="w-2/5 h-4/5 bg-primary rounded-lg flex flex-col items-center justify-around"
              ></div>
            </div>
            <div className="flex w-full h-1/2 justify-around items-center">
              <div
                id="weather-data-point"
                className="w-2/5 h-4/5 bg-primary rounded-lg flex flex-col items-center justify-around"
              >
                <div className="flex items-center w-full justify-center gap-2">
                <p className="text-xl font-light">UV index</p>
                <img className="w-6" src={Sun} alt="uv index icon" />
                </div>
                <p className="font-light text-xl">{currentWeather && currentWeather.UVindex}</p>
              </div>
              <div
                id="weather-data-point"
                className="w-2/5 h-4/5 bg-primary rounded-lg flex flex-col items-center justify-around"
              >
                <div className="flex items-center w-full justify-center gap-2">
                <p className="text-xl font-light">Wind Speed</p>
                <img className="w-6" src={Wind} alt="wind speed icon" />
                </div>
                <p className="font-light text-xl">{currentWeather && currentWeather.WindSpeed.Metric.Value}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="right-section"
        className="w-full md:w-3/4 h-full md:pl-4 flex flex-col gap-4"
      >
        <Chart />

        <div
          id="forecast-container"
          className="w-full h-2/5 rounded-lg bg-white"
        ></div>
      </section>
    </main>
  );
};

export default Home;
