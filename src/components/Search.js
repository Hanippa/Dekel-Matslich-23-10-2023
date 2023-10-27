import React from "react";
import { useState, useEffect } from "react";
import {useDispatch } from "react-redux";
import searchIcon from "../assets/utility-icons/search.svg";
import { fetchCurrentWeather, fetchWeatherForecast } from "../redux/actions";
import { toast } from "react-hot-toast";
export const Search = () => {
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);

  const serachInput = document.getElementById("search-input");
  const [searchInputFocused, setSearchInputFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const handleInputFocus = () => {
    setSearchInputFocused(true);
  };

  const handleInputBlur = () => {
    setSearchInputFocused(false);
  };

  const handleOptionSelected = (option) => {
    setSearchQuery('');
    dispatch(fetchCurrentWeather(option.Key , `${option.AdministrativeArea.LocalizedName}, ${option.Country.LocalizedName}`));
    dispatch(fetchWeatherForecast(option.Key));
  };

  useEffect(() => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;
    if (searchQuery) {
      fetch(
        `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchQuery}`
      )
        .then((result) => {
          if(!result.ok){
            toast.error('failed to search 🌧')
          }
          return result.json()}
          )
        .then((autocomplete) => {
          setAutoCompleteOptions(autocomplete);
        })
        .catch((error) => {
          toast.error(error.message)
        });
    } else {
      setAutoCompleteOptions([]);
    }
  }, [searchQuery]);

  return (
    <div className="w-full h-16 relative flex items-center">
      <img
        className="absolute right-4 w-7 m-auto bg-white cursor-pointer z-30 dark:bg-invertedPrimary dark:invert"
        onClick={() => serachInput.focus()}
        src={searchIcon}
        alt="search icon"
      />
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter city name..."
        id="search-input"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className="text-2xl p-8 font-thin dark:bg-darkSecondary bg-white w-full h-full rounded-lg outline-none z-20 dark:text-white"
      />
      {autoCompleteOptions?.length > 0 && searchInputFocused && (
        <div className="w-full h-fit bg-white dark:bg-darkSecondary rounded-lg absolute top-14 drop-shadow-md p-8 pb-0 z-10">
          {autoCompleteOptions.map((option , index) => {
            return (
              <div key={index} onMouseDown={() => handleOptionSelected(option)} className="p-4 border-b last:border-b-0 border-abraBlue dark:border-gray-500 border-opacity-10 cursor-pointer">
                <p className="text-xl dark:text-white ">
                  {option.AdministrativeArea.LocalizedName},
                  {option.Country.LocalizedName}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
