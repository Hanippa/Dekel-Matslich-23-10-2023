import React from "react";
import { selectMetric } from "../redux/metricSlice";
import { useSelector } from "react-redux";
import {useDispatch } from "react-redux";
import { setMetric } from "../redux/metricSlice";

export const UnitToggle = ({cityKey}) => {
    const dispatch = useDispatch();
    const metric = useSelector(selectMetric);

    const handleChangeUnit = () => {
        const newUnit = !metric;
        dispatch(setMetric(newUnit));
    }
  return (
    <div className="absolute left-0 top-2 w-28">
         <div className="flex justify-center items-center gap-2 mx-8">
         <p className="text-sm">F°</p>
      <div >
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          checked={metric}
          onChange={handleChangeUnit}
          type="checkbox"
          value={metric}
          className="sr-only peer"
        />
        <div className="w-9 h-3 bg-abraBlue rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-2 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-abraBlue"></div>
      </label>
      </div>
      <p className="text-sm">C°</p>
    </div>
    </div>
  );
};
