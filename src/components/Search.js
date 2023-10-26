import React from "react";
import { useState, useEffect } from "react";
import {useDispatch } from "react-redux";
import searchIcon from "../assets/utility-icons/search.svg";
import { fetchCurrentWeather } from "../redux/actions";
export const Search = () => {
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);

  const serachInput = document.getElementById("search-input");
  const [searchInputFocused, setSearchInputFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const dispatch = useDispatch();

  const handleInputFocus = () => {
    setSearchInputFocused(true);
  };

  const handleInputBlur = () => {
    setSearchInputFocused(false);
  };

  const handleOptionSelected = (option) => {
    dispatch(fetchCurrentWeather(option.Key , option.AdministrativeArea.LocalizedName));
  };

  useEffect(() => {
    if (searchQuery) {
      fetch(
        `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchQuery}`
      )
        .then((res) => res.json())
        .then((autocomplete) => {
          setAutoCompleteOptions(autocomplete);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setAutoCompleteOptions([]);
    }
  }, [searchQuery]);

  return (
    <div className="w-full h-16 relative flex items-center">
      <img
        className="absolute right-4 w-7 m-auto bg-white cursor-pointer z-20"
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
        className="text-2xl p-8 font-thin w-full h-full rounded-lg outline-none z-10"
      />
      {autoCompleteOptions?.length > 0 && searchInputFocused && (
        <div className="w-full h-fit bg-white rounded-lg absolute top-14 drop-shadow-md p-8 pb-0">
          {autoCompleteOptions.map((option , index) => {
            return (
              <div key={index} onMouseDown={() => handleOptionSelected(option)} className="p-4 border-b last:border-b-0 border-abraBlue border-opacity-10 cursor-pointer">
                <p className="text-xl">
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
