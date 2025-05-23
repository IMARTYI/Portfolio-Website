import React, { useState } from "react";
import { FaLaptopCode, FaLanguage, FaNetworkWired } from "react-icons/fa";
import { DiJava, DiPython, DiNodejs, DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import { SiFlask, SiJavascript, SiMysql } from "react-icons/si";


function AboutMe() {
  const [isWebDevMenuOpen, setWebDevMenuOpen] = useState(false);
  const [isNlpMenuOpen, setNlpMenuOpen] = useState(false);
  const [isNetworkingOpen, setNetworkingOpen] = useState(false);
  const [isFutureGoalsOpen, setFutureGoalsOpen] = useState(false);

  const toggleMenu = (menuSetter, menuState) => {
    menuSetter(!menuState);
  };

  return (
    <div>
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Profile Section */}
          <div className="col-span-1 md:col-span-1 bg-green-600 bg-opacity-50 shadow-lg rounded-lg p-6 border-white border ">
            <div className="flex flex-col items-center">
              <img
                src="david3.jpg"
                alt="David Martin"
                className="w-32 h-32 bg-gray-300 rounded-full mb-4"
              />
              <h1 className="text-xl text-white font-bold">David Martin</h1>
              
            </div>
            <hr className="my-6 border-t border-gray-800" />
            <div>
              <h3 className="text-white uppercase font-bold tracking-wider mb-2">
                Technical Skills
              </h3>
              <ul className="text-white space-y-2 font-semibold text-lg">
                <li className="flex items-center gap-2">
                  <DiJava className="text-yellow-500" /> Java
                </li>
                <li className="flex items-center gap-2">
                  <DiPython className="text-blue-400" /> Python
                </li>
                <li className="flex items-center gap-2">
                  <DiNodejs className="text-green-400" /> Node.js
                </li>
                <li className="flex items-center gap-2">
                  <DiReact className="text-blue-500" /> React
                </li>
                <li className="flex items-center gap-2">
                  <SiFlask className="text-gray-300" /> Flask
                </li>
                <li className="flex items-center gap-2">
                  <SiMysql className="text-blue-600" /> SQL
                </li>
                <li className="flex items-center gap-2">
                  <DiHtml5 className="text-orange-500" /> HTML
                </li>
                <li className="flex items-center gap-2">
                  <DiCss3 className="text-blue-400" /> CSS
                </li>
                <li className="flex items-center gap-2">
                  <SiJavascript className="text-yellow-300" /> JavaScript
                </li>
              </ul>
            </div>
          </div>

          {/* About Me Section */}
          <div className="col-span-1 md:col-span-3 bg-green-800  shadow-lg rounded-lg p-6 border-white border ">
            <h2 className="text-white font-bold text-xl font-sarif mb-4 ">About Me</h2>
            <p className="text-white">
              Welcome to my website! My name is David Martin, and I am a
              Computer Science student at Brock University. I began my
              programming journey at the age of 18 during my final year of high
              school. Since then, I’ve been passionate about exploring the vast
              and exciting world of Computer Science while honing my practical
              coding skills. Below, you’ll find my interests and the projects I
              have completed or am currently working on. Enjoy your stay!
            </p>

            <h2 className="text-white text-xl font-bold mt-6 mb-4">Interests</h2>

            {/* Interest - Web Development */}
            <div className="mb-6">
              <button
                onClick={() =>
                  toggleMenu(setWebDevMenuOpen, isWebDevMenuOpen)
                }
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-2">
                  <FaLaptopCode className="text-white" />
                  <h3 className="text-white font-bold">Web Development</h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-white transition-transform duration-300 ${
                    isWebDevMenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-500 transform ${
                  isWebDevMenuOpen
                    ? "max-h-40 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-4"
                } overflow-hidden`}
              >
                <p className="text-white text-xs md:text-base mt-2">
                  My journey in web development began with creating a simple
                  website using just HTML. From there, I explored CSS,
                  JavaScript, and modern frameworks like React and Tailwind CSS
                  to build dynamic and visually appealing interfaces. I’ve also
                  worked on backend technologies like Flask and Express.js to
                  create robust web applications. I’m passionate about staying
                  updated with cutting-edge tools in this ever-evolving field.
                </p>
              </div>
            </div>

            {/* Interest - NLP */}
            <div className="mb-6">
              <button
                onClick={() => toggleMenu(setNlpMenuOpen, isNlpMenuOpen)}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-2">
                  <FaLanguage className="text-white" />
                  <h3 className="text-white font-bold">
                    Natural Language Processing (NLP)
                  </h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-white transition-transform duration-300 ${
                    isNlpMenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-500 transform ${
                  isNlpMenuOpen
                    ? "max-h-40 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-4"
                } overflow-hidden`}
              >
                <p className="text-white text-xs md:text-base mt-2">
                  NLP fascinates me due to its potential in bridging the gap
                  between humans and machines. I’ve worked on projects involving
                  sentiment analysis, text classification, and fine-tuning
                  transformer models like BERT to perform emotion recognition
                  and irony detection. Exploring AI’s ability to process and
                  understand language continues to drive my curiosity.
                </p>
              </div>
            </div>

            {/* Interest - Computer Networking */}
            <div className="mb-6">
              <button
                onClick={() =>
                  toggleMenu(setNetworkingOpen, isNetworkingOpen)
                }
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-2">
                  <FaNetworkWired className="text-white" />
                  <h3 className="text-white font-bold">Computer Networking</h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-white transition-transform duration-300 ${
                    isNetworkingOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-500 transform ${
                  isNetworkingOpen
                    ? "max-h-40 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-4"
                } overflow-hidden`}
              >
                <p className="text-white text-xs md:text-base mt-2">
                  With a strong foundation in networking,
                  I am intrigued by how interconnected systems communicate
                  efficiently and securely. I’ve explored protocols, socket
                  programming, and network troubleshooting, which have deepened
                  my understanding of this field in computer science.
                </p>
              </div>
            </div>

            {/* Future Goals Section */}
            <div className="mb-6">
              <button
                onClick={() =>
                  toggleMenu(setFutureGoalsOpen, isFutureGoalsOpen)
                }
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-2">
                 
                  <h3 className="text-white font-bold">
                    Future Goals: Skateboarding Trick Recognition App
                  </h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-white transition-transform duration-300 ${
                    isFutureGoalsOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-500 transform ${
                  isFutureGoalsOpen
                    ? "max-h-40 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-4"
                } overflow-hidden`}
              >
                <p className="text-white text-xs md:text-base mt-2">
                  One of my main goals is to build an AI-powered skateboarding
                  trick recognition app. This app, called <span className="italic">Skeptic</span>, 
                  will allow users to upload videos of their tricks, which will then be 
                  evaluated using computer vision techniques. Friends can provide feedback 
                  on whether the trick was successfully landed, and points will be awarded 
                  for successful tricks. This app combines my passion for skateboarding 
                  and my love for programming, showcasing how technology can enhance sports 
                  and community engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
