import React, { useEffect, useState } from "react";
import { faEnvelope, faL } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header({ setActiveSection }) {
  const [isMenuOpen, toggleMenu] = useState(false);

  const openMenu = () => {
    toggleMenu(!isMenuOpen);
  };
  
  return (
    <nav className=" flex flex-row bg-green-600 bg-opacity-50 w-full">
      <div className="flex justify-start md:hidden ml-10">
        <button onClick={openMenu} className="text-white text-4xl">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <div
        className={`md:hidden  ${
          isMenuOpen ? "flex flex-col bg-green-600 opacity-50 p-5" : "hidden"
        }`}
      >
        <a href="">test 1</a>
        <a href="">Test 2</a>
      </div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          <ul className="md:flex space-x-4 hidden">
            <li className="mr-4">
              <a
                href="#section1"
                className="bg-blue-00 bg-opacity-50 text-white rounded-md px-3 py-2 text-xl font-medium hover:bg-white hover:text-green-600 hover:transition-all duration-300"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="mr-4">
              <a
                href="#section2"
                className="bg-blue-00 bg-opacity-50 text-white rounded-md px-3 py-2  text-xl font-medium hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                About Me
              </a>
            </li>
            <li className="mr-4">
              <a
                href="#section3"
                className="bg-blue-00 bg-opacity-50 text-white rounded-md px-3 py-2  text-xl font-medium hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li className="mr-4">
              <a
                href="#section4"
                className="bg-blue-00 bg-opacity-50 text-white rounded-md px-3 py-2  text-xl font-medium hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="index.jsx"
                className="bg-blue-00 bg-opacity-50 text-white rounded-md px-3 py-2 text-xl font-medium hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Experience
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
