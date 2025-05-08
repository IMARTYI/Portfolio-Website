import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Header from "./header";
import AboutMe from "../pages/about";

function Intro() {
  const [isMenuOpen, toggleMenu] = useState(false);

  const openMenu = () => {
    toggleMenu(!isMenuOpen);
  };

  return (
    <nav className="flex flex-row w-full z-20 shadow-xl fixed top-0 left-0">
      {/* Mobile Menu Button */}
      <div className="flex w-full justify-end md:hidden ml-10">
        <button onClick={openMenu} className="text-white text-4xl">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`md:hidden ${
          isMenuOpen
            ? "w-full absolute mt-16 flex flex-col justify-end z-20 p-8 space-y-3 shadow-lg"
            : "hidden"
        }`}
      >
        <a href="#home" className="text-white font-serif">
          Home
        </a>
        <a href="#aboutME" className="text-white font-serif">
          About Me
        </a>
        <a href="#education" className="text-white font-serif">
          Education
        </a>
        <a href="#pastProjects" className="text-white font-serif">
          Past Projects
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  <div className="flex justify-center h-16 items-center">
    <ul className="md:flex space-x-4 hidden">
      <li className="mr-4">
        <a
          href="#home"
          className="bg-opacity-50 text-white rounded-md px-3 py-2 text-xl font-medium hover:text-green-600 transition-all duration-300 relative group"
        >
          Home
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full" 
                style={{ bottom: "-3px" }}></span>
        </a>
      </li>
      <li className="mr-4">
        <a
          href="#aboutME"
          className="bg-opacity-50 text-white rounded-md px-3 py-2 text-xl font-medium hover:text-green-600 transition-all duration-300 relative group"
        >
          About Me
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full" 
                style={{ bottom: "-3px" }}></span>
        </a>
      </li>
      <li className="mr-4">
        <a
          href="#pastProjects"
          className="bg-opacity-50 text-white rounded-md px-3 py-2 text-xl font-medium hover:text-green-600 transition-all duration-300 relative group"
        >
          Projects
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full" 
                style={{ bottom: "-3px" }}></span>
        </a>
      </li>
      <li className="mr-4">
        <a
          href="#education"
          className="bg-opacity-50 text-white rounded-md px-3 py-2 text-xl font-medium hover:text-green-600 transition-all duration-300 relative group"
        >
          Education
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full" 
                style={{ bottom: "-3px" }}></span>
        </a>
      </li>
    </ul>
  </div>
</div>
      </div>
    </nav>
  );
}

export default Intro;
