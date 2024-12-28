import React, { useEffect } from "react";
import Header from "./header";
import AboutMe from "./about";
import swiper from "swiper";
import Pastprojects from "./port";
import mainPhoto from "./assets/IMG_0772.jpg"

function Intro() {

  return (
    <html lang="en" className="!scroll-smooth">
    <div lang="en" className="!scroll-smooth font-sans antialiased">
        <Header />
        <section className="flex flex-col xl:flex-row items-center justify-center min-h-screen">
  <div className="container flex flex-col xl:flex-row items-center justify-center">
    {/* Text Section */}
    <div className="  justify-center text-center xl:text-left xl:w-1/2 xl:pl-16">
      <p className="text-gray-300 font-serif text-xl md:text-3xl mt-4">
        Hello, My name is
      </p>
      <h1 className="text-white font-bold font-serif text-3xl md:text-9xl mb-8">
        David Martin.
      </h1>
      <p className="text-gray-300 text-lg md:text-2xl">
        I'm an aspiring Software Engineer passionate about exploring and
        building with the latest technologies.
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
    <div className="flex justify-center items-center mt-8 xl:mt-0 xl:w-1/2">
      <img
        className="rounded-full object-cover w-1/2 h-1/2 lg:w-2/3 xl:w-2/3 aspect-square"
        src={mainPhoto}
        alt="A picture of David Martin"
      />
    </div>
  </div>
</section>


<section className="w-full mb-44">
  <AboutMe />
</section>
        
        <div class="container my-24 mx-auto md:px-6 bg">

          <section class="mb-32">
            <h2 class="mb-12 text-center text-4xl font-sarif font-bold text-white">
              Past Projects
            </h2>
            <section className=" flex justify-center w-full items-center">
              <Pastprojects />
            </section>
          </section>
        </div>
      </div>
    </html>
  );
}
export default Intro;
