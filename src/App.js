import { fetchCurrentWeather, fetchWeatherForecast } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
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
    dispatch(fetchCurrentWeather(215854, "Tel Aviv, Israel"));
    dispatch(fetchWeatherForecast(215854));
  }, [dispatch]);

  useEffect(() => {
    if (weatherForecastLoading) {
      const loadingToast = toast.loading("Loading weather forecast...", {
        duration: 0,
        icon: "🌨",
      });
      return () => toast.dismiss(loadingToast.id);
    } else {
      toast.dismiss("loading-toast");
    }
  }, [weatherForecastLoading]);

  useEffect(() => {
    if (currentWeatherLoading) {
      const loadingToast = toast.loading("Loading current weather...", {
        duration: 0,
        icon: "🌬",
      });
      return () => toast.dismiss(loadingToast.id);
    } else {
      toast.dismiss("loading-toast");
    }
  }, [currentWeatherLoading]);

  useEffect(() => {
    toast.error("Failed to load weather forecast 😓");
  }, [weatherForecastError]);

  useEffect(() => {
    toast.error("Failed to load current weather 😟");
  }, [currentWeatherError]);

  return (
    <>
      <NavBar />
      <Home />
      <Toaster />
    </>
  );
}

export default App;
