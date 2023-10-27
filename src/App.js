import { fetchCurrentWeather, fetchWeatherForecast } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";

function App() {
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const currentWeatherLoading = useSelector(
    (state) => state.currentWeather.loading
  );
  const currentWeatherError = useSelector(
    (state) => state.currentWeather.error
  );
  const weatherForecastLoading = useSelector(
    (state) => state.weatherForecast.loading
  );
  const weatherForecastError = useSelector(
    (state) => state.weatherForecast.error
  );
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [dispatchLocation, setDispatchLocation] = useState({
    key: "215854",
    city: "Tel Aviv, Israel",
  });

  const getUserGeolocation = () => {
    toast.loading('Loading...' , {id : 'geoloading'});
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          toast.dismiss('geoloading')
          toast.error("Geolocation error");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser");
    }
  };

  useEffect(() => {
    getUserGeolocation();
  }, []);

  useEffect(() => {
    if (location.latitude || location.longitude) {
      fetch(
        `${BASE_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${location.latitude},${location.longitude}`
      )
        .then((response) => {
          if (!response.ok) {
            toast.error("failed to fetch your location");
          }
          return response.json();
        })
        .then((locationData) => {
          setDispatchLocation({
            key: locationData.Key,
            city: `${locationData.EnglishName}, ${locationData.Country.EnglishName}`,
          });
        });
    }
  }, [location]);

  useEffect(() => {
    dispatch(fetchCurrentWeather(dispatchLocation.key, dispatchLocation.city));
    dispatch(fetchWeatherForecast(dispatchLocation.key));
  }, [dispatchLocation]);

  useEffect(() => {
    if (weatherForecastLoading) {
      const loadingToast = toast.loading("Loading weather forecast...", {
        duration: 0,
        icon: "🌨",
      });
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
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
