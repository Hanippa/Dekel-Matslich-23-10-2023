import React from 'react'
import { useSelector } from "react-redux";
import getReadableDate from '../helperFunctions/dateFunctions/getReadableDate';

export const Forecast = () => {
    const weatherForecast = useSelector((state) => state.weatherForecast.data);
  return (
    <div
    id="forecast-container"
    className="flex justify-around items-center w-full h-2/5 rounded-lg bg-white dark:bg-darkSecondary"
  >

{weatherForecast && weatherForecast.map((forecast , index) => {
        return <div key={index} className='rounded-xl bg-primary dark:bg-darkPrimary h-5/6 w-1/6 flex flex-col justify-around items-center p-4'>
            <p className='text-lg font-light dark:text-white'>{getReadableDate(forecast.Date)}</p>
            <img alt='forecast icon' className="w-24 drop-shadow-sm" src={require(`../assets/weather-icons/${forecast.iconNumber}.png`)}/>
            <p className='text-lg font-light dark:text-white'>{forecast.Text}</p>
            <p className='text-xl dark:text-white'>{Math.floor(forecast.Temperature)}°</p>
        </div>
    })}
  </div>
  )
}
