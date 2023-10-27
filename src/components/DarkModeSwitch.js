import React, { useState, useEffect } from "react";
import Moon from "../assets/utility-icons/moon.svg";
import Sun from "../assets/utility-icons/sun.svg";
function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkMode(savedDarkMode === "true");
      document.body.classList.toggle("dark", savedDarkMode === "true");
    }
  }, []);
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
  };

  return (
    <div className="flex justify-center items-center gap-2 mx-8">
      <img className="dark:invert w-7" src={Sun} alt="light mode icon" />
      <div className="-mb-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          checked={darkMode}
          onChange={toggleDarkMode}
          type="checkbox"
          value={darkMode}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-abraBlue dark:peer-focus:ring-abraBlue rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-abraOrange"></div>
      </label>
      </div>
      <img className="dark:invert w-7" src={Moon} alt="dark mode icon" />
    </div>
  );
}

export default DarkModeSwitch;
