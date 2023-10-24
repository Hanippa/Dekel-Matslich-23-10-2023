import logo from './logo.svg';
import './App.css';
import { fetchCurrentWeather, fetchWeatherForecast } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect , useState } from 'react';

function App() {

  const currentWeather = useSelector((state) => state.currentWeather.data);
  const currentWeatherLoading = useSelector((state) => state.currentWeather.loading);
  const currentWeatherError = useSelector((state) => state.currentWeather.error);

  const weatherForecast = useSelector((state) => state.weatherForecast.data);
  const weatherForecastLoading = useSelector((state) => state.weatherForecast.loading);
  const weatherForecastError = useSelector((state) => state.weatherForecast.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentWeather(100));
    dispatch(fetchWeatherForecast(100));
  }, [dispatch]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          currentWeather && currentWeather[0].WeatherText
        }
      </header>
    </div>
  );
}

export default App;
