import wordLogo from "../assets/wordLogo.png";
import { useState } from "react";
const NavBar = () => {
  const handleShowMenu = () => {
    document.getElementById("menu").classList.toggle("hidden");
  };

  return (
    <div id="navbar" className="w-full relative h-14 flex items-center ">
      <div className="px-4 border-none relative border-gray-200 mx-auto flex w-full justify-between items-center">
        <a to={"/"} className="flex font-extrabold text-xl">
          <img className="w-44 px-4" src={wordLogo} alt="I-Checkin word logo" />
        </a>
        <div
          id="menu"
          className="absolute left-0 md:relative md:w-auto border md:rounded-none items-center md:py-0 py-5 md:shadow-none shadow-xl border-gray-200 md:border-transparent w-full z-20 md:flex md:bg-transparent md:top-auto top-0 md:mt-0 mt-14 bg-white hidden"
        >
          <nav className="md:space-x-6 lg:space-x-6 flex md:flex-row flex-col h-full font-medium">
             <p className="">Home</p>
             
          </nav>
          <div className="w-1 border-l border-gray-200 h-5 md:ml-6 lg:ml-10" />
         
          <div className="h-full font-medium flex items-center md:flex-row flex-col md:pl-3 lg:pl-3 mx-3">
         
          </div>
          <p className="">Favorites</p>
        </div>
        <div
          onClick={handleShowMenu}
          className="md:hidden mx-4 select-none block cursor-pointer hover:bg-gray-100 p-1.5 rounded-md"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H20"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 6H20"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
