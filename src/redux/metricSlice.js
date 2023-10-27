import { createSlice } from "@reduxjs/toolkit";

const metricSlice = createSlice({
  name: "metric",
  initialState: {
    metric: true,
  },
  reducers: {
    setMetric: (state, action) => {
      state.metric = action.payload;
    },
  },
});

export const { setMetric } = metricSlice.actions;

export const selectMetric = (state) => state.metric.metric;

export default metricSlice.reducer;
