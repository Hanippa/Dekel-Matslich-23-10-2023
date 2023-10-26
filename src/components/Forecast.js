import React from 'react'
import { useSelector } from "react-redux";
import getReadableDate from '../helperFunctions/dateFunctions/getReadableDate';

export const Forecast = () => {
    const weatherForecast = useSelector((state) => state.weatherForecast.data);
    const weatherForecastLoading = useSelector(
      (state) => state.weatherForecast.loading
    );
    const weatherForecastError = useSelector(
      (state) => state.weatherForecast.error
    );
  return (
    <div
    id="forecast-container"
    className="flex justify-around items-center w-full h-2/5 rounded-lg bg-white"
  >

{weatherForecast && weatherForecast.map((forecast , index) => {
        return <div key={index} className='rounded-xl bg-primary h-5/6 w-1/6 flex flex-col justify-around items-center p-4'>
            <p className='text-lg font-light'>{getReadableDate(forecast.Date)}</p>
            <img  className="w-24 drop-shadow-sm" src={require(`../assets/weather-icons/${forecast.iconNumber}.png`)}/>
            <p className='text-lg font-light'>{forecast.Text}</p>
            <p className='text-xl'>{Math.floor(forecast.Temperature)}°</p>
        </div>
    })}
  </div>
  )
}
