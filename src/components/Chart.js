import React from "react";
import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Chart = () => {
    const weatherForecast = useSelector((state) => state.weatherForecast.data);
  return (
    <div
      id="chart-container"
      className="w-full h-3/5 rounded-lg bg-white dark:bg-darkSecondary flex justify-center items-end"
    >
      <ResponsiveContainer width="90%" height="60%">
        <AreaChart
          width={500}
          height={400}
          data={weatherForecast}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="Day" />
          <Tooltip />
          <Area type="monotone" dataKey="Temperature" stroke="#121F3F" fill="#F2F8FF" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
