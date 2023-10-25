import { fetchCurrentWeather, fetchWeatherForecast } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentWeather(100));
    dispatch(fetchWeatherForecast(100));
  }, [dispatch]);

  return <div className="App">
    <NavBar/>
    <h1 className="text-9xl text-red-400">hello world</h1>
  </div>;
}

export default App;
