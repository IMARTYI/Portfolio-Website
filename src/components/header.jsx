import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Header from "./header";
import AboutMe from "../pages/about";

function Intro() {
  const [isMenuOpen, toggleMenu] = useState(false);

  const openMenu = () => {
    toggleMenu(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const handleMenuClick = (e, id) => {
    e.preventDefault();
    toggleMenu(false);
    document.body.style.overflow = 'unset';
    
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex flex-row w-full z-50 shadow-xl fixed top-0 left-0">
      {/* Mobile Menu Button */}
      <div className="flex w-full justify-end md:hidden">
        <button 
          onClick={openMenu} 
          className={`text-white text-3xl p-4 z-50 transition-all duration-300 ${
            isMenuOpen ? 'rotate-90' : ''
          }`}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 md:hidden transition-all duration-300 
          ${isMenuOpen ? 'visible bg-black/30 backdrop-blur-md' : 'invisible'}`}
        onClick={() => toggleMenu(false)}
      />

      {/* Mobile Menu Content */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-black/50 backdrop-blur-xl 
          md:hidden flex flex-col justify-center items-center transform transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col space-y-8 text-center">
          {/*
            { href: '#home', text: 'Home' },
            { href: '#aboutME', text: 'About Me' },
            { href: '#experience', text: 'Experience' },
            { href: '#education', text: 'Education' },
            { href: '#pastProjects', text: 'Projects' }
          ].map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleMenuClick(e, item.href)}
              className="relative text-white text-2xl font-space group"
              style={{
                opacity: 0,
                animation: isMenuOpen 
                  ? `fadeIn 0.3s ease-out forwards ${index * 0.1}s` 
                  : 'none'
              }}
            >
              <span className="relative z-10">{item.text}</span>
              <span className="absolute inset-0 bg-white/10 rounded-lg opacity-0 
                group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
          */}
          <a
            href="#home"
            onClick={(e) => handleMenuClick(e, "#home")}
            className="text-white text-3xl  hover:text-green-500 transition-colors duration-300 font-serif z-20"
          >
            Home
          </a>
           <a
            href="#home"
            onClick={(e) => handleMenuClick(e, "#Experience")}
            className="text-white text-3xl  hover:text-green-500 transition-colors duration-300 font-serif z-20"
          >
            Experience
          </a>
          <a
            href="#aboutME"
            onClick={(e) => handleMenuClick(e, "#aboutME")}
            className="text-white text-3xl  hover:text-green-500 transition-colors duration-300 font-serif"
          >
            About Me
          </a>
          <a
            href="#pastProjects"
            onClick={(e) => handleMenuClick(e, "#aboutME")}
            className="text-white text-3xl  hover:text-green-500 transition-colors duration-300 font-serif"
          >
            Projects
          </a>
         
            <a
            href="#education"
            onClick={(e) => handleMenuClick(e, "#education")}
            className="text-white text-3xl hover:text-green-500 transition-colors duration-300 font-serif"
          >
            Education
          </a>
          
        
        </nav>
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
          href="#Experience"
          className="bg-opacity-50 text-white rounded-md px-3 py-2 text-xl font-medium hover:text-green-600 transition-all duration-300 relative group"
        >
          Experience
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
