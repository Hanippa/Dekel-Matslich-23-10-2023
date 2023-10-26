import React, { useEffect, useState } from "react";
import getCurrentTime from "../helperFunctions/getCurrentTime";
import { useSelector} from "react-redux";
import { Search } from "../components/Search";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

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
        <Search/>
        <div
          id="details-container"
          className="w-full h-full rounded-lg bg-white"
        >
          <div className="h-3/5 w-full flex flex-col justify-around">
            <h2 className="text-4xl">{cityName}</h2>
            <p className="text-2xl font-light">{currentTime}</p>
            <div className="flex w-full justify-center items-center">
              <img
                className="w-44"
                src={require("../assets/weather-icons/1.png")}
                alt="weather icon"
              />
              <p className="text-8xl">{currentWeather?.length && Math.floor(currentWeather[0].Temperature.Metric.Value)}°</p>
            </div>
            <p className="text-3xl">feels like 31°</p>
            <p className="text-4xl">scattered clouds</p>
          </div>
          <div className="h-2/5 w-full flex flex-col justify-around items-center">
            <div className="flex w-full h-1/2 justify-around items-center">
              <div
                id="weather-data-point"
                className="w-2/5 h-4/5 bg-primary rounded-lg"
              ></div>
              <div
                id="weather-data-point"
                className="w-2/5 h-4/5 bg-primary rounded-lg"
              ></div>
            </div>
            <div className="flex w-full h-1/2 justify-around items-center">
              <div
                id="weather-data-point"
                className="w-2/5 h-4/5 bg-primary rounded-lg"
              ></div>
              <div
                id="weather-data-point"
                className="w-2/5 h-4/5 bg-primary rounded-lg"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="right-section"
        className="w-full md:w-3/4 h-full md:pl-4 flex flex-col gap-4"
      >
        <div id="chart-container" className="w-full h-3/5 rounded-lg bg-white flex justify-center items-end">
          <ResponsiveContainer width="90%" height="60%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#121F3F"
                fill="#F2F8FF"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div
          id="forecast-container"
          className="w-full h-2/5 rounded-lg bg-white"
        ></div>
      </section>
    </main>
  );
};

export default Home;
