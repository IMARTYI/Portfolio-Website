import React, { useEffect } from "react";
import Header from "../components/header";
import AboutMe from "./about";
import Pastprojects from "./port";
import mainPhoto from "../assets/IMG_0772.jpg";
import Education from "./education";

function Intro() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <html lang="en" className="!scroll-smooth">
      <div lang="en" className="!scroll-smooth font-sans antialiased">
        <div className="fixed w-full shadow-md z-20">
          <Header />
        </div>

        <section
          className="flex flex-col xl:flex-row items-center justify-center min-h-screen"
          id="home"
        >
          <div className="container flex flex-col xl:flex-row items-center justify-center">
            {/* Text Section */}
            <div className="justify-center text-center xl:text-left xl:w-1/2 xl:pl-16 animate-fadeSlideIn">
              <p className="text-gray-300 font-serif text-xl md:text-3xl mt-4">
                Hello, My name is
              </p>
              <h1 className="text-white font-bold font-serif text-3xl md:text-9xl mb-8">
                David Martin.
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
                className="md:rounded-full object-cover w-2/3 h-1/2 lg:w-2/3 xl:w-2/3 aspect-square rounded-md"
                src={mainPhoto}
                alt="A picture of David Martin"
              />
            </div>
          </div>
        </section>

        <section
          className=" mb-20 w-full fade-in opacity-0 translate-y-10 transition-opacity duration-700 ease-out pt-20 "
          id="aboutME"
        >
          <AboutMe />
        </section>

        <section
          className="  w-full bg-#D4CBB5 flex flex-col space-y-5  border-green-600 border-solid fade-in opacity-0 translate-y-10 transition-opacity duration-700 ease-out items-center pt-28 "
          id="education"
        >
          <h1 className="text-4xl font-serif font-bold text-white text-center">
            Education
          </h1>
          <Education />
        </section>

        <section
          className="container my-24 mx-auto md:px-6 fade-in opacity-0 translate-y-10 transition-opacity duration-700 ease-out pt-20"
          id="pastProjects"
        >
          <div className="">
            <h1 className="mb-12 text-center text-4xl font-serif font-bold text-white">
              Past Projects
            </h1>
            <div className="flex justify-center w-full items-center">
              <Pastprojects />
            </div>
          </div>
        </section>
      </div>
    </html>
  );
}

export default Intro;
