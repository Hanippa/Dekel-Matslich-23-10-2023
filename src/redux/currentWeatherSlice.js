import { createSlice } from "@reduxjs/toolkit";

const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchCurrentWeatherStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCurrentWeatherSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchCurrentWeatherFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCurrentWeatherStart, fetchCurrentWeatherSuccess, fetchCurrentWeatherFailure } =
currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
