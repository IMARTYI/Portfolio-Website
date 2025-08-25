import React, { useEffect } from "react";
import Header from "../components/header";
import AboutMe from "./about";
import Pastprojects from "./port";
import mainPhoto from "../assets/IMG_0772.jpg";
import Education from "./education";
import Background from "../components/background";
import { useIntersectionObserver } from "../components/fadeIn";
import { Experience } from "../components/Experience";

function Intro() {
  useIntersectionObserver();

  return (

    <html lang="en" className="!scroll-smooth">
      <Background />
      <div lang="en" className="!scroll-smooth font-sans antialiased">
        <div className="fixed w-full shadow-md z-20">
          <Header />
        </div>

        <section
          className="flex flex-col xl:flex-row items-center justify-center min-h-screen "
          id="home"
        >
         
          <div className="container flex flex-col xl:flex-row items-center justify-center">
            {/* Text Section */}
            <div className="justify-center text-center xl:text-left xl:w-1/2 xl:pl-16 animate-fadeSlideIn">
              <p className="text-gray-300 font-sans text-xl md:text-3xl mt-4">
                Hello, My name is
              </p>
              <h1 className="text-white font-bold font-serif text-3xl md:text-9xl mb-8">
                 David Martin
              </h1>
              <p className="text-gray-300 text-lg md:text-2xl px-3">
                I'm a Software Engineer passionate about exploring and building
                with the latest technologies.
              </p>

              {/* Social Links */}
              <div className="pt-5 text-xl md:text-4xl">
                <ul className="flex justify-center xl:justify-start space-x-10">
                  <li className="text-white hover:text-green-600">
                    <a href="mailto:david2020martin@gmail.com">
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                  </li>
                  <li className="text-white hover:text-green-600">
                    <a href="https://github.com/IMARTYI">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li className="text-white hover:text-green-600">
                    <a href="https://www.linkedin.com/in/david-martin-a65351243/">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Section */}
            <div
              className="flex justify-center items-center mt-8 xl:mt-0 xl:w-1/2 animate-fadeSlideIn opacity-0"
              style={{
                animationDelay: "0.5s",
              }} /* Optional delay for staggered effect */
            >
              <img
                className="md:rounded-full object-cover w-2/3 h-2/3 aspect-square lg:w-2/3 xl:w-2/3  rounded-full  "
                src={mainPhoto}
                alt="A picture of David Martin"
              />
            </div>
          </div>
        </section>
        {/* About Section */}
        <section
          className="scroll-animate opacity-0 -translate-y-10 transition-all duration-700 mb-20 w-full pt-20"
          id="Experience"
        >
          <h1 className="mb-12 text-center text-4xl font-serif font-bold text-white">
              Experience
            </h1>
          <Experience />
        </section>

        {/* About Section */}
        <section
          className="scroll-animate opacity-0 -translate-y-10 transition-all duration-700 mb-20 w-full pt-20"
          id="aboutME"
        >
          <AboutMe />
        </section>

        {/* Projects Section */}
        <section
          className="scroll-animate opacity-0 -translate-y-10 transition-all duration-700 my-24 md:px-6 pt-20 w-full items-center"
          id="pastProjects"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="mb-12 text-center text-4xl font-serif font-bold text-white">
              Projects
            </h1>
            <div className="flex justify-center items-center">
              <Pastprojects />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          className="scroll-animate opacity-0 -translate-y-10 transition-all duration-700 w-full flex flex-col space-y-5 items-center pb-32"
          id="education"
        >
          <h1 className="text-4xl font-serif font-bold text-white text-center">
            Education
          </h1>
          <Education />
        </section>
      </div>
    </html>
  );
}

export default Intro;
