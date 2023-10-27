import Logo from "../assets/Logo.png";
import AbraShape1 from "../assets/abra-shape-1.png";
import AbraShape2 from "../assets/abra-shape-2.png";
import { NavLink } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";
const NavBar = () => {
  const handleShowMenu = () => {
    document.getElementById("menu").classList.toggle("hidden");
  };

  return (
    <nav id="navbar" className="w-full relative h-14 flex items-center bg-white dark:bg-darkSecondary">
      <div className="px-4 border-none relative border-gray-200 mx-auto flex w-full justify-between items-center">
        <NavLink
          to={"/"}
          className="flex justify-center items-center font-rubik font-light text-xl h-full cursor-pointer"
        >
          <img className="w-20 px-4" src={Logo} alt="abra weather logo" />
          <p className="text-2xl dark:text-white">abra weather</p>
        </NavLink>
        <div
          id="menu"
          className="absolute left-0 md:relative md:w-auto border md:rounded-none items-center md:py-0 py-5 md:shadow-none shadow-xl border-gray-200 md:border-transparent w-full z-40 md:flex md:bg-transparent md:top-auto top-0 md:mt-0 mt-14 bg-white dark:bg-darkSecondary hidden"
        >
                <DarkModeSwitch/>
          <nav className="md:space-x-6 lg:space-x-6 flex md:flex-row flex-col h-full font-medium">
            <NavLink to={"/"} className="group flex justify-center items-center cursor-pointer">
                <p className="font-rubik font-light text-xl z-10 dark:text-white">Home</p>
              <img
                className="w-9 absolute opacity-0 group-hover:opacity-25 transition-opacity duration-300 ease-in-out"
                src={AbraShape1}
                alt="hover decor shape"
              />
            </NavLink>
          </nav>
          <div className="w-1 border-l border-gray-200 h-5 md:ml-6 lg:ml-10" />

          <div className="h-full font-medium flex items-center md:flex-row flex-col md:pl-3 lg:pl-3 mx-3"></div>
          <NavLink to={"/favorites"} className="group flex justify-center items-center cursor-pointer">
              <p className="font-rubik font-light text-xl z-10 dark:text-white">Favorites</p>
            <img
              className="w-9 absolute opacity-0 group-hover:opacity-25 transition-opacity duration-300 ease-in-out"
              src={AbraShape2}
              alt="hover decor shape"
            />
          </NavLink>
        </div>
        <div
          onClick={handleShowMenu}
          className="md:hidden mx-4 select-none block cursor-pointer p-1.5 rounded-md dark:invert"
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6H20"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
