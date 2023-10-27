import { createSlice } from "@reduxjs/toolkit";

const weatherForecastSlice = createSlice({
  name: "weatherForecast",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchWeatherForecastStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherForecastSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchWeatherForecastFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchWeatherForecastStart,
  fetchWeatherForecastSuccess,
  fetchWeatherForecastFailure,
} = weatherForecastSlice.actions;
export default weatherForecastSlice.reducer;
