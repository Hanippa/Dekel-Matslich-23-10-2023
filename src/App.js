import { fetchCurrentWeather, fetchWeatherForecast } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

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
    dispatch(fetchCurrentWeather(215854 , 'Tel Aviv'));
    dispatch(fetchWeatherForecast(215854));
  }, [dispatch]);

  return (
    <>
    <NavBar/>
    <Home/>
    </>
  )
   

}

export default App;
