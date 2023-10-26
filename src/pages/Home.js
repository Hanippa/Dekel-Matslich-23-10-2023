import React, { useEffect, useState } from 'react';
import getCurrentTime from '../helperFunctions/getCurrentTime'
const Home = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
   <main className="font-rubik text-center bg-background w-screen h-screenNav flex flex-col md:flex-row p-8 gap-4 md:gap-0">

    <section id="left-section" className="w-full md:w-1/4 h-full flex flex-col gap-4">

      <div id="search" className="w-full h-16 bg-red-200 rounded-lg">

      </div>
    <div id="details-container" className="w-full h-full rounded-lg bg-red-200">
    <h2 className="text-4xl">Tel Aviv</h2>
    <p className="text-2xl font-light">{currentTime}</p>
    <div className="flex w-full justify-center items-center">
      <img className="w-52" src={require("../assets/weather-icons/1.png")} alt="weather icon"/>
      <p className="text-9xl">27°</p>
    </div>
    </div>
    </section>

    <section id="right-section" className="w-full md:w-3/4 h-full md:pl-4 flex flex-col gap-4">

    <div id="chart-container" className="w-full h-3/5 rounded-lg bg-red-200">

    </div>

    <div id="forecast-container" className="w-full h-2/5 rounded-lg bg-red-200">

    </div>
    </section>

   </main>
  );
};

export default Home;
